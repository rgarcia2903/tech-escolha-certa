import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BatteryCharging, BriefcaseBusiness, Cpu, GraduationCap, Laptop, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/notebooks")({
  head: () => ({
    meta: [
      { title: "Notebooks — Guias e recomendações | Tech Escolha Certa" },
      {
        name: "description",
        content:
          "Veja como escolher notebook para estudo, trabalho, casa e jogos. Entenda processador, memória RAM, SSD, tela, bateria e custo-benefício antes de comprar.",
      },
      { property: "og:title", content: "Notebooks — Tech Escolha Certa" },
      {
        property: "og:description",
        content:
          "Guias objetivos para escolher notebook com mais segurança e evitar compra errada.",
      },
    ],
  }),
  component: NotebooksPage,
});

function NotebooksPage() {
  return (
    <main className="bg-[#F7F2EB] text-slate-900">
      <section className="relative overflow-hidden bg-[#0B2D35] text-white">
        <div aria-hidden className="absolute inset-0">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#B9774B]/25 blur-3xl" />
          <div className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-teal-400/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#D8B08A] ring-1 ring-white/15">
            Notebooks
          </span>

          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
              Notebooks para estudar, trabalhar e comprar sem errar
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              A categoria de notebooks está sendo organizada com foco em compra prática: desempenho real, memória, SSD, tela, bateria e durabilidade — sem ficar preso só à ficha técnica.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/guias-de-compra"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B9774B] px-6 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:brightness-105"
            >
              Ver guias de compra
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/melhores-celulares-custo-beneficio"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-bold text-white ring-1 ring-white/20 transition hover:bg-white/15"
            >
              Ver recomendações de tecnologia
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          <GuideCard
            icon={<GraduationCap className="h-5 w-5" />}
            title="Estudo e rotina"
            text="Modelos para navegação, aulas, pacote Office, vídeos e uso leve sem travar no básico."
          />
          <GuideCard
            icon={<BriefcaseBusiness className="h-5 w-5" />}
            title="Trabalho e produtividade"
            text="Notebooks com boa combinação de processador, RAM, SSD e tela para trabalhar todos os dias."
          />
          <GuideCard
            icon={<Cpu className="h-5 w-5" />}
            title="Desempenho e jogos"
            text="Critérios para quem precisa de mais potência, placa de vídeo, refrigeração e tela melhor."
          />
        </div>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#B9774B]">
                Em preparação
              </span>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#0F3F4A] md:text-3xl">
                Ainda estamos montando os rankings de notebooks
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Enquanto isso, deixamos esta página com caminhos claros para continuar navegando. A ideia é evitar uma categoria vazia e preparar espaço para futuros guias de notebook.
              </p>
            </div>

            <div className="rounded-2xl bg-[#F7F2EB] p-5 ring-1 ring-slate-200">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-[#B9774B] shadow-sm">
                  <Laptop className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-[#0F3F4A]">Evite compra fraca</p>
                  <p className="text-sm text-slate-600">RAM, SSD e tela importam muito.</p>
                </div>
              </div>

              <Link
                to="/guias-de-compra"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#B9774B] px-5 py-3 text-sm font-bold text-white transition hover:brightness-105"
              >
                Ver guias disponíveis
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-5 md:grid-cols-2">
          <InfoCard
            icon={<BatteryCharging className="h-5 w-5" />}
            title="O que observar antes de comprar"
            text="Processador, memória RAM, SSD, tela, bateria, peso, garantia e possibilidade de upgrade fazem mais diferença que uma promoção isolada."
          />
          <InfoCard
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Recomendação editorial"
            text="Quando os guias forem publicados, a prioridade será indicar notebooks por perfil: estudo, trabalho, custo-benefício e desempenho."
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
