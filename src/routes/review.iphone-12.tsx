import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Apple (lançamento em 13/10/2020). iOS 27 compatível com iPhone 11 e posteriores
// (AppleInsider, 08/06/2026).
const PAGE_TITLE = fairPriceTitle("iphone-12");
const PAGE_DESCRIPTION = fairPriceDescription("iphone-12");

export const Route = createFileRoute("/review/iphone-12")({
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
      fairPriceId="iphone-12"
      name="iPhone 12"
      launched="outubro de 2020"
      shortVerdict="Só abaixo de R$ 1.900, seminovo com garantia e bateria acima de 85%. O iPhone 12 tem tela OLED, 5G e MagSafe e recebe o iOS 27, mas a bateria é pequena e a versão de 64 GB enche rápido. Chegando perto de R$ 3.000, o iPhone 16e é muito mais negócio."
      alternative={{ id: "iphone-16e", name: "iPhone 16e", reviewPath: "/review/iphone-16e" }}
      secondary={{
        id: "galaxy-a36-5g",
        name: "Galaxy A36 5G",
        reviewPath: "/review/galaxy-a36-5g",
        why: "Orçamento de até R$ 1.500 e aceita Android? O Galaxy A36 é novo, tem bateria de 5.000 mAh e atualizações até 2031.",
      }}
      specs={[
        ["Chip", "Apple A14 Bionic"],
        ["Tela", '6,1" OLED Super Retina XDR • 60 Hz'],
        ["Câmeras traseiras", "12 MP + ultra-angular 12 MP"],
        ["Câmera frontal", "12 MP"],
        ["Armazenamento base", "64 GB"],
        ["Conexão", "5G"],
        ["Conector", "Lightning • MagSafe"],
        ["Proteção", "IP68"],
        ["Lançamento", "Outubro de 2020"],
      ]}
      versus={[
        ["Chip", "A14", "A18", "new"],
        ["Apple Intelligence", "Não", "Sim", "new"],
        ["Câmera principal", "12 MP", "48 MP", "new"],
        ["Ultra-angular", "12 MP", "Não tem", "old"],
        ["Armazenamento base", "64 GB", "128 GB", "new"],
        ["Conector", "Lightning", "USB-C", "new"],
        ["Compre se estiver até", "R$ 1.900", "R$ 3.300", "tie"],
      ]}
      stillGood={["Tela OLED e 5G", "MagSafe e IP68", "Recebe o iOS 27"]}
      whyNot={[
        "Bateria pequena, e em usados quase sempre já gasta",
        "64 GB enchem rápido; procure a versão de 128 GB",
        "Sem Apple Intelligence",
        "Deve parar de receber atualizações bem antes dos modelos novos",
      ]}
      versionNote={{
        text: "iPhone 12, 12 mini, 12 Pro e 12 Pro Max são aparelhos diferentes. Em seminovos, peça a saúde da bateria (Ajustes > Bateria) e prefira loja com garantia.",
        proPath: "/review/iphone-13",
        proName: "iPhone 13",
      }}
      faq={[
        {
          question: "O iPhone 12 vale a pena em 2026?",
          answer:
            "Só abaixo de R$ 1.900, seminovo com garantia e bateria boa. Acima disso, o iPhone 16e é novo, tem chip A18, bateria bem maior e anos a mais de atualização.",
        },
        {
          question: "O iPhone 12 ainda recebe atualização?",
          answer: "Sim, ele é compatível com o iOS 27. A Apple não informa até quando.",
        },
        {
          question: "iPhone 12 ou iPhone 13?",
          answer:
            "O 13, se a diferença for pequena: bateria maior, 128 GB de base e chip mais novo. Os dois têm tela OLED, 5G e MagSafe.",
        },
      ]}
    />
  ),
});
