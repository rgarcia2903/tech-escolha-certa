import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Samsung (A16 5G e A16 4G; 6 versões do Android e 6 anos de segurança).
const PAGE_TITLE = fairPriceTitle("galaxy-a16");
const PAGE_DESCRIPTION = fairPriceDescription("galaxy-a16");

export const Route = createFileRoute("/review/galaxy-a16")({
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
      fairPriceId="galaxy-a16"
      name="Galaxy A16"
      launched="outubro de 2024"
      shortVerdict="Vale abaixo de R$ 750. O Galaxy A16 tem tela AMOLED grande, IP54 e seis anos de atualizações, o que é raro nessa faixa. O sucessor, Galaxy A17 5G, é quase igual, mas tem câmera com estabilização óptica: com diferença de até uns R$ 150, prefira o A17."
      alternative={{ id: "galaxy-a17-5g", name: "Galaxy A17 5G", reviewPath: "/review/galaxy-a17-5g" }}
      secondary={{
        id: "galaxy-a36-5g",
        name: "Galaxy A36 5G",
        reviewPath: "/review/galaxy-a36-5g",
        why: "Pode chegar a R$ 1.350? O Galaxy A36 tem tela de 120 Hz, processador muito mais forte e recarga de 45 W.",
      }}
      specs={[
        ["Processador", "Exynos 1330 ou Dimensity 6300 (5G); Helio G99 (4G)"],
        ["Tela", "6,7\" Super AMOLED • 90 Hz"],
        ["Câmeras traseiras", "50 MP + ultra-angular 5 MP + macro 2 MP"],
        ["Câmera frontal", "13 MP"],
        ["Bateria", "5.000 mAh • 25 W"],
        ["Proteção", "IP54"],
        ["Atualizações", "6 versões do Android e 6 anos de segurança"],
        ["Lançamento", "Outubro de 2024"],
      ]}
      versus={[
        ["Tela", "6,7\" AMOLED • 90 Hz", "6,7\" AMOLED • 90 Hz", "tie"],
        ["Estabilização da câmera", "Não", "Sim (OIS)", "new"],
        ["Bateria", "5.000 mAh • 25 W", "5.000 mAh • 25 W", "tie"],
        ["Proteção", "IP54", "IP54", "tie"],
        ["Atualizações", "Até 2030", "Até 2031", "new"],
        ["Compre se estiver até", "R$ 750", "R$ 900", "tie"],
      ]}
      stillGood={[
        "Seis anos de atualizações",
        "Tela AMOLED grande",
        "IP54 contra respingos",
      ]}
      whyNot={[
        "Câmera sem estabilização óptica",
        "Processador de entrada",
        "O A17 5G custa pouco mais",
      ]}
      versionNote={{
        text: "Existem Galaxy A16 4G e Galaxy A16 5G, com processadores diferentes. Prefira o 5G.",
        proPath: "/review/galaxy-a17-5g",
        proName: "Galaxy A17 5G",
      }}
      faq={[
        { question: "O Galaxy A16 vale a pena em 2026?", answer: "Sim, abaixo de R$ 750: ele recebe atualizações por muitos anos. Com diferença pequena, o A17 5G é melhor pela câmera estabilizada." },
        { question: "Galaxy A16 4G ou 5G?", answer: "O 5G: processador mais rápido e conexão 5G. Confira a versão no anúncio." },
        { question: "Galaxy A16 ou A17?", answer: "Quase iguais. O A17 5G tem câmera com estabilização óptica. Se a diferença passar de R$ 150, o A16 resolve." },
      ]}
    />
  ),
});
