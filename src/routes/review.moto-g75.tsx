import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Motorola. Atualizações: recebeu o Android 16 (Tecnoblog; lista da Motorola via Canaltech).
const PAGE_TITLE = fairPriceTitle("moto-g75");
const PAGE_DESCRIPTION = fairPriceDescription("moto-g75");

export const Route = createFileRoute("/review/moto-g75")({
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
      fairPriceId="moto-g75"
      name="Moto G75"
      launched="outubro de 2024"
      shortVerdict="Vale abaixo de R$ 1.100. O Moto G75 tem processador forte para a faixa, IP68 e IP69 e já recebeu o Android 16. A tela é LCD e a câmera não impressiona; acima disso, o Moto G Max tem tela pOLED muito mais brilhante e câmera de 200 MP."
      alternative={{ id: "moto-g-max", name: "Moto G Max", reviewPath: "/comparativo/moto-g-max-vs-moto-g86" }}
      secondary={{
        id: "galaxy-a36-5g",
        name: "Galaxy A36 5G",
        reviewPath: "/review/galaxy-a36-5g",
        why: "Quer o maior tempo de atualização? O Galaxy A36 recebe atualizações até 2031.",
      }}
      specs={[
        ["Processador", "Snapdragon 6 Gen 3"],
        ["Tela", "6,78\" LCD • 120 Hz"],
        ["Câmeras traseiras", "50 MP com OIS + ultra-angular 8 MP"],
        ["Câmera frontal", "16 MP"],
        ["Memória", "8 GB de RAM • 256 GB"],
        ["Bateria", "5.000 mAh • 30 W"],
        ["Proteção", "IP68, IP69 e padrão militar"],
        ["Atualizações", "Recebeu o Android 16"],
        ["Lançamento", "Outubro de 2024"],
      ]}
      versus={[
        ["Processador", "Snapdragon 6 Gen 3", "Dimensity 6400", "old"],
        ["Tela", "LCD • 120 Hz", "pOLED • 120 Hz • 5.000 nits", "new"],
        ["Câmera principal", "50 MP com OIS", "200 MP com OIS", "new"],
        ["Proteção", "IP68 e IP69", "IP68 e IP69", "tie"],
        ["Compre se estiver até", "R$ 1.100", "R$ 1.600", "tie"],
      ]}
      stillGood={[
        "Processador forte para a faixa",
        "IP68, IP69 e padrão militar",
        "Já recebeu o Android 16",
      ]}
      whyNot={[
        "Tela LCD",
        "Câmeras medianas",
        "O G Max tem tela e câmera bem melhores",
      ]}
      versionNote={{
        text: "Moto G75, G85 e G86 são aparelhos diferentes. Confira o modelo no anúncio.",
        proPath: "/review/moto-g85",
        proName: "Moto G85",
      }}
      faq={[
        { question: "O Moto G75 vale a pena em 2026?", answer: "Sim, abaixo de R$ 1.100: processador forte e muita resistência. Acima disso, o Moto G Max tem tela e câmera melhores." },
        { question: "O Moto G75 recebe o Android 16?", answer: "Sim, ele está na lista da Motorola e já começou a receber no Brasil." },
        { question: "Moto G75 ou Moto G Max?", answer: "O G Max para tela e câmera; o G75 para desempenho, se estiver bem mais barato." },
      ]}
    />
  ),
});
