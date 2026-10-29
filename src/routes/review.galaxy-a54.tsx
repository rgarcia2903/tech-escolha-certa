import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Samsung (lançamento em 15/03/2023; 4 versões do Android e 5 anos de segurança).
// Na lista da One UI 9 (Oficina da Net, out/2026), que é a sua última versão grande.
const PAGE_TITLE = fairPriceTitle("galaxy-a54");
const PAGE_DESCRIPTION = fairPriceDescription("galaxy-a54");

export const Route = createFileRoute("/review/galaxy-a54")({
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
      fairPriceId="galaxy-a54"
      name="Galaxy A54"
      launched="março de 2023"
      shortVerdict="Só abaixo de R$ 1.000. O Galaxy A54 ainda tem boa tela, câmera com estabilização e IP67, mas a One UI 9 é a última versão grande do Android que ele recebe. Por pouco mais, o Galaxy A36 novo tem processador mais forte, recarga de 45 W e atualizações até 2031."
      alternative={{ id: "galaxy-a36-5g", name: "Galaxy A36 5G", reviewPath: "/review/galaxy-a36-5g" }}
      secondary={{
        id: "galaxy-a57-5g",
        name: "Galaxy A57 5G",
        reviewPath: "/review/galaxy-a57-5g",
        why: "Gostava do acabamento premium do A54? O Galaxy A57 é o herdeiro direto, com seis anos de atualizações.",
      }}
      specs={[
        ["Processador", "Exynos 1380"],
        ["Tela", '6,4" Super AMOLED • 120 Hz'],
        ["Câmeras traseiras", "50 MP com OIS + ultra-angular 12 MP + macro 5 MP"],
        ["Câmera frontal", "32 MP"],
        ["Memória", "8 GB de RAM • 128 ou 256 GB"],
        ["Bateria", "5.000 mAh • recarga de 25 W"],
        ["Proteção", "IP67"],
        ["Atualizações", "Até a One UI 9 (Android 17); segurança até 2028"],
        ["Lançamento", "Março de 2023"],
      ]}
      versus={[
        ["Processador", "Exynos 1380", "Snapdragon 6 Gen 3", "new"],
        ["Tela", '6,4" • 120 Hz', '6,7" • 120 Hz', "tie"],
        ["Ultra-angular", "12 MP", "8 MP", "old"],
        ["Recarga", "25 W", "45 W", "new"],
        ["Atualizações", "Última versão grande agora", "Até 2031", "new"],
        ["Compre se estiver até", "R$ 1.000", "R$ 1.350", "tie"],
      ]}
      stillGood={[
        "Tela AMOLED de 120 Hz e acabamento em vidro",
        "Câmera principal com estabilização óptica",
        "Bateria de 5.000 mAh e IP67",
      ]}
      whyNot={[
        "A One UI 9 é a última versão grande do Android que ele recebe",
        "Processador mais fraco que o do A36",
        "Recarga de só 25 W",
      ]}
      versionNote={{
        text: "Galaxy A54 e A34 são aparelhos diferentes. Em seminovos, confira o estado da bateria em Configurações > Assistência do aparelho.",
        proPath: "/review/galaxy-a55",
        proName: "Galaxy A55",
      }}
      faq={[
        {
          question: "O Galaxy A54 vale a pena em 2026?",
          answer:
            "Só abaixo de R$ 1.000. Acima disso, o Galaxy A36 novo tem processador mais forte, recarga de 45 W e atualizações até 2031.",
        },
        {
          question: "Até quando o Galaxy A54 recebe atualização?",
          answer:
            "A Samsung prometeu quatro versões do Android e cinco anos de segurança. A One UI 9 (Android 17) é a última versão grande; as correções de segurança vão até 2028.",
        },
        {
          question: "Galaxy A54 ou Galaxy A55?",
          answer:
            "O A55, se a diferença for pequena: processador mais forte, moldura de metal e mais tempo de atualização.",
        },
      ]}
    />
  ),
});
