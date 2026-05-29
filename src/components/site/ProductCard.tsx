import { Badge, Rating } from "./ui";
import { ArrowUpRight } from "lucide-react";

export type Product = {
  name: string;
  image: string;
  rating: number;
  reviews?: number;
  summary?: string;
  price: string;
  description: string;
  badge?: { variant: "cta" | "teal" | "default"; label: string };
  href?: string;
};

export function ProductCard({ product }: { product: Product }) {
  const isRecommended = product.badge?.label === "Recomendado";
  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-[1.25rem] border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated ${
        isRecommended ? "border-cta/40 ring-1 ring-cta/20" : "border-border"
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {product.badge && (
          <div className="absolute top-3.5 left-3.5">
            <Badge variant={product.badge.variant}>{product.badge.label}</Badge>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-[17px] font-semibold leading-tight text-foreground">
          {product.name}
        </h3>
        <div className="mt-2 flex items-center gap-2">
          <Rating value={product.rating} />
          <span className="text-xs text-muted-foreground">
            {product.rating.toFixed(1)}
            {product.reviews ? ` · ${product.reviews.toLocaleString("pt-BR")} avaliações` : ""}
          </span>
        </div>
        {product.summary && (
          <p className="mt-3 border-l-2 border-teal/40 pl-3 text-[13px] italic text-muted-foreground line-clamp-2">
            “{product.summary}”
          </p>
        )}
        <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{product.description}</p>

        <div className="mt-5 flex items-end justify-between gap-3 border-t border-border pt-4">
          <div>
            <span className="block text-[11px] uppercase tracking-wider text-muted-foreground">
              A partir de
            </span>
            <span className="font-heading text-[1.35rem] font-bold leading-tight text-foreground">
              {product.price}
            </span>
            <span className="ml-1 text-[10px] text-muted-foreground">*pode variar</span>
          </div>
        </div>

        <a
          href={product.href ?? "#"}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="group/btn mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground shadow-soft transition-all hover:brightness-105 hover:-translate-y-0.5 hover:shadow-elevated"
        >
          Ver oferta
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </a>
      </div>
    </article>
  );
}




