// "Preço justo": até quanto vale pagar por um modelo novo, comparado com a alternativa
// mais sensata à venda hoje. É uma referência editorial, não o preço da loja.
//
// Método: o teto fica abaixo do preço do sucessor novo (ou do concorrente direto)
// observado nas lojas parceiras na data de checagem. Acima do teto, a alternativa
// entrega mais pelo dinheiro. Revisar mensalmente as páginas com tráfego.
import * as links from "./affiliate-links";

export type FairPrice = {
  productName: string;
  /** Até este valor (R$, aparelho novo), o modelo vale a pena. */
  maxPrice: number;
  checkedAt: string;
  alternativeName: string;
  alternativeHref: string;
  /** Preço do alternativo visto na checagem (R$). Uso interno: não exibir no site. */
  alternativeSeenPrice: number;
  /** Uma frase: por que acima do teto a alternativa é melhor. */
  why: string;
};

const CHECKED_AT = "2026-10-28";

export const FAIR_PRICES = {
  "poco-x6-pro": {
    productName: "Poco X6 Pro",
    maxPrice: 2100,
    checkedAt: CHECKED_AT,
    alternativeName: "Poco X7 Pro",
    alternativeHref: links.POCO_X7_PRO_AMAZON_URL,
    alternativeSeenPrice: 2266,
    why: "o X7 Pro é a geração seguinte, com bateria maior, e custa pouco mais.",
  },
  "redmi-note-13-pro": {
    productName: "Redmi Note 13 Pro 5G",
    maxPrice: 1600,
    checkedAt: CHECKED_AT,
    alternativeName: "Redmi Note 15 5G",
    alternativeHref: links.REDMI_NOTE_15_5G_AMAZON_URL,
    alternativeSeenPrice: 1829,
    why: "o Redmi Note 15 5G é dois anos mais novo e terá suporte por mais tempo.",
  },
  "galaxy-a55": {
    productName: "Galaxy A55",
    maxPrice: 1700,
    checkedAt: CHECKED_AT,
    alternativeName: "Galaxy A57 5G",
    alternativeHref: links.GALAXY_A57_AMAZON_URL,
    alternativeSeenPrice: 1857,
    why: "o Galaxy A57 é duas gerações mais novo, com mais anos de atualização.",
  },
  "galaxy-a35": {
    productName: "Galaxy A35",
    maxPrice: 1200,
    checkedAt: CHECKED_AT,
    alternativeName: "Galaxy A36 5G",
    alternativeHref: links.GALAXY_A36_AMAZON_URL,
    alternativeSeenPrice: 1348,
    why: "o Galaxy A36 é a geração seguinte e custa pouco mais.",
  },
  "galaxy-s24": {
    productName: "Galaxy S24",
    maxPrice: 2800,
    checkedAt: CHECKED_AT,
    alternativeName: "Galaxy S25 FE",
    alternativeHref: links.GALAXY_S25_FE_AMAZON_URL,
    alternativeSeenPrice: 2999,
    why: "o Galaxy S25 FE é mais recente e tem bateria maior; o S24 só compensa pelo tamanho compacto.",
  },
  // Motorola: preços vistos na Amazon em 28/10/2026 (G56 R$ 1.369, G86 R$ 1.799, Edge 60 Pro R$ 2.699).
  "moto-g56-5g": {
    productName: "Moto G56 5G",
    maxPrice: 1200,
    checkedAt: CHECKED_AT,
    alternativeName: "Galaxy A36 5G",
    alternativeHref: links.GALAXY_A36_AMAZON_URL,
    alternativeSeenPrice: 1348,
    why: "pelo mesmo dinheiro, o A36 tem tela AMOLED, processador mais forte e seis anos de atualizações.",
  },
  "moto-g86-5g": {
    productName: "Moto G86 5G",
    maxPrice: 1900,
    checkedAt: CHECKED_AT,
    alternativeName: "Poco X7 Pro",
    alternativeHref: links.POCO_X7_PRO_AMAZON_URL,
    alternativeSeenPrice: 2266,
    why: "chegando perto de R$ 2.000, o X7 Pro entrega bem mais desempenho para jogos.",
  },
  "edge-60-pro": {
    productName: "Motorola Edge 60 Pro",
    maxPrice: 2700,
    checkedAt: CHECKED_AT,
    alternativeName: "Galaxy S25 FE",
    alternativeHref: links.GALAXY_S25_FE_AMAZON_URL,
    alternativeSeenPrice: 2999,
    why: "o S25 FE recebe atualizações por sete anos, contra três do Edge 60 Pro.",
  },
  // Geração anterior sem oferta própria: a página leva ao sucessor.
  "poco-x6-5g": {
    productName: "Poco X6 5G",
    maxPrice: 1500,
    checkedAt: CHECKED_AT,
    alternativeName: "Redmi Note 15 5G",
    alternativeHref: links.REDMI_NOTE_15_5G_AMAZON_URL,
    alternativeSeenPrice: 1829,
    why: "o Redmi Note 15 5G é quase dois anos mais novo, tem bateria maior e carregador na caixa.",
  },
  "redmi-note-13-5g": {
    productName: "Redmi Note 13 5G",
    maxPrice: 1000,
    checkedAt: CHECKED_AT,
    alternativeName: "Galaxy A36 5G",
    alternativeHref: links.GALAXY_A36_AMAZON_URL,
    alternativeSeenPrice: 1348,
    why: "o Galaxy A36 tem processador bem mais forte, IP67 e seis anos de atualizações.",
  },
  // iPhone: preços vistos na Amazon em 29/10/2026 (uso interno): 17 (256 GB) R$ 5.381,
  // 17e (256 GB) R$ 4.499, 16 (128 GB) R$ 4.558, 16e (128 GB) R$ 3.199, 15 (128 GB) R$ 3.779.
  "iphone-16": {
    productName: "iPhone 16",
    maxPrice: 4000,
    checkedAt: "2026-10-29",
    alternativeName: "iPhone 17",
    alternativeHref: links.IPHONE_17_AMAZON_URL,
    alternativeSeenPrice: 5381,
    why: "por pouco mais, o iPhone 17 tem tela de 120 Hz, ultra-angular de 48 MP e o dobro de armazenamento (256 GB).",
  },
  "iphone-16e": {
    productName: "iPhone 16e",
    maxPrice: 3300,
    checkedAt: "2026-10-29",
    alternativeName: "iPhone 17e",
    alternativeHref: links.IPHONE_17E_AMAZON_URL,
    alternativeSeenPrice: 4499,
    why: "o 17e tem chip A19, MagSafe e o dobro de armazenamento (256 GB).",
  },
  "iphone-15": {
    productName: "iPhone 15",
    maxPrice: 3400,
    checkedAt: "2026-10-29",
    alternativeName: "iPhone 17e",
    alternativeHref: links.IPHONE_17E_AMAZON_URL,
    alternativeSeenPrice: 4499,
    why: "o 17e é duas gerações mais novo, com chip A19, 256 GB e atualizações por mais anos.",
  },
  // Poco X7 Pro (R$ 2.261 na Amazon em 29/10) x Poco X8 Pro 256 GB (R$ 2.441).
  "poco-x7-pro": {
    productName: "Poco X7 Pro",
    maxPrice: 2150,
    checkedAt: "2026-10-29",
    alternativeName: "Poco X8 Pro",
    alternativeHref: links.POCO_X8_PRO_AMAZON_URL,
    alternativeSeenPrice: 2441,
    why: "o X8 Pro é a geração seguinte, com processador mais forte, bateria de 6.500 mAh e recarga de 100 W.",
  },
} satisfies Record<string, FairPrice>;

