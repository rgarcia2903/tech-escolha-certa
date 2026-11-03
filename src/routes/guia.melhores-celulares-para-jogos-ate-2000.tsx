import { getSocialImage } from "@/lib/product-media";
import { ProductMedia } from "@/components/site/ProductMedia";
import { ProductPurchaseOptions } from "@/components/site/ProductPurchaseOptions";
import { EditorialSelection } from "@/components/site/EditorialSelection";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AffiliateRedirectNotice } from "@/components/site/AffiliateRedirectNotice";
import { AuthorByline } from "@/components/site/AuthorByline";
import { MobilePurchaseBar } from "@/components/site/MobilePurchaseBar";
import { PurchaseActions } from "@/components/site/PurchaseActions";
import {
  GALAXY_A36_5G_AFFILIATE_URL,
  MOTO_G86_5G_AFFILIATE_URL,
  POCO_X7_PRO_AFFILIATE_URL,
  REDMI_NOTE_15_5G_AFFILIATE_URL,
} from "@/lib/affiliate-links";
import { trackAffiliateClick } from "@/lib/analytics";
import {
  ArrowUpRight,
  Battery,
  Check,
  Cpu,
  Gamepad2,
  ShieldCheck,
  Smartphone,
  Trophy,
  X,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/site/ui";

const CANONICAL = "https://techescolhacerta.com.br/guia/melhores-celulares-para-jogos-ate-2000";

const PAGE_TITLE = "Melhor celular para jogos até R$ 2.000 em 2026: top 3 e qual comprar";
const PAGE_DESCRIPTION =
  "Moto G86, Redmi Note 15 5G ou Galaxy A36? Ranking de 2026 por desempenho em jogos, tela e bateria, com até quanto pagar e quando vale esticar para o Poco X7 Pro.";

export const Route = createFileRoute("/guia/melhores-celulares-para-jogos-ate-2000")({
  head: () => ({
    meta: [
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
      {
        title: PAGE_TITLE,
      },
      {
        name: "description",
        content: PAGE_DESCRIPTION,
      },
      {
        name: "keywords",
        content:
          "melhor celular para jogos até 2000, celular gamer até 2000, melhor celular para Free Fire, melhor celular para COD Mobile, celular para Genshin Impact barato, Moto G86, Redmi Note 15 5G, Galaxy A36, POCO X7 Pro",
      },
      {
        property: "og:title",
        content: PAGE_TITLE,
      },
      {
        property: "og:description",
        content: PAGE_DESCRIPTION,
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: CANONICAL },
      {
        property: "og:image",
        content: getSocialImage(
          "https://techescolhacerta.com.br/images/products/poco-x7-pro-optimized.webp",
        ),
      },
      {
        property: "twitter:image",
        content: getSocialImage(
          "https://techescolhacerta.com.br/images/products/poco-x7-pro-optimized.webp",
        ),
      },
    ],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
          author: {
            "@type": "Person",
            name: "Ricardo Garcia",
            url: "https://techescolhacerta.com.br/autor/ricardo-garcia",
          },
          publisher: {
            "@type": "Organization",
            name: "Tech Escolha Certa",
          },
          datePublished: "2026-06-02",
          dateModified: "2026-10-16",
          mainEntityOfPage: CANONICAL,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Celulares para jogos até R$ 2.000 em 2026",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Moto G86 5G" },
            { "@type": "ListItem", position: 2, name: "Redmi Note 15 5G" },
            { "@type": "ListItem", position: 3, name: "Galaxy A36 5G" },
            { "@type": "ListItem", position: 4, name: "POCO X7 Pro" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }),
      },
    ],
  }),
  component: GamingPhonesGuide,
});

