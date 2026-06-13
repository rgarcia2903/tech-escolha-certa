import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { trackAffiliateClick } from "@/lib/analytics";

export const Route = createFileRoute("/review/poco-x6-pro")({
  head: () => ({
    meta: [
      { title: "Poco X6 Pro vale a pena em 2026? Review completo e honesto" },
      {
        name: "description",
        content:
          "Poco X6 Pro vale a pena em 2026? Análise editorial completa: tela, bateria, desempenho, câmeras, HyperOS, pontos positivos, pontos negativos e recomendação final.",
      },
      {
        name: "keywords",
        content:
          "Poco X6 Pro vale a pena em 2026, Poco X6 Pro review, Poco X6 Pro análise, Poco X6 Pro é bom, Poco X6 Pro ficha técnica, Poco X6 Pro para jogos",
      },
      {
        property: "og:title",
        content: "Poco X6 Pro vale a pena em 2026? Review completo",
      },
      {
        property: "og:description",
        content:
          "Analisamos desempenho, tela, bateria, câmeras e custo-benefício do Poco X6 Pro para responder se ele ainda merece seu dinheiro em 2026.",
      },
    ],
  }),
  component: ReviewPocoX6Pro,
});

const scores = [
  ["Tela", "9.1"],
  ["Design e construção", "8.2"],
  ["Desempenho", "9.6"],
  ["Câmera", "7.5"],
  ["Bateria", "8.8"],
  ["Custo-benefício", "9.3"],
];

const pros = [
  "Desempenho muito forte para a categoria",
  "Excelente opção para jogos e multitarefa",
  "Tela AMOLED de 120 Hz com ótima definição",
  "Carregamento rápido de 67 W",
  "Bateria segura para um dia de uso",
  "5G e versões com bastante armazenamento",
];

const cons = [
  "Câmeras secundárias são simples",
  "Não é o melhor celular para fotos noturnas",
  "HyperOS pode não agradar todo mundo",
  "Atualizações menos previsíveis que Samsung",
  "Pode aquecer em jogos pesados por muito tempo",
];

const specs = [
  ["Tela", '6,67" AMOLED • 120 Hz • resolução 1.5K'],
  ["Processador", "MediaTek Dimensity 8300-Ultra"],
  ["Memória RAM", "8 GB / 12 GB"],
  ["Armazenamento", "256 GB / 512 GB"],
  ["Câmera principal", "64 MP com OIS"],
  ["Câmeras auxiliares", "8 MP ultrawide + 2 MP macro"],
  ["Câmera frontal", "16 MP"],
  ["Bateria", "5.000 mAh"],
  ["Carregamento", "67 W com fio"],
  ["Sistema", "HyperOS"],
];

