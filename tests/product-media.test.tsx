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
  hasCompatibleMediaRights,
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
  const pending = PRODUCT_PHOTOS.find(
    (photo) => photo.kind === "generated" && !getApprovedPhoto(photo.productId),
  )!;
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
  for (const id of ["galaxy-a37-5g"]) {
    assert.equal(getApprovedPhoto(id), undefined);
    assert.ok(!renderToStaticMarkup(<ProductMedia productId={id} />).includes(photo.src));
  }
});

test("A17 5G renders its own authorized photo while unlicensed remaining models stay neutral", () => {
  const photo = getApprovedPhoto("galaxy-a17-5g");
  assert.ok(photo);
  const original = readFileSync("public/images/products/licensed/galaxy-a17-5g-original.jpg");
  assert.equal(
    createHash("sha1").update(original).digest("hex"),
    "463678a590710bc6d4ef2155b6d6b0adea7349b0",
  );
  assert.equal(createHash("sha256").update(original).digest("hex"), photo.originalSha256);
  const html = renderToStaticMarkup(<ProductMedia productId="galaxy-a17-5g" />);
  assert.ok(html.includes(`src="${photo.src}"`));
  assert.ok(html.includes(`href="${photo.sourceUrl}"`));
  assert.ok(html.includes(`href="${photo.licenseUrl}"`));
  assert.ok(html.includes("Captainmorlypogi1959"));
  for (const id of ["moto-g56-5g", "moto-g86-5g", "galaxy-s25-fe", "galaxy-a17-4g"]) {
    assert.equal(getApprovedPhoto(id), undefined);
    const pending = renderToStaticMarkup(<ProductMedia productId={id} />);
    assert.ok(!pending.includes("<img"));
    assert.ok(pending.includes("Foto indisponível"));
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
  assert.ok(html.includes('href="https://www.amazon.com.br/dp/B0FPPJF4Y7?tag=techescolha03-20"'));
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
  assert.ok(!evaluation.includes("amazon.com.br/dp"));
});
test("all legacy JSX photo renderers use the central licensing gate", () => {
  for (const directory of ["src/routes", "src/components/site"]) {
    for (const file of readdirSync(directory).filter(
      (f) => f.endsWith(".tsx") && !["ProductMedia.tsx", "ProductGallery.tsx"].includes(f),
    ))
      assert.ok(!readFileSync(`${directory}/${file}`, "utf8").includes("<img"), file);
  }
});

test("social metadata cannot present generated product assets as real photographs", () => {
  for (const p of PRODUCTS.filter((p) => p.image))
    assert.equal(
      getSocialImage(`https://techescolhacerta.com.br${p.image}`),
      getApprovedPhoto(p.id)
        ? `https://techescolhacerta.com.br${getApprovedPhoto(p.id)!.src}`
        : "https://techescolhacerta.com.br/favicon.png",
    );
  assert.equal(
    getSocialImage("https://techescolhacerta.com.br/favicon.png"),
    "https://techescolhacerta.com.br/favicon.png",
  );
});

test("Redmi Note 15 5G and Edge 60 Pro retain licensed media and use pilot covers in storefront with both stores", () => {
  for (const id of ["redmi-note-15-5g", "edge-60-pro"]) {
    const photo = getApprovedPhoto(id);
    assert.ok(photo, id);
    const original = readFileSync(`public/images/products/licensed/${id}-original.jpg`);
    assert.equal(createHash("sha256").update(original).digest("hex"), photo.originalSha256);
    const html = renderToStaticMarkup(
      <VisualProductCard
        product={PRODUCTS.find((p) => p.id === id)!}
        pageType="ofertas"
        placement="test"
      />,
    );
    assert.ok(html.includes(`src="/images/products/gallery/${id}/01-principal.webp"`));
    assert.ok(html.includes('data-photo-status="pilot"'));
    const licensed = renderToStaticMarkup(<ProductMedia productId={id} />);
    assert.ok(licensed.includes(`src="${photo.src}"`));
    assert.ok(licensed.includes(`href="${photo.licenseUrl}"`));
    assert.ok(licensed.includes(`href="${photo.sourceUrl}"`));
    assert.ok(html.includes('data-store="amazon"'));
    assert.ok(html.includes('data-store="mercado_livre"'));
  }
  for (const id of ["redmi-note-15-pro-5g", "edge-70-pro", "redmi-note-13-4g"])
    assert.equal(getApprovedPhoto(id), undefined);
});

test("schema image arrays are also guarded instead of bypassing the photograph policy", () => {
  // Modelos sem foto licenciada continuam caindo no ícone do site.
  assert.deepEqual(
    getSocialImage([
      "https://techescolhacerta.com.br/images/products/poco-x6-pro-optimized.webp",
      "https://techescolhacerta.com.br/images/products/redmi-note-13-pro-optimized.webp",
    ]),
    ["https://techescolhacerta.com.br/favicon.png"],
  );
  // Modelos com foto licenciada usam a própria foto.
  assert.deepEqual(
    getSocialImage(["https://techescolhacerta.com.br/images/products/galaxy-a55-optimized.webp"]),
    ["https://techescolhacerta.com.br/images/products/licensed/galaxy-a55.webp"],
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

test("commercial partner renders support their own license without borrowing a CC license", () => {
  // A metadata fixture only: no render is downloaded or shipped by this test.
  const fixture = {
    ...getApprovedPhoto("galaxy-a36-5g")!,
    kind: "official-render" as const,
    licenseLabel: "Autorização comercial de teste",
    commercialRights: {
      rightsHolder: "Titular de teste",
      evidenceUrl: "https://example.com/license",
      scope: "site-wide-two-store" as const,
      hostLocally: true,
      convertToWebp: true,
      redistributeInRepository: true,
      validUntil: null,
    },
  };
  PRODUCT_PHOTOS.unshift(fixture);
  try {
    assert.equal(getApprovedPhoto(fixture.productId), fixture);
    const html = renderToStaticMarkup(<ProductMedia productId={fixture.productId} />);
    assert.ok(html.includes("Autorização comercial de teste"));
    assert.ok(html.includes("Imagem:"));
  } finally {
    PRODUCT_PHOTOS.shift();
  }
});

test("shared storefront rejects store-only, expired or incomplete partner permissions", () => {
  const fixture = {
    ...getApprovedPhoto("galaxy-a36-5g")!,
    kind: "official-render" as const,
    licenseLabel: "Licença comercial",
    commercialRights: {
      rightsHolder: "Titular de teste",
      evidenceUrl: "https://example.com/license",
      scope: "site-wide-two-store" as const,
      hostLocally: true,
      convertToWebp: true,
      redistributeInRepository: true,
      validUntil: null as string | null,
    },
  };
  assert.equal(hasCompatibleMediaRights(fixture), true);
  for (const scope of ["amazon-only", "mercado-livre-only"] as const)
    assert.equal(
      hasCompatibleMediaRights({
        ...fixture,
        commercialRights: { ...fixture.commercialRights, scope },
      }),
      false,
    );
  for (const key of ["hostLocally", "convertToWebp", "redistributeInRepository"] as const)
    assert.equal(
      hasCompatibleMediaRights({
        ...fixture,
        commercialRights: { ...fixture.commercialRights, [key]: false },
      }),
      false,
    );
  for (const validUntil of ["2020-01-01T00:00:00Z", "invalid"])
    assert.equal(
      hasCompatibleMediaRights({
        ...fixture,
        commercialRights: { ...fixture.commercialRights, validUntil },
      }),
      false,
    );
  assert.equal(hasCompatibleMediaRights({ ...fixture, commercialRights: undefined }), false);
});

test("all 40 pilot assets exist and six storefront covers match their exact gallery model", async () => {
  const { PILOT_GALLERIES } = await import("../src/lib/pilot-galleries");
  const { ProductGallery } = await import("../src/components/site/ProductGallery");
  let count = 0;
  for (const [id, images] of Object.entries(PILOT_GALLERIES)) {
    const product = PRODUCTS.find((p) => p.id === id)!;
    const gallery = renderToStaticMarkup(<ProductGallery productId={id} productName={product.name} />);
    for (const image of images) {
      const bytes = readFileSync(`public${image.src}`);
      assert.equal(bytes.toString("ascii", 0, 4), "RIFF");
      assert.equal(bytes.toString("ascii", 8, 12), "WEBP");
      assert.ok(gallery.includes(`src="${image.src}"`));
      count++;
    }
    const card = renderToStaticMarkup(<VisualProductCard product={product} pageType="ofertas" placement="test" />);
    assert.ok(card.includes(`src="${images[0].src}"`));
    assert.ok(card.includes('data-photo-status="pilot"'));
    assert.ok(!card.includes('rel="license'));
  }
  assert.equal(count, 40);
});
