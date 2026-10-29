// Black Friday: para cada modelo, até quanto vale pagar (veredito editorial de src/lib/fair-prices.ts).
// Não exibir preço de loja: as políticas da Amazon só permitem preço vindo da API oficial.
// Revisar os limiares perto da data (por volta de 18/11).
import { goodDealFor, type FairPriceId } from "./fair-prices";

export const BLACK_FRIDAY = {
  year: 2026,
  date: "27 de novembro",
  isoDate: "2026-11-27",
  reviewedAt: "outubro de 2026",
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
    title: "Até R$ 1.500",
    items: [
      {
        productId: "galaxy-a17-5g",
        version: "128 GB, 4 GB de RAM",
        note: "Básico com 5G e muitos anos de atualização. Bom para quem quer gastar pouco.",
        reviewPath: "/review/galaxy-a17-5g",
      },
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
        productId: "poco-x7-pro",
        version: "512 GB, 12 GB de RAM",
        note: "O mais forte para jogos nesta lista.",
        reviewPath: "/review/poco-x7-pro",
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
];

/** Modelos que costumam aparecer "em promoção", mas que não compensam acima do teto. */
export const AVOID: { id: FairPriceId; reviewPath: string }[] = [
  { id: "galaxy-s24", reviewPath: "/review/galaxy-s24" },
  { id: "galaxy-a55", reviewPath: "/review/galaxy-a55" },
  { id: "galaxy-a35", reviewPath: "/review/galaxy-a35" },
  { id: "poco-x6-pro", reviewPath: "/review/poco-x6-pro" },
  { id: "redmi-note-13-pro", reviewPath: "/review/redmi-note-13-pro" },
];

/** Até quanto vale pagar no modelo (veredito editorial). */
export function ceilingFor(productId: string): number | undefined {
  return goodDealFor(productId);
}
