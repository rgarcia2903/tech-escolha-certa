import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/comparativo-galaxy-a55-vs-galaxy-a35")({
  component: ComparativoGalaxyA55VsGalaxyA35,
});

const categorias = [
  {
    categoria: "Tela",
    vencedor: "Galaxy A55",
    descricao:
      "O Galaxy A55 entrega construção mais premium e sensação visual mais refinada, principalmente em brilho, contraste e acabamento.",
  },
  {
    categoria: "Desempenho",
    vencedor: "Galaxy A55",
    descricao:
      "O A55 possui desempenho mais consistente para multitarefa, jogos e uso prolongado no dia a dia.",
  },
  {
    categoria: "Câmeras",
    vencedor: "Galaxy A55",
    descricao:
      "O processamento de imagem do Galaxy A55 é mais equilibrado, principalmente em fotos noturnas e vídeos.",
  },
  {
    categoria: "Bateria",
    vencedor: "Empate",
    descricao:
      "Ambos possuem ótima autonomia e conseguem entregar um dia completo de uso com tranquilidade.",
  },
  {
    categoria: "Custo-benefício",
    vencedor: "Galaxy A35",
    descricao:
      "O Galaxy A35 entrega experiência muito próxima do A55 custando menos em diversas promoções.",
  },
];

function ComparativoGalaxyA55VsGalaxyA35() {
  return (
    <main className="min-h-screen bg-[#F7F2EB] text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-[#0B2D35] via-[#114B59] to-[#071E25] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-5xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#D9A066]">
              Comparativo premium
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight text-[#F8FAFC] md:text-6xl">
              Galaxy A55 vs Galaxy A35: qual vale mais a pena em 2026?
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-200">
              O Galaxy A55 e o Galaxy A35 são dois dos celulares Samsung mais procurados
              atualmente. Neste comparativo completo, analisamos desempenho, câmera,
              tela, bateria, construção e custo-benefício para descobrir qual é a melhor
              compra para cada perfil de usuário.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/20">
                Atualizado para 2026
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/20">
                Comparativo Samsung
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/20">
                Foco em custo-benefício
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#B9774B]">
              Galaxy A55
            </p>

            <h2 className="mt-2 text-4xl font-bold text-[#0F3F4A]">
              Mais premium
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              O Galaxy A55 é a melhor escolha para quem quer acabamento superior,
              experiência mais refinada, câmeras melhores e desempenho mais consistente.
            </p>

            <div className="mt-6 space-y-3">
              <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700 ring-1 ring-slate-200">
                Melhor construção
              </div>

              <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700 ring-1 ring-slate-200">
                Melhor câmera
              </div>

              <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700 ring-1 ring-slate-200">
                Melhor experiência geral
              </div>
            </div>

            <a
              href="https://www.mercadolivre.com.br/"
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-[#B9774B] px-6 py-3 text-sm font-bold text-white transition hover:brightness-95"
            >
              Ver Galaxy A55
            </a>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#B9774B]">
              Galaxy A35
            </p>

            <h2 className="mt-2 text-4xl font-bold text-[#0F3F4A]">
              Melhor custo-benefício
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              O Galaxy A35 é ideal para quem quer economizar sem abrir mão da experiência
              Samsung. Ele entrega ótima tela, boa bateria e desempenho muito equilibrado.
            </p>

            <div className="mt-6 space-y-3">
              <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700 ring-1 ring-slate-200">
                Mais barato
              </div>

              <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700 ring-1 ring-slate-200">
                Excelente equilíbrio
              </div>

              <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700 ring-1 ring-slate-200">
                Ótima compra até R$ 2.000
              </div>
            </div>

            <a
              href="https://www.mercadolivre.com.br/"
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-[#B9774B] px-6 py-3 text-sm font-bold text-white transition hover:brightness-95"
            >
              Ver Galaxy A35
            </a>
          </div>
        </div>

        <section className="mt-12 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B9774B]">
              Vencedor por categoria
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#0F3F4A]">
              Quem vence em cada ponto?
            </h2>
          </div>

          <div className="space-y-5">
            {categorias.map((item) => (
              <div
                key={item.categoria}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#0F3F4A]">
                      {item.categoria}
                    </h3>

                    <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-700">
                      {item.descricao}
                    </p>
                  </div>

                  <div className="rounded-full bg-[#0F3F4A] px-5 py-3 text-sm font-bold text-white">
                    {item.vencedor}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-3xl font-bold text-[#0F3F4A]">
            Comparativo técnico
          </h2>

          <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-[#0F3F4A] text-white">
                <tr>
                  <th className="px-5 py-4">Especificação</th>
                  <th className="px-5 py-4">Galaxy A55</th>
                  <th className="px-5 py-4">Galaxy A35</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="px-5 py-4 font-semibold text-[#0F3F4A]">
                    Tela
                  </td>
                  <td className="px-5 py-4 text-slate-700">
                    Super AMOLED 120Hz
                  </td>
                  <td className="px-5 py-4 text-slate-700">
                    Super AMOLED 120Hz
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-semibold text-[#0F3F4A]">
                    Processador
                  </td>
                  <td className="px-5 py-4 text-slate-700">
                    Exynos 1480
                  </td>
                  <td className="px-5 py-4 text-slate-700">
                    Exynos 1380
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-semibold text-[#0F3F4A]">
                    Bateria
                  </td>
                  <td className="px-5 py-4 text-slate-700">
                    5.000 mAh
                  </td>
                  <td className="px-5 py-4 text-slate-700">
                    5.000 mAh
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-semibold text-[#0F3F4A]">
                    Construção
                  </td>
                  <td className="px-5 py-4 text-slate-700">
                    Mais premium
                  </td>
                  <td className="px-5 py-4 text-slate-700">
                    Boa construção
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-semibold text-[#0F3F4A]">
                    Melhor para
                  </td>
                  <td className="px-5 py-4 text-slate-700">
                    Experiência premium
                  </td>
                  <td className="px-5 py-4 text-slate-700">
                    Economia
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-[#0F3F4A] p-8 text-white shadow-sm">
          <h2 className="text-3xl font-bold text-[#F8FAFC]">
            Recomendação final
          </h2>

          <p className="mt-4 max-w-4xl text-base leading-7 text-slate-100">
            O Galaxy A55 vale mais a pena para quem quer uma experiência mais premium,
            melhor acabamento e câmeras superiores. Já o Galaxy A35 é uma das melhores
            compras custo-benefício da Samsung atualmente e atende muito bem a maioria
            dos usuários.
          </p>
        </section>

        <section className="mt-12 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-3xl font-bold text-[#0F3F4A]">
            Perguntas frequentes
          </h2>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="font-bold text-slate-900">
                O Galaxy A55 é muito melhor que o Galaxy A35?
              </h3>

              <p className="mt-2 text-slate-700">
                Não muito. O A55 é melhor em construção, câmera e desempenho, mas o A35
                entrega experiência muito próxima custando menos.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-900">
                Vale pagar mais pelo Galaxy A55?
              </h3>

              <p className="mt-2 text-slate-700">
                Vale para quem prioriza acabamento premium, melhor câmera e experiência
                mais refinada no dia a dia.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-900">
                Qual tem a melhor bateria?
              </h3>

              <p className="mt-2 text-slate-700">
                Ambos possuem ótima autonomia e conseguem entregar um dia completo de uso
                sem dificuldade.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-900">
                Qual é o melhor custo-benefício?
              </h3>

              <p className="mt-2 text-slate-700">
                O Galaxy A35 costuma ser a melhor compra para quem quer economizar sem
                perder muito da experiência Samsung.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
