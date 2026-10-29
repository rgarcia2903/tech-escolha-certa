import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, CircleAlert } from "lucide-react";
import { ProductPurchaseOptions } from "@/components/site/ProductPurchaseOptions";
import { HeroPickCTA } from "@/components/site/HeroPickCTA";
import { FAIR_PRICES, formatBRL, goodDealFor, type FairPriceId } from "@/lib/fair-prices";

// Fichas: reviews do site. Preços-alvo editoriais em src/lib/fair-prices.ts;
// não exibir preço de loja (política da Amazon).
const PAGE_TITLE = "Melhor celular até R$ 1.500 em 2026: qual comprar";
const PAGE_DESCRIPTION =
  "Qual o melhor celular até R$ 1.500 em 2026? Galaxy A36, Moto G56 ou Galaxy A17: veja qual comprar para cada perfil, até quanto pagar e quais modelos antigos evitar.";

export const Route = createFileRoute("/guia/melhores-celulares-ate-1500-reais")({
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
  component: MelhoresAte1500,
});

const PICKS = [
  {
    id: "galaxy-a36-5g",
    badge: "Melhor até R$ 1.500",
    name: "Galaxy A36 5G",
    version: "128 GB, 6 GB de RAM",
    summary:
      "Tela Super AMOLED de 6,7\" com 120 Hz, Snapdragon 6 Gen 3, câmera de 50 MP com estabilização óptica, IP67 e seis anos de atualizações.",
    forWho: "Quem quer o celular mais completo da faixa e pretende ficar com ele por muitos anos.",
    watchOut: "A versão mais barata tem 128 GB. O carregador de 45 W é vendido à parte.",
    reviewPath: "/review/galaxy-a36-5g",
  },
  {
    id: "moto-g56-5g",
    badge: "Mais espaço e resistência",
    name: "Moto G56 5G",
    version: "256 GB, 8 GB de RAM",
    summary:
      "256 GB com cartão de memória, bateria de 5.200 mAh, IP68/IP69, entrada para fone com fio e alto-falantes estéreo.",
    forWho: "Quem guarda muitas fotos e vídeos, trabalha na rua ou usa fone com fio.",
    watchOut: "A tela é LCD e o suporte é mais curto. Só compensa abaixo de R$ 1.200; acima disso, prefira o A36.",
    reviewPath: "/review/moto-g56-5g",
  },
  {
    id: "galaxy-a17-5g",
    badge: "Mais barato que vale a pena",
    name: "Galaxy A17 5G",
    version: "128 GB, 4 GB de RAM",
    summary:
      "Tela Super AMOLED de 6,7\" com 90 Hz, câmera de 50 MP com estabilização óptica, 5G, NFC, microSD e seis anos de atualizações.",
    forWho: "Quem quer um celular básico confiável e com suporte longo, gastando menos de R$ 1.000.",
    watchOut: "Desempenho de entrada. Se puder, a versão com 8 GB de RAM envelhece melhor.",
    reviewPath: "/review/galaxy-a17-5g",
  },
];

const TABLE: [string, string, string, string][] = [
  [
    "Compre se estiver até",
    formatBRL(goodDealFor("galaxy-a36-5g")!),
    formatBRL(goodDealFor("moto-g56-5g")!),
    formatBRL(goodDealFor("galaxy-a17-5g")!),
  ],
  ["Tela", "AMOLED 120 Hz", "LCD 120 Hz", "AMOLED 90 Hz"],
  ["Processador", "Snapdragon 6 Gen 3", "Dimensity 7060", "Exynos 1330"],
  ["Armazenamento", "128 GB", "256 GB + microSD", "128 GB + microSD"],
  ["Bateria e recarga", "5.000 mAh • 45 W", "5.200 mAh • 30 W", "5.000 mAh • 25 W"],
  ["Proteção", "IP67", "IP68 e IP69", "IP54"],
  ["Atualizações", "6 anos", "2 de sistema, 3 de segurança", "6 anos"],
];

