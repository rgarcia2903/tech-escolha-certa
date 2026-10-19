"""Stage a legally obtained local photograph; never approve it automatically.

Requires Pillow. No network requests, proxy changes or generated product images.
"""
import argparse
import hashlib
import json
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--product", required=True)
    parser.add_argument("--file", type=Path, required=True)
    args = parser.parse_args()
    candidates = json.loads((ROOT / "docs/photo-candidates.json").read_text())
    candidate = next((p for p in candidates if p["productId"] == args.product), None)
    if not candidate:
        parser.error("Modelo sem fonte documentada; cadastre e verifique a licença primeiro.")
    registry = ROOT / "src/lib/licensed-product-photos.json"
    photos = json.loads(registry.read_text())
    if any(p["productId"] == args.product for p in photos):
        parser.error("Modelo já importado. Revise o registro existente antes de substituir.")
    original = args.file.read_bytes()
    # Pillow checks the decoder and dimensions; it cannot verify model identity or rights.
    with Image.open(args.file) as image:
        if image.format not in {"JPEG", "PNG", "WEBP"}:
            parser.error("Use JPEG, PNG ou WebP.")
        image.load()
        image = ImageOps.exif_transpose(image).convert("RGB")
        image.thumbnail((960, 960))
        if min(image.size) < 240:
            parser.error("Fotografia pequena demais para a vitrine (mínimo de 240 px por lado).")
        output = ROOT / f"public/images/products/licensed/{args.product}.webp"
        if output.exists():
            parser.error("Arquivo de destino já existe; nenhuma substituição foi feita.")
        output.parent.mkdir(parents=True, exist_ok=True)
        image.save(output, "WEBP", quality=85, method=6)
        width, height = image.size
    photos.append({
        "productId": args.product, "kind": "photograph", "status": "pending",
        "src": "/" + output.relative_to(ROOT / "public").as_posix(),
        "width": width, "height": height, "alt": candidate["alt"],
        "author": candidate["author"], "sourceUrl": candidate["sourceUrl"],
        "licenseUrl": candidate["licenseUrl"],
        "permissionEvidence": "", "reviewedBy": "", "reviewedAt": "",
        "originalSha256": hashlib.sha256(original).hexdigest(),
        "sha256": hashlib.sha256(output.read_bytes()).hexdigest(),
        "changes": "Orientação EXIF aplicada; redimensionada e convertida para WebP. Derivado sob CC BY-SA 4.0.",
    })
    registry.write_text(json.dumps(photos, ensure_ascii=False, indent=2) + "\n")
    print(f"Preparada: {output.relative_to(ROOT)} ({width}×{height}). Status pending; revise antes de aprovar.")


if __name__ == "__main__":
    main()
