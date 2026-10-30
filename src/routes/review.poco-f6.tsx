import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Xiaomi (3 versões do Android e 4 anos de segurança). HyperOS 3 / Android 16 liberado (Oficina da Net, jan/2026).
const PAGE_TITLE = fairPriceTitle("poco-f6");
const PAGE_DESCRIPTION = fairPriceDescription("poco-f6");

export const Route = createFileRoute("/review/poco-f6")({
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
      fairPriceId="poco-f6"
      name="Poco F6"
      launched="maio de 2024"
      shortVerdict="Vale abaixo de R$ 1.900. O Poco F6 ainda é um dos celulares mais fortes para jogos nessa faixa, com Snapdragon 8s Gen 3 e recarga de 90 W, mas recebe só mais uma versão grande do Android. Acima disso, o Poco X8 Pro é novo e tem bateria bem maior."
      alternative={{ id: "poco-x8-pro", name: "Poco X8 Pro", reviewPath: "/comparativo/poco-x8-pro-vs-poco-x7-pro" }}
      secondary={{
        id: "galaxy-a36-5g",
        name: "Galaxy A36 5G",
        reviewPath: "/review/galaxy-a36-5g",
        why: "Não joga pesado e quer o maior tempo de atualização? O Galaxy A36 tem atualizações até 2031.",
      }}
      specs={[
        ["Processador", "Snapdragon 8s Gen 3"],
        ["Tela", "6,67\" AMOLED 1.5K • 120 Hz"],
        ["Câmeras traseiras", "50 MP com OIS + ultra-angular 8 MP"],
        ["Câmera frontal", "20 MP"],
        ["Memória", "8 GB/256 GB ou 12 GB/512 GB"],
        ["Bateria", "5.000 mAh • 90 W"],
        ["Proteção", "IP64"],
        ["Atualizações", "3 versões do Android (até o Android 17); segurança até 2028"],
        ["Lançamento", "Maio de 2024"],
      ]}
      versus={[
        ["Processador", "Snapdragon 8s Gen 3", "Dimensity 8500 Ultra", "new"],
        ["Bateria", "5.000 mAh", "6.500 mAh", "new"],
        ["Recarga", "90 W", "100 W", "tie"],
        ["Atualizações", "Até o Android 17", "Aparelho de 2026", "new"],
        ["Compre se estiver até", "R$ 1.900", "R$ 2.450", "tie"],
      ]}
      stillGood={[
        "Desempenho de topo de linha para jogos",
        "Recarga de 90 W",
        "Tela AMOLED 1.5K",
      ]}
      whyNot={[
        "Só mais uma versão grande do Android",
        "Bateria menor que a dos modelos novos",
        "IP64, não IP68",
      ]}
      versionNote={{
        text: "Poco F6 e Poco F6 Pro são aparelhos diferentes. Confira o nome no anúncio.",
        proPath: "/review/poco-x6-pro",
        proName: "Poco X6 Pro",
      }}
      faq={[
        { question: "O Poco F6 vale a pena em 2026?", answer: "Sim, abaixo de R$ 1.900: ainda é muito forte para jogos. Acima disso, o Poco X8 Pro é novo e tem bateria bem maior." },
        { question: "Até quando o Poco F6 recebe atualização?", answer: "A Xiaomi prometeu três versões do Android (até o Android 17) e quatro anos de segurança, até 2028." },
        { question: "Poco F6 ou Poco X8 Pro?", answer: "O X8 Pro, se a diferença for de até uns R$ 500: processador mais novo, bateria de 6.500 mAh e mais anos de atualização. O F6 compensa se estiver bem mais barato." },
      ]}
    />
  ),
});
