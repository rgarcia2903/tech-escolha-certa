import { createFileRoute, Link } from "@tanstack/react-router";
import { Activity, ArrowRight, Battery, BellRing, ShieldCheck, Smartphone, Watch } from "lucide-react";

export const Route = createFileRoute("/smartwatches")({
  head: () => ({
    meta: [
      { title: "Smartwatches — Guias e melhores modelos | Tech Escolha Certa" },
      {
        name: "description",
        content:
          "Veja como escolher smartwatch: bateria, notificações, esportes, saúde, compatibilidade com Android e iPhone e custo-benefício antes de comprar.",
      },
      { property: "og:title", content: "Smartwatches — Tech Escolha Certa" },
      {
        property: "og:description",
        content:
          "Smartwatches analisados com foco em bateria, saúde, esporte, notificações e compra consciente.",
      },
    ],
  }),
  component: SmartwatchesPage,
});

function SmartwatchesPage() {
  return (
    <main className="bg-[#F7F2EB] text-slate-900">
      <section className="relative overflow-hidden bg-[#0B2D35] text-white">
        <div aria-hidden className="absolute inset-0">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#B9774B]/25 blur-3xl" />
          <div className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-teal-400/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#D8B08A] ring-1 ring-white/15">
            Smartwatches
          </span>

          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
              Smartwatches para acompanhar saúde, rotina e notificações
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              Vamos reunir modelos que fazem sentido para Android e iPhone, avaliando bateria, conforto, notificações, esportes, sensores e custo-benefício real.
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
              to="/guias-de-compra"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-bold text-white ring-1 ring-white/20 transition hover:bg-white/15"
            >
              Ver guias de compra
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          <GuideCard
            icon={<BellRing className="h-5 w-5" />}
            title="Notificações e chamadas"
            text="Modelos para quem quer ver mensagens, atender ligações e controlar a rotina sem tirar o celular do bolso."
          />
          <GuideCard
            icon={<Activity className="h-5 w-5" />}
            title="Saúde e esportes"
            text="Relógios com foco em exercícios, sono, batimentos, modos esportivos e acompanhamento diário."
          />
          <GuideCard
            icon={<Battery className="h-5 w-5" />}
            title="Bateria e conforto"
            text="Autonomia, peso, pulseira e tela fazem muita diferença para usar o smartwatch todos os dias."
          />
        </div>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#B9774B]">
                Em preparação
              </span>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#0F3F4A] md:text-3xl">
                Em breve, rankings de smartwatches por perfil
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                A categoria está pronta para receber guias completos. Enquanto isso, mantemos caminhos claros para ofertas, guias e recomendações já publicadas no site.
              </p>
            </div>

            <div className="rounded-2xl bg-[#F7F2EB] p-5 ring-1 ring-slate-200">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-[#B9774B] shadow-sm">
                  <Watch className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-[#0F3F4A]">Escolha por perfil</p>
                  <p className="text-sm text-slate-600">Bateria, app e compatibilidade primeiro.</p>
                </div>
              </div>

              <Link
                to="/ofertas"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#B9774B] px-5 py-3 text-sm font-bold text-white transition hover:brightness-105"
              >
                Ver ofertas
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-5 md:grid-cols-2">
          <InfoCard
            icon={<Smartphone className="h-5 w-5" />}
            title="Compatibilidade vem primeiro"
            text="Antes de comprar, confirme se o relógio funciona bem com seu celular, se o app é confiável e se os recursos principais estão disponíveis no Brasil."
          />
          <InfoCard
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Não compre só pela aparência"
            text="Smartwatch bonito pode ter bateria ruim, app fraco ou sensores pouco confiáveis. O guia deve priorizar uso real."
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

function InfoCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#F7F2EB] text-[#B9774B] ring-1 ring-slate-200">
        {icon}
      </span>
      <h3 className="mt-4 text-lg font-bold text-[#0F3F4A]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </article>
  );
}
