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
          "Qual é o melhor celular Xiaomi em 2026? Redmi Note 13 Pro 5G para equilíbrio, Redmi Note 14 Pro+ para conjunto premium e Poco X6 Pro para jogos.",
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
    category: "Melhor Xiaomi premium",
    product: "Redmi Note 14 Pro+ 5G",
    description:
      "Mais completo para quem quer câmera forte, tela premium e carregamento de 120 W.",
  },
  {
    category: "Melhor Xiaomi gamer",
    product: "Poco X6 Pro",
    description:
      "Desempenho extremamente forte para quem joga e quer máxima performance.",
  },
];

function MelhoresCelularesXiaomi() {
  return (
    <main className="min-h-screen bg-[#F7F2EB] text-slate-900">
      <CategoryHero
        eyebrow="Especial Xiaomi"
        title="Os melhores celulares Xiaomi para comprar em 2026"
        description="Selecionamos os celulares Xiaomi que mais valem a pena atualmente considerando desempenho, tela, bateria, carregamento rápido e custo-benefício."
        image="/images/products/phones-hero-optimized.webp"
        aside={
          <>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
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
          eyebrow="Ranking Xiaomi"
          title="Os Xiaomi que mais valem a pena hoje"
          description="Seleção editorial focada em performance, tela, bateria e compra inteligente."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-3">
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

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            <ReviewCard
              title="Review Redmi Note 13 Pro 5G"
              description="Excelente equilíbrio entre tela, desempenho e carregamento rápido."
              href="/review/redmi-note-13-pro"
              image="/images/products/redmi-note-13-pro-optimized.webp"
              score="9.0"
              badge="Custo-benefício"
            />

            <ReviewCard
              title="Review Redmi Note 14 Pro+ 5G"
              description="Modelo mais completo, com câmera de 200 MP e carregamento de 120 W."
              href="/review/redmi-note-14-pro-plus"
              image="/images/products/redmi-note-14-pro-plus-optimized.webp"
              score="9.2"
              badge="Premium"
            />

            <ReviewCard
              title="Review Poco X6 Pro"
              description="Um dos celulares mais fortes para jogos e performance."
              href="/review/poco-x6-pro"
              image="/images/products/poco-x6-pro-optimized.webp"
              score="9.2"
              badge="Performance"
            />
          </div>
        </section>

        <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <SectionTitle
            eyebrow="Comparativo Xiaomi"
            title="Redmi Note 13 Pro vs Redmi Note 14 Pro+: qual vale mais a pena?"
            description="Veja as diferenças entre os dois modelos Redmi antes de decidir se compensa pagar mais no modelo novo."
          />

          <Link
            to="/comparativo/redmi-note-13-pro-vs-redmi-note-14-pro-plus"
            className="mt-6 inline-flex rounded-full bg-[#8B5A2B] px-6 py-3 text-sm font-bold text-white transition hover:brightness-95"
          >
            Ver comparativo Redmi Note 13 Pro vs 14 Pro+
          </Link>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[1fr_340px]">
          <article className="space-y-10">
            <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
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

            <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
                Resposta direta
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#0F3F4A]">
                Qual é o melhor celular Xiaomi para comprar em 2026?
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                Para a maioria das pessoas, o Redmi Note 13 Pro 5G segue como o
                Xiaomi mais equilibrado: combina tela AMOLED, boa câmera, desempenho
                para o dia a dia e carregamento rápido. Já o Redmi Note 14 Pro+ 5G
                é a escolha mais completa para quem quer câmera de 200 MP,
                carregamento de 120 W e construção mais premium.
              </p>

              <div className="mt-6 grid gap-5 md:grid-cols-3">
                <div className="rounded-2xl bg-[#F7F2EB] p-5">
                  <h3 className="text-lg font-bold text-[#0F3F4A]">
                    Melhor Xiaomi para a maioria
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    O Redmi Note 13 Pro 5G entrega o conjunto mais equilibrado para
                    redes sociais, fotos, vídeos, trabalho e uso diário.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F7F2EB] p-5">
                  <h3 className="text-lg font-bold text-[#0F3F4A]">
                    Melhor Xiaomi mais completo
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    O Redmi Note 14 Pro+ 5G faz sentido para quem quer câmera
                    principal forte, carregamento muito rápido e acabamento superior.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F7F2EB] p-5">
                  <h3 className="text-lg font-bold text-[#0F3F4A]">
                    Melhor Xiaomi para jogos
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    O Poco X6 Pro faz mais sentido para quem quer desempenho forte em
                    jogos, multitarefa pesada e maior folga para os próximos anos.
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
                Dúvidas comuns
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#0F3F4A]">
                Como escolher o melhor Xiaomi para o seu perfil
              </h2>

              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-[#0F3F4A]">
                    Qual Xiaomi tem melhor custo-benefício?
                  </h3>
                  <p className="mt-2 text-base leading-7 text-slate-700">
                    O Redmi Note 13 Pro 5G costuma ser a compra mais equilibrada quando
                    aparece em promoção, porque reúne tela, câmera, desempenho e
                    carregamento rápido sem entrar na faixa de preço dos topos de linha.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#0F3F4A]">
                    Redmi Note 14 Pro+ 5G vale a pena?
                  </h3>
                  <p className="mt-2 text-base leading-7 text-slate-700">
                    Vale para quem quer um Xiaomi mais completo, com câmera principal
                    de 200 MP, carregamento de 120 W e acabamento superior. Se o foco
                    for economizar, o Redmi Note 13 Pro 5G ainda pode ser mais interessante.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#0F3F4A]">
                    Xiaomi ou Poco: qual escolher?
                  </h3>
                  <p className="mt-2 text-base leading-7 text-slate-700">
                    Escolha Redmi quando quiser um conjunto mais equilibrado para uso
                    geral. Escolha Poco se desempenho e jogos forem mais importantes do
                    que câmera e acabamento.
                  </p>
                </div>
              </div>
            </section>

            <AffiliateCTA
              title="Melhores ofertas Xiaomi atualizadas"
              description="Veja preços, parcelamento e disponibilidade dos celulares Xiaomi recomendados."
              buttonText="Ver ofertas Xiaomi"
              href="https://www.mercadolivre.com.br/smartphone-redmi-note-13-pro-5g-256gb-8ram-cnfc-cor-preto/p/MLB39445846?pdp_filters=item_id%3AMLB4162070017&matt_tool=38524122"
              highlight="Redmi • Poco • Xiaomi"
              productName="Redmi Note 13 Pro"
              pageType="guia"
            />

            <section className="rounded-3xl bg-[#0F3F4A] p-8 text-white shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
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

          <div className="space-y-6 lg:sticky lg:top-28 lg:h-fit">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
                Links úteis
              </p>

              <div className="mt-5 space-y-3 text-sm">
                <Link
                  to="/melhores-celulares-custo-beneficio"
                  className="block text-slate-700 hover:text-[#8B5A2B]"
                >
                  Melhores custo-benefício
                </Link>

                <Link
                  to="/melhores-celulares-samsung"
                  className="block text-slate-700 hover:text-[#8B5A2B]"
                >
                  Melhores celulares Samsung
                </Link>

                <Link
                  to="/review/redmi-note-14-pro-plus"
                  className="block text-slate-700 hover:text-[#8B5A2B]"
                >
                  Review Redmi Note 14 Pro+ 5G
                </Link>

                <Link
                  to="/comparativo/redmi-note-13-pro-vs-redmi-note-14-pro-plus"
                  className="block text-slate-700 hover:text-[#8B5A2B]"
                >
                  Redmi Note 13 Pro vs Redmi Note 14 Pro+
                </Link>

                <Link
                  to="/review/redmi-note-13-pro"
                  className="block text-slate-700 hover:text-[#8B5A2B]"
                >
                  Review Redmi Note 13 Pro
                </Link>

                <Link
                  to="/comparativo/galaxy-a55-vs-redmi-note-13-pro"
                  className="block text-slate-700 hover:text-[#8B5A2B]"
                >
                  Galaxy A55 vs Redmi Note 13 Pro
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
