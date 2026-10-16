import * as affiliateLinks from "../src/lib/affiliate-links";
import { documentaryArticle } from "../src/lib/editorial-schema";
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";
import {
  PRODUCTS,
  OFFERS,
  getOffers,
  getProduct,
  getProductByName,
  getOfferByUrl,
  AMAZON_DISCLOSURE,
} from "../src/lib/product-catalog";
import {
  BUDGETS,
  getSelection,
  getFinderCandidates,
  fitsVerifiedBudget,
} from "../src/lib/editorial-policy";
import { ProductPurchaseOptions } from "../src/components/site/ProductPurchaseOptions";
import { PurchaseActions } from "../src/components/site/PurchaseActions";
import { MobilePurchaseBar } from "../src/components/site/MobilePurchaseBar";
import { AffiliateRedirectNotice } from "../src/components/site/AffiliateRedirectNotice";
import { trackAffiliateClick } from "../src/lib/analytics";

const originalML = [
  ["galaxy-a35", "https://meli.la/26WiZy6"],
  ["galaxy-a25-5g", "https://meli.la/16gypcb"],
  ["galaxy-m35-5g", "https://meli.la/2C2R4iW"],
  ["galaxy-a55", "https://meli.la/2NMinTZ"],
  ["galaxy-s24", "https://meli.la/1jcBPte"],
  ["iphone-15", "https://meli.la/2m3GhG6"],
  ["poco-x6-pro", "https://meli.la/12mgwo6"],
  ["poco-x7-pro", "https://meli.la/1Gu5Lut"],
  ["redmi-note-13-pro", "https://meli.la/1dksoic"],
  ["redmi-note-13-4g", "https://meli.la/1s5tD1G"],
  ["redmi-note-14-pro-plus", "https://meli.la/1at28cv"],
  ["galaxy-a17-5g", "https://meli.la/33rVhq6"],
  ["galaxy-a36-5g", "https://meli.la/2kdrQ2M"],
  ["redmi-note-15-5g", "https://meli.la/1x3jBNo"],
  ["moto-g56-5g", "https://meli.la/2WiqRMo"],
  ["moto-g86-5g", "https://meli.la/2uZpELs"],
  ["edge-60-pro", "https://meli.la/1Az91Ky"],
  ["galaxy-s25-fe", "https://meli.la/1KKtEmb"],
];
const userAmazon = [
  ["galaxy-a17-5g", "https://link.amazon/B0hrqiKuQ"],
  ["galaxy-a36-5g", "https://link.amazon/B0cRCXn3S"],
  ["redmi-note-15-5g", "https://link.amazon/B0gQFVn5x"],
  ["moto-g56-5g", "https://link.amazon/B0ewfAqbv"],
  ["moto-g86-5g", "https://link.amazon/B03tWVgr1"],
  ["edge-60-pro", "https://link.amazon/B09Sm06fg"],
  ["galaxy-s25-fe", "https://link.amazon/B03cMVNVL"],
  ["redmi-note-14-pro-plus", "https://link.amazon/B0faslcvM"],
];
test("18 Mercado Livre and 8 Amazon addresses preserve exact model identity and original bytes", () => {
  assert.equal(OFFERS.length, 26);
  for (const [store, pairs] of [
    ["mercado_livre", originalML],
    ["amazon", userAmazon],
  ] as const) {
    assert.equal(OFFERS.filter((offer) => offer.store === store).length, pairs.length);
    for (const [productId, url] of pairs) {
      const offer = OFFERS.find((item) => item.productId === productId && item.store === store);
      assert.equal(offer?.url, url);
      assert.equal(new URL(url).search, "");
    }
  }
});
test("product and variant IDs are unique; every offer resolves to its own product's variant", () => {
  assert.equal(new Set(PRODUCTS.map((p) => p.id)).size, PRODUCTS.length);
  const variants = PRODUCTS.flatMap((p) => p.variants);
  assert.equal(new Set(variants.map((v) => v.id)).size, variants.length);
  for (const offer of OFFERS) {
    const variant = variants.find((v) => v.id === offer.variantId);
    assert.equal(variant?.productId, offer.productId);
    assert.equal(offer.price, null);
    assert.equal(offer.seller, null);
    assert.equal(offer.condition, null);
  }
});
test("unconfirmed commercial variant cannot satisfy an editorial 8/256 BR variant", () => {
  assert.equal(getOffers("redmi-note-15-5g").length, 2);
  assert.equal(getOffers("redmi-note-15-5g", "redmi-note-15-5g:8:256:br").length, 0);
  for (const offer of OFFERS) {
    assert.equal(offer.commercialCheckedAt, null);
    assert.notEqual(offer.validationStatus, "verified");
    assert.equal(
      getProduct(offer.productId)?.variants.find((v) => v.id === offer.variantId)?.storageGb,
      null,
    );
  }
});
test("4G, 5G, Pro, Pro+ and generation distinctions never share offer identity", () => {
  assert.equal(getOffers("redmi-note-13-5g").length, 0);
  assert.equal(getOffers("poco-x6-5g").length, 0);
  assert.equal(getOffers("edge-50-pro").length, 0);
  assert.equal(getOffers("galaxy-s24-plus").length, 0);
  assert.notEqual(getOffers("redmi-note-13-pro")[0].url, getOffers("redmi-note-13-4g")[0].url);
  assert.equal(getProductByName("Redmi Note 13"), undefined);
  assert.equal(getOfferByUrl("https://meli.la/1x3jBNo")?.productId, "redmi-note-15-5g");
});
test("budgets return documented candidates without asserting a verified price", () => {
  for (const budget of BUDGETS)
    for (const profile of ["camera", "equilibrio", "desempenho"] as const) {
      const candidates = getFinderCandidates(budget.id, profile);
      assert.deepEqual(
        new Set(candidates.map((p) => p.id)),
        new Set(getSelection(budget.id).map((p) => p.id)),
      );
      if (budget.ceiling)
        for (const p of candidates) assert.equal(fitsVerifiedBudget(p.id, budget.ceiling), false);
    }
});
test("generic model purchase options expose two original URLs with store labels, security and disclosure", () => {
  const html = renderToStaticMarkup(
    <ProductPurchaseOptions productId="redmi-note-15-5g" pageType="guia" />,
  );
  for (const url of ["https://meli.la/1x3jBNo", "https://link.amazon/B0gQFVn5x"])
    assert.ok(html.includes(`href="${url}"`));
  assert.ok(html.includes("Comprar na Amazon"));
  assert.ok(html.includes("Comprar no Mercado Livre"));
  assert.ok(html.includes(AMAZON_DISCLOSURE));
  assert.ok(html.includes("versões diferentes"));
  assert.equal((html.match(/rel="nofollow sponsored noopener noreferrer"/g) ?? []).length, 2);
  assert.ok(!html.includes("R$"));
  assert.ok(!html.includes("8 GB"));
  assert.ok(!html.includes("256 GB"));
});
test("explicit variant and unrelated models do not silently fall back to another offer", () => {
  for (const props of [
    { productId: "poco-x6-5g" },
    { productId: "redmi-note-15-5g", variantId: "redmi-note-15-5g:8:256:br" },
  ]) {
    const html = renderToStaticMarkup(<ProductPurchaseOptions {...props} pageType="guia" />);
    assert.ok(!html.includes("meli.la"));
    assert.ok(!html.includes("link.amazon"));
  }
});
test("legacy PurchaseActions adds both stores only for one identified product, limiting comparative overload", () => {
  const html = renderToStaticMarkup(
    <PurchaseActions
      options={[{ productName: "Redmi Note 14 Pro+", href: "https://meli.la/1at28cv" }]}
      pageType="review"
    />,
  );
  assert.ok(html.includes("https://link.amazon/B0faslcvM"));
  const comparison = renderToStaticMarkup(
    <PurchaseActions
      options={[
        { productName: "Redmi Note 14 Pro+", href: "https://meli.la/1at28cv" },
        { productName: "Redmi Note 13 Pro", href: "https://meli.la/1dksoic" },
      ]}
      pageType="comparativo"
    />,
  );
  assert.equal((comparison.match(/rel="nofollow sponsored noopener noreferrer"/g) ?? []).length, 2);
});
test("mobile single-product dual-store UI is collapsed and notices identify actual store", () => {
  const html = renderToStaticMarkup(
    <MobilePurchaseBar
      options={[{ productName: "Galaxy A17 5G", href: "https://meli.la/33rVhq6" }]}
      pageType="guia"
      title="Galaxy A17 5G"
    />,
  );
  assert.ok(html.includes("<details"));
  assert.ok(!html.includes("<details open"));
  assert.ok(html.includes("https://link.amazon/B0hrqiKuQ"));
  const notice = renderToStaticMarkup(<AffiliateRedirectNotice store="amazon" />);
  assert.ok(notice.includes("Amazon"));
  assert.ok(!notice.includes("Mercado Livre"));
});
test("offline analytics events distinguish store/product/variant/offer and do not report purchases", () => {
  const events: unknown[][] = [];
  const previous = globalThis.window;
  globalThis.window = {
    location: { pathname: "/ofertas" },
    gtag: (...args: unknown[]) => events.push(args),
  } as unknown as Window & typeof globalThis;
  try {
    for (const offer of getOffers("redmi-note-15-5g"))
      trackAffiliateClick({
        productName: "Redmi Note 15 5G",
        href: offer.url,
        pageType: "ofertas",
        ctaPlacement: "test_offline",
      });
    assert.equal(events.length, 2);
    for (const [index, event] of events.entries()) {
      assert.equal(event[1], "affiliate_click");
      const params = event[2] as Record<string, string>;
      assert.equal(params.destination, getOffers("redmi-note-15-5g")[index].store);
      assert.equal(params.product_id, "redmi-note-15-5g");
      assert.equal(params.variant_id, "redmi-note-15-5g:commercial-unconfirmed");
      assert.equal(params.page_path, "/ofertas");
      assert.equal(params.cta_placement, "test_offline");
      assert.ok(!("transaction_id" in params));
    }
  } finally {
    if (previous) globalThis.window = previous;
    else Reflect.deleteProperty(globalThis, "window");
  }
});
test("no redirect intentionally changes a phone model; canonicals have one centralized owner", () => {
  const redirects = readFileSync("public/_redirects", "utf8");
  assert.ok(!redirects.includes("/review/redmi-note-13 "));
  assert.ok(!redirects.includes("/review/poco-x6 "));
  const root = readFileSync("src/routes/__root.tsx", "utf8");
  assert.ok(root.includes('rel: "canonical"'));
});

