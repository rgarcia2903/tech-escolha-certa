import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { GUIDES } from "@/components/site/data";
import { SectionHeader, Badge } from "@/components/site/ui";

export const Route = createFileRoute("/guias-de-compra")({
  head: () => ({
    meta: [
      { title: "Guias de compra de tecnologia | Tech Escolha Certa" },
      { name: "description", content: "Guias práticos para comprar celulares, notebooks, smartwatches e acessórios sem errar." },
      { property: "og:title", content: "Guias de Compra — Tech Escolha Certa" },
      { property: "og:description", content: "Conteúdos diretos para você decidir com clareza." },
    ],
  }),
  component: GuidesPage,
});

function GuidesPage() {
  const featured = GUIDES[0];
  const rest = GUIDES.slice(1);
  return (
    <>
      <section className="hero-gradient border-b border-border">
        <div className="container-tec py-16 md:py-20 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cta">Guias de compra</span>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">Guias para comprar melhor</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Conteúdos práticos que explicam o que realmente importa antes de você decidir.
          </p>
        </div>
      </section>

      <section className="container-tec py-14 md:py-20">
        <article className="rounded-3xl border border-border overflow-hidden grid md:grid-cols-2 bg-card shadow-card">
          <div className="aspect-[4/3] md:aspect-auto bg-surface">
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80"
              alt={featured.title}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <Badge variant="cta">Guia em destaque</Badge>
            <h2 className="mt-3 font-heading text-2xl md:text-3xl font-bold text-foreground">{featured.title}</h2>
            <p className="mt-3 text-muted-foreground">{featured.excerpt}</p>
            <Link to="/guias-de-compra" className="mt-6 inline-flex items-center gap-2 self-start rounded-md bg-cta px-5 py-2.5 text-sm font-semibold text-cta-foreground hover:brightness-95">
              Ler guia completo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </article>

        <div className="mt-12">
          <SectionHeader eyebrow="Mais guias" title="Outros conteúdos para você" />
          <div className="grid gap-5 md:grid-cols-3">
            {rest.map((g) => (
              <article key={g.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-card transition">
                <Badge variant="soft">{g.tag}</Badge>
                <h3 className="mt-3 font-heading text-lg font-semibold">{g.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{g.excerpt}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-cta">Ler guia <ArrowRight className="h-4 w-4" /></a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}






