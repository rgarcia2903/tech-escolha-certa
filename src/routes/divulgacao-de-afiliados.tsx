import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, BadgeCheck, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/divulgacao-de-afiliados")({
  head: () => ({
    meta: [
      {
        title: "Divulgação de Afiliados | Tech Escolha Certa",
      },
      {
        name: "description",
        content:
          "Entenda como funcionam os links afiliados do Tech Escolha Certa, nossa política editorial e como podemos receber comissão por compras realizadas por links indicados.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://techescolhacerta.com.br/divulgacao-de-afiliados",
      },
    ],
  }),
  component: DivulgacaoDeAfiliados,
});

function DivulgacaoDeAfiliados() {
  return (
    <main className="min-h-screen bg-[#F7F2EB] text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-[#0B2D35] via-[#114B59] to-[#071E25] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B9774B]">
            Transparência
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Divulgação de Afiliados
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100">
            O Tech Escolha Certa participa de programas de afiliados. Isso
            significa que podemos receber comissão quando você compra um produto
            por meio de alguns links publicados no site.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[1fr_340px] lg:px-8">
        <article className="space-y-8">
          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-3xl font-bold text-[#0F3F4A]">
              Como funcionam os links afiliados
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Alguns links de produtos publicados no Tech Escolha Certa levam
              para lojas parceiras, como o Mercado Livre. Quando você clica em
              um desses links e realiza uma compra, o site pode receber uma
              comissão.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Essa comissão não altera o preço final para você. O valor, as
              condições de pagamento, o prazo de entrega, a garantia e a
              responsabilidade pela venda são definidos pela loja ou vendedor.
            </p>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-3xl font-bold text-[#0F3F4A]">
              Nossa política editorial
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              As recomendações do Tech Escolha Certa são feitas com base em
              análise editorial, ficha técnica, posicionamento de mercado,
              custo-benefício, experiência esperada de uso e comparação com
              modelos concorrentes.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700">
              A existência de comissão afiliada não garante que um produto será
              recomendado. Também podemos citar produtos sem link afiliado quando
              eles forem relevantes para a comparação ou para a decisão de compra.
            </p>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-3xl font-bold text-[#0F3F4A]">
              Responsabilidade pela compra
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Antes de finalizar uma compra, recomendamos conferir preço,
              reputação do vendedor, avaliações do anúncio, prazo de entrega,
              política de troca, garantia, versão do produto, memória,
              armazenamento, cor e condições de parcelamento.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700">
              O Tech Escolha Certa não vende produtos diretamente, não processa
              pagamentos e não controla estoque, entrega ou atendimento das
              lojas parceiras.
            </p>
          </section>

          <section className="rounded-3xl bg-[#0F3F4A] p-8 text-white shadow-sm ring-1 ring-white/10">
            <h2 className="text-3xl font-bold text-white">Por que usamos afiliados?</h2>

            <p className="mt-4 text-base leading-7 text-slate-100">
              Os links afiliados ajudam a manter o projeto ativo, permitindo a
              criação de reviews, comparativos e guias gratuitos para quem está
              pesquisando antes de comprar.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-100">
              Nosso objetivo é ajudar você a escolher melhor, evitando compras
              ruins, promessas exageradas e decisões baseadas apenas em marketing.
            </p>
          </section>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-28 lg:h-fit">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#B9774B]/10 text-[#B9774B]">
                <BadgeCheck className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
                  Resumo
                </p>
                <h2 className="text-xl font-bold text-[#0F3F4A]">
                  Transparência primeiro
                </h2>
              </div>
            </div>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              <li>• Podemos receber comissão por compras via links.</li>
              <li>• Isso não aumenta o preço final para você.</li>
              <li>• As recomendações seguem critério editorial.</li>
              <li>• A venda é realizada pela loja parceira.</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-[#0F3F4A]" />
              <h3 className="text-lg font-bold text-[#0F3F4A]">
                Leia também
              </h3>
            </div>

            <div className="mt-5 space-y-3 text-sm">
              <Link
                to="/politica-de-privacidade"
                className="flex items-center justify-between gap-3 text-slate-700 hover:text-[#8B5A2B]"
              >
                Política de Privacidade
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                to="/sobre"
                className="flex items-center justify-between gap-3 text-slate-700 hover:text-[#8B5A2B]"
              >
                Sobre o Tech Escolha Certa
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                to="/ofertas"
                className="flex items-center justify-between gap-3 text-slate-700 hover:text-[#8B5A2B]"
              >
                Ver ofertas recomendadas
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