const OLDER: { id: FairPriceId; reviewPath: string }[] = [
  { id: "galaxy-a35", reviewPath: "/review/galaxy-a35" },
  { id: "redmi-note-13-5g", reviewPath: "/review/redmi-note-13" },
  { id: "poco-x6-5g", reviewPath: "/review/poco-x6" },
  { id: "redmi-note-13-pro", reviewPath: "/review/redmi-note-13-pro" },
];

const COMPARISONS = [
  { to: "/comparativo/galaxy-a57-vs-galaxy-a36", label: "Galaxy A57 vs Galaxy A36" },
  { to: "/comparativo/moto-g86-vs-redmi-note-15-5g", label: "Moto G86 vs Redmi Note 15 5G" },
  { to: "/comparativo/galaxy-a25-vs-redmi-note-13", label: "Galaxy A25 vs Redmi Note 13" },
  { to: "/comparativo/galaxy-a35-vs-redmi-note-13-pro", label: "Galaxy A35 vs Redmi Note 13 Pro" },
];

const FAQ = [
  {
    question: "Qual o melhor celular até R$ 1.500 em 2026?",
    answer:
      "O Galaxy A36 5G, para a maioria das pessoas: tela AMOLED de 120 Hz, câmera com estabilização óptica, IP67 e seis anos de atualizações. Se ele estiver acima de R$ 1.350, vale esperar uma promoção.",
  },
  {
    question: "Qual o melhor celular até R$ 1.000?",
    answer:
      "O Galaxy A17 5G. Ele tem tela AMOLED, 5G, NFC e seis anos de atualizações, algo raro nessa faixa. Veja o guia completo de celulares até R$ 1.000.",
  },
  {
    question: "Vale mais um modelo antigo mais forte ou um novo mais simples?",
    answer:
      "Na maioria dos casos, o novo. Modelos de 2023 e 2024 como Redmi Note 13 e Poco X6 estão perto do fim das atualizações; só valem com desconto forte, abaixo do teto indicado nesta página.",
  },
  {
    question: "Dá para comprar um bom celular para jogos até R$ 1.500?",
    answer:
      "Para jogos populares, sim: o Galaxy A36 dá conta. Para jogos pesados em gráficos altos, o ideal é esticar para o Poco X7 Pro.",
  },
];

function MelhoresAte1500() {
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
            / Até R$ 1.500
          </nav>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#F2C38B]">
            Guia por orçamento · atualizado em outubro de 2026
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight !text-white sm:text-5xl">
            Melhor celular até R$ 1.500 em 2026: qual comprar
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
            Resposta curta: o <strong className="text-white">Galaxy A36</strong> é a melhor compra até R$ 1.500 para a
            maioria das pessoas. O <strong className="text-white">Moto G56</strong> é para quem quer mais espaço e
            resistência, e o <strong className="text-white">Galaxy A17</strong> é para gastar menos de R$ 1.000.
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
              <ProductPurchaseOptions productId={pick.id} pageType="guia" placement="budget_1500" compact />
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
                  <th className="p-4">Galaxy A36</th>
                  <th className="p-4">Moto G56</th>
                  <th className="p-4">Galaxy A17</th>
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
            <CircleAlert className="h-6 w-6 text-[#8B5A2B]" /> Modelos antigos que aparecem nessa faixa
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
            Dá para esticar até R$ 1.900?</h2>
          <ul className="mt-4 space-y-3 leading-7 text-slate-700">
            <li>
              <strong>Quer a melhor tela e câmera com estabilização:</strong> o{" "}
              <Link to="/comparativo/moto-g-max-vs-moto-g86" className="font-semibold underline">
                Moto G Max
              </Link>{" "}
              vale a pena até R$ 1.600.
            </li>
            <li>
              <strong>Quer bateria grande e carregador na caixa:</strong> o{" "}
              <Link to="/review/redmi-note-15-5g" className="font-semibold underline">
                Redmi Note 15 5G
              </Link>{" "}
              vale a pena até R$ 1.800.
            </li>
            <li>
              <strong>Em dúvida entre os dois:</strong>{" "}
              <Link to="/comparativo/moto-g86-vs-redmi-note-15-5g" className="font-semibold underline">
                veja o comparativo Moto G86 vs Redmi Note 15 5G
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
