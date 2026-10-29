import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, CircleAlert, ShieldCheck } from "lucide-react";
import { ProductPurchaseOptions } from "@/components/site/ProductPurchaseOptions";
import { AVOID, BLACK_FRIDAY, BUDGET_GROUPS, ceilingFor, daysUntilBlackFriday } from "@/lib/black-friday";
import { FAIR_PRICES, formatBRL } from "@/lib/fair-prices";
import { getProduct } from "@/lib/product-catalog";

const PAGE_TITLE = `Black Friday de celulares ${BLACK_FRIDAY.year}: até quanto pagar`;
const PAGE_DESCRIPTION = `Até quanto vale pagar em cada celular na Black Friday ${BLACK_FRIDAY.year}: Galaxy, Motorola, Redmi e Poco. Veja o preço-alvo de cada modelo e quais "ofertas" evitar.`;

export const Route = createFileRoute("/black-friday-celulares")({
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
  component: BlackFridayPage,
});

const CHECKLIST = [
  "Compare o preço final com o preço-alvo desta página, não com o preço riscado do anúncio.",
  "Confira a versão: memória, armazenamento e se é 4G ou 5G mudam o preço e o aparelho.",
  "Veja quem vende. \"Vendido e entregue pela Amazon\" ou loja oficial dão mais segurança.",
  "Some frete e confira se o preço à vista é no Pix ou no cartão.",
  "Desconfie de preço muito abaixo do mercado em vendedor sem histórico.",
];

const FAQ = [
  {
    question: "Como saber se a oferta de Black Friday é real?",
    answer:
      "Ignore o preço riscado e compare o preço final com o preço-alvo do modelo nesta página. Se ficar abaixo, é um bom negócio. Se ficar acima, o \"desconto\" provavelmente é sobre preço inflado.",
  },
  {
    question: "Vale esperar a Black Friday para comprar celular?",
    answer:
      "Se você não precisa trocar agora, vale acompanhar. Mas preços baixos também aparecem fora da data. Se o modelo que você quer já estiver abaixo do preço-alvo, não há motivo para esperar.",
  },
  {
    question: "Como vocês definem o preço-alvo?",
    answer: `É uma avaliação editorial: comparamos o modelo com os concorrentes e sucessores à venda e indicamos até quanto ele ainda é a melhor compra. Revisado em ${BLACK_FRIDAY.reviewedAt}; vamos revisar de novo perto da Black Friday. Não é o preço da loja: o preço atual aparece só no anúncio.`,
  },
];

function BlackFridayPage() {
  return (
    <main className="min-h-screen bg-[#F7F2EB] text-slate-900">
      <section className="bg-[#0F3F4A] text-white">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
          <nav aria-label="Navegação" className="text-sm text-slate-300">
            <Link to="/" className="underline">
              Home
            </Link>{" "}
            / Black Friday {BLACK_FRIDAY.year}
          </nav>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#F2C38B]">
            Black Friday {BLACK_FRIDAY.year} · {BLACK_FRIDAY.date}
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight !text-white sm:text-5xl">
            Black Friday de celulares: quanto vale pagar em cada modelo
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
            Para cada celular, dizemos até quanto vale pagar. Se o preço na loja estiver abaixo do preço-alvo, é
            um bom negócio. Se estiver acima, o desconto é de fachada.
          </p>
          <p className="mt-4 text-sm text-slate-300">
            {daysUntilBlackFriday() > 0 && (
              <strong suppressHydrationWarning className="mr-1 text-[#F2C38B]">
                Faltam {daysUntilBlackFriday()} dias.
              </strong>
            )}
            Preços-alvo revisados em {BLACK_FRIDAY.reviewedAt}.{" "}
            <Link to="/divulgacao-de-afiliados" className="underline">
              Usamos links de afiliado
            </Link>
            .
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
        <section aria-labelledby="como-usar" className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
          <h2 id="como-usar" className="flex items-center gap-2 text-2xl font-bold text-[#0F3F4A]">
            <ShieldCheck className="h-6 w-6 text-[#8B5A2B]" /> Antes de clicar em comprar
          </h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            {CHECKLIST.map((item) => (
              <li key={item} className="flex gap-2 leading-7">
                <span aria-hidden className="text-[#8B5A2B]">
                  •
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {BUDGET_GROUPS.map((group) => (
          <section key={group.title} className="mt-12" aria-label={group.title}>
            <h2 className="text-2xl font-extrabold text-[#0F3F4A] sm:text-3xl">{group.title}</h2>
            <div className="mt-5 grid gap-5">
              {group.items.map((item) => {
                const product = getProduct(item.productId);
                if (!product) return null;
                const ceiling = ceilingFor(item.productId);
                return (
                  <article
                    key={item.productId}
                    className="grid gap-5 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:grid-cols-[1fr_300px]"
                  >
                    <div>
                      <h3 className="text-xl font-bold text-[#0F3F4A]">{product.name}</h3>
                      <p className="mt-1 text-sm text-slate-500">{item.version}</p>
                      {ceiling !== undefined && (
                        <div className="mt-4 rounded-2xl bg-[#FFF8EF] p-4">
                          <p className="text-xs font-bold uppercase tracking-wider text-[#8B5A2B]">
                            Compre se estiver até
                          </p>
                          <p className="text-3xl font-extrabold text-[#8B5A2B]">{formatBRL(ceiling)}</p>
                          <p className="mt-1 text-sm text-slate-600">
                            Abaixo disso, é bom negócio. Veja o preço de hoje na loja.
                          </p>
                        </div>
                      )}
                      <p className="mt-4 leading-7 text-slate-700">{item.note}</p>
                      {item.reviewPath && (
                        <Link to={item.reviewPath} className="mt-3 inline-block text-sm font-semibold text-[#0F3F4A] underline">
                          Ler a análise do {product.name}
                        </Link>
                      )}
                    </div>
                    <ProductPurchaseOptions
                      productId={item.productId}
                      pageType="black_friday"
                      placement="black_friday"
                      compact
                    />
                  </article>
                );
              })}
            </div>
          </section>
        ))}

        <section aria-labelledby="evitar" className="mt-14 rounded-3xl border-2 border-[#8B5A2B]/30 bg-[#FFF8EF] p-6 sm:p-8">
          <h2 id="evitar" className="flex items-center gap-2 text-2xl font-bold text-[#0F3F4A]">
            <CircleAlert className="h-6 w-6 text-[#8B5A2B]" /> "Ofertas" que só valem abaixo do teto
          </h2>
          <p className="mt-3 leading-7 text-slate-700">
            Modelos de gerações anteriores costumam aparecer com descontos grandes. Acima destes valores, o sucessor
            entrega mais pelo mesmo dinheiro.
          </p>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {AVOID.map(({ id, reviewPath }) => {
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

        <section aria-labelledby="faq" className="mt-14">
          <h2 id="faq" className="flex items-center gap-2 text-2xl font-bold text-[#0F3F4A]">
            <BadgeCheck className="h-6 w-6 text-[#8B5A2B]" /> Perguntas frequentes
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

        <p className="mt-10 text-xs text-slate-500">
          Os preços são uma referência editorial, não o preço da loja no momento da sua compra. Preços e
          disponibilidade mudam; confira o valor final no anúncio.{" "}
          <Link to="/como-avaliamos" className="underline">
            Como avaliamos
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
