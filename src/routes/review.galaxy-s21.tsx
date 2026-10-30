import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Samsung (versão brasileira com Exynos 2100). Fim do suporte: One UI 7 / Android 15 foi a última versão; último patch em nov/2025 (Tecnoblog).
const PAGE_TITLE = fairPriceTitle("galaxy-s21");
const PAGE_DESCRIPTION = fairPriceDescription("galaxy-s21");

export const Route = createFileRoute("/review/galaxy-s21")({
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
      fairPriceId="galaxy-s21"
      name="Galaxy S21"
      launched="janeiro de 2021"
      shortVerdict="Só abaixo de R$ 800, e sabendo que ele não recebe mais atualizações. A Samsung encerrou o suporte do Galaxy S21: a One UI 7 (Android 15) foi a última versão e o último patch de segurança saiu em novembro de 2025. Por pouco mais, o Galaxy A36 novo dura muitos anos."
      alternative={{ id: "galaxy-a36-5g", name: "Galaxy A36 5G", reviewPath: "/review/galaxy-a36-5g" }}
      secondary={{
        id: "galaxy-s25-fe",
        name: "Galaxy S25 FE",
        reviewPath: "/review/galaxy-s25-fe",
        why: "Quer continuar na linha S, com teleobjetiva? O Galaxy S25 FE tem atualizações até 2032.",
      }}
      specs={[
        ["Processador", "Exynos 2100 (versão brasileira)"],
        ["Tela", "6,2\" Dynamic AMOLED 2X • 120 Hz"],
        ["Câmeras traseiras", "12 MP + ultra-angular 12 MP + tele 64 MP (zoom híbrido 3x)"],
        ["Câmera frontal", "10 MP"],
        ["Bateria", "4.000 mAh • 25 W"],
        ["Proteção", "IP68"],
        ["Atualizações", "Encerradas: última versão One UI 7 (Android 15)"],
        ["Lançamento", "Janeiro de 2021"],
      ]}
      versus={[
        ["Teleobjetiva", "Sim (3x)", "Não tem", "old"],
        ["Bateria", "4.000 mAh", "5.000 mAh", "new"],
        ["Recarga", "25 W", "45 W", "new"],
        ["Proteção", "IP68", "IP67", "old"],
        ["Atualizações", "Encerradas (último patch em nov/2025)", "Até 2031", "new"],
        ["Compre se estiver até", "R$ 800", "R$ 1.350", "tie"],
      ]}
      stillGood={[
        "Tamanho compacto",
        "Teleobjetiva e IP68",
        "Tela de 120 Hz",
      ]}
      whyNot={[
        "Não recebe mais atualizações, nem de segurança",
        "Bateria de 4.000 mAh, pequena para hoje",
        "Em usados, a bateria quase sempre está gasta",
      ]}
      versionNote={{
        text: "Galaxy S21, S21+, S21 Ultra e S21 FE são aparelhos diferentes. O S21 FE recebeu uma versão do Android a mais.",
        proPath: "/review/galaxy-s21-fe",
        proName: "Galaxy S21 FE",
      }}
      faq={[
        { question: "O Galaxy S21 vale a pena em 2026?", answer: "Só abaixo de R$ 800. A Samsung encerrou o suporte: ele não recebe mais atualizações, nem de segurança. Por pouco mais, o Galaxy A36 novo tem atualizações até 2031." },
        { question: "O Galaxy S21 ainda recebe atualização?", answer: "Não. A One UI 7 (Android 15) foi a última versão, e o último patch de segurança saiu em novembro de 2025." },
        { question: "Galaxy S21 ou S21 FE?", answer: "O S21 FE recebeu uma versão a mais do Android (One UI 8). Os dois já estão em fim de vida." },
      ]}
    />
  ),
});
