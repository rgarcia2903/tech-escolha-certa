type AffiliateClickParams = {
  productName: string;
  pageType: string;
  destination?: string;
};

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, string>
    ) => void;
  }
}

export function trackAffiliateClick({
  productName,
  pageType,
  destination = "mercado_livre",
}: AffiliateClickParams) {
  if (typeof window === "undefined") return;

  window.gtag?.("event", "affiliate_click", {
    product_name: productName,
    page_type: pageType,
    destination,
  });
}