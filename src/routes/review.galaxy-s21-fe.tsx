import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Samsung. Última versão grande: One UI 8 / Android 16 (SamMobile e 9to5Google, out/2025).
const PAGE_TITLE = fairPriceTitle("galaxy-s21-fe");
const PAGE_DESCRIPTION = fairPriceDescription("galaxy-s21-fe");

export const Route = createFileRoute("/review/galaxy-s21-fe")({
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
      fairPriceId="galaxy-s21-fe"
      name="Galaxy S21 FE"
      launched="janeiro de 2022"
      shortVerdict="Só abaixo de R$ 1.000, e sabendo que é um aparelho em fim de vida. O Galaxy S21 FE tem teleobjetiva e IP68, mas a One UI 8 (Android 16) foi sua última versão grande do sistema e a bateria de 4.500 mAh é modesta. Por pouco mais, o Galaxy A36 novo dura muitos anos a mais."
      alternative={{ id: "galaxy-a36-5g", name: "Galaxy A36 5G", reviewPath: "/review/galaxy-a36-5g" }}
      secondary={{
        id: "galaxy-s25-fe",
        name: "Galaxy S25 FE",
        reviewPath: "/review/galaxy-s25-fe",
        why: "Quer continuar na linha FE, com teleobjetiva? O Galaxy S25 FE tem atualizações até 2032.",
      }}
      specs={[
        ["Processador", "Snapdragon 888 ou Exynos 2100, conforme o mercado"],
        ["Tela", "6,4\" Dynamic AMOLED 2X • 120 Hz"],
        ["Câmeras traseiras", "12 MP + ultra-angular 12 MP + tele 8 MP (3x)"],
        ["Câmera frontal", "32 MP"],
        ["Bateria", "4.500 mAh • 25 W"],
        ["Proteção", "IP68"],
        ["Atualizações", "Última versão grande: One UI 8 (Android 16)"],
        ["Lançamento", "Janeiro de 2022"],
      ]}
      versus={[
        ["Teleobjetiva", "8 MP (3x)", "Não tem", "old"],
        ["Bateria", "4.500 mAh", "5.000 mAh", "new"],
        ["Recarga", "25 W", "45 W", "new"],
        ["Proteção", "IP68", "IP67", "old"],
        ["Atualizações", "Encerradas no Android 16", "Até 2031", "new"],
        ["Compre se estiver até", "R$ 1.000", "R$ 1.350", "tie"],
      ]}
      stillGood={[
        "Teleobjetiva de 3x",
        "IP68 e tela de 120 Hz",
        "Tamanho mais compacto",
      ]}
      whyNot={[
        "Não recebe mais versões novas do Android",
        "Bateria modesta para um dia de uso intenso",
        "Processador esquenta em jogos",
      ]}
      versionNote={{
        text: "Galaxy S21 FE e Galaxy S21 são aparelhos diferentes. Em seminovos, confira o estado da bateria em Configurações > Assistência do aparelho.",
        proPath: "/review/galaxy-s23-fe",
        proName: "Galaxy S23 FE",
      }}
      faq={[
        { question: "O Galaxy S21 FE vale a pena em 2026?", answer: "Só abaixo de R$ 1.000. A One UI 8 (Android 16) foi sua última versão grande. Por pouco mais, o Galaxy A36 novo tem atualizações até 2031." },
        { question: "O Galaxy S21 FE vai receber mais atualizações?", answer: "Não versões novas do Android: a One UI 8 foi a última. Ele ainda pode receber correções de segurança por pouco tempo." },
        { question: "Galaxy S21 FE ou S23 FE?", answer: "O S23 FE: processador mais novo e uma versão do Android a mais. Veja o veredito dele." },
      ]}
    />
  ),
});
