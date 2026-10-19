"""Collect exact-model candidates for review; never approve or replace site assets.

Only configured official hosts are requested. HTTP denials are recorded, never
worked around. Candidate bytes stay in temporary Actions artifacts, not public/.
"""
import argparse
import hashlib
from html import unescape
from html.parser import HTMLParser
import io
import json
from pathlib import Path
import re
from urllib.error import HTTPError
from urllib.parse import urljoin, urlsplit
from urllib.request import Request, urlopen, build_opener, HTTPRedirectHandler
from PIL import Image, ImageOps

TARGETS = {
    "moto-g56-5g": {
        "pages": ["https://motorolanews.com/pressbox/moto-g-family/moto-g56-5g/", "https://motorolanews.com/br/pressbox/moto-g-family/moto-g56-5g/"],
        "hosts": ["motorolanews.com", "media.motorolanews.fiestic.com", "downloads.motorolanews.fiestic.com", "media.motorolanewsbr.fiestic.com"],
        "pattern": r"\b(?:moto(?:rola)?\s*)?g\s*56\b", "exclude": r"\b(?:power|g\s*86)\b",
    },
    "moto-g86-5g": {
        "pages": ["https://motorolanews.com/pressbox/moto-g-family/moto-g86-5g/", "https://www.motorola.com.br/smartphone-moto-g86-5g-256gb/p"],
        "hosts": ["motorolanews.com", "media.motorolanews.fiestic.com", "downloads.motorolanews.fiestic.com", "www.motorola.com.br", "motorola.com.br", "motorolaus.vtexassets.com", "motorola.vtexassets.com", "motorola.vteximg.com.br"],
        "pattern": r"\b(?:moto(?:rola)?\s*)?g\s*86\b", "exclude": r"\b(?:power|g\s*56)\b",
    },
    "galaxy-s25-fe": {
        "pages": ["https://www.samsungmobilepress.com/media-assets/galaxy-s25-fe", "https://www.samsung.com/br/smartphones/galaxy-s/galaxy-s25-fe-jetblack-256gb-sm-s731bzkkzto/"],
        "hosts": ["www.samsungmobilepress.com", "samsungmobilepress.com", "api.samsungmobilepress.com", "www.samsung.com", "images.samsung.com", "resources.samsung.com"],
        "pattern": r"\b(?:galaxy\s*)?s\s*25\s*fe\b|\bsm\s*s731[a-z0-9]*\b", "exclude": r"\b(?:s\s*24|ultra|s\s*25\s*plus)\b",
    },
}
NEGATIVE = re.compile(r"\b(?:logo|icon|icons|favicon|wordmark|brandmark|sprite|banner|lifestyle|logotipo)\b")


def normalized(value):
    # Exclude query strings: a model name in ?campaign= cannot identify an asset.
    return re.sub(r"[^a-z0-9]+", " ", unescape(str(value)).lower()).strip()


def decision(model, url, description=""):
    path = urlsplit(url).path
    evidence = normalized(path + " " + description)
    if NEGATIVE.search(evidence):
        return "not-product-image"
    if re.search(TARGETS[model]["exclude"], evidence):
        return "different-model-or-variant"
    if not re.search(TARGETS[model]["pattern"], evidence):
        return "missing-exact-model-evidence"
    if urlsplit(url).scheme != "https" or urlsplit(url).hostname not in TARGETS[model]["hosts"]:
        return "unconfigured-asset-host"
    return None


class Page(HTMLParser):
    def __init__(self, base):
        super().__init__(convert_charrefs=True)
        self.base, self.items, self.anchor, self.script = base, [], None, None

    def add(self, value, description, origin):
        if isinstance(value, str) and value and not value.startswith("data:"):
            self.items.append({"url": urljoin(self.base, value), "description": description, "origin": origin})

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "meta" and attrs.get("property", attrs.get("name", "")) in ["og:image", "twitter:image"]:
            self.add(attrs.get("content"), "", "social-meta")
        if tag == "img":
            description = attrs.get("alt", "") + " " + attrs.get("title", "")
            for key in ["src", "data-src", "data-lazy-src", "data-original"]:
                self.add(attrs.get(key), description, key)
            for key in ["srcset", "data-srcset"]:
                for entry in attrs.get(key, "").split(","):
                    if entry.strip(): self.add(entry.strip().split()[0], description, key)
        if tag == "a":
            self.anchor = [attrs.get("href", ""), attrs.get("title", ""), ""]
        if tag == "script" and ("json" in attrs.get("type", "") or attrs.get("id") == "__NEXT_DATA__"):
            self.script = ""

    def handle_data(self, data):
        if self.anchor is not None: self.anchor[2] += data
        if self.script is not None: self.script += data

    def handle_endtag(self, tag):
        if tag == "a" and self.anchor is not None:
            href, title, text = self.anchor
            # Download endpoints are allowed, but navigation links are not images.
            if re.search(r"\.(?:jpe?g|png|webp)(?:[?#]|$)|download", href, re.I):
                self.add(href, title + " " + text, "download-link")
            self.anchor = None
        if tag == "script" and self.script is not None:
            try: self.walk(json.loads(self.script))
            except (ValueError, TypeError): pass
            self.script = None

    def walk(self, value):
        if isinstance(value, list):
            for item in value: self.walk(item)
        elif isinstance(value, dict):
            description = str(value.get("name", value.get("title", "")))
            for key, item in value.items():
                if key.lower() in ["image", "images", "imageurl", "imageurls"]:
                    for image in item if isinstance(item, list) else [item]:
                        self.add(image.get("url", image.get("contentUrl")) if isinstance(image, dict) else image, description, "structured-product")
                if isinstance(item, (list, dict)): self.walk(item)


