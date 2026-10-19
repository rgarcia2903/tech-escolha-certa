import { getSocialImage } from "@/lib/product-media";
import { ProductMedia } from "@/components/site/ProductMedia";
import { ProductPurchaseOptions } from "@/components/site/ProductPurchaseOptions";
import { EditorialSelection } from "@/components/site/EditorialSelection";
import { LegacySelectionNotice } from "@/components/site/LegacySelectionNotice";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BatteryCharging,
  Check,
  CircleDollarSign,
  Cpu,
  ShieldCheck,
  Smartphone,
  X,
} from "lucide-react";

import { AffiliateRedirectNotice } from "@/components/site/AffiliateRedirectNotice";
import { AuthorByline } from "@/components/site/AuthorByline";
import { MobilePurchaseBar } from "@/components/site/MobilePurchaseBar";
import { PurchaseActions } from "@/components/site/PurchaseActions";
import { Badge } from "@/components/site/ui";
import {
  EDGE_60_PRO_AFFILIATE_URL,
  GALAXY_A17_5G_AFFILIATE_URL,
  GALAXY_S25_FE_AFFILIATE_URL,
  MOTO_G86_5G_AFFILIATE_URL,
  POCO_X7_PRO_AFFILIATE_URL,
  REDMI_NOTE_15_5G_AFFILIATE_URL,
} from "@/lib/affiliate-links";
import { trackAffiliateClick } from "@/lib/analytics";

const CANONICAL = "https://techescolhacerta.com.br/melhores-celulares-custo-beneficio";
const PAGE_TITLE = "Celular custo-benefício em 2026: compare por perfil";
const PAGE_DESCRIPTION =
  "Galaxy A17, Redmi Note 15, Moto G86, POCO X7 Pro, Edge 60 Pro ou S25 FE? Veja qual celular vale mais a pena em cada orçamento.";

