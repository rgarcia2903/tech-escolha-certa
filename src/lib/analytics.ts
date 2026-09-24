type AffiliateClickParams = {
  productName: string;
  pageType: string;
  destination?: string;
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
  destination = "mercado_livre",
  ctaPlacement = "unspecified",
}: AffiliateClickParams) {
  if (typeof window === "undefined") return;

  window.gtag?.("event", "affiliate_click", {
    product_name: productName,
    page_type: pageType,
    destination,
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
