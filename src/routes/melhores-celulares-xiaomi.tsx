import { getSocialImage } from "@/lib/product-media";
import { ProductMedia } from "@/components/site/ProductMedia";
import { ProductPurchaseOptions } from "@/components/site/ProductPurchaseOptions";
import { EditorialSelection } from "@/components/site/EditorialSelection";
import { LegacySelectionNotice } from "@/components/site/LegacySelectionNotice";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  BatteryCharging,
  Camera,
  Check,
  ExternalLink,
  Gamepad2,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import { AffiliateRedirectNotice } from "@/components/site/AffiliateRedirectNotice";
import { AuthorByline } from "@/components/site/AuthorByline";
import { CategoryHero } from "@/components/site/CategoryHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import {
  POCO_X6_PRO_AFFILIATE_URL,
  POCO_X7_PRO_AFFILIATE_URL,
  REDMI_NOTE_13_PRO_AFFILIATE_URL,
  REDMI_NOTE_14_PRO_PLUS_AFFILIATE_URL,
  REDMI_NOTE_15_5G_AFFILIATE_URL,
} from "@/lib/affiliate-links";
import { trackAffiliateClick } from "@/lib/analytics";

const CANONICAL = "https://techescolhacerta.com.br/melhores-celulares-xiaomi";
const HERO_IMAGE = "https://techescolhacerta.com.br/images/products/phones-hero-optimized.webp";
const PAGE_TITLE = "Celular Xiaomi em 2026: modelos e versões para comparar";
const PAGE_DESCRIPTION =
  "Compare Redmi Note 15 5G, Redmi Note 15 Pro 5G, POCO X8 Pro e Xiaomi 15T. Veja qual Xiaomi faz sentido para uso geral, jogos e câmera.";

const CURRENT_PICKS = [
  {
    category: "Perfil para comparar",
    product: "Redmi Note 15 5G",
    productId: "redmi-note-15-5g",
    icon: Smartphone,
    verdict:
      "É o ponto de partida mais equilibrado para quem quer um Xiaomi atual sem subir para as linhas premium.",
    strengths: [
      "Tela AMOLED de 120 Hz",
      "Câmera de 108 MP com OIS",
      "Bateria de 5.520 mAh",
      "Proteção IP65",
    ],
    caution:
      "O Snapdragon 6 Gen 3 atende bem ao uso diário, mas o POCO X8 Pro é a escolha mais adequada para jogos pesados.",
    specsHref: "https://www.mi.com/br/product/redmi-note-15-5g/",
    storeHref: REDMI_NOTE_15_5G_AFFILIATE_URL,
    storeIsAffiliate: true,
  },
  {
    category: "Perfil para comparar",
    product: "Redmi Note 15 Pro 5G",
    productId: "redmi-note-15-pro-5g",
    icon: ShieldCheck,
    verdict:
      "Faz mais sentido para quem prioriza câmera principal, bateria grande e proteção contra água e quedas.",
    strengths: [
      "Câmera de 200 MP com OIS",
      "Bateria de 6.580 mAh",
      "Tela AMOLED 1.5K",
      "Proteção IP68",
    ],
    caution:
      "Confirme estoque e diferença de preço. Se estiver muito acima do Note 15 5G, o ganho pode não justificar a compra.",
    specsHref: "https://www.mi.com/br/product/redmi-note-15-pro-5g/",
    storeHref:
      "https://www.mibrasil.com.br/smartphone-redmi-note15pro-5g-nfc-br-8-8gb-ram-virtual-512gb-prin-p54611",
    storeIsAffiliate: false,
  },
  {
    category: "Perfil para comparar",
    product: "POCO X8 Pro",
    productId: "poco-x8-pro",
    icon: Gamepad2,
    verdict:
      "É a escolha da lista para quem coloca desempenho, armazenamento rápido, refrigeração e bateria acima da câmera.",
    strengths: [
      "Dimensity 8500-Ultra",
      "LPDDR5X e UFS 4.1",
      "Bateria de 6.500 mAh",
      "Carga de até 100 W",
    ],
    caution:
      "A câmera não é o foco principal. Compare também garantia, origem do aparelho e carregador incluído no anúncio.",
    specsHref: "https://www.mi.com/br/product/poco-x8-pro/",
    storeHref:
      "https://www.mibrasil.com.br/smartphone-poco-x8-pro-5g-nfc-br-12-12gb-ram-virtual-512gb-prin-p137149",
    storeIsAffiliate: false,
  },
  {
    category: "Perfil para comparar",
    product: "Xiaomi 15T",
    productId: "xiaomi-15t",
    icon: Camera,
    verdict:
      "É o modelo para quem quer câmeras mais versáteis, acabamento superior e desempenho forte sem escolher um POCO.",
    strengths: [
      "Câmera tripla Leica",
      "Dimensity 8400-Ultra",
      "Tela AMOLED de 120 Hz",
      "Bateria de 5.500 mAh",
    ],
    caution:
      "O preço oficial é alto. Compare com celulares premium Samsung e Apple antes de decidir.",
    specsHref: "https://www.mi.com/br/product/xiaomi-15t/",
    storeHref: "https://www.mibrasil.com.br/smartphone-xiaomi-15t-5g-prin-p13612",
    storeIsAffiliate: false,
  },
] as const;

