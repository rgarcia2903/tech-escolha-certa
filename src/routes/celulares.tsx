import { createFileRoute, Link } from "@tanstack/react-router";
import { ComparisonCard } from "@/components/site/ComparisonCard";
import { EditorialHero } from "@/components/site/EditorialHero";
import { GuideCard } from "@/components/site/GuideCard";
import { ReviewCard } from "@/components/site/ReviewCard";
import { SectionTitle } from "@/components/site/SectionTitle";

export const Route = createFileRoute("/celulares")({
  component: CelularesPage,
});

const reviews = [
  {
    title: "Review Galaxy A35 5G",
    description:
      "Um dos melhores celulares Samsung para quem quer equilíbrio entre preço, tela e bateria.",
    href: "/review/galaxy-a35",
    score: "8.7",
    badge: "Samsung",
  },
  {
    title: "Review Galaxy A55 5G",
    description:
      "Construção premium, boa autonomia e experiência refinada para quem quer subir de categoria.",
    href: "/review/galaxy-a55",
    score: "9.1",
    badge: "Premium",
  },
  {
    title: "Review Redmi Note 13 Pro 5G",
    description:
      "Tela forte, ótimo desempenho e carregamento rápido para quem busca custo-benefício.",
    href: "/review/redmi-note-13-pro",
    score: "9.0",
    badge: "Xiaomi",
  },
  {
    title: "Review Galaxy S24",
    description:
      "O principal topo de linha compacto da Samsung com foco em IA e experiência premium.",
    href: "/review/galaxy-s24",
    score: "9.6",
    badge: "Flagship",
  },
];

const guides = [
  {
    title: "Melhores celulares até R$ 2.000",
    description:
      "Os modelos mais equilibrados para quem quer comprar bem gastando menos.",
    href: "/melhores-celulares-ate-2000",
    highlight: "Melhor compra geral: Galaxy A35",
  },
  {
    title: "Melhores celulares até R$ 2.500",
    description:
      "Guia completo para quem busca intermediários premium em 2026.",
    href: "/melhores-celulares-ate-2500",
    highlight: "Melhor intermediário premium: Galaxy A55",
  },
  {
    title: "Melhores celulares Samsung",
    description:
      "Veja quais modelos Samsung realmente valem a pena atualmente.",
    href: "/melhores-celulares-samsung",
    highlight: "Hub Samsung atualizado",
  },
];

const comparisons = [
  {
    title: "Galaxy A55 vs Galaxy A35",
    description:
      "Qual Samsung intermediário faz mais sentido para o seu perfil?",
    href: "/comparativo-galaxy-a55-vs-galaxy-a35",
    winner: "Galaxy A55 entrega experiência mais premium.",
  },
  {
    title: "Galaxy A55 vs Redmi Note 13 Pro",
    description:
      "Samsung ou Xiaomi? Compare câmera, bateria, desempenho e experiência.",
    href: "/comparativo/galaxy-a55-vs-redmi-note-13-pro",
    winner: "Empate técnico dependendo do perfil.",
  },
];

const rankings = [
  ["Melhor celular premium", "Galaxy S24"],
  ["Melhor Samsung custo-benefício", "Galaxy A35"],
  ["Melhor intermediário premium", "Galaxy A55"],
  ["Melhor Xiaomi custo-benefício", "Redmi Note 13 Pro"],
];

function CelularesPage() {
  return (
    <main className="min-h-screen bg-[#F7F2EB] text-slate-900">
      <EditorialHero
        eyebrow="Categoria • Smartphones"
        title="Reviews, comparativos e guias para escolher o celular certo"
        description="Análises editoriais com foco em custo-benefício, experiência real, bateria, desempenho, câmera e decisão de compra."
        aside={
          <>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9A066]">
              Guia principal
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
              Melhores celulares até R$ 2.500
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-200">
              Nossa seleção mais equilibrada para quem quer comprar um celular forte sem
              entrar na faixa premium mais cara.
            </p>

            <Link
              to="/melhores-celulares-ate-2500"
              className="mt-6 block rounded-full bg-[#B9774B] px-5 py-3 text-center text-sm font-bold text-white transition hover:brightness-95"
            >
              Ver guia completo
            </Link>
          </>
        }
      >
        <div className="flex flex-wrap gap-3">
          <Link
            to="/melhores-celulares-samsung"
            className="rounded-full bg-[#B9774B] px-6 py-3 text-sm font-bold text-white transition hover:brightness-95"
          >
            Ver melhores Samsung
          </Link>

          <Link
            to="/comparativos"
            className="rounded-full bg-white/10 px-6 py-3 text-sm font-bold text-white ring-1 ring-white/20 transition hover:bg-white/15"
          >
            Ver comparativos
          </Link>
        </div>
      </EditorialHero>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <section>
          <SectionTitle
            eyebrow="Guias de compra"
            title="Comece pelos melhores guias"
            description="Seleções organizadas por faixa de preço, perfil de uso e custo-benefício."
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {guides.map((guide) => (
              <GuideCard key={guide.href} {...guide} />
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[1fr_360px]">
          <article className="space-y-10">
            <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <SectionTitle
                eyebrow="Reviews"
                title="Análises recentes de smartphones"
                description="Reviews editoriais focados em experiência prática e decisão de compra."
              />

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {reviews.map((review) => (
                  <ReviewCard key={review.href} {...review} />
                ))}
              </div>
            </section>

            <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <SectionTitle
                eyebrow="Comparativos"
                title="Compare os modelos antes de comprar"
                description="Comparações completas entre celulares concorrentes."
              />

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {comparisons.map((comparison) => (
                  <ComparisonCard key={comparison.href} {...comparison} />
                ))}
              </div>
            </section>

            <section className="rounded-3xl bg-[#0F3F4A] p-8 text-white shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9A066]">
                Curadoria editorial
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#F8FAFC]">
                Nosso objetivo é simplificar a decisão de compra.
              </h2>

              <p className="mt-4 max-w-4xl text-base leading-7 text-slate-100">
                Em vez de apenas listar especificações, organizamos os smartphones por
                perfil de uso, custo-benefício e experiência real para ajudar você a
                comprar melhor.
              </p>
            </section>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:h-fit">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B9774B]">
                Rankings rápidos
              </p>

              <h2 className="mt-2 text-2xl font-bold text-[#0F3F4A]">
                Melhores escolhas
              </h2>

              <div className="mt-5 space-y-3">
                {rankings.map(([category, product]) => (
                  <div
                    key={category}
                    className="rounded-2xl bg-[#F7F2EB] p-4 ring-1 ring-slate-200"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#B9774B]">
                      {category}
                    </p>

                    <p className="mt-1 font-bold text-[#0F3F4A]">
                      {product}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B9774B]">
                Links rápidos
              </p>

              <div className="mt-5 space-y-3 text-sm">
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
