import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Xiaomi (versão 4G com Snapdragon 685). Lançado com Android 13 e duas versões prometidas.
const PAGE_TITLE = fairPriceTitle("redmi-note-12");
const PAGE_DESCRIPTION = fairPriceDescription("redmi-note-12");

export const Route = createFileRoute("/review/redmi-note-12")({
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
      fairPriceId="redmi-note-12"
      name="Redmi Note 12"
      launched="março de 2023"
      shortVerdict="Só abaixo de R$ 650, e só se for para um uso simples. O Redmi Note 12 já recebeu as versões do Android que a Xiaomi prometeu e o processador é de entrada. Por cerca de R$ 900, o Galaxy A17 5G é novo, tem 5G, câmera estabilizada e seis anos de atualizações."
      alternative={{ id: "galaxy-a17-5g", name: "Galaxy A17 5G", reviewPath: "/review/galaxy-a17-5g" }}
      secondary={{
        id: "galaxy-a36-5g",
        name: "Galaxy A36 5G",
        reviewPath: "/review/galaxy-a36-5g",
        why: "Pode chegar a R$ 1.350? O Galaxy A36 tem tela de 120 Hz, processador muito mais forte e IP67.",
      }}
      specs={[
        ["Processador", "Snapdragon 685 (versão 4G)"],
        ["Tela", "6,67\" AMOLED • 120 Hz"],
        ["Câmeras traseiras", "50 MP + ultra-angular 8 MP + macro 2 MP"],
        ["Câmera frontal", "13 MP"],
        ["Bateria", "5.000 mAh • 33 W"],
        ["Atualizações", "Já recebeu as duas versões do Android prometidas"],
        ["Lançamento", "Março de 2023"],
      ]}
      versus={[
        ["Processador", "Snapdragon 685", "Exynos 1330", "new"],
        ["5G", "Não (versão 4G)", "Sim", "new"],
        ["Tela", "AMOLED • 120 Hz", "AMOLED • 90 Hz", "old"],
        ["Estabilização da câmera", "Não", "Sim (OIS)", "new"],
        ["Atualizações", "Encerradas", "Seis versões do Android", "new"],
        ["Compre se estiver até", "R$ 650", "R$ 900", "tie"],
      ]}
      stillGood={[
        "Tela AMOLED de 120 Hz",
        "Bateria de 5.000 mAh com recarga de 33 W",
        "Câmera ultra-angular",
      ]}
      whyNot={[
        "Não recebe mais versões novas do Android",
        "Processador de entrada, lento em jogos",
        "Sem 5G na versão mais vendida",
      ]}
      versionNote={{
        text: "Redmi Note 12 4G, Note 12 5G, Note 12S e Note 12 Pro são aparelhos diferentes. Confira o nome exato no anúncio.",
        proPath: "/review/redmi-note-13-pro",
        proName: "Redmi Note 13 Pro",
      }}
      faq={[
        { question: "O Redmi Note 12 vale a pena em 2026?", answer: "Só abaixo de R$ 650 e para uso simples. Por cerca de R$ 900, o Galaxy A17 5G é novo, tem 5G e seis anos de atualizações." },
        { question: "O Redmi Note 12 ainda recebe atualização?", answer: "Ele já recebeu as duas versões do Android que a Xiaomi prometeu. Não espere versões novas do sistema." },
        { question: "Redmi Note 12 ou Galaxy A17?", answer: "O A17 5G: 5G, câmera estabilizada e anos de atualização pela frente. O Note 12 só ganha na tela de 120 Hz." },
      ]}
    />
  ),
});
