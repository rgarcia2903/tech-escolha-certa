import {
  GALAXY_A35_AFFILIATE_URL,
  GALAXY_A55_AFFILIATE_URL,
  GALAXY_S24_AFFILIATE_URL,
  IPHONE_15_AFFILIATE_URL,
  POCO_X6_PRO_AFFILIATE_URL,
  POCO_X7_PRO_AFFILIATE_URL,
  REDMI_NOTE_13_PRO_AFFILIATE_URL,
  REDMI_NOTE_14_PRO_PLUS_AFFILIATE_URL,
} from "@/lib/affiliate-links";
import { AffiliateRedirectNotice } from "@/components/site/AffiliateRedirectNotice";
import { MobilePurchaseBar } from "@/components/site/MobilePurchaseBar";
import { PhoneDecisionFinder } from "@/components/site/PhoneDecisionFinder";
import { trackAffiliateClick, trackOfferResearchClick } from "@/lib/analytics";
import { Badge, Rating } from "@/components/site/ui";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  CircleAlert,
  Clock,
  ShieldCheck,
  Smartphone,
  Sparkles,
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
          "Escolha seu orçamento e prioridade para encontrar a oferta de celular mais coerente. Compare Samsung, Xiaomi, Poco e iPhone antes de ver o preço no Mercado Livre.",
      },
      {
        name: "keywords",
        content:
          "ofertas de celulares, celulares em promoção, ofertas Mercado Livre, Redmi Note 13 Pro oferta, Redmi Note 14 Pro Plus oferta, Poco X7 Pro oferta, Poco X6 Pro oferta, Galaxy A55 oferta, Galaxy A35 oferta",
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
    segment: "Intermediário",
    rating: 4.5,
    image: "/images/products/redmi-note-13-pro-optimized.webp",
    priceLabel: "Conferir preço no Mercado Livre",
    description:
      "É o modelo mais forte para quem quer ficha técnica acima da média sem pular para uma faixa de preço muito alta.",
    bestFor: "Quem quer tela boa, bateria forte e câmera de 200 MP pagando menos.",
    strengths: ["Câmera de 200 MP", "Tela AMOLED", "Boa relação preço/ficha"],
    caution: "você prefere software mais simples e suporte Samsung; veja o Galaxy A35.",
    href: REDMI_NOTE_13_PRO_AFFILIATE_URL,
    review: "/review/redmi-note-13-pro",
    comparison: "/comparativo/redmi-note-13-pro-vs-redmi-note-14-pro-plus",
  },
  {
    name: "Poco X7 Pro 5G 512GB",
    badge: "Melhor para desempenho",
    segment: "Performance",
    rating: 4.6,
    image: "/images/products/poco-x7-pro-optimized.webp",
    priceLabel: "Conferir preço no Mercado Livre",
    description:
      "Boa escolha para quem prioriza velocidade, jogos, tela fluida e quer um celular mais forte para vários anos de uso.",
    bestFor: "Quem joga, usa muitos apps e quer desempenho acima da média.",
    strengths: ["Foco em performance", "512 GB", "Boa opção para jogos"],
    caution: "câmera e acabamento pesam mais que potência; veja o Galaxy A55.",
    href: POCO_X7_PRO_AFFILIATE_URL,
    review: "/review/poco-x7-pro",
    comparison: "/comparativo/poco-x6-pro-vs-poco-x7-pro",
  },
  {
    name: "Redmi Note 14 Pro+ 5G 512GB",
    badge: "Mais premium da lista",
    segment: "Intermediário premium",
    rating: 4.6,
    image: "/images/products/redmi-note-14-pro-plus-optimized.webp",
    priceLabel: "Conferir preço no Mercado Livre",
    description:
      "Entra como alternativa mais completa para quem quer um Redmi mais novo, com acabamento superior e carregamento muito rápido.",
    bestFor: "Quem quer um intermediário premium e aceita pagar mais pelo conjunto.",
    strengths: ["Carregamento 120 W", "512 GB", "Construção mais premium"],
    caution: "você quer uma experiência mais previsível; compare preço e suporte com o Galaxy A55.",
    href: REDMI_NOTE_14_PRO_PLUS_AFFILIATE_URL,
    review: "/review/redmi-note-14-pro-plus",
    comparison: "/comparativo/redmi-note-13-pro-vs-redmi-note-14-pro-plus",
  },
  {
    name: "Poco X6 Pro 5G 512GB",
    badge: "Gamer custo-benefício",
    segment: "Performance",
    rating: 4.5,
    image: "/images/products/poco-x6-pro-optimized.webp",
    priceLabel: "Conferir preço no Mercado Livre",
    description:
      "Continua sendo uma opção muito competitiva quando aparece com preço abaixo do Poco X7 Pro.",
    bestFor: "Quem quer desempenho para jogos e multitarefa sem pagar pelo modelo mais novo.",
    strengths: ["Desempenho forte", "512 GB", "Boa tela"],
    caution: "o Poco X7 Pro estiver próximo no preço; o modelo mais novo tende a compensar.",
    href: POCO_X6_PRO_AFFILIATE_URL,
    review: "/review/poco-x6-pro",
    comparison: "/comparativo/poco-x6-pro-vs-poco-x7-pro",
  },
  {
    name: "Samsung Galaxy A55 5G 256GB",
    badge: "Samsung mais equilibrado",
    segment: "Compra segura",
    rating: 4.6,
    image: "/images/products/galaxy-a55-optimized.webp",
    priceLabel: "Conferir preço no Mercado Livre",
    description:
      "É a escolha mais segura para quem prefere Samsung, quer bom acabamento, IP67, tela de qualidade e experiência mais previsível.",
    bestFor: "Quem quer equilíbrio, pós-venda Samsung e menor risco de arrependimento.",
    strengths: ["IP67", "Boa construção", "Experiência Samsung"],
    caution: "desempenho bruto é prioridade; veja o Poco X7 Pro.",
    href: GALAXY_A55_AFFILIATE_URL,
    review: "/review/galaxy-a55",
    comparison: "/comparativo/galaxy-a55-vs-redmi-note-13-pro",
  },
  {
    name: "Samsung Galaxy A35 5G 256GB",
    badge: "Samsung custo-benefício",
    segment: "Intermediário",
    rating: 4.4,
    image: "/images/products/galaxy-a35-optimized.webp",
    priceLabel: "Conferir preço no Mercado Livre",
    description:
      "Boa alternativa para quem quer economizar dentro da linha Samsung sem abrir mão de tela AMOLED, 5G, IP67 e boa experiência no dia a dia.",
    bestFor: "Quem quer Samsung gastando menos que no Galaxy A55.",
    strengths: ["IP67", "Tela AMOLED", "Bom custo-benefício"],
    caution: "a diferença para o Galaxy A55 estiver pequena; o A55 entrega acabamento superior.",
    href: GALAXY_A35_AFFILIATE_URL,
    review: "/review/galaxy-a35",
    comparison: "/comparativo-galaxy-a55-vs-galaxy-a35",
  },
  {
    name: "Samsung Galaxy S24 5G 256GB",
    badge: "Android premium equilibrado",
    segment: "Premium",
    rating: 4.8,
    image: "/images/products/galaxy-s24-optimized.webp",
    priceLabel: "Conferir preço no Mercado Livre",
    description:
      "Combina desempenho de topo, boas câmeras, acabamento premium e suporte prolongado em um corpo compacto.",
    bestFor: "Quem quer uma experiência Android premium completa e prefere celular compacto.",
    strengths: ["Câmeras consistentes", "Desempenho de topo", "Suporte prolongado"],
    caution: "autonomia é a maior prioridade; compare a bateria com aparelhos maiores.",
    href: GALAXY_S24_AFFILIATE_URL,
    review: "/review/galaxy-s24",
    comparison: "/comparativo/iphone-15-vs-galaxy-s24",
  },
  {
    name: "Apple iPhone 15 128GB",
    badge: "Câmera e ecossistema Apple",
    segment: "Premium",
    rating: 4.7,
    image: "/images/products/iphone-15-optimized.webp",
    priceLabel: "Conferir preço no Mercado Livre",
    description:
      "Faz sentido para quem valoriza vídeo, câmera consistente, acabamento e integração com outros produtos Apple.",
    bestFor: "Quem já usa o ecossistema Apple ou prioriza vídeo e consistência de câmera.",
    strengths: ["Vídeos excelentes", "Desempenho forte", "Ecossistema Apple"],
    caution: "tela de 60 Hz e carga mais lenta incomodam; veja o Galaxy S24.",
    href: IPHONE_15_AFFILIATE_URL,
    review: "/review/iphone-15",
    comparison: "/comparativo/iphone-15-vs-galaxy-s24",
  },
];

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
                <Badge variant="cta">Escolha guiada</Badge>
                <Badge variant="soft">Mercado Livre</Badge>
                <Badge variant="soft">Links afiliados validados</Badge>
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
                A oferta certa começa pelo celular certo
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Escolha seu orçamento e o que mais importa. Em poucos segundos, você recebe uma
                indicação direta, vê o principal ponto de atenção e compara antes de consultar o
                preço atual.
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
                  href="#escolha-rapida"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground shadow-soft transition hover:-translate-y-0.5 hover:brightness-105"
                >
                  Encontrar minha oferta
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#ofertas-recomendadas"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
                >
                  Ver todos os modelos
                </a>
              </div>
            </div>

            <aside className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-cta/10 text-cta">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Decisão sem enrolação
                  </p>
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    Do perfil à compra em 3 passos
                  </h2>
                </div>
              </div>

              <ol className="mt-5 grid gap-3">
                {[
                  "Defina quanto pretende gastar",
                  "Escolha sua prioridade de uso",
                  "Confira a indicação e o concorrente",
                ].map((step, index) => (
                  <li key={step} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-cta text-xs font-bold text-cta-foreground">
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>

              <AffiliateRedirectNotice className="mt-5 border-t border-border pt-5" />
            </aside>
          </div>
        </div>
      </section>

      <PhoneDecisionFinder pageType="ofertas" />

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

      <section id="ofertas-recomendadas" className="mx-auto max-w-7xl px-6 pb-14 lg:px-8 md:pb-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cta">
            Compare a seleção completa
          </p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
            Quer ver todas as opções antes de decidir?
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Cada card deixa claro para quem o aparelho faz sentido, quando comparar outro modelo e
            onde aprofundar a análise. O preço e o estoque são confirmados no Mercado Livre.
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
                <div className="absolute inset-x-4 top-4 flex items-start justify-between gap-2">
                  <Badge variant="cta">{offer.badge}</Badge>
                  <Badge variant="soft">{offer.segment}</Badge>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold text-foreground">{offer.name}</h3>
                  <Rating value={offer.rating} />
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {offer.description}
                </p>

                <div className="mt-4 rounded-xl bg-surface p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Melhor para
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">{offer.bestFor}</p>
                </div>

                <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
                  {offer.strengths.map((strength) => (
                    <li key={strength} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-teal" />
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
                  <p className="flex items-start gap-2 text-xs leading-5 text-amber-950">
                    <CircleAlert className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
                    <span>
                      <strong>Vale comparar quando:</strong> {offer.caution}
                    </span>
                  </p>
                </div>

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
                        ctaPlacement: "offer_card",
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
                      onClick={() =>
                        trackOfferResearchClick({
                          productName: offer.name,
                          destination: "review",
                          destinationPath: offer.review,
                        })
                      }
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
                    >
                      Ler review
                    </Link>

                    <Link
                      to={offer.comparison}
                      onClick={() =>
                        trackOfferResearchClick({
                          productName: offer.name,
                          destination: "comparativo",
                          destinationPath: offer.comparison,
                        })
                      }
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

      <MobilePurchaseBar
        options={[
          {
            productName: "Galaxy A55",
            href: GALAXY_A55_AFFILIATE_URL,
            label: "Equilíbrio: A55",
            primary: true,
          },
          {
            productName: "Poco X7 Pro",
            href: POCO_X7_PRO_AFFILIATE_URL,
            label: "Potência: X7 Pro",
          },
        ]}
        pageType="ofertas"
        title="Duas escolhas por perfil"
        eyebrow="Atalhos de compra"
      />
    </main>
  );
}
