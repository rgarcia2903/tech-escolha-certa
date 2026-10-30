import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Motorola. Atualizações (Oficina da Net): saiu com Android 13; o Android 15 é a última versão.
const PAGE_TITLE = fairPriceTitle("moto-g54");
const PAGE_DESCRIPTION = fairPriceDescription("moto-g54");

export const Route = createFileRoute("/review/moto-g54")({
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
      fairPriceId="moto-g54"
      name="Moto G54"
      launched="setembro de 2023"
      shortVerdict="Só abaixo de R$ 700. O Moto G54 tem 256 GB e câmera estabilizada, mas a tela é LCD e o Android 15 foi sua última versão do sistema. Por cerca de R$ 900, o Galaxy A17 5G é novo, tem tela AMOLED e seis anos de atualizações."
      alternative={{ id: "galaxy-a17-5g", name: "Galaxy A17 5G", reviewPath: "/review/galaxy-a17-5g" }}
      secondary={{
        id: "moto-g56-5g",
        name: "Moto G56",
        reviewPath: "/review/moto-g56-5g",
        why: "Quer continuar na Motorola? O Moto G56 é o sucessor, com tela maior e IP68.",
      }}
      specs={[
        ["Processador", "Dimensity 7020"],
        ["Tela", "6,5\" LCD • 120 Hz"],
        ["Câmeras traseiras", "50 MP com OIS + ultra-angular 8 MP"],
        ["Câmera frontal", "16 MP"],
        ["Memória", "8 GB de RAM • 256 GB"],
        ["Bateria", "5.000 mAh"],
        ["Atualizações", "Última versão: Android 15"],
        ["Lançamento", "Setembro de 2023"],
      ]}
      versus={[
        ["Tela", "LCD • 120 Hz", "AMOLED • 90 Hz", "new"],
        ["Estabilização da câmera", "Sim (OIS)", "Sim (OIS)", "tie"],
        ["Armazenamento", "256 GB", "128 GB", "old"],
        ["Proteção", "Contra respingos simples", "IP54", "new"],
        ["Atualizações", "Encerradas no Android 15", "Seis versões do Android", "new"],
        ["Compre se estiver até", "R$ 700", "R$ 900", "tie"],
      ]}
      stillGood={[
        "256 GB de armazenamento",
        "Câmera principal estabilizada",
        "Bateria de 5.000 mAh",
      ]}
      whyNot={[
        "Não recebe mais versões novas do Android",
        "Tela LCD",
        "Processador de entrada",
      ]}
      versionNote={{
        text: "Moto G54, G55 e G56 são gerações diferentes. Confira o modelo no anúncio.",
        proPath: "/review/moto-g84",
        proName: "Moto G84",
      }}
      faq={[
        { question: "O Moto G54 vale a pena em 2026?", answer: "Só abaixo de R$ 700. O Android 15 foi sua última versão. Por cerca de R$ 900, o Galaxy A17 5G é novo e tem seis anos de atualizações." },
        { question: "O Moto G54 vai receber o Android 16?", answer: "Não. Ele saiu com o Android 13 e recebeu o 14 e o 15, a última versão prevista." },
        { question: "Moto G54 ou Moto G56?", answer: "O G56: tela maior, IP68 e aparelho novo. O G54 só compensa bem mais barato." },
      ]}
    />
  ),
});
