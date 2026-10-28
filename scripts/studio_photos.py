"""Gera versões "de estúdio" das fotos licenciadas: remove o fundo, recorta o aparelho
e o centraliza em fundo branco com sombra suave. Usado só no GitHub Actions (precisa de rembg).
Saída: docs/studio/<id>.png para revisão humana antes de virar WebP no site."""
import sys
from pathlib import Path
from PIL import Image, ImageFilter, ImageOps
from rembg import remove, new_session
import numpy as np
from scipy import ndimage

session = new_session("isnet-general-use")
src_dir = Path("public/images/products/licensed")
out_dir = Path("docs/studio"); out_dir.mkdir(parents=True, exist_ok=True)
W, H, PAD = 800, 1000, 70
inputs = sorted(src_dir.glob("*-original.jpg")) + sorted(Path("docs/photo-search2").glob("*/*.jpg"))
for f in inputs:
    pid = f.name.replace("-original.jpg", "") if f.parent == src_dir else f"{f.parent.name}-{f.stem}"
    im = ImageOps.exif_transpose(Image.open(f)).convert("RGB")
    cut = remove(im, session=session, post_process_mask=True)
    alpha = cut.split()[-1]
    # Mantém só o maior objeto (o aparelho): descarta cabos, suportes e etiquetas soltas.
    a = np.array(alpha)
    labels, n = ndimage.label(a > 40)
    if n > 1:
        sizes = ndimage.sum(np.ones_like(a), labels, range(1, n + 1))
        keep = labels == (int(np.argmax(sizes)) + 1)
        keep = ndimage.binary_fill_holes(keep)
        a = np.where(keep, a, 0).astype("uint8")
        alpha = Image.fromarray(a)
        cut.putalpha(alpha)
    box = alpha.point(lambda a: 255 if a > 40 else 0).getbbox()
    if not box:
        print("sem recorte", pid); continue
    obj = cut.crop(box)
    scale = min((W - 2 * PAD) / obj.width, (H - 2 * PAD) / obj.height)
    obj = obj.resize((max(1, round(obj.width * scale)), max(1, round(obj.height * scale))), Image.LANCZOS)
    canvas = Image.new("RGBA", (W, H), (255, 255, 255, 255))
    x, y = (W - obj.width) // 2, (H - obj.height) // 2
    shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    sh = Image.new("RGBA", obj.size, (0, 0, 0, 70)); sh.putalpha(obj.split()[-1].point(lambda a: min(a, 70)))
    shadow.paste(sh, (x + 10, y + 18), sh)
    canvas = Image.alpha_composite(canvas, shadow.filter(ImageFilter.GaussianBlur(22)))
    canvas.alpha_composite(obj, (x, y))
    canvas.convert("RGB").save(out_dir / f"{pid}.png", optimize=True)
    print("ok", pid, obj.size)
