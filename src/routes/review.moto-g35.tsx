import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Motorola. Fora da lista do Android 16 da Motorola (Canaltech).
const PAGE_TITLE = fairPriceTitle("moto-g35");
const PAGE_DESCRIPTION = fairPriceDescription("moto-g35");

export const Route = createFileRoute("/review/moto-g35")({
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
      fairPriceId="moto-g35"
      name="Moto G35"
      launched="dezembro de 2024"
      shortVerdict="Só abaixo de R$ 650. O Moto G35 tem 5G e tela de 120 Hz, mas a câmera não tem estabilização, o processador é básico e ele ficou fora da lista do Android 16. Por cerca de R$ 900, o Galaxy A17 5G tem tela AMOLED, câmera estabilizada e seis anos de atualizações."
      alternative={{ id: "galaxy-a17-5g", name: "Galaxy A17 5G", reviewPath: "/review/galaxy-a17-5g" }}
      secondary={{
        id: "moto-g06",
        name: "Moto G06",
        reviewPath: "/comparativo/galaxy-a07-vs-moto-g06",
        why: "Quer continuar na Motorola e gastar pouco? Veja o Moto G06.",
      }}
      specs={[
        ["Processador", "Unisoc T760"],
        ["Tela", "6,72\" LCD • 120 Hz"],
        ["Câmeras traseiras", "50 MP + ultra-angular 8 MP"],
        ["Câmera frontal", "16 MP"],
        ["Bateria", "5.000 mAh"],
        ["Conexão", "5G"],
        ["Atualizações", "Fora da lista do Android 16"],
        ["Lançamento", "Dezembro de 2024"],
      ]}
      versus={[
        ["Processador", "Unisoc T760", "Exynos 1330", "new"],
        ["Tela", "LCD • 120 Hz", "AMOLED • 90 Hz", "tie"],
        ["Estabilização da câmera", "Não", "Sim (OIS)", "new"],
        ["Atualizações", "Fora do Android 16", "Seis anos", "new"],
        ["Compre se estiver até", "R$ 650", "R$ 900", "tie"],
      ]}
      stillGood={[
        "5G em um aparelho barato",
        "Tela de 120 Hz",
        "Câmera ultra-angular",
      ]}
      whyNot={[
        "Fora da lista do Android 16",
        "Câmera sem estabilização",
        "Processador básico",
      ]}
      versionNote={{
        text: "Moto G35, G34 e G55 são aparelhos diferentes. Confira o modelo no anúncio.",
        proPath: "/review/moto-g54",
        proName: "Moto G54",
      }}
      faq={[
        { question: "O Moto G35 vale a pena em 2026?", answer: "Só abaixo de R$ 650. Ele ficou fora do Android 16. Por cerca de R$ 900, o Galaxy A17 5G dura muito mais." },
        { question: "O Moto G35 vai receber o Android 16?", answer: "Não está na lista da Motorola." },
        { question: "Moto G35 ou Galaxy A17 5G?", answer: "O A17 5G: tela AMOLED, câmera estabilizada e seis anos de atualizações." },
      ]}
    />
  ),
});
