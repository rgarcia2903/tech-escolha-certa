"""Verify every approved local photograph on every route that renders it."""
import asyncio
import json
from pathlib import Path
import re
from urllib.parse import urlsplit
from playwright.async_api import async_playwright

BASE = "http://127.0.0.1:5177"


async def main():
    photos = [p for p in json.loads(Path("src/lib/licensed-product-photos.json").read_text()) if p["status"] == "approved"]
    result = {"models": {p["productId"]: [] for p in photos}, "layouts": [], "fallback": []}
    async with async_playwright() as p:
        browser = await p.chromium.launch(executable_path="/usr/bin/chromium", headless=True,
                                          args=["--no-sandbox", "--disable-dev-shm-usage"])
        context = await browser.new_context()
        await context.route("**/*", lambda r: r.continue_() if urlsplit(r.request.url).hostname == "127.0.0.1" else r.abort())
        for photo in photos:
            response = await context.request.get(BASE + photo["src"])
            assert response.status == 200
            assert response.headers["content-type"].startswith("image/webp")
            assert await response.body() == Path("public" + photo["src"]).read_bytes()
        for file in sorted(Path("src/routes").glob("*.tsx")):
            match = re.search(r'createFileRoute\(\s*["\']([^"\']+)', file.read_text())
            if not match:
                continue
            response = await context.request.get(BASE + match[1])
            html = await response.text()
            for photo in photos:
                if f'data-product-media="{photo["productId"]}" data-photo-status="approved"' in html:
                    result["models"][photo["productId"]].append(match[1])
        pages = sorted(set(route for routes in result["models"].values() for route in routes))
        assert all(result["models"].values()), result["models"]
        page = await context.new_page()
        errors = []
        page.on("pageerror", lambda error: errors.append({"page": page.url, "message": str(error)}))
        for width in [390, 1440]:
            await page.set_viewport_size({"width": width, "height": 960})
            for route in pages:
                await page.goto(BASE + route, wait_until="networkidle")
                for photo in photos:
                    if route not in result["models"][photo["productId"]]:
                        continue
                    media = page.locator(f'[data-product-media="{photo["productId"]}"]').first
                    await media.evaluate("el => {for(let p=el.parentElement;p;p=p.parentElement) if(p.tagName==='DETAILS') p.open=true}")
                    await media.scroll_into_view_if_needed()
                    img = media.locator("img")
                    dimensions = await img.evaluate("async img => {img.loading='eager'; await img.decode(); return [img.complete,img.naturalWidth,img.naturalHeight]}")
                    assert dimensions == [True, photo["width"], photo["height"]], (route, photo["productId"], dimensions)
                    assert await img.is_visible()
                    assert await img.get_attribute("src") == photo["src"]
                    assert photo["author"] in await media.inner_text()
                    assert await media.locator('a[rel~="license"]').get_attribute("href") == photo["licenseUrl"]
                    assert not await page.evaluate("document.documentElement.scrollWidth > innerWidth + 1")
                    result["layouts"].append({"route": route, "width": width, "model": photo["productId"], "loaded": True})
                    if route == "/ofertas":
                        await media.screenshot(path=f'work/photo-{photo["productId"]}-{width}.png')
                print(f"OK {width} {route}", flush=True)
        assert not errors, errors
        await context.close()
        context = await browser.new_context()
        sources = {photo["src"] for photo in photos}
        await context.route("**/*", lambda r: r.continue_() if urlsplit(r.request.url).hostname == "127.0.0.1" and urlsplit(r.request.url).path not in sources else r.abort())
        page = await context.new_page()
        for photo in photos:
            await page.goto(BASE + result["models"][photo["productId"]][0], wait_until="networkidle")
            selector = f'[data-product-media="{photo["productId"]}"]'
            media = page.locator(selector).first
            await media.evaluate("el => {for(let p=el.parentElement;p;p=p.parentElement) if(p.tagName==='DETAILS') p.open=true}")
            await media.scroll_into_view_if_needed()
            await page.wait_for_function("s => document.querySelector(s).dataset.photoStatus === 'failed'", arg=selector)
            assert await media.locator("img").count() == 0
            assert "Foto indisponível" in await media.inner_text()
            result["fallback"].append(photo["productId"])
        await browser.close()
    Path("work/licensed-photos-results.json").write_text(json.dumps(result, ensure_ascii=False, indent=2))
    print(json.dumps(result, ensure_ascii=False))


asyncio.run(main())
