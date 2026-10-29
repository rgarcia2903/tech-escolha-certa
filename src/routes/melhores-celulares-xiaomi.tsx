import { FaqJsonLd } from "@/components/site/FaqJsonLd";
import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, CircleAlert } from "lucide-react";
import { ProductPurchaseOptions } from "@/components/site/ProductPurchaseOptions";
import { HeroPickCTA } from "@/components/site/HeroPickCTA";
import { FAIR_PRICES, formatBRL, goodDealFor, type FairPriceId } from "@/lib/fair-prices";

// Fichas: reviews do site (fontes oficiais citadas em cada um). Preços-alvo editoriais em
// src/lib/fair-prices.ts; não exibir preço de loja (política da Amazon).
const PAGE_TITLE = "Melhor celular Xiaomi em 2026: qual comprar (Redmi e Poco)";
const PAGE_DESCRIPTION =
  "Qual o melhor celular Xiaomi em 2026? Redmi Note 15 5G, Poco X8 Pro ou Redmi Note 14 Pro+: veja qual comprar para cada perfil, até quanto pagar e quais modelos antigos evitar.";

export const Route = createFileRoute("/melhores-celulares-xiaomi")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
    ],
  }),
  component: MelhoresCelularesXiaomi,
});

const PICKS = [
  {
    id: "redmi-note-15-5g",
    badge: "Melhor para a maioria",
    name: "Redmi Note 15 5G",
    version: "256 GB, 8 GB de RAM",
    summary:
      "Bateria de 5.520 mAh com carregador de 45 W na caixa, tela AMOLED de 120 Hz com até 3.200 nits, Snapdragon 6 Gen 3, câmera de 108 MP e cartão de memória.",
    forWho: "Quem quer um Xiaomi equilibrado para o dia todo longe da tomada, gastando menos de R$ 2.000.",
    watchOut: "Não confunda com o Redmi Note 15 4G, que tem outro processador. Confira \"5G\" no anúncio.",
    reviewPath: "/review/redmi-note-15-5g",
  },
  {
    id: "poco-x8-pro",
    badge: "Melhor para jogos",
    name: "Poco X8 Pro",
    version: "256 GB, 8 GB de RAM",
    summary:
      "Dimensity 8500 Ultra, o processador mais forte desta lista, com tela AMOLED 1.5K de 120 Hz, bateria de 6.500 mAh, recarga de 100 W e IP68.",
    forWho: "Quem joga títulos pesados ou quer o máximo de desempenho por até uns R$ 2.450.",
    watchOut: "As câmeras não são o foco. Para fotos, o Redmi Note 14 Pro+ é melhor.",
    reviewPath: "/comparativo/poco-x8-pro-vs-poco-x7-pro",
  },
  {
    id: "redmi-note-14-pro-plus",
    badge: "Melhor câmera e recarga",
    name: "Redmi Note 14 Pro+",
    version: "256 GB, 8 GB de RAM",
    summary:
      "Câmera principal de 200 MP com estabilização óptica, recarga de 120 W, tela AMOLED 1.5K de 120 Hz, Snapdragon 7s Gen 3 e IP68.",
    forWho: "Quem tira muitas fotos e quer carregar o celular em poucos minutos.",
    watchOut: "As câmeras secundárias são simples. Compare com o Redmi Note 15 5G se a diferença de preço for grande.",
    reviewPath: "/review/redmi-note-14-pro-plus",
  },
];

const TABLE: [string, string, string, string][] = [
  [
    "Compre se estiver até",
    formatBRL(goodDealFor("redmi-note-15-5g")!),
    formatBRL(goodDealFor("poco-x8-pro")!),
    formatBRL(goodDealFor("redmi-note-14-pro-plus")!),
  ],
  ["Processador", "Snapdragon 6 Gen 3", "Dimensity 8500 Ultra", "Snapdragon 7s Gen 3"],
  ["Tela", "AMOLED 120 Hz", "AMOLED 1.5K 120 Hz", "AMOLED 1.5K 120 Hz"],
  ["Câmera principal", "108 MP", "50 MP com OIS", "200 MP com OIS"],
  ["Bateria", "5.520 mAh", "6.500 mAh", "5.110 mAh"],
  ["Recarga", "45 W (na caixa)", "100 W", "120 W"],
  ["Proteção", "IP65", "IP68", "IP68"],
];

const OLDER: { id: FairPriceId; reviewPath: string }[] = [
  { id: "poco-x7-pro", reviewPath: "/review/poco-x7-pro" },
  { id: "poco-x6-pro", reviewPath: "/review/poco-x6-pro" },
  { id: "poco-x6-5g", reviewPath: "/review/poco-x6" },
  { id: "redmi-note-13-pro", reviewPath: "/review/redmi-note-13-pro" },
  { id: "redmi-note-13-5g", reviewPath: "/review/redmi-note-13" },
  { id: "redmi-note-14", reviewPath: "/review/redmi-note-14" },
  { id: "redmi-note-12", reviewPath: "/review/redmi-note-12" },
  { id: "poco-x5-pro", reviewPath: "/review/poco-x5-pro" },
];

