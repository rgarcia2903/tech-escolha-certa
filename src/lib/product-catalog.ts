import * as links from "./affiliate-links";

export type Store = "amazon" | "mercado_livre";
export type EditorialStatus = "candidate" | "previous_generation" | "evaluate";
export type ValidationStatus = "user_supplied" | "legacy_unverified" | "verified";
export type Source = { url: string; checkedAt: string; scope: string };
export type ProductVariant = {
  id: string;
  productId: string;
  ramGb: number | null;
  storageGb: number | null;
  connectivity: "4G" | "5G" | "unconfirmed";
  region: string | null;
  status: "documented" | "commercial_unconfirmed";
  sources: Source[];
};
export type Product = {
  id: string;
  name: string;
  brand: "Samsung" | "Motorola" | "Xiaomi" | "POCO" | "Apple";
  connectivity: ProductVariant["connectivity"];
  editorialStatus: EditorialStatus;
  summary: string;
  caution: string;
  image?: string;
  reviewPath?: string;
  officialUrl?: string;
  updatedAt: string;
  sources: Source[];
  variants: ProductVariant[];
};

const REVIEWED_AT = "2026-10-16";
const old =
  "Geração anterior: compare o preço final, a versão e o suporte restante com alternativas mais recentes.";
function product(
  id: string,
  name: string,
  brand: Product["brand"],
  editorialStatus: EditorialStatus,
  summary: string,
  options: Partial<
    Pick<Product, "image" | "reviewPath" | "officialUrl" | "caution" | "connectivity">
  > = {},
): Product {
  const connectivity = options.connectivity ?? "5G";
  const sources: Source[] = options.officialUrl
    ? [
        {
          url: options.officialUrl,
          checkedAt: REVIEWED_AT,
          scope:
            "Identidade e ficha técnica do fabricante; não confirma anúncio, preço ou estoque.",
        },
      ]
    : [];
  return {
    id,
    name,
    brand,
    editorialStatus,
    summary,
    caution:
      options.caution ??
      (editorialStatus === "previous_generation"
        ? old
        : "Compare a configuração, o preço final, a procedência e as condições na loja. Sem preço ou estoque verificados pelo site."),
    ...options,
    connectivity,
    sources,
    updatedAt: REVIEWED_AT,
    variants: [
      {
        id: `${id}:commercial-unconfirmed`,
        productId: id,
        ramGb: null,
        storageGb: null,
        connectivity,
        region: null,
        status: "commercial_unconfirmed",
        sources: [],
      },
    ],
  };
}
const image = (id: string) => `/images/products/${id}-optimized.webp`;
export const PRODUCTS: Product[] = [
  product(
    "galaxy-a17-5g",
    "Galaxy A17 5G",
    "Samsung",
    "candidate",
    "Opção para uso básico; avalie RAM física e suporte antes de escolher.",
    {
      officialUrl:
        "https://www.samsung.com/br/smartphones/galaxy-a/galaxy-a17-5g-gray-128gb-sm-a176bzaozto/",
      reviewPath: "/review/galaxy-a17-5g",
    },
  ),
  product(
    "galaxy-a36-5g",
    "Galaxy A36 5G",
    "Samsung",
    "evaluate",
    "Candidato para uso cotidiano e suporte; compare com o A37 antes de decidir.",
    {
      reviewPath: "/review/galaxy-a36-5g",
      officialUrl:
        "https://news.samsung.com/br/o-seu-primeiro-smartphone-galaxy-com-ai-samsung-apresenta-galaxy-a56-a36-e-a26-com-evolucao-da-inteligencia-artificial",
    },
  ),
  product(
    "redmi-note-15-5g",
    "Redmi Note 15 5G",
    "Xiaomi",
    "candidate",
    "Tela AMOLED de 120 Hz, Snapdragon 6 Gen 3 e bateria de 5.520 mAh para uso cotidiano.",
    {
      reviewPath: "/review/redmi-note-15-5g",
      image: image("redmi-note-15-5g"),
      officialUrl: "https://www.mi.com/br/product/redmi-note-15-5g/specs/",
      caution:
        "Não é o Note 15 4G nem o Pro. Jogos pesados pedem comparação com a linha POCO. Confirme a memória no anúncio.",
    },
  ),
  product(
    "moto-g56-5g",
    "Moto G56 5G",
    "Motorola",
    "candidate",
    "Resistente (IP68/IP69), com 256 GB e bateria de 5.200 mAh; vale a pena só com desconto, por causa da tela LCD.",
    {
      reviewPath: "/review/moto-g56-5g", officialUrl: "https://www.motorola.com.br/smartphone-moto-g56-5g-256gb/p" },
  ),
  product(
    "moto-g86-5g",
    "Moto G86 5G",
    "Motorola",
    "candidate",
    "Opção para uso misto, tela e resistência; compare com os POCO para jogos pesados.",
    {
      reviewPath: "/review/moto-g86-5g",
      image: image("moto-g86"),
      officialUrl: "https://www.motorola.com.br/smartphone-moto-g86-5g-256gb/p",
    },
  ),
  product(
    "edge-60-pro",
    "Motorola Edge 60 Pro",
    "Motorola",
    "candidate",
    "Conjunto de câmeras, recarga e desempenho para uso misto; compare também com o Edge 70 Pro.",
    {
      reviewPath: "/review/edge-60-pro", officialUrl: "https://www.motorola.com.br/smartphone-motorola-edge-60-pro-5g-256gb/p" },
  ),
  product(
    "galaxy-s25-fe",
    "Galaxy S25 FE",
    "Samsung",
    "candidate",
    "Alternativa premium por condições de compra; compare o custo total com o S26 FE.",
    {
      reviewPath: "/review/galaxy-s25-fe",
      officialUrl:
        "https://www.samsung.com/br/smartphones/galaxy-s/galaxy-s25-fe-navy-256gb-sm-s731bdbkzto/",
    },
  ),
  product(
    "galaxy-a25-5g",
    "Galaxy A25 5G",
    "Samsung",
    "previous_generation",
    "Alternativa anterior para quem busca tela AMOLED e conectividade 5G.",
  ),
  product(
    "galaxy-a35",
    "Galaxy A35 5G",
    "Samsung",
    "previous_generation",
    "Alternativa anterior com proteção IP67 e experiência Samsung.",
    {
      image: image("galaxy-a35"),
      reviewPath: "/review/galaxy-a35",
      officialUrl:
        "https://news.samsung.com/br/samsung-galaxy-a55-5g-e-galaxy-a35-5g-inovacoes-incriveis-e-seguranca-projetada-para-todos",
    },
  ),
  product(
    "galaxy-a55",
    "Galaxy A55 5G",
    "Samsung",
    "previous_generation",
    "Alternativa anterior para câmera, construção e uso cotidiano.",
    {
      image: image("galaxy-a55"),
      reviewPath: "/review/galaxy-a55",
      officialUrl:
        "https://news.samsung.com/br/samsung-galaxy-a55-5g-e-galaxy-a35-5g-inovacoes-incriveis-e-seguranca-projetada-para-todos",
    },
  ),
  product(
    "galaxy-m35-5g",
    "Galaxy M35 5G",
    "Samsung",
    "previous_generation",
    "Alternativa anterior voltada à autonomia; compare peso e suporte restante.",
    { image: image("galaxy-m35") },
  ),
  product(
    "galaxy-m55",
    "Galaxy M55",
    "Samsung",
    "evaluate",
    "Seleção anterior a reavaliar em autonomia, suporte e preço.",
  ),
  product(
    "galaxy-s24",
    "Galaxy S24",
    "Samsung",
    "previous_generation",
    "Premium compacto de geração anterior; compare variante, bateria e custo total.",
    {
      image: image("galaxy-s24"),
      reviewPath: "/review/galaxy-s24",
      officialUrl:
        "https://news.samsung.com/br/linha-samsung-galaxy-s24-ja-esta-disponivel-globalmente",
    },
  ),
  product(
    "galaxy-s24-plus",
    "Galaxy S24+",
    "Samsung",
    "evaluate",
    "Alternativa de maior porte; não usar o link do S24 padrão.",
  ),
  product(
    "iphone-15",
    "iPhone 15",
    "Apple",
    "previous_generation",
    "iOS de geração anterior; compare armazenamento e recursos com modelos posteriores.",
    {
      image: image("iphone-15"),
      reviewPath: "/review/iphone-15",
      officialUrl: "https://support.apple.com/pt-br/111831",
    },
  ),
  product(
    "redmi-note-13-4g",
    "Redmi Note 13 4G",
    "Xiaomi",
    "previous_generation",
    "Alternativa econômica sem 5G; não confundir com o Note 13 5G ou Pro.",
    { connectivity: "4G", officialUrl: "https://www.mi.com/global/product/redmi-note-13/specs/" },
  ),
  product(
    "redmi-note-13-5g",
    "Redmi Note 13 5G",
    "Xiaomi",
    "previous_generation",
    "Modelo sem Pro; não usar links das versões 4G ou Pro.",
  ),
  product(
    "redmi-note-13-pro",
    "Redmi Note 13 Pro 5G",
    "Xiaomi",
    "previous_generation",
    "Alternativa anterior para tela, câmera principal e recarga; preço relativo é decisivo.",
    { image: image("redmi-note-13-pro"), reviewPath: "/review/redmi-note-13-pro" },
  ),
  product(
    "redmi-note-14-pro-plus",
    "Redmi Note 14 Pro+ 5G",
    "Xiaomi",
    "previous_generation",
    "Alternativa anterior com IP68 e recarga de 120 W; compare o custo total com opções posteriores.",
    {
      image: image("redmi-note-14-pro-plus"),
      reviewPath: "/review/redmi-note-14-pro-plus",
      officialUrl: "https://www.mi.com/br/product/redmi-note-14-pro-plus-5g/specs/",
    },
  ),
  product(
    "redmi-note-15-pro-5g",
    "Redmi Note 15 Pro 5G",
    "Xiaomi",
    "evaluate",
    "Candidato para câmera e resistência; requer avaliação comercial da variante.",
    { officialUrl: "https://www.mi.com/br/product/redmi-note-15-pro-5g/specs/" },
  ),
  product(
    "poco-m6-pro-4g",
    "POCO M6 Pro 4G",
    "POCO",
    "previous_generation",
    "Alternativa antiga sem 5G; confirmar o nome completo e o chip.",
    { connectivity: "4G" },
  ),
  product(
    "poco-x6-5g",
    "POCO X6 5G",
    "POCO",
    "previous_generation",
    "Modelo sem Pro; seu anúncio não pode ser trocado pelo do X6 Pro.",
  ),
  product(
    "poco-x6-pro",
    "POCO X6 Pro",
    "POCO",
    "previous_generation",
    "Alternativa de desempenho se a economia justificar a geração anterior.",
    { image: image("poco-x6-pro"), reviewPath: "/review/poco-x6-pro" },
  ),
  product(
    "poco-x7-pro",
    "POCO X7 Pro",
    "POCO",
    "candidate",
    "Opção de desempenho; compare o preço da mesma configuração com o X8 Pro.",
    {
      image: image("poco-x7-pro"),
      reviewPath: "/review/poco-x7-pro",
      officialUrl: "https://www.mi.com/br/product/poco-x7-pro/specs/",
    },
  ),
  product(
    "poco-x8-pro",
    "POCO X8 Pro",
    "POCO",
    "candidate",
    "Dimensity 8500-Ultra, LPDDR5X e UFS 4.1: candidato para jogos, sem promessa de FPS.",
    { officialUrl: "https://www.mi.com/br/product/poco-x8-pro/specs/" },
  ),
  product(
    "moto-g84-5g",
    "Moto G84 5G",
    "Motorola",
    "previous_generation",
    "Alternativa antiga; reavaliar suporte e condições antes de comprar.",
  ),
  product(
    "edge-50-neo",
    "Motorola Edge 50 Neo",
    "Motorola",
    "evaluate",
    "Alternativa anterior; conferir câmera, suporte e condições comerciais.",
  ),
  product(
    "edge-50-pro",
    "Motorola Edge 50 Pro",
    "Motorola",
    "previous_generation",
    "Alternativa anterior de recarga rápida; não confundir com Edge 60 Pro.",
    { image: image("edge-50-pro") },
  ),
  product(
    "xiaomi-15t",
    "Xiaomi 15T",
    "Xiaomi",
    "evaluate",
    "Alternativa premium a comparar com gerações posteriores e garantia da unidade.",
    { officialUrl: "https://www.mi.com/br/product/xiaomi-15t/specs/" },
  ),
  product(
    "galaxy-a37-5g",
    "Galaxy A37 5G",
    "Samsung",
    "evaluate",
    "Candidato com política de suporte anunciada pela Samsung; preço por variante pendente.",
    {
      officialUrl:
        "https://news.samsung.com/br/samsung-apresenta-galaxy-a57-5g-e-galaxy-a37-5g-no-brasil-com-recursos-de-nivel-profissional",
    },
  ),
  product(
    "galaxy-a57-5g",
    "Galaxy A57 5G",
    "Samsung",
    "candidate",
    "Intermediário mais novo da Samsung: Exynos 1680, tela AMOLED de 120 Hz, IP68, 6,9 mm e seis anos de atualizações.",
    {
      reviewPath: "/review/galaxy-a57-5g",
      officialUrl:
        "https://news.samsung.com/br/samsung-apresenta-galaxy-a57-5g-e-galaxy-a37-5g-no-brasil-com-recursos-de-nivel-profissional",
    },
  ),
  product(
    "galaxy-s26-fe",
    "Galaxy S26 FE",
    "Samsung",
    "evaluate",
    "Candidato premium a comparar com S25 FE; sem oferta validada no site.",
    {
      officialUrl:
        "https://news.samsung.com/br/samsung-galaxy-s26-fe-chega-ao-brasil-com-one-ui-9-sete-atualizacoes-de-sistema-operacional-e-de-seguranca-camera-avancada-processador-de-alta-performance-e-galaxy-ai",
    },
  ),
  product(
    "galaxy-s26",
    "Galaxy S26",
    "Samsung",
    "evaluate",
    "Candidato premium; confirmar configuração e condições antes de recomendar compra.",
    { officialUrl: "https://www.samsung.com/br/smartphones/galaxy-s26/specs/" },
  ),
  product(
    "iphone-17",
    "iPhone 17",
    "Apple",
    "evaluate",
    "Candidato iOS com ProMotion de até 120 Hz; preço e oferta pendentes.",
    { officialUrl: "https://www.apple.com/br/iphone-17/specs/" },
  ),
  product(
    "iphone-18-pro",
    "iPhone 18 Pro",
    "Apple",
    "evaluate",
    "Sucessor anunciado oficialmente; não confundir com iPhone 17 ou 15.",
    {
      officialUrl:
        "https://www.apple.com/br/newsroom/2026/09/apple-debuts-iphone-18-pro-and-iphone-18-pro-max/",
    },
  ),
];

