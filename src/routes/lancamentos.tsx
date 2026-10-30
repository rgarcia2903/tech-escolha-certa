import { createFileRoute, Link } from "@tanstack/react-router";
import { FaqJsonLd } from "@/components/site/FaqJsonLd";
import { HeroPickCTA } from "@/components/site/HeroPickCTA";
import { formatBRL, goodDealFor } from "@/lib/fair-prices";
import { LAUNCHES } from "@/lib/launches";

// Índice dos lançamentos à venda. Preço-alvo editorial (GOOD_DEAL_UNDER); não exibir preço de loja.
const ITEMS = Object.values(LAUNCHES).sort((a, b) => b.sortKey.localeCompare(a.sortKey));
const PAGE_TITLE = "Lançamentos de celulares 2026: quais valem a pena";
const PAGE_DESCRIPTION = `${ITEMS.length} celulares lançados em 2025 e 2026 à venda no Brasil: veredito de cada um, até quanto pagar e onde ver o preço de hoje. Samsung, Motorola, Xiaomi e iPhone.`;

const FAQ = [
  {
    question: "Vale a pena comprar celular no lançamento?",
    answer:
      "Quase nunca pelo preço de lançamento. Os celulares costumam cair bastante nos primeiros meses. Use o preço-alvo de cada modelo como referência e espere uma promoção se estiver acima.",
  },
  {
    question: "Qual o melhor lançamento de celular de 2026?",
    answer:
      "Depende do orçamento. Até R$ 800, o Galaxy A07. Até R$ 2.000, o Moto G Max. Para jogos, o Poco X8 Pro. No iPhone, o iPhone 17.",
  },
];

export const Route = createFileRoute("/lancamentos")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
    ],
  }),
  component: Lancamentos,
});

function Lancamentos() {
  return (
    <main className="min-h-screen bg-[#F7F2EB] text-slate-900">
      <section className="bg-[#0F3F4A] text-white">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
          <nav aria-label="Navegação" className="text-sm text-slate-300">
            <Link to="/" className="underline">
              Home
            </Link>{" "}
            / Lançamentos
          </nav>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#F2C38B]">
            Lançamentos · atualizado em outubro de 2026
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight !text-white sm:text-5xl">
            Lançamentos de celulares: quais valem a pena
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
            Os celulares novos à venda no Brasil, com o nosso veredito e até quanto vale pagar em cada um. Preço de
            lançamento costuma cair rápido: compre perto do preço-alvo.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
        <ul className="grid gap-5 md:grid-cols-2">
          {ITEMS.map((l) => {
            const target = goodDealFor(l.id);
            return (
              <li key={l.id} className="flex flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B5A2B]">
                  {l.brand} · lançado em {l.launched}
                </p>
                <h2 className="mt-2 text-xl font-extrabold text-[#0F3F4A]">{l.name}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-700">{l.tagline}</p>
                {target && (
                  <p className="mt-3 text-sm text-slate-700">
                    Compre se estiver até <strong className="text-[#8B5A2B]">{formatBRL(target)}</strong>.
                  </p>
                )}
                <div className="mt-auto">
                  <HeroPickCTA productId={l.id} pageType="lancamentos" />
                  <Link
                    to={`/review/${l.id}`}
                    className="mt-3 inline-block text-sm font-semibold text-[#0F3F4A] underline"
                  >
                    {l.name} é bom? Ver o veredito
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="mt-8 rounded-2xl bg-[#FFF8EF] p-4 text-sm leading-6 text-slate-700">
          Os valores são recomendações nossas, não o preço da loja.{" "}
          <Link to="/divulgacao-de-afiliados" className="underline">
            Usamos links de afiliado
          </Link>
          . Tem um modelo mais antigo?{" "}
          <Link to="/vale-a-pena" className="font-semibold underline">
            Veja se ele ainda vale a pena
          </Link>
          .
        </p>

        <FaqJsonLd faq={FAQ} />

        <section aria-labelledby="faq" className="mt-12">
          <h2 id="faq" className="text-2xl font-bold text-[#0F3F4A]">
            Perguntas frequentes
          </h2>
          <div className="mt-5 space-y-3">
            {FAQ.map((item) => (
              <details key={item.question} className="rounded-2xl bg-white p-5 shadow-sm">
                <summary className="cursor-pointer font-semibold text-[#0F3F4A]">{item.question}</summary>
                <p className="mt-3 leading-7 text-slate-700">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
