import { getSocialImage } from "@/lib/product-media";
import { ProductMedia } from "@/components/site/ProductMedia";
import { EditorialSelection } from "@/components/site/EditorialSelection";
import { LegacyBudget1500References } from "@/components/site/LegacyBudget1500References";
import { ProductPurchaseOptions } from "@/components/site/ProductPurchaseOptions";
import { getProductByName } from "@/lib/product-catalog";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BatteryCharging,
  Check,
  CircleDollarSign,
  Cpu,
  ShieldCheck,
  Smartphone,
  Trophy,
  X,
} from "lucide-react";

import { AffiliateRedirectNotice } from "@/components/site/AffiliateRedirectNotice";
import { AuthorByline } from "@/components/site/AuthorByline";
import { MobilePurchaseBar } from "@/components/site/MobilePurchaseBar";
import { PurchaseActions } from "@/components/site/PurchaseActions";
import { Badge } from "@/components/site/ui";
import {
  GALAXY_A17_5G_AFFILIATE_URL,
  GALAXY_A36_5G_AFFILIATE_URL,
  MOTO_G56_5G_AFFILIATE_URL,
  MOTO_G86_5G_AFFILIATE_URL,
  REDMI_NOTE_15_5G_AFFILIATE_URL,
} from "@/lib/affiliate-links";
import { trackAffiliateClick } from "@/lib/analytics";

const CANONICAL = "https://techescolhacerta.com.br/guia/melhores-celulares-ate-1500-reais";
const PAGE_TITLE = "Celulares até R$ 1.500 em 2026: candidatos e critérios";
const PAGE_DESCRIPTION =
  "Compare Moto G86, Galaxy A36, Redmi Note 15, Moto G56 e Galaxy A17. Compare recursos e confira se o preço final cabe no orçamento.";

