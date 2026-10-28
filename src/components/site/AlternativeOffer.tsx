import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { trackAffiliateClick } from "@/lib/analytics";
import { getOfferByUrl, storeLabelForUrl } from "@/lib/product-catalog";

export type AlternativeOfferProps = {
  /** Modelo analisado na página (para o evento de analytics). */
  fromProductName: string;
  /** Modelo recomendado como alternativa. */
  productName: string;
  href: string;
  reason: string;
  reviewHref?: string;
  className?: string;
};

/**
 * Bloco "alternativa recomendada": usado quando o modelo analisado saiu de linha,
 * está caro ou sem estoque, e um sucessor é a compra mais sensata hoje.
 */
export function AlternativeOffer({
  fromProductName,
  productName,
  href,
  reason,
  reviewHref,
  className = "",
}: AlternativeOfferProps) {
  const offer = getOfferByUrl(href);
  return (
    <aside
      className={`rounded-3xl border border-[#0F3F4A]/15 bg-white p-6 shadow-sm ${className}`}
      aria-label={`Alternativa recomendada: ${productName}`}
    >
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B5A2B]">
        Alternativa recomendada hoje
      </p>
      <h3 className="mt-2 text-xl font-bold text-[#0F3F4A]">{productName}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-700">{reason}</p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <a
          href={href}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          onClick={() =>
            trackAffiliateClick({
              productName: fromProductName,
              pageType: "review",
              href,
              productId: offer?.productId,
              offerId: offer?.id,
              destination: offer?.store,
              ctaPlacement: "alternative",
            })
          }
          className="inline-flex items-center gap-2 rounded-full bg-[#0F3F4A] px-5 py-3 text-sm font-bold text-white transition hover:brightness-110"
        >
          Ver {productName} {storeLabelForUrl(href)}
          <ArrowUpRight className="h-4 w-4" />
        </a>
        {reviewHref && (
          <Link to={reviewHref} className="text-sm font-semibold text-[#0F3F4A] underline">
            Ler a análise do {productName}
          </Link>
        )}
      </div>
      <p className="mt-3 text-xs text-slate-500">Link afiliado: podemos receber comissão, sem custo extra para você.</p>
    </aside>
  );
}
