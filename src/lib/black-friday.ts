// Black Friday: para cada modelo, até quanto vale pagar (veredito editorial de src/lib/fair-prices.ts).
// Não exibir preço de loja: as políticas da Amazon só permitem preço vindo da API oficial.
// Revisar os limiares perto da data (por volta de 18/11).
import { goodDealFor, type FairPriceId } from "./fair-prices";

export const BLACK_FRIDAY = {
  year: 2026,
  date: "27 de novembro",
  isoDate: "2026-11-27",
  reviewedAt: "novembro de 2026",
};

/** Dias inteiros até a Black Friday (0 no dia, negativo depois). */
export function daysUntilBlackFriday(now: Date = new Date()): number {
  const target = Date.UTC(2026, 10, 27);
  const today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  return Math.round((target - today) / 86_400_000);
}

export type ReferencePrice = {
  productId: string;
  /** Versão a que o preço se refere. */
  version: string;
  /** Uma frase de veredito para a Black Friday. */
  note: string;
  /** Review do modelo, quando existe. */
  reviewPath?: string;
};

export const BUDGET_GROUPS: { title: string; items: ReferencePrice[] }[] = [
  {
    title: "Até R$ 1.000",
    items: [
      {
        productId: "galaxy-a07",
        version: "128 GB, 4 GB de RAM",
        note: "O mais barato que vale a pena: Helio G99 e seis anos de atualizações.",
        reviewPath: "/review/galaxy-a07",
      },
      {
        productId: "moto-g37",
        version: "128 GB, 4 GB de RAM",
        note: "O Motorola 5G mais barato que indicamos, com tela de 120 Hz e IP64.",
        reviewPath: "/review/moto-g37",
      },
      {
        productId: "galaxy-a17-5g",
        version: "128 GB, 4 GB de RAM",
        note: "Tela AMOLED, câmera com estabilização e seis anos de atualizações. O melhor até R$ 1.000.",
        reviewPath: "/review/galaxy-a17-5g",
      },
      {
        productId: "redmi-15c",
        version: "128 GB, 4 GB de RAM",
        note: "Só para uso básico: tela grande e bateria de 6.000 mAh, mas processador fraco.",
        reviewPath: "/review/redmi-15c",
      },
    ],
  },
  {
    title: "De R$ 1.000 a R$ 1.500",
    items: [
      {
        productId: "galaxy-a36-5g",
        version: "128 GB, 6 GB de RAM",
        note: "A compra mais equilibrada da faixa: tela AMOLED e seis anos de atualizações.",
        reviewPath: "/review/galaxy-a36-5g",
      },
      {
        productId: "moto-g56-5g",
        version: "256 GB, 8 GB de RAM",
        note: "Só vale com desconto de verdade: pelo preço atual, o Galaxy A36 é melhor.",
        reviewPath: "/review/moto-g56-5g",
      },
    ],
  },
  {
    title: "De R$ 1.500 a R$ 2.000",
    items: [
      {
        productId: "moto-g86-5g",
        version: "256 GB, 8 GB de RAM",
        note: "A melhor tela da faixa, câmera com estabilização óptica e IP69.",
        reviewPath: "/review/moto-g86-5g",
      },
      {
        productId: "redmi-note-15-5g",
        version: "256 GB, 8 GB de RAM",
        note: "Bateria grande e carregador na caixa. Confira se é a versão 5G.",
        reviewPath: "/review/redmi-note-15-5g",
      },
      {
        productId: "galaxy-a57-5g",
        version: "128 GB, 8 GB de RAM",
        note: "O Samsung intermediário mais novo, com IP68. Prefira-o ao Galaxy A55.",
        reviewPath: "/review/galaxy-a57-5g",
      },
      {
        productId: "galaxy-a37-5g",
        version: "128 GB, 8 GB de RAM",
        note: "O sucessor do A36, com IP68. Vale se custar até uns R$ 300 a mais que ele.",
        reviewPath: "/review/galaxy-a37-5g",
      },
      {
        productId: "moto-g-max",
        version: "256 GB, 8 GB de RAM",
        note: "Tela pOLED de 6,8\", câmera de 200 MP e IP68/IP69. Não é para jogos pesados.",
        reviewPath: "/review/moto-g-max",
      },
      {
        productId: "edge-60-fusion",
        version: "256 GB, 8 GB de RAM",
        note: "Tela curva de 4.500 nits e IP69, com o mesmo processador do Moto G86.",
        reviewPath: "/review/edge-60-fusion",
      },
      {
        productId: "redmi-note-14-pro-plus",
        version: "256 GB, 8 GB de RAM",
        note: "Câmera de 200 MP e recarga rápida. Compare com o Note 15 5G antes.",
        reviewPath: "/review/redmi-note-14-pro-plus",
      },
    ],
  },
  {
    title: "Acima de R$ 2.000",
    items: [
      {
        productId: "poco-x8-pro",
        version: "256 GB, 8 GB de RAM",
        note: "O mais forte para jogos nesta lista.",
        reviewPath: "/comparativo/poco-x8-pro-vs-poco-x7-pro",
      },
      {
        productId: "edge-60-pro",
        version: "256 GB, 12 GB de RAM",
        note: "Bateria de 6.000 mAh, recarga de 90 W e zoom óptico. Suporte de três anos.",
        reviewPath: "/review/edge-60-pro",
      },
      {
        productId: "galaxy-s25-fe",
        version: "128 GB, 8 GB de RAM",
        note: "Linha S com sete anos de atualizações. A escolha para ficar muitos anos.",
        reviewPath: "/review/galaxy-s25-fe",
      },
    ],
  },
  {
    title: "iPhone",
    items: [
      {
        productId: "iphone-16e",
        version: "128 GB",
        note: "O iPhone mais barato que vale a pena. Uma câmera só e tela de 60 Hz.",
        reviewPath: "/review/iphone-16e",
      },
      {
        productId: "iphone-17e",
        version: "256 GB",
        note: "Chip A19, 256 GB e MagSafe. Compare com o 16e: a diferença de preço decide.",
        reviewPath: "/review/iphone-17e",
      },
      {
        productId: "iphone-17",
        version: "256 GB",
        note: "O iPhone que recomendamos para a maioria: tela de 120 Hz e ultra-angular de 48 MP.",
        reviewPath: "/review/iphone-17",
      },
    ],
  },
];

