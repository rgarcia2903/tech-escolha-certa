import { ProductMedia } from "@/components/site/ProductMedia";
import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";

type ReviewCardProps = {
  title: string;
  description: string;
  href: string;
  image?: string;
  category?: string;
  score?: string;
  badge?: string;
};

export function ReviewCard({
  title,
  description,
  href,
  image = "/images/products/phones-hero-optimized.webp",
  category = "Review",
  score,
  badge,
}: ReviewCardProps) {
  return (
    <Link
      to={href}
      className="group block overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#071E25]">
        <ProductMedia
          name={title.replace(/^Review /, "")}
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="pointer-events-none absolute inset-0" />

        <div className="absolute left-5 top-5">
          <span className="rounded-full bg-[#0F3F4A] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-md ring-1 ring-white/20">
            {category}
          </span>
        </div>

        {badge && (
          <div className="absolute bottom-5 left-5">
            <span className="rounded-full bg-[#8B5A2B] px-3 py-1 text-xs font-semibold text-white shadow-lg">
              {badge}
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold tracking-tight text-[#0F3F4A] transition group-hover:text-[#8B5A2B]">
          {title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>

        <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#8B5A2B]">
          Ler análise →
        </div>
      </div>
    </Link>
  );
}
