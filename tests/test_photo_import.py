"""Offline importer checks. Synthetic fixtures are never shipped as product photos."""
import contextlib
import hashlib
import importlib.util
import io
import json
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location("photo_import", ROOT / "scripts/import-product-photo.py")
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)


class ImportPhotoTest(unittest.TestCase):
    def test_real_a17_matches_commons_and_webp_orientation(self):
        original = ROOT / "public/images/products/licensed/galaxy-a17-5g-original.jpg"
        self.assertEqual(hashlib.sha1(original.read_bytes()).hexdigest(), "463678a590710bc6d4ef2155b6d6b0adea7349b0")
        with Image.open(original) as image:
            self.assertEqual(image.format, "JPEG")
            image.verify()
        with Image.open(original) as image:
            image.load()
            self.assertEqual(image.size, (4032, 3024))
            self.assertEqual(image.getexif().get(274), 6)
            self.assertEqual(ImageOps.exif_transpose(image).size, (3024, 4032))
        derived = ROOT / "public/images/products/licensed/galaxy-a17-5g.webp"
        with Image.open(derived) as image:
            image.load()
            self.assertEqual(image.format, "WEBP")
            self.assertEqual(image.size, (720, 960))
            self.assertIsNone(image.getexif().get(274))
        self.assertLess(derived.stat().st_size, original.stat().st_size / 10)

    def test_redmi_and_edge_match_commons_checksums_and_decode_as_optimized_webp(self):
        expected = {
            "redmi-note-15-5g": ((1874, 1872), "f26b45512a0f0dd521186231ae366a8c76210a01"),
            "edge-60-pro": ((2723, 5610), "e2dbe88083f7223e45eb3ad0bb36550e8a64ae1e"),
        }
        records = json.loads((ROOT / "src/lib/licensed-product-photos.json").read_text())
        for product_id, (dimensions, sha1) in expected.items():
            with self.subTest(product=product_id):
                record = next(p for p in records if p["productId"] == product_id)
                original = ROOT / f"public/images/products/licensed/{product_id}-original.jpg"
                derived = ROOT / ("public" + record["src"])
                self.assertEqual(hashlib.sha1(original.read_bytes()).hexdigest(), sha1)
                with Image.open(original) as image:
                    self.assertEqual(image.format, "JPEG")
                    image.verify()
                with Image.open(original) as image:
                    image.load()
                    self.assertEqual(ImageOps.exif_transpose(image).size, dimensions)
                with Image.open(derived) as image:
                    image.load()
                    self.assertEqual(image.format, "WEBP")
                    self.assertEqual(image.size, (record["width"], record["height"]))
                    self.assertEqual(max(image.size), 960)
                    self.assertIsNone(image.getexif().get(274))
                self.assertLess(derived.stat().st_size, original.stat().st_size)

    def test_real_a36_jpeg_and_webp_decode_with_correct_orientation_and_size(self):
        original = ROOT / "public/images/products/licensed/galaxy-a36-5g-original.jpg"
        derived = ROOT / "public/images/products/licensed/galaxy-a36-5g.webp"
        with Image.open(original) as image:
            self.assertEqual(image.format, "JPEG")
            image.verify()
        with Image.open(original) as image:
            image.load()
            self.assertEqual(image.size, (6416, 3091))
            self.assertEqual(image.getexif().get(274), 6)
            self.assertEqual(ImageOps.exif_transpose(image).size, (3091, 6416))
        with Image.open(derived) as image:
            image.load()
            self.assertEqual(image.format, "WEBP")
            self.assertEqual(image.size, (462, 960))
            self.assertIsNone(image.getexif().get(274))
        self.assertLess(derived.stat().st_size, original.stat().st_size / 100)

    def test_stages_pending_and_preserves_original_and_derivative_hashes(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            (root / "docs").mkdir()
            (root / "src/lib").mkdir(parents=True)
            (root / "docs/photo-candidates.json").write_bytes((ROOT / "docs/photo-candidates.json").read_bytes())
            registry = root / "src/lib/licensed-product-photos.json"
            registry.write_text("[]")
            fixture = root / "synthetic-test-only.jpg"
            Image.new("RGB", (1800, 1200), "gray").save(fixture)
            args = ["import-product-photo.py", "--product", "redmi-note-15-5g", "--file", str(fixture)]
            with patch.object(module, "ROOT", root), patch("sys.argv", args), contextlib.redirect_stdout(io.StringIO()):
                module.main()
                record = json.loads(registry.read_text())[0]
                self.assertEqual(record["status"], "pending")
                self.assertEqual(record["permissionEvidence"], "")
                self.assertEqual(record["reviewedBy"], "")
                self.assertEqual((record["width"], record["height"]), (960, 640))
                self.assertEqual(record["originalSha256"], hashlib.sha256(fixture.read_bytes()).hexdigest())
                output = root / ("public" + record["src"])
                self.assertEqual(record["sha256"], hashlib.sha256(output.read_bytes()).hexdigest())
                before = registry.read_bytes(), output.read_bytes()
                with contextlib.redirect_stderr(io.StringIO()), self.assertRaises(SystemExit):
                    module.main()
                self.assertEqual(before, (registry.read_bytes(), output.read_bytes()))

    def test_rejects_undocumented_product_before_reading_input(self):
        args = ["import-product-photo.py", "--product", "unverified-model", "--file", "missing.jpg"]
        with patch("sys.argv", args), contextlib.redirect_stderr(io.StringIO()), self.assertRaises(SystemExit):
            module.main()


if __name__ == "__main__":
    unittest.main()
