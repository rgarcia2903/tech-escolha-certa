import { Link } from "@tanstack/react-router";
import { ArrowRight, Star } from "lucide-react";

type TopPickCardProps = {
  category: string;
  product: string;
  description?: string;
  href?: string;
  ctaLabel?: string;
};

export function TopPickCard({
  category,
  product,
  description,
  href,
  ctaLabel = "Ver análise completa",
}: TopPickCardProps) {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#F7F2EB] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#8B5A2B] ring-1 ring-slate-200">
        <Star className="h-3.5 w-3.5" />
        Escolha recomendada
      </div>

      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#8B5A2B]">
        {category}
      </p>

      <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#0F3F4A]">
        {product}
      </h3>

      {description && (
        <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
          {description}
        </p>
      )}

      {href && (
        <Link
          to={href}
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#8B5A2B] px-5 py-3 text-sm font-bold text-white transition hover:brightness-95"
        >
          {ctaLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}
