import { PRODUCTS } from "./product-catalog";
import licensedPhotos from "./licensed-product-photos.json";
import commercialPhotos from "./commercial-product-photos.json";

export type ProductPhoto = {
  productId: string;
  kind: "photograph" | "official-render" | "generated";
  licenseLabel?: string;
  commercialRights?: {
    rightsHolder: string;
    evidenceUrl: string;
    scope: "site-wide-two-store" | "amazon-only" | "mercado-livre-only";
    hostLocally: boolean;
    convertToWebp: boolean;
    redistributeInRepository: boolean;
    validUntil: string | null;
  };
  src: string;
  width: number;
  height: number;
  alt: string;
  author: string;
  sourceUrl: string;
  licenseUrl: string;
  permissionEvidence: string;
  changes: string;
  status: "approved" | "pending";
  reviewedBy?: string;
  reviewedAt?: string;
  originalSha256?: string;
  sha256?: string;
};

// An existing file or a manufacturer's product page does not establish a license.
// Approve only after identity, permission and the downloaded asset are checked.
export const PRODUCT_PHOTOS: ProductPhoto[] = [
  ...(commercialPhotos as ProductPhoto[]),
  ...(licensedPhotos as ProductPhoto[]),
  ...PRODUCTS.filter((p) => p.image).map(
    (p): ProductPhoto => ({
      productId: p.id,
      kind: "generated",
      src: p.image!,
      width: 0,
      height: 0,
      alt: p.name,
      author: "Gerada com ChatGPT, conforme informação do responsável",
      sourceUrl: "",
      licenseUrl: "",
      permissionEvidence:
        "Imagem gerada por IA. Não elegível como fotografia real do aparelho; não há validação visual de identidade.",
      changes: "Arquivo anterior preservado; não habilitado na apresentação visual.",
      status: "pending",
    }),
  ),
];

// Partner licenses are supported independently of Creative Commons.
// Store-restricted API content must use that store's official integration, never a shared card.
export function hasCompatibleMediaRights(photo: ProductPhoto): boolean {
  if (!photo.commercialRights)
    return (
      photo.kind === "photograph" &&
      photo.licenseUrl === "https://creativecommons.org/licenses/by-sa/4.0/"
    );
  const rights = photo.commercialRights;
  return !!(
    typeof photo.licenseLabel === "string" &&
    photo.licenseLabel.trim() &&
    typeof rights.rightsHolder === "string" &&
    rights.rightsHolder.trim() &&
    /^https:\/\//.test(rights.evidenceUrl) &&
    rights.scope === "site-wide-two-store" &&
    rights.hostLocally === true &&
    rights.convertToWebp === true &&
    rights.redistributeInRepository === true &&
    (rights.validUntil === null ||
      (/^\d{4}-\d{2}-\d{2}T/.test(rights.validUntil) && Date.parse(rights.validUntil) > Date.now()))
  );
}

export function getApprovedPhoto(productId: string): ProductPhoto | undefined {
  return PRODUCT_PHOTOS.find(
    (p) =>
      p.productId === productId &&
      p.status === "approved" &&
      (p.kind === "photograph" || p.kind === "official-render") &&
      hasCompatibleMediaRights(p) &&
      p.width > 0 &&
      p.height > 0 &&
      p.sourceUrl &&
      p.author &&
      p.licenseUrl &&
      p.permissionEvidence &&
      p.reviewedBy &&
      p.reviewedAt &&
      p.originalSha256?.match(/^[a-f0-9]{64}$/) &&
      p.sha256?.match(/^[a-f0-9]{64}$/) &&
      p.src.startsWith("/images/products/licensed/"),
  );
}

export function productForImage(src?: string) {
  if (!src) return undefined;
  const path = src.replace("https://techescolhacerta.com.br", "");
  // Exact paths only: no fuzzy 4G/5G/Pro matching.
  return PRODUCTS.find((p) => p.image === path);
}

// These are summaries of technical statements already present in the project,
// not new tests, commercial variants or verified availability.
export const PRODUCT_VISUAL_FACTS: Record<string, { profile: string; facts: string[] }> = {
  "galaxy-a17-5g": {
    profile: "Uso básico",
    facts: ["Super AMOLED de 90 Hz", "Bateria de 5.000 mAh", "Câmera principal com OIS"],
  },
  "redmi-note-15-5g": {
    profile: "Uso cotidiano",
    facts: ["AMOLED de 120 Hz", "Snapdragon 6 Gen 3", "Bateria de 5.520 mAh"],
  },
  "moto-g86-5g": {
    profile: "Uso misto",
    facts: ["pOLED 1.5K de 120 Hz", "Bateria de 5.200 mAh", "Proteção IP68 e IP69"],
  },
  "poco-x7-pro": {
    profile: "Jogos e desempenho",
    facts: ["Dimensity 8400-Ultra", "AMOLED de 120 Hz", "Carregamento de 90 W"],
  },
  "edge-60-pro": {
    profile: "Câmeras e uso misto",
    facts: ["Dimensity 8350 Extreme", "Câmera teleobjetiva", "Carregamento de 90 W"],
  },
  "galaxy-s25-fe": {
    profile: "Experiência premium",
    facts: ["Exynos 2400", "Tela AMOLED de 120 Hz", "Câmera com zoom óptico"],
  },
  "redmi-note-14-pro-plus": {
    profile: "Câmera e recarga",
    facts: ["Câmera principal de 200 MP", "Proteção IP68", "Carregamento de 120 W"],
  },
};

export const COMPARISON_PRODUCTS: Record<string, readonly [string, string]> = {
  "/comparativo/galaxy-a25-vs-redmi-note-13": ["galaxy-a25-5g", "redmi-note-13-4g"],
  "/comparativo-galaxy-a55-vs-galaxy-a35": ["galaxy-a55", "galaxy-a35"],
  "/comparativo/galaxy-a35-vs-redmi-note-13-pro": ["galaxy-a35", "redmi-note-13-pro"],
  "/comparativo/galaxy-a55-vs-redmi-note-13-pro": ["galaxy-a55", "redmi-note-13-pro"],
  "/comparativo/galaxy-a55-vs-poco-x6-pro": ["galaxy-a55", "poco-x6-pro"],
  "/comparativo/iphone-15-vs-galaxy-s24": ["iphone-15", "galaxy-s24"],
  "/comparativo/redmi-note-13-pro-vs-redmi-note-14-pro-plus": [
    "redmi-note-13-pro",
    "redmi-note-14-pro-plus",
  ],
  "/comparativo/redmi-note-13-pro-vs-poco-x6-pro": ["redmi-note-13-pro", "poco-x6-pro"],
  "/comparativo/poco-x6-pro-vs-poco-x7-pro": ["poco-x6-pro", "poco-x7-pro"],
};

/** Keep social metadata valid without promoting an AI illustration as a real product photo. */
export function getSocialImage(src: string): string;
export function getSocialImage(src: readonly string[]): string[];
export function getSocialImage(src: string | readonly string[]): string | string[] {
  if (typeof src !== "string") return [...new Set(src.map((value) => getSocialImage(value)))];
  if (!src.includes("/images/products/")) return src;
  const product = productForImage(src);
  const photo = product && getApprovedPhoto(product.id);
  return photo
    ? `https://techescolhacerta.com.br${photo.src}`
    : "https://techescolhacerta.com.br/favicon.png";
}
