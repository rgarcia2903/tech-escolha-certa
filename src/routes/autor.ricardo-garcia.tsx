import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, FileCheck2, ShieldCheck } from "lucide-react";

const CANONICAL = "https://techescolhacerta.com.br/autor/ricardo-garcia";

export const Route = createFileRoute("/autor/ricardo-garcia")({
  head: () => ({
    meta: [
      { title: "Ricardo Garcia — Editor do Tech Escolha Certa" },
      {
        name: "description",
        content:
          "Conheça Ricardo Garcia, editor responsável pelo Tech Escolha Certa, e os critérios usados nas análises e guias de compra do site.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:title", content: "Ricardo Garcia — Tech Escolha Certa" },
      {
        property: "og:description",
        content:
          "Editor responsável por pesquisa, organização de dados e recomendações do Tech Escolha Certa.",
      },
      { property: "og:url", content: CANONICAL },
    ],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Ricardo Garcia",
          url: CANONICAL,
          jobTitle: "Editor responsável",
          worksFor: {
            "@type": "Organization",
            name: "Tech Escolha Certa",
            url: "https://techescolhacerta.com.br",
          },
          knowsAbout: [
            "análise de dados",
            "comparação de smartphones",
            "pesquisa de especificações",
            "guias de compra",
          ],
        }),
      },
    ],
  }),
  component: RicardoGarciaPage,
});

function RicardoGarciaPage() {
  return (
    <main className="min-h-screen bg-[#F7F2EB] text-slate-900">
      <header className="border-b border-white/10 bg-[#0B2D35] text-white">
        <div className="container-tec py-16 md:py-20">
          <nav className="mb-6 flex items-center gap-2 text-xs text-slate-300">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Autor</span>
          </nav>

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D8B08A]">
            Editor responsável
          </span>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl">
            Ricardo Garcia
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            Responsável pela pesquisa, estrutura editorial e publicação do Tech Escolha Certa, com
            experiência profissional em análise de dados, automações e organização de informações
            para apoiar decisões.
          </p>
        </div>
      </header>

      <div className="container-tec py-14">
        <section className="grid gap-5 md:grid-cols-3">
          <EditorialPoint
            icon={BarChart3}
            title="Decisão baseada em dados"
            text="As recomendações comparam especificações, posicionamento de preço, disponibilidade e diferenças práticas entre os modelos."
          />
          <EditorialPoint
            icon={FileCheck2}
            title="Fontes identificadas"
            text="Fichas oficiais e páginas dos fabricantes são priorizadas. Quando não há teste próprio, isso é informado ao leitor."
          />
          <EditorialPoint
            icon={ShieldCheck}
            title="Independência editorial"
            text="Links afiliados podem gerar comissão, mas não definem posição, conclusão ou produto recomendado."
          />
        </section>

        <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10">
          <h2 className="text-3xl font-extrabold text-[#0F3F4A]">O que esta autoria significa</h2>
          <div className="mt-5 max-w-4xl space-y-4 text-base leading-7 text-slate-700">
            <p>
              Ricardo não se apresenta como laboratório de testes nem afirma ter usado todos os
              aparelhos publicados. Os conteúdos documentais são produzidos por meio de pesquisa,
              conferência de especificações e comparação de alternativas disponíveis no mercado.
            </p>
            <p>
              Quando o site realizar testes próprios, a página identificará claramente o aparelho, o
              procedimento e os resultados. Informações incorretas ou desatualizadas podem ser
              comunicadas pela página de contato.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/como-avaliamos"
              className="inline-flex items-center gap-2 rounded-full bg-[#0F3F4A] px-5 py-3 text-sm font-bold text-white"
            >
              Conhecer a metodologia <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-[#0F3F4A]"
            >
              Enviar correção ou sugestão
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

function EditorialPoint({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof ShieldCheck;
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#F7F2EB] text-[#8B5A2B]">
        <Icon className="h-5 w-5" />
      </span>
      <h2 className="mt-4 text-xl font-bold text-[#0F3F4A]">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </article>
  );
}
