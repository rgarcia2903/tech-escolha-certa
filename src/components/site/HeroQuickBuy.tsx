import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { FAIR_PRICES, formatBRL, goodDealFor, type FairPriceId } from "@/lib/fair-prices";
import { getOfferByUrl, getOffers, getProduct, STORE_LABELS } from "@/lib/product-catalog";
import { trackAffiliateClick } from "@/lib/analytics";

/**
 * Resposta curta e botões das lojas logo abaixo do título, só no celular: no desktop o card lateral
 * do hero já mostra isso. Sem preço de loja: só o preço-alvo editorial.
 */
export function HeroQuickBuy({
  productId,
  fairPriceId,
  pageType = "review",
}: {
  productId: string;
  fairPriceId?: FairPriceId;
  pageType?: string;
}) {
  const product = getProduct(productId);
  const offers = getOffers(productId);
  const fp = fairPriceId ? FAIR_PRICES[fairPriceId] : undefined;
  const target = fp?.maxPrice ?? goodDealFor(productId);
  const altId = fp ? getOfferByUrl(fp.alternativeHref)?.productId : undefined;
  const alt = altId ? getProduct(altId) : undefined;
  if (!product || (!offers.length && !target)) return null;
  return (
    <div className="mt-6 rounded-2xl bg-white/10 p-4 ring-1 ring-white/20 lg:hidden">
      {target && (
        <p className="text-base leading-6 text-white">
          Vale a pena até <strong className="text-[#F2C38B]">{formatBRL(target)}</strong>.
          {alt?.reviewPath && (
            <>
              {" "}
              Acima disso, veja o{" "}
              <Link to={alt.reviewPath} className="font-semibold underline">
                {alt.name}
              </Link>
              .
            </>
          )}
        </p>
      )}
      {offers.length > 0 && (
        <div className="mt-3 grid gap-2">
          {offers.map((offer) => (
            <a
              key={offer.id}
              href={offer.url}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              onClick={() =>
                trackAffiliateClick({
                  productName: product.name,
                  productId,
                  offerId: offer.id,
                  destination: offer.store,
                  pageType,
                  ctaPlacement: "hero_mobile",
                })
              }
              className={`offer-button inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-4 py-3 text-center text-sm font-bold ${
                offer.store === "amazon" ? "offer-button-amazon" : "offer-button-meli"
              }`}
            >
              Ver preço de hoje {offer.store === "amazon" ? "na" : "no"} {STORE_LABELS[offer.store]}
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
            </a>
          ))}
          <p className="text-xs text-slate-300">Links de afiliado. Confira a versão e o preço final na loja.</p>
        </div>
      )}
    </div>
  );
}
