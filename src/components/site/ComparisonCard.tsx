import { ComparisonVisual } from "./ComparisonVisual";
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
      <ComparisonVisual path={href} />
      <div className="px-6 pt-4 text-xs leading-5 text-slate-600">
        <strong className="text-[#0F3F4A]">Por perfil: </strong>
        {winner}
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold tracking-tight text-[#0F3F4A] transition group-hover:text-[#8B5A2B]">
          {title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>

        <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0F3F4A] transition group-hover:text-[#8B5A2B]">
          Ver comparativo
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
