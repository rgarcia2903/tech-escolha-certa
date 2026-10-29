import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Samsung (lançamento em 26/09/2024; 7 anos de atualizações).
const PAGE_TITLE = fairPriceTitle("galaxy-s24-fe");
const PAGE_DESCRIPTION = fairPriceDescription("galaxy-s24-fe");

export const Route = createFileRoute("/review/galaxy-s24-fe")({
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
      fairPriceId="galaxy-s24-fe"
      name="Galaxy S24 FE"
      launched="outubro de 2024"
      shortVerdict="Vale abaixo de R$ 2.400. O Galaxy S24 FE tem teleobjetiva, IP68 e atualizações até 2031. O S25 FE custa pouco mais e tem bateria maior (4.900 mAh) e recarga de 45 W: com diferença de até uns R$ 600, fique com o S25 FE."
      alternative={{ id: "galaxy-s25-fe", name: "Galaxy S25 FE", reviewPath: "/review/galaxy-s25-fe" }}
      secondary={{
        id: "galaxy-a57-5g",
        name: "Galaxy A57 5G",
        reviewPath: "/review/galaxy-a57-5g",
        why: "Não precisa de teleobjetiva? O Galaxy A57 custa bem menos e tem seis anos de atualizações.",
      }}
      specs={[
        ["Processador", "Exynos 2400e"],
        ["Tela", "6,7\" Dynamic AMOLED 2X • 120 Hz"],
        ["Câmeras traseiras", "50 MP + ultra-angular 12 MP + tele 8 MP (3x)"],
        ["Câmera frontal", "10 MP"],
        ["Bateria", "4.700 mAh • 25 W"],
        ["Proteção", "IP68"],
        ["Atualizações", "7 anos (até 2031)"],
        ["Lançamento", "Outubro de 2024"],
      ]}
      versus={[
        ["Processador", "Exynos 2400e", "Exynos 2400", "new"],
        ["Câmeras", "50 + 12 + 8 MP (3x)", "50 + 12 + 8 MP (3x)", "tie"],
        ["Bateria", "4.700 mAh", "4.900 mAh", "new"],
        ["Recarga", "25 W", "45 W", "new"],
        ["Atualizações", "Até 2031", "Até 2032", "new"],
        ["Compre se estiver até", "R$ 2.400", "R$ 3.000", "tie"],
      ]}
      stillGood={[
        "Teleobjetiva de 3x e IP68",
        "Atualizações até 2031",
        "Tela de 6,7\" e 120 Hz",
      ]}
      whyNot={[
        "Recarga de só 25 W",
        "O S25 FE é a geração seguinte por pouco mais",
      ]}
      versionNote={{
        text: "Galaxy S24 FE e Galaxy S24 são aparelhos diferentes: o S24 é menor e usa outro processador.",
        proPath: "/review/galaxy-s24",
        proName: "Galaxy S24",
      }}
      faq={[
        { question: "O Galaxy S24 FE vale a pena em 2026?", answer: "Sim, abaixo de R$ 2.400: tem teleobjetiva e atualizações até 2031. Acima disso, o S25 FE é a geração seguinte por pouco mais." },
        { question: "Galaxy S24 FE ou S25 FE?", answer: "O S25 FE, se a diferença for de até uns R$ 600: bateria maior, recarga de 45 W e um ano a mais de atualizações." },
        { question: "Galaxy S24 FE ou Galaxy S24?", answer: "O S24 FE é maior e tem bateria maior. O S24 é compacto. Para a maioria, o FE." },
      ]}
    />
  ),
});
