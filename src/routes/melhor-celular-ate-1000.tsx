import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, CircleAlert } from "lucide-react";
import { ProductPurchaseOptions } from "@/components/site/ProductPurchaseOptions";
import { HeroPickCTA } from "@/components/site/HeroPickCTA";
import { FAIR_PRICES, formatBRL, goodDealFor, type FairPriceId } from "@/lib/fair-prices";

// Fichas: Oficina da Net (Galaxy A17 4G/5G, Galaxy A07, Moto G06) e lista de mais vendidos da
// Amazon Brasil em 29/10/2026. Preços-alvo editoriais; não exibir preço de loja (política da Amazon).
const PAGE_TITLE = "Melhor celular até R$ 1.000 em 2026: qual comprar";
const PAGE_DESCRIPTION =
  "Qual o melhor celular até R$ 1.000 em 2026? Galaxy A17 5G, Galaxy A07 ou Moto G06: veja qual comprar, até quanto pagar e por que o A17 4G só vale se estiver mais barato que o 5G.";

export const Route = createFileRoute("/melhor-celular-ate-1000")({
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
  component: MelhorAte1000,
});

const PICKS = [
  {
    id: "galaxy-a17-5g",
    badge: "Melhor até R$ 1.000",
    name: "Galaxy A17 5G",
    version: "128 GB, 4 GB de RAM",
    summary:
      "Tela Super AMOLED de 6,7\" com 90 Hz, câmera de 50 MP com estabilização óptica, 5G, NFC e seis anos de atualizações.",
    forWho: "Quem quer o celular mais completo da faixa e vai ficar com ele por muitos anos.",
    watchOut: "Existe a versão 4G, quase igual. Se o preço for parecido, fique com o 5G.",
    reviewPath: "/review/galaxy-a17-5g",
  },
  {
    id: "galaxy-a07",
    badge: "Mais barato com suporte longo",
    name: "Galaxy A07",
    version: "128 GB, 4 GB de RAM",
    summary: "Tela de 6,7\" com 90 Hz, Helio G99, câmera de 50 MP, 5.000 mAh e seis anos de atualizações.",
    forWho: "Quem quer gastar o mínimo e ainda ter atualizações por muitos anos.",
    watchOut: "Tela LCD HD+ e desempenho básico. Se der para juntar uns R$ 100, o A17 5G é bem melhor.",
    reviewPath: "/comparativo/galaxy-a07-vs-moto-g06",
  },
  {
    id: "moto-g06",
    badge: "Tela grande pelo menor preço",
    name: "Moto G06",
    version: "128 GB, 4 GB de RAM",
    summary: "Tela de 6,9\" com 120 Hz, bateria de 5.200 mAh, IP64, microSD e entrada para fone.",
    forWho: "Quem quer tela grande para vídeos e paga o mínimo possível.",
    watchOut: "Processador Helio G81 fraco e carregador de 10 W. Só vale até uns R$ 700.",
    reviewPath: "/comparativo/galaxy-a07-vs-moto-g06",
  },
];

const TABLE: [string, string, string, string][] = [
  [
    "Compre se estiver até",
    formatBRL(goodDealFor("galaxy-a17-5g")!),
    formatBRL(goodDealFor("galaxy-a07")!),
    formatBRL(goodDealFor("moto-g06")!),
  ],
  ["Processador", "Exynos 1330", "Helio G99", "Helio G81"],
  ["Tela", "AMOLED 90 Hz", "LCD HD+ 90 Hz", "LCD HD+ 120 Hz"],
  ["5G", "Sim", "Não", "Não"],
  ["Bateria e recarga", "5.000 mAh • 25 W", "5.000 mAh • 15 W", "5.200 mAh • 10 W"],
  ["Atualizações", "6 anos", "6 anos", "Não divulgado em detalhe"],
];

const OLDER: { id: FairPriceId; reviewPath: string }[] = [
  { id: "redmi-note-13-5g", reviewPath: "/review/redmi-note-13" },
];

const COMPARISONS = [
  { to: "/comparativo/galaxy-a17-4g-vs-galaxy-a17-5g", label: "Galaxy A17 4G vs A17 5G" },
  { to: "/comparativo/galaxy-a07-vs-moto-g06", label: "Galaxy A07 vs Moto G06" },
  { to: "/comparativo/galaxy-a25-vs-redmi-note-13", label: "Galaxy A25 vs Redmi Note 13" },
];

const FAQ = [
  {
    question: "Qual o melhor celular até R$ 1.000 em 2026?",
    answer:
      "O Galaxy A17 5G: tela AMOLED, câmera com estabilização óptica, 5G e seis anos de atualizações. Se o orçamento for menor, o Galaxy A07.",
  },
  {
    question: "Galaxy A17 4G ou 5G?",
    answer:
      "O 5G, se a diferença de preço for pequena. Tela, câmeras e bateria são iguais; o 5G tem processador um pouco mais rápido.",
  },
  {
    question: "Qual o celular mais barato que vale a pena?",
    answer:
      "O Galaxy A07, até cerca de R$ 800. É básico, mas tem seis anos de atualizações, algo raro nessa faixa.",
  },
  {
    question: "Vale comprar um celular usado em vez de um novo de entrada?",
    answer:
      "Pode valer, mas sem garantia e com bateria gasta. Novo, o Galaxy A17 5G é a opção mais segura até R$ 1.000.",
  },
];

function MelhorAte1000() {
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
            / Até R$ 1.000
          </nav>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#F2C38B]">
            Guia por orçamento · atualizado em outubro de 2026
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight !text-white sm:text-5xl">
            Melhor celular até R$ 1.000 em 2026: qual comprar
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
            Resposta curta: o <strong className="text-white">Galaxy A17 5G</strong> é o melhor celular até R$ 1.000.
            O <strong className="text-white">Galaxy A07</strong> é a escolha para gastar o mínimo com seis anos de
            atualizações, e o <strong className="text-white">Moto G06</strong> só vale se você quer tela grande pelo menor
            preço.
          </p>
          <HeroPickCTA productId="galaxy-a17-5g" pageType="guia" />
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
              <ProductPurchaseOptions productId={pick.id} pageType="guia" placement="budget_1000" compact />
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
                  <th className="p-4">Galaxy A17 5G</th>
                  <th className="p-4">Galaxy A07</th>
                  <th className="p-4">Moto G06</th>
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
            <CircleAlert className="h-6 w-6 text-[#8B5A2B]" /> Modelo antigo que aparece nessa faixa
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
            Dá para esticar um pouco?</h2>
          <ul className="mt-4 space-y-3 leading-7 text-slate-700">
            <li>
              <strong>Até R$ 1.350:</strong> o{" "}
              <Link to="/review/galaxy-a36-5g" className="font-semibold underline">
                Galaxy A36
              </Link>{" "}
              é outro nível: processador bem mais forte, tela de 120 Hz e IP67.
            </li>
            <li>
              <strong>Até R$ 1.200, com muito espaço:</strong> o{" "}
              <Link to="/review/moto-g56-5g" className="font-semibold underline">
                Moto G56
              </Link>{" "}
              tem 256 GB, IP68/IP69 e 5G.
            </li>
            <li>
              <strong>Mais opções:</strong>{" "}
              <Link to="/guia/melhores-celulares-ate-1500-reais" className="font-semibold underline">
                veja o guia de celulares até R$ 1.500
              </Link>
              .
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