function ReviewPocoX6Pro() {
  return (
    <main className="min-h-screen bg-[#F7F2EB] text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-[#0B2D35] via-[#114B59] to-[#071E25] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_360px] lg:px-8">
          <div>
            <nav className="mb-5 flex flex-wrap items-center gap-2 text-xs text-slate-300">
              <Link to="/" className="hover:text-white">
                Home
              </Link>
              <span>/</span>
              <Link to="/celulares" className="hover:text-white">
                Celulares
              </Link>
              <span>/</span>
              <span className="text-white">Poco X6 Pro Review</span>
            </nav>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#8B5A2B]">
              Review completo
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight text-[#F8FAFC] md:text-6xl">
              Poco X6 Pro vale a pena em 2026? Review completo e sem enrolação
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-200">
              O Poco X6 Pro continua sendo um dos intermediários mais fortes para
              quem prioriza desempenho, jogos, tela de qualidade e carregamento
              rápido sem pagar preço de celular topo de linha.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/20">
                Atualizado para 2026
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/20">
                Foco em desempenho
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/20">
                Análise independente
              </span>
            </div>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
              Nota geral
            </p>

            <div className="mt-4 flex items-end gap-2">
              <span className="text-6xl font-extrabold text-white">8.9</span>
              <span className="pb-2 text-lg text-slate-200">/10</span>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-200">
              Excelente compra para quem busca potência, jogos, tela fluida,
              bateria consistente e carregamento rápido.
            </p>

            <a
              href="https://www.mercadolivre.com.br/xiaomi-pocophone-poco-x6-pro-5g-dual-sim-512-gb-amarelo-12-gb-ram/p/MLB29734179?pdp_filters=item_id%3AMLB4712693597&attributes=COLOR%3AMLB29734179&matt_tool=38524122"
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              onClick={() =>
                trackAffiliateClick({
                  productName: "Poco X6 Pro",
                  pageType: "review",
                })
              }
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#8B5A2B] px-5 py-3 text-sm font-bold text-white transition hover:brightness-95"
            >
              Ver oferta
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <p className="mt-3 text-xs leading-5 text-slate-300">
              Substitua o link acima pelo afiliado do Mercado Livre quando tiver
              o produto validado.
            </p>
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
              O Poco X6 Pro ainda vale a pena?
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Sim. O <strong>Poco X6 Pro</strong> ainda vale a pena em 2026 para
              quem quer o máximo de desempenho possível em um intermediário. Ele
              se destaca pelo processador Dimensity 8300-Ultra, pela tela AMOLED
              de 120 Hz e pelo carregamento rápido de 67 W.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Ele faz mais sentido para quem joga, usa muitos aplicativos ao
              mesmo tempo, consome bastante vídeo e quer um celular rápido por
              vários anos. Se sua prioridade for câmera, acabamento premium ou
              atualizações mais previsíveis, o Galaxy A55 pode ser uma escolha
              mais equilibrada.
            </p>
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
              {scores.map(([label, score]) => (
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
            <h2 className="text-3xl font-bold text-[#0F3F4A]">
              Desempenho: o maior motivo para comprar
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              O principal argumento do Poco X6 Pro é desempenho. O Dimensity
              8300-Ultra entrega uma experiência muito rápida para redes sociais,
              navegação, multitarefa, edição leve, vídeos e jogos. Na prática,
              ele passa a sensação de ser mais potente do que muitos celulares
              intermediários vendidos na mesma faixa.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Para quem joga Free Fire, COD Mobile, PUBG, Genshin Impact ou
              títulos mais exigentes, ele é uma das escolhas mais fortes do
              segmento. Ainda assim, em sessões longas de jogos pesados, é normal
              notar aquecimento e alguma redução de desempenho para controle de
              temperatura.
            </p>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-3xl font-bold text-[#0F3F4A]">
              Tela, bateria e carregamento
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              A tela AMOLED de 6,67 polegadas com 120 Hz é um dos pontos altos.
              Ela entrega ótima fluidez, bom brilho e definição acima da média
              para vídeos, redes sociais e jogos. É uma tela que combina muito
              bem com o perfil de desempenho do aparelho.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700">
              A bateria de 5.000 mAh segura bem um dia de uso comum. O grande
              diferencial é o carregamento de 67 W, que reduz bastante o tempo
              preso na tomada e deixa o uso mais prático para quem tem rotina
              corrida.
            </p>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-3xl font-bold text-[#0F3F4A]">
              Câmeras: boas, mas não são o foco
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              A câmera principal de 64 MP com estabilização óptica consegue bons
              resultados em fotos de dia e ambientes bem iluminados. Para redes
              sociais e registros do cotidiano, atende bem.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700">
              O ponto de atenção fica nas câmeras auxiliares. A ultrawide é
              simples e a macro tem uso limitado. Em baixa luz, o conjunto também
              não compete com modelos mais focados em fotografia. Quem compra o
              Poco X6 Pro deve comprar principalmente pelo desempenho, não pela
              câmera.
            </p>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-3xl font-bold text-[#0F3F4A]">Ficha técnica</h2>

            <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-slate-200">
              {specs.map(([label, value], index) => (
                <div
                  key={label}
                  className={`grid grid-cols-[0.9fr_1.1fr] gap-4 px-4 py-3 text-sm ${
                    index % 2 === 0 ? "bg-slate-50" : "bg-white"
                  }`}
                >
                  <span className="font-semibold text-slate-800">{label}</span>
                  <span className="text-slate-700">{value}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-[#0F3F4A] p-8 text-white shadow-sm">
            <h2 className="text-3xl font-bold text-white">Conclusão</h2>

            <p className="mt-4 text-base leading-7 text-slate-100">
              O Poco X6 Pro é uma escolha excelente para quem quer desempenho
              forte, tela bonita, carregamento rápido e bom custo-benefício. Ele
              é especialmente indicado para jogos e uso pesado.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-100">
              A compra só deixa de ser tão interessante se câmera, acabamento
              premium ou atualizações forem prioridades maiores para você. Nesse
              caso, vale comparar com o Galaxy A55.
            </p>
          </section>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
              Resumo
            </p>

            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <div className="flex justify-between gap-4">
                <span>Perfil ideal</span>
                <strong className="text-right text-[#0F3F4A]">Jogos e desempenho</strong>
              </div>
              <div className="flex justify-between gap-4">
                <span>Melhor ponto</span>
                <strong className="text-right text-[#0F3F4A]">Processador</strong>
              </div>
              <div className="flex justify-between gap-4">
                <span>Ponto fraco</span>
                <strong className="text-right text-[#0F3F4A]">Câmeras auxiliares</strong>
              </div>
              <div className="flex justify-between gap-4">
                <span>Nota</span>
                <strong className="text-right text-[#0F3F4A]">8.9/10</strong>
              </div>
            </div>

            <a
              href="https://www.mercadolivre.com.br/xiaomi-pocophone-poco-x6-pro-5g-dual-sim-512-gb-amarelo-12-gb-ram/p/MLB29734179?pdp_filters=item_id%3AMLB4712693597&attributes=COLOR%3AMLB29734179&matt_tool=38524122"
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              onClick={() =>
                trackAffiliateClick({
                  productName: "Poco X6 Pro",
                  pageType: "review",
                })
              }
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#8B5A2B] px-5 py-3 text-sm font-bold text-white transition hover:brightness-95"
            >
              Ver oferta
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-lg font-bold text-[#0F3F4A]">Leia também</h3>

            <div className="mt-4 space-y-3 text-sm">
              <Link
                to="/review/galaxy-a55"
                className="block text-slate-700 hover:text-[#8B5A2B]"
              >
                Review Galaxy A55
              </Link>

              <Link
                to="/melhores-celulares-custo-beneficio"
                className="block text-slate-700 hover:text-[#8B5A2B]"
              >
                Melhores celulares custo-benefício
              </Link>

              <Link
                to="/comparativo/galaxy-a55-vs-redmi-note-13-pro"
                className="block text-slate-700 hover:text-[#8B5A2B]"
              >
                Galaxy A55 vs Redmi Note 13 Pro
              </Link>

              <Link
                to="/melhores-celulares-xiaomi"
                className="block text-slate-700 hover:text-[#8B5A2B]"
              >
                Melhores Xiaomi
              </Link>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
