import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { AffiliateCTA } from "@/components/site/AffiliateCTA";

export const Route = createFileRoute("/review/galaxy-a55")({
  head: () => ({
    meta: [
      { title: "Galaxy A55 vale a pena em 2026? Review completo e honesto" },
      {
        name: "description",
        content:
          "Galaxy A55 vale a pena em 2026? Análise editorial completa: tela, bateria, desempenho, câmeras, One UI, pontos positivos, pontos negativos e recomendação final.",
      },
      {
        name: "keywords",
        content:
          "Galaxy A55 vale a pena em 2026, Galaxy A55 review, Galaxy A55 análise, Galaxy A55 é bom, Galaxy A55 vs Galaxy A35",
      },
      {
        property: "og:title",
        content: "Galaxy A55 vale a pena em 2026? Review completo",
      },
      {
        property: "og:description",
        content:
          "Analisamos tela, bateria, desempenho, câmeras e custo-benefício do Galaxy A55 para responder se ele ainda merece seu dinheiro em 2026.",
      },
    ],
  }),
  component: ReviewGalaxyA55,
});

const scores = [
  ["Tela", "9.2"],
  ["Design e construção", "9.0"],
  ["Desempenho", "8.4"],
  ["Câmera", "8.6"],
  ["Bateria", "9.1"],
  ["Custo-benefício", "9.0"],
];

const pros = [
  "Tela Super AMOLED de 120 Hz com ótima fluidez",
  "Construção mais premium que a média da categoria",
  "Bateria confiável para um dia inteiro de uso",
  "Câmera principal com bons resultados durante o dia",
  "One UI madura, estável e cheia de recursos úteis",
  "Excelente equilíbrio entre preço, acabamento e experiência",
];

const cons = [
  "Carregamento de 25 W poderia ser mais rápido",
  "Não é o melhor celular para jogos pesados",
  "Câmera ultrawide perde qualidade em baixa luz",
  "Não vem com carregador na caixa",
  "Pode perder atratividade se estiver próximo do Galaxy S24 em promoção",
];

const specs = [
  ["Tela", '6,6" Super AMOLED • 120 Hz • Full HD+'],
  ["Processador", "Samsung Exynos 1480"],
  ["Memória RAM", "8 GB"],
  ["Armazenamento", "128 GB / 256 GB"],
  ["Câmera principal", "50 MP com OIS"],
  ["Câmera frontal", "32 MP"],
  ["Bateria", "5.000 mAh"],
  ["Carregamento", "25 W com fio"],
  ["Resistência", "IP67 contra água e poeira"],
  ["Sistema", "Android com One UI"],
];

