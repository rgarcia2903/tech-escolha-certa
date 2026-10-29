import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Samsung (lançamento em 09/02/2022; 4 versões do Android e 5 anos de segurança).
// Fora da lista da One UI 9 (Oficina da Net, out/2026): a One UI 8 (Android 16) foi a última.
const PAGE_TITLE = fairPriceTitle("galaxy-s22");
const PAGE_DESCRIPTION = fairPriceDescription("galaxy-s22");

export const Route = createFileRoute("/review/galaxy-s22")({
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
      fairPriceId="galaxy-s22"
      name="Galaxy S22"
      launched="fevereiro de 2022"
      shortVerdict="Só abaixo de R$ 1.300, e só se você aceita um aparelho em fim de vida. O Galaxy S22 não recebe mais versões novas do Android (ficou fora da One UI 9) e a bateria de 3.700 mAh é pequena. Pelo mesmo dinheiro, um Galaxy A36 novo dura bem mais."
      alternative={{ id: "galaxy-a36-5g", name: "Galaxy A36 5G", reviewPath: "/review/galaxy-a36-5g" }}
      secondary={{
        id: "galaxy-s25-fe",
        name: "Galaxy S25 FE",
        reviewPath: "/review/galaxy-s25-fe",
        why: "Quer continuar na linha S, com teleobjetiva? O Galaxy S25 FE tem atualizações até 2032.",
      }}
      specs={[
        ["Processador", "Snapdragon 8 Gen 1 ou Exynos 2200, conforme o mercado"],
        ["Tela", '6,1" Dynamic AMOLED 2X • 120 Hz'],
        ["Câmeras traseiras", "50 MP + ultra-angular 12 MP + tele 10 MP (3x)"],
        ["Câmera frontal", "10 MP"],
        ["Memória", "8 GB de RAM • 128 ou 256 GB"],
        ["Bateria", "3.700 mAh • recarga de 25 W"],
        ["Proteção", "IP68"],
        ["Atualizações", "Última versão: One UI 8 (Android 16); segurança até cerca de 2027"],
        ["Lançamento", "Fevereiro de 2022"],
      ]}
      versus={[
        ["Processador", "Topo de linha de 2022", "Snapdragon 6 Gen 3", "old"],
        ["Teleobjetiva", "10 MP (3x)", "Não tem", "old"],
        ["Bateria", "3.700 mAh", "5.000 mAh", "new"],
        ["Recarga", "25 W", "45 W", "new"],
        ["Atualizações", "Encerradas", "Até 2031", "new"],
        ["Compre se estiver até", "R$ 1.300", "R$ 1.350", "tie"],
      ]}
      stillGood={["Tela de 120 Hz e tamanho compacto", "Teleobjetiva de 3x", "IP68 e construção premium"]}
      whyNot={[
        "Não recebe mais versões novas do Android",
        "Bateria de 3.700 mAh, pequena para um dia de uso intenso",
        "Em usados, a bateria já costuma estar gasta",
      ]}
      versionNote={{
        text: "Galaxy S22, S22+ e S22 Ultra são aparelhos diferentes. Em seminovos, confira o estado da bateria em Configurações > Assistência do aparelho.",
        proPath: "/review/galaxy-s23",
        proName: "Galaxy S23",
      }}
      faq={[
        {
          question: "O Galaxy S22 vale a pena em 2026?",
          answer:
            "Só abaixo de R$ 1.300 e sabendo que ele não recebe mais versões novas do Android. Pelo mesmo dinheiro, um Galaxy A36 novo tem bateria maior e atualizações até 2031.",
        },
        {
          question: "O Galaxy S22 vai receber a One UI 9?",
          answer:
            "Não. A One UI 8 (Android 16) foi a última versão grande para o S22. Ele ainda recebe correções de segurança por um tempo.",
        },
        {
          question: "Galaxy S22 ou Galaxy S23?",
          answer:
            "O S23: bateria maior, processador mais eficiente e uma versão do Android a mais (One UI 9). A diferença de preço costuma valer a pena.",
        },
      ]}
    />
  ),
});
