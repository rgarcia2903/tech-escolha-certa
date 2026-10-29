import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { trackAffiliateClick } from "@/lib/analytics";
import { getOfferByUrl, storeLabelForUrl } from "@/lib/product-catalog";
import { FAIR_PRICES, type FairPriceId, checkedMonth, formatBRL } from "@/lib/fair-prices";

/**
 * Bloco "Preço justo": responde em uma linha a dúvida de quem já escolheu o modelo:
 * até quanto vale pagar e o que comprar se estiver acima disso.
 */
export function FairPriceBox({
  id,
  className = "",
  pageType = "review",
}: {
  id: FairPriceId;
  className?: string;
  pageType?: string;
}) {
  const fp = FAIR_PRICES[id];
  const offer = getOfferByUrl(fp.alternativeHref);
  return (
    <section
      aria-label={`Preço justo do ${fp.productName}`}
      className={`rounded-3xl border-2 border-[#8B5A2B]/30 bg-[#FFF8EF] p-6 ${className}`}
    >
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#8B5A2B]">
        <BadgeCheck className="h-4 w-4" /> Preço justo · {checkedMonth(fp)}
      </p>
      <p className="mt-3 text-2xl font-extrabold text-[#0F3F4A]">
        Vale a pena até {formatBRL(fp.maxPrice)}
      </p>
      <p className="mt-2 text-sm leading-6 text-slate-700">
        Pagando mais que isso pelo {fp.productName} novo, prefira o {fp.alternativeName}: {fp.why}
      </p>
      <p className="mt-2 text-sm leading-6 text-slate-700">
        <strong>Na Black Friday:</strong> use {formatBRL(fp.maxPrice)} como teto. Desconto em cima de preço inflado
        não é oferta.
      </p>
      <a
        href={fp.alternativeHref}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        onClick={() =>
          trackAffiliateClick({
            productName: fp.productName,
            pageType,
            href: fp.alternativeHref,
            productId: offer?.productId,
            offerId: offer?.id,
            destination: offer?.store,
            ctaPlacement: "fair_price",
          })
        }
        className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#0F3F4A] underline"
      >
        Ver o {fp.alternativeName} {storeLabelForUrl(fp.alternativeHref)}
        <ArrowUpRight className="h-4 w-4" />
      </a>
      <p className="mt-3 text-xs text-slate-500">
        Referência editorial para o aparelho novo, não o preço da loja. Preços mudam; confira o valor final antes de comprar.
      </p>
    </section>
  );
}
