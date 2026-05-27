import { createFileRoute, Link } from "@tanstack/react-router";
import { AffiliateCTA } from "@/components/site/AffiliateCTA";
import { CategoryHero } from "@/components/site/CategoryHero";
import { ComparisonCard } from "@/components/site/ComparisonCard";
import { ReviewCard } from "@/components/site/ReviewCard";
import { SectionTitle } from "@/components/site/SectionTitle";
import { TopPickCard } from "@/components/site/TopPickCard";

export const Route = createFileRoute("/melhores-celulares-ate-2500")({
  head: () => ({
    meta: [
      {
        title:
          "Melhores celulares até R$ 2.500 em 2026: os modelos que mais valem a pena",
      },
      {
        name: "description",
        content:
          "Veja os melhores celulares até R$ 2.500 para comprar em 2026. Galaxy A55, Redmi Note 13 Pro, Poco X6 Pro e outros modelos com ótimo custo-benefício.",
      },
    ],
  }),
  component: MelhoresCelularesAte2500,
});

const ranking = [
  {
    category: "Melhor geral até R$ 2.500",
    product: "Galaxy A55 5G",
    description:
      "O intermediário premium mais equilibrado para a maioria das pessoas.",
  },
  {
    category: "Melhor Xiaomi até R$ 2.500",
    product: "Redmi Note 13 Pro 5G",
    description:
      "Excelente tela, carregamento rápido e ficha técnica forte.",
  },
  {
    category: "Melhor performance",
    product: "Poco X6 Pro",
    description:
      "Excelente escolha para jogos e alto desempenho.",
  },
];

function MelhoresCelularesAte2500() {
  return (
    <main className="min-h-screen bg-[#F7F2EB] text-slate-900">
      <CategoryHero
        eyebrow="Especial até R$ 2.500"
        title="Os melhores celulares até R$ 2.500 para comprar em 2026"
        description="Selecionamos os smartphones mais equilibrados até R$ 2.500 considerando tela, desempenho, câmera, bateria, software e experiência real de uso."
        image="/images/products/phones-hero-optimized.webp"
        aside={
          <>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9A066]">
              Melhor escolha geral
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
              Galaxy A55 5G
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-200">
              Um dos celulares mais equilibrados da categoria para quem quer
              experiência premium sem pagar preço de flagship.
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
          to="/melhores-celulares-ate-2000"
          className="rounded-full bg-white/10 px-6 py-3 text-sm font-bold text-white ring-1 ring-white/20 transition hover:bg-white/15"
        >
          Ver até R$ 2.000
        </Link>
      </CategoryHero>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <SectionTitle
          eyebrow="Ranking até R$ 2.500"
          title="Os modelos que mais valem a pena nessa faixa"
          description="Seleção editorial focada em experiência premium, longevidade e compra inteligente."
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
            eyebrow="Reviews recomendados"
            title="Os celulares mais fortes até R$ 2.500"
            description="Análises completas dos aparelhos mais equilibrados da categoria."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <ReviewCard
              title="Review Galaxy A55 5G"
              description="Experiência premium sem entrar na faixa flagship."
              href="/review/galaxy-a55"
              image="/images/products/galaxy-a55-optimized.webp"
              score="9.0"
              badge="Samsung"
            />

            <ReviewCard
              title="Review Redmi Note 13 Pro 5G"
              description="Ótimo custo-benefício com tela AMOLED e carregamento rápido."
              href="/review/redmi-note-13-pro"
              image="/images/products/redmi-note-13-pro-optimized.webp"
              score="9.0"
              badge="Xiaomi"
            />

            <ReviewCard
              title="Review Poco X6 Pro"
              description="Excelente escolha para quem quer máxima performance."
              href="/review/poco-x6-pro"
              image="/images/products/poco-x6-pro-optimized.webp"
              score="9.2"
              badge="Performance"
            />
          </div>
        </section>

        <section className="mt-14 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <SectionTitle
            eyebrow="Comparativos"
            title="Compare antes de comprar"
            description="As dúvidas mais comuns entre os melhores celulares da categoria."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <ComparisonCard
              title="Galaxy A55 vs Redmi Note 13 Pro"
              description="Samsung ou Xiaomi? Compare tela, câmera, software e custo-benefício."
              href="/comparativo/galaxy-a55-vs-redmi-note-13-pro"
              image="/images/products/galaxy-a55-optimized.webp"
              winner="Galaxy A55 para experiência premium; Redmi para ficha técnica."
            />

            <ComparisonCard
              title="Galaxy A55 vs Poco X6 Pro"
              description="Equilíbrio premium ou performance extrema?"
              href="/comparativo/galaxy-a55-vs-poco-x6-pro"
              image="/images/products/galaxy-a55-optimized.webp"
              winner="A55 para equilíbrio; Poco para desempenho."
            />
          </div>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[1fr_340px]">
          <article className="space-y-10">
            <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B9774B]">
                Faixa até R$ 2.500
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#0F3F4A]">
                Aqui começam os intermediários premium de verdade.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                A faixa até R$ 2.500 concentra alguns dos celulares mais
                interessantes do mercado. Aqui já aparecem modelos com acabamento
                premium, telas excelentes, boas câmeras e experiência muito próxima
                de aparelhos topo de linha.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                Para muitas pessoas, investir nessa faixa faz mais sentido do que
                pagar muito mais caro em um flagship.
              </p>
            </section>

            <AffiliateCTA
              title="Melhores ofertas até R$ 2.500"
              description="Veja preços, parcelamento e disponibilidade dos celulares recomendados."
              buttonText="Ver ofertas atualizadas"
              href="https://SEU-LINK-AFILIADO"
              highlight="Samsung • Xiaomi • Poco"
            />

            <section className="rounded-3xl bg-[#0F3F4A] p-8 text-white shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9A066]">
                Recomendação editorial
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#F8FAFC]">
                O melhor equilíbrio do mercado está nessa faixa.
              </h2>

              <p className="mt-4 max-w-4xl text-base leading-7 text-slate-100">
                Até R$ 2.500 já é possível comprar celulares extremamente fortes,
                com ótima experiência, excelente tela, boas câmeras e vida útil
                longa sem precisar entrar no segmento premium mais caro.
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
                  to="/melhores-celulares-ate-2000"
                  className="block text-slate-700 hover:text-[#B9774B]"
                >
                  Melhores até R$ 2.000
                </Link>

                <Link
                  to="/review/galaxy-a55"
                  className="block text-slate-700 hover:text-[#B9774B]"
                >
                  Review Galaxy A55
                </Link>

                <Link
                  to="/review/redmi-note-13-pro"
                  className="block text-slate-700 hover:text-[#B9774B]"
                >
                  Review Redmi Note 13 Pro
                </Link>
              </div>
            </div>
          </aside>
        </section>
      </section>
    </main>
  );
}
  
