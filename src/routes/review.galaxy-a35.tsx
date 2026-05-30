import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/review/galaxy-a35")({
  component: ReviewGalaxyA35,
});

const destaques = [
  ["Melhor para", "Quem quer um Samsung equilibrado até R$ 2.000"],
  ["Ponto forte", "Tela Super AMOLED, bateria e compra segura"],
  ["Ponto fraco", "Carregamento poderia ser mais rápido"],
  ["Veredito", "Um dos melhores intermediários custo-benefício da Samsung"],
];

const notas = [
  ["Tela", "9.0"],
  ["Desempenho", "8.3"],
  ["Câmera", "8.2"],
  ["Bateria", "8.8"],
  ["Custo-benefício", "9.1"],
];

const pros = [
  "Tela Super AMOLED com ótima qualidade",
  "Boa bateria para o uso diário",
  "Experiência Samsung segura e confiável",
  "Bom custo-benefício em promoções",
  "Visual moderno e construção competente",
];

const contras = [
  "Carregamento não é dos mais rápidos",
  "Desempenho fica abaixo do Galaxy A55",
  "Câmera noturna poderia ser melhor",
  "Concorrentes chineses entregam mais ficha técnica pelo preço",
];

function ReviewGalaxyA35() {
  return (
    <main className="min-h-screen bg-[#F7F2EB] text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-[#0B2D35] via-[#114B59] to-[#071E25] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_360px] lg:px-8">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#8B5A2B]">
              Review completo
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight text-[#F8FAFC] md:text-6xl">
              Galaxy A35 5G: ainda vale a pena comprar em 2026?
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-200">
              O Galaxy A35 5G é um dos intermediários mais importantes da Samsung para
              quem busca boa tela, bateria confiável, câmera honesta e uma experiência
              segura sem pagar preço de topo de linha.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/20">
                Atualizado para 2026
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/20">
                Review editorial
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/20">
                Foco em custo-benefício
              </span>
            </div>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
              Nota geral
            </p>

            <div className="mt-4 flex items-end gap-2">
              <span className="text-6xl font-extrabold text-white">8.7</span>
              <span className="pb-2 text-lg text-slate-200">/10</span>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-200">
              Excelente escolha para quem quer um Samsung confiável, equilibrado e com
              boa vida útil dentro da faixa intermediária.
            </p>

            <a
              href="https://www.mercadolivre.com.br/samsung-galaxy-a35-5g-dual-sim-256gb-azul-escuro-8-gb-ram/p/MLB34729843?pdp_filters=item_id%3AMLB6662576092&matt_tool=38524122"
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="mt-6 block rounded-full bg-[#B9774B] px-5 py-3 text-center text-sm font-bold text-white transition hover:brightness-95"
            >
              Ver ofertas no Mercado Livre
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[1fr_340px] lg:px-8">
        <article className="space-y-10">
          <section className="grid gap-5 md:grid-cols-2">
            {destaques.map(([titulo, texto]) => (
              <div
                key={titulo}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-[#8B5A2B]">
                  {titulo}
                </p>
                <h2 className="mt-2 text-xl font-bold text-[#0F3F4A]">{texto}</h2>
              </div>
            ))}
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-3xl font-bold text-[#0F3F4A]">
              O Galaxy A35 5G vale a pena?
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Sim, o <strong>Galaxy A35 5G</strong> vale a pena principalmente quando
              aparece em boas promoções. Ele não é o celular mais potente da categoria,
              mas entrega um pacote muito consistente: tela excelente, boa bateria,
              sistema confiável e suporte mais previsível que muitos concorrentes.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Para quem quer um aparelho para redes sociais, vídeos, fotos do dia a dia,
              bancos, WhatsApp, navegação e uso profissional leve, o A35 é uma compra
              segura. Quem joga bastante ou quer câmera mais avançada pode considerar o
              Galaxy A55 ou modelos como Poco X6.
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
                {contras.map((item) => (
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
            <h2 className="text-3xl font-bold text-[#0F3F4A]">
              Notas por categoria
            </h2>

            <div className="mt-6 space-y-4">
              {notas.map(([categoria, nota]) => (
                <div key={categoria}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-semibold text-slate-800">{categoria}</span>
                    <span className="font-bold text-[#0F3F4A]">{nota}/10</span>
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-[#B9774B]"
                      style={{ width: `${Number(nota) * 10}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-3xl font-bold text-[#0F3F4A]">
              Tela e design
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              A tela é um dos grandes pontos fortes do Galaxy A35. O painel Super AMOLED
              com alta fluidez deixa o celular muito agradável para vídeos, redes sociais,
              leitura e navegação. É justamente nesse ponto que o aparelho transmite uma
              sensação acima da média para a faixa de preço.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700">
              O design segue a identidade atual da Samsung, com visual limpo e moderno.
              Ele não tem o mesmo refinamento do Galaxy A55, mas passa boa impressão e
              não parece um aparelho básico.
            </p>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-3xl font-bold text-[#0F3F4A]">
              Câmeras
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              A câmera principal do Galaxy A35 atende bem no uso comum. Fotos durante o
              dia costumam sair boas, com cores agradáveis e nível de detalhe suficiente
              para redes sociais. Em ambientes internos ou à noite, o resultado cai, mas
              ainda é aceitável para a categoria.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Para quem faz muitas fotos e vídeos, o Galaxy A55 continua sendo uma opção
              mais forte. Mas para registros cotidianos, viagens simples, família e redes
              sociais, o A35 cumpre bem o papel.
            </p>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-3xl font-bold text-[#0F3F4A]">
              Desempenho e jogos
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              O desempenho do Galaxy A35 é suficiente para a maioria dos usuários. Ele
              roda bem aplicativos populares, alterna entre tarefas comuns sem grandes
              problemas e mantém uma experiência estável no dia a dia.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Para jogos, ele funciona melhor em títulos leves e intermediários. Em games
              mais pesados, é preciso ajustar gráficos para manter fluidez. Quem quer
              desempenho como prioridade deve olhar para Poco X6 ou Galaxy A55.
            </p>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-3xl font-bold text-[#0F3F4A]">
              Bateria
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              A bateria é outro ponto positivo. O Galaxy A35 consegue entregar um dia
              completo de uso para a maior parte das pessoas, especialmente em uma rotina
              com redes sociais, mensagens, vídeos, navegador e aplicativos de banco.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700">
              O ponto menos empolgante é o carregamento, que não acompanha a velocidade de
              alguns concorrentes chineses. Mesmo assim, a autonomia compensa para quem
              prioriza estabilidade.
            </p>
          </section>

          <section className="rounded-3xl bg-[#0F3F4A] p-8 text-white shadow-sm">
            <h2 className="text-3xl font-bold text-[#F8FAFC]">
              Recomendação final
            </h2>

            <p className="mt-4 max-w-4xl text-base leading-7 text-slate-100">
              O Galaxy A35 5G é uma compra muito sólida para quem busca um celular
              Samsung confiável até R$ 2.000. Ele é indicado para quem quer tela bonita,
              boa bateria, sistema estável e suporte mais seguro. Se o preço estiver
              próximo do Galaxy A55, vale considerar subir de categoria; se estiver bem
              mais barato, o A35 é uma excelente escolha.
            </p>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-3xl font-bold text-[#0F3F4A]">
              Perguntas frequentes
            </h2>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-bold text-slate-900">
                  O Galaxy A35 é melhor que o Galaxy A55?
                </h3>
                <p className="mt-2 text-slate-700">
                  Não. O Galaxy A55 é superior em desempenho, câmera e construção. O A35
                  se destaca por entregar boa experiência custando menos.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  O Galaxy A35 é bom para jogos?
                </h3>
                <p className="mt-2 text-slate-700">
                  Ele é bom para jogos leves e intermediários. Para jogos pesados, existem
                  opções mais fortes em desempenho na mesma faixa de preço.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  A câmera do Galaxy A35 é boa?
                </h3>
                <p className="mt-2 text-slate-700">
                  Sim, principalmente durante o dia. Para fotos noturnas e vídeos mais
                  exigentes, o Galaxy A55 entrega resultado melhor.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Vale comprar o Galaxy A35 em 2026?
                </h3>
                <p className="mt-2 text-slate-700">
                  Vale, principalmente se ele estiver com bom preço. É uma das opções mais
                  equilibradas da Samsung para quem busca custo-benefício.
                </p>
              </div>
            </div>
          </section>
        </article>

        <div className="lg:sticky lg:top-6 lg:h-fit">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
              Veredito
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[#0F3F4A]">
              Compra segura até R$ 2.000
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-700">
              O Galaxy A35 é ideal para quem quer um Samsung equilibrado, com boa tela,
              bateria forte e experiência confiável.
            </p>

            <a
              href="https://www.mercadolivre.com.br/samsung-galaxy-a35-5g-dual-sim-256gb-azul-escuro-8-gb-ram/p/MLB34729843?pdp_filters=item_id%3AMLB6662576092&matt_tool=38524122"
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="mt-5 block rounded-full bg-[#B9774B] px-5 py-3 text-center text-sm font-bold text-white transition hover:brightness-95"
            >
              Ver ofertas
            </a>

            <div className="mt-6 border-t border-slate-200 pt-5">
              <p className="text-sm font-bold text-[#0F3F4A]">Também leia:</p>

              <div className="mt-3 space-y-3 text-sm">
                <a
                  href="/comparativo-galaxy-a55-vs-galaxy-a35"
                  className="block text-slate-700 hover:text-[#8B5A2B]"
                >
                  Galaxy A55 vs Galaxy A35
                </a>

                <a
                  href="/melhores-celulares-ate-2000"
                  className="block text-slate-700 hover:text-[#8B5A2B]"
                >
                  Melhores celulares até R$ 2.000
                </a>

                <a
                  href="/melhores-celulares-ate-2500"
                  className="block text-slate-700 hover:text-[#8B5A2B]"
                >
                  Melhores celulares até R$ 2.500
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}






