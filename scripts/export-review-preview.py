"""Export local SSR pages as a navigable offline visual-review ZIP. No deployment."""
import argparse
import hashlib
from html import escape, unescape
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import shutil
from urllib.parse import urljoin, urlsplit
from urllib.request import urlopen
import zipfile

ROOT = Path(__file__).resolve().parents[1]
BASE = "http://127.0.0.1:5177"


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, default=ROOT / "docs/revisao-final-2026-10-19/previa-offline.zip")
    args = parser.parse_args()
    work = ROOT / "work/revisao-final/preview"
    if work.exists():
        shutil.rmtree(work)
    assets = work / "assets"
    assets.mkdir(parents=True)
    routes = set()
    for file in (ROOT / "src/routes").glob("*.tsx"):
        match = re.search(r'createFileRoute\(\s*["\']([^"\']+)', file.read_text())
        if match:
            routes.add(match[1])
    names = {route: (route.strip("/").replace("/", "__") or "index") + ".html" for route in routes}
    styles = []
    style_urls = set()
    copied = {}

    class Tag(HTMLParser):
        def handle_starttag(self, tag, attrs):
            self.attrs = dict(attrs)

    def attributes(tag):
        parser = Tag()
        parser.feed(tag)
        return parser.attrs

    def get(url):
        assert urlsplit(url).hostname == "127.0.0.1", url
        with urlopen(url, timeout=60) as response:
            return response.read()

    def asset(src):
        src = unescape(src)
        path = urlsplit(src).path
        local = ROOT / "public" / path.lstrip("/")
        if local.is_file() and path not in copied:
            destination = assets / local.name
            destination.write_bytes(local.read_bytes())
            copied[path] = "assets/" + local.name
        return copied.get(path, src)

    def link_tag(match):
        raw = match.group(0)
        attrs = attributes(raw)
        rel = attrs.get("rel", "")
        href = attrs.get("href", "")
        if rel == "stylesheet":
            url = urljoin(BASE, unescape(href))
            if urlsplit(url).hostname == "127.0.0.1" and url not in style_urls:
                style_urls.add(url)
                css_url = url + ("&" if "?" in url else "?") + "direct" if urlsplit(url).path.endswith(".css") else url
                styles.append(get(css_url).decode())
            return ""
        if rel in {"modulepreload", "preload", "preconnect", "dns-prefetch"}:
            return ""
        if rel in {"icon", "shortcut icon", "apple-touch-icon"}:
            return raw.replace(href, asset(href))
        return raw

    def anchor(match):
        raw = match.group(0)
        attrs = attributes(raw)
        href = unescape(attrs.get("href", ""))
        parsed = urlsplit(href)
        if href.startswith("/") or parsed.hostname == "techescolhacerta.com.br":
            if parsed.path in names:
                target = names[parsed.path] + ("#" + parsed.fragment if parsed.fragment else "")
                raw = re.sub(r'\bhref="[^"]*"', 'href="' + escape(target, quote=True) + '"', raw)
        return raw

    def image(match):
        raw = match.group(0)
        attrs = attributes(raw)
        source = attrs.get("src", "")
        raw = raw.replace(source, asset(source))
        raw = re.sub(r'\bloading="[^"]*"', 'loading="eager"', raw)
        return raw

    options = "".join(f'<option value="{escape(names[r], quote=True)}">{escape(r)}</option>' for r in sorted(routes))
    toolbar = '<aside class="review-preview"><strong>Prévia offline · branch de testes · sem publicação</strong><p>Navegação e seções expansíveis disponíveis. Busca, seletor e analytics requerem a aplicação completa. Cliques de compra são bloqueados neste pacote.</p><label>Página: <select id="review-page">' + options + '</select></label></aside>'
    toolbar_css = ".review-preview{padding:12px 20px;background:#fff4d6;border-bottom:2px solid #8b5a2b;color:#17202a;font:13px/1.5 system-ui}.review-preview p{margin:4px 0}.review-preview select{max-width:100%;background:#fff;padding:5px;border:1px solid #8b5a2b}"
    script = r"""document.querySelector('#review-page').value=location.pathname.split('/').pop();
document.querySelector('#review-page').addEventListener('change',e=>location.href=e.target.value);
document.addEventListener('click',e=>{const a=e.target.closest('a');if(a&&/^https:\/\/(link\.amazon|meli\.la)\//.test(a.href)){e.preventDefault();alert('Prévia de revisão: navegação de afiliado bloqueada. Destino original: '+a.href)}});
document.querySelectorAll('button').forEach(b=>{b.disabled=true;b.title='Interação disponível na aplicação React completa'});"""
    for route in sorted(routes):
        html = get(BASE + route).decode()
        html = re.sub(r'<script\b[^>]*>.*?</script\s*>', "", html, flags=re.S | re.I)
        html = re.sub(r'<link\b[^>]*>', link_tag, html, flags=re.I)
        html = re.sub(r'<a\b[^>]*>', anchor, html, flags=re.I)
        html = re.sub(r'<img\b[^>]*>', image, html, flags=re.I)
        html = html.replace("</head>", '<meta name="robots" content="noindex,nofollow"><link rel="stylesheet" href="assets/styles.css"><style>' + toolbar_css + "</style></head>")
        html = re.sub(r'(<body\b[^>]*>)', r'\1' + toolbar, html, count=1)
        html = html.replace("</body>", "<script>" + script + "</script></body>")
        (work / names[route]).write_text(html)
    css = "\n".join(styles)
    css = re.sub(r'@import\s+(?:url\([^)]*\)|[\"\'][^\"\']*[\"\'])[^;]*;', "", css)
    css = re.sub(r'/\*[#@]\s*sourceMappingURL=.*?\*/', "", css, flags=re.S)
    (assets / "styles.css").write_text(css)
    for license_file in (ROOT / "public/images/products/licensed").glob("*.LICENSE.txt"):
        shutil.copy2(license_file, assets / license_file.name)
    (work / "LEIA-ME.txt").write_text("Extraia o ZIP e abra index.html. Prévia estática de revisão: 46 páginas HTML, imagens e CSS locais. Não houve hospedagem nem publicação. Busca, seletor e analytics dependem da aplicação React completa; botões de compra mostram o destino mas não enviam tráfego às lojas. Fotos licenciadas sob CC BY-SA 4.0; créditos nas páginas e arquivos LICENSE. Para testar a aplicação completa, use a branch informada no relatório e npm run dev.\n")
    manifest = {"routes": names, "assets": copied, "sha256": {str(file.relative_to(work)): hashlib.sha256(file.read_bytes()).hexdigest() for file in work.rglob("*") if file.is_file()}}
    (work / "manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2))
    args.output.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(args.output, "w", zipfile.ZIP_DEFLATED) as archive:
        for file in sorted(work.rglob("*")):
            if file.is_file():
                archive.write(file, file.relative_to(work))
    print(json.dumps({"pages": len(routes), "assets": len(copied), "zip": str(args.output), "bytes": args.output.stat().st_size}))


if __name__ == "__main__":
    main()
