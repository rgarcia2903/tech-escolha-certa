"""Commercial-permission checks; artificial fixtures stay in temporary directories."""
import copy
import hashlib
import importlib.util
import json
from pathlib import Path
import tempfile
import unittest
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location("commercial_import", ROOT / "scripts/stage-commercial-media.py")
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)


class CommercialImportTest(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        (self.root / "src/lib").mkdir(parents=True)
        (self.root / "src/lib/product-catalog.ts").write_text('product("moto-g86-5g", "Moto G86 5G")')
        (self.root / "src/lib/commercial-product-photos.json").write_text("[]")
        self.source = self.root / "synthetic-test-only.png"
        Image.new("RGBA", (1000, 1500), (0, 0, 0, 0)).save(self.source)
        self.manifest = {"productId": "moto-g86-5g", "kind": "official-render", "author": "Test", "alt": "Test fixture", "sourceUrl": "https://example.com/source", "licenseUrl": "https://example.com/terms", "licenseLabel": "Test permission", "permissionEvidence": "Test only", "originalSha256": hashlib.sha256(self.source.read_bytes()).hexdigest(), "commercialRights": {"rightsHolder": "Test", "evidenceUrl": "https://example.com/permission", "scope": "site-wide-two-store", "hostLocally": True, "convertToWebp": True, "redistributeInRepository": True, "validUntil": None}}

    def test_rejects_store_restricted_and_missing_supplier_permissions_without_writing(self):
        variants = []
        for scope in ["amazon-only", "mercado-livre-only"]:
            manifest = copy.deepcopy(self.manifest)
            manifest["commercialRights"]["scope"] = scope
            variants.append(manifest)
        for field in ["hostLocally", "convertToWebp", "redistributeInRepository"]:
            manifest = copy.deepcopy(self.manifest)
            manifest["commercialRights"][field] = False
            variants.append(manifest)
        for manifest in variants:
            with self.assertRaises(ValueError):
                module.stage(self.root, manifest, self.source)
        self.assertFalse((self.root / "public").exists())
        self.assertEqual(json.loads((self.root / "src/lib/commercial-product-photos.json").read_text()), [])

    def test_stages_pending_preserves_transparency_and_integrity_and_rejects_overwrite(self):
        record = module.stage(self.root, self.manifest, self.source)
        self.assertEqual(record["status"], "pending")
        self.assertEqual((record["width"], record["height"]), (960, 1440))
        with Image.open(self.root / ("public" + record["src"])) as image:
            self.assertEqual(image.format, "WEBP")
            self.assertEqual(image.getpixel((0, 0))[3], 0)
        original = self.root / "public/images/products/licensed/moto-g86-5g-commercial-original.png"
        self.assertEqual(original.read_bytes(), self.source.read_bytes())
        with self.assertRaises(ValueError):
            module.stage(self.root, self.manifest, self.source)

    def test_rejects_wrong_identity_and_checksum(self):
        for updates in [{"productId": "moto-g86-power-5g"}, {"productId": "../../outside"}, {"originalSha256": "0" * 64}]:
            with self.assertRaises(ValueError):
                module.stage(self.root, {**self.manifest, **updates}, self.source)
        self.assertFalse((self.root / "public").exists())


if __name__ == "__main__":
    unittest.main()
