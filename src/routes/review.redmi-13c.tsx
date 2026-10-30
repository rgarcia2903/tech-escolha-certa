import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Xiaomi. Sem Android 16: o Android 15 é a última versão (droid.tools).
const PAGE_TITLE = fairPriceTitle("redmi-13c");
const PAGE_DESCRIPTION = fairPriceDescription("redmi-13c");

export const Route = createFileRoute("/review/redmi-13c")({
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
      fairPriceId="redmi-13c"
      name="Redmi 13C"
      launched="dezembro de 2023"
      shortVerdict="Só abaixo de R$ 500. O Redmi 13C tem tela grande e bateria de 5.000 mAh, mas o processador é fraco e o Android 15 foi sua última versão do sistema. Por cerca de R$ 800, o Galaxy A07 tem processador mais forte, IP54 e seis anos de atualizações."
      alternative={{ id: "galaxy-a07", name: "Galaxy A07", reviewPath: "/comparativo/galaxy-a07-vs-moto-g06" }}
      secondary={{
        id: "galaxy-a17-5g",
        name: "Galaxy A17 5G",
        reviewPath: "/review/galaxy-a17-5g",
        why: "Pode chegar a R$ 900? O Galaxy A17 5G tem tela AMOLED, câmera estabilizada e 5G.",
      }}
      specs={[
        ["Processador", "Helio G85"],
        ["Tela", "6,74\" LCD HD+ • 90 Hz"],
        ["Câmera principal", "50 MP"],
        ["Câmera frontal", "8 MP"],
        ["Bateria", "5.000 mAh"],
        ["Atualizações", "Última versão: Android 15"],
        ["Lançamento", "Dezembro de 2023"],
      ]}
      versus={[
        ["Processador", "Helio G85", "Helio G99", "new"],
        ["Tela", "6,74\" LCD • 90 Hz", "6,7\" LCD • 90 Hz", "tie"],
        ["Proteção", "Sem certificação", "IP54", "new"],
        ["Atualizações", "Encerradas no Android 15", "Seis anos", "new"],
        ["Compre se estiver até", "R$ 500", "R$ 800", "tie"],
      ]}
      stillGood={[
        "Tela grande de 90 Hz",
        "Bateria de 5.000 mAh",
        "Entrada para microSD",
      ]}
      whyNot={[
        "Não recebe mais versões novas do Android",
        "Processador fraco, lento em apps pesados",
        "Sem proteção contra água",
      ]}
      versionNote={{
        text: "Redmi 13C e Redmi 13C 5G são aparelhos diferentes. Confira o nome no anúncio.",
        proPath: "/review/redmi-note-12",
        proName: "Redmi Note 12",
      }}
      faq={[
        { question: "O Redmi 13C vale a pena em 2026?", answer: "Só abaixo de R$ 500 e para uso simples. O Android 15 foi sua última versão. Por cerca de R$ 800, o Galaxy A07 dura muito mais." },
        { question: "O Redmi 13C vai receber o Android 16?", answer: "Não. O Android 15 é a última versão para ele." },
        { question: "Redmi 13C ou Galaxy A07?", answer: "O A07: processador mais forte, IP54 e seis anos de atualizações." },
      ]}
    />
  ),
});
