import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Samsung (lançamento no fim de 2023; versões 4G com Helio G99 e 5G com Dimensity 6100+;
// 4 versões do Android e 5 anos de segurança).
const PAGE_TITLE = fairPriceTitle("galaxy-a15");
const PAGE_DESCRIPTION = fairPriceDescription("galaxy-a15");

export const Route = createFileRoute("/review/galaxy-a15")({
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
      fairPriceId="galaxy-a15"
      name="Galaxy A15"
      launched="dezembro de 2023"
      shortVerdict="Só abaixo de R$ 700. O Galaxy A15 tem tela AMOLED e bateria de 5.000 mAh, mas a câmera não tem estabilização e ele não tem proteção contra água. Por cerca de R$ 200 a mais, o Galaxy A17 5G é mais novo, tem câmera estabilizada, IP54 e seis anos de atualizações."
      alternative={{ id: "galaxy-a17-5g", name: "Galaxy A17 5G", reviewPath: "/review/galaxy-a17-5g" }}
      secondary={{
        id: "galaxy-a36-5g",
        name: "Galaxy A36 5G",
        reviewPath: "/review/galaxy-a36-5g",
        why: "Pode chegar a R$ 1.350? O Galaxy A36 tem tela de 120 Hz, processador bem mais forte e IP67.",
      }}
      specs={[
        ["Processador", "Helio G99 (4G) ou Dimensity 6100+ (5G)"],
        ["Tela", '6,5" Super AMOLED • 90 Hz'],
        ["Câmeras traseiras", "50 MP + ultra-angular 5 MP + macro 2 MP"],
        ["Câmera frontal", "13 MP"],
        ["Memória", "4 a 8 GB de RAM • 128 ou 256 GB, com microSD"],
        ["Bateria", "5.000 mAh • recarga de 25 W"],
        ["Proteção", "Sem certificação contra água"],
        ["Atualizações", "4 versões do Android (até o Android 18)"],
        ["Lançamento", "Dezembro de 2023"],
      ]}
      versus={[
        ["Tela", '6,5" AMOLED • 90 Hz', '6,7" AMOLED • 90 Hz', "tie"],
        ["Estabilização da câmera", "Não", "Sim (OIS)", "new"],
        ["Proteção", "Nenhuma", "IP54", "new"],
        ["Atualizações", "Até o Android 18", "Seis versões do Android", "new"],
        ["Compre se estiver até", "R$ 700", "R$ 900", "tie"],
      ]}
      stillGood={["Tela AMOLED, rara nessa faixa", "Bateria de 5.000 mAh", "Entrada para microSD"]}
      whyNot={[
        "Câmera sem estabilização: fotos tremidas à noite",
        "Sem proteção contra respingos",
        "Menos anos de atualização que o A17",
      ]}
      versionNote={{
        text: "Existem Galaxy A15 4G e Galaxy A15 5G, com processadores diferentes. A versão 5G é mais rápida; confira no anúncio.",
        proPath: "/review/galaxy-a17-5g",
        proName: "Galaxy A17 5G",
      }}
      faq={[
        {
          question: "O Galaxy A15 vale a pena em 2026?",
          answer:
            "Só abaixo de R$ 700. Por cerca de R$ 200 a mais, o Galaxy A17 5G é mais novo, tem câmera com estabilização, IP54 e seis anos de atualizações.",
        },
        {
          question: "Galaxy A15 4G ou 5G?",
          answer:
            "O 5G, se a diferença for pequena: o Dimensity 6100+ é mais rápido que o Helio G99 e tem 5G. Fora isso, os dois são parecidos.",
        },
        {
          question: "Galaxy A15 ou Galaxy A17?",
          answer:
            "O A17 5G: câmera estabilizada, tela maior, IP54 e mais anos de atualização. O A15 só compensa bem abaixo de R$ 700.",
        },
      ]}
    />
  ),
});
