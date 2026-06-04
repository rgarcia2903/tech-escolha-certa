import { createFileRoute, Link } from "@tanstack/react-router";
import { AffiliateCTA } from "@/components/site/AffiliateCTA";
import { CategoryHero } from "@/components/site/CategoryHero";
import { ReviewCard } from "@/components/site/ReviewCard";
import { SectionTitle } from "@/components/site/SectionTitle";
import { TopPickCard } from "@/components/site/TopPickCard";

export const Route = createFileRoute("/melhores-celulares-samsung")({
  head: () => ({
    meta: [
      {
        title:
          "Melhores celulares Samsung em 2026: guia completo para escolher o ideal",
      },
      {
        name: "description",
        content:
          "Veja os melhores celulares Samsung para comprar em 2026. Galaxy S24, Galaxy A55, Galaxy A35 e outros modelos analisados com foco em custo-benefício, bateria, câmera, desempenho e atualizações.",
      },
      {
        name: "keywords",
        content:
          "melhores celulares Samsung 2026, melhor Samsung custo-benefício, Galaxy A55, Galaxy A35, Galaxy S24, celular Samsung bom e barato",
      },
      {
        property: "og:title",
        content: "Melhores celulares Samsung em 2026",
      },
      {
        property: "og:description",
        content:
          "Guia completo para escolher o melhor celular Samsung: premium, intermediário, custo-benefício e melhor opção para a maioria das pessoas.",
      },
      {
        property: "og:type",
        content: "article",
      },
      {
        property: "og:url",
        content: "https://techescolhacerta.com.br/melhores-celulares-samsung",
      },
      {
        property: "og:image",
        content: "https://techescolhacerta.com.br/images/products/phones-hero-optimized.webp",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://techescolhacerta.com.br/melhores-celulares-samsung",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Melhores celulares Samsung em 2026",
          description:
            "Guia editorial dos melhores celulares Samsung para comprar em 2026.",
          author: {
            "@type": "Organization",
            name: "Tech Escolha Certa",
          },
          publisher: {
            "@type": "Organization",
            name: "Tech Escolha Certa",
          },
          datePublished: "2026-06-02",
          dateModified: "2026-06-02",
          mainEntityOfPage:
            "https://techescolhacerta.com.br/melhores-celulares-samsung",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Qual é o melhor celular Samsung em 2026?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Para a maioria das pessoas, o Galaxy A55 5G é o melhor celular Samsung em 2026 por equilibrar tela, bateria, construção, câmeras, desempenho e suporte de atualizações.",
              },
            },
            {
              "@type": "Question",
              name: "Qual Samsung tem melhor custo-benefício?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "O Galaxy A35 5G costuma ser uma das melhores opções custo-benefício da Samsung, principalmente quando aparece em promoção abaixo dos modelos intermediários premium.",
              },
            },
            {
              "@type": "Question",
              name: "Vale a pena comprar Samsung em vez de Xiaomi?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Vale para quem prioriza software mais estável, atualizações mais previsíveis, assistência, resistência e experiência mais segura no longo prazo. Xiaomi e Poco podem entregar mais ficha técnica pelo preço.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: MelhoresCelularesSamsung,
});

const ranking = [
  {
    category: "Melhor Samsung geral",
    product: "Galaxy A55 5G",
    description:
      "O Samsung mais equilibrado para a maioria das pessoas: boa tela, boa bateria, construção premium, IP67 e experiência confiável.",
  },
  {
    category: "Melhor Samsung premium",
    product: "Galaxy S24",
    description:
      "Top de linha compacto com excelente câmera, desempenho premium, recursos de IA e vários anos de atualização.",
  },
  {
    category: "Melhor Samsung custo-benefício",
    product: "Galaxy A35 5G",
    description:
      "Ótima escolha para quem quer economizar sem abrir mão da experiência Samsung, tela AMOLED, 5G e IP67.",
  },
];

const samsungProfiles = [
  {
    title: "Compre o Galaxy A55 se você quer equilíbrio",
    text:
      "É a melhor escolha para quem quer um celular completo, bonito, resistente e confiável para vários anos. Ele não é o mais barato nem o mais potente, mas entrega o conjunto mais seguro.",
  },
  {
    title: "Compre o Galaxy S24 se você quer experiência premium",
    text:
      "É indicado para quem quer câmera superior, desempenho topo de linha, tela excelente, recursos de IA e acabamento premium em um aparelho compacto.",
  },
  {
    title: "Compre o Galaxy A35 se você quer economizar",
    text:
      "É a opção mais racional para quem quer Samsung com boa tela, 5G, IP67 e uso diário fluido sem pagar o preço do A55.",
  },
];

const comparisonRows = [
  ["Melhor geral", "Galaxy A55 5G"],
  ["Melhor premium", "Galaxy S24"],
  ["Melhor custo-benefício", "Galaxy A35 5G"],
  ["Melhor para fotos", "Galaxy S24"],
  ["Melhor para a maioria", "Galaxy A55 5G"],
  ["Mais barato recomendado", "Galaxy A35 5G"],
];

function MelhoresCelularesSamsung() {
  return (
    <main className="min-h-screen bg-[#F7F2EB] text-slate-900">
      <CategoryHero
        eyebrow="Especial Samsung"
        title="Os melhores celulares Samsung para comprar em 2026"
        description="Selecionamos os modelos Samsung que mais valem a pena atualmente considerando experiência real, câmeras, bateria, desempenho, suporte, atualizações e custo-benefício."
        image="/images/products/phones-hero-optimized.webp"
        aside={
          <>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
              Melhor Samsung geral
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
              Galaxy A55 5G
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-200">
              Um dos celulares mais equilibrados da Samsung para quem quer
              ótima tela, boa bateria, construção premium, IP67 e longa vida útil.
            </p>

            <Link
              to="/review/galaxy-a55"
              className="mt-6 block rounded-full bg-[#8B5A2B] px-5 py-3 text-center text-sm font-bold text-white transition hover:brightness-95"
            >
              Ler review completo
            </Link>
          </>
        }
      >
        <Link
          to="/melhores-celulares-custo-beneficio"
          className="rounded-full bg-[#8B5A2B] px-6 py-3 text-sm font-bold text-white transition hover:brightness-95"
        >
          Ver custo-benefício
        </Link>

        <Link
          to="/melhores-celulares-ate-2500"
          className="rounded-full bg-white/10 px-6 py-3 text-sm font-bold text-white ring-1 ring-white/20 transition hover:bg-white/15"
        >
          Ver até R$ 2.500
        </Link>
      </CategoryHero>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <SectionTitle
          eyebrow="Ranking rápido"
          title="Os Samsung que mais valem a pena hoje"
          description="Seleção editorial focada em experiência real, compra inteligente e menor risco de arrependimento."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {ranking.map((item) => (
            <TopPickCard
              key={item.product}
              category={item.category}
              product={item.product}
              description={item.description}
            />
          ))}
        </div>

        <section className="mt-14 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <SectionTitle
            eyebrow="Reviews Samsung"
            title="Reviews mais importantes da linha Galaxy"
            description="Análises completas dos principais celulares Samsung para diferentes perfis de compra."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <ReviewCard
              title="Review Galaxy S24"
              description="Top de linha compacto da Samsung com IA, excelente câmera e desempenho premium."
              href="/review/galaxy-s24"
              image="/images/products/galaxy-s24-optimized.webp"
              score="9.6"
              badge="Premium"
            />

            <ReviewCard
              title="Review Galaxy A55 5G"
              description="O Samsung mais equilibrado para a maioria das pessoas."
              href="/review/galaxy-a55"
              image="/images/products/galaxy-a55-optimized.webp"
              score="9.0"
              badge="Intermediário premium"
            />

            <ReviewCard
              title="Review Galaxy A35 5G"
              description="Ótima escolha custo-benefício dentro do ecossistema Samsung."
              href="/review/galaxy-a35"
              image="/images/products/galaxy-a35-optimized.webp"
              score="8.7"
              badge="Custo-benefício"
            />
          </div>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[1fr_340px]">
          <article className="space-y-10">
            <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
                Linha Galaxy
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#0F3F4A]">
                Qual Samsung vale mais a pena em 2026?
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                O <strong>Galaxy A55</strong> é a escolha mais equilibrada para
                a maioria das pessoas. Ele combina boa tela, boa bateria,
                construção premium, resistência IP67, câmeras confiáveis e
                software mais estável.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                O <strong>Galaxy S24</strong> é ideal para quem quer experiência
                premium, câmeras superiores, recursos de IA e desempenho de topo
                de linha. Já o <strong>Galaxy A35</strong> é excelente para
                economizar mantendo a experiência Samsung.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                A Samsung continua sendo uma das marcas mais fortes para quem
                prioriza estabilidade, assistência, atualizações, câmeras
                equilibradas e um celular confiável para usar por vários anos.
              </p>
            </section>

            <section className="grid gap-5 md:grid-cols-3">
              {samsungProfiles.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
                >
                  <h3 className="text-xl font-bold text-[#0F3F4A]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    {item.text}
                  </p>
                </article>
              ))}
            </section>

            <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <SectionTitle
                eyebrow="Escolha por perfil"
                title="Qual Galaxy comprar?"
                description="Resumo direto para escolher o Samsung certo sem se perder entre muitos modelos."
              />

              <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-slate-200">
                {comparisonRows.map(([label, value], index) => (
                  <div
                    key={label}
                    className={`grid grid-cols-[0.9fr_1.1fr] gap-4 px-4 py-3 text-sm ${
                      index % 2 === 0 ? "bg-slate-50" : "bg-white"
                    }`}
                  >
                    <span className="font-semibold text-slate-800">{label}</span>
                    <span className="font-bold text-[#0F3F4A]">{value}</span>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA
              title="Melhores ofertas Samsung atualizadas"
              description="Veja preço, parcelamento e disponibilidade dos celulares Samsung recomendados."
              buttonText="Ver ofertas Samsung"
              href="https://www.mercadolivre.com.br/samsung-galaxy-a55-5g-dual-sim-256-gb-azul-celeste-8-gb-ram/p/MLB34731719?pdp_filters=item_id%3AMLB4580836945&attributes=COLOR%3AMLB34731719&matt_tool=38524122"
              highlight="Galaxy S24 • Galaxy A55 • Galaxy A35"
            />

            <section className="rounded-3xl bg-[#0F3F4A] p-8 text-white shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B9774B]">
                Recomendação editorial
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#F8FAFC]">
                Samsung ainda é uma das escolhas mais seguras do mercado.
              </h2>

              <p className="mt-4 max-w-4xl text-base leading-7 text-slate-100">
                A combinação de software refinado, boa otimização, construção,
                suporte e atualizações faz os Galaxy continuarem entre os
                aparelhos mais recomendados para uso no longo prazo.
              </p>

              <p className="mt-4 max-w-4xl text-base leading-7 text-slate-100">
                Se você quer comprar sem arriscar muito, o Galaxy A55 é a melhor
                recomendação geral. Se quer economizar, vá de Galaxy A35. Se quer
                o melhor da Samsung em tamanho compacto, escolha o Galaxy S24.
              </p>
            </section>
          </article>

          <div className="space-y-6 lg:sticky lg:top-28 lg:h-fit">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
                Links úteis
              </p>

              <div className="mt-5 space-y-3 text-sm">
                <Link
                  to="/review/galaxy-a55"
                  className="block text-slate-700 hover:text-[#8B5A2B]"
                >
                  Review Galaxy A55
                </Link>

                <Link
                  to="/review/galaxy-a35"
                  className="block text-slate-700 hover:text-[#8B5A2B]"
                >
                  Review Galaxy A35
                </Link>

                <Link
                  to="/review/galaxy-s24"
                  className="block text-slate-700 hover:text-[#8B5A2B]"
                >
                  Review Galaxy S24
                </Link>

                <Link
                  to="/comparativo-galaxy-a55-vs-galaxy-a35"
                  className="block text-slate-700 hover:text-[#8B5A2B]"
                >
                  Galaxy A55 vs Galaxy A35
                </Link>

                <Link
                  to="/comparativo/galaxy-a55-vs-poco-x6-pro"
                  className="block text-slate-700 hover:text-[#8B5A2B]"
                >
                  Galaxy A55 vs Poco X6 Pro
                </Link>

                <Link
                  to="/melhores-celulares-custo-beneficio"
                  className="block text-slate-700 hover:text-[#8B5A2B]"
                >
                  Melhores custo-benefício
                </Link>

                <Link
                  to="/melhores-celulares-xiaomi"
                  className="block text-slate-700 hover:text-[#8B5A2B]"
                >
                  Melhores celulares Xiaomi
                </Link>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
                Resumo
              </p>

              <div className="mt-5 space-y-4 text-sm text-slate-700">
                <div>
                  <span className="block text-slate-500">Melhor geral</span>
                  <strong className="text-[#0F3F4A]">Galaxy A55 5G</strong>
                </div>

                <div>
                  <span className="block text-slate-500">Melhor premium</span>
                  <strong className="text-[#0F3F4A]">Galaxy S24</strong>
                </div>

                <div>
                  <span className="block text-slate-500">Melhor barato</span>
                  <strong className="text-[#0F3F4A]">Galaxy A35 5G</strong>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
