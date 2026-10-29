import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Xiaomi (lançamento em 06/02/2023; duas versões do Android prometidas).
const PAGE_TITLE = fairPriceTitle("poco-x5-pro");
const PAGE_DESCRIPTION = fairPriceDescription("poco-x5-pro");

export const Route = createFileRoute("/review/poco-x5-pro")({
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
      fairPriceId="poco-x5-pro"
      name="Poco X5 Pro"
      launched="fevereiro de 2023"
      shortVerdict="Só abaixo de R$ 900. O Poco X5 Pro ainda tem bom processador, tela AMOLED de 120 Hz e recarga de 67 W, mas já recebeu as versões do Android que a Xiaomi prometeu. Pelo mesmo dinheiro mais um pouco, o Galaxy A36 é novo e tem atualizações até 2031; para jogos, o Poco X8 Pro."
      alternative={{ id: "galaxy-a36-5g", name: "Galaxy A36 5G", reviewPath: "/review/galaxy-a36-5g" }}
      secondary={{
        id: "poco-x8-pro",
        name: "Poco X8 Pro",
        reviewPath: "/comparativo/poco-x8-pro-vs-poco-x7-pro",
        why: "Quer desempenho para jogos? O Poco X8 Pro é o herdeiro da linha, com bateria de 6.500 mAh e recarga de 100 W.",
      }}
      specs={[
        ["Processador", "Snapdragon 778G"],
        ["Tela", "6,67\" AMOLED • 120 Hz"],
        ["Câmeras traseiras", "108 MP + ultra-angular 8 MP + macro 2 MP"],
        ["Câmera frontal", "16 MP"],
        ["Bateria", "5.000 mAh • 67 W"],
        ["Proteção", "IP53"],
        ["Atualizações", "Já recebeu as versões do Android prometidas"],
        ["Lançamento", "Fevereiro de 2023"],
      ]}
      versus={[
        ["Processador", "Snapdragon 778G", "Snapdragon 6 Gen 3", "tie"],
        ["Recarga", "67 W", "45 W", "old"],
        ["Proteção", "IP53", "IP67", "new"],
        ["Atualizações", "Encerradas", "Até 2031", "new"],
        ["Compre se estiver até", "R$ 900", "R$ 1.350", "tie"],
      ]}
      stillGood={[
        "Processador ainda bom para jogos leves",
        "Recarga de 67 W",
        "Tela AMOLED de 120 Hz",
      ]}
      whyNot={[
        "Não recebe mais versões novas do Android",
        "Câmera sem estabilização óptica",
        "Só IP53",
      ]}
      versionNote={{
        text: "Poco X5 e Poco X5 Pro são aparelhos diferentes. Confira o nome no anúncio.",
        proPath: "/review/poco-x6-pro",
        proName: "Poco X6 Pro",
      }}
      faq={[
        { question: "O Poco X5 Pro vale a pena em 2026?", answer: "Só abaixo de R$ 900. Ele já não recebe versões novas do Android. Por pouco mais, o Galaxy A36 é novo e tem atualizações até 2031." },
        { question: "Poco X5 Pro ou Poco X6 Pro?", answer: "O X6 Pro: processador muito mais forte e mais tempo de atualização. Veja o veredito dele." },
        { question: "O Poco X5 Pro ainda é bom para jogos?", answer: "Para jogos leves e médios, sim. Para jogos pesados em 2026, o Poco X8 Pro é bem melhor." },
      ]}
    />
  ),
});
