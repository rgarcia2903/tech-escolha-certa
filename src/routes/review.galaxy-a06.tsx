import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha e suporte: Samsung / Canaltech (Helio G85; 2 versões do Android e 4 anos de segurança).
const PAGE_TITLE = fairPriceTitle("galaxy-a06");
const PAGE_DESCRIPTION = fairPriceDescription("galaxy-a06");

export const Route = createFileRoute("/review/galaxy-a06")({
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
      fairPriceId="galaxy-a06"
      name="Galaxy A06"
      launched="setembro de 2024"
      shortVerdict="Só abaixo de R$ 600. O Galaxy A06 tem bateria grande e recarga de 25 W, mas o processador é fraco e ele só tem duas versões do Android prometidas. Por cerca de R$ 800, o Galaxy A07, que é o sucessor, tem processador mais forte, tela de 90 Hz, IP54 e seis anos de atualizações."
      alternative={{ id: "galaxy-a07", name: "Galaxy A07", reviewPath: "/comparativo/galaxy-a07-vs-moto-g06" }}
      secondary={{
        id: "galaxy-a17-5g",
        name: "Galaxy A17 5G",
        reviewPath: "/review/galaxy-a17-5g",
        why: "Pode chegar a R$ 900? O Galaxy A17 5G tem tela AMOLED, câmera estabilizada e 5G.",
      }}
      specs={[
        ["Processador", "Helio G85"],
        ["Tela", "6,7\" LCD HD+ • 60 Hz"],
        ["Câmeras traseiras", "50 MP + 2 MP"],
        ["Bateria", "5.000 mAh • 25 W"],
        ["Atualizações", "2 versões do Android e 4 anos de segurança"],
        ["Lançamento", "Setembro de 2024"],
      ]}
      versus={[
        ["Processador", "Helio G85", "Helio G99", "new"],
        ["Tela", "LCD • 60 Hz", "LCD • 90 Hz", "new"],
        ["Proteção", "Sem certificação", "IP54", "new"],
        ["Atualizações", "2 versões do Android", "Seis anos", "new"],
        ["Compre se estiver até", "R$ 600", "R$ 800", "tie"],
      ]}
      stillGood={[
        "Bateria de 5.000 mAh com recarga de 25 W",
        "Tela grande",
        "Entrada para microSD",
      ]}
      whyNot={[
        "Só duas versões do Android prometidas",
        "Processador fraco",
        "Tela de 60 Hz",
      ]}
      versionNote={{
        text: "Existem Galaxy A06 e Galaxy A06 5G, com processadores diferentes. Confira no anúncio.",
        proPath: "/review/galaxy-a15",
        proName: "Galaxy A15",
      }}
      faq={[
        { question: "O Galaxy A06 vale a pena em 2026?", answer: "Só abaixo de R$ 600. O sucessor, Galaxy A07, custa pouco mais e tem processador mais forte, IP54 e seis anos de atualizações." },
        { question: "Quantas atualizações o Galaxy A06 recebe?", answer: "Duas versões do Android e quatro anos de segurança, segundo a Samsung." },
        { question: "Galaxy A06 ou A07?", answer: "O A07, se a diferença for de até uns R$ 200." },
      ]}
    />
  ),
});
