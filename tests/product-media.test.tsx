import { ProductCard } from "../src/components/site/ProductCard";
import { createHash } from "node:crypto";
import licensedPhotos from "../src/lib/licensed-product-photos.json";
import candidates from "../docs/photo-candidates.json";
import { EditorialSelection } from "../src/components/site/EditorialSelection";
import { test } from "node:test";
import assert from "node:assert/strict";
import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync, readdirSync } from "node:fs";
import { PRODUCTS } from "../src/lib/product-catalog";
import {
  PRODUCT_PHOTOS,
  COMPARISON_PRODUCTS,
  getApprovedPhoto,
  productForImage,
  getSocialImage,
} from "../src/lib/product-media";
import { ProductMedia } from "../src/components/site/ProductMedia";
import { VisualProductCard } from "../src/components/site/VisualProductCard";

test("unlicensed existing assets are preserved but never displayed as product photographs", () => {
  for (const product of PRODUCTS) {
    const html = renderToStaticMarkup(<ProductMedia productId={product.id} />);
    const photo = getApprovedPhoto(product.id);
    if (!photo) {
      assert.ok(!html.includes("<img"));
      assert.ok(html.includes("Foto indisponível"));
    }
    assert.ok(html.includes(product.name));
  }
});
test("media identity uses exact catalog paths and never substitutes 4G, 5G, Pro or Pro+", () => {
  for (const p of PRODUCTS.filter((p) => p.image)) assert.equal(productForImage(p.image)?.id, p.id);
  assert.equal(productForImage("/images/products/redmi-note-13.webp"), undefined);
  const html = renderToStaticMarkup(
    <ProductMedia
      productId="redmi-note-13-4g"
      src="/images/products/redmi-note-13-pro-optimized.webp"
    />,
  );
  assert.ok(html.includes('data-product-media="redmi-note-13-4g"'));
  assert.ok(!html.includes("<img"));
  assert.equal(new Set(PRODUCT_PHOTOS.map((p) => p.src)).size, PRODUCT_PHOTOS.length);
});
test("approval fails closed when licensing or dimensions are absent", () => {
  const pending = PRODUCT_PHOTOS.find((photo) => photo.kind === "generated")!;
  const original = { ...pending };
  try {
    pending.status = "approved";
    assert.equal(getApprovedPhoto(pending.productId), undefined);
  } finally {
    Object.assign(pending, original);
  }
});

test("approved A36 photograph renders local bytes and linked ShareAlike attribution only for A36", () => {
  const photo = getApprovedPhoto("galaxy-a36-5g");
  assert.ok(photo);
  assert.equal(photo.width, 462);
  assert.equal(photo.height, 960);
  const original = readFileSync("public/images/products/licensed/galaxy-a36-5g-original.jpg");
  assert.equal(createHash("sha256").update(original).digest("hex"), photo.originalSha256);
  const html = renderToStaticMarkup(<ProductMedia productId="galaxy-a36-5g" />);
  assert.ok(html.includes('src="/images/products/licensed/galaxy-a36-5g.webp"'));
  assert.ok(html.includes(`href="${photo.sourceUrl}"`));
  assert.ok(html.includes(`href="${photo.licenseUrl}"`));
  assert.ok(html.includes("Captainmorlypogi1959 (recorte: Panam2014)"));
  assert.ok(html.includes("Derivado sob CC BY-SA 4.0"));
  for (const id of ["galaxy-a35", "galaxy-a37-5g", "galaxy-a17-5g"]) {
    assert.equal(getApprovedPhoto(id), undefined);
    assert.ok(!renderToStaticMarkup(<ProductMedia productId={id} />).includes(photo.src));
  }
});
test("comparison pairs resolve distinct exact models for all nine existing URLs", () => {
  assert.equal(Object.keys(COMPARISON_PRODUCTS).length, 9);
  for (const pair of Object.values(COMPARISON_PRODUCTS)) {
    assert.notEqual(pair[0], pair[1]);
    for (const id of pair) assert.ok(PRODUCTS.some((p) => p.id === id));
  }
});
test("visual cards retain both commercial destinations and do not activate evaluation models", () => {
  const html = renderToStaticMarkup(
    <VisualProductCard
      product={PRODUCTS.find((p) => p.id === "galaxy-a17-5g")!}
      pageType="home"
      placement="test"
    />,
  );
  assert.ok(html.includes('href="https://meli.la/33rVhq6"'));
  assert.ok(html.includes('href="https://link.amazon/B0hrqiKuQ"'));
  assert.ok(html.includes("Variante a conferir na loja"));
  assert.ok(html.includes('rel="nofollow sponsored noopener noreferrer"'));
  const evaluation = renderToStaticMarkup(
    <VisualProductCard
      product={PRODUCTS.find((p) => p.id === "galaxy-a36-5g")!}
      pageType="home"
      placement="test"
    />,
  );
  assert.ok(!evaluation.includes("meli.la"));
  assert.ok(!evaluation.includes("link.amazon"));
});
test("all legacy JSX photo renderers use the central licensing gate", () => {
  for (const directory of ["src/routes", "src/components/site"]) {
    for (const file of readdirSync(directory).filter(
      (f) => f.endsWith(".tsx") && f !== "ProductMedia.tsx",
    ))
      assert.ok(!readFileSync(`${directory}/${file}`, "utf8").includes("<img"), file);
  }
});