const COMPARISONS = [
  { to: "/comparativo/redmi-note-15-4g-vs-5g", label: "Redmi Note 15 4G vs 5G" },
  { to: "/comparativo/moto-g86-vs-redmi-note-15-5g", label: "Moto G86 vs Redmi Note 15 5G" },
  { to: "/comparativo/poco-x8-pro-vs-poco-x7-pro", label: "Poco X8 Pro vs Poco X7 Pro" },
  { to: "/comparativo/poco-x6-pro-vs-poco-x7-pro", label: "Poco X6 Pro vs Poco X7 Pro" },
  { to: "/comparativo/redmi-note-13-pro-vs-redmi-note-14-pro-plus", label: "Redmi Note 13 Pro vs Redmi Note 14 Pro+" },
  { to: "/comparativo/redmi-note-13-pro-vs-poco-x6-pro", label: "Redmi Note 13 Pro vs Poco X6 Pro" },
  { to: "/comparativo/galaxy-a55-vs-redmi-note-13-pro", label: "Galaxy A55 vs Redmi Note 13 Pro" },
  { to: "/comparativo/galaxy-a25-vs-redmi-note-13", label: "Galaxy A25 vs Redmi Note 13" },
];

const FAQ = [
  {
    question: "Qual o melhor celular Xiaomi em 2026?",
    answer:
      "Para a maioria das pessoas, o Redmi Note 15 5G: bateria grande, carregador na caixa, tela AMOLED de 120 Hz e 5G por menos de R$ 2.000. Para jogos, o Poco X8 Pro; para fotos e recarga rápida, o Redmi Note 14 Pro+.",
  },
  {
    question: "Qual o Xiaomi com melhor custo-benefício?",
    answer:
      "O Redmi Note 15 5G. Ele entrega o essencial muito bem e já vem com carregador de 45 W. Se você joga muito, o Poco X8 Pro dá mais desempenho por pouco mais.",
  },
  {
    question: "Qual a diferença entre Redmi e Poco?",
    answer:
      "As duas são linhas da Xiaomi. Redmi foca em equilíbrio e câmera; Poco foca em desempenho pelo preço, com processadores mais fortes.",
  },
  {
    question: "Ainda vale comprar Poco X6 Pro ou Redmi Note 13 Pro?",
    answer:
      "Só com desconto, abaixo do teto indicado nesta página. Acima disso, o Poco X8 Pro e o Redmi Note 15 5G são compras melhores.",
  },
];