const phones = [
  {
    rank: "1º",
    name: "Moto G86 5G",
    productId: "moto-g86-5g",
    badge: "Perfil para comparar",
    price: "Consultar na loja; preço no orçamento não confirmado",
    image: "/images/products/moto-g86-optimized.webp",
    summary:
      "O mais completo para jogar dentro de R$ 2.000: Dimensity 7300, 8 GB de RAM e tela pOLED 1.5K de 120 Hz. Roda bem os jogos populares; nos pesados, pede gráficos médios. Compre até R$ 1.900.",
    bestFor: "Free Fire, COD Mobile, PUBG, jogos populares e uso misto no dia a dia.",
    pros: [
      "Tela pOLED 1.5K de 120 Hz",
      "Bateria de 5.200 mAh",
      "Proteção IP68 e IP69",
      "8 GB de RAM física e boa experiência geral",
    ],
    cons: [
      "Dimensity 7300 fica abaixo dos POCO, que custam mais de R$ 2.000",
      "Não é indicado para gráficos máximos em jogos pesados",
      "Carregamento de 33 W é apenas mediano",
    ],
    actionHref: MOTO_G86_5G_AFFILIATE_URL,
    actionLabel: "Conferir preço do Moto G86",
    isAffiliate: true,
    secondaryPath: "/review/moto-g86-5g",
    secondaryLabel: "Ver análise",
  },
  {
    rank: "2º",
    name: "Redmi Note 15 5G",
    productId: "redmi-note-15-5g",
    badge: "Perfil para comparar",
    price: "Consultar na loja; preço no orçamento não confirmado",
    image: "/images/products/redmi-note-15-5g-optimized.webp",
    summary:
      "É uma escolha atual para jogos leves e intermediários. O Snapdragon 6 Gen 3 não concorre com os chips dos POCO, mas a bateria de 5.520 mAh, a tela AMOLED e o carregamento de 45 W formam um pacote coerente.",
    bestFor: "Free Fire, Roblox, jogos competitivos leves, vídeos e uso diário.",
    pros: [
      "Modelo lançado em 2026",
      "Tela AMOLED de 120 Hz",
      "Bateria de 5.520 mAh",
      "Carregamento de 45 W e proteção IP65",
    ],
    cons: [
      "Snapdragon 6 Gen 3 não é um chip gamer de alto desempenho",
      "Exige reduzir gráficos em títulos pesados",
      "Não substitui um POCO para foco total em jogos pesados",
    ],
    actionHref: REDMI_NOTE_15_5G_AFFILIATE_URL,
    actionLabel: "Conferir preço do Redmi Note 15 5G",
    isAffiliate: true,
    secondaryPath: "/review/redmi-note-15-5g",
    secondaryLabel: "Ver análise",
  },
  {
    rank: "3º",
    name: "Galaxy A36 5G",
    productId: "galaxy-a36-5g",
    badge: "Perfil para comparar",
    price: "Consultar na loja; preço no orçamento não confirmado",
    image: "/images/products/licensed/galaxy-a36-5g.webp",
    summary:
      "O mais barato desta lista e o que recebe atualizações por mais tempo (até 2031). O Snapdragon 6 Gen 3 roda Free Fire, Roblox e COD Mobile; nos jogos pesados, pede gráficos baixos. Compre até R$ 1.350.",
    bestFor: "Quem joga jogos populares e quer um celular que dure muitos anos, gastando menos.",
    pros: [
      "Tela AMOLED de 120 Hz",
      "Atualizações até 2031",
      "Proteção IP67",
      "Recarga de 45 W",
    ],
    cons: [
      "6 GB de RAM na versão de entrada",
      "Não é indicado para gráficos altos em jogos pesados",
      "Carregador vendido separadamente",
    ],
    actionHref: GALAXY_A36_5G_AFFILIATE_URL,
    actionLabel: "Conferir preço do Galaxy A36",
    isAffiliate: true,
    secondaryPath: "/review/galaxy-a36-5g",
    secondaryLabel: "Ver análise",
  },
  {
    rank: "4º",
    name: "POCO X7 Pro",
    productId: "poco-x7-pro",
    badge: "Se puder esticar",
    price: "Consultar na loja; preço no orçamento não confirmado",
    image: "/images/products/poco-x7-pro-optimized.webp",
    summary:
      "Hoje ele custa mais de R$ 2.000, mas é o salto de desempenho para quem joga títulos pesados, como Genshin. Vale esticar até uns R$ 2.250. Se for gastar perto de R$ 2.500, prefira o Poco X8 Pro.",
    bestFor: "Jogos pesados, emulação, multitarefa e quem quer mais folga de desempenho.",
    pros: [
      "Dimensity 8400-Ultra é o chip mais forte da lista",
      "Tela AMOLED 1.5K de 120 Hz",
      "Bateria de 6.000 mAh",
      "Carregamento rápido de 90 W",
    ],
    cons: [
      "Frequentemente custa mais de R$ 2.000",
      "Câmeras não são o principal motivo da compra",
      "HyperOS pode exigir ajustes iniciais",
    ],
    actionHref: POCO_X7_PRO_AFFILIATE_URL,
    actionLabel: "Conferir preço do POCO X7 Pro",
    isAffiliate: true,
    secondaryPath: "/review/poco-x7-pro",
    secondaryLabel: "Ver análise",
  },
];

