import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, CircleAlert } from "lucide-react";
import { ProductPurchaseOptions } from "@/components/site/ProductPurchaseOptions";
import { HeroPickCTA } from "@/components/site/HeroPickCTA";
import { FAIR_PRICES, formatBRL } from "@/lib/fair-prices";

// Tetos de preço editoriais em src/lib/fair-prices.ts. Não exibir preço de loja (política da Amazon).
const PAGE_TITLE = "Melhor celular Motorola em 2026: qual comprar e até quanto pagar";
const PAGE_DESCRIPTION =
  "Moto G56, Moto G86 ou Edge 60 Pro? Veja qual Motorola comprar em 2026 para cada perfil, até quanto vale pagar e quando outra marca é a melhor escolha.";

export const Route = createFileRoute("/melhores-celulares-motorola")({
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
  component: MelhoresCelularesMotorola,
});

const PICKS = [
  {
    id: "moto-g86-5g" as const,
    badge: "Melhor para a maioria",
    name: "Moto G86 5G",
    summary:
      "A melhor tela entre os intermediários da Motorola (pOLED 1.5K, 120 Hz), câmera Sony com estabilização óptica, IP68/IP69 e carregador de 33 W na caixa.",
    forWho: "Quem quer um celular completo para vídeos, fotos e uso diário, gastando menos de R$ 2.000.",
    watchOut: "Duas atualizações de Android. Para jogos pesados, o Poco X7 Pro é mais forte.",
    reviewPath: "/review/moto-g86-5g",
  },
  {
    id: "edge-60-pro" as const,
    badge: "Melhor bateria e câmera",
    name: "Motorola Edge 60 Pro",
    summary:
      "Bateria de 6.000 mAh com recarga de 90 W e sem fio, três câmeras de 50/50/10 MP com zoom óptico de 3x, 12 GB de RAM e IP69.",
    forWho: "Quem quer recursos de topo de linha, como zoom óptico e recarga sem fio, por preço de intermediário premium.",
    watchOut: "Três anos de atualizações. Se você fica muitos anos com o celular, o Galaxy S25 FE dura mais em suporte.",
    reviewPath: "/review/edge-60-pro",
  },
  {
    id: "moto-g56-5g" as const,
    badge: "Mais resistente e barato",
    name: "Moto G56 5G",
    summary:
      "256 GB com cartão de memória, bateria de 5.200 mAh, IP68/IP69, entrada para fone com fio e alto-falantes estéreo.",
    forWho: "Quem precisa de um aparelho resistente e com muito espaço, e prioriza durabilidade física a tela.",
    watchOut: "Tela LCD. Pelo preço de hoje, o Galaxy A36 é melhor; o G56 só compensa com desconto.",
    reviewPath: "/review/moto-g56-5g",
  },
];

const TABLE: [string, string, string, string][] = [
  ["Tela", "LCD 6,72\" 120 Hz", "pOLED 1.5K 120 Hz", "pOLED curva 120 Hz"],
  ["Processador", "Dimensity 7060", "Dimensity 7300", "Dimensity 8350"],
  ["RAM / armazenamento", "8 GB / 256 GB + microSD", "8 GB / 256 GB", "12 GB / 256 GB"],
  ["Câmera principal", "50 MP", "50 MP Sony com OIS", "50 MP Sony com OIS"],
  ["Zoom óptico", "Não", "Não", "Sim, 3x"],
  ["Bateria", "5.200 mAh", "5.200 mAh", "6.000 mAh"],
  ["Recarga", "30 W", "33 W (na caixa)", "90 W + sem fio 15 W"],
  ["Proteção", "IP68, IP69 e MIL-STD", "IP68, IP69 e MIL-STD", "IP68, IP69 e MIL-STD"],
  ["Atualizações", "2 de sistema, 3 anos segurança", "2 de sistema, 4 anos segurança", "3 anos"],
];

