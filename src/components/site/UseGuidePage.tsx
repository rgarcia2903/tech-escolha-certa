import { Link } from "@tanstack/react-router";
import { Check, CircleAlert } from "lucide-react";
import { FaqJsonLd } from "@/components/site/FaqJsonLd";
import { HeroPickCTA } from "@/components/site/HeroPickCTA";
import { formatBRL, goodDealFor } from "@/lib/fair-prices";
import type { UseGuide } from "@/lib/use-guides";

/** Guia "melhor celular para X": resposta curta e um modelo por faixa de preço, com botões das lojas. */
export function UseGuidePage({ g }: { g: UseGuide }) {
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
            / {g.h1}
          </nav>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#F2C38B]">{g.eyebrow}</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight !text-white sm:text-5xl">{g.h1}</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
            <strong className="text-white">Resposta curta:</strong> {g.shortAnswer}
          </p>
          <p className="mt-4 text-sm text-slate-300">
            Os valores são preços-alvo nossos, não o preço da loja.{" "}
            <Link to="/divulgacao-de-afiliados" className="underline">
              Usamos links de afiliado
            </Link>
            .
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
        <ul className="grid gap-5 md:grid-cols-2">
          {g.tiers.map((t) => {
            const target = goodDealFor(t.productId);
            return (
              <li key={t.productId} className="flex flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B5A2B]">{t.label}</p>
                <h2 className="mt-2 text-xl font-extrabold text-[#0F3F4A]">{t.name}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-700">{t.why}</p>
                {target && (
                  <p className="mt-3 text-sm text-slate-700">
                    Compre se estiver até <strong className="text-[#8B5A2B]">{formatBRL(target)}</strong>.
                  </p>
                )}
                <div className="mt-auto">
                  <HeroPickCTA productId={t.productId} pageType="guia_uso" />
                  <Link to={t.path} className="mt-3 inline-block text-sm font-semibold text-[#0F3F4A] underline">
                    Ver o veredito do {t.name}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-extrabold text-[#0F3F4A]">{g.mattersTitle}</h2>
            <ul className="mt-4 space-y-2 text-slate-700">
              {g.matters.map((m) => (
                <li key={m} className="flex gap-2 leading-6">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                  {m}
                </li>
              ))}
            </ul>
          </section>
          <section className="rounded-3xl border-2 border-[#8B5A2B]/30 bg-[#FFF8EF] p-6">
            <h2 className="text-xl font-extrabold text-[#0F3F4A]">Evite</h2>
            <ul className="mt-4 space-y-2 text-slate-700">
              {g.avoid.map((a) => (
                <li key={a.text} className="flex gap-2 leading-6">
                  <CircleAlert className="mt-1 h-4 w-4 shrink-0 text-[#8B5A2B]" aria-hidden />
                  <span>
                    {a.text}{" "}
                    {a.path && (
                      <Link to={a.path} className="font-semibold underline">
                        Ver por quê
                      </Link>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <FaqJsonLd faq={g.faq} />

        <section aria-labelledby="faq" className="mt-12">
          <h2 id="faq" className="text-2xl font-bold text-[#0F3F4A]">
            Perguntas frequentes
          </h2>
          <div className="mt-5 space-y-3">
            {g.faq.map((item) => (
              <details key={item.question} className="rounded-2xl bg-white p-5 shadow-sm">
                <summary className="cursor-pointer font-semibold text-[#0F3F4A]">{item.question}</summary>
                <p className="mt-3 leading-7 text-slate-700">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <p className="mt-10 text-sm text-slate-600">
          Veja também:{" "}
          {g.related.map((r, i) => (
            <span key={r.path}>
              {i > 0 && " · "}
              <Link to={r.path} className="font-semibold underline">
                {r.label}
              </Link>
            </span>
          ))}
          .
        </p>
      </div>
    </main>
  );
}
