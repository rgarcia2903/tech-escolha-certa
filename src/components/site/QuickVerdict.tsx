import { Link } from "@tanstack/react-router";
import { BadgeCheck } from "lucide-react";
import { HeroPickCTA } from "@/components/site/HeroPickCTA";
import { FAIR_PRICES, formatBRL, type FairPriceId } from "@/lib/fair-prices";
import { getOfferByUrl } from "@/lib/product-catalog";

/**
 * Veredito em 10 segundos, logo abaixo do topo de reviews de modelos antigos com tráfego:
 * até quanto vale pagar, qual comprar acima disso e os botões dos dois.
 */
export function QuickVerdict({
  fairPriceId,
  productId,
  alternativeReviewPath,
  className = "",
}: {
  fairPriceId: FairPriceId;
  productId: string;
  alternativeReviewPath?: string;
  className?: string;
}) {
  const fp = FAIR_PRICES[fairPriceId];
  const alternativeId = getOfferByUrl(fp.alternativeHref)?.productId;
  return (
    <section
      aria-label={`Veredito rápido: ${fp.productName}`}
      className={`mx-auto max-w-7xl px-6 pt-8 lg:px-8 ${className}`}
    >
      <div className="rounded-3xl border-2 border-[#8B5A2B]/30 bg-[#FFF8EF] p-6 shadow-sm">
        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#8B5A2B]">
          <BadgeCheck className="h-4 w-4" /> Veredito em 10 segundos
        </p>
        <p className="mt-3 text-xl font-extrabold leading-snug text-[#0F3F4A] sm:text-2xl">
          O {fp.productName} novo só vale a pena até {formatBRL(fp.maxPrice)}. Acima disso, compre o{" "}
          {fp.alternativeName}.
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-700">
          Motivo: {fp.why}{" "}
          {alternativeReviewPath && (
            <Link to={alternativeReviewPath} className="font-semibold underline">
              Ler o review do {fp.alternativeName}
            </Link>
          )}
        </p>
        <div className="mt-2 grid gap-x-6 sm:grid-cols-2">
          <div>
            <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-500">
              Recomendado: {fp.alternativeName}
            </p>
            {alternativeId && <HeroPickCTA productId={alternativeId} pageType="review" />}
          </div>
          <div>
            <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-500">
              Se achar o {fp.productName} abaixo de {formatBRL(fp.maxPrice)}
            </p>
            <HeroPickCTA productId={productId} pageType="review" />
          </div>
        </div>
      </div>
    </section>
  );
}
