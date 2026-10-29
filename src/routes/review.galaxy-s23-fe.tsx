import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Samsung (versão brasileira com Exynos 2200; 4 versões do Android e 5 anos de segurança). Na lista da One UI 9 (Oficina da Net, out/2026).
const PAGE_TITLE = fairPriceTitle("galaxy-s23-fe");
const PAGE_DESCRIPTION = fairPriceDescription("galaxy-s23-fe");

export const Route = createFileRoute("/review/galaxy-s23-fe")({
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
      fairPriceId="galaxy-s23-fe"
      name="Galaxy S23 FE"
      launched="outubro de 2023"
      shortVerdict="Só abaixo de R$ 1.900. O Galaxy S23 FE tem teleobjetiva e IP68, mas a bateria de 4.500 mAh com recarga de 25 W é modesta e a One UI 9 é sua última versão grande do Android. Acima disso, o Galaxy S25 FE tem bateria maior, recarga de 45 W e atualizações até 2032."
      alternative={{ id: "galaxy-s25-fe", name: "Galaxy S25 FE", reviewPath: "/review/galaxy-s25-fe" }}
      secondary={{
        id: "galaxy-a57-5g",
        name: "Galaxy A57 5G",
        reviewPath: "/review/galaxy-a57-5g",
        why: "Não precisa de teleobjetiva? O Galaxy A57 é novo, tem bateria de 5.000 mAh e seis anos de atualizações.",
      }}
      specs={[
        ["Processador", "Exynos 2200 (versão brasileira)"],
        ["Tela", "6,4\" Dynamic AMOLED 2X • 120 Hz"],
        ["Câmeras traseiras", "50 MP com OIS + ultra-angular 12 MP + tele 8 MP (3x)"],
        ["Câmera frontal", "10 MP"],
        ["Bateria", "4.500 mAh • 25 W"],
        ["Proteção", "IP68"],
        ["Atualizações", "Até a One UI 9 (Android 17); segurança até 2028"],
        ["Lançamento", "Outubro de 2023"],
      ]}
      versus={[
        ["Processador", "Exynos 2200", "Exynos 2400", "new"],
        ["Tela", "6,4\" • 120 Hz", "6,7\" • 120 Hz", "tie"],
        ["Câmeras", "50 + 12 + 8 MP (3x)", "50 + 12 + 8 MP (3x)", "tie"],
        ["Bateria", "4.500 mAh", "4.900 mAh", "new"],
        ["Recarga", "25 W", "45 W", "new"],
        ["Atualizações", "Última versão grande agora", "Até 2032", "new"],
        ["Compre se estiver até", "R$ 1.900", "R$ 3.000", "tie"],
      ]}
      stillGood={[
        "Teleobjetiva de 3x",
        "IP68 e acabamento da linha S",
        "Tela de 120 Hz",
      ]}
      whyNot={[
        "A One UI 9 é a última versão grande do Android que ele recebe",
        "Bateria e recarga modestas",
        "Processador esquenta em uso pesado",
      ]}
      versionNote={{
        text: "Galaxy S23 FE e Galaxy S23 são aparelhos diferentes, com processadores diferentes.",
        proPath: "/review/galaxy-s23",
        proName: "Galaxy S23",
      }}
      faq={[
        { question: "O Galaxy S23 FE vale a pena em 2026?", answer: "Só abaixo de R$ 1.900. Acima disso, o Galaxy S25 FE tem bateria maior, recarga de 45 W e atualizações até 2032." },
        { question: "Até quando o Galaxy S23 FE recebe atualização?", answer: "A One UI 9 (Android 17) é a última versão grande; as correções de segurança vão até 2028." },
        { question: "Galaxy S23 FE ou S24 FE?", answer: "O S24 FE: processador melhor, bateria maior e atualizações até 2031." },
      ]}
    />
  ),
});
