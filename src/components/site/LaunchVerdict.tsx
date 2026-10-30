import { Link } from "@tanstack/react-router";
import { Check, CircleAlert } from "lucide-react";
import { FaqJsonLd } from "@/components/site/FaqJsonLd";
import { HeroPickCTA } from "@/components/site/HeroPickCTA";
import { ProductPurchaseOptions } from "@/components/site/ProductPurchaseOptions";
import { formatBRL, goodDealFor } from "@/lib/fair-prices";
import type { Launch } from "@/lib/launches";

/** Página "X é bom? Vale a pena?" de um lançamento à venda: veredito, preço-alvo e lojas no topo. */
export function LaunchVerdict({ l }: { l: Launch }) {
  const target = goodDealFor(l.id);
  return (
    <main className="min-h-screen bg-[#F7F2EB] text-slate-900">
      <section className="bg-[#0F3F4A] text-white">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
          <nav aria-label="Navegação" className="text-sm text-slate-300">
            <Link to="/" className="underline">
              Home
            </Link>{" "}
            /{" "}
            <Link to="/lancamentos" className="underline">
              Lançamentos
            </Link>{" "}
            / {l.name}
          </nav>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#F2C38B]">
            Lançamento · atualizado em outubro de 2026 · lançado em {l.launched}
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight !text-white sm:text-5xl">
            {l.name} é bom? Vale a pena?
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
            <strong className="text-white">Resposta curta:</strong> {l.shortAnswer}
          </p>
          {target && (
            <p className="mt-5 inline-block rounded-2xl bg-white/10 px-4 py-3 text-sm text-white ring-1 ring-white/20 sm:text-base">
              Compre se estiver até <strong className="text-[#F2C38B]">{formatBRL(target)}</strong>. Acima disso, espere
              uma promoção.
            </p>
          )}
          <HeroPickCTA productId={l.id} pageType="lancamento" />
          <p className="mt-4 text-sm text-slate-300">
            O preço-alvo é recomendação nossa, não o preço da loja.{" "}
            <Link to="/divulgacao-de-afiliados" className="underline">
              Usamos links de afiliado
            </Link>
            .
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
        <section aria-labelledby="ficha">
          <h2 id="ficha" className="text-2xl font-extrabold text-[#0F3F4A] sm:text-3xl">
            Ficha técnica do {l.name}
          </h2>
          <dl className="mt-5 grid gap-px overflow-hidden rounded-3xl bg-slate-200 shadow-sm ring-1 ring-slate-200 sm:grid-cols-2">
            {l.specs.map(([k, v]) => (
              <div key={k} className="bg-white p-4">
                <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">{k}</dt>
                <dd className="mt-1 text-slate-800">{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-extrabold text-[#0F3F4A]">Compre se...</h2>
            <ul className="mt-4 space-y-2 text-slate-700">
              {l.buyIf.map((t) => (
                <li key={t} className="flex gap-2 leading-6">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </section>
          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-extrabold text-[#0F3F4A]">Pense duas vezes se...</h2>
            <ul className="mt-4 space-y-2 text-slate-700">
              {l.thinkTwiceIf.map((t) => (
                <li key={t} className="flex gap-2 leading-6">
                  <CircleAlert className="mt-1 h-4 w-4 shrink-0 text-[#8B5A2B]" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-12 grid gap-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:grid-cols-[1fr_300px]">
          <div>
            <h2 className="text-2xl font-extrabold text-[#0F3F4A]">Compare antes de comprar</h2>
            <ul className="mt-4 space-y-2">
              {l.compare.map((c) => (
                <li key={c.path}>
                  <Link to={c.path} className="font-semibold text-[#0F3F4A] underline">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
            {l.versionNote && (
              <p className="mt-5 rounded-2xl bg-[#FFF8EF] p-4 text-sm leading-6 text-slate-700">
                <strong>Atenção à versão:</strong> {l.versionNote}
              </p>
            )}
          </div>
          <ProductPurchaseOptions productId={l.id} pageType="lancamento" placement="launch_bottom" compact />
        </section>

        <FaqJsonLd faq={l.faq} />

        <section aria-labelledby="faq" className="mt-12">
          <h2 id="faq" className="text-2xl font-bold text-[#0F3F4A]">
            Perguntas frequentes
          </h2>
          <div className="mt-5 space-y-3">
            {l.faq.map((item) => (
              <details key={item.question} className="rounded-2xl bg-white p-5 shadow-sm">
                <summary className="cursor-pointer font-semibold text-[#0F3F4A]">{item.question}</summary>
                <p className="mt-3 leading-7 text-slate-700">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <p className="mt-10 text-sm text-slate-600">
          Veja também:{" "}
          <Link to="/lancamentos" className="font-semibold underline">
            todos os lançamentos de 2026
          </Link>{" "}
          ·{" "}
          <Link to="/vale-a-pena" className="font-semibold underline">
            celulares antigos que ainda valem a pena
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
