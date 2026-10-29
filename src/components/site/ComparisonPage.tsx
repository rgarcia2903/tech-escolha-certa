import { FaqJsonLd } from "@/components/site/FaqJsonLd";
import { Link } from "@tanstack/react-router";
import { Check, Minus } from "lucide-react";
import { HeroPickCTA } from "@/components/site/HeroPickCTA";
import { ProductPurchaseOptions } from "@/components/site/ProductPurchaseOptions";
import type { Comparison } from "@/lib/comparisons";

/** Página "X ou Y": resposta curta no topo, tabela com vencedor por item e botões das lojas. */
export function ComparisonPage({ c }: { c: Comparison }) {
  const winsA = c.rows.filter((r) => r.winner === "a").length;
  const winsB = c.rows.filter((r) => r.winner === "b").length;
  return (
    <main className="min-h-screen bg-[#F7F2EB] text-slate-900">
      <section className="bg-[#0F3F4A] text-white">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
          <nav aria-label="Navegação" className="text-sm text-slate-300">
            <Link to="/" className="underline">
              Home
            </Link>{" "}
            /{" "}
            <Link to="/comparativos" className="underline">
              Comparativos
            </Link>{" "}
            / {c.a.name} ou {c.b.name}
          </nav>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#F2C38B]">
            Comparativo · atualizado em outubro de 2026
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight !text-white sm:text-5xl">
            {c.a.name} ou {c.b.name}: qual comprar?
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
            <strong className="text-white">Resposta curta:</strong> {c.shortAnswer}
          </p>
          <p className="mt-4 text-sm text-slate-300">
            Placar na ficha: {c.a.name} {winsA} × {winsB} {c.b.name}.{" "}
            <Link to="/divulgacao-de-afiliados" className="underline">
              Usamos links de afiliado
            </Link>
            .
          </p>
          <div className="grid gap-2 sm:grid-cols-2 sm:gap-6">
            <HeroPickCTA productId={c.a.id} pageType="comparativo" />
            <HeroPickCTA productId={c.b.id} pageType="comparativo" />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
        <section aria-labelledby="ficha">
          <h2 id="ficha" className="text-2xl font-extrabold text-[#0F3F4A] sm:text-3xl">
            Lado a lado
          </h2>
          <div className="mt-5 overflow-x-auto rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-[#0F3F4A] text-white">
                <tr>
                  <th className="p-4"> </th>
                  <th className="p-4">{c.a.name}</th>
                  <th className="p-4">{c.b.name}</th>
                </tr>
              </thead>
              <tbody>
                {c.rows.map((row) => (
                  <tr key={row.label} className="border-t border-slate-100 align-top">
                    <th scope="row" className="p-4 font-semibold text-[#0F3F4A]">
                      {row.label}
                    </th>
                    {(["a", "b"] as const).map((side) => (
                      <td
                        key={side}
                        className={`p-4 ${row.winner === side ? "bg-emerald-50 font-semibold text-emerald-900" : "text-slate-700"}`}
                      >
                        <span className="inline-flex items-start gap-1.5">
                          {row.winner === side ? (
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-label="Vence" />
                          ) : row.winner === "tie" ? (
                            <Minus className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-label="Empate" />
                          ) : null}
                          {row[side]}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            "Compre se estiver até" é a nossa recomendação, não o preço da loja. Veja o preço de hoje no anúncio.
          </p>
        </section>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {([
            [c.a, c.chooseA],
            [c.b, c.chooseB],
          ] as const).map(([p, reasons]) => (
            <section key={p.id} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-xl font-extrabold text-[#0F3F4A]">Escolha o {p.name} se...</h2>
              <ul className="mt-4 space-y-2 text-slate-700">
                {reasons.map((r) => (
                  <li key={r} className="flex gap-2 leading-6">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                    {r}
                  </li>
                ))}
              </ul>
              <ProductPurchaseOptions
                productId={p.id}
                pageType="comparativo"
                placement="comparison_choice"
                compact
                className="mt-5"
              />
              <Link to={p.reviewPath} className="mt-4 inline-block text-sm font-semibold text-[#0F3F4A] underline">
                Ler o review completo do {p.name}
              </Link>
            </section>
          ))}
        </div>

        <FaqJsonLd faq={c.faq} />

        <section aria-labelledby="faq" className="mt-14">
          <h2 id="faq" className="text-2xl font-bold text-[#0F3F4A]">
            Perguntas frequentes
          </h2>
          <div className="mt-5 space-y-3">
            {c.faq.map((item) => (
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
            Veja até quanto vale pagar em cada celular
          </Link>
          . Mais decisões em{" "}
          <Link to="/comparativos" className="font-semibold underline">
            todos os comparativos
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
