"""Prepare an authorized local commercial asset without activating it or making network calls.

The manifest records the supplier's actual permission. It is not itself a license.
Review the original model, rights evidence and rendered output before approval.
"""
import argparse
import hashlib
import json
from pathlib import Path
import re
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]


def stage(root, manifest, source):
    product_id = manifest.get("productId", "")
    if not re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", product_id):
        raise ValueError("Invalid exact catalog product ID")
    catalog = (root / "src/lib/product-catalog.ts").read_text()
    if not re.search(r'product\(\s*"' + re.escape(product_id) + r'"', catalog):
        raise ValueError("Unknown catalog product ID")
    for field in ["author", "alt", "licenseLabel", "permissionEvidence"]:
        if not isinstance(manifest.get(field), str) or not manifest[field].strip():
            raise ValueError(f"Missing {field}")
    for field in ["sourceUrl", "licenseUrl"]:
        if not str(manifest.get(field, "")).startswith("https://"):
            raise ValueError(f"Missing HTTPS {field}")
    rights = manifest.get("commercialRights", {})
    if not isinstance(rights.get("rightsHolder"), str) or not rights["rightsHolder"].strip() or not str(rights.get("evidenceUrl", "")).startswith("https://"):
        raise ValueError("Missing supplier rights evidence")
    if rights.get("scope") != "site-wide-two-store":
        raise ValueError("Store-restricted content cannot be used in shared two-store cards")
    for field in ["hostLocally", "convertToWebp", "redistributeInRepository"]:
        if rights.get(field) is not True:
            raise ValueError(f"Supplier permission required: {field}")
    if "validUntil" not in rights:
        raise ValueError("Record validUntil (ISO timestamp or null for no stated expiry)")
    if manifest.get("kind") not in ["photograph", "official-render"]:
        raise ValueError("Use photograph or official-render; generated approximations are unsupported")
    original = source.read_bytes()
    digest = hashlib.sha256(original).hexdigest()
    if manifest.get("originalSha256") != digest:
        raise ValueError("Original SHA-256 mismatch")
    registry = root / "src/lib/commercial-product-photos.json"
    records = json.loads(registry.read_text())
    if any(record["productId"] == product_id for record in records):
        raise ValueError("Commercial record already exists; refusing overwrite")
    directory = root / "public/images/products/licensed"
    output = directory / f"{product_id}-commercial.webp"
    if output.exists():
        raise ValueError("Output exists; refusing overwrite")
    with Image.open(source) as image:
        if image.format not in {"JPEG", "PNG", "WEBP"}:
            raise ValueError("Expected JPEG, PNG or WebP")
        extension = {"JPEG": "jpg", "PNG": "png", "WEBP": "webp"}[image.format]
        image.load()
        image = ImageOps.exif_transpose(image)
        image = image.convert("RGBA" if "A" in image.getbands() or "transparency" in image.info else "RGB")
        if min(image.size) < 480:
            raise ValueError("Commercial original must have at least 480 px per side")
        image.thumbnail((1440, 1440))
        directory.mkdir(parents=True, exist_ok=True)
        original_path = directory / f"{product_id}-commercial-original.{extension}"
        license_path = directory / f"{product_id}-commercial.LICENSE.txt"
        if original_path.exists() or license_path.exists():
            raise ValueError("Original or license file exists; refusing overwrite")
        image.save(output, "WEBP", quality=88, method=6)
        original_path.write_bytes(original)
        record = {key: manifest[key] for key in ["productId", "kind", "author", "alt", "sourceUrl", "licenseUrl", "licenseLabel", "permissionEvidence", "commercialRights"]}
        record.update({"status": "pending", "src": "/" + output.relative_to(root / "public").as_posix(), "width": image.width, "height": image.height, "originalSha256": digest, "sha256": hashlib.sha256(output.read_bytes()).hexdigest(), "reviewedBy": "", "reviewedAt": "", "changes": "Orientação EXIF aplicada; redimensionamento proporcional e conversão para WebP; transparência preservada quando presente."})
    license_path.write_text(json.dumps(record, ensure_ascii=False, indent=2) + "\n")
    records.append(record)
    registry.write_text(json.dumps(records, ensure_ascii=False, indent=2) + "\n")
    return record


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--manifest", required=True, type=Path)
    parser.add_argument("--file", required=True, type=Path)
    args = parser.parse_args()
    try:
        record = stage(ROOT, json.loads(args.manifest.read_text()), args.file)
    except (ValueError, OSError) as error:
        parser.error(str(error))
    print(f"{record['productId']}: pending, {record['width']}×{record['height']}; review identity and supplier rights before activation.")


if __name__ == "__main__":
    main()
