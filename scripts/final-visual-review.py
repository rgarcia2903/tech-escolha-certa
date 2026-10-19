"""Capture the real local application and test purchase-button interaction offline."""
import asyncio
import json
from pathlib import Path
import subprocess
from urllib.parse import urlsplit
from playwright.async_api import async_playwright

BASE = "http://127.0.0.1:5177"
OUTPUT = Path("docs/revisao-final-2026-10-19")
PAGES = [("home", "/"), ("ofertas", "/ofertas"), ("ranking", "/melhores-celulares-custo-beneficio")]


async def main():
    OUTPUT.mkdir(parents=True, exist_ok=True)
    catalog = json.loads(subprocess.check_output([
        "node", "--input-type=module", "-e",
        'import {build} from "esbuild"; await build({entryPoints:["src/lib/product-catalog.ts"],bundle:true,platform:"node",format:"esm",outfile:"work/revisao-final/catalog.mjs"}); const {OFFERS}=await import("./work/revisao-final/catalog.mjs"); console.log(JSON.stringify(OFFERS));',
    ], text=True))
    assert len(catalog) == 26
    offers = {offer["id"]: offer for offer in catalog}
    before = json.loads(Path("work/revisao-final/before.json").read_text())
    result = {"layouts": [], "simulated_clicks": 0, "store_requests_sent": 0, "errors": []}
    async with async_playwright() as p:
        browser = await p.chromium.launch(executable_path="/usr/bin/chromium", headless=True, args=["--no-sandbox", "--disable-dev-shm-usage"])
        context = await browser.new_context(reduced_motion="reduce")
        await context.route("**/*", lambda r: r.continue_() if urlsplit(r.request.url).hostname == "127.0.0.1" else r.abort())
        page = await context.new_page()
        page.on("pageerror", lambda error: result["errors"].append({"page": page.url, "error": str(error)}))
        for width, label in [(390, "mobile"), (1440, "desktop")]:
            await page.set_viewport_size({"width": width, "height": 1800})
            for name, route in PAGES:
                await page.goto(BASE + route, wait_until="networkidle")
                await page.evaluate("document.fonts.ready")
                await page.locator('[data-photo-status="approved"] img').evaluate_all("async imgs => {for(const img of imgs){img.loading='eager';await img.decode();if(!img.naturalWidth)throw Error(img.src)}}")
                assert await page.locator("h1").count() == 1
                assert await page.locator('link[rel="canonical"]').count() == 1
                assert not await page.evaluate("document.documentElement.scrollWidth > innerWidth + 1")
                assert await page.locator('[data-photo-status="pending"] img').count() == 0
                selection = page.locator("#selecao-editorial")
                first_three = await selection.locator("article").evaluate_all("els=>els.slice(0,3).map(el=>el.dataset.visualProduct)")
                assert first_three == ["galaxy-a17-5g", "redmi-note-15-5g", "edge-60-pro"], first_three
                first_card = await selection.locator("article").first.evaluate("el=>el.getBoundingClientRect().top+scrollY")
                first_store = await page.locator("a[data-store]").first.evaluate("el=>el.getBoundingClientRect().top+scrollY")
                previous = next(row for row in before if row["page"] == name and row["width"] == width)
                assert first_store < previous["firstStore"], (name, width, first_store, previous)
                result["layouts"].append({"page": name, "width": width, "firstCard": first_card, "firstStore": first_store, "beforeFirstStore": previous["firstStore"], "height": await page.evaluate("document.documentElement.scrollHeight")})
                await page.screenshot(path=str(OUTPUT / f"{name}-{label}.png"), animations="disabled")
                await page.screenshot(path=str(OUTPUT / f"{name}-{label}-completa.jpg"), full_page=True, quality=78, animations="disabled")
                # Stop native navigation in capture phase; React's onClick still executes.
                # No affiliate network, destination store or live analytics is contacted.
                await page.evaluate("""() => {
                    window.__reviewEvents=[];
                    window.gtag=(...args)=>window.__reviewEvents.push(args);
                    document.addEventListener('click', event=>{
                        if(event.target.closest('a[data-store]')) event.preventDefault();
                    }, true);
                }""")
                links = selection.locator("a[data-store]")
                for index in range(await links.count()):
                    link = links.nth(index)
                    offer_id = await link.get_attribute("data-offer-id")
                    offer = offers[offer_id]
                    assert await link.get_attribute("href") == offer["url"]
                    assert await link.get_attribute("data-product-id") == offer["productId"]
                    assert await link.get_attribute("data-store") == offer["store"]
                    assert "sponsored" in await link.get_attribute("rel")
                    await link.scroll_into_view_if_needed()
                    bounds = await link.bounding_box()
                    assert bounds and bounds["height"] >= 44 and bounds["width"] >= 44
                    assert await link.is_visible()
                    await link.click()
                    event = await page.evaluate("window.__reviewEvents.at(-1)")
                    assert event[1] == "affiliate_click", event
                    assert event[2]["offer_id"] == offer_id, event
                    assert event[2]["product_id"] == offer["productId"], event
                    assert event[2]["destination"] == offer["store"], event
                    result["simulated_clicks"] += 1
                assert page.url == BASE + route
        assert not result["errors"], result["errors"]
        await browser.close()
    Path("work/revisao-final/review-results.json").write_text(json.dumps(result, ensure_ascii=False, indent=2))
    print(json.dumps(result, ensure_ascii=False))


asyncio.run(main())