// Variantes documentadas são dados técnicos, não confirmação dos anúncios.
const note15 = PRODUCTS.find((p) => p.id === "redmi-note-15-5g")!;
note15.variants.push(
  ...[256, 512].map(
    (storageGb): ProductVariant => ({
      id: `${note15.id}:8:${storageGb}:br`,
      productId: note15.id,
      ramGb: 8,
      storageGb,
      connectivity: "5G",
      region: "BR",
      status: "documented",
      sources: note15.sources,
    }),
  ),
);

export type Offer = {
  id: string;
  productId: string;
  variantId: string;
  store: Store;
  url: string;
  validationStatus: ValidationStatus;
  providedBy: "user" | "existing_repository";
  commercialCheckedAt: string | null;
  condition: string | null;
  seller: string | null;
  price: number | null;
};
const ml: [string, string][] = [
  ["galaxy-a35", links.GALAXY_A35_AFFILIATE_URL],
  ["galaxy-a25-5g", links.GALAXY_A25_AFFILIATE_URL],
  ["galaxy-a55", links.GALAXY_A55_AFFILIATE_URL],
  ["iphone-15", links.IPHONE_15_AFFILIATE_URL],
  ["poco-x6-pro", links.POCO_X6_PRO_AFFILIATE_URL],
  ["poco-x7-pro", links.POCO_X7_PRO_AFFILIATE_URL],
  ["redmi-note-13-pro", links.REDMI_NOTE_13_PRO_AFFILIATE_URL],
  ["redmi-note-13-4g", links.REDMI_NOTE_13_4G_AFFILIATE_URL],
  ["redmi-note-14-pro-plus", links.REDMI_NOTE_14_PRO_PLUS_AFFILIATE_URL],
  ["galaxy-a17-5g", links.GALAXY_A17_AFFILIATE_URL],
  ["galaxy-a36-5g", links.GALAXY_A36_AFFILIATE_URL],
  ["redmi-note-15-5g", links.REDMI_NOTE_15_5G_AFFILIATE_URL],
  ["moto-g56-5g", links.MOTO_G56_AFFILIATE_URL],
  ["moto-g86-5g", links.MOTO_G86_AFFILIATE_URL],
  ["edge-60-pro", links.EDGE_60_PRO_AFFILIATE_URL],
  ["galaxy-s25-fe", links.GALAXY_S25_FE_AFFILIATE_URL],
  ["galaxy-a57-5g", links.GALAXY_A57_AFFILIATE_URL],
];
const amazon: [string, string][] = [
  ["galaxy-a17-5g", links.GALAXY_A17_AMAZON_URL],
  ["galaxy-a36-5g", links.GALAXY_A36_AMAZON_URL],
  ["redmi-note-15-5g", links.REDMI_NOTE_15_5G_AMAZON_URL],
  ["moto-g56-5g", links.MOTO_G56_AMAZON_URL],
  ["moto-g86-5g", links.MOTO_G86_AMAZON_URL],
  ["edge-60-pro", links.EDGE_60_PRO_AMAZON_URL],
  ["galaxy-s25-fe", links.GALAXY_S25_FE_AMAZON_URL],
  ["redmi-note-14-pro-plus", links.REDMI_NOTE_14_PRO_PLUS_AMAZON_URL],
  ["galaxy-s24", links.GALAXY_S24_AFFILIATE_URL],
  ["poco-x7-pro", links.POCO_X7_PRO_AMAZON_URL],
  ["galaxy-a57-5g", links.GALAXY_A57_AMAZON_URL],
];
function offer(productId: string, store: Store, url: string, legacy = false): Offer {
  return {
    id: `${productId}:${store}`,
    productId,
    variantId: `${productId}:commercial-unconfirmed`,
    store,
    url,
    validationStatus: legacy ? "legacy_unverified" : "user_supplied",
    providedBy: legacy ? "existing_repository" : "user",
    commercialCheckedAt: null,
    condition: null,
    seller: null,
    price: null,
  };
}
export const OFFERS: Offer[] = [
  // Todos os destinos foram conferidos em 28/10/2026 (scripts/check-affiliate-links.mjs).
  ...ml.map(([id, url]) => offer(id, "mercado_livre", url)),
  ...amazon.map(([id, url]) => offer(id, "amazon", url)),
];
export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
export function getOfferByUrl(url: string): Offer | undefined {
  return OFFERS.find((o) => o.url === url);
}
export function getOffers(productId: string, variantId?: string): Offer[] {
  // Uma oferta sem variante confirmada nunca satisfaz uma seleção de RAM/armazenamento.
  return OFFERS.filter(
    (o) =>
      o.productId === productId &&
      (!variantId || (o.variantId === variantId && o.validationStatus === "verified")),
  );
}
export const STORE_LABELS: Record<Store, string> = {
  amazon: "Amazon",
  mercado_livre: "Mercado Livre",
};
/** Loja com preposição a partir do endereço do link: "na Amazon" ou "no Mercado Livre". */
export function storeLabelForUrl(url: string): string {
  return /amazon\.com\.br|link\.amazon|amzn\.to/.test(url) ? "na Amazon" : "no Mercado Livre";
}
export const AMAZON_DISCLOSURE =
  "Como participante do Programa de Associados da Amazon, sou remunerado pelas compras qualificadas efetuadas.";

const LEGACY_NAMES: Record<string, string> = {
  "Galaxy A25": "galaxy-a25-5g",
  "Galaxy A35": "galaxy-a35",
  "Galaxy A55": "galaxy-a55",
  "Samsung Galaxy A25 5G": "galaxy-a25-5g",
  "Samsung Galaxy A35 5G": "galaxy-a35",
  "Samsung Galaxy A55 5G": "galaxy-a55",
  "Samsung Galaxy M35 5G": "galaxy-m35-5g",
  "Samsung Galaxy S24": "galaxy-s24",
  "Samsung Galaxy S24 5G": "galaxy-s24",
  "Apple iPhone 15": "iphone-15",
  "Redmi Note 13 Pro": "redmi-note-13-pro",
  "Redmi Note 14 Pro+": "redmi-note-14-pro-plus",
};
export function getProductByName(name: string): Product | undefined {
  const exact = PRODUCTS.find(
    (p) => p.name.toLocaleLowerCase("pt-BR") === name.toLocaleLowerCase("pt-BR"),
  );
  return exact ?? getProduct(LEGACY_NAMES[name]);
}
