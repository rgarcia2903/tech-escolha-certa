import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, FileCheck2, Scale, ShieldCheck, Tags } from "lucide-react";

export const Route = createFileRoute("/como-avaliamos")({
  head: () => ({
    meta: [
      { title: "Como avaliamos celulares | Tech Escolha Certa" },
      {
        name: "description",
        content:
          "Entenda como o Tech Escolha Certa pesquisa especificações, diferencia análises documentais de testes próprios e organiza recomendações de compra.",
      },
      { property: "og:title", content: "Como avaliamos celulares | Tech Escolha Certa" },
      {
        property: "og:description",
        content:
          "Metodologia editorial, fontes e regras de transparência das recomendações do Tech Escolha Certa.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://techescolhacerta.com.br/como-avaliamos" },
    ],
  }),
  component: ComoAvaliamosPage,
});

const CRITERIOS = [
  {
    label: "Desempenho",
    weight: "Prioridade alta",
    description: "Chip, memória, armazenamento e consistência em tarefas pesadas.",
  },
  {
    label: "Tela",
    weight: "Prioridade alta",
    description: "Qualidade do painel, brilho, resolução, fluidez e legibilidade.",
  },
  {
    label: "Câmeras",
    weight: "Depende do perfil",
    description: "Conjunto principal, câmeras auxiliares, vídeo e consistência.",
  },
  {
    label: "Bateria e carga",
    weight: "Prioridade alta",
    description: "Capacidade, eficiência, velocidade e praticidade de recarga.",
  },
  {
    label: "Software e suporte",
    weight: "Prioridade alta",
    description: "Interface, atualizações, segurança e recursos úteis.",
  },
  {
    label: "Construção",
    weight: "Depende do perfil",
    description: "Materiais, ergonomia e proteção contra água e poeira.",
  },
  {
    label: "Custo-benefício",
    weight: "Decisivo",
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
            Como pesquisamos e recomendamos celulares
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            Cada página informa se é uma análise documental ou se contém teste próprio. Não
            apresentamos dados de laboratório sem medição identificada e não alteramos conclusões
            por causa de comissão de afiliados.
          </p>
        </div>
      </header>

      <div className="container-tec py-14">
        <section className="mb-8 rounded-2xl border border-border bg-card p-6">
          <h2 className="text-2xl font-bold">Regras editoriais e comerciais · outubro de 2026</h2>
          <p className="mt-3 text-sm leading-7">
            As seleções partem de identidade do aparelho, perfil de uso, suporte, fontes técnicas e
            condições comerciais. Sem preço atual verificado, um modelo é candidato para comparar,
            não oferta confirmada dentro de um orçamento. A existência de um link ou comissão não
            define sua posição.
          </p>
          <p className="mt-3 text-sm leading-7">
            Notas preservadas em análises antigas são avaliações editoriais, não avaliações de
            compradores ou medições de laboratório. A revisão de contexto não significa novo teste.
            A janela de suporte começa na data oficial de referência, não na compra.
          </p>
          <p className="mt-3 text-sm leading-7">
            Comparamos opções Amazon e Mercado Livre por modelo. Se a variante comercial não foi
            confirmada, informamos essa limitação e não declaramos equivalência de memória,
            condição, preço ou garantia entre lojas.
          </p>
        </section>
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
            icon={Tags}
            title="Tipo de análise visível"
            text="Conteúdo documental e teste próprio são identificados para o leitor saber de onde vem cada conclusão."
          />
          <Principle
            icon={ShieldCheck}
            title="Independência editorial"
            text="Links afiliados podem gerar comissão, mas não compram posição, nota ou recomendação."
          />
        </section>

        <section className="mt-12 rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cta">
            Critérios editoriais
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold">O que pesa na recomendação</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
            Não existe uma nota universal capaz de resumir todos os compradores. O peso de cada
            critério muda conforme o orçamento e o perfil, e o texto explica por que um aparelho foi
            indicado ou descartado.
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