const phones = [
  {
    position: 1,
    id: "moto-g86",
    name: "Moto G86 5G",
    category: "Tela, câmera e resistência",
    priceRule: "Preço no orçamento não confirmado; consulte o total na loja",
    verdict:
      "É o conjunto mais completo da lista quando entra no orçamento. A tela pOLED de alta definição, a câmera com estabilização e a resistência reforçada entregam uma experiência acima da média da faixa.",
    idealFor: "Quem quer tela, câmera, resistência e desempenho equilibrados no mesmo aparelho.",
    specs: ["Tela pOLED 1.5K de 120 Hz", "Bateria de 5.200 mAh", "Proteção IP68 e IP69"],
    strengths: [
      "Câmera principal de 50 MP com OIS",
      "8 GB de RAM física e 256 GB",
      "Construção mais resistente que a média",
    ],
    cautions: [
      "Confirme se o preço final, com frete, cabe no orçamento",
      "Carregamento de 33 W é apenas mediano",
    ],
    actionHref: MOTO_G86_5G_AFFILIATE_URL,
    actionLabel: "Conferir preço do Moto G86 5G",
  },
  {
    position: 2,
    id: "galaxy-a36",
    name: "Galaxy A36 5G",
    category: "Em avaliação editorial",
    priceRule: "Preço no orçamento não confirmado; consulte o total na loja",
    verdict:
      "É a escolha mais segura para quem prioriza tela AMOLED, atualizações e experiência Samsung. O suporte prolongado aumenta a vida útil e ajuda a compensar um desempenho que não é voltado a jogos pesados.",
    idealFor: "Uso diário, fotos, vídeos e quem pretende ficar vários anos com o aparelho.",
    specs: ["Tela Super AMOLED de 120 Hz", "Bateria de 5.000 mAh", "Proteção IP67"],
    strengths: [
      "Seis gerações de Android e seis anos de segurança",
      "Câmera principal com OIS",
      "Carregamento de até 45 W",
    ],
    cautions: [
      "Confirme se a oferta é de 128 GB ou 256 GB",
      "Não é a melhor opção para jogos pesados",
    ],
    actionHref: GALAXY_A36_5G_AFFILIATE_URL,
    actionLabel: "Conferir preço do Galaxy A36 5G",
  },
  {
    position: 3,
    id: "redmi-note-15",
    name: "Redmi Note 15 5G",
    category: "Tela e bateria",
    priceRule: "Preço no orçamento não confirmado; consulte o total na loja",
    verdict:
      "É a opção mais fácil de recomendar para vídeos, redes sociais e autonomia. A combinação de tela AMOLED, bateria grande e bastante armazenamento é forte, desde que o anúncio seja realmente da versão 5G.",
    idealFor: "Consumo de conteúdo, rotina intensa, fotos diurnas e jogos leves.",
    specs: ["Tela AMOLED de 120 Hz", "Bateria de 5.520 mAh", "8 GB de RAM e 256 GB"],
    strengths: [
      "Boa autonomia e carregamento de 45 W",
      "Câmera principal de 108 MP",
      "Proteção IP65",
    ],
    cautions: ["Não confunda com o Redmi Note 15 4G", "O foco é equilíbrio, não desempenho gamer"],
    actionHref: REDMI_NOTE_15_5G_AFFILIATE_URL,
    actionLabel: "Conferir preço do Redmi Note 15 5G",
  },
  {
    position: 4,
    id: "moto-g56",
    name: "Moto G56 5G",
    category: "Em avaliação editorial",
    priceRule: "Preço no orçamento não confirmado; consulte o total na loja",
    verdict:
      "Faz sentido para quem quer 256 GB, resistência e câmera competente gastando menos. Ele perde em qualidade de tela para os modelos OLED, por isso o desconto precisa ser real.",
    idealFor: "Trabalho externo, estudo, aplicativos do dia a dia e quem busca resistência.",
    specs: ["Tela Full HD+ de 120 Hz", "Bateria de 5.200 mAh", "Proteção IP68 e IP69"],
    strengths: [
      "8 GB de RAM física e 256 GB",
      "Câmera Sony de 50 MP",
      "Boa resistência para a faixa de preço",
    ],
    cautions: [
      "A tela LCD tem contraste inferior ao AMOLED",
      "Perde valor se o Moto G86 estiver próximo de preço",
    ],
    actionHref: MOTO_G56_5G_AFFILIATE_URL,
    actionLabel: "Conferir preço do Moto G56 5G",
  },
  {
    position: 5,
    id: "galaxy-a17",
    name: "Galaxy A17 5G",
    category: "Uso básico",
    priceRule: "Preço no orçamento não confirmado; consulte o total na loja",
    verdict:
      "É a compra básica da lista. A tela AMOLED, a câmera com estabilização e o suporte longo são diferenciais, mas a configuração de memória precisa ser conferida com cuidado.",
    idealFor: "WhatsApp, bancos, redes sociais, vídeos e uso básico com 5G.",
    specs: ["Tela Super AMOLED de 90 Hz", "Bateria de 5.000 mAh", "Câmera principal com OIS"],
    strengths: [
      "Tela acima da média dos aparelhos de entrada",
      "Suporte prolongado da Samsung",
      "Compare o custo final e o suporte restante",
    ],
    cautions: [
      "Evite pagar caro em versões com pouca RAM",
      "Não é indicado para jogos pesados ou multitarefa intensa",
    ],
    actionHref: GALAXY_A17_5G_AFFILIATE_URL,
    actionLabel: "Conferir preço do Galaxy A17 5G",
  },
];

const quickPicks = [
  ["Tela, câmera e resistência", "Moto G86 5G"],
  ["Em avaliação editorial", "Galaxy A36 5G"],
  ["Tela e bateria", "Redmi Note 15 5G"],
  ["Em avaliação editorial", "Moto G56 5G"],
  ["Uso básico", "Galaxy A17 5G"],
];