function ReviewGalaxyA55() {
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
              <span className="text-white">Galaxy A55 Review</span>
            </nav>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#D9A066]">
              Review completo
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight text-[#F8FAFC] md:text-6xl">
              Galaxy A55 vale a pena em 2026? Review completo e sem enrolação
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-200">
              O Galaxy A55 continua sendo um dos intermediários premium mais interessantes
              para quem quer tela excelente, construção sólida, boa bateria e experiência
              Samsung sem pagar preço de topo de linha.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/20">
                Atualizado para 2026
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/20">
                Intermediário premium
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/20">
                Análise independente
              </span>
            </div>
          </div>

          <aside className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D9A066]">
              Nota geral
            </p>

            <div className="mt-4 flex items-end gap-2">
              <span className="text-6xl font-extrabold text-white">9.0</span>
              <span className="pb-2 text-lg text-slate-200">/10</span>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-200">
              Excelente compra para quem busca equilíbrio, tela bonita, boa bateria e
              experiência Samsung confiável.
            </p>

            <a
              href="https://www.mercadolivre.com.br/samsung-galaxy-a54-5g-256gb-preto-8gb-ram/p/MLB23138587?pdp_filters=item_id%3AMLB4713006737&matt_tool=38524122#origin=share&sid=share&wid=MLB4713006737&action=copy"
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#B9774B] px-5 py-3 text-sm font-bold text-white transition hover:brightness-95"
            >
              Ver oferta
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </aside>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[1fr_340px] lg:px-8">
        <article className="space-y-10">
          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B9774B]">
              Veredito rápido
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#0F3F4A]">
              O Galaxy A55 ainda vale a pena?
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Sim. O <strong>Galaxy A55</strong> ainda vale a pena em 2026 quando aparece
              com preço competitivo. Ele não é o celular mais potente da categoria, mas
              entrega um pacote muito equilibrado: tela de ótima qualidade, construção
              superior, bateria segura, câmera principal competente e software maduro.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Para quem quer um Samsung confiável sem pagar por um Galaxy S, ele continua
              sendo uma das escolhas mais racionais da linha intermediária premium.
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
                      className="h-full rounded-full bg-[#B9774B]"
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

          <AnalysisBlock
            eyebrow="Tela e construção"
            title="Tela bonita e acabamento acima da média"
            text="A tela Super AMOLED de 120 Hz é um dos grandes pontos fortes do Galaxy A55. A experiência para vídeos, redes sociais, leitura e navegação é muito boa. O acabamento também transmite sensação mais premium que boa parte dos concorrentes intermediários."
          />

          <AnalysisBlock
            eyebrow="Desempenho"
            title="Bom para o dia a dia, correto para jogos"
            text="O Exynos 1480 entrega bom desempenho para redes sociais, WhatsApp, YouTube, apps bancários, navegação e multitarefa comum. Para jogos pesados, ele funciona, mas não é a melhor escolha para quem prioriza performance máxima."
          />

          <AnalysisBlock
            eyebrow="Câmeras"
            title="Câmera principal confiável"
            text="A câmera principal com estabilização óptica entrega bons resultados durante o dia, com cores agradáveis e nitidez suficiente para redes sociais. À noite, a câmera ultrawide perde qualidade, mas a principal ainda se mantém útil."
          />

          <AnalysisBlock
            eyebrow="Bateria"
            title="Autonomia segura para o dia inteiro"
            text="A bateria de 5.000 mAh é um dos motivos para considerar o Galaxy A55. Em uso misto, ele atravessa o dia com boa margem para a maioria das pessoas. O ponto fraco é o carregamento de 25 W, que fica atrás de rivais Xiaomi e Poco."
          />

          <section className="rounded-3xl bg-[#0F3F4A] p-8 text-white shadow-sm">
            <h2 className="text-3xl font-bold text-[#F8FAFC]">
              Recomendação final
            </h2>

            <p className="mt-4 max-w-4xl text-base leading-7 text-slate-100">
              O Galaxy A55 vale a pena para quem quer uma experiência Samsung equilibrada,
              com boa tela, construção premium, bateria forte e câmera confiável. Se ele
              estiver com bom preço, é uma das escolhas mais seguras da categoria.
            </p>
          </section>

          <AffiliateCTA
            title="Galaxy A55 5G com melhor preço hoje"
            description="Confira preço atualizado, parcelamento e disponibilidade do Galaxy A55 no Mercado Livre."
            buttonText="Ver Galaxy A55 no Mercado Livre"
            href="https://www.mercadolivre.com.br/samsung-galaxy-a54-5g-256gb-preto-8gb-ram/p/MLB23138587?pdp_filters=item_id%3AMLB4713006737&matt_tool=38524122#origin=share&sid=share&wid=MLB4713006737&action=copy"
            highlight="Tela AMOLED • Ótima bateria • Excelente equilíbrio"
          />

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-3xl font-bold text-[#0F3F4A]">Perguntas frequentes</h2>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-bold text-slate-900">
                  O Galaxy A55 é bom para jogos?
                </h3>
                <p className="mt-2 text-slate-700">
                  Sim, ele roda bem jogos populares, mas não é a melhor escolha para quem
                  quer desempenho máximo em games pesados.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  O Galaxy A55 tem boa câmera?
                </h3>
                <p className="mt-2 text-slate-700">
                  Sim. A câmera principal é confiável, principalmente durante o dia. Em
                  fotos noturnas, ela é boa para a categoria, mas não faz milagre.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Galaxy A55 ou Galaxy A35?
                </h3>
                <p className="mt-2 text-slate-700">
                  O A55 é mais premium e tem melhor desempenho. O A35 é melhor para quem
                  quer economizar.
                </p>
              </div>
            </div>
          </section>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-28 lg:h-fit">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B9774B]">
              Veredito
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[#0F3F4A]">
              Compra segura
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-700">
              O Galaxy A55 é ideal para quem busca equilíbrio, acabamento superior e
              experiência Samsung confiável.
            </p>

            <a
              href="https://www.mercadolivre.com.br/samsung-galaxy-a54-5g-256gb-preto-8gb-ram/p/MLB23138587?pdp_filters=item_id%3AMLB4713006737&matt_tool=38524122#origin=share&sid=share&wid=MLB4713006737&action=copy"
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#B9774B] px-5 py-3 text-center text-sm font-bold text-white transition hover:brightness-95"
            >
              Ver oferta
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <div className="mt-6 border-t border-slate-200 pt-5">
              <p className="text-sm font-bold text-[#0F3F4A]">Também leia:</p>

              <div className="mt-3 space-y-3 text-sm">
                <Link
                  to="/comparativo-galaxy-a55-vs-galaxy-a35"
                  className="block text-slate-700 hover:text-[#B9774B]"
                >
                  Galaxy A55 vs Galaxy A35
                </Link>

                <Link
                  to="/comparativo/galaxy-a55-vs-redmi-note-13-pro"
                  className="block text-slate-700 hover:text-[#B9774B]"
                >
                  Galaxy A55 vs Redmi Note 13 Pro
                </Link>

                <Link
                  to="/melhores-celulares-ate-2500"
                  className="block text-slate-700 hover:text-[#B9774B]"
                >
                  Melhores celulares até R$ 2.500
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#071E25]/95 backdrop-blur-xl lg:hidden">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
          <div className="min-w-0 flex-1">
            <span className="block text-[10px] uppercase tracking-[0.18em] text-[#D9A066]">
              Melhor oferta
            </span>
            <span className="block truncate font-heading text-sm font-bold text-white">
              Galaxy A55 5G
            </span>
            <span className="text-xs text-slate-300">A partir de R$ 1.899</span>
          </div>

          <a
            href="https://www.mercadolivre.com.br/samsung-galaxy-a54-5g-256gb-preto-8gb-ram/p/MLB23138587?pdp_filters=item_id%3AMLB4713006737&matt_tool=38524122#origin=share&sid=share&wid=MLB4713006737&action=copy"
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-[#B9774B] px-5 py-3 text-xs font-bold text-white shadow-lg transition hover:brightness-95"
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
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B9774B]">
        {eyebrow}
      </p>

      <h2 className="mt-2 text-3xl font-bold text-[#0F3F4A]">{title}</h2>

      <p className="mt-4 text-base leading-7 text-slate-700">{text}</p>
    </section>
  );
}