const phones = [
  {
    position: 1,
    id: "galaxy-a17",
    name: "Galaxy A17 5G",
    productId: "galaxy-a17-5g",
    category: "Perfil para comparar",
    priceRule: "Consultar na loja; preço no orçamento não confirmado",
    verdict:
      "É a compra econômica mais segura para WhatsApp, redes sociais, vídeos e aplicativos bancários. A tela AMOLED e o suporte prolongado pesam mais que a potência bruta.",
    idealFor: "Uso básico, estudos e quem quer gastar o mínimo sem abrir mão do 5G.",
    specs: ["Tela Super AMOLED de 90 Hz", "Bateria de 5.000 mAh", "Câmera principal com OIS"],
    strengths: [
      "Preço agressivo em promoções",
      "Tela acima da média da faixa",
      "Suporte longo da Samsung",
    ],
    cautions: ["4 GB de RAM limitam multitarefa", "Não é indicado para jogos pesados"],
    actionHref: GALAXY_A17_5G_AFFILIATE_URL,
    actionLabel: "Conferir preço do Galaxy A17 5G",
    isAffiliate: true,
    internalPath: "/melhores-celulares-samsung" as const,
    internalLabel: "Ver guia Samsung",
  },
  {
    position: 2,
    id: "redmi-note-15",
    name: "Redmi Note 15 5G",
    productId: "redmi-note-15-5g",
    category: "Perfil para comparar",
    priceRule: "Consultar na loja; preço no orçamento não confirmado",
    verdict:
      "Entrega um conjunto atual de tela, bateria e armazenamento para quem quer mais conforto que um aparelho básico, sem pagar pela potência dos modelos gamer.",
    idealFor: "Redes sociais, vídeos, fotos diurnas, jogos leves e uso diário intenso.",
    specs: ["Tela AMOLED de 120 Hz", "Bateria de 5.520 mAh", "Carregamento de 45 W"],
    strengths: ["Boa autonomia", "Tela fluida", "256 GB é a configuração mais interessante"],
    cautions: ["Não é focado em jogos pesados", "Confirme se o anúncio é da versão 5G"],
    actionHref: REDMI_NOTE_15_5G_AFFILIATE_URL,
    actionLabel: "Conferir preço do Redmi Note 15 5G",
    isAffiliate: true,
    internalPath: "/melhores-celulares-xiaomi" as const,
    internalLabel: "Ver guia Xiaomi",
  },
  {
    position: 3,
    id: "moto-g86",
    name: "Moto G86 5G",
    productId: "moto-g86-5g",
    category: "Perfil para comparar",
    priceRule: "Consultar na loja; preço no orçamento não confirmado",
    verdict:
      "É a escolha equilibrada para quem valoriza tela, câmera, resistência e uso diário. Não lidera em desempenho, mas evita compromissos graves no conjunto.",
    idealFor: "Quem quer um celular completo, resistente e fácil de usar.",
    specs: ["Tela pOLED 1.5K de 120 Hz", "Bateria de 5.200 mAh", "Proteção IP68 e IP69"],
    strengths: ["Bom conjunto geral", "Câmera principal com OIS", "Resistência acima da média"],
    cautions: ["Desempenho abaixo do POCO X7 Pro", "Carregamento de 33 W é apenas mediano"],
    actionHref: MOTO_G86_5G_AFFILIATE_URL,
    actionLabel: "Conferir preço do Moto G86 5G",
    isAffiliate: true,
    internalPath: "/guia/melhores-celulares-para-jogos-ate-2000" as const,
    internalLabel: "Comparar para jogos",
  },
  {
    position: 4,
    id: "poco-x7-pro",
    name: "POCO X7 Pro",
    productId: "poco-x7-pro",
    category: "Perfil para comparar",
    priceRule: "Consultar na loja; preço no orçamento não confirmado",
    verdict:
      "É a escolha mais forte para jogos e desempenho. O preço precisa compensar a garantia e a procedência do anúncio, especialmente em unidades importadas.",
    idealFor: "Jogos pesados, emulação, multitarefa e quem prioriza velocidade.",
    specs: ["Dimensity 8400-Ultra", "Bateria de 6.000 mAh", "Carregamento de 90 W"],
    strengths: ["Maior potência da faixa", "Tela AMOLED 1.5K de 120 Hz", "Bateria grande"],
    cautions: ["Câmeras não são o foco", "Confira garantia, versão global e reputação do vendedor"],
    actionHref: POCO_X7_PRO_AFFILIATE_URL,
    actionLabel: "Conferir preço do POCO X7 Pro",
    isAffiliate: true,
    internalPath: "/review/poco-x7-pro" as const,
    internalLabel: "Ver análise completa",
  },
  {
    position: 5,
    id: "edge-60-pro",
    name: "Motorola Edge 60 Pro",
    productId: "edge-60-pro",
    category: "Perfil para comparar",
    priceRule: "Consultar na loja; preço no orçamento não confirmado",
    verdict:
      "Tem o conjunto mais completo entre desempenho, câmeras, bateria, carregamento e resistência. É mais racional que o POCO quando os dois aparecem pelo mesmo preço e a garantia importa.",
    idealFor:
      "Fotos, uso intenso, acabamento premium e quem pretende ficar mais tempo com o aparelho.",
    specs: ["Dimensity 8350 Extreme", "Bateria de 6.000 mAh", "Carregamento de 90 W"],
    strengths: [
      "Câmeras mais versáteis",
      "IP68, IP69 e resistência militar",
      "12 GB de RAM física",
    ],
    cautions: ["Tela curva exige mais cuidado", "Suporte de software menor que o da Samsung"],
    actionHref: EDGE_60_PRO_AFFILIATE_URL,
    actionLabel: "Conferir preço do Edge 60 Pro",
    isAffiliate: true,
    internalPath: "/melhores-celulares-ate-2500" as const,
    internalLabel: "Ver opções até R$ 2.500",
  },
  {
    position: 6,
    id: "galaxy-s25-fe",
    name: "Galaxy S25 FE",
    productId: "galaxy-s25-fe",
    category: "Perfil para comparar",
    priceRule: "Consultar na loja; preço no orçamento não confirmado",
    verdict:
      "É um candidato para câmeras, acabamento e suporte. Compare com o S26 FE e outras alternativas pela configuração e pelo preço final verificado.",
    idealFor: "Fotos e vídeos, trabalho, longevidade de software e ecossistema Samsung.",
    specs: ["Exynos 2400", "Tela AMOLED de 120 Hz", "Câmera teleobjetiva com zoom óptico"],
    strengths: [
      "Conjunto de câmeras mais completo",
      "Sete anos de suporte",
      "IP68 e carregamento sem fio",
    ],
    cautions: [
      "Bateria menor que a dos rivais",
      "Carregador rápido pode ser vendido separadamente",
    ],
    actionHref: GALAXY_S25_FE_AFFILIATE_URL,
    actionLabel: "Conferir preço do Galaxy S25 FE",
    isAffiliate: true,
    internalPath: "/melhores-celulares-samsung" as const,
    internalLabel: "Ver guia Samsung",
  },
];