const quickRanking = [
  ["Melhor até R$ 2.000", "Moto G86 5G"],
  ["Mais bateria", "Redmi Note 15 5G"],
  ["Mais barato e duradouro", "Galaxy A36 5G"],
  ["Se puder esticar", "POCO X7 Pro"],
];

const faq = [
  {
    question: "Qual é o melhor celular para jogos até R$ 2.000 em 2026?",
    answer:
      "O Moto G86 5G: Dimensity 7300, 8 GB de RAM e tela de 120 Hz, até R$ 1.900. Os POCO X7 Pro e X8 Pro são mais fortes, mas hoje custam acima de R$ 2.000.",
  },
  {
    question: "Celular até R$ 2.000 roda Genshin Impact?",
    answer:
      "Abre, mas com gráficos baixos ou médios. Para jogar Genshin com folga, o mínimo que recomendamos é o POCO X7 Pro, que passa de R$ 2.000. Veja o guia de jogos pesados.",
  },
  {
    question: "Ainda vale comprar o POCO X6 Pro?",
    answer:
      "Só até R$ 2.100. Hoje ele costuma aparecer acima disso, e o POCO X7 Pro, mais novo, custa pouco mais.",
  },
  {
    question: "O que olhar antes de comprar um celular para jogos?",
    answer:
      "Priorize processador, RAM física, armazenamento, tela de 120 Hz, bateria, carregamento e controle de aquecimento. Não trate RAM virtual como se fosse memória física e confirme o preço final com frete e juros.",
  },
];

