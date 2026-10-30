import { getSocialImage } from "@/lib/product-media";
import { EditorialSelection } from "@/components/site/EditorialSelection";
import {
  GALAXY_A57_AFFILIATE_URL,
  MOTO_G86_AFFILIATE_URL,
  POCO_X8_PRO_AFFILIATE_URL,
} from "@/lib/affiliate-links";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AffiliateCTA } from "@/components/site/AffiliateCTA";
import { AffiliateRedirectNotice } from "@/components/site/AffiliateRedirectNotice";
import { MobilePurchaseBar } from "@/components/site/MobilePurchaseBar";
import { trackAffiliateClick } from "@/lib/analytics";
import { CategoryHero } from "@/components/site/CategoryHero";
import { ComparisonCard } from "@/components/site/ComparisonCard";
import { ReviewCard } from "@/components/site/ReviewCard";
import { SectionTitle } from "@/components/site/SectionTitle";

const CANONICAL = "https://techescolhacerta.com.br/melhores-celulares-ate-2500";
const HERO_IMG = "https://techescolhacerta.com.br/images/products/phones-hero-optimized.webp";
const PAGE_TITLE = "Celulares até R$ 2.500 em 2026: como comparar";
const PAGE_DESCRIPTION =
  "Os melhores celulares até R$ 2.500 em 2026: Galaxy A57, Moto G86 e Poco X8 Pro. Veja qual é melhor para câmera, jogos ou uso equilibrado e até quanto pagar.";

export const Route = createFileRoute("/melhores-celulares-ate-2500")({
  head: () => ({
    meta: [
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
      {
        title: PAGE_TITLE,
      },
      {
        name: "description",
        content: PAGE_DESCRIPTION,
      },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: CANONICAL },
      { property: "og:image", content: getSocialImage(HERO_IMG) },
      { property: "twitter:image", content: getSocialImage(HERO_IMG) },
    ],
  }),
  component: MelhoresCelularesAte2500,
});

const affiliateLinks = {
  galaxyA57: GALAXY_A57_AFFILIATE_URL,
  motoG86: MOTO_G86_AFFILIATE_URL,
  pocoX8Pro: POCO_X8_PRO_AFFILIATE_URL,
};

const ranking = [
  {
    category: "Samsung mais completo",
    product: "Galaxy A57 5G",
    description: "Sucessor do Galaxy A55: IP68, Exynos 1680 e seis anos de atualizações.",
    reviewHref: "/review/galaxy-a57-5g",
    affiliateHref: affiliateLinks.galaxyA57,
    affiliateProductName: "Galaxy A57 5G",
  },
  {
    category: "Tela e resistência",
    product: "Moto G86 5G",
    description: "Tela pOLED 1.5K com 4.500 nits, IP68/IP69 e carregador na caixa. Compre até R$ 1.900.",
    reviewHref: "/review/moto-g86-5g",
    affiliateHref: affiliateLinks.motoG86,
    affiliateProductName: "Moto G86 5G",
  },
  {
    category: "Jogos e desempenho",
    product: "Poco X8 Pro",
    description: "Dimensity 8500 Ultra, 6.500 mAh e recarga de 100 W: o mais forte para jogos até R$ 2.500.",
    reviewHref: "/review/poco-x8-pro",
    affiliateHref: affiliateLinks.pocoX8Pro,
    affiliateProductName: "POCO X8 Pro",
  },
];

