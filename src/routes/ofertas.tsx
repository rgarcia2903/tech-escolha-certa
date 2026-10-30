import { EditorialSelection } from "@/components/site/EditorialSelection";
import { STOREFRONT_PRODUCT_IDS } from "@/lib/editorial-policy";
import { PhoneDecisionFinder } from "@/components/site/PhoneDecisionFinder";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  CheckCircle2,
  CircleAlert,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";

const CANONICAL = "https://techescolhacerta.com.br/ofertas";

export const Route = createFileRoute("/ofertas")({
  head: () => ({
    meta: [
      {
        title: "Opções de compra de celulares na Amazon e no Mercado Livre | Tech Escolha Certa",
      },
      {
        name: "description",
        content:
          "Pesquise opções de compra por modelo na Amazon e no Mercado Livre. Confira variante, preço e condições diretamente em cada loja.",
      },
      {
        name: "keywords",
        content:
          "ofertas de celulares, celulares em promoção, ofertas Mercado Livre, Galaxy A17 oferta, Galaxy A36 oferta, Moto G86 oferta, Redmi Note 15 oferta, Galaxy S25 FE oferta",
      },
      {
        property: "og:title",
        content: "Opções de compra de celulares na Amazon e no Mercado Livre",
      },
      {
        property: "og:description",
        content:
          "Página central com celulares recomendados nos guias, reviews e comparativos do Tech Escolha Certa.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: CANONICAL },
    ],
  }),
  component: OfertasPage,
});

const confidenceCards = [
  {
    icon: CheckCircle2,
    title: "Indicação por perfil",
    text: "A recomendação muda conforme orçamento e prioridade — não existe um único melhor para todos.",
  },
  {
    icon: CircleAlert,
    title: "Ponto fraco visível",
    text: "Mostramos o principal limite de cada escolha antes de levar você para a oferta.",
  },
  {
    icon: ShieldCheck,
    title: "Comparação antes do clique",
    text: "Você pode abrir o review e o concorrente mais relevante antes de consultar o preço.",
  },
];

const guides = [
  { title: "Lançamentos de 2026", href: "/lancamentos" },
  { title: "Melhor celular para jogos pesados", href: "/melhor-celular-para-jogos-pesados" },
  { title: "Celular com melhor bateria", href: "/celular-com-melhor-bateria" },
  {
    title: "Melhores celulares até R$ 1.500",
    href: "/guia/melhores-celulares-ate-1500-reais",
  },
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
      <section className="storefront-hero text-white">
        <div className="container-tec py-7 md:py-9">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#BEE7EA]">
            Amazon e Mercado Livre
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            Compare celulares nas lojas
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-200 md:text-base">
            Seu modelo, suas opções de compra. Confira preço, versão e disponibilidade diretamente
            na loja.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="#selecao-editorial"
              className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#103A49]"
            >
              Ver modelos e preços <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
            <a href="#escolha-rapida" className="storefront-chip">
              Escolher por orçamento
            </a>
          </div>
          <p className="mt-4 text-xs leading-5 text-slate-200">
            Links afiliados · preços e estoque podem mudar · compra final na loja escolhida.
          </p>
        </div>
      </section>

      <EditorialSelection
        productIds={STOREFRONT_PRODUCT_IDS}
        pageType="ofertas"
        title="Modelos para consultar nas lojas"
      />

      <PhoneDecisionFinder pageType="ofertas" showOfferMobileBar />

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 md:py-16">
        <div className="grid gap-4 md:grid-cols-3">
          {confidenceCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="rounded-2xl border border-border bg-card p-5 shadow-soft"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-cta/10 text-cta">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-lg font-bold text-foreground">{card.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </article>
            );
          })}
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
                Se você ainda não sabe qual modelo faz mais sentido, comece por um dos guias abaixo
                antes de clicar em uma oferta.
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
                  <h3 className="mt-5 text-base font-bold text-foreground">{guide.title}</h3>
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
                <h2 className="text-2xl font-bold text-foreground">Dica antes de comprar</h2>
              </div>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Não compre só pelo menor preço. Veja se o anúncio é de um bom vendedor, se o produto
                é novo, se tem garantia, se o modelo é a versão correta e se o armazenamento atende
                ao seu uso.
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

      <div className="h-24 lg:hidden" aria-hidden />
    </main>
  );
}
