import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, ShieldCheck, Smartphone, Star } from "lucide-react";

import { AffiliateCTA } from "@/components/site/AffiliateCTA";
import { CategoryHero } from "@/components/site/CategoryHero";
import { ComparisonCard } from "@/components/site/ComparisonCard";
import { ReviewCard } from "@/components/site/ReviewCard";
import { SectionTitle } from "@/components/site/SectionTitle";
import { TopPickCard } from "@/components/site/TopPickCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Tech Escolha Certa | Reviews, comparativos e melhores celulares de 2026",
      },
      {
        name: "description",
        content:
          "Portal especializado em tecnologia com reviews, comparativos, rankings e recomendações honestas para comprar melhor em 2026.",
      },
    ],
  }),
  component: HomePage,
});

const featuredPicks = [
  {
    category: "Melhor Samsung",
    product: "Galaxy A55 5G",
    description:
      "Excelente equilíbrio entre câmera, bateria, tela e experiência premium.",
  },
  {
    category: "Melhor Xiaomi",
    product: "Redmi Note 13 Pro 5G",
    description:
      "Tela AMOLED forte, carregamento rápido e ótimo custo-benefício.",
  },
  {
    category: "Melhor performance",
    product: "Poco X6 Pro",
    description:
      "Excelente escolha para quem prioriza desempenho e jogos.",
  },
];