const OLDER_DEALS = [
  {
    product: "POCO X7 Pro",
    productId: "poco-x7-pro",
    rule: "Compare o preço final e a configuração com o POCO X8 Pro antes de escolher.",
    reason: "Ainda entrega desempenho forte, mas deixou de ser a geração atual.",
    reviewHref: "/review/poco-x7-pro",
    affiliateHref: POCO_X7_PRO_AFFILIATE_URL,
  },
  {
    product: "Redmi Note 14 Pro+ 5G",
    rule: "Considere se custar claramente menos que o Redmi Note 15 Pro 5G.",
    reason: "Continua completo, mas perde sentido quando o sucessor fica próximo de preço.",
    reviewHref: "/review/redmi-note-14-pro-plus",
    affiliateHref: REDMI_NOTE_14_PRO_PLUS_AFFILIATE_URL,
  },
  {
    product: "POCO X6 Pro",
    productId: "poco-x6-pro",
    rule: "Só vale com desconto forte diante do POCO X7 Pro e do POCO X8 Pro.",
    reason: "O desempenho ainda é bom, mas a idade reduz o tempo de suporte restante.",
    reviewHref: "/review/poco-x6-pro",
    affiliateHref: POCO_X6_PRO_AFFILIATE_URL,
  },
  {
    product: "Redmi Note 13 Pro 5G",
    rule: "Só considere se a economia for grande diante do Redmi Note 15 5G.",
    reason: "É uma alternativa de promoção, não o melhor Xiaomi atual para a maioria.",
    reviewHref: "/review/redmi-note-13-pro",
    affiliateHref: REDMI_NOTE_13_PRO_AFFILIATE_URL,
  },
] as const;

