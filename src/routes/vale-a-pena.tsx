import { createFileRoute, Link } from "@tanstack/react-router";
import { FaqJsonLd } from "@/components/site/FaqJsonLd";
import { FAIR_PRICES, formatBRL, type FairPriceId } from "@/lib/fair-prices";

// Índice dos vereditos "vale a pena em 2026". Os valores vêm de FAIR_PRICES (preço-alvo
// editorial); não exibir preço de loja (política da Amazon).
const PAGE_DESCRIPTION =
  "iPhone, Galaxy, Redmi, Poco e Moto antigos: veja se ainda vale a pena comprar em 2026, até quanto pagar em cada um e qual modelo novo levar no lugar.";

type Item = { id: FairPriceId; path: string };

const GROUPS: { brand: string; items: Item[] }[] = [
  {
    brand: "Samsung",
    items: [
      { id: "galaxy-s24-ultra", path: "/review/galaxy-s24-ultra" },
      { id: "galaxy-s23-ultra", path: "/review/galaxy-s23-ultra" },
      { id: "galaxy-s24", path: "/review/galaxy-s24" },
      { id: "galaxy-s24-fe", path: "/review/galaxy-s24-fe" },
      { id: "galaxy-s23", path: "/review/galaxy-s23" },
      { id: "galaxy-s23-fe", path: "/review/galaxy-s23-fe" },
      { id: "galaxy-s22", path: "/review/galaxy-s22" },
      { id: "galaxy-s21-fe", path: "/review/galaxy-s21-fe" },
      { id: "galaxy-s21", path: "/review/galaxy-s21" },
      { id: "galaxy-a56", path: "/review/galaxy-a56" },
      { id: "galaxy-a55", path: "/review/galaxy-a55" },
      { id: "galaxy-a54", path: "/review/galaxy-a54" },
      { id: "galaxy-a35", path: "/review/galaxy-a35" },
      { id: "galaxy-a34", path: "/review/galaxy-a34" },
      { id: "galaxy-a16", path: "/review/galaxy-a16" },
      { id: "galaxy-a15", path: "/review/galaxy-a15" },
      { id: "galaxy-a06", path: "/review/galaxy-a06" },
    ],
  },
  {
    brand: "iPhone",
    items: [
      { id: "iphone-16", path: "/review/iphone-16" },
      { id: "iphone-16e", path: "/review/iphone-16e" },
      { id: "iphone-15-pro", path: "/review/iphone-15-pro" },
      { id: "iphone-15", path: "/review/iphone-15" },
      { id: "iphone-14-pro", path: "/review/iphone-14-pro" },
      { id: "iphone-14", path: "/review/iphone-14" },
      { id: "iphone-13-pro", path: "/review/iphone-13-pro" },
      { id: "iphone-13", path: "/review/iphone-13" },
      { id: "iphone-12", path: "/review/iphone-12" },
      { id: "iphone-11", path: "/review/iphone-11" },
      { id: "iphone-xr", path: "/review/iphone-xr" },
    ],
  },
  {
    brand: "Xiaomi, Redmi e Poco",
    items: [
      { id: "poco-x7-pro", path: "/review/poco-x7-pro" },
      { id: "poco-x6-pro", path: "/review/poco-x6-pro" },
      { id: "poco-f6", path: "/review/poco-f6" },
      { id: "poco-x6-5g", path: "/review/poco-x6" },
      { id: "poco-x5-pro", path: "/review/poco-x5-pro" },
      { id: "redmi-note-14", path: "/review/redmi-note-14" },
      { id: "redmi-note-13-pro", path: "/review/redmi-note-13-pro" },
      { id: "redmi-note-13-5g", path: "/review/redmi-note-13" },
      { id: "redmi-note-12", path: "/review/redmi-note-12" },
      { id: "redmi-13c", path: "/review/redmi-13c" },
    ],
  },
  {
    brand: "Motorola",
    items: [
      { id: "edge-60-pro", path: "/review/edge-60-pro" },
      { id: "moto-g86-5g", path: "/review/moto-g86-5g" },
      { id: "moto-g-max", path: "/comparativo/moto-g-max-vs-moto-g86" },
      { id: "moto-g56-5g", path: "/review/moto-g56-5g" },
      { id: "moto-g84", path: "/review/moto-g84" },
      { id: "moto-g75", path: "/review/moto-g75" },
      { id: "moto-g85", path: "/review/moto-g85" },
      { id: "moto-g54", path: "/review/moto-g54" },
      { id: "moto-g35", path: "/review/moto-g35" },
      { id: "moto-g24", path: "/review/moto-g24" },
    ],
  },
];

