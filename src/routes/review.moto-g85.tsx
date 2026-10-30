import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Motorola. Atualizações (Oficina da Net): saiu com Android 14; o Android 16 é a última versão.
const PAGE_TITLE = fairPriceTitle("moto-g85");
const PAGE_DESCRIPTION = fairPriceDescription("moto-g85");

export const Route = createFileRoute("/review/moto-g85")({
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
      fairPriceId="moto-g85"
      name="Moto G85"
      launched="julho de 2024"
      shortVerdict="Só abaixo de R$ 1.000. O Moto G85 tem tela pOLED curva, câmera estabilizada e 256 GB, mas o Android 16 foi sua última versão do sistema. Por pouco mais, o Galaxy A36 novo tem IP67 e atualizações até 2031; na Motorola, o Moto G Max."
      alternative={{ id: "galaxy-a36-5g", name: "Galaxy A36 5G", reviewPath: "/review/galaxy-a36-5g" }}
      secondary={{
        id: "moto-g-max",
        name: "Moto G Max",
        reviewPath: "/comparativo/moto-g-max-vs-moto-g86",
        why: "Quer continuar na Motorola? O Moto G Max tem tela pOLED mais brilhante, câmera de 200 MP e IP68.",
      }}
      specs={[
        ["Processador", "Snapdragon 6s Gen 3"],
        ["Tela", "6,67\" pOLED curva • 120 Hz"],
        ["Câmeras traseiras", "50 MP com OIS + ultra-angular 8 MP"],
        ["Câmera frontal", "32 MP"],
        ["Memória", "8 ou 12 GB de RAM • 256 GB"],
        ["Bateria", "5.000 mAh • 30 W"],
        ["Atualizações", "Última versão: Android 16"],
        ["Lançamento", "Julho de 2024"],
      ]}
      versus={[
        ["Processador", "Snapdragon 6s Gen 3", "Snapdragon 6 Gen 3", "new"],
        ["Tela", "pOLED curva • 120 Hz", "AMOLED • 120 Hz", "tie"],
        ["Recarga", "30 W", "45 W", "new"],
        ["Proteção", "Contra respingos simples", "IP67", "new"],
        ["Atualizações", "Encerradas no Android 16", "Até 2031", "new"],
        ["Compre se estiver até", "R$ 1.000", "R$ 1.350", "tie"],
      ]}
      stillGood={[
        "Tela pOLED curva de 120 Hz",
        "Câmera principal estabilizada",
        "256 GB de armazenamento",
      ]}
      whyNot={[
        "Não recebe mais versões novas do Android",
        "Proteção contra água simples",
        "Processador modesto para jogos",
      ]}
      versionNote={{
        text: "Moto G85, G84 e G86 são gerações diferentes. Confira o modelo no anúncio.",
        proPath: "/review/moto-g86-5g",
        proName: "Moto G86",
      }}
      faq={[
        { question: "O Moto G85 vale a pena em 2026?", answer: "Só abaixo de R$ 1.000. O Android 16 foi sua última versão. Por pouco mais, o Galaxy A36 tem IP67 e atualizações até 2031." },
        { question: "O Moto G85 vai receber o Android 17?", answer: "Não. Ele saiu com o Android 14 e recebeu o 15 e o 16, a última versão." },
        { question: "Moto G85 ou Moto G86?", answer: "O G86: processador mais forte, IP68 e IP69 e aparelho novo." },
      ]}
    />
  ),
});