test("social metadata cannot present generated product assets as real photographs", () => {
  for (const p of PRODUCTS.filter((p) => p.image))
    assert.equal(
      getSocialImage(`https://techescolhacerta.com.br${p.image}`),
      "https://techescolhacerta.com.br/favicon.png",
    );
  assert.equal(
    getSocialImage("https://techescolhacerta.com.br/favicon.png"),
    "https://techescolhacerta.com.br/favicon.png",
  );
});

test("schema image arrays are also guarded instead of bypassing the photograph policy", () => {
  assert.deepEqual(
    getSocialImage([
      "https://techescolhacerta.com.br/images/products/galaxy-a55-optimized.webp",
      "https://techescolhacerta.com.br/images/products/galaxy-a35-optimized.webp",
    ]),
    ["https://techescolhacerta.com.br/favicon.png"],
  );
});

test("an ambiguous legacy Note 13 name cannot borrow the Pro photograph", () => {
  const html = renderToStaticMarkup(
    <ProductCard
      product={{
        name: "Xiaomi Redmi Note 13",
        image: "/images/products/redmi-note-13-pro-optimized.webp",
        rating: 0,
        price: "Consultar na loja",
        description: "Modelo não especificado",
      }}
    />,
  );
  assert.ok(html.includes('data-product-media="unidentified"'));
  assert.ok(!html.includes('data-product-media="redmi-note-13-pro"'));
  assert.ok(!html.includes("<img"));
});

test("licensed imports have exact documented provenance and intact local WebP bytes", () => {
  const records = licensedPhotos as typeof PRODUCT_PHOTOS;
  assert.equal(new Set(records.map((p) => p.productId)).size, records.length);
  for (const photo of records) {
    const candidate = candidates.find((p) => p.productId === photo.productId);
    assert.ok(candidate, photo.productId);
    assert.equal(photo.sourceUrl, candidate.sourceUrl);
    assert.equal(photo.author, candidate.author);
    assert.equal(photo.licenseUrl, candidate.licenseUrl);
    assert.equal(photo.src, `/images/products/licensed/${photo.productId}.webp`);
    const bytes = readFileSync(`public${photo.src}`);
    assert.equal(bytes.toString("ascii", 0, 4), "RIFF");
    assert.equal(bytes.toString("ascii", 8, 12), "WEBP");
    assert.equal(createHash("sha256").update(bytes).digest("hex"), photo.sha256);
    if (photo.status === "approved") assert.ok(getApprovedPhoto(photo.productId));
  }
  console.log(
    `Modelos com fotografias reais locais aprovadas: ${records.filter((p) => getApprovedPhoto(p.productId)).length}`,
  );
});

test("storefront prioritizes models with two stores without activating evaluation products", () => {
  const html = renderToStaticMarkup(
    <EditorialSelection productIds={["galaxy-a36-5g", "redmi-note-15-5g"]} />,
  );
  assert.ok(
    html.indexOf('data-visual-product="redmi-note-15-5g"') <
      html.indexOf('data-visual-product="galaxy-a36-5g"'),
  );
  const card = renderToStaticMarkup(
    <VisualProductCard
      product={PRODUCTS.find((p) => p.id === "redmi-note-15-5g")!}
      pageType="home"
      placement="test"
    />,
  );
  assert.ok(card.indexOf('data-store="amazon"') < card.indexOf("Resumo e ponto de atenção"));
});
