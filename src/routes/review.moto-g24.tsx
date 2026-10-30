import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Motorola. Fora da lista do Android 16 da Motorola (Canaltech).
const PAGE_TITLE = fairPriceTitle("moto-g24");
const PAGE_DESCRIPTION = fairPriceDescription("moto-g24");

export const Route = createFileRoute("/review/moto-g24")({
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
      fairPriceId="moto-g24"
      name="Moto G24"
      launched="fevereiro de 2024"
      shortVerdict="Só abaixo de R$ 500, e para uso simples. O Moto G24 tem tela de 90 Hz e bateria de 5.000 mAh, mas o processador é fraco e ele ficou fora da lista do Android 16. Por cerca de R$ 800, o Galaxy A07 tem processador mais forte, IP54 e seis anos de atualizações."
      alternative={{ id: "galaxy-a07", name: "Galaxy A07", reviewPath: "/comparativo/galaxy-a07-vs-moto-g06" }}
      secondary={{
        id: "moto-g06",
        name: "Moto G06",
        reviewPath: "/comparativo/galaxy-a07-vs-moto-g06",
        why: "Quer continuar na Motorola? Compare o Moto G06 com o Galaxy A07.",
      }}
      specs={[
        ["Processador", "Helio G85"],
        ["Tela", "6,56\" LCD • 90 Hz"],
        ["Câmeras traseiras", "50 MP + macro 2 MP"],
        ["Câmera frontal", "8 MP"],
        ["Bateria", "5.000 mAh"],
        ["Atualizações", "Fora da lista do Android 16"],
        ["Lançamento", "Fevereiro de 2024"],
      ]}
      versus={[
        ["Processador", "Helio G85", "Helio G99", "new"],
        ["Tela", "6,56\" LCD • 90 Hz", "6,7\" LCD • 90 Hz", "tie"],
        ["Proteção", "Contra respingos simples", "IP54", "new"],
        ["Atualizações", "Fora do Android 16", "Seis anos", "new"],
        ["Compre se estiver até", "R$ 500", "R$ 800", "tie"],
      ]}
      stillGood={[
        "Bateria de 5.000 mAh",
        "Tela de 90 Hz",
        "Preço baixo",
      ]}
      whyNot={[
        "Fora da lista do Android 16",
        "Processador fraco",
        "Sem 5G",
      ]}
      versionNote={{
        text: "Moto G24 e Moto G24 Power são aparelhos diferentes. Confira o modelo no anúncio.",
        proPath: "/review/moto-g54",
        proName: "Moto G54",
      }}
      faq={[
        { question: "O Moto G24 vale a pena em 2026?", answer: "Só abaixo de R$ 500 e para uso simples. Por cerca de R$ 800, o Galaxy A07 tem processador mais forte e seis anos de atualizações." },
        { question: "O Moto G24 vai receber o Android 16?", answer: "Não está na lista da Motorola." },
        { question: "Moto G24 ou Galaxy A07?", answer: "O A07: processador mais forte, IP54 e seis anos de atualizações." },
      ]}
    />
  ),
});
