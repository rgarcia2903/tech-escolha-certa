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
          "Melhores celulares Xiaomi em 2026: Redmi e Poco que valem a pena",
      },
      {
        name: "description",
        content:
          "Veja os melhores celulares Xiaomi em 2026: Redmi Note 13 Pro, Redmi Note 14 Pro+, Poco X7 Pro e Poco X6 Pro, com reviews e comparativos para decidir melhor.",
      },
      {
        name: "keywords",
        content:
          "melhores celulares Xiaomi 2026, melhor Xiaomi custo-benefício, Redmi Note 13 Pro, Redmi Note 14 Pro Plus, Poco X7 Pro, Poco X6 Pro",
      },
      {
        property: "og:title",
        content: "Melhores celulares Xiaomi em 2026 | Tech Escolha Certa",
      },
      {
        property: "og:description",
        content:
          "Guia editorial com os Xiaomi que mais valem a pena, reviews completos e comparativos entre Redmi e Poco.",
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
      "A escolha mais equilibrada para quem quer tela boa, câmera forte, carregamento rápido e preço competitivo.",
  },
  {
    category: "Melhor Xiaomi premium",
    product: "Redmi Note 14 Pro+ 5G",
    description:
      "Modelo mais completo para quem quer câmera de 200 MP, IP68, construção melhor e carregamento de 120 W.",
  },
  {
    category: "Melhor Xiaomi para jogos",
    product: "Poco X7 Pro",
    description:
      "A opção mais forte para quem quer desempenho, bateria grande, tela fluida e folga para os próximos anos.",
  },
  {
    category: "Melhor Xiaomi em promoção",
    product: "Poco X6 Pro",
    description:
      "Ainda faz muito sentido quando aparece bem mais barato que o Poco X7 Pro.",
  },
];

const comparisonCards = [
  {
    title: "Redmi Note 13 Pro vs Redmi Note 14 Pro+",
    description:
      "Compare os dois Redmi para entender se vale pagar mais no modelo novo ou economizar no Redmi Note 13 Pro.",
    href: "/comparativo/redmi-note-13-pro-vs-redmi-note-14-pro-plus",
    badge: "Redmi",
  },
  {
    title: "Poco X6 Pro vs Poco X7 Pro",
    description:
      "Veja qual Poco compensa mais para jogos, bateria, desempenho e custo-benefício.",
    href: "/comparativo/poco-x6-pro-vs-poco-x7-pro",
    badge: "Poco",
  },
  {
    title: "Galaxy A55 vs Redmi Note 13 Pro",
    description:
      "Samsung mais equilibrado ou Xiaomi com ficha técnica agressiva? Compare antes de comprar.",
    href: "/comparativo/galaxy-a55-vs-redmi-note-13-pro",
    badge: "Samsung vs Xiaomi",
  },
  {
    title: "Galaxy A55 vs Poco X6 Pro",
    description:
      "Boa escolha para quem está entre estabilidade da Samsung e desempenho da linha Poco.",
    href: "/comparativo/galaxy-a55-vs-poco-x6-pro",
    badge: "Samsung vs Poco",
  },
];