const FAQ = [
  {
    question: "Qual o melhor celular Motorola em 2026?",
    answer:
      "Para a maioria das pessoas, o Moto G86 5G: tela pOLED excelente, câmera com estabilização óptica, IP69 e preço abaixo de R$ 2.000. Quem quer mais bateria, recarga rápida e zoom óptico deve olhar o Edge 60 Pro.",
  },
  {
    question: "Qual o Motorola com melhor custo-benefício?",
    answer:
      "O Moto G86 5G, desde que custe até cerca de R$ 1.900. O Moto G56 só é custo-benefício abaixo de R$ 1.200; acima disso, o Galaxy A36 entrega mais.",
  },
  {
    question: "Motorola recebe atualizações por quanto tempo?",
    answer:
      "Menos que Samsung. Os Moto G desta lista recebem duas atualizações de Android e três ou quatro anos de segurança; o Edge 60 Pro, três anos. Samsung promete seis a sete anos nos modelos atuais.",
  },
  {
    question: "Motorola ou Samsung?",
    answer:
      "Motorola costuma entregar mais tela, bateria, resistência e recarga pelo preço. Samsung vence em tempo de atualização. Se você troca de celular a cada dois ou três anos, a Motorola tende a valer mais.",
  },
];

function MelhoresCelularesMotorola() {
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
            / Motorola
          </nav>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#F2C38B]">
            Guia por marca · atualizado em outubro de 2026
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight !text-white sm:text-5xl">
            Melhor celular Motorola em 2026: qual comprar
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
            Resposta curta: o <strong className="text-white">Moto G86 5G</strong> para a maioria das pessoas, o{" "}
            <strong className="text-white">Edge 60 Pro</strong> para quem quer bateria e câmera de topo, e o{" "}
            <strong className="text-white">Moto G56 5G</strong> só se aparecer abaixo de {formatBRL(1200)}.
          </p>
          <HeroPickCTA productId="moto-g86-5g" pageType="guia" />
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
          {PICKS.map((pick, index) => {
            const fp = FAIR_PRICES[pick.id];
            return (
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
                    Compre se estiver até <strong>{formatBRL(fp.maxPrice)}</strong>. Acima disso, prefira o{" "}
                    {fp.alternativeName}.
                  </p>
                  <Link to={pick.reviewPath} className="mt-4 inline-block font-semibold text-[#0F3F4A] underline">
                    Ler o review completo do {pick.name}
                  </Link>
                </div>
                <ProductPurchaseOptions productId={pick.id} pageType="guia" placement="brand_motorola" compact />
              </article>
            );
          })}
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
                  <th className="p-4">Moto G56 5G</th>
                  <th className="p-4">Moto G86 5G</th>
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
          aria-labelledby="outra-marca"
          className="mt-14 rounded-3xl border-2 border-[#8B5A2B]/30 bg-[#FFF8EF] p-6 sm:p-8"
        >
          <h2 id="outra-marca" className="flex items-center gap-2 text-2xl font-bold text-[#0F3F4A]">
            <CircleAlert className="h-6 w-6 text-[#8B5A2B]" /> Quando outra marca é melhor
          </h2>
          <ul className="mt-4 space-y-3 leading-7 text-slate-700">
            <li>
              <strong>Quer o celular por muitos anos:</strong> a Samsung atualiza por mais tempo. Veja o{" "}
              <Link to="/review/galaxy-s25-fe" className="font-semibold underline">
                Galaxy S25 FE
              </Link>{" "}
              ou o{" "}
              <Link to="/review/galaxy-a36-5g" className="font-semibold underline">
                Galaxy A36
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
              <strong>Prioriza bateria e carregador na caixa gastando menos:</strong> compare com o{" "}
              <Link to="/review/redmi-note-15-5g" className="font-semibold underline">
                Redmi Note 15 5G
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

        <p className="mt-10 text-sm text-slate-600">
          Comprando na Black Friday?{" "}
          <Link to="/black-friday-celulares" className="font-semibold underline">
            Veja quanto cada celular custava antes da data
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
