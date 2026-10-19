"""Verify the real, locally served A36 photo on every route that renders it."""
import asyncio
import json
from pathlib import Path
import re
from urllib.parse import urlsplit
from playwright.async_api import async_playwright

BASE = "http://127.0.0.1:5177"
PHOTO = "/images/products/licensed/galaxy-a36-5g.webp"
SELECTOR = '[data-product-media="galaxy-a36-5g"]'


async def main():
    result = {"pages": [], "layouts": [], "working_models": ["galaxy-a36-5g"]}
    async with async_playwright() as p:
        browser = await p.chromium.launch(executable_path="/usr/bin/chromium", headless=True,
                                          args=["--no-sandbox", "--disable-dev-shm-usage"])
        context = await browser.new_context()
        await context.route("**/*", lambda r: r.continue_() if urlsplit(r.request.url).hostname == "127.0.0.1" else r.abort())
        response = await context.request.get(BASE + PHOTO)
        assert response.status == 200
        assert response.headers["content-type"].startswith("image/webp")
        assert await response.body() == Path("public" + PHOTO).read_bytes()
        for file in sorted(Path("src/routes").glob("*.tsx")):
            match = re.search(r'createFileRoute\(\s*["\']([^"\']+)', file.read_text())
            if not match:
                continue
            response = await context.request.get(BASE + match[1])
            if 'data-product-media="galaxy-a36-5g" data-photo-status="approved"' in await response.text():
                result["pages"].append(match[1])
        assert result["pages"]
        page = await context.new_page()
        errors = []
        page.on("pageerror", lambda error: errors.append({"page": page.url, "message": str(error), "stack": error.stack}))
        for width in [390, 1440]:
            await page.set_viewport_size({"width": width, "height": 960})
            for route in result["pages"]:
                await page.goto(BASE + route, wait_until="networkidle")
                media = page.locator(SELECTOR).first
                await media.evaluate("el => {for(let p=el.parentElement; p; p=p.parentElement) if(p.tagName==='DETAILS') p.open=true}")
                await media.scroll_into_view_if_needed()
                img = media.locator("img")
                await img.evaluate("async img => {img.loading='eager'; await img.decode()}")
                assert await img.evaluate("img => img.complete && img.naturalWidth === 462 && img.naturalHeight === 960")
                assert await img.get_attribute("src") == PHOTO
                assert await img.is_visible(), (route, width)
                assert await media.locator('a[rel~="license"]').get_attribute("href") == "https://creativecommons.org/licenses/by-sa/4.0/"
                assert "Captainmorlypogi1959" in await media.text_content(), (route, width, await media.inner_text())
                assert not await page.evaluate("document.documentElement.scrollWidth > innerWidth + 1")
                result["layouts"].append({"route": route, "width": width, "loaded": True})
                if route == "/melhores-celulares-samsung":
                    await media.screenshot(path=f"work/a36-photo-{width}.png")
        Path("work/photo-a36-progress.json").write_text(json.dumps(result, ensure_ascii=False, indent=2))
        assert not errors, errors
        # A broken local asset must show a neutral placeholder, never another phone.
        await context.close()
        context = await browser.new_context()
        await context.route("**/*", lambda r: r.continue_() if urlsplit(r.request.url).hostname == "127.0.0.1" and not r.request.url.endswith(PHOTO) else r.abort())
        page = await context.new_page()
        await page.goto(BASE + "/melhores-celulares-samsung", wait_until="networkidle")
        media = page.locator(SELECTOR).first
        await media.scroll_into_view_if_needed()
        await page.wait_for_function("document.querySelector('[data-product-media=\"galaxy-a36-5g\"]').dataset.photoStatus === 'failed'")
        assert await media.locator("img").count() == 0
        assert "Foto indisponível" in await media.inner_text()
        result["fallback"] = "passed"
        await browser.close()
    Path("work/photo-a36-results.json").write_text(json.dumps(result, ensure_ascii=False, indent=2))
    print(json.dumps(result, ensure_ascii=False))


asyncio.run(main())
