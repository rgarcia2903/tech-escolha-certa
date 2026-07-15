import { trackAffiliateClick } from "@/lib/analytics";
import { Badge, Rating } from "@/components/site/ui";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  Clock,
  Gamepad2,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Trophy,
  Zap,
} from "lucide-react";

const CANONICAL = "https://techescolhacerta.com.br/ofertas";

export const Route = createFileRoute("/ofertas")({
  head: () => ({
    meta: [
      {
        title: "Ofertas de celulares no Mercado Livre | Tech Escolha Certa",
      },
      {
        name: "description",
        content:
          "Confira celulares recomendados pelo Tech Escolha Certa com links afiliados oficiais do Mercado Livre. Veja Redmi Note 13 Pro, Redmi Note 14 Pro+, Poco X7 Pro, Poco X6 Pro e Galaxy A55.",
      },
      {
        name: "keywords",
        content:
          "ofertas de celulares, celulares em promoção, ofertas Mercado Livre, Redmi Note 13 Pro oferta, Redmi Note 14 Pro Plus oferta, Poco X7 Pro oferta, Poco X6 Pro oferta, Galaxy A55 oferta",
      },
      {
        property: "og:title",
        content: "Ofertas de celulares no Mercado Livre",
      },
      {
        property: "og:description",
        content:
          "Página central com celulares recomendados nos guias, reviews e comparativos do Tech Escolha Certa.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: CANONICAL },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
  component: OfertasPage,
});

const offers = [
  {
    name: "Redmi Note 13 Pro 5G 256GB",
    badge: "Melhor custo-benefício Xiaomi",
    rating: 4.5,
    image: "/images/products/redmi-note-13-pro-optimized.webp",
    priceLabel: "Conferir preço no Mercado Livre",
    description:
      "É o modelo mais forte para quem quer ficha técnica acima da média sem pular para uma faixa de preço muito alta.",
    bestFor: "Quem quer tela boa, bateria forte e câmera de 200 MP pagando menos.",
    strengths: ["Câmera de 200 MP", "Tela AMOLED", "Boa relação preço/ficha"],
    href:
      "https://www.mercadolivre.com.br/social/gari4140335?matt_word=gari4140335&matt_tool=94872161&forceInApp=true&ref=BGtpHQ2Gd7gu3NJ6rm%2BaBDzcdVEsJkmjUCfPoUqsyMdISk7qaEcLyOhgcKjTflKbMEvjvhG39ybzwLuBiHmGufxF%2FFBwYPJPvak9%2FHtxxTfaEdzk4I0k92KRruIQTVCVFPTIyFEF3xDzYe3eHCv%2Bo6MC6%2FXnj3uM2pxoKFhaJpyQgtgoF2cqW2%2BOv8BcdH0IMZlkW0I%3D",
    review: "/review/redmi-note-13-pro",
    comparison: "/comparativo/redmi-note-13-pro-vs-redmi-note-14-pro-plus",
  },
  {
    name: "Poco X7 Pro 5G 512GB",
    badge: "Melhor para desempenho",
    rating: 4.6,
    image: "/images/products/poco-x7-pro-optimized.webp",
    priceLabel: "Conferir preço no Mercado Livre",
    description:
      "Boa escolha para quem prioriza velocidade, jogos, tela fluida e quer um celular mais forte para vários anos de uso.",
    bestFor: "Quem joga, usa muitos apps e quer desempenho acima da média.",
    strengths: ["Foco em performance", "512 GB", "Boa opção para jogos"],
    href:
      "https://www.mercadolivre.com.br/social/gari4140335?matt_word=gari4140335&matt_tool=94872161&forceInApp=true&ref=BEX9wHRtVEKXx9yO12fXHrh8xMgoDxPmqvJmScZP%2Bkpg%2Bjc924kYQWyPEwdMSE7Pofdd%2F3Dtwc2j60EISIGY%2BQrcELFX5fso2RASDnsUC2LtMEx4Os0fTE9%2F8GAv8o9U6RPyBDRQX6JlRJAzGu5gLZ8m9g%2FAwx%2BjHzZohHxVKTyWyZLU2APF8FUZqzy4DpZAN7ScnA%3D%3D",
    review: "/review/poco-x7-pro",
    comparison: "/comparativo/poco-x6-pro-vs-poco-x7-pro",
  },
  {
    name: "Redmi Note 14 Pro+ 5G 512GB",
    badge: "Mais premium da lista",
    rating: 4.6,
    image: "/images/products/redmi-note-14-pro-plus-optimized.webp",
    priceLabel: "Conferir preço no Mercado Livre",
    description:
      "Entra como alternativa mais completa para quem quer um Redmi mais novo, com acabamento superior e carregamento muito rápido.",
    bestFor: "Quem quer um intermediário premium e aceita pagar mais pelo conjunto.",
    strengths: ["Carregamento 120 W", "512 GB", "Construção mais premium"],
    href:
      "https://www.mercadolivre.com.br/social/gari4140335?matt_word=gari4140335&matt_tool=94872161&forceInApp=true&ref=BAtoKVPghjdMrPDSvQucfOIyJZTtqw%2B%2B99vk4nDBCh2L0rqadZ3UoTBTKgG8J8EasFIZlKmX4m8B6LUIisxINcxwzk7Os83ZSnuuskNd4Ovo3O%2FQTlSI4aN0G7I6DVL004nh8hlN6NcS42MwFHJFidRG0cEjSEpbyJqbez1Oz2UmljyX3ibeKPVHHjFVMp3aHdyMXe8%3D",
    review: "/review/redmi-note-14-pro-plus",
    comparison: "/comparativo/redmi-note-13-pro-vs-redmi-note-14-pro-plus",
  },
  {
    name: "Poco X6 Pro 5G 512GB",
    badge: "Gamer custo-benefício",
    rating: 4.5,
    image: "/images/products/poco-x6-pro-optimized.webp",
    priceLabel: "Conferir preço no Mercado Livre",
    description:
      "Continua sendo uma opção muito competitiva quando aparece com preço abaixo do Poco X7 Pro.",
    bestFor: "Quem quer desempenho para jogos e multitarefa sem pagar pelo modelo mais novo.",
    strengths: ["Desempenho forte", "512 GB", "Boa tela"],
    href:
      "https://www.mercadolivre.com.br/social/gari4140335?matt_word=gari4140335&matt_tool=94872161&forceInApp=true&ref=BNcRGlKdJOfT6JoH3E5fZGIfv7c24CXTT3VxCIOml%2BVEr9jpSKxFF7Hjgu%2F2OHm3qzTcjdy2zGZmVxFSJuMa%2BKFSXlB2TY0GDX7lrtHOcSbNH%2B1QkMcVpeseWTif%2FPnEXCEL14RtFO4wSnZ6svrG62ZYOPj6RGfs%2BNBdzymz8MVrIyQhE%2BWL3C6XatHNbIAwzCnEXMc%3D",
    review: "/review/poco-x6-pro",
    comparison: "/comparativo/poco-x6-pro-vs-poco-x7-pro",
  },
  {
    name: "Samsung Galaxy A55 5G 256GB",
    badge: "Samsung mais equilibrado",
    rating: 4.6,
    image: "/images/products/galaxy-a55-optimized.webp",
    priceLabel: "Conferir preço no Mercado Livre",
    description:
      "É a escolha mais segura para quem prefere Samsung, quer bom acabamento, IP67, tela de qualidade e experiência mais previsível.",
    bestFor: "Quem quer equilíbrio, pós-venda Samsung e menor risco de arrependimento.",
    strengths: ["IP67", "Boa construção", "Experiência Samsung"],
    href:
      "https://www.mercadolivre.com.br/social/gari4140335?matt_word=gari4140335&matt_tool=94872161&forceInApp=true&ref=BCL5bQjsjsabVIDan%2BquPGrfwN7a1FohoY06VAMKSazfMMvBQBdIW8zqBe37an9yyDe7QBDwJDm4QTYk2yzYChcH7E981AVDRBB24zjHcrAaiUrBmaIT95DFr4B%2BxfbwS56aaUOzDbz6%2B7hTZlL5IRF3RiLdsWRGZ73nYf4w1Km8Nrk1WlHmXz7vJLtq48XyAYE%2B%2F8s%3D",
    review: "/review/galaxy-a55",
    comparison: "/comparativo/galaxy-a55-vs-redmi-note-13-pro",
  },
];

const decisionCards = [
  {
    icon: Trophy,
    title: "Melhor custo-benefício",
    text: "Comece pelo Redmi Note 13 Pro se a ideia é pagar menos e ainda levar uma ficha técnica forte.",
  },
  {
    icon: Gamepad2,
    title: "Melhor para jogos",
    text: "Compare Poco X7 Pro e Poco X6 Pro. O X7 Pro é mais novo; o X6 Pro pode compensar quando estiver bem mais barato.",
  },
  {
    icon: ShieldCheck,
    title: "Compra mais segura",
    text: "O Galaxy A55 é a escolha mais conservadora para quem valoriza marca, acabamento e experiência Samsung.",
  },
];

const guides = [
  {
    title: "Melhores celulares Xiaomi",
    href: "/melhores-celulares-xiaomi",
  },
  {
    title: "Melhores celulares custo-benefício",
    href: "/melhores-celulares-custo-beneficio",
  },
  {
    title: "Comparativos de celulares",
    href: "/comparativos",
  },
  {
    title: "Melhores celulares Samsung",
    href: "/melhores-celulares-samsung",
  },
];

function OfertasPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <div className="absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-cta/10 blur-[120px]" />
        <div className="absolute -bottom-40 -left-32 h-[26rem] w-[26rem] rounded-full bg-teal/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="cta">Ofertas</Badge>
                <Badge variant="soft">Mercado Livre</Badge>
                <Badge variant="soft">Links afiliados validados</Badge>
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
                Ofertas de celulares que valem acompanhar
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Reunimos os modelos mais importantes dos nossos reviews e
                comparativos para você conferir o preço atualizado no Mercado
                Livre antes de decidir.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-teal" />
                  Curadoria editorial
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-cta" />
                  Preços e estoque podem mudar
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <BadgeCheck className="h-3.5 w-3.5 text-teal" />
                  Compra final no Mercado Livre
                </span>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#ofertas-recomendadas"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground shadow-soft transition hover:-translate-y-0.5 hover:brightness-105"
                >
                  Ver ofertas recomendadas
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <Link
                  to="/comparativos"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
                >
                  Comparar antes de comprar
                </Link>
              </div>
            </div>

            <aside className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-cta/10 text-cta">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Transparência
                  </p>
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    Como funcionam os links?
                  </h2>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Podemos receber comissão quando você compra por um link indicado.
                Isso não muda o preço final para você e ajuda a manter o site.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Os links podem abrir uma página intermediária do Mercado Livre
                antes do anúncio. Confira preço, prazo, vendedor, garantia,
                avaliações e condições de parcelamento antes de comprar.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 md:py-16">
        <div className="grid gap-4 md:grid-cols-3">
          {decisionCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="rounded-2xl border border-border bg-card p-5 shadow-soft"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-cta/10 text-cta">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-lg font-bold text-foreground">
                  {card.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {card.text}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section
        id="ofertas-recomendadas"
        className="mx-auto max-w-7xl px-6 pb-14 lg:px-8 md:pb-20"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cta">
            Produtos recomendados
          </p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
            Celulares com links afiliados ativos
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            A seleção abaixo prioriza os modelos com maior potencial de compra:
            Xiaomi/Redmi para ficha técnica e desempenho, além do Galaxy A55
            para quem prefere Samsung.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {offers.map((offer) => (
            <article
              key={offer.name}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition hover:-translate-y-0.5 hover:shadow-elevated"
            >
              <div className="relative aspect-[4/3] bg-surface">
                <img
                  src={offer.image}
                  alt={offer.name}
                  loading="lazy"
                  className="h-full w-full object-contain bg-surface p-4"
                />
                <div className="absolute left-4 top-4 max-w-[75%]">
                  <Badge variant="cta">{offer.badge}</Badge>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold text-foreground">
                    {offer.name}
                  </h3>
                  <Rating value={offer.rating} />
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {offer.description}
                </p>

                <div className="mt-4 rounded-xl bg-surface p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Melhor para
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {offer.bestFor}
                  </p>
                </div>

                <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
                  {offer.strengths.map((strength) => (
                    <li key={strength} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-teal" />
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={offer.href}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    onClick={() =>
                      trackAffiliateClick({
                        productName: offer.name,
                        pageType: "ofertas",
                        destination: "mercado_livre",
                      })
                    }
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground shadow-soft transition hover:-translate-y-0.5 hover:brightness-105"
                  >
                    {offer.priceLabel}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <Link
                      to={offer.review}
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
                    >
                      Ler review
                    </Link>

                    <Link
                      to={offer.comparison}
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
                    >
                      Comparar
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
                Ainda em dúvida?
              </p>
              <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
                Consulte os guias antes de comprar
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Se você ainda não sabe qual modelo faz mais sentido, comece por
                um dos guias abaixo antes de clicar em uma oferta.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {guides.map((guide) => (
                <Link
                  key={guide.href}
                  to={guide.href}
                  className="group rounded-2xl border border-border bg-card p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-elevated"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-cta/10 text-cta">
                      <Smartphone className="h-5 w-5" />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-cta" />
                  </div>
                  <h3 className="mt-5 text-base font-bold text-foreground">
                    {guide.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 md:py-20">
        <div className="rounded-2xl border border-cta/30 bg-card p-6 shadow-soft ring-1 ring-cta/10 md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-cta" />
                <h2 className="text-2xl font-bold text-foreground">
                  Dica antes de comprar
                </h2>
              </div>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Não compre só pelo menor preço. Veja se o anúncio é de um bom
                vendedor, se o produto é novo, se tem garantia, se o modelo é a
                versão correta e se o armazenamento atende ao seu uso.
              </p>
            </div>

            <Link
              to="/melhores-celulares-custo-beneficio"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground shadow-soft transition hover:-translate-y-0.5 hover:brightness-105"
            >
              Ver melhores custo-benefício
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
