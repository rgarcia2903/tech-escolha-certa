import { createFileRoute, Link } from "@tanstack/react-router";
import { AffiliateCTA } from "@/components/site/AffiliateCTA";
import { ComparisonCard } from "@/components/site/ComparisonCard";
import { EditorialHero } from "@/components/site/EditorialHero";
import { GuideCard } from "@/components/site/GuideCard";
import { ReviewCard } from "@/components/site/ReviewCard";
import { SectionTitle } from "@/components/site/SectionTitle";

export const Route = createFileRoute("/melhores-celulares-custo-beneficio")({
  head: () => ({
    meta: [
      {
        title:
          "Melhores celulares custo-benefício em 2026: guia completo para comprar bem",
      },
      {
        name: "description",
        content:
          "Veja os melhores celulares custo-benefício para comprar em 2026. Guia com Samsung, Xiaomi, reviews, comparativos e recomendações por perfil de uso.",
      },
      {
        name: "keywords",
        content:
          "melhores celulares custo-benefício, celular bom e barato, melhor celular 2026, Galaxy A55, Galaxy A35, Redmi Note 13 Pro",
      },
      {
        property: "og:title",
        content: "Melhores celulares custo-benefício em 2026",
      },
      {
        property: "og:description",
        content:
          "Guia editorial com os celulares que mais valem a pena para quem quer comprar bem em 2026.",
      },
    ],
  }),
  component: CustoBeneficioPage,
});

const quickPicks = [
  ["Melhor escolha geral", "Galaxy A55 5G"],
  ["Melhor Samsung barato", "Galaxy A35 5G"],
  ["Melhor Xiaomi custo-benefício", "Redmi Note 13 Pro 5G"],
  ["Melhor para economizar", "Galaxy A35 5G"],
];

