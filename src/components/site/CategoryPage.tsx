import { Link } from "@tanstack/react-router";
import { ProductCard } from "./ProductCard";
import { SectionHeader } from "./ui";
import { FEATURED_PRODUCTS, GUIDES, COMPARISONS } from "./data";
import { ArrowRight } from "lucide-react";

export function CategoryPage({
  title,
  intro,
  eyebrow,
}: {
  title: string;
  intro: string;
  eyebrow: string;
}) {
  return (
    <>
      <section className="hero-gradient border-b border-border">
        <div className="container-tec py-16 md:py-20 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cta">{eyebrow}</span>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold text-foreground leading-tight">{title}</h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{intro}</p>
        </div>
      </section>

      <section className="container-tec py-14 md:py-20">
        <SectionHeader
          eyebrow="Em destaque"
          title="Produtos recomendados"
          description="Seleção curada com base em desempenho, custo-benefício e relação qualidade-preço."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PRODUCTS.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="container-tec py-14 md:py-20">
          <SectionHeader eyebrow="Conteúdo" title="Guias relacionados" />
          <div className="grid gap-5 md:grid-cols-2">
            {GUIDES.slice(0, 4).map((g) => (
              <article key={g.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <span className="text-xs font-semibold uppercase tracking-wider text-cta">{g.tag}</span>
                <h3 className="mt-2 font-heading font-semibold text-lg text-foreground">{g.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{g.excerpt}</p>
                <Link to="/guias-de-compra" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-cta">
                  Ler guia <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-tec py-14 md:py-20">
        <SectionHeader eyebrow="Comparativos" title="Comparativos relacionados" />
        <div className="grid gap-5 md:grid-cols-3">
          {COMPARISONS.map((c) => (
            <article key={c.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="font-heading font-semibold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.summary}</p>
              <Link to="/comparativos" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-cta hover:underline">
                Ver comparativo <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
