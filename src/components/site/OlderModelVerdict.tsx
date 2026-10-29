import { Link } from "@tanstack/react-router";
import { Check, X } from "lucide-react";
import { FairPriceBox } from "@/components/site/FairPriceBox";
import { HeroPickCTA } from "@/components/site/HeroPickCTA";
import { ProductPurchaseOptions } from "@/components/site/ProductPurchaseOptions";
import type { FairPriceId } from "@/lib/fair-prices";

export type OlderModelVerdictProps = {
  fairPriceId: FairPriceId;
  name: string;
  launched: string;
  shortVerdict: string;
  alternative: { id: string; name: string; reviewPath: string };
  /** Outra opção, para outro perfil (ex.: jogos). */
  secondary?: { id: string; name: string; reviewPath: string; why: string };
  specs: [string, string][];
  /** [item, este modelo, alternativa, quem vence] */
  versus: [string, string, string, "old" | "new" | "tie"][];
  stillGood: string[];
  whyNot: string[];
  versionNote: { text: string; proPath: string; proName: string };
  faq: { question: string; answer: string }[];
};

/** Página "vale a pena?" de modelo de geração anterior: veredito e sucessor no topo. */
export function OlderModelVerdict(p: OlderModelVerdictProps) {
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
            / {p.name}
          </nav>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#F2C38B]">
            Veredito · atualizado em outubro de 2026 · lançado em {p.launched}
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight !text-white sm:text-5xl">
            {p.name} vale a pena em 2026?
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
            <strong className="text-white">Resposta curta:</strong> {p.shortVerdict}
          </p>
          <p className="mt-6 text-sm font-semibold text-[#F2C38B]">A compra que recomendamos hoje:</p>
          <HeroPickCTA productId={p.alternative.id} pageType="review" />
          <p className="mt-4 text-sm text-slate-300">
            <Link to={p.alternative.reviewPath} className="underline">
              Ler o review do {p.alternative.name}
            </Link>{" "}
            ·{" "}
            <Link to="/divulgacao-de-afiliados" className="underline">
              Usamos links de afiliado
            </Link>
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
        <FairPriceBox id={p.fairPriceId} />

        <section aria-labelledby="versus" className="mt-12">
          <h2 id="versus" className="text-2xl font-extrabold text-[#0F3F4A] sm:text-3xl">
            {p.name} ou {p.alternative.name}?
          </h2>
          <div className="mt-5 overflow-x-auto rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead className="bg-[#0F3F4A] text-white">
                <tr>
                  <th className="p-4"> </th>
                  <th className="p-4">{p.name}</th>
                  <th className="p-4">{p.alternative.name}</th>
                </tr>
              </thead>
              <tbody>
                {p.versus.map(([label, oldV, newV, winner]) => (
                  <tr key={label} className="border-t border-slate-100 align-top">
                    <th scope="row" className="p-4 font-semibold text-[#0F3F4A]">
                      {label}
                    </th>
                    <td className={`p-4 ${winner === "old" ? "bg-emerald-50 font-semibold text-emerald-900" : "text-slate-700"}`}>
                      {oldV}
                    </td>
                    <td className={`p-4 ${winner === "new" ? "bg-emerald-50 font-semibold text-emerald-900" : "text-slate-700"}`}>
                      {newV}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-extrabold text-[#0F3F4A]">O que ainda é bom</h2>
            <ul className="mt-4 space-y-2 text-slate-700">
              {p.stillGood.map((t) => (
                <li key={t} className="flex gap-2 leading-6">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </section>
          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-extrabold text-[#0F3F4A]">Por que não é a melhor compra hoje</h2>
            <ul className="mt-4 space-y-2 text-slate-700">
              {p.whyNot.map((t) => (
                <li key={t} className="flex gap-2 leading-6">
                  <X className="mt-1 h-4 w-4 shrink-0 text-rose-600" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-12 grid gap-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:grid-cols-[1fr_300px]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B5A2B]">Recomendado no lugar</p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#0F3F4A]">{p.alternative.name}</h2>
            <p className="mt-3 leading-7 text-slate-700">
              É o modelo que entrega mais pelo mesmo dinheiro hoje.{" "}
              <Link to={p.alternative.reviewPath} className="font-semibold underline">
                Veja o review completo
              </Link>
              .
            </p>
            {p.secondary && (
              <p className="mt-4 leading-7 text-slate-700">
                <strong>{p.secondary.why}</strong>{" "}
                <Link to={p.secondary.reviewPath} className="font-semibold underline">
                  Veja o {p.secondary.name}
                </Link>
                .
              </p>
            )}
          </div>
          <ProductPurchaseOptions
            productId={p.alternative.id}
            pageType="review"
            placement="older_model_alternative"
            compact
          />
        </section>

        <section aria-labelledby="ficha" className="mt-12">
          <h2 id="ficha" className="text-2xl font-bold text-[#0F3F4A]">
            Ficha técnica do {p.name}
          </h2>
          <dl className="mt-5 grid gap-px overflow-hidden rounded-3xl bg-slate-200 shadow-sm ring-1 ring-slate-200 sm:grid-cols-2">
            {p.specs.map(([k, v]) => (
              <div key={k} className="bg-white p-4">
                <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">{k}</dt>
                <dd className="mt-1 text-slate-800">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 rounded-2xl bg-[#FFF8EF] p-4 text-sm leading-6 text-slate-700">
            <strong>Atenção à versão:</strong> {p.versionNote.text}{" "}
            <Link to={p.versionNote.proPath} className="font-semibold underline">
              Procurando o {p.versionNote.proName}? Veja o veredito dele
            </Link>
            .
          </p>
        </section>

        <section aria-labelledby="faq" className="mt-12">
          <h2 id="faq" className="text-2xl font-bold text-[#0F3F4A]">
            Perguntas frequentes
          </h2>
          <div className="mt-5 space-y-3">
            {p.faq.map((item) => (
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