function CustoBeneficioPage() {
  return (
    <main className="min-h-screen bg-[#F7F2EB] text-slate-900">
      <EditorialHero
        eyebrow="Especial Custo-Benefício"
        title="Os melhores celulares custo-benefício para comprar em 2026"
        description="Selecionamos smartphones equilibrados para quem quer gastar bem, evitando pagar caro por recursos que não fazem diferença no uso real."
        aside={
          <>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
              Melhor escolha geral
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">Galaxy A55 5G</h2>

            <p className="mt-4 text-sm leading-6 text-slate-200">
              Um dos celulares mais equilibrados para quem busca boa câmera,
              desempenho forte, bateria confiável e experiência Samsung premium.
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
        <div className="flex flex-wrap gap-3">
          <Link
            to="/melhores-celulares-ate-2000"
            className="rounded-full bg-[#8B5A2B] px-6 py-3 text-sm font-bold text-white transition hover:brightness-95"
          >
            Ver até R$ 2.000
          </Link>

          <Link
            to="/melhores-celulares-ate-2500"
            className="rounded-full bg-white/10 px-6 py-3 text-sm font-bold text-white ring-1 ring-white/20 transition hover:bg-white/15"
          >
            Ver até R$ 2.500
          </Link>
        </div>
      </EditorialHero>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <section>
          <SectionTitle
            eyebrow="Escolhas recomendadas"
            title="Os modelos que mais valem a pena atualmente"
            description="Uma seleção editorial focada em experiência real, equilíbrio, suporte, desempenho e compra inteligente."
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <GuideCard
              title="Melhor Samsung custo-benefício"
              description="A melhor opção Samsung para quem quer equilíbrio entre preço, tela, bateria e experiência segura."
              href="/review/galaxy-a35"
              image="/images/products/galaxy-a55-optimized.webp"
              highlight="Galaxy A35 5G"
            />

            <GuideCard
              title="Melhor intermediário premium"
              description="O modelo mais equilibrado para quem quer experiência acima da média sem pagar preço de topo de linha."
              href="/review/galaxy-a55"
              highlight="Galaxy A55 5G"
            />

            <GuideCard
              title="Melhor Xiaomi custo-benefício"
              description="Excelente opção para quem busca ficha técnica forte, tela bonita e carregamento rápido."
              href="/review/redmi-note-13-pro"
              image="/images/products/redmi-note-13-pro-optimized.webp"
              highlight="Redmi Note 13 Pro 5G"
            />
          </div>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[1fr_340px]">
          <article className="space-y-10">
            <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <SectionTitle
                eyebrow="Reviews"
                title="Reviews mais importantes"
                description="Análises completas para ajudar você a comparar experiência real, pontos fortes e limitações de cada aparelho."
              />

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <ReviewCard
                  title="Review Galaxy A35 5G"
                  description="Excelente equilíbrio entre tela, bateria, preço e experiência Samsung confiável."
                  href="/review/galaxy-a35"
              image="/images/products/galaxy-a35-optimized.webp"
                  score="8.7"
                  badge="Samsung"
                />

                <ReviewCard
                  title="Review Galaxy A55 5G"
                  description="Experiência premium sem entrar na faixa flagship, com ótima tela e boa construção."
                  href="/review/galaxy-a55"
              image="/images/products/galaxy-a55-optimized.webp"
                  score="9.0"
                  badge="Premium"
                />

                <ReviewCard
                  title="Review Redmi Note 13 Pro 5G"
                  description="Um dos melhores celulares Xiaomi para custo-benefício, tela e carregamento rápido."
                  href="/review/redmi-note-13-pro"
              image="/images/products/redmi-note-13-pro-optimized.webp"
                  score="9.0"
                  badge="Xiaomi"
                />
              </div>
            </section>

            <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <SectionTitle
                eyebrow="Comparativos"
                title="Compare antes de comprar"
                description="As dúvidas mais comuns entre modelos de ótimo custo-benefício."
              />

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <ComparisonCard
                  title="Galaxy A55 vs Galaxy A35"
                  description="Veja se vale pagar mais no A55 ou economizar com o A35."
                  href="/comparativo-galaxy-a55-vs-galaxy-a35"
              image="/images/products/galaxy-a55-optimized.webp"
                  winner="Galaxy A55 para experiência premium; A35 para economia."
                />

                <ComparisonCard
                  title="Galaxy A55 vs Redmi Note 13 Pro"
                  description="Samsung ou Xiaomi? Compare tela, bateria, câmera, software e custo-benefício."
                  href="/comparativo/galaxy-a55-vs-redmi-note-13-pro"
              image="/images/products/galaxy-a55-optimized.webp"
                  winner="Depende do perfil: segurança Samsung ou ficha técnica Xiaomi."
                />
              </div>
            </section>

            <AffiliateCTA
              title="Celulares custo-benefício com ofertas atualizadas"
              description="Veja preços, parcelamento e disponibilidade dos modelos recomendados diretamente no Mercado Livre."
              buttonText="Ver ofertas no Mercado Livre"
              href="https://www.mercadolivre.com.br/social/gari4140335?matt_word=gari4140335&matt_tool=94872161&forceInApp=true&ref=BCL5bQjsjsabVIDan%2BquPGrfwN7a1FohoY06VAMKSazfMMvBQBdIW8zqBe37an9yyDe7QBDwJDm4QTYk2yzYChcH7E981AVDRBB24zjHcrAaiUrBmaIT95DFr4B%2BxfbwS56aaUOzDbz6%2B7hTZlL5IRF3RiLdsWRGZ73nYf4w1Km8Nrk1WlHmXz7vJLtq48XyAYE%2B%2F8s%3D"
              highlight="Samsung • Xiaomi • Intermediários premium"
              productName="Galaxy A55"
              pageType="guia"
            />

            <section className="rounded-3xl bg-[#0F3F4A] p-8 text-white shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
                Como escolher
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#F8FAFC]">
                O melhor custo-benefício não é sempre o mais barato.
              </h2>

              <p className="mt-4 max-w-4xl text-base leading-7 text-slate-100">
                Um bom celular custo-benefício precisa equilibrar tela, bateria, câmera,
                desempenho, suporte, construção e preço. Às vezes vale pagar um pouco mais
                por um aparelho que vai durar melhor e dar menos dor de cabeça.
              </p>
            </section>

            <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-3xl font-bold text-[#0F3F4A]">
                Perguntas frequentes
              </h2>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-bold text-slate-900">
                    Qual é o melhor celular custo-benefício em 2026?
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Para a maioria das pessoas, o Galaxy A55 é uma das escolhas mais
                    equilibradas. Para economizar mais, o Galaxy A35 é excelente. Para
                    ficha técnica forte pelo preço, o Redmi Note 13 Pro se destaca.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Samsung ou Xiaomi tem melhor custo-benefício?
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Xiaomi costuma entregar mais ficha técnica pelo preço. Samsung costuma
                    oferecer suporte, software e experiência mais previsíveis.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Vale comprar celular intermediário premium?
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Sim, especialmente quando o preço está próximo dos modelos
                    intermediários comuns. Eles tendem a durar mais e entregar experiência
                    superior.
                  </p>
                </div>
              </div>
            </section>
          </article>

          <div className="space-y-6 lg:sticky lg:top-28 lg:h-fit">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
                Ranking rápido
              </p>

              <h2 className="mt-2 text-2xl font-bold text-[#0F3F4A]">
                Escolhas principais
              </h2>

              <div className="mt-5 space-y-3">
                {quickPicks.map(([category, product]) => (
                  <div
                    key={category}
                    className="rounded-2xl bg-[#F7F2EB] p-4 ring-1 ring-slate-200"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#8B5A2B]">
                      {category}
                    </p>
                    <p className="mt-1 font-bold text-[#0F3F4A]">{product}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
                Links úteis
              </p>

              <div className="mt-5 space-y-3 text-sm">
                <Link
                  to="/melhores-celulares-ate-2000"
                  className="block text-slate-700 hover:text-[#8B5A2B]"
                >
                  Melhores celulares até R$ 2.000
                </Link>

                <Link
                  to="/melhores-celulares-ate-2500"
                  className="block text-slate-700 hover:text-[#8B5A2B]"
                >
                  Melhores celulares até R$ 2.500
                </Link>

                <Link
                  to="/melhores-celulares-samsung"
                  className="block text-slate-700 hover:text-[#8B5A2B]"
                >
                  Melhores celulares Samsung
                </Link>

                <Link
                  to="/melhores-celulares-xiaomi"
                  className="block text-slate-700 hover:text-[#8B5A2B]"
                >
                  Melhores celulares Xiaomi
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}







