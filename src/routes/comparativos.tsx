import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Minus } from "lucide-react";
import { COMPARISONS } from "@/components/site/data";
import { SectionHeader, Badge } from "@/components/site/ui";

export const Route = createFileRoute("/comparativos")({
  head: () => ({
    meta: [
      { title: "Comparativos de tecnologia | Tech Escolha Certa" },
      { name: "description", content: "Comparativos lado a lado de celulares, notebooks e smartwatches para decidir com clareza." },
      { property: "og:title", content: "Comparativos — Tech Escolha Certa" },
      { property: "og:description", content: "Tabelas comparativas, vereditos e recomendações por perfil." },
    ],
  }),
  component: ComparisonsPage,
});

const ROWS: { label: string; a: string; b: string; winner: "a" | "b" | "tie" }[] = [
  { label: "Tela", a: "OLED 6,1\" 60 Hz", b: "AMOLED 6,2\" 120 Hz", winner: "b" },
  { label: "Processador", a: "Apple A16 Bionic", b: "Snapdragon 8 Gen 3", winner: "tie" },
  { label: "Câmera principal", a: "48 MP", b: "50 MP", winner: "tie" },
  { label: "Bateria", a: "20h vídeo", b: "22h vídeo", winner: "b" },
  { label: "Software", a: "iOS 17", b: "One UI 6 (Android 14)", winner: "a" },
  { label: "Preço (a partir)", a: "R$ 5.499", b: "R$ 4.299", winner: "b" },
];

function ComparisonsPage() {
  return (
    <>
      <section className="hero-gradient border-b border-border">
        <div className="container-tec py-16 md:py-20 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cta">Comparativos</span>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">Compare antes de comprar</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Tabelas claras, vereditos por categoria de uso e recomendações finais para você
            decidir com base em fatos.
          </p>
        </div>
      </section>

      <section className="container-tec py-14 md:py-20">
        <SectionHeader eyebrow="Em destaque" title="iPhone 15 vs Galaxy S24" description="Lado a lado, item por item, sem suspense." />

        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
          <div className="grid grid-cols-3 border-b border-border bg-surface">
            <div className="p-5 font-semibold text-foreground">Característica</div>
            <div className="p-5 font-heading font-semibold text-foreground">iPhone 15</div>
            <div className="p-5 font-heading font-semibold text-foreground">Galaxy S24</div>
          </div>
          {ROWS.map((r) => (
            <div key={r.label} className="grid grid-cols-3 border-b border-border last:border-0 text-sm">
              <div className="p-5 font-medium text-muted-foreground">{r.label}</div>
              <div className={`p-5 ${r.winner === "a" ? "text-foreground font-semibold" : "text-foreground"}`}>
                <span className="inline-flex items-center gap-2">
                  {r.winner === "a" && <Check className="h-4 w-4 text-cta" />}
                  {r.winner === "tie" && <Minus className="h-4 w-4 text-muted-foreground" />}
                  {r.a}
                </span>
              </div>
              <div className={`p-5 ${r.winner === "b" ? "text-foreground font-semibold" : "text-foreground"}`}>
                <span className="inline-flex items-center gap-2">
                  {r.winner === "b" && <Check className="h-4 w-4 text-cta" />}
                  {r.winner === "tie" && <Minus className="h-4 w-4 text-muted-foreground" />}
                  {r.b}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-4">
          {[
            { label: "Melhor para câmera", winner: "Empate técnico" },
            { label: "Melhor para bateria", winner: "Galaxy S24" },
            { label: "Melhor custo-benefício", winner: "Galaxy S24" },
            { label: "Melhor desempenho", winner: "Empate técnico" },
          ].map((c) => (
            <div key={c.label} className="rounded-xl border border-border bg-card p-5 shadow-soft">
              <span className="text-xs font-semibold uppercase tracking-wider text-cta">{c.label}</span>
              <p className="mt-2 font-heading font-semibold text-foreground">{c.winner}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-surface p-6">
          <Badge variant="teal">Veredito</Badge>
          <p className="mt-3 text-foreground">
            O Galaxy S24 entrega mais hardware por menos dinheiro e leva vantagem em tela e bateria.
            O iPhone 15 segue imbatível em integração de software e suporte de longo prazo.
            Escolha pelo ecossistema que você já usa.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-md bg-cta px-5 py-2.5 text-sm font-semibold text-cta-foreground hover:brightness-95">
              Ver oferta iPhone 15 <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary">
              Ver oferta Galaxy S24 <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-surface border-t border-border">
        <div className="container-tec py-14 md:py-20">
          <SectionHeader eyebrow="Mais comparativos" title="Outros comparativos populares" />
          <div className="grid gap-5 md:grid-cols-3">
            {COMPARISONS.map((c) => (
              <article key={c.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <Badge variant="teal">VS</Badge>
                <h3 className="mt-3 font-heading text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.summary}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-cta">Ver comparativo <ArrowRight className="h-4 w-4" /></a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


