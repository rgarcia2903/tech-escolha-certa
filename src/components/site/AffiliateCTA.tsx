import { ExternalLink, ShieldCheck, ShoppingBag } from "lucide-react";
import { trackAffiliateClick } from "@/lib/analytics";

type AffiliateCTAProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  href: string;
  highlight?: string;
  productName?: string;
  pageType?: "review" | "comparativo" | "guia" | "ofertas" | "home";
};

export function AffiliateCTA({
  title = "Melhor oferta encontrada",
  description = "Confira preço atualizado, disponibilidade e condições diretamente na loja.",
  buttonText = "Ver oferta no Mercado Livre",
  href,
  highlight,
  productName,
  pageType = "guia",
}: AffiliateCTAProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-[#0B2D35] via-[#114B59] to-[#071E25] p-8 text-white shadow-xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />

      <div className="relative z-10">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#8B5A2B] ring-1 ring-white/15">
              <ShoppingBag className="h-3.5 w-3.5" />
              Oferta recomendada
            </div>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white">
              {title}
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-200">
              {description}
            </p>

            {highlight && (
              <div className="mt-5 inline-flex items-center rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/10">
                {highlight}
              </div>
            )}
          </div>

          <div className="w-full max-w-sm">
            <a
              href={href}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              onClick={() =>
                trackAffiliateClick({
                  productName: productName ?? title,
                  pageType,
                })
              }
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#8B5A2B] px-6 py-4 text-sm font-bold text-white shadow-lg transition hover:brightness-95"
            >
              {buttonText}
              <ExternalLink className="h-4 w-4" />
            </a>

            <div className="mt-4 flex items-start gap-3 rounded-2xl bg-white/8 p-4 ring-1 ring-white/10">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#8B5A2B]" />

              <p className="text-xs leading-6 text-slate-300">
                Podemos receber comissão por compras realizadas através dos nossos links,
                sem custo adicional para você.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}