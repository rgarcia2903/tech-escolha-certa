"""Test the actual review ZIP through a local server, with external requests blocked."""
import asyncio
import hashlib
import json
from pathlib import Path
import shutil
import zipfile
import threading
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from functools import partial
from playwright.async_api import async_playwright


async def main():
    directory = Path("work/revisao-final/unpacked").resolve()
    if directory.exists():
        shutil.rmtree(directory)
    with zipfile.ZipFile("docs/revisao-final-2026-10-19/previa-offline.zip") as archive:
        archive.extractall(directory)
    manifest = json.loads((directory / "manifest.json").read_text())
    for file, checksum in manifest["sha256"].items():
        assert hashlib.sha256((directory / file).read_bytes()).hexdigest() == checksum
    server = ThreadingHTTPServer(("127.0.0.1", 0), partial(SimpleHTTPRequestHandler, directory=str(directory)))
    threading.Thread(target=server.serve_forever, daemon=True).start()
    base = f"http://127.0.0.1:{server.server_port}/"
    result = {"pages": 0, "http_requests_attempted": [], "errors": [], "affiliate_navigation_blocked": False}
    async with async_playwright() as p:
        browser = await p.chromium.launch(executable_path="/usr/bin/chromium", headless=True, args=["--no-sandbox", "--disable-dev-shm-usage"])
        context = await browser.new_context(viewport={"width": 1440, "height": 960})
        def handle(route):
            if route.request.url.startswith((base, "data:")):
                return route.continue_()
            result["http_requests_attempted"].append(route.request.url)
            return route.abort()
        await context.route("**/*", handle)
        page = await context.new_page()
        page.on("pageerror", lambda error: result["errors"].append(str(error)))
        for file in manifest["routes"].values():
            await page.goto(base + file, wait_until="load")
            assert await page.locator("h1").count() == 1, file
            assert await page.locator("#review-page option").count() == len(manifest["routes"])
            assert await page.locator("button:enabled").count() == 0
            await page.locator("img").evaluate_all("async imgs => {for(const img of imgs){await img.decode();if(!img.naturalWidth)throw Error(img.src)}}")
            assert await page.locator("h1").evaluate("el=>getComputedStyle(el).fontSize") != "32px", file
            result["pages"] += 1
        await page.goto(base + "index.html", wait_until="load")
        await page.locator("#review-page").select_option("ofertas.html")
        await page.wait_for_url("**/ofertas.html")
        assert "Compare celulares" in await page.locator("h1").inner_text()
        dialogs = []
        def dismiss(dialog):
            dialogs.append(dialog.message)
            asyncio.create_task(dialog.dismiss())
        page.on("dialog", dismiss)
        await page.locator("a[data-store]").first.click()
        assert dialogs and "navegação de afiliado bloqueada" in dialogs[-1]
        assert page.url.endswith("/ofertas.html")
        result["affiliate_navigation_blocked"] = True
        await page.locator("#review-page").select_option("melhores-celulares-custo-beneficio.html")
        await page.wait_for_url("**/melhores-celulares-custo-beneficio.html")
        await browser.close()
    server.shutdown()
    assert not result["errors"], result["errors"]
    assert not result["http_requests_attempted"], result["http_requests_attempted"]
    Path("work/revisao-final/offline-results.json").write_text(json.dumps(result, ensure_ascii=False, indent=2))
    print(json.dumps(result, ensure_ascii=False))


asyncio.run(main())
