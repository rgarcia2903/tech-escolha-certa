import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, GitCompare, Smartphone, Sparkles, Trophy, Zap } from "lucide-react";
import { SectionHeader, Badge } from "@/components/site/ui";

export const Route = createFileRoute("/comparativos")({
  head: () => ({
    meta: [
      {
        title: "Comparativos de celulares | Tech Escolha Certa",
      },
      {
        name: "description",
        content:
          "Compare celulares lado a lado antes de comprar. Veja diferenças entre Poco, Redmi, Galaxy e iPhone com vereditos diretos e recomendações por perfil.",
      },
      {
        name: "keywords",
        content:
          "comparativo de celulares, Poco X6 Pro vs Poco X7 Pro, Redmi Note 13 Pro vs Redmi Note 14 Pro Plus, Galaxy A55 vs Poco X6 Pro, Galaxy A55 vs Redmi Note 13 Pro, iPhone 15 vs Galaxy S24",
      },
      {
        property: "og:title",
        content: "Comparativos de celulares — Tech Escolha Certa",
      },
      {
        property: "og:description",
        content:
          "Compare celulares antes de comprar: desempenho, câmera, bateria, tela, carregamento e custo-benefício.",
      },
    ],
  }),
  component: ComparisonsPage,
});

const FEATURED_COMPARISONS = [
  {
    title: "Redmi Note 13 Pro vs Redmi Note 14 Pro+",
    summary:
      "Compare tela, câmera, bateria, carregamento, desempenho e preço para decidir se vale pagar mais no modelo novo.",
    href: "/comparativo/redmi-note-13-pro-vs-redmi-note-14-pro-plus",
    family: "Xiaomi",
    tag: "Mais novo",
    bestFor: "Quem está em dúvida entre economizar ou pegar o Redmi mais completo.",
  },
  {
    title: "Poco X6 Pro vs Poco X7 Pro",
    summary:
      "Compare desempenho, bateria, câmera, tela, carregamento e custo-benefício para decidir qual Poco vale mais a pena.",
    href: "/comparativo/poco-x6-pro-vs-poco-x7-pro",
    family: "Poco",
    tag: "Performance",
    bestFor: "Quem prioriza jogos, velocidade, bateria e compra inteligente.",
  },
];

const ALL_COMPARISONS = [
  ...FEATURED_COMPARISONS,
  {
    title: "Galaxy A55 vs Poco X6 Pro",
    summary:
      "Samsung mais equilibrado contra Xiaomi com foco em desempenho e preço agressivo.",
    href: "/comparativo/galaxy-a55-vs-poco-x6-pro",
    family: "Samsung vs Xiaomi",
    tag: "Custo-benefício",
    bestFor: "Quem está entre experiência mais segura ou mais desempenho pelo preço.",
  },
  {
    title: "Galaxy A55 vs Redmi Note 13 Pro",
    summary:
      "Veja qual intermediário entrega melhor equilíbrio entre câmera, bateria, tela e custo-benefício.",
    href: "/comparativo/galaxy-a55-vs-redmi-note-13-pro",
    family: "Samsung vs Xiaomi",
    tag: "Intermediários",
    bestFor: "Quem quer decidir entre software Samsung ou ficha técnica Xiaomi.",
  },
  {
    title: "iPhone 15 vs Galaxy S24",
    summary:
      "Compare ecossistema, desempenho, câmera, bateria e preço antes de escolher.",
    href: "/comparativo/iphone-15-vs-galaxy-s24",
    family: "Apple vs Samsung",
    tag: "Premium",
    bestFor: "Quem está em dúvida entre iOS e Android premium.",
  },
];

const DECISION_GUIDES = [
  {
    icon: Zap,
    title: "Quero desempenho e jogos",
    text: "Comece pelo comparativo Poco X6 Pro vs Poco X7 Pro.",
    href: "/comparativo/poco-x6-pro-vs-poco-x7-pro",
  },
  {
    icon: Sparkles,
    title: "Quero Xiaomi mais completo",
    text: "Compare Redmi Note 13 Pro e Redmi Note 14 Pro+ antes de pagar mais.",
    href: "/comparativo/redmi-note-13-pro-vs-redmi-note-14-pro-plus",
  },
  {
    icon: Smartphone,
    title: "Quero compra equilibrada",
    text: "Veja os comparativos com Galaxy A55 para decidir entre segurança e ficha técnica.",
    href: "/comparativo/galaxy-a55-vs-redmi-note-13-pro",
  },
];