const COUNT = GROUPS.reduce((n, g) => n + g.items.length, 0);
const PAGE_TITLE = `Celular vale a pena em 2026? Veredito de ${COUNT} modelos`;

const FAQ = [
  {
    question: "Como vocês definem até quanto vale pagar?",
    answer:
      "Comparamos cada modelo com a alternativa mais sensata à venda hoje, normalmente o sucessor. O preço-alvo fica abaixo do preço dessa alternativa: acima dele, o modelo novo entrega mais pelo dinheiro. Revisamos os valores todo mês.",
  },
  {
    question: "O preço-alvo é o preço da loja?",
    answer:
      "Não. É uma recomendação nossa. Confira o preço de hoje no anúncio e compare com o valor indicado em cada veredito.",
  },
  {
    question: "Vale a pena comprar celular antigo em 2026?",
    answer:
      "Às vezes. Modelos que ainda recebem atualizações, como o Galaxy S24 Ultra ou o iPhone 15 Pro, continuam boas compras abaixo do preço-alvo. Modelos que já pararam de atualizar, como o iPhone XR e o Galaxy S22, só compensam muito baratos.",
  },
];

export const Route = createFileRoute("/vale-a-pena")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
    ],
  }),
  component: ValeAPena,
});

function ValeAPena() {
  return (
    <main className="min-h-screen bg-[#F7F2EB] text-slate-900">
      <section className="bg-[#0F3F4A] text-white">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
          <nav aria-label="Navegação" className="text-sm text-slate-300">
            <Link to="/" className="underline">
              Home
            </Link>{" "}
            / Vale a pena em 2026?
          </nav>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#F2C38B]">
            Vereditos · atualizado em outubro de 2026
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight !text-white sm:text-5xl">
            Esse celular ainda vale a pena em 2026?
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
            Para cada modelo, dizemos até quanto vale pagar e qual celular novo levar no lugar quando o preço passa disso.
            Escolha o seu abaixo.
          </p>
          <nav aria-label="Marcas" className="mt-6 flex flex-wrap gap-2">
            {GROUPS.map((g) => (
              <a
                key={g.brand}
                href={`#${slug(g.brand)}`}
                className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/20"
              >
                {g.brand}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
        {GROUPS.map((g) => (
          <section key={g.brand} aria-labelledby={slug(g.brand)} className="mt-10 first:mt-0">
            <h2 id={slug(g.brand)} className="scroll-mt-24 text-2xl font-extrabold text-[#0F3F4A] sm:text-3xl">
              {g.brand}
            </h2>
            <ul className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
              {g.items.map(({ id, path }) => {
                const fp = FAIR_PRICES[id];
                return (
                  <li key={id}>
                    <Link
                      to={path}
                      className="flex h-full flex-col rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 transition hover:ring-[#0F3F4A] sm:p-5"
                    >
                      <span className="font-bold text-[#0F3F4A]">{fp.productName}</span>
                      <span className="mt-1 text-sm text-slate-700">
                        Vale até <strong className="text-[#8B5A2B]">{formatBRL(fp.maxPrice)}</strong>
                      </span>
                      <span className="mt-1 text-sm text-slate-600">Acima disso: {fp.alternativeName}</span>
                      <span className="mt-3 text-sm font-semibold text-[#0F3F4A] underline">Ver o veredito</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}

        <p className="mt-10 rounded-2xl bg-[#FFF8EF] p-4 text-sm leading-6 text-slate-700">
          Os valores são recomendações nossas, não o preço da loja. Confira o preço de hoje no anúncio.{" "}
          <Link to="/divulgacao-de-afiliados" className="underline">
            Usamos links de afiliado
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

function slug(text: string) {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
