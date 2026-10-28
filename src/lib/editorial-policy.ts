import { getProduct, getOffers, type Product } from "./product-catalog";

export const EDITORIAL_REVIEW_DATE = "2026-10-16";
export const PRICE_UNCONFIRMED_NOTICE =
  "Preços mudam todo dia: confira o valor final na loja antes de comprar.";
export const BUDGETS = [
  { id: "ate-1500", label: "Até R$ 1.500", ceiling: 1500 },
  { id: "ate-2000", label: "Até R$ 2.000", ceiling: 2000 },
  { id: "ate-2500", label: "Até R$ 2.500", ceiling: 2500 },
  { id: "ate-3000", label: "Até R$ 3.000", ceiling: 3000 },
  { id: "premium", label: "Premium", ceiling: null },
] as const;
export type BudgetId = (typeof BUDGETS)[number]["id"];
export type Profile = "equilibrio" | "desempenho" | "camera";
export type Selection = "general" | "samsung" | "xiaomi" | "games" | BudgetId;

// Listas de avaliação editorial, sem preço, estoque ou liderança comercial presumidos.
const candidates: Record<Selection, readonly string[]> = {
  general: [
    "galaxy-a17-5g",
    "redmi-note-15-5g",
    "moto-g86-5g",
    "poco-x7-pro",
    "edge-60-pro",
    "galaxy-s25-fe",
  ],
  samsung: [
    "galaxy-a17-5g",
    "galaxy-a36-5g",
    "galaxy-a37-5g",
    "galaxy-a57-5g",
    "galaxy-s25-fe",
    "galaxy-s26-fe",
    "galaxy-s26",
  ],
  xiaomi: ["redmi-note-15-5g", "redmi-note-15-pro-5g", "poco-x7-pro", "poco-x8-pro", "xiaomi-15t"],
  games: ["poco-x8-pro", "poco-x7-pro", "poco-x6-pro", "moto-g86-5g", "redmi-note-15-5g"],
  "ate-1500": ["galaxy-a17-5g", "redmi-note-15-5g", "moto-g56-5g", "moto-g86-5g", "galaxy-a36-5g"],
  "ate-2000": ["moto-g86-5g", "galaxy-a36-5g", "redmi-note-15-5g", "poco-x7-pro"],
  "ate-2500": ["galaxy-a36-5g", "galaxy-a37-5g", "moto-g86-5g", "poco-x7-pro", "poco-x8-pro"],
  "ate-3000": ["edge-60-pro", "galaxy-s25-fe", "galaxy-a57-5g", "poco-x8-pro"],
  premium: ["galaxy-s26", "galaxy-s26-fe", "galaxy-s25-fe", "iphone-17", "iphone-18-pro"],
};
export const HOME_PRODUCT_IDS = [
  "redmi-note-15-5g",
  "moto-g86-5g",
  "poco-x7-pro",
  "edge-60-pro",
] as const;
// Seven current dual-store models; evaluation status still controls purchase CTAs.
export const STOREFRONT_PRODUCT_IDS = [
  "galaxy-a17-5g",
  "galaxy-a36-5g",
  "redmi-note-15-5g",
  "moto-g56-5g",
  "moto-g86-5g",
  "edge-60-pro",
  "galaxy-s25-fe",
] as const;
export const ACTIVE_OFFER_PRODUCT_IDS = [
  "galaxy-a17-5g",
  "redmi-note-15-5g",
  "moto-g86-5g",
  "edge-60-pro",
  "galaxy-s25-fe",
] as const;
const preferred: Record<Profile, readonly string[]> = {
  equilibrio: ["galaxy-a17-5g", "moto-g86-5g", "galaxy-a36-5g", "edge-60-pro", "galaxy-s25-fe"],
  desempenho: ["poco-x8-pro", "poco-x7-pro", "moto-g86-5g", "redmi-note-15-5g"],
  camera: ["galaxy-s25-fe", "edge-60-pro", "moto-g86-5g", "redmi-note-15-5g", "iphone-17"],
};
export function getSelection(selection: Selection): Product[] {
  return candidates[selection].map((id) => getProduct(id)!).filter(Boolean);
}
export function getFinderCandidates(budget: BudgetId, profile: Profile): Product[] {
  const products = getSelection(budget);
  const order = preferred[profile];
  return [...products].sort((a, b) => {
    const ai = order.indexOf(a.id),
      bi = order.indexOf(b.id);
    return (ai < 0 ? 999 : ai) - (bi < 0 ? 999 : bi);
  });
}
export function fitsVerifiedBudget(productId: string, ceiling: number): boolean {
  return getOffers(productId).some(
    (offer) =>
      offer.validationStatus === "verified" &&
      offer.commercialCheckedAt !== null &&
      offer.price !== null &&
      offer.price > 0 &&
      offer.price <= ceiling,
  );
}
