import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { AffiliateCTA } from "@/components/site/AffiliateCTA";
import { trackAffiliateClick } from "@/lib/analytics";

export type ReviewTemplateProps = {
  breadcrumbs?: {
    label: string;
    to?: string;
  }[];
  eyebrow?: string;
  title: string;
  description: string;
  image?: string;
  updatedAt?: string;
  readingTime?: string;
  productName: string;
  priceLabel?: string;
  overallScore: string;
  verdictShort: string;
  affiliateHref: string;
  affiliate: {
    title: string;
    description: string;
    buttonText: string;
    highlight: string;
  };
  pros: string[];
  cons: string[];
  scores: {
    label: string;
    score: string;
  }[];
  specs: [string, string][];
  sections: {
    eyebrow: string;
    title: string;
    text: string;
  }[];
  finalRecommendation: string;
  faq: {
    question: string;
    answer: string;
  }[];
  relatedLinks?: {
    label: string;
    to: string;
  }[];
};

export function ReviewTemplate({
  breadcrumbs = [
    { label: "Home", to: "/" },
    { label: "Celulares", to: "/celulares" },
  ],
  eyebrow = "Review completo",
  title,
  description,
  image = "/images/products/phones-hero-optimized.webp",
  updatedAt = "Atualizado em 2026",
  readingTime = "Leitura rápida",
  productName,
  priceLabel = "Ver preço atualizado",
  overallScore,
  verdictShort,
  affiliateHref,
  affiliate,
  pros,
  cons,
  scores,
  specs,
  sections,
  finalRecommendation,
  faq,
  relatedLinks = [],
}: ReviewTemplateProps) {
  return (
    <main className="min-h-screen bg-[#F7F2EB] text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#071E25] text-white">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071E25]/96 via-[#071E25]/88 to-[#071E25]/72" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(185,119,75,0.25),transparent_42%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#071E25]/90 to-transparent" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_380px] lg:px-8">
          <div>
            <nav className="mb-5 flex flex-wrap items-center gap-2 text-xs text-slate-300">
              {breadcrumbs.map((item, index) => (
                <span key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
                  {item.to ? (
                    <Link to={item.to} className="hover:text-white">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-white">{item.label}</span>
                  )}
                  {index < breadcrumbs.length - 1 && <span>/</span>}
                </span>
              ))}
            </nav>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#8B5A2B]">
              {eyebrow}
            </p>

            <h1 className="max-w-5xl text-4xl font-extrabold tracking-tight text-[#F8FAFC] md:text-6xl">
              {title}
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-200">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/20">
                {updatedAt}
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/20">
                {readingTime}
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/20">
                Análise independente
              </span>
            </div>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 shadow-2xl ring-1 ring-white/20 backdrop-blur-md">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
              Nota geral
            </p>

            <div className="mt-4 flex items-end gap-2">
              <span className="text-6xl font-extrabold text-white">{overallScore}</span>
              <span className="pb-2 text-lg text-slate-200">/10</span>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-200">{verdictShort}</p>

            <a
              href={affiliateHref}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              onClick={() =>
                trackAffiliateClick({
                  productName,
                  pageType: "review",
                })
              }
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#8B5A2B] px-5 py-3 text-sm font-bold text-white transition hover:brightness-95"
            >
              {priceLabel}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[1fr_340px] lg:px-8">
        <article className="space-y-10">
          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
              Veredito rápido
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#0F3F4A]">
              {productName} vale a pena?
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700">{verdictShort}</p>
          </section>

          <section className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-2xl font-bold text-[#0F3F4A]">Pontos positivos</h2>

              <div className="mt-6 space-y-3">
                {pros.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-slate-700 ring-1 ring-emerald-100"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-2xl font-bold text-[#0F3F4A]">Pontos negativos</h2>

              <div className="mt-6 space-y-3">
                {cons.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-rose-50 px-4 py-3 text-sm text-slate-700 ring-1 ring-rose-100"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-3xl font-bold text-[#0F3F4A]">Notas por categoria</h2>

            <div className="mt-6 space-y-4">
              {scores.map(({ label, score }) => (
                <div key={label}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-semibold text-slate-800">{label}</span>
                    <span className="font-bold text-[#0F3F4A]">{score}/10</span>
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-[#8B5A2B]"
                      style={{ width: `${Number(score) * 10}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-3xl font-bold text-[#0F3F4A]">Ficha técnica</h2>

            <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-slate-200">
              <table className="w-full border-collapse text-left text-sm">
                <tbody className="divide-y divide-slate-200 bg-white">
                  {specs.map(([label, value]) => (
                    <tr key={label}>
                      <td className="px-5 py-4 font-semibold text-[#0F3F4A]">{label}</td>
                      <td className="px-5 py-4 text-slate-700">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {sections.map((section) => (
            <AnalysisBlock key={section.title} {...section} />
          ))}

          <section className="rounded-3xl bg-[#0F3F4A] p-8 text-white shadow-sm">
            <h2 className="text-3xl font-bold text-[#F8FAFC]">Recomendação final</h2>

            <p className="mt-4 max-w-4xl text-base leading-7 text-slate-100">
              {finalRecommendation}
            </p>
          </section>

          <AffiliateCTA
            title={affiliate.title}
            description={affiliate.description}
            buttonText={affiliate.buttonText}
            href={affiliateHref}
            highlight={affiliate.highlight}
            productName={productName}
            pageType="review"
          />

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-3xl font-bold text-[#0F3F4A]">Perguntas frequentes</h2>

            <div className="mt-8 space-y-6">
              {faq.map((item) => (
                <div key={item.question}>
                  <h3 className="font-bold text-slate-900">{item.question}</h3>
                  <p className="mt-2 text-slate-700">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </article>

        <div className="space-y-6 lg:sticky lg:top-28 lg:h-fit">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
              Veredito
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[#0F3F4A]">{productName}</h2>

            <p className="mt-3 text-sm leading-6 text-slate-700">{verdictShort}</p>

            <a
              href={affiliateHref}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#8B5A2B] px-5 py-3 text-center text-sm font-bold text-white transition hover:brightness-95"
            >
              Ver oferta
              <ArrowUpRight className="h-4 w-4" />
            </a>

            {relatedLinks.length > 0 && (
              <div className="mt-6 border-t border-slate-200 pt-5">
                <p className="text-sm font-bold text-[#0F3F4A]">Também leia:</p>

                <div className="mt-3 space-y-3 text-sm">
                  {relatedLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="block text-slate-700 hover:text-[#8B5A2B]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#071E25]/95 backdrop-blur-xl lg:hidden">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
          <div className="min-w-0 flex-1">
            <span className="block text-[10px] uppercase tracking-[0.18em] text-[#8B5A2B]">
              Melhor oferta
            </span>
            <span className="block truncate font-heading text-sm font-bold text-white">
              {productName}
            </span>
            <span className="text-xs text-slate-300">{priceLabel}</span>
          </div>

          <a
            href={affiliateHref}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-[#8B5A2B] px-5 py-3 text-xs font-bold text-white shadow-lg transition hover:brightness-95"
          >
            Ver oferta
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      <div className="h-24 lg:hidden" aria-hidden />
    </main>
  );
}

function AnalysisBlock({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
        {eyebrow}
      </p>

      <h2 className="mt-2 text-3xl font-bold text-[#0F3F4A]">{title}</h2>

      <p className="mt-4 text-base leading-7 text-slate-700">{text}</p>
    </section>
  );
}