const quickPicks = [
  ["Uso básico · preço a conferir", "Galaxy A17 5G"],
  ["Uso cotidiano · preço a conferir", "Redmi Note 15 5G"],
  ["Uso misto · preço a conferir", "Moto G86 5G"],
  ["Desempenho", "POCO X7 Pro"],
  ["Premium equilibrado", "Edge 60 Pro"],
  ["Câmeras e suporte", "Galaxy S25 FE"],
];

const faq = [
  {
    question: "Qual é o melhor celular custo-benefício em 2026?",
    answer:
      "Depende do orçamento. Galaxy A17 5G é a escolha econômica; Redmi Note 15 5G entrega mais tela e bateria; Moto G86 é o mais equilibrado; POCO X7 Pro lidera em desempenho; Edge 60 Pro e Galaxy S25 FE atendem quem busca uma experiência premium.",
  },
  {
    question: "Qual celular custo-benefício comprar até R$ 1.500?",
    answer:
      "O Redmi Note 15 5G é a escolha mais completa se a versão de 8 GB e 256 GB estiver até R$ 1.500. Para uso mais básico e preço próximo de R$ 1.000, o Galaxy A17 5G é mais racional.",
  },
  {
    question: "POCO X7 Pro ou Moto G86: qual vale mais a pena?",
    answer:
      "POCO X7 Pro vale mais para jogos e desempenho. Moto G86 é mais equilibrado para câmera, resistência e uso diário. Compare o preço final, a garantia e a procedência do vendedor.",
  },
  {
    question: "Vale comprar um celular de geração anterior?",
    answer:
      "Sim, quando o desconto é grande e o período de suporte restante ainda atende ao seu uso. Um modelo antigo perto do preço do sucessor deixa de ser custo-benefício.",
  },
];

export const Route = createFileRoute("/melhores-celulares-custo-beneficio")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      {
        name: "keywords",
        content:
          "melhor celular custo-benefício 2026, celular bom e barato, melhor celular até 1000, melhor celular até 1500, melhor celular até 2000, POCO X7 Pro, Moto G86",
      },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: CANONICAL },
      {
        property: "og:image",
        content: getSocialImage(
          "https://techescolhacerta.com.br/images/products/poco-x7-pro-optimized.webp",
        ),
      },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
      {
        name: "twitter:image",
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
          datePublished: "2026-09-25",
          dateModified: "2026-10-16",
          mainEntityOfPage: CANONICAL,
          author: {
            "@type": "Person",
            name: "Ricardo Garcia",
            url: "https://techescolhacerta.com.br/autor/ricardo-garcia",
          },
          publisher: { "@type": "Organization", name: "Tech Escolha Certa" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Melhores celulares custo-benefício em 2026",
          itemListElement: phones.map((phone) => ({
            "@type": "ListItem",
            position: phone.position,
            name: phone.name,
          })),
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
  component: CustoBeneficioPage,
});

function CustoBeneficioPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <div className="absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-cta/10 blur-[120px]" />
        <div className="absolute -bottom-40 -left-32 h-[26rem] w-[26rem] rounded-full bg-teal/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-8 md:py-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="cta">Guia de compra</Badge>
                <Badge variant="soft">Atualizado em 2026</Badge>
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
                Melhor celular custo-benefício em 2026
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                A resposta muda com o orçamento: Galaxy A17 para economizar, Redmi Note 15 e Moto
                G86 para equilíbrio, POCO X7 Pro para desempenho e Edge 60 Pro ou Galaxy S25 FE para
                uma experiência mais completa.
              </p>

              <AuthorByline reviewedAt="16 de outubro de 2026" className="mt-6" />
              <p className="mt-3 text-xs text-muted-foreground">
                Análise documental independente • preços e estoque mudam diariamente
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#selecao-editorial"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-cta px-5 py-3 text-sm font-bold text-cta-foreground shadow-soft transition hover:-translate-y-0.5 hover:brightness-105"
                >
                  Ver celulares e preços
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#tabela"
                  className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-5 py-3 text-sm font-bold text-foreground transition hover:bg-secondary"
                >
                  Comparar rapidamente
                </a>
              </div>
            </div>

            <aside className="hidden rounded-2xl border border-border bg-card p-6 shadow-soft lg:block">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cta">
                Resposta direta
              </p>
              <h2 className="mt-2 text-2xl font-bold text-foreground">
                Não existe um único vencedor
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Custo-benefício é comprar o aparelho certo pelo preço certo. Um celular excelente
                deixa de valer a pena quando custa quase o mesmo que uma opção superior.
              </p>
              <div className="mt-6 space-y-3">
                {quickPicks.slice(0, 4).map(([label, product]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-4 rounded-xl bg-surface px-4 py-3"
                  >
                    <span className="text-sm text-muted-foreground">{label}</span>
                    <strong className="text-right text-sm text-foreground">{product}</strong>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
      <EditorialSelection selection="general" />
      <LegacySelectionNotice />

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <PurchaseActions
            options={[
              {
                productName: "Redmi Note 15 5G",
                href: REDMI_NOTE_15_5G_AFFILIATE_URL,
                label: "Ver Redmi Note 15",
              },
              {
                productName: "Moto G86 5G",
                href: MOTO_G86_5G_AFFILIATE_URL,
                label: "Ver Moto G86",
              },
            ]}
            pageType="guia"
            placement="hero"
            title="Compare Redmi Note 15 e Moto G86"
            description="Compare a mesma configuração e confira preço, versão, garantia, vendedor e frete na loja."
          />
        </div>
      </section>

      <section id="tabela" className="mx-auto max-w-7xl px-6 py-14 lg:px-8 md:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cta">Comparação</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
            Qual celular escolher em cada faixa
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Os valores abaixo são limites editoriais de compra, não preços garantidos. Se o anúncio
            ultrapassar a regra, compare o próximo aparelho da lista.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
          <div
            className="overflow-x-auto"
            role="region"
            aria-label="Tabela comparativa: deslize para ver todas as colunas"
            tabIndex={0}
          >
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-surface text-foreground">
                <tr>
                  <th className="px-5 py-4 font-bold">Perfil</th>
                  <th className="px-5 py-4 font-bold">Escolha</th>
                  <th className="px-5 py-4 font-bold">Regra de preço</th>
                  <th className="px-5 py-4 font-bold">Principal vantagem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {phones.map((phone) => (
                  <tr key={phone.name}>
                    <td className="px-5 py-4 text-muted-foreground">{phone.category}</td>
                    <td className="px-5 py-4 font-bold text-foreground">{phone.name}</td>
                    <td className="px-5 py-4 text-muted-foreground">{phone.priceRule}</td>
                    <td className="px-5 py-4 text-muted-foreground">{phone.specs[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="ranking" className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Ranking</p>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
              Os 6 celulares que mais valem a pena
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              A ordem agrupa perfis de uso; não representa uma classificação por preço atual. Não
              atribuímos notas numéricas porque preço, perfil de uso e garantia mudam a decisão.
            </p>
          </div>

          <div className="mt-10 space-y-7">
            {phones.map((phone) => (
              <article
                id={phone.id}
                key={phone.name}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8"
              >
                <ProductMedia
                  name={phone.name}
                  className="mb-6 aspect-[16/9] w-full rounded-2xl md:aspect-[3/1]"
                />
                <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
                  <div className="max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-cta text-xs font-extrabold text-cta-foreground">
                        {phone.position}
                      </span>
                      <Badge variant={phone.isAffiliate ? "cta" : "soft"}>{phone.category}</Badge>
                    </div>
                    <h3 className="mt-4 text-2xl font-bold text-foreground md:text-3xl">
                      {phone.name}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-cta">
                      Regra de compra: {phone.priceRule}
                    </p>
                    <p className="mt-5 leading-relaxed text-muted-foreground">{phone.verdict}</p>
                    <p className="mt-3 text-sm text-foreground">
                      <strong>Indicado para:</strong> {phone.idealFor}
                    </p>
                  </div>

                  <div className="grid min-w-72 gap-2 sm:grid-cols-3 lg:grid-cols-1">
                    {phone.specs.map((spec) => (
                      <div
                        key={spec}
                        className="rounded-xl bg-surface px-4 py-3 text-sm text-foreground"
                      >
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>

                <details className="mt-6 rounded-2xl border border-slate-200 p-4">
                  <summary className="cursor-pointer text-sm font-bold text-[#0F3F4A]">
                    Vantagens e limitações em detalhe
                  </summary>
                  <div className="mt-7 grid gap-6 border-t border-border pt-6 md:grid-cols-2">
                    <div>
                      <p className="text-sm font-bold text-foreground">Pontos fortes</p>
                      <ul className="mt-3 space-y-2">
                        {phone.strengths.map((item) => (
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
                        {phone.cautions.map((item) => (
                          <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                            <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </details>
                <div className="mt-7 flex flex-wrap gap-3">
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
                              ctaPlacement: "ranking",
                            })
                        : undefined
                    }
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-cta px-5 py-3 text-sm font-bold text-cta-foreground transition hover:-translate-y-0.5 hover:brightness-105"
                  >
                    {phone.actionLabel}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <Link
                    to={phone.internalPath}
                    className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-5 py-3 text-sm font-bold text-foreground transition hover:bg-secondary"
                  >
                    {phone.internalLabel}
                  </Link>
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

          <AffiliateRedirectNotice className="mt-6 rounded-xl border border-border bg-card p-4" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 md:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cta">Como escolher</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
            O que realmente define custo-benefício
          </h2>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <CriteriaCard
            icon={<CircleDollarSign className="h-5 w-5" />}
            title="Preço relativo"
            text="Compare o aparelho com o sucessor e com rivais da mesma memória. Desconto percentual sozinho não prova uma boa compra."
          />
          <CriteriaCard
            icon={<Cpu className="h-5 w-5" />}
            title="Desempenho útil"
            text="O chip precisa atender ao seu uso. Pagar por potência gamer não compensa se sua prioridade é câmera ou autonomia."
          />
          <CriteriaCard
            icon={<BatteryCharging className="h-5 w-5" />}
            title="Bateria e carga"
            text="Capacidade, eficiência e velocidade de carga importam. Confirme também se o carregador acompanha o produto."
          />
          <CriteriaCard
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Garantia e suporte"
            text="Procedência, garantia nacional e anos de atualização podem valer mais que uma pequena diferença de preço."
          />
        </div>

        <div className="mt-10 rounded-2xl border border-amber-300/60 bg-amber-50 p-6 text-amber-950">
          <h3 className="font-heading text-xl font-bold">Evite estas três armadilhas</h3>
          <ul className="mt-4 grid gap-3 text-sm leading-6 md:grid-cols-3">
            <li>Não conte RAM virtual como memória RAM física.</li>
            <li>Não compare 128 GB com 256 GB como se fossem a mesma oferta.</li>
            <li>Não compre importado sem verificar garantia, versão e reputação do vendedor.</li>
          </ul>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 md:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
              Transparência
            </p>
            <h2 className="mt-3 text-3xl font-bold text-foreground">Como montamos esta lista</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Esta é uma análise documental, não um teste próprio de laboratório. Comparamos
              especificações oficiais, orçamento de referência, sem preço atual confirmado, suporte,
              garantia, geração do produto e avaliações publicadas por veículos especializados. Os
              limites de compra são referências editoriais e devem ser confirmados no dia.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <h3 className="font-heading text-lg font-bold text-foreground">Fontes oficiais</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                [
                  "Samsung Brasil — Galaxy A17 5G",
                  "https://www.samsung.com/br/smartphones/galaxy-a/galaxy-a17-5g-gray-128gb-sm-a176bzaozto/",
                ],
                [
                  "Xiaomi Brasil — Redmi Note 15 5G",
                  "https://www.mi.com/br/product/redmi-note-15-5g/",
                ],
                [
                  "Motorola Brasil — Moto G86 5G",
                  "https://www.motorola.com.br/smartphone-moto-g86-5g-256gb/p",
                ],
                ["Xiaomi Brasil — POCO X7 Pro", "https://www.mi.com/br/product/poco-x7-pro/specs/"],
                [
                  "Motorola Brasil — Edge 60 Pro",
                  "https://www.motorola.com.br/smartphone-motorola-edge-60-pro-5g-256gb/p",
                ],
                [
                  "Samsung Brasil — Galaxy S25 FE",
                  "https://www.samsung.com/br/smartphones/galaxy-s/galaxy-s25-fe-navy-256gb-sm-s731bdbkzto/",
                ],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-cta hover:underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-border pt-4 text-xs leading-5 text-muted-foreground">
              Todos os botões de preço desta página são afiliados e podem gerar comissão sem custo
              adicional. Os links para fichas oficiais servem como fontes e não geram comissão.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cta">
              Perguntas frequentes
            </p>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
              Respostas antes da compra
            </h2>
            <p className="mt-4 text-muted-foreground">
              As dúvidas que mais alteram a decisão entre economizar e pagar por um aparelho mais
              completo.
            </p>
          </div>
          <div className="space-y-3">
            {faq.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-border bg-card p-5 shadow-soft"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading font-bold text-foreground">
                  {item.question}
                  <Smartphone className="h-5 w-5 shrink-0 text-cta transition group-open:rotate-6" />
                </summary>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-cta/30 bg-card p-6 shadow-soft ring-1 ring-cta/10 md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Conclusão: qual comprar?</h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
                Sem preços conferidos, compare Galaxy A17 e Redmi Note 15 5G para uso cotidiano.
                Para equilíbrio, Moto G86. Para jogos, POCO X7 Pro. Acima disso, Edge 60 Pro entrega
                o pacote mais completo e Galaxy S25 FE vence em câmeras e suporte prolongado.
              </p>
            </div>
            <a
              href={POCO_X7_PRO_AFFILIATE_URL}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              onClick={() =>
                trackAffiliateClick({
                  productName: "POCO X7 Pro",
                  pageType: "guia",
                  ctaPlacement: "conclusion",
                })
              }
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-cta px-5 py-3 text-sm font-bold text-cta-foreground transition hover:-translate-y-0.5 hover:brightness-105"
            >
              Conferir POCO X7 Pro
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <AffiliateRedirectNotice className="mt-5 border-t border-border pt-5" />
        </div>
      </section>

      <MobilePurchaseBar
        options={[
          {
            productName: "Redmi Note 15 5G",
            href: REDMI_NOTE_15_5G_AFFILIATE_URL,
            label: "Uso cotidiano",
          },
          {
            productName: "POCO X7 Pro",
            href: POCO_X7_PRO_AFFILIATE_URL,
            label: "Desempenho",
          },
        ]}
        pageType="guia"
        title="Redmi Note 15 5G e POCO X7 Pro"
        eyebrow="Opções por perfil · preço a conferir"
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
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
    </article>
  );
}