function GamingPhonesGuide() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <div className="absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-cta/10 blur-[120px]" />
        <div className="absolute -bottom-40 -left-32 h-[26rem] w-[26rem] rounded-full bg-teal/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="cta">Guia de compra</Badge>
                <Badge variant="soft">Celulares para jogos</Badge>
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
                Melhor celular para jogos até R$ 2.000 em 2026
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Dentro de R$ 2.000, o Moto G86 5G é o mais completo para jogar. O Redmi Note 15 5G
                tem mais bateria e o Galaxy A36 custa menos. Para jogos pesados, vale esticar até o
                POCO X7 Pro.
              </p>

              <AuthorByline reviewedAt="16 de outubro de 2026" className="mt-6" />
              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                <span>Leitura • 9 min</span>
                <span>Análise documental independente</span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#ranking"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground shadow-soft transition hover:-translate-y-0.5 hover:brightness-105"
                >
                  Ver ranking
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#como-escolher"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-soft transition hover:bg-secondary"
                >
                  Como escolher
                </a>
              </div>
            </div>

            <aside className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-cta/10 text-cta">
                  <Trophy className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Resumo rápido
                  </p>
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    Melhor por perfil
                  </h2>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {quickRanking.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-4 rounded-xl bg-surface px-4 py-3"
                  >
                    <span className="text-sm text-muted-foreground">{label}</span>
                    <strong className="text-right text-sm text-foreground">{value}</strong>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                Preços mudam muito. Antes de comprar, confirme se o modelo está realmente abaixo de
                R$ 2.000 e se a versão tem memória suficiente.
              </p>
            </aside>
          </div>
        </div>
      </section>
      <EditorialSelection selection="games" />

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <PurchaseActions
            options={[
              {
                productName: "Moto G86 5G",
                href: MOTO_G86_5G_AFFILIATE_URL,
                label: "Ver preço do Moto G86",
              },
              {
                productName: "Redmi Note 15 5G",
                href: REDMI_NOTE_15_5G_AFFILIATE_URL,
                label: "Ver preço do Redmi Note 15 5G",
              },
            ]}
            pageType="guia"
            placement="hero"
            title="Comece pelas duas melhores escolhas até R$ 2.000"
            description="Compare versões equivalentes, frete e preço final. Moto G86 até R$ 1.900; Redmi Note 15 5G até R$ 1.800."
          />
        </div>
      </section>

      <section id="ranking" className="mx-auto max-w-7xl px-6 py-14 lg:px-8 md:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cta">Ranking</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
            Top celulares para jogos até R$ 2.000
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            A ordem considera processador, memória física, armazenamento, tela, bateria,
            carregamento e preço. Não atribuímos notas de FPS: o desempenho depende do jogo, dos
            ajustes, da temperatura e da versão do sistema.
          </p>
        </div>

        <div className="mt-10 space-y-10">
          {phones.map((phone) => (
            <article
              key={phone.name}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
            >
              <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[280px] bg-surface">
                  <ProductMedia
                    src={phone.image}
                    alt={phone.name}
                    loading="lazy"
                    className="h-full w-full object-contain bg-surface p-4"
                  />
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-background px-3 py-1 text-xs font-bold text-foreground shadow-soft">
                      {phone.rank}
                    </span>
                    <Badge variant="cta">{phone.badge}</Badge>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-foreground md:text-3xl">{phone.name}</h3>
                  <p className="mt-1 text-sm font-medium text-cta">Regra de preço: {phone.price}</p>

                  <p className="mt-5 leading-relaxed text-muted-foreground">{phone.summary}</p>

                  <div className="mt-5 rounded-xl border border-border bg-surface p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Melhor para
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">{phone.bestFor}</p>
                  </div>

                  <div className="mt-6 grid gap-5 md:grid-cols-2">
                    <div>
                      <p className="text-sm font-bold text-foreground">Pontos fortes</p>
                      <ul className="mt-3 space-y-2">
                        {phone.pros.map((item) => (
                          <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-sm font-bold text-foreground">Pontos de atenção</p>
                      <ul className="mt-3 space-y-2">
                        {phone.cons.map((item) => (
                          <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                            <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={phone.actionHref}
                      target="_blank"
                      rel={
                        phone.isAffiliate
                          ? "nofollow sponsored noopener noreferrer"
                          : "noopener noreferrer"
                      }
                      onClick={
                        phone.isAffiliate
                          ? () =>
                              trackAffiliateClick({
                                productName: phone.name,
                                pageType: "guia",
                                ctaPlacement: "gaming_ranking",
                              })
                          : undefined
                      }
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground shadow-soft transition hover:-translate-y-0.5 hover:brightness-105"
                    >
                      {phone.actionLabel}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <Link
                      to={phone.secondaryPath}
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
                    >
                      {phone.secondaryLabel}
                    </Link>
                  </div>
                </div>
              </div>

              <ProductPurchaseOptions
                productId={phone.productId}
                pageType="guia"
                placement="ranking_stores"
                className="mt-5"
              />
            </article>
          ))}
        </div>

        <AffiliateRedirectNotice className="mt-6 rounded-xl border border-border bg-surface p-4" />
      </section>

      <section id="como-escolher" className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Critérios</p>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
              Como escolher um celular para jogos até R$ 2.000
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Para jogar bem, não escolha apenas pela câmera ou pela quantidade de megapixels. O que
              mais pesa é processador, tela, bateria, carregamento e controle de aquecimento.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <CriteriaCard
              icon={<Cpu className="h-5 w-5" />}
              title="Processador"
              text="É o item mais importante. Compare o chip e o desempenho no jogo desejado; temperatura e ajustes também afetam a estabilidade."
            />
            <CriteriaCard
              icon={<Smartphone className="h-5 w-5" />}
              title="Tela"
              text="Uma tela de 120 Hz permite maior fluidez, mas não garante 120 FPS: o jogo e o aparelho precisam suportar essa taxa."
            />
            <CriteriaCard
              icon={<Battery className="h-5 w-5" />}
              title="Bateria"
              text="Procure pelo menos 5.000 mAh para jogar sem depender tanto da tomada."
            />
            <CriteriaCard
              icon={<Zap className="h-5 w-5" />}
              title="Carregamento"
              text="Carga rápida ajuda muito para quem joga bastante e precisa recuperar bateria rápido."
            />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
                Transparência
              </p>
              <h2 className="mt-3 text-3xl font-bold text-foreground">
                Como chegamos a este ranking
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Esta é uma análise documental, não um teste próprio de laboratório. Comparamos
                especificações oficiais, geração do processador, memória, tela, bateria,
                carregamento, resistência e resultados publicados por fontes especializadas. Preços
                e estoque precisam ser confirmados no dia.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="font-heading text-lg font-bold text-foreground">
                Fontes técnicas consultadas
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>
                  <a
                    href="https://www.mi.com/br/product/poco-x7-pro/specs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-cta hover:underline"
                  >
                    Xiaomi Brasil — especificações do POCO X7 Pro
                  </a>
                </li>
                <li>
                  <a
                    href="https://motorolanews.com/br/novo-moto-g86-chega-ao-mercado-como-o-smartphone-intermediario-com-as-melhores-experiencias-premium/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-cta hover:underline"
                  >
                    Motorola Brasil — ficha e lançamento do Moto G86
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.mi.com/br/product/redmi-note-15-5g/specs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-cta hover:underline"
                  >
                    Xiaomi Brasil — especificações do Redmi Note 15 5G
                  </a>
                </li>
              </ul>
              <p className="mt-5 border-t border-border pt-4 text-xs leading-5 text-muted-foreground">
                Imagens de divulgação dos fabricantes. Todos os botões de preço do ranking são
                afiliados; os links de ficha oficial não geram comissão.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cta">
              Perguntas frequentes
            </p>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
              Dúvidas antes de comprar
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Respostas rápidas para escolher um celular gamer barato sem cair em propaganda
              exagerada.
            </p>
          </div>

          <div className="space-y-3">
            {faq.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-border bg-card p-5 shadow-soft"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-semibold text-foreground">
                  {item.question}
                  <Gamepad2 className="h-5 w-5 shrink-0 text-cta transition group-open:rotate-12" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14 lg:px-8 md:pb-20">
        <div className="rounded-2xl border border-cta/30 bg-card p-6 shadow-soft ring-1 ring-cta/10 md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-teal" />
                <h2 className="text-2xl font-bold text-foreground">Conclusão: qual comprar?</h2>
              </div>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Até R$ 2.000, compre o Moto G86 5G. O Redmi Note 15 5G é a escolha para quem quer
                mais bateria, e o Galaxy A36 para quem quer gastar menos e ficar muitos anos com o
                celular. Se você joga títulos pesados, estique até o POCO X7 Pro.
              </p>
            </div>

            <a
              href={MOTO_G86_5G_AFFILIATE_URL}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              onClick={() =>
                trackAffiliateClick({
                  productName: "Moto G86 5G",
                  pageType: "guia",
                  ctaPlacement: "gaming_conclusion",
                })
              }
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground shadow-soft transition hover:-translate-y-0.5 hover:brightness-105"
            >
              Conferir preço do Moto G86
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <AffiliateRedirectNotice className="mt-5 border-t border-border pt-5" />
        </div>
      </section>

      <MobilePurchaseBar
        options={[
          {
            productName: "Moto G86 5G",
            href: MOTO_G86_5G_AFFILIATE_URL,
            label: "Ver preço",
          },
        ]}
        pageType="guia"
        title="Moto G86 5G"
        eyebrow="Melhor para jogos até R$ 2.000"
      />
    </main>
  );
}

function CriteriaCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-2xl border border-border bg-card p-6 shadow-soft">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-cta/10 text-cta">{icon}</div>
      <h3 className="mt-5 text-xl font-bold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </article>
  );
}
