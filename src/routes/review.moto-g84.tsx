import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Motorola. Atualizações (Oficina da Net): lançado com Android 13; o Android 15 é a última versão.
const PAGE_TITLE = fairPriceTitle("moto-g84");
const PAGE_DESCRIPTION = fairPriceDescription("moto-g84");

export const Route = createFileRoute("/review/moto-g84")({
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
      fairPriceId="moto-g84"
      name="Moto G84"
      launched="setembro de 2023"
      shortVerdict="Só abaixo de R$ 900. O Moto G84 tem tela pOLED, 256 GB e câmera estabilizada, mas o Android 15 foi sua última versão e o processador é modesto. Para continuar na Motorola, o Moto G Max é novo, tem tela muito mais brilhante, câmera de 200 MP e IP68."
      alternative={{ id: "moto-g-max", name: "Moto G Max", reviewPath: "/comparativo/moto-g-max-vs-moto-g86" }}
      secondary={{
        id: "galaxy-a36-5g",
        name: "Galaxy A36 5G",
        reviewPath: "/review/galaxy-a36-5g",
        why: "Quer o maior tempo de atualização? O Galaxy A36 recebe atualizações até 2031.",
      }}
      specs={[
        ["Processador", "Snapdragon 695"],
        ["Tela", "6,55\" pOLED • 120 Hz"],
        ["Câmeras traseiras", "50 MP com OIS + ultra-angular 8 MP"],
        ["Câmera frontal", "16 MP"],
        ["Memória", "12 GB de RAM • 256 GB"],
        ["Bateria", "5.000 mAh • 30 W"],
        ["Proteção", "IP54"],
        ["Atualizações", "Última versão: Android 15"],
        ["Lançamento", "Setembro de 2023"],
      ]}
      versus={[
        ["Processador", "Snapdragon 695", "Dimensity 6400", "tie"],
        ["Tela", "pOLED 6,55\" • 120 Hz", "pOLED 6,8\" • 120 Hz • 5.000 nits", "new"],
        ["Câmera principal", "50 MP com OIS", "200 MP com OIS", "new"],
        ["Proteção", "IP54", "IP68 e IP69", "new"],
        ["Atualizações", "Encerradas no Android 15", "Aparelho novo", "new"],
        ["Compre se estiver até", "R$ 900", "R$ 1.600", "tie"],
      ]}
      stillGood={[
        "Tela pOLED de 120 Hz",
        "12 GB de RAM e 256 GB",
        "Câmera principal estabilizada",
      ]}
      whyNot={[
        "Não recebe mais versões novas do Android",
        "Processador modesto",
        "Só IP54",
      ]}
      versionNote={{
        text: "Moto G84, G85 e G86 são gerações diferentes. Confira o modelo no anúncio.",
        proPath: "/review/moto-g86-5g",
        proName: "Moto G86",
      }}
      faq={[
        { question: "O Moto G84 vale a pena em 2026?", answer: "Só abaixo de R$ 900. O Android 15 foi sua última versão. Para continuar na Motorola, o Moto G Max é novo e tem tela, câmera e proteção melhores." },
        { question: "O Moto G84 vai receber o Android 16?", answer: "Não. Ele saiu com o Android 13 e recebeu o Android 14 e o Android 15, a última versão prevista." },
        { question: "Moto G84 ou Moto G86?", answer: "O G86: processador mais forte, IP68 e aparelho novo. O G84 só compensa bem mais barato." },
      ]}
    />
  ),
});