function MelhoresCelularesXiaomi() {
  return (
    <main className="min-h-screen bg-[#F7F2EB] text-slate-900">
      <section className="bg-[#0F3F4A] text-white">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
          <nav aria-label="Navegação" className="text-sm text-slate-300">
            <Link to="/" className="underline">
              Home
            </Link>{" "}
            /{" "}
            <Link to="/celulares" className="underline">
              Celulares
            </Link>{" "}
            / Xiaomi
          </nav>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#F2C38B]">
            Guia por marca · atualizado em outubro de 2026
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight !text-white sm:text-5xl">
            Melhor celular Xiaomi em 2026: qual comprar
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
            Resposta curta: o <strong className="text-white">Redmi Note 15 5G</strong> para a maioria das pessoas, o{" "}
            <strong className="text-white">Poco X8 Pro</strong> para jogos e o{" "}
            <strong className="text-white">Redmi Note 14 Pro+</strong> para quem quer a melhor câmera e recarga de 120 W.
          </p>
          <HeroPickCTA productId="redmi-note-15-5g" pageType="guia" />
          <p className="mt-4 text-sm text-slate-300">
            Análise documental com fichas oficiais, revisada em outubro de 2026.{" "}
            <Link to="/divulgacao-de-afiliados" className="underline">
              Usamos links de afiliado
            </Link>
            .
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
        <div className="grid gap-6">
          {PICKS.map((pick, index) => (
            <article
              key={pick.id}
              className="grid gap-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:grid-cols-[1fr_300px]"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B5A2B]">
                  {index + 1}. {pick.badge}
                </p>
                <h2 className="mt-2 text-2xl font-extrabold text-[#0F3F4A]">{pick.name}</h2>
                <p className="mt-3 leading-7 text-slate-700">{pick.summary}</p>
                <dl className="mt-4 space-y-2 text-sm leading-6">
                  <div>
                    <dt className="inline font-bold text-[#0F3F4A]">Para quem: </dt>
                    <dd className="inline text-slate-700">{pick.forWho}</dd>
                  </div>
                  <div>
                    <dt className="inline font-bold text-[#0F3F4A]">Atenção: </dt>
                    <dd className="inline text-slate-700">{pick.watchOut}</dd>
                  </div>
                </dl>
                <p className="mt-4 rounded-2xl bg-[#FFF8EF] p-4 text-sm text-slate-700">
                  <BadgeCheck className="mr-1 inline h-4 w-4 text-[#8B5A2B]" />
                  Compre se estiver até <strong>{formatBRL(goodDealFor(pick.id)!)}</strong> ({pick.version}).
                  Abaixo disso, é bom negócio.
                </p>
                {pick.reviewPath && (
                  <Link to={pick.reviewPath} className="mt-4 inline-block font-semibold text-[#0F3F4A] underline">
                    Ler o review completo do {pick.name}
                  </Link>
                )}
              </div>
              <ProductPurchaseOptions productId={pick.id} pageType="guia" placement="brand_xiaomi" compact />
            </article>
          ))}
        </div>

        <section aria-labelledby="comparar" className="mt-14">
          <h2 id="comparar" className="text-2xl font-extrabold text-[#0F3F4A] sm:text-3xl">
            Comparação lado a lado
          </h2>
          <div className="mt-5 overflow-x-auto rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-[#0F3F4A] text-white">
                <tr>
                  <th className="p-4"> </th>
                  <th className="p-4">Redmi Note 15 5G</th>
                  <th className="p-4">Poco X8 Pro</th>
                  <th className="p-4">Redmi Note 14 Pro+</th>
                </tr>
              </thead>
              <tbody>
                {TABLE.map(([label, ...values]) => (
                  <tr key={label} className="border-t border-slate-100">
                    <th scope="row" className="p-4 font-semibold text-[#0F3F4A]">
                      {label}
                    </th>
                    {values.map((value, i) => (
                      <td key={i} className="p-4 text-slate-700">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section
          aria-labelledby="antigos"
          className="mt-14 rounded-3xl border-2 border-[#8B5A2B]/30 bg-[#FFF8EF] p-6 sm:p-8"
        >
          <h2 id="antigos" className="flex items-center gap-2 text-2xl font-bold text-[#0F3F4A]">
            <CircleAlert className="h-6 w-6 text-[#8B5A2B]" /> Poco X6, X6 Pro e Redmi Note 13: só com desconto
          </h2>
          <p className="mt-3 leading-7 text-slate-700">
            Esses modelos ainda aparecem muito à venda, mas já têm sucessores. Acima destes valores, o modelo novo é a
            compra melhor.
          </p>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {OLDER.map(({ id, reviewPath }) => {
              const fp = FAIR_PRICES[id];
              return (
                <li key={id} className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="font-bold text-[#0F3F4A]">{fp.productName}</p>
                  <p className="mt-1 text-sm text-slate-700">
                    Só vale abaixo de <strong>{formatBRL(fp.maxPrice)}</strong>. Acima disso, prefira o{" "}
                    {fp.alternativeName}.
                  </p>
                  <Link to={reviewPath} className="mt-2 inline-block text-sm font-semibold text-[#0F3F4A] underline">
                    Ver o veredito
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section aria-labelledby="outra-marca" className="mt-14">
          <h2 id="outra-marca" className="text-2xl font-bold text-[#0F3F4A]">
            Quando outra marca é melhor
          </h2>
          <ul className="mt-4 space-y-3 leading-7 text-slate-700">
            <li>
              <strong>Quer muitos anos de atualização:</strong> a Samsung atualiza por mais tempo. Veja o{" "}
              <Link to="/review/galaxy-a36-5g" className="font-semibold underline">
                Galaxy A36
              </Link>{" "}
              ou o{" "}
              <Link to="/review/galaxy-a57-5g" className="font-semibold underline">
                Galaxy A57
              </Link>
              .
            </li>
            <li>
              <strong>Quer a melhor tela e resistência IP69:</strong> compare com o{" "}
              <Link to="/comparativo/moto-g86-vs-redmi-note-15-5g" className="font-semibold underline">
                Moto G86
              </Link>
              .
            </li>
          </ul>
        </section>

        <FaqJsonLd faq={FAQ} />

        <section aria-labelledby="faq" className="mt-14">
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

        <section aria-labelledby="comparativos" className="mt-14">
          <h2 id="comparativos" className="text-xl font-bold text-[#0F3F4A]">
            Comparativos com Xiaomi e Poco
          </h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {COMPARISONS.map((c) => (
              <li key={c.to}>
                <Link to={c.to} className="text-sm font-semibold text-[#0F3F4A] underline">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-10 text-sm text-slate-600">
          Comprando na Black Friday?{" "}
          <Link to="/black-friday-celulares" className="font-semibold underline">
            Veja quanto cada celular custava antes da data
          </Link>
          . Também temos os guias de{" "}
          <Link to="/melhores-celulares-samsung" className="font-semibold underline">
            melhores Samsung
          </Link>{" "}
          e{" "}
          <Link to="/melhores-celulares-motorola" className="font-semibold underline">
            melhores Motorola
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
