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
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location("photo_import", ROOT / "scripts/import-product-photo.py")
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)


class ImportPhotoTest(unittest.TestCase):
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
