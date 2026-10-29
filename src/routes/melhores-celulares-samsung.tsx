import { FaqJsonLd } from "@/components/site/FaqJsonLd";
import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, CircleAlert } from "lucide-react";
import { ProductPurchaseOptions } from "@/components/site/ProductPurchaseOptions";
import { HeroPickCTA } from "@/components/site/HeroPickCTA";
import { FAIR_PRICES, formatBRL, goodDealFor, type FairPriceId } from "@/lib/fair-prices";

// Preços-alvo editoriais em src/lib/fair-prices.ts; não exibir preço de loja (política da Amazon). Fichas: reviews do site, Samsung Newsroom Brasil
// (Galaxy A57, lançado em 15/04/2026 a R$ 3.599) e Samsung Newsroom (S25 FE).
const PAGE_TITLE = "Melhor celular Samsung em 2026: qual comprar e até quanto pagar";
const PAGE_DESCRIPTION =
  "Galaxy A17, A36, A57 ou S25 FE? Veja qual Samsung comprar em 2026 para cada orçamento, até quanto pagar e por que A55, A35 e S24 só valem com desconto.";

export const Route = createFileRoute("/melhores-celulares-samsung")({
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
  component: MelhoresCelularesSamsung,
});

const PICKS = [
  {
    id: "galaxy-a36-5g",
    badge: "Melhor custo-benefício",
    name: "Galaxy A36 5G",
    version: "128 GB, 6 GB de RAM",
    summary:
      "Tela Super AMOLED de 6,7\" com 120 Hz, Snapdragon 6 Gen 3, câmera de 50 MP com estabilização óptica, IP67 e seis anos de atualizações.",
    forWho: "Quem quer um Samsung completo para o dia a dia gastando menos de R$ 1.500.",
    watchOut: "A versão mais barata tem 128 GB e 6 GB de RAM. O carregador de 45 W é vendido à parte.",
    reviewPath: "/review/galaxy-a36-5g",
  },
  {
    id: "galaxy-a57-5g",
    badge: "Melhor intermediário",
    name: "Galaxy A57 5G",
    version: "128 GB, 8 GB de RAM",
    summary:
      "O intermediário mais novo da Samsung: tela Super AMOLED+ de 120 Hz, câmeras de 50 + 12 + 5 MP, IP68, corpo de 6,9 mm e 179 g, e seis anos de atualizações.",
    forWho: "Quem quer acabamento premium, resistência IP68 e suporte longo sem pagar preço de linha S.",
    watchOut:
      "Foi lançado a R$ 3.599 em abril de 2026 e costuma aparecer bem abaixo disso. Confira a versão e o vendedor no anúncio.",
    reviewPath: "/review/galaxy-a57-5g",
  },
  {
    id: "galaxy-s25-fe",
    badge: "Melhor linha S acessível",
    name: "Galaxy S25 FE",
    version: "128 GB, 8 GB de RAM",
    summary:
      "Tela Dynamic AMOLED 2X de 120 Hz, câmera tripla com teleobjetiva, IP68, bateria de 4.900 mAh e sete anos de atualizações.",
    forWho: "Quem quer ficar muitos anos com o celular e quer câmera com zoom óptico.",
    watchOut: "O processador é o mesmo do Galaxy S24, e a recarga de 45 W fica atrás de rivais.",
    reviewPath: "/review/galaxy-s25-fe",
  },
  {
    id: "galaxy-a17-5g",
    badge: "Mais barato que vale a pena",
    name: "Galaxy A17 5G",
    version: "128 GB, 4 GB de RAM",
    summary:
      "Tela Super AMOLED de 6,7\" com 90 Hz, câmera de 50 MP com estabilização óptica, 5G, NFC, microSD e seis anos de atualizações.",
    forWho: "Quem quer um celular básico confiável e com suporte longo, gastando menos de R$ 1.000.",
    watchOut: "Desempenho de entrada e resistência só IP54. Se puder, a versão com 8 GB de RAM envelhece melhor.",
    reviewPath: "/review/galaxy-a17-5g",
  },
];

