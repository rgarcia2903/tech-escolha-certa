import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, CircleAlert } from "lucide-react";
import { ProductPurchaseOptions } from "@/components/site/ProductPurchaseOptions";
import { HeroPickCTA } from "@/components/site/HeroPickCTA";
import { FAIR_PRICES, formatBRL, goodDealFor, type FairPriceId } from "@/lib/fair-prices";

// Fichas: reviews do site. Preços-alvo editoriais em src/lib/fair-prices.ts;
// não exibir preço de loja (política da Amazon).
const PAGE_TITLE = "Melhor celular custo-benefício em 2026: qual comprar";
const PAGE_DESCRIPTION =
  "Qual o melhor celular custo-benefício em 2026? Galaxy A36, Moto G86, Poco X8 Pro e Edge 60 Pro: veja qual comprar para cada orçamento e até quanto pagar em cada um.";

export const Route = createFileRoute("/melhores-celulares-custo-beneficio")({
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
  component: MelhoresCustoBeneficio,
});

const PICKS = [
  {
    id: "galaxy-a36-5g",
    badge: "Melhor custo-benefício geral",
    name: "Galaxy A36 5G",
    version: "128 GB, 6 GB de RAM",
    summary:
      "Tela Super AMOLED de 120 Hz, Snapdragon 6 Gen 3, câmera com estabilização óptica, IP67 e seis anos de atualizações por menos de R$ 1.500.",
    forWho: "A maioria das pessoas: uso diário, redes sociais, fotos e vídeos, por muitos anos.",
    watchOut: "O carregador de 45 W é vendido à parte.",
    reviewPath: "/review/galaxy-a36-5g",
  },
  {
    id: "moto-g86-5g",
    badge: "Melhor até R$ 2.000",
    name: "Moto G86 5G",
    version: "256 GB, 8 GB de RAM",
    summary:
      "Tela pOLED 1.5K de até 4.500 nits, câmera Sony com estabilização óptica, IP68/IP69 e carregador de 33 W na caixa.",
    forWho: "Quem quer a melhor tela e câmera da faixa, com resistência de sobra.",
    watchOut: "Duas atualizações de Android. Para jogos pesados, o Poco X8 Pro é mais forte.",
    reviewPath: "/review/moto-g86-5g",
  },
  {
    id: "poco-x8-pro",
    badge: "Mais desempenho pelo preço",
    name: "Poco X8 Pro",
    version: "256 GB, 8 GB de RAM",
    summary:
      "Dimensity 8500 Ultra, bateria de 6.500 mAh, recarga de 100 W, tela AMOLED 1.5K de 120 Hz e IP68.",
    forWho: "Quem joga títulos pesados ou quer potência de topo sem pagar preço de topo.",
    watchOut: "As câmeras não são o foco do aparelho.",
    reviewPath: "/comparativo/poco-x8-pro-vs-poco-x7-pro",
  },
  {
    id: "edge-60-pro",
    badge: "Premium com melhor custo-benefício",
    name: "Motorola Edge 60 Pro",
    version: "256 GB, 12 GB de RAM",
    summary:
      "Bateria de 6.000 mAh, recarga de 90 W e sem fio, câmeras de 50 + 50 MP com teleobjetiva de zoom óptico 3x e IP69.",
    forWho: "Quem quer recursos de topo de linha, como zoom óptico e recarga sem fio, pagando bem menos.",
    watchOut: "Três anos de atualizações. Para ficar muitos anos, o Galaxy S25 FE dura mais em suporte.",
    reviewPath: "/review/edge-60-pro",
  },
];

const TABLE: [string, string, string, string, string][] = [
  [
    "Compre se estiver até",
    formatBRL(goodDealFor("galaxy-a36-5g")!),
    formatBRL(goodDealFor("moto-g86-5g")!),
    formatBRL(goodDealFor("poco-x8-pro")!),
    formatBRL(goodDealFor("edge-60-pro")!),
  ],
  ["Processador", "Snapdragon 6 Gen 3", "Dimensity 7300", "Dimensity 8500 Ultra", "Dimensity 8350"],
  ["Tela", "AMOLED 120 Hz", "pOLED 1.5K 120 Hz", "AMOLED 1.5K 120 Hz", "pOLED curva 120 Hz"],
  ["Bateria e recarga", "5.000 mAh • 45 W", "5.200 mAh • 33 W", "6.500 mAh • 100 W", "6.000 mAh • 90 W"],
  ["Proteção", "IP67", "IP68 e IP69", "IP68", "IP68 e IP69"],
];

const OLDER: { id: FairPriceId; reviewPath: string }[] = [
  { id: "galaxy-a55", reviewPath: "/review/galaxy-a55" },
  { id: "poco-x6-pro", reviewPath: "/review/poco-x6-pro" },
  { id: "redmi-note-13-pro", reviewPath: "/review/redmi-note-13-pro" },
  { id: "galaxy-a35", reviewPath: "/review/galaxy-a35" },
];

