import { createFileRoute, Link } from "@tanstack/react-router";
import { AffiliateCTA } from "@/components/site/AffiliateCTA";
import { CategoryHero } from "@/components/site/CategoryHero";
import { ReviewCard } from "@/components/site/ReviewCard";
import { SectionTitle } from "@/components/site/SectionTitle";
import { TopPickCard } from "@/components/site/TopPickCard";

export const Route = createFileRoute("/melhores-celulares-xiaomi")({
  head: () => ({
    meta: [
      {
        title:
          "Melhores celulares Xiaomi em 2026: os modelos que mais valem a pena",
      },
      {
        name: "description",
        content:
          "Veja os melhores celulares Xiaomi para comprar em 2026. Redmi Note 13 Pro, Poco X6 Pro e outros modelos com foco em custo-benefício, desempenho, bateria e tela.",
      },
    ],
  }),
  component: MelhoresCelularesXiaomi,
});

const ranking = [
  {
    category: "Melhor Xiaomi geral",
    product: "Redmi Note 13 Pro 5G",
    description:
      "Excelente equilíbrio entre tela, câmera, bateria e custo-benefício.",
  },
  {
    category: "Melhor Xiaomi gamer",
    product: "Poco X6 Pro",
    description:
      "Desempenho extremamente forte para quem joga e quer máxima performance.",
  },
  {
    category: "Melhor Xiaomi barato",
    product: "Redmi Note 13",
    description:
      "Boa experiência geral para quem quer economizar mais.",
  },
];

function MelhoresCelularesXiaomi() {
  return (
    <main className="min-h-screen bg-[#F7F2EB] text-slate-900">
      <CategoryHero
        eyebrow="Especial Xiaomi"
        title="Os melhores celulares Xiaomi para comprar em 2026"
        description="Selecionamos os celulares Xiaomi que mais valem a pena atualmente considerando desempenho, tela, bateria, carregamento rápido e custo-benefício."
        image="/images/products/phones-hero.webp"
        aside={
          <>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9A066]">
              Melhor Xiaomi geral
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
              Redmi Note 13 Pro 5G
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-200">
              Excelente combinação de tela AMOLED, desempenho forte,
              carregamento rápido e ótimo custo-benefício.
            </p>

            <Link
              to="/review/redmi-note-13-pro"
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
          eyebrow="Ranking Xiaomi"
          title="Os Xiaomi que mais valem a pena hoje"
          description="Seleção editorial focada em performance, tela, bateria e compra inteligente."
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
            eyebrow="Reviews Xiaomi"
            title="Reviews mais importantes da Xiaomi"
            description="Análises completas dos celulares Xiaomi mais procurados."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <ReviewCard
              title="Review Redmi Note 13 Pro 5G"
              description="Excelente equilíbrio entre tela, desempenho e carregamento rápido."
              href="/review/redmi-note-13-pro"
              image="/images/products/redmi-note-13-pro.webp"
              score="9.0"
              badge="Custo-benefício"
            />

            <ReviewCard
              title="Review Poco X6 Pro"
              description="Um dos celulares mais fortes para jogos e performance."
              href="/review/poco-x6-pro"
              image="/images/products/poco-x6-pro.webp"
              score="9.2"
              badge="Performance"
            />

            <ReviewCard
              title="Review Redmi Note 13"
              description="Boa escolha para quem quer economizar mais."
              href="/review/redmi-note-13"
              score="8.5"
              badge="Econômico"
            />
          </div>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[1fr_340px]">
          <article className="space-y-10">
            <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B9774B]">
                Xiaomi em 2026
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#0F3F4A]">
                Xiaomi continua forte no custo-benefício
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                A Xiaomi segue sendo uma das marcas mais fortes para quem quer
                muita ficha técnica pelo menor preço possível. Os aparelhos da
                linha Redmi e Poco normalmente entregam desempenho acima da média,
                telas fortes e carregamento rápido.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                Em contrapartida, alguns usuários ainda preferem Samsung quando
                o foco é software mais refinado, suporte mais previsível e
                experiência mais consistente no longo prazo.
              </p>
            </section>

            <AffiliateCTA
              title="Melhores ofertas Xiaomi atualizadas"
              description="Veja preços, parcelamento e disponibilidade dos celulares Xiaomi recomendados."
              buttonText="Ver ofertas Xiaomi"
              href="https://SEU-LINK-AFILIADO"
              highlight="Redmi • Poco • Xiaomi"
            />

            <section className="rounded-3xl bg-[#0F3F4A] p-8 text-white shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9A066]">
                Recomendação editorial
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#F8FAFC]">
                Xiaomi é excelente para quem prioriza hardware.
              </h2>

              <p className="mt-4 max-w-4xl text-base leading-7 text-slate-100">
                Se o objetivo for máximo desempenho, tela forte e carregamento
                rápido pelo menor preço possível, a Xiaomi continua sendo uma das
                melhores marcas do mercado.
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
                  to="/melhores-celulares-samsung"
                  className="block text-slate-700 hover:text-[#B9774B]"
                >
                  Melhores celulares Samsung
                </Link>

                <Link
                  to="/review/redmi-note-13-pro"
                  className="block text-slate-700 hover:text-[#B9774B]"
                >
                  Review Redmi Note 13 Pro
                </Link>

                <Link
                  to="/comparativo/galaxy-a55-vs-redmi-note-13-pro"
                  className="block text-slate-700 hover:text-[#B9774B]"
                >
                  Galaxy A55 vs Redmi Note 13 Pro
                </Link>
              </div>
            </div>
          </aside>
        </section>
      </section>
    </main>
  );
}
