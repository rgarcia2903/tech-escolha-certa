import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Samsung (lançamento em 01/02/2023; 4 versões do Android e 5 anos de segurança).
// One UI 9 (Android 17) já chegando ao S23 no Brasil (Oficina da Net, out/2026).
const PAGE_TITLE = fairPriceTitle("galaxy-s23");
const PAGE_DESCRIPTION = fairPriceDescription("galaxy-s23");

export const Route = createFileRoute("/review/galaxy-s23")({
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
      fairPriceId="galaxy-s23"
      name="Galaxy S23"
      launched="fevereiro de 2023"
      shortVerdict="Só abaixo de R$ 2.300. O Galaxy S23 ainda é rápido, compacto e tem teleobjetiva, mas a bateria de 3.900 mAh é pequena e a One UI 9 é a última versão grande do Android que ele recebe. Pagando mais, o Galaxy S25 FE tem bateria maior e atualizações até 2032."
      alternative={{ id: "galaxy-s25-fe", name: "Galaxy S25 FE", reviewPath: "/review/galaxy-s25-fe" }}
      secondary={{
        id: "galaxy-a57-5g",
        name: "Galaxy A57 5G",
        reviewPath: "/review/galaxy-a57-5g",
        why: "Quer gastar menos de R$ 2.000? O Galaxy A57 é novo, tem bateria de 5.000 mAh e seis anos de atualizações.",
      }}
      specs={[
        ["Processador", "Snapdragon 8 Gen 2 for Galaxy"],
        ["Tela", '6,1" Dynamic AMOLED 2X • 120 Hz'],
        ["Câmeras traseiras", "50 MP + ultra-angular 12 MP + tele 10 MP (3x)"],
        ["Câmera frontal", "12 MP"],
        ["Memória", "8 GB de RAM • 128 ou 256 GB"],
        ["Bateria", "3.900 mAh • recarga de 25 W"],
        ["Proteção", "IP68"],
        ["Atualizações", "Até a One UI 9 (Android 17); segurança até 2028"],
        ["Lançamento", "Fevereiro de 2023"],
      ]}
      versus={[
        ["Processador", "Snapdragon 8 Gen 2", "Exynos 2400", "tie"],
        ["Tamanho", '6,1", compacto', '6,7"', "old"],
        ["Bateria", "3.900 mAh", "4.900 mAh", "new"],
        ["Recarga", "25 W", "45 W", "new"],
        ["Teleobjetiva", "10 MP (3x)", "8 MP (3x)", "tie"],
        ["Atualizações", "Última versão grande agora", "Até 2032", "new"],
        ["Compre se estiver até", "R$ 2.300", "R$ 3.000", "tie"],
      ]}
      stillGood={[
        "Processador topo de linha de 2023, ainda muito rápido",
        "Tamanho compacto, raro hoje",
        "Câmera com teleobjetiva de 3x e IP68",
      ]}
      whyNot={[
        "Bateria pequena: com uso pesado, pode não chegar ao fim do dia",
        "A One UI 9 é a última versão grande do Android que ele recebe",
        "Recarga de só 25 W",
      ]}
      versionNote={{
        text: "Galaxy S23, S23+, S23 Ultra e S23 FE são aparelhos diferentes. O S23 FE usa outro processador e tem atualizações diferentes.",
        proPath: "/review/galaxy-s24",
        proName: "Galaxy S24",
      }}
      faq={[
        {
          question: "O Galaxy S23 vale a pena em 2026?",
          answer:
            "Só abaixo de R$ 2.300. Ele ainda é rápido, mas a bateria é pequena e a One UI 9 é sua última versão grande do Android. Acima disso, o Galaxy S25 FE é a compra melhor.",
        },
        {
          question: "Até quando o Galaxy S23 recebe atualização?",
          answer:
            "A Samsung prometeu quatro versões do Android e cinco anos de segurança. A One UI 9 (Android 17) é a última versão grande; as correções de segurança vão até 2028.",
        },
        {
          question: "Galaxy S23 ou Galaxy S25 FE?",
          answer:
            "O S25 FE para a maioria: bateria de 4.900 mAh, recarga de 45 W e atualizações até 2032. O S23 só ganha no tamanho compacto.",
        },
      ]}
    />
  ),
});
