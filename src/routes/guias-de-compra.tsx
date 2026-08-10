import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHeader, Badge } from "@/components/site/ui";

const CANONICAL = "https" + "://techescolhacerta.com.br/guias-de-compra";

export const Route = createFileRoute("/guias-de-compra")({
  head: () => ({
    meta: [
      { title: "Guias de compra de tecnologia | Tech Escolha Certa" },
      {
        name: "description",
        content:
          "Guias práticos para comprar celulares, notebooks, smartwatches e acessórios sem errar. Veja rankings por preço, marca e perfil de uso.",
      },
      {
        property: "og" + ":title",
        content: "Guias de Compra — Tech Escolha Certa",
      },
      {
        property: "og" + ":description",
        content:
          "Guias diretos para comparar produtos, escolher melhor e encontrar boas ofertas.",
      },
      {
        property: "og" + ":url",
        content: CANONICAL,
      },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
  component: GuidesPage,
});

const featuredGuide = {
  title: "Melhores celulares custo-benefício em 2026",
  excerpt:
    "O guia principal para quem quer comprar bem sem pagar caro por recursos que talvez não use no dia a dia.",
  href: "/melhores-celulares-custo-beneficio",
  tag: "Guia principal",
};

const guides = [
  {
    title: "Melhores celulares até R$ 2.000",
    excerpt:
      "Modelos equilibrados para quem quer boa tela, bateria confiável e desempenho suficiente gastando menos.",
    href: "/melhores-celulares-ate-2000",
    tag: "Até R$ 2.000",
  },
  {
    title: "Melhores celulares até R$ 2.500",
    excerpt:
      "Intermediários premium para quem quer mais longevidade, melhor construção e experiência acima da média.",
    href: "/melhores-celulares-ate-2500",
    tag: "Até R$ 2.500",
  },
  {
    title: "Melhores celulares Xiaomi",
    excerpt:
      "Redmi, Poco e Xiaomi organizados por perfil: custo-benefício, jogos, câmera e equilíbrio geral.",
    href: "/melhores-celulares-xiaomi",
    tag: "Xiaomi",
  },
  {
    title: "Melhores celulares Samsung",
    excerpt:
      "Galaxy A, Galaxy S e os modelos Samsung que mais valem a pena para diferentes perfis.",
    href: "/melhores-celulares-samsung",
    tag: "Samsung",
  },
  {
    title: "Melhores celulares para jogos até R$ 2.000",
    excerpt:
      "Opções para quem prioriza desempenho, tela fluida, bateria e estabilidade em jogos.",
    href: "/guia/melhores-celulares-para-jogos-ate-2000",
    tag: "Jogos",
  },
  {
    title: "Melhores celulares até R$ 1.500",
    excerpt:
      "Escolhas mais acessíveis para quem precisa economizar sem comprar qualquer aparelho.",
    href: "/guia/melhores-celulares-ate-1500-reais",
    tag: "Entrada",
  },
  {
    title: "Melhores celulares até R$ 3.000",
    excerpt:
      "Modelos mais completos para quem quer subir de nível sem entrar no preço dos flagships.",
    href: "/guia/melhores-celulares-ate-3000-reais",
    tag: "Até R$ 3.000",
  },
  {
    title: "Melhores celulares até R$ 3.500",
    excerpt:
      "Celulares fortes para quem busca câmera melhor, desempenho alto e mais vida útil.",
    href: "/guia/melhores-celulares-ate-3500-reais",
    tag: "Até R$ 3.500",
  },
  {
    title: "Ofertas recomendadas",
    excerpt:
      "Atalho para conferir preços e disponibilidade dos celulares recomendados nos nossos guias.",
    href: "/ofertas",
    tag: "Ofertas",
  },
];

function GuidesPage() {
  return (
    <>
      <section className="bg-hero text-hero-foreground">
        <div className="container-tec py-16 md:py-24">
          <Badge variant="cta">Guias de compra</Badge>

          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold tracking-tight md:text-6xl">
            Guias para comprar melhor
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-hero-foreground/80">
            Conteúdos práticos para escolher celulares por faixa de preço,
            marca, desempenho, câmera, bateria e custo-benefício.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/melhores-celulares-custo-beneficio"
              className="inline-flex items-center gap-2 rounded-full bg-[#8B5A2B] px-6 py-3 text-sm font-bold text-white transition hover:brightness-95"
            >
              Ver guia principal <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/ofertas"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#0F3F4A] transition hover:bg-slate-100"
            >
              Ver ofertas
            </Link>
          </div>
        </div>
      </section>

      <section className="container-tec py-14 md:py-20">
        <article className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-card md:grid-cols-2">
          <div className="aspect-[4/3] bg-surface md:aspect-auto">
            <img
              src="/images/products/phones-hero-optimized.webp"
              alt={featuredGuide.title}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center p-8 md:p-10">
            <Badge variant="cta">{featuredGuide.tag}</Badge>

            <h2 className="mt-3 font-heading text-2xl font-bold text-foreground md:text-3xl">
              {featuredGuide.title}
            </h2>

            <p className="mt-3 text-muted-foreground">
              {featuredGuide.excerpt}
            </p>

            <Link
              to={featuredGuide.href}
              className="mt-6 inline-flex items-center gap-2 self-start rounded-md bg-cta px-5 py-2.5 text-sm font-semibold text-cta-foreground hover:brightness-95"
            >
              Ler guia completo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </article>

        <div className="mt-12">
          <SectionHeader
            eyebrow="Mais guias"
            title="Outros conteúdos para você"
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <article
                key={guide.href}
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-card"
              >
                <Badge variant="soft">{guide.tag}</Badge>

                <h3 className="mt-3 font-heading text-lg font-semibold">
                  {guide.title}
                </h3>

                <p className="mt-2 flex-1 text-sm text-muted-foreground">
                  {guide.excerpt}
                </p>

                <Link
                  to={guide.href}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-cta"
                >
                  Ler guia <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