function MelhoresCelularesAte2500() {
  return (
    <main className="min-h-screen bg-[#F7F2EB] text-slate-900">
      <CategoryHero
        eyebrow="Especial até R$ 2.500"
        title="Celulares até R$ 2.500: como comparar em 2026"
        description="Compare candidatos por perfil e referências de gerações anteriores. Preço e disponibilidade no orçamento precisam ser confirmados na loja."
        image="/images/products/phones-hero-optimized.webp"
        aside={
          <>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
              Alternativa para uso cotidiano
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">Galaxy A57 5G</h2>

            <p className="mt-4 text-sm leading-6 text-slate-200">
              O Samsung intermediário mais completo de 2026, sucessor do Galaxy A55: IP68, Exynos
              1680 e seis anos de atualizações.
            </p>

            <a
              href={GALAXY_A57_AFFILIATE_URL}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              onClick={() =>
                trackAffiliateClick({
                  productName: "Galaxy A57 5G",
                  pageType: "guia",
                  ctaPlacement: "hero",
                })
              }
              className="mt-6 block rounded-full bg-[#8B5A2B] px-5 py-3 text-center text-sm font-bold text-white transition hover:brightness-95"
            >
              Ver preço do Galaxy A57
            </a>

            <AffiliateRedirectNotice className="mt-3" tone="dark" />

            <Link
              to="/review/galaxy-a57-5g"
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
          to="/melhores-celulares-ate-2000"
          className="rounded-full bg-white/10 px-6 py-3 text-sm font-bold text-white ring-1 ring-white/20 transition hover:bg-white/15"
        >
          Ver até R$ 2.000
        </Link>
      </CategoryHero>
      <EditorialSelection selection="ate-2500" />

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <SectionTitle
          eyebrow="Ranking até R$ 2.500"
          title="Os modelos que mais valem a pena nessa faixa"
          description="Seleção editorial focada em experiência premium, longevidade e compra inteligente."
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
            title="Os celulares mais fortes até R$ 2.500"
            description="Análises completas dos aparelhos mais equilibrados da categoria."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <ReviewCard
              title="Review Galaxy A57 5G"
              description="O Samsung intermediário mais completo de 2026, sucessor do A55."
              href="/review/galaxy-a57-5g"
              image="/images/products/licensed/galaxy-a57-5g.webp"
              badge="Samsung"
            />

            <ReviewCard
              title="Review Moto G86 5G"
              description="A tela mais brilhante da faixa, IP68/IP69 e carregador na caixa."
              href="/review/moto-g86-5g"
              image="/images/products/moto-g86-optimized.webp"
              badge="Motorola"
            />

            <ReviewCard
              title="Poco X8 Pro é bom?"
              description="O celular mais forte para jogos até R$ 2.500."
              href="/review/poco-x8-pro"
              badge="Jogos"
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
              title="Galaxy A57 vs Galaxy A36"
              description="Quando vale pagar mais pelo A57 e quando o A36 basta."
              href="/comparativo/galaxy-a57-vs-galaxy-a36"
              image="/images/products/licensed/galaxy-a57-5g.webp"
              winner="A57 se a diferença for de até uns R$ 500; senão, o A36."
            />

            <ComparisonCard
              title="Poco X8 Pro vs Poco X7 Pro"
              description="Vale pagar mais pelo modelo novo para jogar?"
              href="/comparativo/poco-x8-pro-vs-poco-x7-pro"
              image="/images/products/poco-x7-pro-optimized.webp"
              winner="X8 Pro para o máximo desempenho; X7 Pro para economizar."
            />
          </div>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[1fr_340px]">
          <article className="space-y-10">
            <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
                Faixa até R$ 2.500
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#0F3F4A]">
                Aqui começam os intermediários premium de verdade.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                A faixa até R$ 2.500 concentra alguns dos celulares mais interessantes do mercado.
                Aqui já aparecem modelos com acabamento premium, telas excelentes, boas câmeras e
                experiência muito próxima de aparelhos topo de linha.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                Para muitas pessoas, investir nessa faixa faz mais sentido do que pagar muito mais
                caro em um flagship.
              </p>
            </section>

            <AffiliateCTA
              title="Melhores ofertas até R$ 2.500"
              description="Veja preços, parcelamento e disponibilidade dos celulares recomendados."
              buttonText="Ver Galaxy A57 no Mercado Livre"
              href={affiliateLinks.galaxyA57}
              highlight="Samsung • Xiaomi • Poco"
              productName="Galaxy A57 5G"
              pageType="guia"
            />

            <section className="rounded-3xl bg-[#0F3F4A] p-8 text-white shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D7A77E]">
                Recomendação editorial
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#F8FAFC]">
                O melhor equilíbrio do mercado está nessa faixa.
              </h2>

              <p className="mt-4 max-w-4xl text-base leading-7 text-slate-100">
                Até R$ 2.500 já é possível comprar celulares extremamente fortes, com ótima
                experiência, excelente tela, boas câmeras e vida útil longa sem precisar entrar no
                segmento premium mais caro.
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
                  to="/melhores-celulares-ate-2000"
                  className="block text-slate-700 hover:text-[#8B5A2B]"
                >
                  Melhores até R$ 2.000
                </Link>

                <Link to="/review/galaxy-a57-5g" className="block text-slate-700 hover:text-[#8B5A2B]">
                  Review Galaxy A57
                </Link>

                <Link
                  to="/melhor-celular-para-jogos-pesados"
                  className="block text-slate-700 hover:text-[#8B5A2B]"
                >
                  Melhor celular para jogos pesados
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>

      <MobilePurchaseBar
        options={[
          {
            productName: "Galaxy A57 5G",
            href: GALAXY_A57_AFFILIATE_URL,
            label: "Ver preço",
            primary: true,
          },
        ]}
        pageType="guia"
        title="Galaxy A57 5G"
        eyebrow="Sucessor do A55 · preço a conferir"
      />
    </main>
  );
}
