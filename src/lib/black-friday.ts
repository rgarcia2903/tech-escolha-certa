// Preços de referência para a Black Friday: o preço à vista visto na Amazon antes da data.
// Um "desconto" de Black Friday só é real se o preço final ficar abaixo desta referência.
// Atualizar perto da data (por volta de 18/11) e, se necessário, durante a semana da Black Friday.
import { FAIR_PRICES, type FairPriceId } from "./fair-prices";

export const BLACK_FRIDAY = {
  year: 2026,
  date: "27 de novembro",
  checkedAt: "28 de outubro de 2026",
};

export type ReferencePrice = {
  productId: string;
  /** Versão a que o preço se refere. */
  version: string;
  /** Preço à vista visto na Amazon na data de checagem (R$). */
  referencePrice: number;
  /** Quem vendia a oferta na checagem. */
  soldByAmazon: boolean;
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
        referencePrice: 899,
        soldByAmazon: false,
        note: "Básico com 5G e muitos anos de atualização. Bom para quem quer gastar pouco.",
        reviewPath: "/review/galaxy-a17-5g",
      },
      {
        productId: "galaxy-a36-5g",
        version: "128 GB, 6 GB de RAM",
        referencePrice: 1348,
        soldByAmazon: false,
        note: "A compra mais equilibrada da faixa: tela AMOLED e seis anos de atualizações.",
        reviewPath: "/review/galaxy-a36-5g",
      },
      {
        productId: "moto-g56-5g",
        version: "256 GB, 8 GB de RAM",
        referencePrice: 1369,
        soldByAmazon: false,
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
        referencePrice: 1799,
        soldByAmazon: true,
        note: "A melhor tela da faixa, câmera com estabilização óptica e IP69.",
        reviewPath: "/review/moto-g86-5g",
      },
      {
        productId: "redmi-note-15-5g",
        version: "256 GB, 8 GB de RAM",
        referencePrice: 1829,
        soldByAmazon: false,
        note: "Bateria grande e carregador na caixa. Confira se é a versão 5G.",
        reviewPath: "/review/redmi-note-15-5g",
      },
      {
        productId: "galaxy-a57-5g",
        version: "128 GB, 8 GB de RAM",
        referencePrice: 1857,
        soldByAmazon: true,
        note: "O Samsung intermediário mais novo, com IP68. Prefira-o ao Galaxy A55.",
      },
      {
        productId: "redmi-note-14-pro-plus",
        version: "256 GB, 8 GB de RAM",
        referencePrice: 1990,
        soldByAmazon: false,
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
        referencePrice: 2266,
        soldByAmazon: false,
        note: "O mais forte para jogos nesta lista.",
        reviewPath: "/review/poco-x7-pro",
      },
      {
        productId: "edge-60-pro",
        version: "256 GB, 12 GB de RAM",
        referencePrice: 2699,
        soldByAmazon: true,
        note: "Bateria de 6.000 mAh, recarga de 90 W e zoom óptico. Suporte de três anos.",
        reviewPath: "/review/edge-60-pro",
      },
      {
        productId: "galaxy-s25-fe",
        version: "128 GB, 8 GB de RAM",
        referencePrice: 2999,
        soldByAmazon: true,
        note: "Linha S com sete anos de atualizações. A escolha para ficar muitos anos.",
        reviewPath: "/review/galaxy-s25-fe",
      },
    ],
  },
];

/** Modelos que costumam aparecer "em promoção", mas que não compensam acima do teto. */
export const AVOID: { id: FairPriceId; seenPrice?: number; reviewPath: string }[] = [
  { id: "galaxy-s24", seenPrice: 4579, reviewPath: "/review/galaxy-s24" },
  { id: "galaxy-a55", reviewPath: "/review/galaxy-a55" },
  { id: "galaxy-a35", reviewPath: "/review/galaxy-a35" },
  { id: "poco-x6-pro", reviewPath: "/review/poco-x6-pro" },
  { id: "redmi-note-13-pro", reviewPath: "/review/redmi-note-13-pro" },
];

/** Teto editorial do modelo, quando existe (src/lib/fair-prices.ts). */
export function ceilingFor(productId: string): number | undefined {
  return (FAIR_PRICES as Record<string, { maxPrice: number }>)[productId]?.maxPrice;
}
