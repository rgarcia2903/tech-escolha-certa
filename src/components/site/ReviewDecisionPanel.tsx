import { Link } from "@tanstack/react-router";
import { ArrowUpRight, CircleAlert, GitCompare, ShieldCheck } from "lucide-react";

import { AffiliateRedirectNotice } from "@/components/site/AffiliateRedirectNotice";
import { trackAffiliateClick, trackReviewComparisonClick } from "@/lib/analytics";

type ReviewDecisionPanelProps = {
  productName: string;
  bestFor: string;
  caution: string;
  affiliateHref: string;
  comparisonHref: string;
  comparisonLabel: string;
};

export function ReviewDecisionPanel({
  productName,
  bestFor,
  caution,
  affiliateHref,
  comparisonHref,
  comparisonLabel,
}: ReviewDecisionPanelProps) {
  return (
    <div className="mt-6 overflow-hidden rounded-3xl border border-[#0F3F4A]/10 bg-gradient-to-br from-[#F9FCFC] to-[#FFF8F1] p-5 shadow-sm md:p-6">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8B5A2B]">
        Decisão em 20 segundos
      </p>
      <h3 className="mt-2 text-2xl font-extrabold text-[#0F3F4A]">
        {productName}: comprar ou comparar?
      </h3>

      <div className="mt-5 grid gap-3 md:grid-cols-2">
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-4">
          <div className="flex items-center gap-2 text-sm font-bold text-emerald-950">
            <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-700" aria-hidden />
            Boa escolha se
          </div>
          <p className="mt-2 text-sm leading-6 text-emerald-950/80">{bestFor}</p>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-amber-50/80 p-4">
          <div className="flex items-center gap-2 text-sm font-bold text-amber-950">
            <CircleAlert className="h-5 w-5 shrink-0 text-amber-700" aria-hidden />
            Compare antes se
          </div>
          <p className="mt-2 text-sm leading-6 text-amber-950/80">{caution}</p>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <a
          href={affiliateHref}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          onClick={() =>
            trackAffiliateClick({
              productName,
              pageType: "review",
              ctaPlacement: "decision_panel",
            })
          }
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#B9774B] px-5 py-3 text-center text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:brightness-105"
        >
          Ver preço atual <ArrowUpRight className="h-4 w-4" aria-hidden />
        </a>

        <Link
          to={comparisonHref}
          onClick={() =>
            trackReviewComparisonClick({
              productName,
              comparisonPath: comparisonHref,
            })
          }
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-center text-sm font-bold text-[#0F3F4A] transition hover:border-[#8B5A2B] hover:text-[#8B5A2B]"
        >
          {comparisonLabel} <GitCompare className="h-4 w-4" aria-hidden />
        </Link>
      </div>

      <AffiliateRedirectNotice className="mt-4 border-t border-slate-200 pt-3" />
    </div>
  );
}
