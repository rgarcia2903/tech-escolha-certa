import { FaqJsonLd } from "@/components/site/FaqJsonLd";
import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, CircleAlert } from "lucide-react";
import { ProductPurchaseOptions } from "@/components/site/ProductPurchaseOptions";
import { HeroPickCTA } from "@/components/site/HeroPickCTA";
import { FAIR_PRICES, formatBRL, goodDealFor, type FairPriceId } from "@/lib/fair-prices";

// Fichas: Hardware.com.br (iPhone 17), Oficina da Net (17e, 16e, 16) e lista de mais vendidos da
// Amazon Brasil em 29/10/2026. Preços-alvo editoriais; não exibir preço de loja (política da Amazon).
const PAGE_TITLE = "Qual iPhone comprar em 2026? iPhone 17, 17e ou 16e";
const PAGE_DESCRIPTION =
  "Qual iPhone comprar em 2026: iPhone 17, 17e, 16e, 16 ou 15? Veja qual vale mais a pena para cada perfil, até quanto pagar e por que evitar o iPhone 16 de 128 GB pelo preço cheio.";

export const Route = createFileRoute("/qual-iphone-comprar")({
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
  component: QualIphoneComprar,
});

const PICKS = [
  {
    id: "iphone-17",
    badge: "Melhor para a maioria",
    name: "iPhone 17",
    version: "256 GB",
    summary:
      "Chip A19, tela de 6,3\" com 120 Hz, câmeras de 48 MP (principal e ultra-angular), selfie de 18 MP com Center Stage e 256 GB já na versão de entrada.",
    forWho: "Quem quer o iPhone completo mais barato e vai ficar com ele por muitos anos.",
    watchOut: "Foi lançado a R$ 7.999. Só compre perto do preço-alvo; desconto em cima de preço cheio não é oferta.",
  },
  {
    id: "iphone-17e",
    badge: "iPhone novo mais barato",
    name: "iPhone 17e",
    version: "256 GB",
    summary:
      "O mesmo chip A19 do iPhone 17, 256 GB, MagSafe e IP68, em um aparelho de 6,1\" e 170 g.",
    forWho: "Quem quer um iPhone atual para redes sociais, WhatsApp e fotos do dia a dia, gastando menos.",
    watchOut: "Tela de 60 Hz, uma câmera só e entalhe em vez de Dynamic Island.",
    reviewPath: "/comparativo/iphone-17-vs-iphone-17e",
  },
  {
    id: "iphone-16e",
    badge: "Porta de entrada",
    name: "iPhone 16e",
    version: "128 GB",
    summary: "O iPhone mais barato à venda: chip A18, IP68, Face ID e uma bateria que dura o dia todo.",
    forWho: "Quem quer entrar no iPhone gastando o mínimo.",
    watchOut: "Sem MagSafe, 128 GB e uma câmera só. Só vale até R$ 3.300.",
    reviewPath: "/review/iphone-16e",
  },
];

const TABLE: [string, string, string, string][] = [
  [
    "Compre se estiver até",
    formatBRL(goodDealFor("iphone-17")!),
    formatBRL(goodDealFor("iphone-17e")!),
    formatBRL(goodDealFor("iphone-16e")!),
  ],
  ["Chip", "A19", "A19", "A18"],
  ["Tela", '6,3" • 120 Hz', '6,1" • 60 Hz', '6,1" • 60 Hz'],
  ["Câmeras traseiras", "48 + 48 MP", "48 MP", "48 MP"],
  ["Armazenamento base", "256 GB", "256 GB", "128 GB"],
  ["MagSafe", "Sim", "Sim", "Não"],
  ["Dynamic Island", "Sim", "Não", "Não"],
];

const OLDER: { id: FairPriceId; reviewPath: string }[] = [
  { id: "iphone-16", reviewPath: "/review/iphone-16" },
  { id: "iphone-15", reviewPath: "/review/iphone-15" },
];

const COMPARISONS = [
  { to: "/comparativo/iphone-17-vs-iphone-17e", label: "iPhone 17 vs iPhone 17e" },
  { to: "/comparativo/iphone-15-vs-galaxy-s24", label: "iPhone 15 vs Galaxy S24" },
];

const FAQ = [
  {
    question: "Qual iPhone comprar em 2026?",
    answer:
      "Para a maioria das pessoas, o iPhone 17: tela de 120 Hz, câmera ultra-angular de 48 MP e 256 GB. Para gastar menos com chip atual, o iPhone 17e. Para entrar no iPhone gastando o mínimo, o iPhone 16e.",
  },
  {
    question: "Vale a pena comprar o iPhone 16 em 2026?",
    answer:
      "Só abaixo de R$ 4.000. A versão de 128 GB costuma custar quase o mesmo que o iPhone 17e de 256 GB, que é mais novo.",
  },
  {
    question: "Qual o iPhone mais barato que vale a pena?",
    answer: "O iPhone 16e, até cerca de R$ 3.300. Ele tem chip A18, IP68 e boa bateria.",
  },
  {
    question: "E o iPhone 18?",
    answer:
      "Em setembro de 2026 a Apple lançou só o iPhone 18 Pro, o 18 Pro Max e o dobrável. O iPhone 18 comum só deve chegar em 2027, então o iPhone 17 segue como o iPhone de entrada atual.",
  },
];

function QualIphoneComprar() {
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
            / Qual iPhone comprar
          </nav>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#F2C38B]">
            Guia por orçamento · atualizado em outubro de 2026
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight !text-white sm:text-5xl">
            Qual iPhone comprar em 2026?
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
            Resposta curta: o <strong className="text-white">iPhone 17</strong> é o melhor para a maioria das pessoas.
            O <strong className="text-white">iPhone 17e</strong> é o iPhone novo mais barato, com o mesmo chip, e o{" "}
            <strong className="text-white">iPhone 16e</strong> é a porta de entrada. Evite o iPhone 16 de 128 GB pelo
            preço cheio: ele custa quase o mesmo que modelos mais novos.
          </p>
          <HeroPickCTA productId="iphone-17" pageType="guia" />
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
              <ProductPurchaseOptions productId={pick.id} pageType="guia" placement="iphone_hub" compact />
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
                  <th className="p-4">iPhone 17</th>
                  <th className="p-4">iPhone 17e</th>
                  <th className="p-4">iPhone 16e</th>
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
            <CircleAlert className="h-6 w-6 text-[#8B5A2B]" /> iPhone 16 e iPhone 15: só com desconto
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
            Prefere Android?</h2>
          <ul className="mt-4 space-y-3 leading-7 text-slate-700">
            <li>
              <strong>Quer suporte longo como o do iPhone:</strong> o{" "}
              <Link to="/review/galaxy-s25-fe" className="font-semibold underline">
                Galaxy S25 FE
              </Link>{" "}
              tem sete anos de atualizações.
            </li>
            <li>
              <strong>Quer bateria e recarga muito rápida:</strong> o{" "}
              <Link to="/review/edge-60-pro" className="font-semibold underline">
                Motorola Edge 60 Pro
              </Link>{" "}
              tem 6.000 mAh e 90 W.
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
            Comparativos de iPhone
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
