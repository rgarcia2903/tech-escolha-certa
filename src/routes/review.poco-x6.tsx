import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Oficina da Net (lançamento em 11/01/2024). Sem oferta própria: a página leva ao sucessor.
const PAGE_TITLE = fairPriceTitle("poco-x6-5g");
const PAGE_DESCRIPTION = fairPriceDescription("poco-x6-5g");

export const Route = createFileRoute("/review/poco-x6")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
    ],
  }),
  component: () => (
    <OlderModelVerdict
      fairPriceId="poco-x6-5g"
      name="Poco X6 5G"
      launched="janeiro de 2024"
      shortVerdict="Só abaixo de R$ 1.500. Ele ainda tem tela e recarga boas, mas novo costuma custar o mesmo que modelos mais recentes. Pelo mesmo dinheiro, o Redmi Note 15 5G é a compra mais segura; para jogos, o Poco X7 Pro é bem mais forte."
      alternative={{ id: "redmi-note-15-5g", name: "Redmi Note 15 5G", reviewPath: "/review/redmi-note-15-5g" }}
      secondary={{
        id: "poco-x7-pro",
        name: "Poco X7 Pro",
        reviewPath: "/review/poco-x7-pro",
        why: "Joga muito? O Poco X7 Pro é o sucessor direto da linha X, com desempenho bem maior.",
      }}
      specs={[
        ["Processador", "Snapdragon 7s Gen 2 (4 nm)"],
        ["Tela", 'AMOLED 6,67" • 1.5K (2712 × 1220) • 120 Hz'],
        ["Câmeras traseiras", "64 MP com OIS + 8 MP ultrawide + 2 MP macro"],
        ["Câmera frontal", "16 MP"],
        ["Bateria", "5.100 mAh"],
        ["Carregamento", "67 W"],
        ["Proteção", "IP54"],
        ["Sistema de lançamento", "Android 13 (MIUI 14)"],
        ["Lançamento", "Janeiro de 2024"],
      ]}
      versus={[
        ["Geração", "Janeiro de 2024", "Atual (linha Note 15)", "new"],
        ["Processador", "Snapdragon 7s Gen 2", "Snapdragon 6 Gen 3", "tie"],
        ["Tela", "AMOLED 1.5K 120 Hz", "AMOLED 120 Hz, até 3.200 nits", "tie"],
        ["Bateria", "5.100 mAh", "5.520 mAh", "new"],
        ["Recarga", "67 W", "45 W, carregador na caixa", "old"],
        ["Proteção", "IP54", "IP65", "new"],
        ["Compre se estiver até", "R$ 1.500", "R$ 1.800", "tie"],
      ]}
      stillGood={[
        "Tela AMOLED 1.5K de 120 Hz, nítida e fluida",
        "Recarga rápida de 67 W",
        "Câmera principal de 64 MP com estabilização óptica",
      ]}
      whyNot={[
        "Lançado em janeiro de 2024: já tem quase três anos de mercado",
        "Novo, costuma custar o mesmo que modelos mais recentes",
        "Proteção só IP54, contra respingos",
      ]}
      versionNote={{
        text: "O Poco X6 5G (sem Pro) e o Poco X6 Pro são aparelhos diferentes, com processadores diferentes. Confira o nome exato no anúncio.",
        proPath: "/review/poco-x6-pro",
        proName: "Poco X6 Pro",
      }}
      faq={[
        {
          question: "O Poco X6 vale a pena em 2026?",
          answer:
            "Só com desconto forte, abaixo de R$ 1.500. Acima disso, o Redmi Note 15 5G é mais novo e terá suporte por mais tempo, e o Poco X7 Pro é bem mais forte para jogos.",
        },
        {
          question: "Qual a diferença entre o Poco X6 e o Poco X6 Pro?",
          answer:
            "O X6 Pro tem processador Dimensity 8300-Ultra, bem mais forte. O X6 (sem Pro) usa o Snapdragon 7s Gen 2. São aparelhos diferentes; confira o nome no anúncio.",
        },
        {
          question: "O Poco X6 é bom para jogos?",
          answer:
            "Roda bem jogos populares em gráficos médios. Para jogos pesados, o Poco X7 Pro é a escolha certa hoje.",
        },
      ]}
    />
  ),
});
