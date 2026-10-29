import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Apple (lançamento em 10/09/2019). iOS 27 compatível com iPhone 11 e posteriores
// (AppleInsider, 08/06/2026): o 11 é o modelo mais antigo da lista.
const PAGE_TITLE = fairPriceTitle("iphone-11");
const PAGE_DESCRIPTION = fairPriceDescription("iphone-11");

export const Route = createFileRoute("/review/iphone-11")({
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
      fairPriceId="iphone-11"
      name="iPhone 11"
      launched="setembro de 2019"
      shortVerdict="Só abaixo de R$ 1.500, e de preferência seminovo com garantia e bateria acima de 85%. O iPhone 11 ainda recebe o iOS 27, mas é o modelo mais antigo da lista, não tem 5G e a tela é LCD. Se o orçamento chega perto de R$ 3.000, o iPhone 16e dura muitos anos a mais."
      alternative={{ id: "iphone-16e", name: "iPhone 16e", reviewPath: "/review/iphone-16e" }}
      secondary={{
        id: "galaxy-a36-5g",
        name: "Galaxy A36 5G",
        reviewPath: "/review/galaxy-a36-5g",
        why: "Orçamento de até R$ 1.500 e aceita Android? O Galaxy A36 é novo, tem tela AMOLED de 120 Hz e atualizações até 2031.",
      }}
      specs={[
        ["Chip", "Apple A13 Bionic"],
        ["Tela", '6,1" LCD Liquid Retina • 60 Hz'],
        ["Câmeras traseiras", "12 MP + ultra-angular 12 MP"],
        ["Câmera frontal", "12 MP"],
        ["Armazenamento base", "64 GB"],
        ["Conexão", "4G (sem 5G)"],
        ["Conector", "Lightning"],
        ["Proteção", "IP68"],
        ["Lançamento", "Setembro de 2019"],
      ]}
      versus={[
        ["Chip", "A13", "A18", "new"],
        ["Tela", "LCD • 60 Hz", "OLED • 60 Hz", "new"],
        ["5G", "Não", "Sim", "new"],
        ["Ultra-angular", "12 MP", "Não tem", "old"],
        ["Armazenamento base", "64 GB", "128 GB", "new"],
        ["Conector", "Lightning", "USB-C", "new"],
        ["Compre se estiver até", "R$ 1.500", "R$ 3.300", "tie"],
      ]}
      stillGood={[
        "Ainda recebe o iOS 27",
        "Câmera dupla com ultra-angular, boa para o preço de usado",
        "Construção resistente, com IP68",
      ]}
      whyNot={[
        "É o iPhone mais antigo que ainda recebe atualização: deve ser o primeiro a sair da lista",
        "Sem 5G e com tela LCD",
        "64 GB enchem rápido; procure a versão de 128 GB",
        "Em usados, a bateria quase sempre está gasta",
      ]}
      versionNote={{
        text: "iPhone 11, 11 Pro e 11 Pro Max são aparelhos diferentes. Em seminovos, peça a saúde da bateria (Ajustes > Bateria) e prefira loja com garantia.",
        proPath: "/review/iphone-12",
        proName: "iPhone 12",
      }}
      faq={[
        {
          question: "O iPhone 11 vale a pena em 2026?",
          answer:
            "Só abaixo de R$ 1.500, seminovo com garantia e bateria boa. É o iPhone mais antigo que ainda recebe atualização, então compre pensando em usar por pouco tempo.",
        },
        {
          question: "O iPhone 11 vai receber o iOS 27?",
          answer:
            "Sim. A Apple manteve o iPhone 11 na lista do iOS 27. Como é o modelo mais antigo da lista, é o candidato natural a sair na próxima versão.",
        },
        {
          question: "iPhone 11 ou Android novo?",
          answer:
            "Pelo mesmo dinheiro, um Android novo como o Galaxy A36 tem 5G, tela AMOLED de 120 Hz, bateria nova e atualizações até 2031. O iPhone 11 só compensa para quem faz questão do iOS.",
        },
      ]}
    />
  ),
});
