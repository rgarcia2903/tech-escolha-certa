import { createFileRoute, Link } from "@tanstack/react-router";
import { AffiliateCTA } from "@/components/site/AffiliateCTA";
import { trackAffiliateClick } from "@/lib/analytics";
import { CategoryHero } from "@/components/site/CategoryHero";
import { ReviewCard } from "@/components/site/ReviewCard";
import { SectionTitle } from "@/components/site/SectionTitle";

const CANONICAL = "https://techescolhacerta.com.br/melhores-celulares-ate-2000";

export const Route = createFileRoute("/melhores-celulares-ate-2000")({
  head: () => ({
    meta: [
      {
        title:
          "Melhores celulares até R$ 2.000 em 2026: os modelos que mais valem a pena",
      },
      {
        name: "description",
        content:
          "Veja os melhores celulares até R$ 2.000 para comprar em 2026. Galaxy A35, Redmi Note 13 Pro, Poco X6 Pro e outros modelos com foco em custo-benefício.",
      },
      {
        property: "og:url",
        content: CANONICAL,
      },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
  component: MelhoresCelularesAte2000,
});

const ml = (ref: string) =>
  "https://" +
  "www.mercadolivre.com.br/social/gari4140335?matt_word=gari4140335&matt_tool=94872161&forceInApp=true&ref=" +
  ref;

const affiliateLinks = {
  galaxyA35: ml(
    "BECQRPg9JPQNeBdgSuaF279FfN690%2Ft5yaUw2qT0c4we82ydQOZHEzo8BzkPR4o5miAU3yyawzFiqQlXoP%2BupTq5odupfoPzTbiTgdbNA9cNdeA7YySNqRwXoZq7ewwuWIVsf9DD0qhxiyZkwOfSBZA%2BKLdW%2FtPVx3sv%2Fi6lx7J2RaGKQlhawxmiaFoX2KjTnjGm6y8%3D"
  ),
  redmiNote13Pro: ml(
    "BGtpHQ2Gd7gu3NJ6rm%2BaBDzcdVEsJkmjUCfPoUqsyMdISk7qaEcLyOhgcKjTflKbMEvjvhG39ybzwLuBiHmGufxF%2FFBwYPJPvak9%2FHtxxTfaEdzk4I0k92KRruIQTVCVFPTIyFEF3xDzYe3eHCv%2Bo6MC6%2FXnj3uM2pxoKFhaJpyQgtgoF2cqW2%2BOv8BcdH0IMZlkW0I%3D"
  ),
  pocoX6Pro: ml(
    "BNcRGlKdJOfT6JoH3E5fZGIfv7c24CXTT3VxCIOml%2BVEr9jpSKxFF7Hjgu%2F2OHm3qzTcjdy2zGZmVxFSJuMa%2BKFSXlB2TY0GDX7lrtHOcSbNH%2B1QkMcVpeseWTif%2FPnEXCEL14RtFO4wSnZ6svrG62ZYOPj6RGfs%2BNBdzymz8MVrIyQhE%2BWL3C6XatHNbIAwzCnEXMc%3D"
  ),
};

const ranking = [
  {
    category: "Melhor geral até R$ 2.000",
    product: "Galaxy A35 5G",
    description:
      "Excelente equilíbrio entre tela, bateria, software e confiabilidade.",
    reviewHref: "/review/galaxy-a35",
    affiliateHref: affiliateLinks.galaxyA35,
    affiliateProductName: "Galaxy A35",
  },
  {
    category: "Melhor Xiaomi até R$ 2.000",
    product: "Redmi Note 13 Pro 5G",
    description:
      "Tela AMOLED forte, carregamento rápido e ótimo conjunto geral.",
    reviewHref: "/review/redmi-note-13-pro",
    affiliateHref: affiliateLinks.redmiNote13Pro,
    affiliateProductName: "Redmi Note 13 Pro",
  },
  {
    category: "Melhor para jogos",
    product: "Poco X6 Pro",
    description:
      "Ótima performance para quem prioriza jogos e desempenho.",
    reviewHref: "/review/poco-x6-pro",
    affiliateHref: affiliateLinks.pocoX6Pro,
    affiliateProductName: "Poco X6 Pro",
  },
];

function MelhoresCelularesAte2000() {
  return (
    <main className="min-h-screen bg-[#F7F2EB] text-slate-900">
      <CategoryHero
        eyebrow="Especial até R$ 2.000"
        title="Os melhores celulares até R$ 2.000 para comprar em 2026"
        description="Selecionamos os smartphones que mais valem a pena até R$ 2.000 considerando desempenho, bateria, tela, software e experiência real de uso."
        image="/images/products/phones-hero-optimized.webp"
        aside={
          <>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
              Melhor escolha geral
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
              Galaxy A35 5G
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-200">
              Um dos celulares mais equilibrados da faixa até R$ 2.000 para
              quem quer segurança, bateria e experiência Samsung consistente.
            </p>

            <Link
              to="/review/galaxy-a35"
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
          eyebrow="Ranking até R$ 2.000"
          title="Os modelos que mais valem a pena nessa faixa"
          description="Seleção editorial focada em equilíbrio, experiência e compra inteligente."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {ranking.map((item) => (
            <article
              key={item.product}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#8B5A2B]">
                {item.category}
              </span>

              <h3 className="mt-3 text-xl font-extrabold text-[#0F3F4A]">
                {item.product}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-6 text-slate-700">
                {item.description}
              </p>

              <div className="mt-5 grid gap-2">
                <Link
                  to={item.reviewHref}
                  className="inline-flex items-center justify-center rounded-full bg-[#0F3F4A] px-4 py-2.5 text-sm font-bold text-white transition hover:brightness-110"
                >
                  Ver análise
                </Link>

                <a
                  href={item.affiliateHref}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  onClick={() =>
                    trackAffiliateClick({
                      productName: item.affiliateProductName,
                      pageType: "guia",
                    })
                  }
                  className="inline-flex items-center justify-center rounded-full bg-[#8B5A2B] px-4 py-2.5 text-sm font-bold text-white transition hover:brightness-95"
                >
                  Ver preço no Mercado Livre
                </a>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-14 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <SectionTitle
            eyebrow="Reviews recomendados"
            title="Os celulares mais fortes até R$ 2.000"
            description="Análises completas dos modelos mais equilibrados dessa faixa."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <ReviewCard
              title="Review Galaxy A35 5G"
              description="Excelente equilíbrio entre bateria, tela e experiência Samsung."
              href="/review/galaxy-a35"
              image="/images/products/galaxy-a35-optimized.webp"
              score="8.7"
              badge="Samsung"
            />

            <ReviewCard
              title="Review Redmi Note 13 Pro 5G"
              description="Ótima tela AMOLED, carregamento rápido e forte custo-benefício."
              href="/review/redmi-note-13-pro"
              image="/images/products/redmi-note-13-pro-optimized.webp"
              score="9.0"
              badge="Xiaomi"
            />

            <ReviewCard
              title="Review Poco X6 Pro"
              description="Ótima escolha para quem prioriza desempenho e jogos."
              href="/review/poco-x6-pro"
              image="/images/products/poco-x6-pro-optimized.webp"
              score="9.2"
              badge="Performance"
            />
          </div>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[1fr_340px]">
          <article className="space-y-10">
            <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
                Faixa até R$ 2.000
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#0F3F4A]">
                Hoje já é possível comprar celulares muito bons sem gastar tanto.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                A faixa até R$ 2.000 se tornou uma das mais interessantes do
                mercado. Hoje existem aparelhos com tela AMOLED, boas câmeras,
                desempenho forte e bateria confiável sem precisar investir em
                modelos premium.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                Para a maioria das pessoas, um bom intermediário já entrega
                praticamente tudo que realmente importa no uso diário.
              </p>
            </section>

            <AffiliateCTA
              title="Melhores ofertas até R$ 2.000"
              description="Veja preços, parcelamento e disponibilidade dos celulares recomendados."
              buttonText="Ver ofertas atualizadas"
              href={affiliateLinks.galaxyA35}
              highlight="Samsung • Xiaomi • Poco"
              productName="Galaxy A35"
              pageType="guia"
            />

            <section className="rounded-3xl bg-[#0F3F4A] p-8 text-white shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
                Recomendação editorial
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#F8FAFC]">
                O melhor custo-benefício está nos intermediários.
              </h2>

              <p className="mt-4 max-w-4xl text-base leading-7 text-slate-100">
                A diferença entre intermediários fortes e celulares premium
                diminuiu bastante nos últimos anos. Para a maioria das pessoas,
                essa faixa já entrega excelente experiência no dia a dia.
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
                  Melhores Samsung
                </Link>

                <Link
                  to="/melhores-celulares-xiaomi"
                  className="block text-slate-700 hover:text-[#8B5A2B]"
                >
                  Melhores Xiaomi
                </Link>

                <Link
                  to="/review/galaxy-a35"
                  className="block text-slate-700 hover:text-[#8B5A2B]"
                >
                  Review Galaxy A35
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
  







