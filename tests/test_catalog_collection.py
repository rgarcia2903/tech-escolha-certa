"""Offline selector regressions: fixtures are not real product assets."""
import importlib.util
import io
from pathlib import Path
import tempfile
import unittest
from urllib.error import HTTPError
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location("catalog_collection", ROOT / "scripts/collect-catalog-images.py")
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)


class CatalogSelectionTest(unittest.TestCase):
    def test_actual_samsung_logo_is_rejected_even_with_model_alt(self):
        url = "https://resources.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/logo-square-letter.png"
        self.assertEqual(module.decision("galaxy-s25-fe", url, "Galaxy S25 FE"), "not-product-image")
        accepted, rejected = module.select("galaxy-s25-fe", f'<meta property="og:image" content="{url}">', module.TARGETS["galaxy-s25-fe"]["pages"][0])
        self.assertEqual(accepted, [])
        self.assertEqual(rejected[0]["reason"], "not-product-image")

    def test_generic_hero_and_page_title_do_not_prove_identity(self):
        html = '<title>Galaxy S25 FE</title><img alt="Product hero" src="https://images.samsung.com/global/hero.jpg"><meta property="og:image" content="https://images.samsung.com/global/image.jpg?campaign=galaxy-s25-fe">'
        accepted, rejected = module.select("galaxy-s25-fe", html, module.TARGETS["galaxy-s25-fe"]["pages"][0])
        self.assertEqual(accepted, [])
        self.assertTrue(all(item["reason"] == "missing-exact-model-evidence" for item in rejected))

    def test_moto_g86_power_is_not_g86(self):
        url = "https://media.motorolanews.fiestic.com/moto-g86-power-5G_SPELLBOUND_FRONT-SIDE.png"
        self.assertEqual(module.decision("moto-g86-5g", url, "moto g86 5G"), "different-model-or-variant")
        self.assertIsNone(module.decision("moto-g86-5g", url.replace("-power", "")))

    def test_press_downloads_identify_front_and_back_of_exact_model(self):
        html = '<a href="https://media.motorolanews.fiestic.com/download/42">moto g56 5G_FRONTSIDE_Black Oyster</a><a href="https://media.motorolanews.fiestic.com/download/43">moto g56 5G_BACKSIDE_Black Oyster</a>'
        accepted, _ = module.select("moto-g56-5g", html, module.TARGETS["moto-g56-5g"]["pages"][0])
        self.assertEqual(len(accepted), 2)
        self.assertTrue(all(item["origin"] == "download-link" for item in accepted))

    def test_structured_product_and_lazy_images_are_supported(self):
        html = '<script type="application/ld+json">{"@type":"Product","name":"Galaxy S25 FE","image":["https://images.samsung.com/assets/123.jpg"]}</script><img alt="Galaxy S25 FE Front" data-src="https://images.samsung.com/assets/456.jpg">'
        accepted, _ = module.select("galaxy-s25-fe", html, module.TARGETS["galaxy-s25-fe"]["pages"][0])
        self.assertEqual(len(accepted), 2)
        self.assertTrue(all("Galaxy S25 FE" in item["description"] for item in accepted))

    def test_other_samsung_model_and_unconfigured_hosts_rejected(self):
        self.assertIsNotNone(module.decision("galaxy-s25-fe", "https://images.samsung.com/galaxy-s25-ultra-front.jpg"))
        self.assertEqual(module.decision("galaxy-s25-fe", "https://example.com/galaxy-s25-fe-front.jpg"), "unconfigured-asset-host")
        handler = module.OfficialRedirects(["images.samsung.com"])
        with self.assertRaises(ValueError):
            handler.redirect_request(None, None, 302, "", {}, "https://example.com/image.jpg")

    def test_http_403_is_recorded_without_retry_or_bypass(self):
        calls = []
        def denied(url, hosts, limit):
            calls.append(url)
            raise HTTPError(url, 403, "Forbidden", {}, None)
        with tempfile.TemporaryDirectory() as folder:
            result = module.collect("moto-g56-5g", module.TARGETS["moto-g56-5g"], Path(folder), denied)
            self.assertEqual(calls, module.TARGETS["moto-g56-5g"]["pages"])
            self.assertTrue(all(attempt["httpStatus"] == 403 for attempt in result["attempts"]))
            self.assertEqual(list(Path(folder).iterdir()), [])
            self.assertFalse(result["siteAssetsChanged"])

    def test_candidate_is_never_approved_and_preserves_transparency(self):
        data = io.BytesIO()
        Image.new("RGBA", (800, 1200), (0, 0, 0, 0)).save(data, "PNG")
        def download(url, hosts, limit):
            if url.endswith("page"):
                return b'<img alt="Moto G86 5G front" src="https://media.motorolanews.fiestic.com/moto-g86-5g-front.png">', "text/html"
            return data.getvalue(), "image/png"
        target = {**module.TARGETS["moto-g86-5g"], "pages": ["https://motorolanews.com/page"]}
        with tempfile.TemporaryDirectory() as folder:
            result = module.collect("moto-g86-5g", target, Path(folder), download)
            self.assertEqual(result["status"], "candidates-require-identity-and-rights-review")
            self.assertEqual(result["permissionStatus"], "unverified")
            self.assertEqual(result["visualReviewStatus"], "required")
            self.assertFalse(result["siteAssetsChanged"])
            candidate = result["candidates"][0]
            with Image.open(Path(folder) / candidate["artifactFile"]) as image:
                self.assertEqual(image.getpixel((0, 0))[3], 0)
            self.assertEqual(candidate["status"], "downloaded-unreviewed")


if __name__ == "__main__": unittest.main()