const TABLE: [string, string, string, string, string][] = [
  [
    "Compre se estiver até",
    formatBRL(goodDealFor("galaxy-a17-5g")!),
    formatBRL(goodDealFor("galaxy-a36-5g")!),
    formatBRL(goodDealFor("galaxy-a57-5g")!),
    formatBRL(goodDealFor("galaxy-s25-fe")!),
  ],
  ["Tela", "AMOLED 90 Hz", "AMOLED 120 Hz", "AMOLED+ 120 Hz", "AMOLED 2X 120 Hz"],
  ["Câmeras traseiras", "50 + 5 + 2 MP", "50 + 8 + 5 MP", "50 + 12 + 5 MP", "50 + 12 + 8 MP tele"],
  ["Bateria", "5.000 mAh", "5.000 mAh", "5.000 mAh", "4.900 mAh"],
  ["Proteção", "IP54", "IP67", "IP68", "IP68"],
  ["Atualizações", "6 anos", "6 anos", "6 anos", "7 anos"],
];

const OLDER: { id: FairPriceId; reviewPath: string }[] = [
  { id: "galaxy-a55", reviewPath: "/review/galaxy-a55" },
  { id: "galaxy-a35", reviewPath: "/review/galaxy-a35" },
  { id: "galaxy-s24", reviewPath: "/review/galaxy-s24" },
  { id: "galaxy-s23", reviewPath: "/review/galaxy-s23" },
  { id: "galaxy-s22", reviewPath: "/review/galaxy-s22" },
  { id: "galaxy-a54", reviewPath: "/review/galaxy-a54" },
  { id: "galaxy-a15", reviewPath: "/review/galaxy-a15" },
  { id: "galaxy-a56", reviewPath: "/review/galaxy-a56" },
  { id: "galaxy-s24-fe", reviewPath: "/review/galaxy-s24-fe" },
  { id: "galaxy-a34", reviewPath: "/review/galaxy-a34" },
  { id: "galaxy-a16", reviewPath: "/review/galaxy-a16" },
];

const COMPARISONS = [
  { to: "/comparativo/galaxy-s26-vs-galaxy-s25", label: "Galaxy S26 vs Galaxy S25" },
  { to: "/comparativo/galaxy-s26-ultra-vs-galaxy-s25-ultra", label: "Galaxy S26 Ultra vs S25 Ultra" },
  { to: "/comparativo/galaxy-s26-fe-vs-galaxy-s25-fe", label: "Galaxy S26 FE vs S25 FE" },
  { to: "/comparativo/galaxy-a37-vs-galaxy-a36", label: "Galaxy A37 vs Galaxy A36" },
  { to: "/comparativo/galaxy-a57-vs-galaxy-a36", label: "Galaxy A57 vs Galaxy A36" },
  { to: "/comparativo/galaxy-a17-4g-vs-galaxy-a17-5g", label: "Galaxy A17 4G vs A17 5G" },
  { to: "/comparativo-galaxy-a55-vs-galaxy-a35", label: "Galaxy A55 vs Galaxy A35" },
  { to: "/comparativo/galaxy-a55-vs-redmi-note-13-pro", label: "Galaxy A55 vs Redmi Note 13 Pro" },
  { to: "/comparativo/galaxy-a35-vs-redmi-note-13-pro", label: "Galaxy A35 vs Redmi Note 13 Pro" },
  { to: "/comparativo/galaxy-a55-vs-poco-x6-pro", label: "Galaxy A55 vs Poco X6 Pro" },
  { to: "/comparativo/iphone-15-vs-galaxy-s24", label: "iPhone 15 vs Galaxy S24" },
  { to: "/comparativo/galaxy-a25-vs-redmi-note-13", label: "Galaxy A25 vs Redmi Note 13" },
];

