import { getOfferByUrl, getOffers, getProduct, STORE_LABELS } from "@/lib/product-catalog";
import { trackAffiliateClick } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type MobilePurchaseOption = {
  productName: string;
  href: string;
  label?: string;
  primary?: boolean;
};
type Props = {
  options: MobilePurchaseOption[];
  pageType: string;
  title: string;
  eyebrow?: string;
  reserveSpace?: boolean;
};
export function MobilePurchaseBar({
  options,
  pageType,
  title,
  eyebrow = "Opções de compra",
  reserveSpace = true,
}: Props) {
  const single = options.length === 1 ? getOfferByUrl(options[0].href) : undefined;
  const offers = single ? getOffers(single.productId) : [];
  return (
    <>
      <aside
        data-mobile-purchase
        aria-label="Opções de compra"
        className="fixed inset-x-0 bottom-0 z-[40] border-t border-white/10 bg-[#071E25] text-white shadow-xl lg:hidden"
      >
        <div className="mx-auto max-w-7xl px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-[#D7A77E]">
            {eyebrow}
          </p>
          <p className="mt-1 truncate text-sm font-bold">{title}</p>
          {single && offers.length > 1 ? (
            <details className="group relative mt-2">
              <summary className="cursor-pointer rounded-xl bg-[#8B5A2B] px-4 py-3 text-center text-sm font-bold focus-visible:outline-2">
                Ver opções de compra
              </summary>
              <div className="absolute inset-x-0 bottom-full mb-2 rounded-xl border border-white/20 bg-[#071E25] p-3 shadow-xl">
                <p className="mb-2 text-xs leading-5">
                  Versões podem variar entre lojas. Confira memória, condição e preço no anúncio.
                  Links afiliados.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {offers.map((offer) => (
                    <a
                      key={offer.id}
                      href={offer.url}
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                      className="rounded-xl bg-[#8B5A2B] px-3 py-3 text-center text-xs font-bold"
                      onClick={() =>
                        trackAffiliateClick({
                          productName: getProduct(offer.productId)!.name,
                          productId: offer.productId,
                          variantId: offer.variantId,
                          offerId: offer.id,
                          destination: offer.store,
                          pageType,
                          ctaPlacement: "mobile_sticky",
                        })
                      }
                    >
                      {STORE_LABELS[offer.store]}
                    </a>
                  ))}
                </div>
              </div>
            </details>
          ) : (
            <div className={cn("mt-2 grid gap-2", options.length > 1 && "grid-cols-2")}>
              {options.map((option) => {
                const offer = getOfferByUrl(option.href);
                return (
                  <a
                    key={option.href}
                    href={option.href}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[#8B5A2B] px-3 py-3 text-center text-xs font-bold"
                    onClick={() =>
                      trackAffiliateClick({
                        productName: option.productName,
                        href: option.href,
                        pageType,
                        ctaPlacement: "mobile_sticky",
                      })
                    }
                  >
                    {option.label ?? option.productName} ·{" "}
                    {offer ? STORE_LABELS[offer.store] : "Loja"}
                  </a>
                );
              })}
            </div>
          )}
          <p className="mt-2 text-[10px] leading-4 text-slate-300">
            Links afiliados · Confira versão e preço na loja
          </p>
        </div>
      </aside>
      {reserveSpace && <div className="h-40 lg:hidden" aria-hidden />}
    </>
  );
}