function ComparisonsPage() {
  return (
    <main className="bg-background">
      <section className="hero-gradient border-b border-border">
        <div className="container-tec py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-center">
            <div className="max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cta">
                Comparativos
              </span>
              <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight text-foreground">
                Compare celulares antes de comprar
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Reunimos os principais comparativos do Tech Escolha Certa para você decidir
                com clareza entre Poco, Redmi, Galaxy e iPhone. A ideia é simples: mostrar
                qual modelo faz mais sentido para cada perfil de uso.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="/comparativo/redmi-note-13-pro-vs-redmi-note-14-pro-plus"
                  className="inline-flex items-center gap-2 rounded-md bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground shadow-soft transition hover:brightness-95"
                >
                  Ver comparativo Redmi <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/comparativo/poco-x6-pro-vs-poco-x7-pro"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
                >
                  Ver comparativo Poco <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-elevated">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-cta/10 text-cta">
                  <GitCompare className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Hub de decisão
                  </p>
                  <p className="font-heading text-2xl font-bold text-foreground">
                    {ALL_COMPARISONS.length} comparativos
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                <MiniStat label="Foco atual" value="Celulares" />
                <MiniStat label="Clusters fortes" value="Xiaomi, Poco e Samsung" />
                <MiniStat label="Objetivo" value="Decisão de compra" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-tec py-14 md:py-20">
        <SectionHeader
          eyebrow="Em destaque"
          title="Comparativos que merecem prioridade agora"
          description="Esses são os comparativos mais importantes para fortalecer os clusters Xiaomi e Poco."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {FEATURED_COMPARISONS.map((comparison, index) => (
            <article
              key={comparison.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cta/10 blur-3xl" />

              <div className="relative">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant={index === 0 ? "cta" : "teal"}>Comparativo principal</Badge>
                  <span className="rounded-full bg-surface px-3 py-1 text-xs font-semibold text-muted-foreground">
                    {comparison.family}
                  </span>
                </div>

                <h2 className="mt-4 font-heading text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                  {comparison.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {comparison.summary}
                </p>

                <div className="mt-5 rounded-2xl bg-surface p-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-cta">
                    Melhor para
                  </span>
                  <p className="mt-1 text-sm text-foreground">{comparison.bestFor}</p>
                </div>

                <a
                  href={comparison.href}
                  className="mt-5 inline-flex items-center gap-2 rounded-md bg-cta px-5 py-2.5 text-sm font-semibold text-cta-foreground transition hover:brightness-95"
                >
                  Ler comparativo completo <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="container-tec py-14 md:py-20">
          <SectionHeader
            eyebrow="Escolha pelo perfil"
            title="Qual comparativo você deve ler primeiro?"
            description="Use este atalho se você ainda não sabe por onde começar."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {DECISION_GUIDES.map((guide) => {
              const Icon = guide.icon;

              return (
                <a
                  key={guide.title}
                  href={guide.href}
                  className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-elevated"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal/10 text-teal">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                    {guide.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {guide.text}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-cta">
                    Abrir guia <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-tec py-14 md:py-20">
        <SectionHeader
          eyebrow="Todos os comparativos"
          title="Leia todos os comparativos publicados"
          description="Cada página compara os pontos que mais pesam na compra: tela, câmera, desempenho, bateria, carregamento, software e custo-benefício."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {ALL_COMPARISONS.map((comparison) => (
            <article
              key={comparison.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="flex items-center justify-between gap-3">
                <Badge variant="teal">VS</Badge>
                <span className="rounded-full bg-surface px-3 py-1 text-xs font-semibold text-muted-foreground">
                  {comparison.tag}
                </span>
              </div>

              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                {comparison.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {comparison.summary}
              </p>

              <a
                href={comparison.href}
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-cta"
              >
                Ver comparativo <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#0F3F4A]">
        <div className="container-tec py-12 md:py-16">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-[#B9774B]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B9774B]">
                  Recomendação editorial
                </span>
              </div>
              <h2 className="mt-3 font-heading text-2xl md:text-3xl font-bold text-white">
                Comece pelos comparativos de Xiaomi e Poco.
              </h2>
              <p className="mt-3 max-w-3xl text-sm md:text-base leading-relaxed text-slate-100">
                Eles conectam os reviews mais recentes do site e ajudam o Google a entender melhor
                os clusters de Redmi, Poco e custo-benefício.
              </p>
            </div>

            <a
              href="/melhores-celulares-xiaomi"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#B9774B] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-95"
            >
              Ver guia Xiaomi <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-4">
      <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </span>
      <strong className="mt-1 block text-sm text-foreground">{value}</strong>
    </div>
  );
}
