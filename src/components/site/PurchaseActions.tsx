import { ArrowUpRight, ShieldCheck } from "lucide-react";

import { AffiliateRedirectNotice } from "@/components/site/AffiliateRedirectNotice";
import { trackAffiliateClick } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type PurchaseOption = {
  productName: string;
  href: string;
  label?: string;
  primary?: boolean;
};

type PurchaseActionsProps = {
  options: PurchaseOption[];
  pageType: "review" | "comparativo" | "guia" | "ofertas" | "home";
  placement?: "hero" | "sidebar" | "content" | "sticky";
  title?: string;
  description?: string;
  tone?: "light" | "dark";
  className?: string;
};

export function PurchaseActions({
  options,
  pageType,
  placement = "hero",
  title = "Consulte o preço atual",
  description = "Preço, estoque e condições são confirmados diretamente no Mercado Livre.",
  tone = "light",
  className,
}: PurchaseActionsProps) {
  const dark = tone === "dark";

  return (
    <div
      className={cn(
        "rounded-2xl border p-4 shadow-soft",
        dark
          ? "border-white/15 bg-white/10 text-white backdrop-blur-md"
          : "border-cta/25 bg-card/95 text-foreground ring-1 ring-cta/10",
        className,
      )}
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0">
          <span
            className={cn(
              "text-[11px] font-semibold uppercase tracking-[0.16em]",
              dark ? "text-[#D7A77E]" : "text-cta",
            )}
          >
            Ofertas atualizadas
          </span>
          <p
            className={cn(
              "mt-1 font-heading text-lg font-bold",
              dark ? "text-white" : "text-foreground",
            )}
          >
            {title}
          </p>
          <p
            className={cn(
              "mt-1 text-xs leading-5",
              dark ? "text-slate-300" : "text-muted-foreground",
            )}
          >
            {description}
          </p>
        </div>

        <div
          className={cn(
            "grid shrink-0 gap-2",
            options.length > 1 ? "sm:grid-cols-2" : "sm:min-w-64",
          )}
        >
          {options.map((option, index) => {
            const primary = option.primary ?? index === 0;

            return (
              <a
                key={`${option.productName}-${option.href}`}
                href={option.href}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                onClick={() =>
                  trackAffiliateClick({
                    productName: option.productName,
                    pageType,
                    ctaPlacement: placement,
                  })
                }
                className={cn(
                  "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-4 py-3 text-center text-xs font-bold transition",
                  primary
                    ? "bg-cta text-cta-foreground shadow-soft hover:-translate-y-0.5 hover:brightness-105"
                    : dark
                      ? "border border-white/20 bg-white/10 text-white hover:bg-white/15"
                      : "border border-border bg-background text-foreground hover:bg-secondary",
                )}
              >
                {option.label ?? `Ver ${option.productName} no Mercado Livre`}
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
              </a>
            );
          })}
        </div>
      </div>

      <div className="mt-3 grid gap-2 border-t border-current/10 pt-3 md:grid-cols-2 md:items-start">
        <AffiliateRedirectNotice tone={tone} />
        <p
          className={cn(
            "flex items-start gap-2 text-xs leading-5",
            dark ? "text-slate-300" : "text-muted-foreground",
          )}
        >
          <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
          <span>Confira vendedor, frete e condições antes de finalizar a compra.</span>
        </p>
      </div>
    </div>
  );
}
