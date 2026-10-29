import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Oficina da Net (lançamento em 21/09/2023). Sem oferta própria: a página leva ao sucessor.
const PAGE_TITLE = fairPriceTitle("redmi-note-13-5g");
const PAGE_DESCRIPTION = fairPriceDescription("redmi-note-13-5g");

export const Route = createFileRoute("/review/redmi-note-13")({
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
      fairPriceId="redmi-note-13-5g"
      name="Redmi Note 13 5G"
      launched="setembro de 2023"
      shortVerdict="Só abaixo de R$ 1.000. A tela AMOLED de 120 Hz ainda é boa, mas o processador é de entrada e o aparelho já tem três anos. Pelo preço de um Note 13 5G novo, o Galaxy A36 entrega bem mais desempenho e seis anos de atualizações; para bateria e carregador na caixa, veja o Redmi Note 15 5G."
      alternative={{ id: "galaxy-a36-5g", name: "Galaxy A36 5G", reviewPath: "/review/galaxy-a36-5g" }}
      secondary={{
        id: "redmi-note-15-5g",
        name: "Redmi Note 15 5G",
        reviewPath: "/review/redmi-note-15-5g",
        why: "Prefere continuar na Xiaomi? O Redmi Note 15 5G é o sucessor, com bateria maior e carregador de 45 W na caixa.",
      }}
      specs={[
        ["Processador", "MediaTek Dimensity 6080 (6 nm)"],
        ["Tela", 'AMOLED 6,67" • FHD+ • 120 Hz'],
        ["Câmeras traseiras", "108 MP + 8 MP ultrawide + 2 MP"],
        ["Câmera frontal", "16 MP"],
        ["Bateria", "5.000 mAh"],
        ["Carregamento", "33 W"],
        ["Proteção", "IP54"],
        ["Sistema de lançamento", "Android 13 (MIUI 14)"],
        ["Lançamento", "Setembro de 2023"],
      ]}
      versus={[
        ["Lançamento", "Setembro de 2023", "Março de 2025", "new"],
        ["Processador", "Dimensity 6080", "Snapdragon 6 Gen 3", "new"],
        ["Tela", "AMOLED 120 Hz", "AMOLED 120 Hz", "tie"],
        ["Câmera principal", "108 MP", "50 MP com OIS", "new"],
        ["Bateria e recarga", "5.000 mAh • 33 W", "5.000 mAh • 45 W", "new"],
        ["Proteção", "IP54", "IP67", "new"],
        ["Atualizações", "Ciclo perto do fim", "6 anos", "new"],
        ["Compre se estiver até", "R$ 1.000", "R$ 1.350", "tie"],
      ]}
      stillGood={["Tela AMOLED de 120 Hz", "Câmera principal de 108 MP para fotos com boa luz", "5G e bateria de 5.000 mAh"]}
      whyNot={[
        "Processador de entrada, que já sente o peso dos apps atuais",
        "Lançado em 2023: o ciclo de atualizações está perto do fim",
        "Proteção só IP54, contra respingos",
      ]}
      versionNote={{
        text: "Existem Redmi Note 13 4G, Note 13 5G e Note 13 Pro 5G, com nomes parecidos e aparelhos diferentes. Confira o nome exato no anúncio.",
        proPath: "/review/redmi-note-13-pro",
        proName: "Redmi Note 13 Pro 5G",
      }}
      faq={[
        {
          question: "O Redmi Note 13 vale a pena em 2026?",
          answer:
            "Só abaixo de R$ 1.000. Acima disso, o Galaxy A36 5G é bem mais forte e terá atualizações por muito mais tempo.",
        },
        {
          question: "Qual a diferença entre o Redmi Note 13 5G e o Note 13 Pro?",
          answer:
            "O Note 13 Pro 5G tem processador mais forte, câmera de 200 MP e recarga de 67 W. O Note 13 5G é a versão de entrada.",
        },
        {
          question: "Redmi Note 13 ou Redmi Note 15 5G?",
          answer:
            "O Note 15 5G: é mais novo, tem processador Snapdragon mais forte, bateria maior e carregador de 45 W na caixa.",
        },
      ]}
    />
  ),
});