function MelhoresCelularesXiaomi() {
  return (
    <main className="min-h-screen bg-[#F7F2EB] text-slate-900">
      <CategoryHero
        eyebrow="Especial Xiaomi"
        title="Os melhores celulares Xiaomi para comprar em 2026"
        description="Selecionamos os modelos Redmi e Poco que mais valem a pena hoje, separando por perfil de uso: melhor equilíbrio, melhor conjunto premium, melhor desempenho e melhor compra em promoção."
        image="/images/products/phones-hero-optimized.webp"
        aside={
          <>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
              Escolha mais equilibrada
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
              Redmi Note 13 Pro 5G
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-200">
              Continua sendo uma das compras mais inteligentes para quem quer
              tela AMOLED, câmera de 200 MP, bom desempenho e carregamento rápido
              sem pagar preço de topo de linha.
            </p>

            <div className="mt-6 grid gap-3">
              <Link
                to="/review/redmi-note-13-pro"
                className="block rounded-full bg-[#8B5A2B] px-5 py-3 text-center text-sm font-bold text-white transition hover:brightness-95"
              >
                Ler review do Redmi Note 13 Pro
              </Link>

              <Link
                to="/comparativo/redmi-note-13-pro-vs-redmi-note-14-pro-plus"
                className="block rounded-full bg-white/10 px-5 py-3 text-center text-sm font-bold text-white ring-1 ring-white/20 transition hover:bg-white/15"
              >
                Comparar com Redmi Note 14 Pro+
              </Link>
            </div>
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
          to="/comparativos"
          className="rounded-full bg-white/10 px-6 py-3 text-sm font-bold text-white ring-1 ring-white/20 transition hover:bg-white/15"
        >
          Ver comparativos
        </Link>
      </CategoryHero>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <SectionTitle
          eyebrow="Ranking Xiaomi"
          title="Os Xiaomi que mais valem a pena hoje"
          description="Seleção editorial para compra inteligente, considerando preço, desempenho, câmera, bateria, carregamento e experiência geral."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
            title="Reviews completos dos principais modelos"
            description="Leia a análise individual antes de decidir. Cada review traz pontos fortes, pontos fracos, ficha técnica e recomendação final."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <ReviewCard
              title="Review Redmi Note 13 Pro 5G"
              description="O Xiaomi mais equilibrado para quem quer custo-benefício."
              href="/review/redmi-note-13-pro"
              image="/images/products/redmi-note-13-pro-optimized.webp"
              score="9.0"
              badge="Equilíbrio"
            />

            <ReviewCard
              title="Review Redmi Note 14 Pro+ 5G"
              description="Mais completo, com IP68, 200 MP e carregamento de 120 W."
              href="/review/redmi-note-14-pro-plus"
              image="/images/products/redmi-note-14-pro-plus-optimized.webp"
              score="9.2"
              badge="Premium"
            />

            <ReviewCard
              title="Review Poco X7 Pro"
              description="A melhor escolha da linha para desempenho, jogos e bateria."
              href="/review/poco-x7-pro"
              image="/images/products/poco-x7-pro-optimized.webp"
              score="9.3"
              badge="Performance"
            />

            <ReviewCard
              title="Review Poco X6 Pro"
              description="Ainda excelente se aparecer com preço bem mais baixo."
              href="/review/poco-x6-pro"
              image="/images/products/poco-x6-pro-optimized.webp"
              score="9.2"
              badge="Promoção"
            />
          </div>
        </section>

        <section className="mt-14 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <SectionTitle
            eyebrow="Comparativos Xiaomi"
            title="Compare antes de comprar"
            description="Os comparativos ajudam a escolher entre modelos parecidos e evitam pagar mais por recursos que talvez você não use."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {comparisonCards.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-[#F7F2EB] p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#8B5A2B] ring-1 ring-slate-200">
                  {item.badge}
                </span>

                <h3 className="mt-4 text-xl font-bold text-[#0F3F4A]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {item.description}
                </p>

                <a
                  href={item.href}
                  className="mt-5 inline-flex rounded-full bg-[#8B5A2B] px-5 py-2.5 text-sm font-bold text-white transition hover:brightness-95"
                >
                  Ver comparativo
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[1fr_340px]">
          <article className="space-y-10">
            <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
                Resposta direta
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#0F3F4A]">
                Qual é o melhor celular Xiaomi para comprar em 2026?
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                Para a maioria das pessoas, o <strong>Redmi Note 13 Pro 5G</strong>
                é o Xiaomi mais equilibrado. Ele reúne tela AMOLED, câmera de alta
                resolução, bom desempenho, bateria consistente e carregamento rápido
                por um preço normalmente mais competitivo.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                O <strong>Redmi Note 14 Pro+ 5G</strong> faz mais sentido para quem
                quer um conjunto mais completo, com proteção IP68, carregamento de
                120 W e melhor construção. Já o <strong>Poco X7 Pro</strong> é a
                escolha mais indicada quando o foco principal é desempenho, jogos e
                bateria.
              </p>

              <div className="mt-6 grid gap-5 md:grid-cols-3">
                <div className="rounded-2xl bg-[#F7F2EB] p-5">
                  <h3 className="text-lg font-bold text-[#0F3F4A]">
                    Melhor para a maioria
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Redmi Note 13 Pro 5G: melhor equilíbrio entre preço, tela,
                    câmera, bateria e carregamento.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F7F2EB] p-5">
                  <h3 className="text-lg font-bold text-[#0F3F4A]">
                    Melhor mais completo
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Redmi Note 14 Pro+ 5G: melhor para quem quer acabamento,
                    proteção e carregamento mais forte.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F7F2EB] p-5">
                  <h3 className="text-lg font-bold text-[#0F3F4A]">
                    Melhor para jogos
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Poco X7 Pro: melhor escolha para performance, multitarefa,
                    jogos e uso pesado.
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
                Linha Redmi ou linha Poco
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#0F3F4A]">
                Redmi é mais equilibrado; Poco é mais focado em desempenho
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                A linha Redmi costuma ser melhor para quem quer um celular completo
                para o dia a dia: boa tela, câmera principal forte, bateria segura,
                carregamento rápido e preço competitivo. É a opção mais lógica para
                quem usa redes sociais, vídeos, câmera, WhatsApp, bancos, mapas e
                navegação.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                A linha Poco normalmente é mais indicada para quem prioriza potência.
                Ela faz mais sentido para jogos, multitarefa pesada, uso intenso e
                quem quer o máximo de desempenho possível pelo preço.
              </p>
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
                    O Redmi Note 13 Pro 5G costuma ser a compra mais equilibrada
                    quando aparece em promoção. Se o Poco X6 Pro estiver bem mais
                    barato que o Poco X7 Pro, ele também pode ser uma excelente compra.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#0F3F4A]">
                    Redmi Note 14 Pro+ 5G vale a pena?
                  </h3>
                  <p className="mt-2 text-base leading-7 text-slate-700">
                    Vale para quem quer um Xiaomi mais completo, com carregamento de
                    120 W, proteção IP68 e acabamento superior. Se a diferença de preço
                    for grande, o Redmi Note 13 Pro ainda pode ser mais racional.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#0F3F4A]">
                    Poco X7 Pro ou Poco X6 Pro?
                  </h3>
                  <p className="mt-2 text-base leading-7 text-slate-700">
                    O Poco X7 Pro é a escolha mais atual e completa. O Poco X6 Pro
                    continua interessante quando aparece com preço mais agressivo.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#0F3F4A]">
                    Xiaomi é melhor que Samsung?
                  </h3>
                  <p className="mt-2 text-base leading-7 text-slate-700">
                    Xiaomi costuma entregar mais ficha técnica pelo preço. Samsung
                    costuma entregar software mais refinado, suporte mais previsível
                    e experiência mais consistente no longo prazo.
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
                Xiaomi vale muito para quem prioriza ficha técnica.
              </h2>

              <p className="mt-4 max-w-4xl text-base leading-7 text-slate-100">
                Se o objetivo for pagar menos por tela forte, carregamento rápido,
                bateria boa e desempenho acima da média, Xiaomi continua sendo uma
                das marcas mais fortes. Só vale comparar com Samsung quando software,
                suporte e câmera mais previsível forem prioridades maiores.
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
                  to="/review/redmi-note-13-pro"
                  className="block text-slate-700 hover:text-[#8B5A2B]"
                >
                  Review Redmi Note 13 Pro
                </Link>

                <Link
                  to="/review/redmi-note-14-pro-plus"
                  className="block text-slate-700 hover:text-[#8B5A2B]"
                >
                  Review Redmi Note 14 Pro+ 5G
                </Link>

                <Link
                  to="/review/poco-x7-pro"
                  className="block text-slate-700 hover:text-[#8B5A2B]"
                >
                  Review Poco X7 Pro
                </Link>

                <Link
                  to="/review/poco-x6-pro"
                  className="block text-slate-700 hover:text-[#8B5A2B]"
                >
                  Review Poco X6 Pro
                </Link>

                <Link
                  to="/comparativo/redmi-note-13-pro-vs-redmi-note-14-pro-plus"
                  className="block text-slate-700 hover:text-[#8B5A2B]"
                >
                  Redmi Note 13 Pro vs Redmi Note 14 Pro+
                </Link>

                <Link
                  to="/comparativo/poco-x6-pro-vs-poco-x7-pro"
                  className="block text-slate-700 hover:text-[#8B5A2B]"
                >
                  Poco X6 Pro vs Poco X7 Pro
                </Link>

                <Link
                  to="/comparativo/galaxy-a55-vs-redmi-note-13-pro"
                  className="block text-slate-700 hover:text-[#8B5A2B]"
                >
                  Galaxy A55 vs Redmi Note 13 Pro
                </Link>

                <Link
                  to="/melhores-celulares-custo-beneficio"
                  className="block text-slate-700 hover:text-[#8B5A2B]"
                >
                  Melhores custo-benefício
                </Link>

                <Link
                  to="/comparativos"
                  className="block text-slate-700 hover:text-[#8B5A2B]"
                >
                  Todos os comparativos
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