def select(model, html, base):
    page = Page(base)
    page.feed(html)
    accepted, rejected, seen = [], [], set()
    for item in page.items:
        # Consider multiple descriptors for a URL: a generic social tag should not
        # suppress a later product-specific alt. Never inherit the page's title.
        key = (item["url"], item["description"])
        if key in seen: continue
        seen.add(key)
        reason = decision(model, item["url"], item["description"])
        if reason:
            rejected.append({**item, "reason": reason})
        else:
            item["score"] = 2 * bool(re.search(r"\b(?:front|back|rear|frente|traseira|pdp|hero)\b", normalized(item["url"] + " " + item["description"]))) + (item["origin"] != "social-meta")
            item["view"] = ("front" if re.search(r"\b(?:front(?:side)?|frente)\b", normalized(item["url"] + " " + item["description"])) else "rear" if re.search(r"\b(?:back(?:side)?|rear|traseira)\b", normalized(item["url"] + " " + item["description"])) else "pair" if re.search(r"\b(?:pdp|hero)\b", normalized(item["url"] + " " + item["description"])) else "unspecified")
            accepted.append(item)
    accepted.sort(key=lambda item: item["score"], reverse=True)
    unique = {item["url"]: item for item in reversed(accepted)}
    ranked = sorted(unique.values(), key=lambda item: item["score"], reverse=True)
    varied = []
    for view in ["front", "rear", "pair"]:
        candidate = next((item for item in ranked if item["view"] == view), None)
        if candidate: varied.append(candidate)
    return varied + [item for item in ranked if item not in varied], rejected


class OfficialRedirects(HTTPRedirectHandler):
    def __init__(self, hosts): self.hosts = hosts
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        if urlsplit(newurl).scheme != "https" or urlsplit(newurl).hostname not in self.hosts:
            raise ValueError("Redirect outside configured official hosts")
        return super().redirect_request(req, fp, code, msg, headers, newurl)


def fetch(url, hosts, limit):
    if urlsplit(url).hostname not in hosts or urlsplit(url).scheme != "https":
        raise ValueError("Unconfigured official URL")
    opener = build_opener(OfficialRedirects(hosts))
    request = Request(url, headers={"User-Agent": "TechEscolhaCertaCatalogReview/2.0"})
    with opener.open(request, timeout=25) as response:
        data = response.read(limit + 1)
        if len(data) > limit: raise ValueError("Response exceeds size limit")
        return data, response.headers.get_content_type()


def collect(model, target, folder, downloader=fetch):
    record = {"model": model, "status": "no-exact-product-candidate", "attempts": [], "candidates": [], "permissionStatus": "unverified", "visualReviewStatus": "required", "siteAssetsChanged": False}
    for source in target["pages"]:
        attempt = {"sourcePage": source, "rejected": []}
        record["attempts"].append(attempt)
        try:
            html, mime = downloader(source, target["hosts"], 6_000_000)
            if mime not in ["text/html", "application/xhtml+xml"]: raise ValueError("Expected HTML product source")
            choices, rejected = select(model, html.decode("utf-8", errors="replace"), source)
            attempt.update(status="parsed", exactCandidates=len(choices), rejected=rejected[:30])
            for item in choices[:6]:
                if len(record["candidates"]) >= 3: break
                if any(existing["imageUrl"] == item["url"] for existing in record["candidates"]): continue
                try:
                    raw, mime = downloader(item["url"], target["hosts"], 45_000_000)
                    if mime not in ["image/jpeg", "image/png", "image/webp"]: raise ValueError("Not a supported raster MIME type")
                    with Image.open(io.BytesIO(raw)) as image:
                        if image.format not in ["JPEG", "PNG", "WEBP"]: raise ValueError("Invalid raster format")
                        image.load()
                        image = ImageOps.exif_transpose(image)
                        if min(image.size) < 450 or max(image.size) > min(image.size) * 3:
                            raise ValueError("Insufficient dimensions or non-product aspect ratio")
                        image = image.convert("RGBA" if "A" in image.getbands() or "transparency" in image.info else "RGB")
                        image.thumbnail((1440, 1440))
                        path = folder / f"{model}-{len(record['candidates'])+1}.webp"
                        folder.mkdir(parents=True, exist_ok=True)
                        image.save(path, "WEBP", quality=88, method=6)
                        record["candidates"].append({"sourcePage": source, "imageUrl": item["url"], "identityEvidence": item["description"], "origin": item["origin"], "artifactFile": path.name, "width": image.width, "height": image.height, "originalSha256": hashlib.sha256(raw).hexdigest(), "sha256": hashlib.sha256(path.read_bytes()).hexdigest(), "status": "downloaded-unreviewed"})
                except Exception as error:
                    attempt["rejected"].append({"url": item["url"], "reason": str(error)[:250]})
        except HTTPError as error:
            attempt.update(status="http-error", httpStatus=error.code, error=str(error))
        except Exception as error:
            attempt.update(status="error", error=str(error)[:300])
    if record["candidates"]: record["status"] = "candidates-require-identity-and-rights-review"
    return record


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--report", type=Path, default=Path("docs/catalogo-comercial-2026-10-19/candidatas/resultado.json"))
    parser.add_argument("--artifacts", type=Path, default=Path("work/catalog-candidates"))
    args = parser.parse_args()
    records = [collect(model, target, args.artifacts) for model, target in TARGETS.items()]
    args.report.parent.mkdir(parents=True, exist_ok=True)
    args.report.write_text(json.dumps(records, ensure_ascii=False, indent=2) + "\n")
    print(json.dumps(records, ensure_ascii=False, indent=2))


if __name__ == "__main__": main()
