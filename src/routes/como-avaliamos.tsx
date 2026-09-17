import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Calculator, FileCheck2, Scale, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/como-avaliamos")({
  head: () => ({
    meta: [
      { title: "Como avaliamos celulares | Tech Escolha Certa" },
      {
        name: "description",
        content:
          "Entenda como a Tech Escolha Certa calcula notas, compara celulares, consulta fontes oficiais e organiza recomendações de compra.",
      },
      { property: "og:title", content: "Como avaliamos celulares | Tech Escolha Certa" },
      {
        property: "og:description",
        content:
          "Metodologia editorial, critérios das notas e regras de transparência das recomendações da Tech Escolha Certa.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://techescolhacerta.com.br/como-avaliamos" },
    ],
    links: [{ rel: "canonical", href: "https://techescolhacerta.com.br/como-avaliamos" }],
  }),
  component: ComoAvaliamosPage,
});

const CRITERIOS = [
  {
    label: "Desempenho",
    weight: "20%",
    description: "Chip, memória, armazenamento e consistência em tarefas pesadas.",
  },
  {
    label: "Tela",
    weight: "15%",
    description: "Qualidade do painel, brilho, resolução, fluidez e legibilidade.",
  },
  {
    label: "Câmeras",
    weight: "15%",
    description: "Conjunto principal, câmeras auxiliares, vídeo e consistência.",
  },
  {
    label: "Bateria e carga",
    weight: "15%",
    description: "Capacidade, eficiência, velocidade e praticidade de recarga.",
  },
  {
    label: "Software e suporte",
    weight: "15%",
    description: "Interface, atualizações, segurança e recursos úteis.",
  },
  {
    label: "Construção",
    weight: "10%",
    description: "Materiais, ergonomia e proteção contra água e poeira.",
  },
  {
    label: "Custo-benefício",
    weight: "10%",
    description: "O que o aparelho entrega diante do preço e dos rivais.",
  },
];

function ComoAvaliamosPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="relative overflow-hidden border-b border-border bg-[#0B2D35] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(185,119,75,0.28),transparent_42%)]" />
        <div className="container-tec relative py-16 md:py-20">
          <nav className="mb-6 flex items-center gap-2 text-xs text-slate-300">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Como avaliamos</span>
          </nav>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D7A77E]">
            Metodologia editorial
          </span>
          <h1 className="mt-3 max-w-4xl font-heading text-4xl font-extrabold tracking-tight md:text-6xl">
            Como calculamos as notas e recomendações
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            As notas são indicadores editoriais para facilitar comparações. Elas não substituem a
            ficha técnica, não representam uma medição laboratorial e não são alteradas por comissão
            de afiliados.
          </p>
        </div>
      </header>

      <div className="container-tec py-14">
        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <Principle
            icon={FileCheck2}
            title="Fontes verificáveis"
            text="Especificações são conferidas prioritariamente nos fabricantes e documentos oficiais."
          />
          <Principle
            icon={Scale}
            title="Comparação por perfil"
            text="O melhor aparelho depende de uso, orçamento e prioridades; não existe vencedor universal."
          />
          <Principle
            icon={Calculator}
            title="Escala de 0 a 10"
            text="A nota resume os critérios abaixo. Cinco estrelas são apenas uma representação visual da mesma avaliação."
          />
          <Principle
            icon={ShieldCheck}
            title="Independência editorial"
            text="Links afiliados podem gerar comissão, mas não compram posição, nota ou recomendação."
          />
        </section>

        <section className="mt-12 rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cta">
            Peso de referência
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold">Os sete critérios da nota</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
            Os pesos servem como referência geral. Em guias específicos, como celulares para jogos
            ou para fotografia, o critério relacionado ao perfil recebe maior importância no
            veredito.
          </p>
          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {CRITERIOS.map((item) => (
              <div key={item.label} className="rounded-2xl border border-border bg-surface p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-heading text-lg font-bold">{item.label}</h3>
                  <span className="rounded-full bg-cta/10 px-3 py-1 text-sm font-bold text-cta">
                    {item.weight}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8">
            <BadgeCheck className="h-8 w-8 text-teal" />
            <h2 className="mt-4 font-heading text-2xl font-bold">Como chegamos ao veredito</h2>
            <ol className="mt-5 space-y-4 text-sm leading-6 text-muted-foreground">
              <li>
                <strong className="text-foreground">1. Conferência:</strong> verificamos modelo,
                variante e ficha oficial.
              </li>
              <li>
                <strong className="text-foreground">2. Contexto:</strong> comparamos o aparelho com
                rivais da mesma faixa e proposta.
              </li>
              <li>
                <strong className="text-foreground">3. Perfil:</strong> separamos vantagens para
                câmera, jogos, bateria, software e economia.
              </li>
              <li>
                <strong className="text-foreground">4. Atualização:</strong> revisamos conclusões
                quando preços relativos, suporte ou disponibilidade mudam.
              </li>
            </ol>
          </div>

          <div className="rounded-3xl border border-cta/25 bg-cta/5 p-6 shadow-soft md:p-8">
            <ShieldCheck className="h-8 w-8 text-cta" />
            <h2 className="mt-4 font-heading text-2xl font-bold">
              Transparência sobre preços e afiliados
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Evitamos exibir preço fixo em reviews porque valores e estoque mudam rapidamente. Os
              botões levam à consulta atual no parceiro. Podemos receber comissão quando uma compra
              é concluída, sem custo adicional para o leitor.
            </p>
            <Link
              to="/transparencia"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-bold text-foreground transition hover:bg-secondary"
            >
              Ver política editorial <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

function Principle({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof ShieldCheck;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal/10 text-teal">
        <Icon className="h-5 w-5" />
      </span>
      <h2 className="mt-4 font-heading text-lg font-bold">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
    </div>
  );
}
