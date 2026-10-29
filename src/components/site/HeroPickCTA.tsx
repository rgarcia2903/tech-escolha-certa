import { ArrowUpRight } from "lucide-react";
import { trackAffiliateClick } from "@/lib/analytics";
import { getOffers, getProduct, STORE_LABELS } from "@/lib/product-catalog";

/**
 * Botão de compra no topo de guias e listas: leva direto à loja o modelo indicado
 * como melhor escolha, para quem já decidiu ao ler a resposta curta.
 */
export function HeroPickCTA({ productId, pageType }: { productId: string; pageType: string }) {
  const product = getProduct(productId);
  const offers = getOffers(productId);
  if (!product || !offers.length) return null;
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {offers.map((offer) => (
        <a
          key={offer.id}
          href={offer.url}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          data-store={offer.store}
          onClick={() =>
            trackAffiliateClick({
              productName: product.name,
              productId,
              variantId: offer.variantId,
              offerId: offer.id,
              destination: offer.store,
              pageType,
              ctaPlacement: "hero_pick",
            })
          }
          className={
            offer.store === "amazon"
              ? "inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#FFD814] px-5 py-3 text-sm font-bold text-slate-900 shadow transition hover:brightness-95"
              : "inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#FFE600] px-5 py-3 text-sm font-bold text-slate-900 shadow transition hover:brightness-95"
          }
        >
          {product.name}: ver preço {offer.store === "amazon" ? "na" : "no"} {STORE_LABELS[offer.store]}
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </a>
      ))}
    </div>
  );
}
