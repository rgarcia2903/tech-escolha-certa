import { EditorialSelection } from "@/components/site/EditorialSelection";
import {
  GALAXY_A36_AFFILIATE_URL,
  MOTO_G_MAX_AFFILIATE_URL,
  REDMI_NOTE_15_5G_AFFILIATE_URL,
} from "@/lib/affiliate-links";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AffiliateCTA } from "@/components/site/AffiliateCTA";
import { AffiliateRedirectNotice } from "@/components/site/AffiliateRedirectNotice";
import { MobilePurchaseBar } from "@/components/site/MobilePurchaseBar";
import { trackAffiliateClick } from "@/lib/analytics";
import { CategoryHero } from "@/components/site/CategoryHero";
import { ReviewCard } from "@/components/site/ReviewCard";
import { SectionTitle } from "@/components/site/SectionTitle";

const CANONICAL = "https://techescolhacerta.com.br/melhores-celulares-ate-2000";

export const Route = createFileRoute("/melhores-celulares-ate-2000")({
  head: () => ({
    meta: [
      {
        title: "Melhores celulares até R$ 2.000 em 2026: Galaxy A36, Moto G Max e Redmi",
      },
      {
        name: "description",
        content:
          "Os melhores celulares até R$ 2.000 em 2026: Galaxy A36, Moto G Max e Redmi Note 15 5G. Veja qual combina com você e até quanto vale pagar em cada um.",
      },
      {
        property: "og:url",
        content: CANONICAL,
      },
    ],
  }),
  component: MelhoresCelularesAte2000,
});

const affiliateLinks = {
  galaxyA36: GALAXY_A36_AFFILIATE_URL,
  motoGMax: MOTO_G_MAX_AFFILIATE_URL,
  redmiNote15: REDMI_NOTE_15_5G_AFFILIATE_URL,
};

const ranking = [
  {
    category: "O mais equilibrado",
    product: "Galaxy A36 5G",
    description: "Snapdragon 6 Gen 3, tela AMOLED de 120 Hz, IP67 e atualizações até 2031. Compre até R$ 1.350.",
    reviewHref: "/review/galaxy-a36-5g",
    affiliateHref: affiliateLinks.galaxyA36,
    affiliateProductName: "Galaxy A36 5G",
  },
  {
    category: "Tela e câmera",
    product: "Moto G Max",
    description: "Tela pOLED de 6,8\" com 5.000 nits, câmera de 200 MP com OIS e IP68/IP69. Compre até R$ 1.600.",
    reviewHref: "/review/moto-g-max",
    affiliateHref: affiliateLinks.motoGMax,
    affiliateProductName: "Moto G Max",
  },
  {
    category: "Bateria",
    product: "Redmi Note 15 5G",
    description: "5.520 mAh, tela AMOLED de 120 Hz e carregador na caixa. Compre até R$ 1.800.",
    reviewHref: "/review/redmi-note-15-5g",
    affiliateHref: affiliateLinks.redmiNote15,
    affiliateProductName: "Redmi Note 15 5G",
  },
];

function MelhoresCelularesAte2000() {
  return (
    <main className="min-h-screen bg-[#F7F2EB] text-slate-900">
      <CategoryHero
        eyebrow="Especial até R$ 2.000"
        title="Celulares até R$ 2.000: como comparar em 2026"
        description="Os celulares atuais que mais valem a pena nessa faixa, com até quanto pagar em cada um. Preço muda todo dia: confira na loja."
        image="/images/products/phones-hero-optimized.webp"
        aside={
          <>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
              O mais equilibrado da faixa
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">Galaxy A36 5G</h2>

            <p className="mt-4 text-sm leading-6 text-slate-200">
              Tela AMOLED de 120 Hz, Snapdragon 6 Gen 3 e atualizações até 2031. Vale a pena até
              R$ 1.350.
            </p>

            <a
              href={GALAXY_A36_AFFILIATE_URL}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              onClick={() =>
                trackAffiliateClick({
                  productName: "Galaxy A36 5G",
                  pageType: "guia",
                  ctaPlacement: "hero",
                })
              }
              className="mt-6 block rounded-full bg-[#8B5A2B] px-5 py-3 text-center text-sm font-bold text-white transition hover:brightness-95"
            >
              Ver preço do Galaxy A36
            </a>

            <AffiliateRedirectNotice className="mt-3" tone="dark" />

            <Link
              to="/review/galaxy-a36-5g"
              className="mt-3 block text-center text-sm font-semibold text-slate-200 underline decoration-white/30 underline-offset-4 transition hover:text-white"
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
      <EditorialSelection selection="ate-2000" />

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

              <h3 className="mt-3 text-xl font-extrabold text-[#0F3F4A]">{item.product}</h3>

              <p className="mt-3 flex-1 text-sm leading-6 text-slate-700">{item.description}</p>

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
                      ctaPlacement: "ranking",
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
              title="Review Galaxy A36 5G"
              description="O Samsung mais equilibrado até R$ 1.500, com atualizações até 2031."
              href="/review/galaxy-a36-5g"
              image="/images/products/licensed/galaxy-a36-5g.webp"
              badge="Samsung"
            />

            <ReviewCard
              title="Moto G Max é bom?"
              description="A tela mais brilhante e a câmera de 200 MP até R$ 1.600."
              href="/review/moto-g-max"
              badge="Motorola"
            />

            <ReviewCard
              title="Review Redmi Note 15 5G"
              description="Bateria de 5.520 mAh e tela AMOLED de 120 Hz."
              href="/review/redmi-note-15-5g"
              image="/images/products/redmi-note-15-5g-optimized.webp"
              badge="Xiaomi"
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
                A faixa até R$ 2.000 se tornou uma das mais interessantes do mercado. Hoje existem
                aparelhos com tela AMOLED, boas câmeras, desempenho forte e bateria confiável sem
                precisar investir em modelos premium.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                Para a maioria das pessoas, um bom intermediário já entrega praticamente tudo que
                realmente importa no uso diário.
              </p>
            </section>

            <AffiliateCTA
              title="Melhores ofertas até R$ 2.000"
              description="Veja preços, parcelamento e disponibilidade dos celulares recomendados."
              buttonText="Ver Galaxy A36 no Mercado Livre"
              href={affiliateLinks.galaxyA36}
              highlight="Samsung • Motorola • Xiaomi"
              productName="Galaxy A36 5G"
              pageType="guia"
            />

            <section className="rounded-3xl bg-[#0F3F4A] p-8 text-white shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D7A77E]">
                Recomendação editorial
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#F8FAFC]">
                O melhor custo-benefício está nos intermediários.
              </h2>

              <p className="mt-4 max-w-4xl text-base leading-7 text-slate-100">
                A diferença entre intermediários fortes e celulares premium diminuiu bastante nos
                últimos anos. Para a maioria das pessoas, essa faixa já entrega excelente
                experiência no dia a dia.
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
                  to="/comparativo/galaxy-a36-vs-moto-g86"
                  className="block text-slate-700 hover:text-[#8B5A2B]"
                >
                  Galaxy A36 ou Moto G86?
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>

      <MobilePurchaseBar
        options={[
          {
            productName: "Galaxy A36 5G",
            href: GALAXY_A36_AFFILIATE_URL,
            label: "Ver preço",
            primary: true,
          },
        ]}
        pageType="guia"
        title="Galaxy A36 5G"
        eyebrow="O mais equilibrado · até R$ 1.350"
      />
    </main>
  );
}
