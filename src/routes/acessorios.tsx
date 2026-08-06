import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Headphones, PlugZap, ShieldCheck, Smartphone, Sparkles } from "lucide-react";

export const Route = createFileRoute("/acessorios")({
  head: () => ({
    meta: [
      { title: "Acessórios de tecnologia — Guias e recomendações | Tech Escolha Certa" },
      {
        name: "description",
        content:
          "Veja acessórios de tecnologia que realmente fazem diferença: fones, carregadores, cabos, suportes, hubs USB-C e itens úteis para celular, trabalho e casa.",
      },
      { property: "og:title", content: "Acessórios — Tech Escolha Certa" },
      {
        property: "og:description",
        content:
          "Acessórios tech recomendados com foco em utilidade, custo-benefício e compra consciente.",
      },
    ],
  }),
  component: AcessoriosPage,
});

function AcessoriosPage() {
  return (
    <main className="bg-[#F7F2EB] text-slate-900">
      <section className="relative overflow-hidden bg-[#0B2D35] text-white">
        <div aria-hidden className="absolute inset-0">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#B9774B]/25 blur-3xl" />
          <div className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-teal-400/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#D8B08A] ring-1 ring-white/15">
            Acessórios
          </span>

          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
              Acessórios úteis para melhorar seu celular, setup e rotina
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              Aqui vamos reunir fones, carregadores, cabos, suportes, hubs USB-C e periféricos que realmente valem a compra — sem indicar produto só porque está barato.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/ofertas"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B9774B] px-6 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:brightness-105"
            >
              Ver ofertas recomendadas
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/melhores-celulares-custo-beneficio"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-bold text-white ring-1 ring-white/20 transition hover:bg-white/15"
            >
              Ver celulares custo-benefício
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          <GuideCard
            icon={<Headphones className="h-5 w-5" />}
            title="Fones e áudio"
            text="Fones Bluetooth, fones com cancelamento de ruído e opções simples para chamadas, estudo e transporte."
          />
          <GuideCard
            icon={<PlugZap className="h-5 w-5" />}
            title="Carregadores e cabos"
            text="Carregadores rápidos, cabos USB-C confiáveis e itens que ajudam a evitar compra errada ou perigosa."
          />
          <GuideCard
            icon={<Smartphone className="h-5 w-5" />}
            title="Suportes e proteção"
            text="Capas, películas, suportes veiculares e acessórios úteis para prolongar a vida útil do aparelho."
          />
        </div>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#B9774B]">
                Em preparação
              </span>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#0F3F4A] md:text-3xl">
                Estamos organizando os guias de acessórios
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Enquanto os reviews completos dessa categoria são preparados, você pode começar pelas ofertas e guias de celulares já revisados. Assim o site não vira uma página sem saída.
              </p>
            </div>

            <div className="rounded-2xl bg-[#F7F2EB] p-5 ring-1 ring-slate-200">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-[#B9774B] shadow-sm">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-[#0F3F4A]">Compra consciente</p>
                  <p className="text-sm text-slate-600">Priorize utilidade, compatibilidade e garantia.</p>
                </div>
              </div>

              <Link
                to="/ofertas"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#B9774B] px-5 py-3 text-sm font-bold text-white transition hover:brightness-105"
              >
                Ir para ofertas
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-5 md:grid-cols-2">
          <LinkCard
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Antes de comprar acessórios"
            text="Confira marca, avaliações, compatibilidade com seu aparelho e se o anúncio informa potência, conexão e garantia."
            href="/transparencia"
            cta="Ver critérios editoriais"
          />
          <LinkCard
            icon={<Smartphone className="h-5 w-5" />}
            title="Quer trocar de celular também?"
            text="Veja os modelos com melhor custo-benefício antes de investir em novos acessórios."
            href="/melhores-celulares-custo-beneficio"
            cta="Ver recomendações"
          />
        </section>
      </section>
    </main>
  );
}

function GuideCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#F7F2EB] text-[#B9774B] ring-1 ring-slate-200">
        {icon}
      </span>
      <h2 className="mt-5 text-lg font-bold text-[#0F3F4A]">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </article>
  );
}

function LinkCard({
  icon,
  title,
  text,
  href,
  cta,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  href: string;
  cta: string;
}) {
  return (
    <Link
      to={href}
      className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#F7F2EB] text-[#B9774B] ring-1 ring-slate-200">
        {icon}
      </span>
      <h3 className="mt-4 text-lg font-bold text-[#0F3F4A]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#B9774B]">
        {cta}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
