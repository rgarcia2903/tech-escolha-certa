import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Samsung (lançamento em 15/03/2023; 4 versões do Android e 5 anos de segurança).
const PAGE_TITLE = fairPriceTitle("galaxy-a34");
const PAGE_DESCRIPTION = fairPriceDescription("galaxy-a34");

export const Route = createFileRoute("/review/galaxy-a34")({
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
      fairPriceId="galaxy-a34"
      name="Galaxy A34"
      launched="março de 2023"
      shortVerdict="Só abaixo de R$ 900. O Galaxy A34 tem tela de 120 Hz, câmera estabilizada e IP67, mas a One UI 9 é a última versão grande do Android prevista para ele e a recarga é de 25 W. Por pouco mais, o Galaxy A36 novo tem processador mais forte e atualizações até 2031."
      alternative={{ id: "galaxy-a36-5g", name: "Galaxy A36 5G", reviewPath: "/review/galaxy-a36-5g" }}
      secondary={{
        id: "galaxy-a17-5g",
        name: "Galaxy A17 5G",
        reviewPath: "/review/galaxy-a17-5g",
        why: "Orçamento de até R$ 900? O Galaxy A17 5G é novo e tem seis anos de atualizações.",
      }}
      specs={[
        ["Processador", "Dimensity 1080"],
        ["Tela", "6,6\" Super AMOLED • 120 Hz"],
        ["Câmeras traseiras", "48 MP com OIS + ultra-angular 8 MP + macro 5 MP"],
        ["Câmera frontal", "13 MP"],
        ["Bateria", "5.000 mAh • 25 W"],
        ["Proteção", "IP67"],
        ["Atualizações", "Até o Android 17 (4 versões); segurança até 2028"],
        ["Lançamento", "Março de 2023"],
      ]}
      versus={[
        ["Processador", "Dimensity 1080", "Snapdragon 6 Gen 3", "new"],
        ["Tela", "6,6\" • 120 Hz", "6,7\" • 120 Hz", "tie"],
        ["Recarga", "25 W", "45 W", "new"],
        ["Proteção", "IP67", "IP67", "tie"],
        ["Atualizações", "Até o Android 17", "Até 2031", "new"],
        ["Compre se estiver até", "R$ 900", "R$ 1.350", "tie"],
      ]}
      stillGood={[
        "Tela AMOLED de 120 Hz",
        "Câmera principal estabilizada",
        "IP67 e bateria de 5.000 mAh",
      ]}
      whyNot={[
        "Última versão grande do Android prevista é o Android 17",
        "Recarga de só 25 W",
      ]}
      versionNote={{
        text: "Galaxy A34 e A54 são aparelhos diferentes. Em seminovos, confira o estado da bateria em Configurações > Assistência do aparelho.",
        proPath: "/review/galaxy-a54",
        proName: "Galaxy A54",
      }}
      faq={[
        { question: "O Galaxy A34 vale a pena em 2026?", answer: "Só abaixo de R$ 900. Acima disso, o Galaxy A36 novo tem processador mais forte, recarga de 45 W e atualizações até 2031." },
        { question: "Até quando o Galaxy A34 recebe atualização?", answer: "A Samsung prometeu quatro versões do Android (até o Android 17) e cinco anos de segurança, até 2028." },
        { question: "Galaxy A34 ou A54?", answer: "O A54 tem câmera ultra-angular melhor e acabamento em vidro. O A34 é mais barato. Os dois têm o mesmo tempo de atualização." },
      ]}
    />
  ),
});