export type FairPriceId = keyof typeof FAIR_PRICES;

/**
 * "Compre se estiver até": limiar editorial de bom negócio para modelos atuais.
 * É uma recomendação nossa, não o preço da loja. Não exibir preços de loja no site:
 * as políticas da Amazon só permitem mostrar preço vindo da API oficial.
 */
export const GOOD_DEAL_UNDER: Record<string, number> = {
  "galaxy-a17-5g": 900,
  "galaxy-a36-5g": 1350,
  "galaxy-a57-5g": 1850,
  "galaxy-s25-fe": 3000,
  "redmi-note-15-5g": 1800,
  "redmi-note-14-pro-plus": 1950,
  "poco-x7-pro": 2250,
  "iphone-17": 5400,
  "iphone-17e": 4500,
  "galaxy-a17-4g": 850,
  "galaxy-a07": 800,
  "moto-g06": 700,
  "poco-x8-pro": 2450,
  "moto-g77": 1500,
  "edge-70": 2400,
  "galaxy-a37-5g": 1700,
};

/** Até quanto vale pagar no modelo: teto de FAIR_PRICES ou limiar de bom negócio. */
export function goodDealFor(productId: string): number | undefined {
  return (FAIR_PRICES as Record<string, FairPrice>)[productId]?.maxPrice ?? GOOD_DEAL_UNDER[productId];
}

export function formatBRL(value: number): string {
  return `R$\u00a0${value.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}`;
}

/** Mês e ano da checagem, ex.: "outubro de 2026". */
export function checkedMonth(fp: FairPrice): string {
  const [year, month] = fp.checkedAt.split("-").map(Number);
  const months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
  return `${months[month - 1]} de ${year}`;
}

/** Título para o Google: veredito + teto de preço. */
export function fairPriceTitle(id: FairPriceId): string {
  const fp = FAIR_PRICES[id];
  return `${fp.productName} vale a pena em 2026? Só abaixo de ${formatBRL(fp.maxPrice)}`;
}

/** Descrição para o Google: teto, alternativa e o que a página responde. */
export function fairPriceDescription(id: FairPriceId): string {
  const fp = FAIR_PRICES[id];
  return `Veredito: o ${fp.productName} novo só compensa abaixo de ${formatBRL(fp.maxPrice)}. Acima disso, o ${fp.alternativeName} é a compra melhor. Veja problemas, versão certa e onde comprar.`;
}
