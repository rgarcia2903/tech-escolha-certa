import { getOfferByUrl, getProductByName } from "./product-catalog";

type AffiliateClickParams = {
  productName: string;
  pageType: string;
  destination?: string;
  productId?: string;
  variantId?: string;
  offerId?: string;
  href?: string;
  ctaPlacement?: string;
};

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, params?: Record<string, string>) => void;
  }
}

export function trackAffiliateClick({
  productName,
  pageType,
  destination,
  productId,
  variantId,
  offerId,
  href,
  ctaPlacement = "unspecified",
}: AffiliateClickParams) {
  if (typeof window === "undefined") return;

  const offer = href ? getOfferByUrl(href) : undefined;
  const model = getProductByName(productName);
  window.gtag?.("event", "affiliate_click", {
    product_name: productName,
    page_type: pageType,
    destination: destination ?? offer?.store ?? "mercado_livre",
    product_id: productId ?? offer?.productId ?? model?.id ?? "legacy_unmapped",
    variant_id: variantId ?? offer?.variantId ?? model?.variants[0].id ?? "commercial_unconfirmed",
    offer_id: offerId ?? offer?.id ?? "legacy_unmapped",
    cta_placement: ctaPlacement,
    page_path: window.location.pathname,
  });
}

export function trackFinderChoice({
  step,
  choice,
  recommendation = "pending",
}: {
  step: string;
  choice: string;
  recommendation?: string;
}) {
  if (typeof window === "undefined") return;

  window.gtag?.("event", "phone_finder_choice", {
    finder_step: step,
    finder_choice: choice,
    recommended_product: recommendation,
    page_path: window.location.pathname,
  });
}

export function trackSiteSearchSelection({
  query,
  resultTitle,
  destination,
}: {
  query: string;
  resultTitle: string;
  destination: string;
}) {
  if (typeof window === "undefined") return;

  window.gtag?.("event", "site_search_selection", {
    search_term: query,
    result_title: resultTitle,
    destination,
    page_path: window.location.pathname,
  });
}

export function trackReviewComparisonClick({
  productName,
  comparisonPath,
}: {
  productName: string;
  comparisonPath: string;
}) {
  if (typeof window === "undefined") return;

  window.gtag?.("event", "review_comparison_click", {
    product_name: productName,
    comparison_path: comparisonPath,
    cta_placement: "decision_panel",
    page_path: window.location.pathname,
  });
}

export function trackOfferResearchClick({
  productName,
  destination,
  destinationPath,
}: {
  productName: string;
  destination: "review" | "comparativo";
  destinationPath: string;
}) {
  if (typeof window === "undefined") return;

  window.gtag?.("event", "offer_research_click", {
    product_name: productName,
    research_destination: destination,
    destination_path: destinationPath,
    page_path: window.location.pathname,
  });
}

export function trackPageView(path: string) {
  if (typeof window === "undefined") return;

  window.gtag?.("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}
