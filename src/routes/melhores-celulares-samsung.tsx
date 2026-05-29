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
          "Veja os melhores celulares Samsung para comprar em 2026. Galaxy S24, Galaxy A55, Galaxy A35 e outros modelos analisados com foco em custo-benefício, bateria, câmera e desempenho.",
      },
    ],
  }),
  component: MelhoresCelularesSamsung,
});

const ranking = [
  {
    category: "Melhor Samsung premium",
    product: "Galaxy S24",
    description:
      "Top de linha compacto com excelente câmera, desempenho premium e vários anos de atualização.",
  },
  {
    category: "Melhor intermediário premium",
    product: "Galaxy A55 5G",
    description:
      "Excelente equilíbrio entre tela, bateria, construção premium e experiência Samsung.",
  },
  {
    category: "Melhor Samsung custo-benefício",
    product: "Galaxy A35 5G",
    description:
      "Ótima escolha para quem quer economizar sem abrir mão da experiência Samsung.",
  },
];

function MelhoresCelularesSamsung() {
  return (
    <main className="min-h-screen bg-[#F7F2EB] text-slate-900">
      <CategoryHero
        eyebrow="Especial Samsung"
        title="Os melhores celulares Samsung para comprar em 2026"
        description="Selecionamos os modelos Samsung que mais valem a pena atualmente considerando experiência real, câmeras, bateria, desempenho, suporte e custo-benefício."
        image="/images/products/phones-hero-optimized.webp"
        aside={
          <>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9A066]">
              Melhor Samsung geral
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
              Galaxy A55 5G
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-200">
              Um dos celulares mais equilibrados da Samsung para quem quer
              ótima tela, boa bateria, construção premium e longa vida útil.
            </p>

            <Link
              to="/review/galaxy-a55"
              className="mt-6 block rounded-full bg-[#B9774B] px-5 py-3 text-center text-sm font-bold text-white transition hover:brightness-95"
            >
              Ler review completo
            </Link>
          </>
        }
      >
        <Link
          to="/melhores-celulares-custo-beneficio"
          className="rounded-full bg-[#B9774B] px-6 py-3 text-sm font-bold text-white transition hover:brightness-95"
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
          description="Seleção editorial focada em experiência real e compra inteligente."
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
            description="Análises completas dos principais celulares Samsung para diferentes perfis."
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
              badge="Intermediário Premium"
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
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B9774B]">
                Linha Galaxy
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#0F3F4A]">
                Qual Samsung vale mais a pena em 2026?
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                O Galaxy A55 é a escolha mais equilibrada para a maioria das
                pessoas. O Galaxy S24 é ideal para quem quer experiência premium
                máxima. Já o Galaxy A35 é excelente para economizar mantendo a
                experiência Samsung.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                A Samsung continua sendo uma das marcas mais fortes para quem
                prioriza estabilidade, câmeras equilibradas, software maduro e
                suporte confiável.
              </p>
            </section>

            <AffiliateCTA
              title="Melhores ofertas Samsung atualizadas"
              description="Veja preço, parcelamento e disponibilidade dos celulares Samsung recomendados."
              buttonText="Ver ofertas Samsung"
              href="https://www.mercadolivre.com.br/samsung-galaxy-a55-5g-dual-sim-256-gb-azul-celeste-8-gb-ram/p/MLB34731719?pdp_filters=item_id%3AMLB4580836945&attributes=COLOR%3AMLB34731719&matt_tool=38524122"
              highlight="Galaxy S24 • Galaxy A55 • Galaxy A35"
            />

            <section className="rounded-3xl bg-[#0F3F4A] p-8 text-white shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9A066]">
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
            </section>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:h-fit">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B9774B]">
                Links úteis
              </p>

              <div className="mt-5 space-y-3 text-sm">
                <Link
                  to="/melhores-celulares-custo-beneficio"
                  className="block text-slate-700 hover:text-[#B9774B]"
                >
                  Melhores custo-benefício
                </Link>

                <Link
                  to="/melhores-celulares-xiaomi"
                  className="block text-slate-700 hover:text-[#B9774B]"
                >
                  Melhores celulares Xiaomi
                </Link>

                <Link
                  to="/review/galaxy-a55"
                  className="block text-slate-700 hover:text-[#B9774B]"
                >
                  Review Galaxy A55
                </Link>

                <Link
                  to="/comparativo-galaxy-a55-vs-galaxy-a35"
                  className="block text-slate-700 hover:text-[#B9774B]"
                >
                  Galaxy A55 vs Galaxy A35
                </Link>
              </div>
            </div>
          </aside>
        </section>
      </section>
    </main>
  );
}




