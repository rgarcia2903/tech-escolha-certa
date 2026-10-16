import { ArrowUpRight } from "lucide-react";
import { getOffers, getProduct, STORE_LABELS, AMAZON_DISCLOSURE } from "@/lib/product-catalog";
import { trackAffiliateClick } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type Props = {
  productId: string;
  variantId?: string;
  pageType: string;
  placement?: string;
  tone?: "light" | "dark";
  className?: string;
};
export function ProductPurchaseOptions({
  productId,
  variantId,
  pageType,
  placement = "content",
  tone = "light",
  className,
}: Props) {
  const product = getProduct(productId);
  if (!product) return null;
  const offers = getOffers(productId, variantId);
  const dark = tone === "dark";
  return (
    <div className={cn("space-y-3", className)}>
      {offers.length ? (
        <>
          <p className={cn("text-xs leading-5", dark ? "text-slate-200" : "text-muted-foreground")}>
            Opções para {product.name}. A versão comercial não foi confirmada; confira RAM,
            armazenamento, região e condição em cada anúncio. As lojas podem oferecer versões
            diferentes.
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {offers.map((offer) => (
              <a
                key={offer.id}
                href={offer.url}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                aria-label={`Comprar ${product.name} na ${STORE_LABELS[offer.store]} — conferir versão no anúncio`}
                onClick={() =>
                  trackAffiliateClick({
                    productName: product.name,
                    productId,
                    variantId: offer.variantId,
                    offerId: offer.id,
                    destination: offer.store,
                    pageType,
                    ctaPlacement: placement,
                  })
                }
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#8B5A2B] px-4 py-3 text-center text-sm font-bold text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5A2B]"
              >
                Comprar {offer.store === "amazon" ? "na" : "no"} {STORE_LABELS[offer.store]}{" "}
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
              </a>
            ))}
          </div>
          <p className={cn("text-xs leading-5", dark ? "text-slate-200" : "text-muted-foreground")}>
            Links afiliados: podemos receber comissão por compras qualificadas, sem custo adicional.
            Preço, estoque, frete e vendedor são consultados na loja.
          </p>
          {offers.some((offer) => offer.store === "amazon") && (
            <p
              className={cn("text-xs leading-5", dark ? "text-slate-200" : "text-muted-foreground")}
            >
              {AMAZON_DISCLOSURE}
            </p>
          )}
        </>
      ) : (
        <p className="text-sm leading-6">
          {variantId
            ? "Nenhum link com esta variante confirmada. Consulte a ficha técnica e compare outras opções."
            : "Ainda não há link de compra cadastrado para este modelo. A ficha oficial é uma fonte técnica, não uma oferta."}
        </p>
      )}
      {product.officialUrl && (
        <a
          href={product.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-block min-h-6 text-xs underline underline-offset-4",
            dark ? "text-slate-200" : "text-[#0F3F4A]",
          )}
        >
          Ficha e informações oficiais de {product.name}
        </a>
      )}
    </div>
  );
}