function HomePage() {
  return (
    <main className="min-h-screen bg-[#F7F2EB] text-slate-900">
      <CategoryHero
        eyebrow="Portal editorial de tecnologia"
        title="Compre tecnologia do jeito certo."
        description="Reviews, comparativos e recomendações editoriais para ajudar você a escolher celulares, notebooks e acessórios sem cair em marketing vazio."
        image="/images/products/phones-hero-optimized.webp"
        aside={
          <>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#D9A066] ring-1 ring-white/20">
              <ShieldCheck className="h-3.5 w-3.5" />
              Escolha editorial
            </div>

            <h2 className="mt-4 text-3xl font-bold text-white">
              Galaxy A55 5G
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-200">
              O celular mais equilibrado atualmente para quem quer boa câmera,
              tela forte, bateria confiável e experiência premium sem pagar
              preço de flagship.
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
          Ver recomendações
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
          eyebrow="Escolhas editoriais"
          title="Os celulares que mais valem a pena hoje"
          description="Seleção editorial focada em experiência real, custo-benefício e longevidade."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {featuredPicks.map((item) => (
            <TopPickCard
              key={item.product}
              category={item.category}
              product={item.product}
              description={item.description}
            />
          ))}
        </div>

        <section className="mt-14">
          <SectionTitle
            eyebrow="Categorias principais"
            title="Explore por categoria"
            description="Encontre rapidamente o tipo de smartphone ideal para seu perfil."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <CategoryLink title="Custo-benefício" href="/melhores-celulares-custo-beneficio" />
            <CategoryLink title="Samsung" href="/melhores-celulares-samsung" />
            <CategoryLink title="Xiaomi" href="/melhores-celulares-xiaomi" />
            <CategoryLink title="Até R$ 2.500" href="/melhores-celulares-ate-2500" />
          </div>
        </section>

        <section className="mt-14 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <SectionTitle
            eyebrow="Reviews em destaque"
            title="Análises mais acessadas"
            description="Reviews completos dos aparelhos mais procurados atualmente."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <ReviewCard
              title="Review Galaxy A55 5G"
              description="O Samsung mais equilibrado para a maioria das pessoas."
              href="/review/galaxy-a55"
              image="/images/products/galaxy-a55-optimized.webp"
              score="9.0"
              badge="Samsung"
            />

            <ReviewCard
              title="Review Redmi Note 13 Pro 5G"
              description="Excelente tela AMOLED e carregamento rápido."
              href="/review/redmi-note-13-pro"
              image="/images/products/redmi-note-13-pro-optimized.webp"
              score="9.0"
              badge="Xiaomi"
            />

            <ReviewCard
              title="Review Galaxy S24"
              description="Experiência flagship compacta e premium."
              href="/review/galaxy-s24"
              image="/images/products/galaxy-s24-optimized.webp"
              score="9.6"
              badge="Premium"
            />
          </div>
        </section>

        <section className="mt-14 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <SectionTitle
            eyebrow="Comparativos"
            title="As comparações mais importantes"
            description="Descubra qual aparelho realmente faz mais sentido para seu uso."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <ComparisonCard
              title="Galaxy A55 vs Redmi Note 13 Pro"
              description="Samsung ou Xiaomi? Compare software, câmera, bateria e custo-benefício."
              href="/comparativo/galaxy-a55-vs-redmi-note-13-pro"
              image="/images/products/redmi-note-13-pro-optimized.webp"
              winner="Galaxy A55 para experiência premium; Redmi para hardware."
            />

            <ComparisonCard
              title="Galaxy A55 vs Galaxy A35"
              description="Vale pagar mais pelo A55 ou o A35 já resolve?"
              href="/comparativo-galaxy-a55-vs-galaxy-a35"
              image="/images/products/galaxy-a35-optimized.webp"
              winner="A55 para premium; A35 para economia."
            />
          </div>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[1fr_340px]">
          <article className="space-y-10">
            <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#F7F2EB] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#B9774B] ring-1 ring-slate-200">
                <Smartphone className="h-3.5 w-3.5" />
                Guia editorial
              </div>

              <h2 className="mt-5 text-3xl font-bold text-[#0F3F4A]">
                Nosso foco é ajudar você a comprar melhor.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                O mercado de smartphones ficou extremamente confuso. Existem
                dezenas de modelos parecidos, marketing exagerado e fichas
                técnicas difíceis de interpretar.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                O Tech Escolha Certa simplifica isso com reviews claros,
                comparativos honestos e recomendações focadas em experiência real.
              </p>
            </section>

            <AffiliateCTA
              title="Ofertas atualizadas dos celulares recomendados"
              description="Veja preço, parcelamento e disponibilidade dos modelos mais recomendados do momento."
              buttonText="Ver ofertas atualizadas"
              href="https://www.mercadolivre.com.br/samsung-galaxy-a54-5g-256gb-preto-8gb-ram/p/MLB23138587?pdp_filters=item_id%3AMLB4713006737&matt_tool=38524122#origin=share&sid=share&wid=MLB4713006737&action=copy"
              highlight="Samsung • Xiaomi • Poco • Motorola"
            />

            <section className="rounded-3xl bg-[#0F3F4A] p-8 text-white shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#D9A066] ring-1 ring-white/20">
                <Star className="h-3.5 w-3.5" />
                Filosofia editorial
              </div>

              <h2 className="mt-5 text-3xl font-bold text-[#F8FAFC]">
                Nem sempre o celular mais caro é o melhor para você.
              </h2>

              <p className="mt-4 max-w-4xl text-base leading-7 text-slate-100">
                Nosso foco é encontrar os aparelhos que realmente fazem sentido
                para cada perfil e faixa de preço, equilibrando experiência,
                longevidade e custo-benefício.
              </p>
            </section>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:h-fit">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B9774B]">
                Links rápidos
              </p>

              <div className="mt-5 space-y-3 text-sm">
                <SidebarLink title="Melhores custo-benefício" href="/melhores-celulares-custo-beneficio" />
                <SidebarLink title="Melhores Samsung" href="/melhores-celulares-samsung" />
                <SidebarLink title="Melhores Xiaomi" href="/melhores-celulares-xiaomi" />
                <SidebarLink title="Melhores até R$ 2.500" href="/melhores-celulares-ate-2500" />
              </div>
            </div>
          </aside>
        </section>
      </section>
    </main>
  );
}

function CategoryLink({ title, href }: { title: string; href: string }) {
  return (
    <Link
      to={href}
      className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-[#0F3F4A]">{title}</p>

          <p className="mt-2 text-sm text-slate-600">
            Ver recomendações editoriais
          </p>
        </div>

        <div className="rounded-full bg-[#F7F2EB] p-3 text-[#B9774B] ring-1 ring-slate-200">
          <ChevronRight className="h-5 w-5 transition group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

function SidebarLink({ title, href }: { title: string; href: string }) {
  return (
    <Link
      to={href}
      className="flex items-center justify-between rounded-2xl bg-[#F7F2EB] px-4 py-3 text-slate-700 ring-1 ring-slate-200 transition hover:text-[#B9774B]"
    >
      <span>{title}</span>
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}


