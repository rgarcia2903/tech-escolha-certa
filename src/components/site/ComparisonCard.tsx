import { Link } from "@tanstack/react-router";
import { ArrowRight, GitCompare } from "lucide-react";

type ComparisonCardProps = {
  title: string;
  description: string;
  href: string;
  image?: string;
  winner: string;
};

export function ComparisonCard({
  title,
  description,
  href,
  image = "/images/products/phones-hero-optimized.webp",
  winner,
}: ComparisonCardProps) {
  return (
    <Link
      to={href}
      className="group block overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#071E25]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/15 to-transparent" />

        <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md ring-1 ring-white/20">
          <GitCompare className="h-3.5 w-3.5" />
          Comparativo
        </div>

        <div className="absolute bottom-5 left-5 right-5">
          <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md ring-1 ring-white/20">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-[#D9A066]">
              Melhor para:
            </p>

            <p className="mt-1 text-sm font-semibold text-white">{winner}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold tracking-tight text-[#0F3F4A] transition group-hover:text-[#B9774B]">
          {title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>

        <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0F3F4A] transition group-hover:text-[#B9774B]">
          Ver comparativo
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