const FAQ = [
  {
    question: "Qual o melhor celular Samsung em 2026?",
    answer:
      "Para a maioria das pessoas, o Galaxy A36 5G: tela AMOLED de 120 Hz, câmera com estabilização óptica, IP67 e seis anos de atualizações por menos de R$ 1.500. Com orçamento maior, o Galaxy A57 e o Galaxy S25 FE são as melhores escolhas.",
  },
  {
    question: "Qual Samsung tem o melhor custo-benefício?",
    answer:
      "O Galaxy A36 5G. Ele costuma custar o mesmo que intermediários de outras marcas e tem suporte bem mais longo.",
  },
  {
    question: "Ainda vale comprar Galaxy A55, A35 ou S24?",
    answer:
      "Só com desconto forte. Acima do teto indicado nesta página, os sucessores (A57, A36 e S25 FE) entregam mais e terão atualizações por mais tempo.",
  },
  {
    question: "Samsung ou Motorola?",
    answer:
      "Samsung vence em tempo de atualização (seis a sete anos nos modelos atuais). Motorola costuma entregar mais tela, bateria e recarga pelo preço. Se você fica muitos anos com o celular, prefira Samsung.",
  },
];

function MelhoresCelularesSamsung() {
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
            / Samsung
          </nav>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#F2C38B]">
            Guia por marca · atualizado em outubro de 2026
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight !text-white sm:text-5xl">
            Melhor celular Samsung em 2026: qual comprar
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
            Resposta curta: o <strong className="text-white">Galaxy A36</strong> para a maioria das pessoas, o{" "}
            <strong className="text-white">Galaxy A57</strong> para quem quer um intermediário premium, o{" "}
            <strong className="text-white">Galaxy S25 FE</strong> para ficar muitos anos e o{" "}
            <strong className="text-white">Galaxy A17</strong> para gastar menos de R$ 1.000.
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
              <ProductPurchaseOptions productId={pick.id} pageType="guia" placement="brand_samsung" compact />
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
                  <th className="p-4">Galaxy A17</th>
                  <th className="p-4">Galaxy A36</th>
                  <th className="p-4">Galaxy A57</th>
                  <th className="p-4">Galaxy S25 FE</th>
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
            <CircleAlert className="h-6 w-6 text-[#8B5A2B]" /> Galaxy A55, A35 e S24: só com desconto
          </h2>
          <p className="mt-3 leading-7 text-slate-700">
            Esses modelos ainda aparecem muito à venda, mas já têm sucessores. Acima destes valores, o modelo novo é a
            compra melhor.
          </p>
          <ul className="mt-5 grid gap-4 sm:grid-cols-3">
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
              <strong>Quer mais bateria e recarga rápida:</strong> veja o{" "}
              <Link to="/review/edge-60-pro" className="font-semibold underline">
                Motorola Edge 60 Pro
              </Link>{" "}
              ou o{" "}
              <Link to="/review/moto-g86-5g" className="font-semibold underline">
                Moto G86
              </Link>
              .
            </li>
            <li>
              <strong>Joga muito:</strong> o{" "}
              <Link to="/review/poco-x7-pro" className="font-semibold underline">
                Poco X7 Pro
              </Link>{" "}
              tem mais desempenho pelo preço.
            </li>
            <li>
              <strong>Quer carregador na caixa e bateria grande:</strong> compare com o{" "}
              <Link to="/review/redmi-note-15-5g" className="font-semibold underline">
                Redmi Note 15 5G
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
            Comparativos com Samsung
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
          . Também temos o guia de{" "}
          <Link to="/melhores-celulares-motorola" className="font-semibold underline">
            melhores celulares Motorola
          </Link>{" "}
          e de{" "}
          <Link to="/melhores-celulares-xiaomi" className="font-semibold underline">
            melhores Xiaomi
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
