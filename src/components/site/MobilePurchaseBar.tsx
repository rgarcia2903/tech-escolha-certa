import { ArrowUpRight, ShieldCheck } from "lucide-react";

import { trackAffiliateClick } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type MobilePurchaseOption = {
  productName: string;
  href: string;
  label?: string;
  primary?: boolean;
};

type MobilePurchaseBarProps = {
  options: MobilePurchaseOption[];
  pageType: "review" | "comparativo" | "guia" | "ofertas" | "home";
  title: string;
  eyebrow?: string;
};

export function MobilePurchaseBar({
  options,
  pageType,
  title,
  eyebrow = "Preço atualizado",
}: MobilePurchaseBarProps) {
  const singleOption = options.length === 1;

  return (
    <>
      <aside
        aria-label="Opções de compra"
        className="fixed inset-x-0 bottom-0 z-[60] border-t border-white/10 bg-[#071E25]/96 shadow-[0_-12px_30px_rgba(7,30,37,0.25)] backdrop-blur-xl lg:hidden"
      >
        <div className="mx-auto max-w-7xl px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3">
          <div className={cn(singleOption && "flex items-center gap-3")}>
            <div className={cn("min-w-0", singleOption && "flex-1")}>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D7A77E]">
                {eyebrow}
              </span>
              <span className="mt-0.5 block truncate text-sm font-bold text-white">{title}</span>
              <span className="mt-0.5 flex items-center gap-1 text-[10px] text-slate-300">
                <ShieldCheck className="h-3 w-3 shrink-0 text-[#D7A77E]" aria-hidden />
                Link afiliado · compra no Mercado Livre
              </span>
            </div>

            <div
              className={cn("grid gap-2", singleOption ? "w-[42%] shrink-0" : "mt-2 grid-cols-2")}
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
                        ctaPlacement: "mobile_sticky",
                      })
                    }
                    className={cn(
                      "inline-flex min-h-11 items-center justify-center gap-1 rounded-xl px-3 py-2 text-center text-xs font-bold transition",
                      primary
                        ? "bg-[#B9774B] text-white shadow-lg hover:brightness-105"
                        : "border border-white/20 bg-white/10 text-white hover:bg-white/15",
                    )}
                  >
                    {option.label ?? "Ver preço"}
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </aside>

      <div className={cn(singleOption ? "h-24" : "h-32", "lg:hidden")} aria-hidden />
    </>
  );
}
