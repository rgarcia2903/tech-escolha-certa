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
  // Moto G Max (R$ 1.599 na Amazon em 29/10) x Moto G86 (R$ 1.795).
  "moto-g-max": {
    productName: "Moto G Max",
    maxPrice: 1600,
    checkedAt: "2026-10-29",
    alternativeName: "Moto G86 5G",
    alternativeHref: links.MOTO_G86_AMAZON_URL,
    alternativeSeenPrice: 1795,
    why: "nessa faixa, o G86 passa a valer pelo processador mais forte.",
  },
  // Modelos antigos com muita busca "vale a pena em 2026" (autocompletar do Google, 29/10).
  // Preços vistos na Amazon em 29/10/2026 (uso interno): iPhone 16e R$ 3.199, Galaxy S25 FE
  // R$ 2.999, Galaxy A36 R$ 1.348, Galaxy A17 5G R$ 899.
  "iphone-11": {
    productName: "iPhone 11",
    maxPrice: 1500,
    checkedAt: "2026-10-29",
    alternativeName: "iPhone 16e",
    alternativeHref: links.IPHONE_16E_AMAZON_URL,
    alternativeSeenPrice: 3199,
    why: "o 16e é cinco gerações mais novo, tem 5G, USB-C, Apple Intelligence e vai receber atualizações por muitos anos a mais.",
  },
  "iphone-12": {
    productName: "iPhone 12",
    maxPrice: 1900,
    checkedAt: "2026-10-29",
    alternativeName: "iPhone 16e",
    alternativeHref: links.IPHONE_16E_AMAZON_URL,
    alternativeSeenPrice: 3199,
    why: "o 16e tem chip A18, bateria bem maior, USB-C, 128 GB e anos a mais de atualização.",
  },
  "iphone-13": {
    productName: "iPhone 13",
    maxPrice: 2300,
    checkedAt: "2026-10-29",
    alternativeName: "iPhone 16e",
    alternativeHref: links.IPHONE_16E_AMAZON_URL,
    alternativeSeenPrice: 3199,
    why: "o 16e tem chip A18, Apple Intelligence, bateria maior e USB-C, e vai receber atualizações por mais tempo.",
  },
  "iphone-14": {
    productName: "iPhone 14",
    maxPrice: 2600,
    checkedAt: "2026-10-29",
    alternativeName: "iPhone 16e",
    alternativeHref: links.IPHONE_16E_AMAZON_URL,
    alternativeSeenPrice: 3199,
    why: "o 16e tem chip A18, Apple Intelligence, bateria maior e USB-C; o 14 só ganha na câmera ultra-angular.",
  },
  "galaxy-s23": {
    productName: "Galaxy S23",
    maxPrice: 2300,
    checkedAt: "2026-10-29",
    alternativeName: "Galaxy S25 FE",
    alternativeHref: links.GALAXY_S25_FE_AMAZON_URL,
    alternativeSeenPrice: 2999,
    why: "o S25 FE tem bateria de 4.900 mAh, recarga de 45 W e atualizações até 2032; o S23 recebe a última versão grande do Android agora.",
  },
  "galaxy-s22": {
    productName: "Galaxy S22",
    maxPrice: 1300,
    checkedAt: "2026-10-29",
    alternativeName: "Galaxy A36 5G",
    alternativeHref: links.GALAXY_A36_AMAZON_URL,
    alternativeSeenPrice: 1348,
    why: "o S22 não recebe mais versões novas do Android e tem bateria pequena; o A36 tem 5.000 mAh e atualizações até 2031.",
  },
  "galaxy-a54": {
    productName: "Galaxy A54",
    maxPrice: 1000,
    checkedAt: "2026-10-29",
    alternativeName: "Galaxy A36 5G",
    alternativeHref: links.GALAXY_A36_AMAZON_URL,
    alternativeSeenPrice: 1348,
    why: "o A36 tem processador mais forte, recarga de 45 W e atualizações até 2031; o A54 recebe agora sua última versão grande do Android.",
  },
  "galaxy-a15": {
    productName: "Galaxy A15",
    maxPrice: 700,
    checkedAt: "2026-10-29",
    alternativeName: "Galaxy A17 5G",
    alternativeHref: links.GALAXY_A17_AMAZON_URL,
    alternativeSeenPrice: 899,
    why: "o A17 5G tem câmera com estabilização óptica, tela maior, proteção IP54 e seis anos de atualizações.",
  },
  // Lote 2 (29/10): mais buscas "vale a pena em 2026". Moto G Max visto a R$ 1.599, Galaxy A57 a R$ 1.857.
  "redmi-note-14": {
    productName: "Redmi Note 14",
    maxPrice: 1000,
    checkedAt: "2026-10-29",
    alternativeName: "Galaxy A36 5G",
    alternativeHref: links.GALAXY_A36_AMAZON_URL,
    alternativeSeenPrice: 1348,
    why: "o A36 tem processador bem mais forte, 5G, IP67 e atualizações até 2031.",
  },
  "redmi-note-12": {
    productName: "Redmi Note 12",
    maxPrice: 650,
    checkedAt: "2026-10-29",
    alternativeName: "Galaxy A17 5G",
    alternativeHref: links.GALAXY_A17_AMAZON_URL,
    alternativeSeenPrice: 899,
    why: "o Redmi Note 12 já não recebe versões novas do Android; o A17 5G é novo e tem seis anos de atualizações.",
  },
  "galaxy-a56": {
    productName: "Galaxy A56",
    maxPrice: 1600,
    checkedAt: "2026-10-29",
    alternativeName: "Galaxy A57 5G",
    alternativeHref: links.GALAXY_A57_AMAZON_URL,
    alternativeSeenPrice: 1857,
    why: "o A57 é a geração seguinte, com processador mais forte, IP68 e um ano a mais de atualizações.",
  },
  "galaxy-a16": {
    productName: "Galaxy A16",
    maxPrice: 750,
    checkedAt: "2026-10-29",
    alternativeName: "Galaxy A17 5G",
    alternativeHref: links.GALAXY_A17_AMAZON_URL,
    alternativeSeenPrice: 899,
    why: "o A17 5G é a geração seguinte, com câmera estabilizada (OIS).",
  },
  "galaxy-a34": {
    productName: "Galaxy A34",
    maxPrice: 900,
    checkedAt: "2026-10-29",
    alternativeName: "Galaxy A36 5G",
    alternativeHref: links.GALAXY_A36_AMAZON_URL,
    alternativeSeenPrice: 1348,
    why: "o A36 tem processador mais forte, recarga de 45 W e atualizações até 2031.",
  },
  "galaxy-s24-fe": {
    productName: "Galaxy S24 FE",
    maxPrice: 2400,
    checkedAt: "2026-10-29",
    alternativeName: "Galaxy S25 FE",
    alternativeHref: links.GALAXY_S25_FE_AMAZON_URL,
    alternativeSeenPrice: 2999,
    why: "o S25 FE tem bateria maior, recarga de 45 W e um ano a mais de atualizações.",
  },
  "moto-g84": {
    productName: "Moto G84",
    maxPrice: 900,
    checkedAt: "2026-10-29",
    alternativeName: "Moto G Max",
    alternativeHref: links.MOTO_G_MAX_AMAZON_URL,
    alternativeSeenPrice: 1599,
    why: "o G84 parou no Android 15; o G Max é novo, tem tela pOLED mais brilhante, câmera de 200 MP e IP68.",
  },
  "iphone-xr": {
    productName: "iPhone XR",
    maxPrice: 700,
    checkedAt: "2026-10-29",
    alternativeName: "iPhone 16e",
    alternativeHref: links.IPHONE_16E_AMAZON_URL,
    alternativeSeenPrice: 3199,
    why: "o XR não recebe mais versões novas do iOS; o 16e é atual e vai ser atualizado por muitos anos.",
  },
  // Lote 3 (29/10). Vistos na Amazon: iPhone 17 R$ 5.381, iPhone 16e R$ 3.199, S25 Ultra R$ 5.813, S25 FE R$ 2.999.
  "iphone-15-pro": {
    productName: "iPhone 15 Pro",
    maxPrice: 3600,
    checkedAt: "2026-10-29",
    alternativeName: "iPhone 17",
    alternativeHref: links.IPHONE_17_AMAZON_URL,
    alternativeSeenPrice: 5381,
    why: "o iPhone 17 tem chip A19, tela de 120 Hz, 256 GB e bateria maior, e será atualizado por mais tempo.",
  },
  "iphone-14-pro": {
    productName: "iPhone 14 Pro",
    maxPrice: 2900,
    checkedAt: "2026-10-29",
    alternativeName: "iPhone 16e",
    alternativeHref: links.IPHONE_16E_AMAZON_URL,
    alternativeSeenPrice: 3199,
    why: "o 16e tem chip A18, Apple Intelligence, USB-C e bateria maior; o 14 Pro só ganha na tela de 120 Hz e nas câmeras.",
  },
  "iphone-13-pro": {
    productName: "iPhone 13 Pro",
    maxPrice: 2500,
    checkedAt: "2026-10-29",
    alternativeName: "iPhone 16e",
    alternativeHref: links.IPHONE_16E_AMAZON_URL,
    alternativeSeenPrice: 3199,
    why: "o 16e tem chip A18, Apple Intelligence, USB-C e anos a mais de atualização.",
  },
  "galaxy-s23-fe": {
    productName: "Galaxy S23 FE",
    maxPrice: 1900,
    checkedAt: "2026-10-29",
    alternativeName: "Galaxy S25 FE",
    alternativeHref: links.GALAXY_S25_FE_AMAZON_URL,
    alternativeSeenPrice: 2999,
    why: "o S25 FE tem bateria maior, recarga de 45 W e atualizações até 2032.",
  },
  "galaxy-s23-ultra": {
    productName: "Galaxy S23 Ultra",
    maxPrice: 3300,
    checkedAt: "2026-10-29",
    alternativeName: "Galaxy S25 Ultra",
    alternativeHref: links.GALAXY_S25_ULTRA_AMAZON_URL,
    alternativeSeenPrice: 5813,
    why: "o S25 Ultra mantém a S Pen e recebe atualizações até 2032; o S23 Ultra recebe agora sua última versão grande do Android.",
  },
  "galaxy-s24-ultra": {
    productName: "Galaxy S24 Ultra",
    maxPrice: 4500,
    checkedAt: "2026-10-29",
    alternativeName: "Galaxy S25 Ultra",
    alternativeHref: links.GALAXY_S25_ULTRA_AMAZON_URL,
    alternativeSeenPrice: 5813,
    why: "o S25 Ultra é a geração seguinte, com processador mais forte e um ano a mais de atualizações.",
  },
  "poco-x5-pro": {
    productName: "Poco X5 Pro",
    maxPrice: 900,
    checkedAt: "2026-10-29",
    alternativeName: "Galaxy A36 5G",
    alternativeHref: links.GALAXY_A36_AMAZON_URL,
    alternativeSeenPrice: 1348,
    why: "o X5 Pro já recebeu as versões do Android prometidas; o A36 é novo e tem atualizações até 2031.",
  },
  // Lote 4 (29/10).
  "galaxy-s21-fe": {
    productName: "Galaxy S21 FE",
    maxPrice: 1000,
    checkedAt: "2026-10-29",
    alternativeName: "Galaxy A36 5G",
    alternativeHref: links.GALAXY_A36_AMAZON_URL,
    alternativeSeenPrice: 1348,
    why: "o S21 FE parou na One UI 8; o A36 é novo, tem bateria de 5.000 mAh e atualizações até 2031.",
  },
  "moto-g54": {
    productName: "Moto G54",
    maxPrice: 700,
    checkedAt: "2026-10-29",
    alternativeName: "Galaxy A17 5G",
    alternativeHref: links.GALAXY_A17_AMAZON_URL,
    alternativeSeenPrice: 899,
    why: "o G54 parou no Android 15; o A17 5G é novo e tem seis anos de atualizações.",
  },
  "moto-g85": {
    productName: "Moto G85",
    maxPrice: 1000,
    checkedAt: "2026-10-29",
    alternativeName: "Galaxy A36 5G",
    alternativeHref: links.GALAXY_A36_AMAZON_URL,
    alternativeSeenPrice: 1348,
    why: "o G85 parou no Android 16; o A36 tem IP67 e atualizações até 2031.",
  },
  "poco-f6": {
    productName: "Poco F6",
    maxPrice: 1900,
    checkedAt: "2026-10-29",
    alternativeName: "Poco X8 Pro",
    alternativeHref: links.POCO_X8_PRO_AMAZON_URL,
    alternativeSeenPrice: 2441,
    why: "o X8 Pro é novo, tem bateria de 6.500 mAh e mais anos de atualização pela frente.",
  },
  // Lote 5 (30/10). Vistos na Amazon: Galaxy A07 R$ 798, A17 5G R$ 899, A36 R$ 1.348, Moto G Max R$ 1.599.
  "galaxy-s21": {
    productName: "Galaxy S21",
    maxPrice: 800,
    checkedAt: "2026-10-30",
    alternativeName: "Galaxy A36 5G",
    alternativeHref: links.GALAXY_A36_AMAZON_URL,
    alternativeSeenPrice: 1348,
    why: "o S21 não recebe mais atualizações; o A36 é novo, tem bateria de 5.000 mAh e atualizações até 2031.",
  },
  "redmi-13c": {
    productName: "Redmi 13C",
    maxPrice: 500,
    checkedAt: "2026-10-30",
    alternativeName: "Galaxy A07",
    alternativeHref: links.GALAXY_A07_AMAZON_URL,
    alternativeSeenPrice: 798,
    why: "o Redmi 13C parou no Android 15; o A07 tem processador mais forte, IP54 e seis anos de atualizações.",
  },
  "galaxy-a06": {
    productName: "Galaxy A06",
    maxPrice: 600,
    checkedAt: "2026-10-30",
    alternativeName: "Galaxy A07",
    alternativeHref: links.GALAXY_A07_AMAZON_URL,
    alternativeSeenPrice: 798,
    why: "o A07 é a geração seguinte, com processador mais forte, IP54 e seis anos de atualizações.",
  },
  "moto-g75": {
    productName: "Moto G75",
    maxPrice: 1100,
    checkedAt: "2026-10-30",
    alternativeName: "Moto G Max",
    alternativeHref: links.MOTO_G_MAX_AMAZON_URL,
    alternativeSeenPrice: 1599,
    why: "o G Max é novo, tem tela pOLED muito mais brilhante e câmera de 200 MP.",
  },
  "moto-g35": {
    productName: "Moto G35",
    maxPrice: 650,
    checkedAt: "2026-10-30",
    alternativeName: "Galaxy A17 5G",
    alternativeHref: links.GALAXY_A17_AMAZON_URL,
    alternativeSeenPrice: 899,
    why: "o A17 5G tem câmera estabilizada, tela AMOLED e seis anos de atualizações.",
  },
  "moto-g24": {
    productName: "Moto G24",
    maxPrice: 500,
    checkedAt: "2026-10-30",
    alternativeName: "Galaxy A07",
    alternativeHref: links.GALAXY_A07_AMAZON_URL,
    alternativeSeenPrice: 798,
    why: "o A07 tem processador mais forte, IP54 e seis anos de atualizações.",
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
  "galaxy-s25": 3900,
  "galaxy-s26": 4800,
  "galaxy-s25-ultra": 5800,
  "galaxy-s26-ultra": 6750,
  "galaxy-s26-fe": 3300,
  "redmi-note-15-4g": 1400,
  "moto-g-max": 1600,
  "moto-g37": 900,
  "moto-g17": 850,
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