test("documentary schema does not fabricate ratings or laboratory experience", () => {
  const schema = documentaryArticle("galaxy-a35", "Análise documental", "Ficha e contexto");
  assert.equal(schema["@type"], "Article");
  assert.equal(schema.about.name, getProduct("galaxy-a35")!.name);
  assert.equal(schema.mainEntityOfPage, "https://techescolhacerta.com.br/review/galaxy-a35");
  assert.ok(!JSON.stringify(schema).includes("aggregateRating"));
  assert.ok(!JSON.stringify(schema).includes("reviewRating"));
});

test("PR #43 export names remain compatible without duplicating offers", () => {
  const aliases = [
    [
      affiliateLinks.GALAXY_A17_5G_AFFILIATE_URL,
      affiliateLinks.GALAXY_A17_AFFILIATE_URL,
      "galaxy-a17-5g",
    ],
    [
      affiliateLinks.GALAXY_A36_5G_AFFILIATE_URL,
      affiliateLinks.GALAXY_A36_AFFILIATE_URL,
      "galaxy-a36-5g",
    ],
    [
      affiliateLinks.MOTO_G56_5G_AFFILIATE_URL,
      affiliateLinks.MOTO_G56_AFFILIATE_URL,
      "moto-g56-5g",
    ],
    [
      affiliateLinks.MOTO_G86_5G_AFFILIATE_URL,
      affiliateLinks.MOTO_G86_AFFILIATE_URL,
      "moto-g86-5g",
    ],
  ];
  for (const [current, legacy, id] of aliases) {
    assert.equal(current, legacy);
    assert.equal(getOfferByUrl(current)?.productId, id);
  }
  assert.equal(new Set(OFFERS.map((o) => o.url)).size, 26);
});

test("PR #43 candidates remain shared while evaluation models stay unapproved", () => {
  const ids = getSelection("ate-1500").map((p) => p.id);
  assert.deepEqual(
    new Set(ids),
    new Set(["galaxy-a17-5g", "redmi-note-15-5g", "moto-g56-5g", "moto-g86-5g", "galaxy-a36-5g"]),
  );
  for (const id of ["galaxy-a36-5g", "moto-g56-5g"])
    assert.equal(getProduct(id)?.editorialStatus, "evaluate");
  for (const id of ids) assert.equal(fitsVerifiedBudget(id, 1500), false);
});