const COMPARISONS = [
  { to: "/comparativo/galaxy-a57-vs-galaxy-a36", label: "Galaxy A57 vs Galaxy A36" },
  { to: "/comparativo/moto-g86-vs-redmi-note-15-5g", label: "Moto G86 vs Redmi Note 15 5G" },
  { to: "/comparativo/edge-60-pro-vs-galaxy-s25-fe", label: "Edge 60 Pro vs Galaxy S25 FE" },
  { to: "/comparativo/poco-x8-pro-vs-poco-x7-pro", label: "Poco X8 Pro vs Poco X7 Pro" },
  { to: "/comparativo/poco-x6-pro-vs-poco-x7-pro", label: "Poco X6 Pro vs Poco X7 Pro" },
];

const FAQ = [
  {
    question: "Qual o melhor celular custo-benefício em 2026?",
    answer:
      "Para a maioria das pessoas, o Galaxy A36 5G: tela AMOLED de 120 Hz, câmera com estabilização óptica, IP67 e seis anos de atualizações por menos de R$ 1.500.",
  },
  {
    question: "Qual o melhor custo-benefício até R$ 2.000?",
    answer:
      "O Moto G86 5G, pela tela pOLED 1.5K, câmera com estabilização óptica e resistência IP69. Se o foco for bateria e carregador na caixa, o Redmi Note 15 5G.",
  },
  {
    question: "Qual o celular custo-benefício para jogos?",
    answer: "O Poco X8 Pro. O Dimensity 8500 Ultra é o processador mais forte desta faixa de preço.",
  },
  {
    question: "Galaxy A55 e Poco X6 Pro ainda são custo-benefício?",
    answer:
      "Só abaixo do teto indicado nesta página. Acima disso, os sucessores (Galaxy A57 e Poco X8 Pro) entregam mais pelo mesmo dinheiro.",
  },
];

function MelhoresCustoBeneficio() {
  return (
    <main className="min-h-screen bg-[#F7F2EB] text-slate-900">
      <section className="bg-[#0F3F4A] text-white">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
          <nav aria-label="Navegação" className="text-sm text-slate-300">
            <Link to="/" className="underline">
              Home
            </Link>{" "}
            /{" "}
            <Link to="/guias-de-compra" className="underline">
              Guias
            </Link>{" "}
            / Custo-benefício
          </nav>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#F2C38B]">
            Guia de compra · atualizado em outubro de 2026
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight !text-white sm:text-5xl">
            Melhor celular custo-benefício em 2026
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
            Resposta curta: o <strong className="text-white">Galaxy A36</strong> é o melhor custo-benefício para a
            maioria das pessoas. Até R$ 2.000, o <strong className="text-white">Moto G86</strong> entrega a melhor tela
            e câmera; para jogos, o <strong className="text-white">Poco X8 Pro</strong>; e o{" "}
            <strong className="text-white">Edge 60 Pro</strong> é o premium que mais entrega pelo preço.
          </p>
          <HeroPickCTA productId="galaxy-a36-5g" pageType="guia" />
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
              <ProductPurchaseOptions productId={pick.id} pageType="guia" placement="cost_benefit" compact />
            </article>
          ))}
        </div>

        <section aria-labelledby="comparar" className="mt-14">
          <h2 id="comparar" className="text-2xl font-extrabold text-[#0F3F4A] sm:text-3xl">
            Comparação lado a lado
          </h2>
          <div className="mt-5 overflow-x-auto rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-[#0F3F4A] text-white">
                <tr>
                  <th className="p-4"> </th>
                  <th className="p-4">Galaxy A36</th>
                  <th className="p-4">Moto G86</th>
                  <th className="p-4">Poco X8 Pro</th>
                  <th className="p-4">Edge 60 Pro</th>
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
            <CircleAlert className="h-6 w-6 text-[#8B5A2B]" /> "Custo-benefício" antigo: só com desconto
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
            Outros perfis</h2>
          <ul className="mt-4 space-y-3 leading-7 text-slate-700">
            <li>
              <strong>Quer gastar menos de R$ 1.000:</strong> o{" "}
              <Link to="/review/galaxy-a17-5g" className="font-semibold underline">
                Galaxy A17
              </Link>{" "}
              tem tela AMOLED e seis anos de atualizações.
            </li>
            <li>
              <strong>Quer bateria grande e carregador na caixa:</strong> o{" "}
              <Link to="/review/redmi-note-15-5g" className="font-semibold underline">
                Redmi Note 15 5G
              </Link>{" "}
              vale a pena até R$ 1.800.
            </li>
            <li>
              <strong>Quer ficar muitos anos com o celular:</strong> o{" "}
              <Link to="/review/galaxy-s25-fe" className="font-semibold underline">
                Galaxy S25 FE
              </Link>{" "}
              tem sete anos de atualizações.
            </li>
          </ul>
        </section>

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
            Comparativos úteis
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
          </Link>
          ,{" "}
          <Link to="/melhores-celulares-motorola" className="font-semibold underline">
            Motorola
          </Link>{" "}
          e{" "}
          <Link to="/melhores-celulares-xiaomi" className="font-semibold underline">
            Xiaomi
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
