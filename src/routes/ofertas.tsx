import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/site/ProductCard";
import { SectionHeader, Badge } from "@/components/site/ui";
import { FEATURED_PRODUCTS } from "@/components/site/data";
import { Tag, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/ofertas")({
  head: () => ({
    meta: [
      { title: "Ofertas de tecnologia selecionadas | Tech Escolha Certa" },
      { name: "description", content: "Seleção de ofertas de celulares, notebooks, smartwatches e acessórios — atualizadas e revisadas." },
      { property: "og:title", content: "Ofertas — Tech Escolha Certa" },
      { property: "og:description", content: "Promoções selecionadas com critério, sem enrolação." },
    ],
  }),
  component: OffersPage,
});

function OffersPage() {
  return (
    <>
      <section className="hero-gradient border-b border-border">
        <div className="container-tec py-16 md:py-20 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold">
            <Tag className="h-3.5 w-3.5 text-cta" /> Ofertas selecionadas
          </span>
          <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">As melhores ofertas de tecnologia</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Selecionamos promoções com base em histórico de preço, reputação do vendedor e relação custo-benefício real.
          </p>
        </div>
      </section>

      <section className="container-tec py-14 md:py-20">
        <div className="mb-8 flex items-start gap-3 rounded-xl border border-border bg-surface p-4 text-sm text-muted-foreground">
          <AlertCircle className="h-5 w-5 text-cta shrink-0 mt-0.5" />
          <p>
            Os preços são informativos e podem variar a qualquer momento.
            Confirme sempre o valor final na página da loja.
          </p>
        </div>

        <SectionHeader eyebrow="Em destaque" title="Ofertas em destaque" description="Curadas por nossa equipe nesta semana." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PRODUCTS.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            { title: "Histórico real", desc: "Comparamos com o preço médio antes de recomendar." },
            { title: "Vendedores avaliados", desc: "Indicamos lojistas com boa reputação no Mercado Livre." },
            { title: "Sem hype", desc: "Se a oferta não for boa, não publicamos." },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <Badge variant="teal">{c.title}</Badge>
              <p className="mt-3 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