/** Modelos que costumam aparecer "em promoção", mas que não compensam acima do teto. */
export const AVOID: { id: FairPriceId; reviewPath: string }[] = [
  { id: "galaxy-s24", reviewPath: "/review/galaxy-s24" },
  { id: "poco-x7-pro", reviewPath: "/review/poco-x7-pro" },
  { id: "galaxy-a55", reviewPath: "/review/galaxy-a55" },
  { id: "galaxy-a35", reviewPath: "/review/galaxy-a35" },
  { id: "poco-x6-pro", reviewPath: "/review/poco-x6-pro" },
  { id: "redmi-note-13-pro", reviewPath: "/review/redmi-note-13-pro" },
  { id: "iphone-16", reviewPath: "/review/iphone-16" },
  { id: "iphone-15", reviewPath: "/review/iphone-15" },
  { id: "iphone-13", reviewPath: "/review/iphone-13" },
  { id: "galaxy-s24-fe", reviewPath: "/review/galaxy-s24-fe" },
  { id: "galaxy-s23", reviewPath: "/review/galaxy-s23" },
  { id: "galaxy-a56", reviewPath: "/review/galaxy-a56" },
  { id: "galaxy-a54", reviewPath: "/review/galaxy-a54" },
  { id: "moto-g85", reviewPath: "/review/moto-g85" },
];

/** Até quanto vale pagar no modelo (veredito editorial). */
export function ceilingFor(productId: string): number | undefined {
  return goodDealFor(productId);
}
