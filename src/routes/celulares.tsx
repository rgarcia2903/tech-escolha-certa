import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight, ShieldCheck, Sparkles } from "lucide-react";
import { ComparisonCard } from "@/components/site/ComparisonCard";
import { EditorialHero } from "@/components/site/EditorialHero";
import { GuideCard } from "@/components/site/GuideCard";
import { PhoneDecisionFinder } from "@/components/site/PhoneDecisionFinder";
import { ReviewCard } from "@/components/site/ReviewCard";
import { SectionTitle } from "@/components/site/SectionTitle";

const CANONICAL = "https" + "://techescolhacerta.com.br/celulares";

export const Route = createFileRoute("/celulares")({
  head: () => ({
    meta: [
      {
        title: "Qual celular comprar em 2026? Encontre o modelo certo para você",
      },
      {
        name: "description",
        content:
          "Informe seu orçamento e prioridade para descobrir qual celular comprar em 2026. Compare Samsung, Xiaomi, Redmi, Poco e iPhone antes de decidir.",
      },
      {
        property: "og" + ":title",
        content: "Celulares — Tech Escolha Certa",
      },
      {
        property: "og" + ":description",
        content:
          "Reviews, comparativos e guias para escolher o celular certo por marca, faixa de preço e perfil de uso.",
      },
      {
        property: "og" + ":url",
        content: CANONICAL,
      },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
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
    title: "Melhores celulares custo-benefício",
    description:
      "Comece aqui se você quer comprar bem sem pagar caro por recursos que não vai usar.",
    href: "/melhores-celulares-custo-beneficio",
    highlight: "Guia principal",
  },
  {
    title: "Melhores celulares até R$ 2.000",
    description: "Os modelos mais equilibrados para quem quer comprar bem gastando menos.",
    href: "/melhores-celulares-ate-2000",
    highlight: "Melhor compra geral: Galaxy A35",
  },
  {
    title: "Melhores celulares até R$ 2.500",
    description: "Guia completo para quem busca intermediários premium em 2026.",
    href: "/melhores-celulares-ate-2500",
    highlight: "Melhor intermediário premium: Galaxy A55",
  },
  {
    title: "Melhores celulares Xiaomi",
    description: "Redmi, Poco e Xiaomi organizados por perfil: equilíbrio, jogos, câmera e preço.",
    href: "/melhores-celulares-xiaomi",
    highlight: "Redmi e Poco",
  },
  {
    title: "Melhores celulares Samsung",
    description: "Veja quais modelos Samsung realmente valem a pena atualmente.",
    href: "/melhores-celulares-samsung",
    highlight: "Hub Samsung atualizado",
  },
  {
    title: "Ofertas de celulares",
    description: "Atalho para consultar preços e disponibilidade dos modelos recomendados.",
    href: "/ofertas",
    highlight: "Preços atualizados",
  },
];

const comparisons = [
  {
    title: "Galaxy A55 vs Galaxy A35",
    description: "Qual Samsung intermediário faz mais sentido para o seu perfil?",
    href: "/comparativo-galaxy-a55-vs-galaxy-a35",
    winner: "Galaxy A55 entrega experiência mais premium.",
  },
  {
    title: "Galaxy A55 vs Redmi Note 13 Pro",
    description: "Samsung ou Xiaomi? Compare câmera, bateria, desempenho e experiência.",
    href: "/comparativo/galaxy-a55-vs-redmi-note-13-pro",
    winner: "Empate técnico dependendo do perfil.",
  },
];

const rankings = [
  {
    category: "Melhor celular premium",
    product: "Galaxy S24",
    href: "/review/galaxy-s24",
  },
  {
    category: "Melhor Samsung custo-benefício",
    product: "Galaxy A35",
    href: "/review/galaxy-a35",
  },
  {
    category: "Melhor intermediário premium",
    product: "Galaxy A55",
    href: "/review/galaxy-a55",
  },
  {
    category: "Melhor Xiaomi custo-benefício",
    product: "Redmi Note 13 Pro",
    href: "/review/redmi-note-13-pro",
  },
];

function CelularesPage() {
  return (
    <main className="min-h-screen bg-[#F7F2EB] text-slate-900">
      <EditorialHero
        eyebrow="Decisão de compra • Smartphones"
        title="Qual celular comprar? Encontre a opção certa para você"
        description="Escolha seu orçamento e o que mais importa. Você recebe uma recomendação direta, entende o principal ponto de atenção e compara a alternativa antes de comprar."
        aside={
          <>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#D7A77E] ring-1 ring-white/20">
              <Sparkles className="h-3.5 w-3.5" />
              Escolha guiada
            </div>

            <h2 className="mt-4 text-3xl font-bold text-white">Decida em três passos simples</h2>

            <ol className="mt-5 space-y-3 text-sm text-slate-200">
              {[
                "Defina quanto quer gastar",
                "Escolha sua prioridade",
                "Confira a indicação e compare",
              ].map((step, index) => (
                <li key={step} className="flex items-center gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/10 font-bold text-[#D7A77E] ring-1 ring-white/15">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>

            <a
              href="#escolha-rapida"
              className="mt-6 block rounded-full bg-[#8B5A2B] px-5 py-3 text-center text-sm font-bold text-white transition hover:brightness-95"
            >
              Começar agora
            </a>
          </>
        }
      >
        <div className="flex flex-wrap gap-3">
          <a
            href="#escolha-rapida"
            className="rounded-full bg-[#8B5A2B] px-6 py-3 text-sm font-bold text-white transition hover:brightness-95"
          >
            Encontrar meu celular
          </a>

          <Link
            to="/comparativos"
            className="rounded-full bg-white/10 px-6 py-3 text-sm font-bold text-white ring-1 ring-white/20 transition hover:bg-white/15"
          >
            Ver comparativos
          </Link>
        </div>
      </EditorialHero>

      <PhoneDecisionFinder pageType="celulares" />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-6 md:grid-cols-3 lg:px-8">
          {[
            {
              title: "Indicação direta",
              description: "Uma escolha coerente com seu orçamento e prioridade.",
            },
            {
              title: "Ponto de atenção",
              description: "O principal limite do aparelho antes de você decidir.",
            },
            {
              title: "Alternativa comparada",
              description: "O concorrente que merece ser visto antes da compra.",
            },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3 rounded-2xl bg-[#F7F2EB] p-4">
              <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#0F3F4A] text-white">
                <Check className="h-4 w-4" />
              </span>
              <div>
                <p className="font-bold text-[#0F3F4A]">{item.title}</p>
                <p className="mt-1 text-sm leading-5 text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <section>
          <SectionTitle
            eyebrow="Continue sua pesquisa"
            title="Já sabe qual caminho quer explorar?"
            description="Aprofunde a decisão por faixa de preço, marca ou custo-benefício — sem precisar recomeçar a pesquisa do zero."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
                Curadoria editorial
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#F8FAFC]">
                Nosso objetivo é simplificar a decisão de compra.
              </h2>

              <p className="mt-4 max-w-4xl text-base leading-7 text-slate-100">
                Em vez de apenas listar especificações, organizamos os smartphones por perfil de
                uso, custo-benefício e experiência real para ajudar você a comprar melhor.
              </p>
            </section>
          </article>

          <div className="space-y-6 lg:sticky lg:top-28 lg:h-fit">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
                Rankings rápidos
              </p>

              <h2 className="mt-2 text-2xl font-bold text-[#0F3F4A]">Melhores escolhas</h2>

              <div className="mt-5 space-y-3">
                {rankings.map((item) => (
                  <Link
                    key={item.category}
                    to={item.href}
                    className="group flex items-center justify-between gap-3 rounded-2xl bg-[#F7F2EB] p-4 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:ring-[#8B5A2B]/50"
                  >
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-[#8B5A2B]">
                        {item.category}
                      </span>
                      <span className="mt-1 block font-bold text-[#0F3F4A]">{item.product}</span>
                    </span>
                    <ChevronRight className="h-5 w-5 shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-[#8B5A2B]" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
                Links rápidos
              </p>

              <div className="mt-5 space-y-2 text-sm">
                <Link
                  to="/melhores-celulares-samsung"
                  className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-slate-700 transition hover:bg-[#F7F2EB] hover:text-[#8B5A2B]"
                >
                  <span>Melhores celulares Samsung</span>
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </Link>

                <Link
                  to="/melhores-celulares-xiaomi"
                  className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-slate-700 transition hover:bg-[#F7F2EB] hover:text-[#8B5A2B]"
                >
                  <span>Melhores celulares Xiaomi</span>
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </Link>

                <Link
                  to="/melhores-celulares-custo-beneficio"
                  className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-slate-700 transition hover:bg-[#F7F2EB] hover:text-[#8B5A2B]"
                >
                  <span>Melhores custo-benefício</span>
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </Link>

                <Link
                  to="/comparativos"
                  className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-slate-700 transition hover:bg-[#F7F2EB] hover:text-[#8B5A2B]"
                >
                  <span>Todos os comparativos</span>
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            <div className="rounded-3xl bg-[#0F3F4A] p-6 text-white shadow-sm">
              <ShieldCheck className="h-6 w-6 text-[#D7A77E]" />
              <p className="mt-4 text-lg font-bold">Decida com contexto</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">
                Preço muda rápido. Confira a análise e o concorrente indicado antes de abrir a
                oferta.
              </p>
              <a
                href="#escolha-rapida"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#D7A77E] transition hover:text-white"
              >
                Refazer escolha <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