const FAQS = [
  {
    question: "Qual é o melhor celular Xiaomi em 2026?",
    answer:
      "Para a maioria das pessoas, o Redmi Note 15 5G é o ponto de partida mais equilibrado. O POCO X8 Pro é melhor para jogos, o Redmi Note 15 Pro 5G prioriza câmera e resistência, e o Xiaomi 15T oferece uma experiência mais premium.",
  },
  {
    question: "Qual Xiaomi tem o melhor custo-benefício?",
    answer:
      "O custo-benefício depende do preço encontrado. Entre os modelos atuais, compare primeiro o Redmi Note 15 5G. Um aparelho antigo só entra na recomendação quando o desconto compensa a geração anterior e o menor tempo de suporte restante.",
  },
  {
    question: "Qual é o melhor Xiaomi para jogos?",
    answer:
      "O POCO X8 Pro é a escolha mais direta desta lista para jogos por reunir Dimensity 8500-Ultra, memória LPDDR5X, armazenamento UFS 4.1, bateria de 6.500 mAh e sistema de refrigeração dedicado.",
  },
  {
    question: "Vale comprar Xiaomi importado?",
    answer:
      "Pode valer pelo preço, mas é necessário conferir versão global, homologação, nota fiscal, garantia, reputação do vendedor, carregador e bandas de rede. A oferta nacional costuma custar mais, porém reduz parte desses riscos.",
  },
  {
    question: "POCO X7 Pro e POCO X6 Pro ainda valem a pena?",
    answer:
      "Podem valer em promoção. O POCO X7 Pro precisa custar sensivelmente menos que o X8 Pro, e o X6 Pro exige um desconto ainda maior. Com preços próximos, escolha a geração mais nova.",
  },
] as const;

export const Route = createFileRoute("/melhores-celulares-xiaomi")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      {
        name: "keywords",
        content:
          "melhor celular Xiaomi 2026, melhores celulares Xiaomi, Redmi Note 15 5G, POCO X8 Pro, Xiaomi 15T",
      },
      { property: "og:type", content: "article" },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:url", content: CANONICAL },
      { property: "og:image", content: getSocialImage(HERO_IMAGE) },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
      { name: "twitter:image", content: getSocialImage(HERO_IMAGE) },
    ],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
          url: CANONICAL,
          inLanguage: "pt-BR",
          datePublished: "2026-06-11",
          dateModified: "2026-10-16",
          image: getSocialImage(HERO_IMAGE),
          author: {
            "@type": "Person",
            name: "Ricardo Garcia",
            url: "https://techescolhacerta.com.br/autor/ricardo-garcia",
          },
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: CURRENT_PICKS.length,
            itemListElement: CURRENT_PICKS.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.product,
              url: item.specsHref,
            })),
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map(({ question, answer }) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: { "@type": "Answer", text: answer },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://techescolhacerta.com.br/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Guias de compra",
              item: "https://techescolhacerta.com.br/guias-de-compra",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Melhores celulares Xiaomi",
              item: CANONICAL,
            },
          ],
        }),
      },
    ],
  }),
  component: MelhoresCelularesXiaomi,
});

