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

export function trackPageView(path: string) {
  if (typeof window === "undefined") return;

  window.gtag?.("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}