const faq = [
  {
    question: "Qual é o melhor celular até R$ 1.500 em 2026?",
    answer:
      "O Moto G86 5G é o melhor conjunto se o preço final ficar em até R$ 1.500. Se ele ultrapassar o teto, Galaxy A36 5G e Redmi Note 15 5G são escolhas mais racionais, conforme suporte ou bateria sejam a prioridade.",
  },
  {
    question: "Galaxy A36 ou Moto G86: qual comprar?",
    answer:
      "Escolha o Galaxy A36 para suporte de software mais longo e ecossistema Samsung. Escolha o Moto G86 para uma combinação mais forte de tela, resistência e câmera. O preço final deve desempatar.",
  },
  {
    question: "Redmi Note 15 5G vale a pena até R$ 1.500?",
    answer:
      "Sim, principalmente na versão de 8 GB e 256 GB. Ele oferece boa tela e autonomia, mas confira se o anúncio é realmente da versão 5G e se o vendedor tem boa reputação.",
  },
  {
    question: "Celular até R$ 1.500 roda jogos pesados?",
    answer:
      "Roda com ajustes, mas esta faixa não entrega a mesma estabilidade de um modelo gamer. Moto G86 é o mais capaz deste ranking; para prioridade total em jogos, compare o guia específico de celulares para jogos até R$ 2.000.",
  },
  {
    question: "O que conferir no anúncio antes de comprar?",
    answer:
      "Confirme modelo exato, 5G ou 4G, RAM física, armazenamento, garantia, reputação do vendedor, frete, parcelamento e preço final. Não trate RAM virtual como memória física.",
  },
];

export const Route = createFileRoute("/guia/melhores-celulares-ate-1500-reais")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      {
        name: "keywords",
        content:
          "melhor celular até 1500 reais 2026, melhores celulares até 1500, celular custo-benefício, Moto G86, Galaxy A36, Redmi Note 15 5G",
      },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: CANONICAL },
      {
        property: "og:image",
        content: getSocialImage(
          "https://techescolhacerta.com.br/images/products/moto-g86-optimized.webp",
        ),
      },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
      {
        name: "twitter:image",
        content: getSocialImage(
          "https://techescolhacerta.com.br/images/products/moto-g86-optimized.webp",
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
          datePublished: "2026-06-01",
          dateModified: "2026-10-16",
          mainEntityOfPage: CANONICAL,
          author: {
            "@type": "Person",
            name: "Ricardo Garcia",
            url: "https://techescolhacerta.com.br/autor/ricardo-garcia",
          },
          publisher: { "@type": "Organization", name: "Tech Escolha Certa" },
          image: getSocialImage(
            "https://techescolhacerta.com.br/images/products/moto-g86-optimized.webp",
          ),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Melhores celulares até R$ 1.500 em 2026",
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
  component: GuidePage,
});

function GuidePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <div className="absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-cta/10 blur-[120px]" />
        <div className="absolute -bottom-40 -left-32 h-[26rem] w-[26rem] rounded-full bg-teal/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="cta">Guia de compra</Badge>
                <Badge variant="soft">Atualizado em outubro de 2026</Badge>
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
                Melhor celular até R$ 1.500 em 2026
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Compare Moto G86, Redmi Note 15 e Galaxy A17 conforme seu perfil e confira o preço
                final antes de escolher. Galaxy A36 e Moto G56 permanecem visíveis para avaliação
                editorial; nenhum modelo tem preço confirmado no teto de R$ 1.500.
              </p>

              <AuthorByline reviewedAt="16 de outubro de 2026" className="mt-6" />
              <p className="mt-3 text-xs text-muted-foreground">
                Análise documental independente • preços e estoque mudam diariamente
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#ranking"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-cta px-5 py-3 text-sm font-bold text-cta-foreground shadow-soft transition hover:-translate-y-0.5 hover:brightness-105"
                >
                  Ver o ranking
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#tabela"
                  className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-5 py-3 text-sm font-bold text-foreground transition hover:bg-secondary"
                >
                  Comparar os cinco
                </a>
              </div>
            </div>

            <aside className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-cta/10 text-cta">
                  <Trophy className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Resposta rápida
                  </p>
                  <h2 className="text-2xl font-bold text-foreground">Melhor por perfil</h2>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {quickPicks.map(([label, product]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-4 rounded-xl bg-surface px-4 py-3"
                  >
                    <span className="text-sm text-muted-foreground">{label}</span>
                    <strong className="text-right text-sm text-foreground">{product}</strong>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-xs leading-5 text-muted-foreground">
                A regra é simples: se o preço final passar de R$ 1.500, não compre por este guia.
                Compare as opções da faixa seguinte.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <EditorialSelection selection="ate-1500" />
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <ProductPurchaseOptions
            productId="moto-g86-5g"
            pageType="guia"
            placement="budget_1500_hero"
          />
          <a href="#galaxy-a36" className="mt-4 inline-block font-semibold underline">
            Comparar os recursos do Galaxy A36 · em avaliação
          </a>
        </div>
      </section>

      <section id="tabela" className="mx-auto max-w-7xl px-6 py-14 lg:px-8 md:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cta">Comparação</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
            Qual celular comprar até R$ 1.500
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Os valores são limites editoriais, não preços garantidos. Eles impedem que uma oferta
            aparentemente boa coloque um aparelho inferior perto demais de um modelo melhor.
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
                  <th className="px-5 py-4 font-bold">Posição</th>
                  <th className="px-5 py-4 font-bold">Modelo</th>
                  <th className="px-5 py-4 font-bold">Melhor para</th>
                  <th className="px-5 py-4 font-bold">Regra de compra</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {phones.map((phone) => (
                  <tr key={phone.name}>
                    <td className="px-5 py-4 font-bold text-cta">{phone.position}º</td>
                    <td className="px-5 py-4 font-bold text-foreground">{phone.name}</td>
                    <td className="px-5 py-4 text-muted-foreground">{phone.category}</td>
                    <td className="px-5 py-4 text-muted-foreground">{phone.priceRule}</td>
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
              Os 5 melhores celulares até R$ 1.500
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              A ordem considera o conjunto e também o preço máximo aceitável. Não usamos notas
              inventadas: cada recomendação tem condição de compra, vantagem e perda explícitas.
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
                      <Badge variant="cta">{phone.category}</Badge>
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

                {getProductByName(phone.name)!.editorialStatus !== "evaluate" ? (
                  <ProductPurchaseOptions
                    productId={getProductByName(phone.name)!.id}
                    pageType="guia"
                    placement="budget_1500_ranking"
                    className="mt-7"
                  />
                ) : (
                  <div className="mt-7 rounded-xl border border-border p-4 text-sm">
                    <p>
                      Modelo preservado do PR #43, em avaliação editorial. Os links permanecem
                      cadastrados; a aprovação comercial ainda está pendente.
                    </p>
                    <a
                      href={getProductByName(phone.name)!.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block underline"
                    >
                      Consultar fonte oficial de {phone.name}
                    </a>
                  </div>
                )}
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
            O que conferir antes de pagar
          </h2>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <CriteriaCard
            icon={<CircleDollarSign className="h-5 w-5" />}
            title="Preço final"
            text="Some frete e juros. Se passar de R$ 1.500, compare o guia da faixa seguinte em vez de forçar a compra."
          />
          <CriteriaCard
            icon={<Cpu className="h-5 w-5" />}
            title="RAM física"
            text="Prefira 8 GB quando possível. RAM Boost ou RAM virtual não substitui memória física e não deve decidir a compra."
          />
          <CriteriaCard
            icon={<BatteryCharging className="h-5 w-5" />}
            title="Bateria e carga"
            text="Compare capacidade, carregamento e se o carregador acompanha o produto. Número maior isolado não conta toda a história."
          />
          <CriteriaCard
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Vendedor e garantia"
            text="Confirme reputação, nota fiscal, versão brasileira ou global, prazo de entrega e cobertura de garantia."
          />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Link
            to="/melhores-celulares-custo-beneficio"
            className="rounded-2xl border border-border bg-card p-5 font-bold text-foreground shadow-soft transition hover:-translate-y-0.5 hover:border-cta/40"
          >
            Ver custo-benefício por faixa
          </Link>
          <Link
            to="/guia/melhores-celulares-para-jogos-ate-2000"
            className="rounded-2xl border border-border bg-card p-5 font-bold text-foreground shadow-soft transition hover:-translate-y-0.5 hover:border-cta/40"
          >
            Comparar celulares para jogos
          </Link>
          <Link
            to="/melhores-celulares-ate-2000"
            className="rounded-2xl border border-border bg-card p-5 font-bold text-foreground shadow-soft transition hover:-translate-y-0.5 hover:border-cta/40"
          >
            Subir o orçamento para R$ 2.000
          </Link>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 md:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
              Transparência
            </p>
            <h2 className="mt-3 text-3xl font-bold text-foreground">Como montamos a lista</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Esta é uma análise documental, não um teste próprio de laboratório. Comparamos
              especificações oficiais, configuração de memória, suporte, garantia, geração e faixa
              de preço. Os limites são referências editoriais e precisam ser confirmados no dia.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <h3 className="text-lg font-bold text-foreground">Fontes oficiais</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                [
                  "Motorola Brasil — Moto G86 5G",
                  "https://www.motorola.com.br/smartphone-moto-g86-5g-256gb/p",
                ],
                [
                  "Samsung Brasil — Galaxy A36 5G",
                  "https://www.samsung.com/br/smartphones/galaxy-a/galaxy-a36-5g-awesome-black-128gb-sm-a366ezkbzto/",
                ],
                [
                  "Xiaomi Brasil — Redmi Note 15 5G",
                  "https://www.mi.com/br/product/redmi-note-15-5g/specs/",
                ],
                [
                  "Motorola Brasil — Moto G56 5G",
                  "https://www.motorola.com.br/smartphone-moto-g56-5g-256gb/p",
                ],
                [
                  "Samsung Brasil — Galaxy A17 5G",
                  "https://www.samsung.com/br/smartphones/galaxy-a/galaxy-a17-5g-gray-128gb-sm-a176bzaozto/",
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
              Os botões de compra da Amazon e do Mercado Livre são afiliados e podem gerar comissão
              sem custo adicional. As fichas oficiais acima são apenas fontes; não confirmam
              anúncios.
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
          </div>
          <div className="space-y-3">
            {faq.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-border bg-card p-5 shadow-soft"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-foreground">
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
                Comece pelo Moto G86 e confirme se ele cabe no teto. Se não couber, escolha Galaxy
                A36 para suporte, Redmi Note 15 para tela e bateria, Moto G56 para economizar ou
                Galaxy A17 para uso básico. A36 e G56 dependem de avaliação editorial antes da
                ativação comercial.
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
                  ctaPlacement: "conclusion",
                })
              }
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-cta px-5 py-3 text-sm font-bold text-cta-foreground transition hover:-translate-y-0.5 hover:brightness-105"
            >
              Conferir Moto G86
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <AffiliateRedirectNotice className="mt-5 border-t border-border pt-5" />
        </div>
      </section>

      <section className="container-tec py-10">
        <details className="rounded-2xl border border-border bg-card p-5">
          <summary className="cursor-pointer text-xl font-bold">
            Referências anteriores preservadas: A25, Note 13 4G, M35, POCO M6 Pro e Moto G84
          </summary>
          <p className="mt-3 text-sm text-muted-foreground">
            Conteúdo histórico para comparação, sem preço ou estoque atual verificado. A seleção
            atual e os critérios compartilhados estão acima.
          </p>
          <LegacyBudget1500References />
        </details>
      </section>
      <MobilePurchaseBar
        options={[{ productName: "Moto G86 5G", href: MOTO_G86_5G_AFFILIATE_URL }]}
        pageType="guia"
        title="Moto G86 5G · conferir versão"
        eyebrow="Consultar preço na loja"
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