function MelhoresCelularesXiaomi() {
  return (
    <main className="min-h-screen bg-[#F7F2EB] text-slate-900">
      <CategoryHero
        eyebrow="Guia Xiaomi atualizado"
        title="Melhor celular Xiaomi em 2026: qual comprar agora?"
        description="Redmi Note 15 5G para a maioria, POCO X8 Pro para jogos, Note 15 Pro 5G para câmera e resistência, ou Xiaomi 15T para uma experiência premium."
        image="/images/products/phones-hero-optimized.webp"
        aside={
          <>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D8B08A]">
              Resposta direta
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">Redmi Note 15 5G</h2>
            <p className="mt-4 text-sm leading-6 text-slate-200">
              É um candidato para uso cotidiano, com preço e variante a conferir. Se desempenho em
              jogos for prioridade, vá de POCO X8 Pro. Para câmera e acabamento, compare com Note 15
              Pro 5G e Xiaomi 15T.
            </p>
            <a
              href={REDMI_NOTE_15_5G_AFFILIATE_URL}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              onClick={() =>
                trackAffiliateClick({
                  productName: "Redmi Note 15 5G",
                  pageType: "guia",
                  ctaPlacement: "hero",
                })
              }
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#8B5A2B] px-5 py-3 text-sm font-bold text-white transition hover:brightness-105"
            >
              Conferir preço atual <ExternalLink className="h-4 w-4" />
            </a>
            <AffiliateRedirectNotice tone="dark" className="mt-3" />
          </>
        }
      >
        <a
          href="#comparacao"
          className="rounded-full bg-[#8B5A2B] px-6 py-3 text-sm font-bold text-white transition hover:brightness-95"
        >
          Comparar os 4 modelos
        </a>
        <a
          href="#modelos-antigos"
          className="rounded-full bg-white/10 px-6 py-3 text-sm font-bold text-white ring-1 ring-white/20 transition hover:bg-white/15"
        >
          Comparar modelos anteriores
        </a>
      </CategoryHero>
      <EditorialSelection selection="xiaomi" />
      <LegacySelectionNotice />

      <div className="mx-auto max-w-7xl px-6 pt-8 lg:px-8">
        <AuthorByline reviewedAt="16 de outubro de 2026" />

        <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
            <p>
              <strong>Análise documental:</strong> esta seleção foi produzida com fichas oficiais e
              disponibilidade consultada no Brasil. O Tech Escolha Certa ainda não realizou testes
              próprios nesses quatro aparelhos. Preços, estoque e itens da embalagem devem ser
              confirmados no anúncio antes da compra.
            </p>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 md:p-9">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
            Escolha em 30 segundos
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[#0F3F4A]">Qual Xiaomi comprar em 2026?</h2>

          <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <QuickDecision
              title="Uso geral"
              product="Redmi Note 15 5G"
              text="O conjunto mais equilibrado para redes sociais, vídeos, câmera e rotina."
            />
            <QuickDecision
              title="Jogos"
              product="POCO X8 Pro"
              text="Prioriza chip, memória rápida, refrigeração e bateria."
            />
            <QuickDecision
              title="Câmera e resistência"
              product="Redmi Note 15 Pro 5G"
              text="Câmera principal mais ambiciosa, IP68 e bateria maior."
            />
            <QuickDecision
              title="Premium"
              product="Xiaomi 15T"
              text="Câmeras Leica, construção superior e desempenho forte."
            />
          </div>
        </div>
      </section>

      <section id="comparacao" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-8 lg:px-8">
        <SectionTitle
          eyebrow="Ranking atual"
          title="Os Xiaomi que fazem sentido hoje"
          description="A ordem considera perfil de uso e disponibilidade no Brasil, não uma nota genérica. Consulte a ficha oficial e compare preço, garantia e armazenamento antes de comprar."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {CURRENT_PICKS.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.product}
                className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <ProductMedia
                  name={item.product}
                  className="mb-5 aspect-[4/3] w-full rounded-2xl"
                />
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#0F3F4A] text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#8B5A2B]">
                      {item.category}
                    </span>
                    <h3 className="mt-1 text-2xl font-extrabold text-[#0F3F4A]">{item.product}</h3>
                  </div>
                </div>

                <p className="mt-5 text-base leading-7 text-slate-700">{item.verdict}</p>

                <ul className="mt-5 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                  {item.strengths.map((strength) => (
                    <li key={strength} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                      {strength}
                    </li>
                  ))}
                </ul>

                <p className="mt-5 rounded-2xl bg-[#F7F2EB] p-4 text-sm leading-6 text-slate-700">
                  <strong className="text-[#0F3F4A]">Atenção:</strong> {item.caution}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={item.specsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#0F3F4A] px-5 py-2.5 text-sm font-bold text-white"
                  >
                    Ficha oficial <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={item.storeHref}
                    target="_blank"
                    rel={
                      item.storeIsAffiliate
                        ? "nofollow sponsored noopener noreferrer"
                        : "noopener noreferrer"
                    }
                    onClick={
                      item.storeIsAffiliate
                        ? () =>
                            trackAffiliateClick({
                              productName: item.product,
                              pageType: "guia",
                              ctaPlacement: "ranking_atual",
                            })
                        : undefined
                    }
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-[#0F3F4A]"
                  >
                    {item.storeIsAffiliate ? "Conferir preço" : "Ver disponibilidade"}
                  </a>
                </div>
                <ProductPurchaseOptions
                  productId={item.productId}
                  pageType="guia"
                  placement="ranking_stores"
                  className="mt-5"
                />
              </article>
            );
          })}
        </div>

        <AffiliateRedirectNotice className="mt-5" />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 p-7 md:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
              Comparação rápida
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[#0F3F4A]">
              Diferenças que mudam a compra
            </h2>
          </div>

          <div
            className="overflow-x-auto"
            role="region"
            aria-label="Tabela comparativa: deslize para ver todas as colunas"
            tabIndex={0}
          >
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-[#0F3F4A] text-white">
                <tr>
                  <th className="px-6 py-4">Modelo</th>
                  <th className="px-6 py-4">Melhor para</th>
                  <th className="px-6 py-4">Principal vantagem</th>
                  <th className="px-6 py-4">Principal limite</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <ComparisonRow
                  model="Redmi Note 15 5G"
                  profile="Maioria das pessoas"
                  strength="Equilíbrio entre tela, câmera, bateria e preço"
                  limit="Não é o mais forte para jogos pesados"
                />
                <ComparisonRow
                  model="Redmi Note 15 Pro 5G"
                  profile="Câmera e durabilidade"
                  strength="200 MP com OIS, IP68 e bateria de 6.580 mAh"
                  limit="Pode perder custo-benefício se o preço subir demais"
                />
                <ComparisonRow
                  model="POCO X8 Pro"
                  profile="Jogos e desempenho"
                  strength="Chip forte, memória rápida, refrigeração e carga de 100 W"
                  limit="Câmeras são secundárias na proposta"
                />
                <ComparisonRow
                  model="Xiaomi 15T"
                  profile="Câmeras e uso premium"
                  strength="Conjunto Leica e desempenho de categoria superior"
                  limit="Preço exige comparação com outras marcas premium"
                />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl bg-[#0F3F4A] p-8 text-white shadow-sm">
            <BatteryCharging className="h-8 w-8 text-[#D8B08A]" />
            <h2 className="mt-4 text-3xl font-bold text-white">
              Não compare apenas o nome do aparelho
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-200">
              A mesma linha pode ter versões 4G e 5G, capacidades diferentes e anúncios importados.
              Confira o nome completo, memória, armazenamento, NFC, homologação, garantia e
              carregador antes de fechar a compra.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <ShieldCheck className="h-8 w-8 text-[#8B5A2B]" />
            <h2 className="mt-4 text-3xl font-bold text-[#0F3F4A]">Preço nacional ou importado?</h2>
            <p className="mt-4 text-base leading-7 text-slate-700">
              O importado pode ser mais barato, mas exige conferência extra de versão, nota fiscal,
              garantia e reputação do vendedor. A oferta nacional tende a reduzir esses riscos. A
              comparação só é justa quando armazenamento e condições de pós-venda são equivalentes.
            </p>
          </article>
        </div>
      </section>

      <section id="modelos-antigos" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-12 lg:px-8">
        <SectionTitle
          eyebrow="Gerações anteriores"
          title="Quando um Xiaomi antigo ainda vale a pena"
          description="Os aparelhos abaixo deixaram de liderar o ranking. Eles continuam como alternativas de promoção, desde que a economia seja proporcional à idade e ao suporte restante."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {OLDER_DEALS.map((item) => (
            <article
              key={item.product}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-extrabold text-[#0F3F4A]">{item.product}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">{item.reason}</p>
              <p className="mt-4 rounded-2xl bg-[#F7F2EB] p-4 text-sm font-semibold leading-6 text-[#0F3F4A]">
                Regra de compra: {item.rule}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  to={item.reviewHref}
                  className="inline-flex items-center gap-2 rounded-full bg-[#0F3F4A] px-4 py-2.5 text-sm font-bold text-white"
                >
                  Ler análise <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={item.affiliateHref}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  onClick={() =>
                    trackAffiliateClick({
                      productName: item.product,
                      pageType: "guia",
                      ctaPlacement: "modelos_antigos",
                    })
                  }
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm font-bold text-[#0F3F4A]"
                >
                  Conferir preço
                </a>
              </div>
            </article>
          ))}
        </div>

        <AffiliateRedirectNotice className="mt-5" />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
            Fontes e atualização
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[#0F3F4A]">Como esta lista foi construída</h2>
          <div className="mt-5 max-w-4xl space-y-4 text-base leading-7 text-slate-700">
            <p>
              Conferimos especificações nas páginas oficiais da Xiaomi Brasil e verificamos a
              presença dos modelos na loja oficial brasileira em 13 de outubro de 2026. A seleção
              considera proposta, geração, disponibilidade, diferenças técnicas e risco de pagar
              preço de aparelho atual em uma geração antiga.
            </p>
            <p>
              Não publicamos preço fixo nesta página porque estoque, vendedor e origem mudam com
              frequência. Uma recomendação pode mudar se o preço relativo entre os modelos mudar.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-sm font-bold">
            {CURRENT_PICKS.map((item) => (
              <a
                key={item.product}
                href={item.specsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-[#0F3F4A] hover:border-[#8B5A2B]"
              >
                Fonte: {item.product} <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>

          <p className="mt-6 text-sm leading-6 text-slate-600">
            Consulte também nossa{" "}
            <Link to="/como-avaliamos" className="font-bold text-[#8B5A2B] hover:underline">
              metodologia editorial
            </Link>{" "}
            e a página do{" "}
            <Link to="/autor/ricardo-garcia" className="font-bold text-[#8B5A2B] hover:underline">
              autor responsável
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
          <SectionTitle
            eyebrow="Dúvidas comuns"
            title="Perguntas sobre celulares Xiaomi"
            description="Respostas diretas para evitar escolher apenas pela ficha técnica ou pelo desconto exibido no anúncio."
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {FAQS.map((item) => (
              <article key={item.question} className="rounded-2xl bg-[#F7F2EB] p-6">
                <h3 className="text-lg font-bold text-[#0F3F4A]">{item.question}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-3xl bg-[#0F3F4A] p-8 text-white shadow-sm md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D8B08A]">
            Conclusão
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">
            Escolha pelo perfil e pelo preço real
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-7 text-slate-200">
            Comece pelo Redmi Note 15 5G. Troque pelo POCO X8 Pro se jogos forem prioridade, pelo
            Redmi Note 15 Pro 5G se câmera e resistência forem mais importantes, ou pelo Xiaomi 15T
            se você procura uma experiência premium. Gerações antigas só entram quando o desconto é
            grande e a garantia está clara.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/comparativos"
              className="inline-flex items-center gap-2 rounded-full bg-[#8B5A2B] px-5 py-3 text-sm font-bold text-white"
            >
              Ver comparativos <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/melhores-celulares-custo-beneficio"
              className="inline-flex items-center rounded-full bg-white/10 px-5 py-3 text-sm font-bold text-white ring-1 ring-white/20"
            >
              Ver celulares custo-benefício
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function QuickDecision({ title, product, text }: { title: string; product: string; text: string }) {
  return (
    <article className="rounded-2xl bg-[#F7F2EB] p-5 ring-1 ring-slate-200">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8B5A2B]">{title}</p>
      <h3 className="mt-2 text-lg font-extrabold text-[#0F3F4A]">{product}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-700">{text}</p>
    </article>
  );
}

function ComparisonRow({
  model,
  profile,
  strength,
  limit,
}: {
  model: string;
  profile: string;
  strength: string;
  limit: string;
}) {
  return (
    <tr className="align-top">
      <th className="px-6 py-5 font-bold text-[#0F3F4A]">{model}</th>
      <td className="px-6 py-5">{profile}</td>
      <td className="px-6 py-5">{strength}</td>
      <td className="px-6 py-5">{limit}</td>
    </tr>
  );
}
