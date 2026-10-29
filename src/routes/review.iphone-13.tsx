import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Apple (lançamento em 14/09/2021). iOS 27 compatível com iPhone 11 e posteriores
// (AppleInsider, 08/06/2026). Apple Intelligence exige iPhone 15 Pro, linha 16 ou mais novo.
const PAGE_TITLE = fairPriceTitle("iphone-13");
const PAGE_DESCRIPTION = fairPriceDescription("iphone-13");

export const Route = createFileRoute("/review/iphone-13")({
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
      fairPriceId="iphone-13"
      name="iPhone 13"
      launched="setembro de 2021"
      shortVerdict="Só abaixo de R$ 2.300, novo ou seminovo com garantia e bateria acima de 85%. O iPhone 13 ainda roda tudo e recebe o iOS 27, mas não tem Apple Intelligence e usa Lightning. Pagando mais que isso, o iPhone 16e é a compra certa: chip A18, bateria bem maior e anos a mais de atualização."
      alternative={{ id: "iphone-16e", name: "iPhone 16e", reviewPath: "/review/iphone-16e" }}
      secondary={{
        id: "iphone-15",
        name: "iPhone 15",
        reviewPath: "/review/iphone-15",
        why: "Não abre mão da câmera ultra-angular? O iPhone 15 tem câmera dupla de 48 MP, Dynamic Island e USB-C.",
      }}
      specs={[
        ["Chip", "Apple A15 Bionic"],
        ["Tela", '6,1" OLED Super Retina XDR • 60 Hz'],
        ["Câmeras traseiras", "12 MP + ultra-angular 12 MP"],
        ["Câmera frontal", "12 MP"],
        ["Armazenamento base", "128 GB"],
        ["Conector", "Lightning"],
        ["Recarga sem fio", "MagSafe"],
        ["Proteção", "IP68"],
        ["Lançamento", "Setembro de 2021"],
      ]}
      versus={[
        ["Chip", "A15", "A18", "new"],
        ["Apple Intelligence", "Não", "Sim", "new"],
        ["Câmera principal", "12 MP", "48 MP", "new"],
        ["Ultra-angular", "12 MP", "Não tem", "old"],
        ["Bateria", "Menor; em usados, confira a saúde", "A maior autonomia entre os iPhones de 6,1\" (Apple)", "new"],
        ["Conector", "Lightning", "USB-C", "new"],
        ["Compre se estiver até", "R$ 2.300", "R$ 3.300", "tie"],
      ]}
      stillGood={[
        "Chip A15 ainda dá conta de qualquer app e jogo",
        "Câmera dupla com ultra-angular e modo Cinema",
        "Recebe o iOS 27 e tem MagSafe e IP68",
      ]}
      whyNot={[
        "Sem Apple Intelligence, que exige iPhone 15 Pro ou mais novo",
        "Em seminovos, a bateria costuma estar gasta: veja a saúde antes de comprar",
        "Lightning: os cabos e acessórios novos são USB-C",
        "Vai parar de receber atualizações anos antes do 16e",
      ]}
      versionNote={{
        text: "iPhone 13, 13 mini, 13 Pro e 13 Pro Max são aparelhos diferentes. Em seminovos, peça a porcentagem de saúde da bateria (Ajustes > Bateria) e prefira loja com garantia.",
        proPath: "/review/iphone-14",
        proName: "iPhone 14",
      }}
      faq={[
        {
          question: "O iPhone 13 vale a pena em 2026?",
          answer:
            "Só abaixo de R$ 2.300, novo ou seminovo com garantia. Acima disso, o iPhone 16e entrega chip A18, Apple Intelligence, bateria maior e USB-C por pouco mais.",
        },
        {
          question: "O iPhone 13 ainda recebe atualização?",
          answer:
            "Sim. Ele é compatível com o iOS 27, lançado em 2026. A Apple não informa até quando, mas o 16e, lançado em 2025, vai receber atualizações por vários anos a mais.",
        },
        {
          question: "iPhone 13 ou iPhone 16e?",
          answer:
            "O 16e, se a diferença de preço for de até uns R$ 900: chip muito mais novo, bateria maior, USB-C e Apple Intelligence. O 13 só ganha na câmera ultra-angular.",
        },
        {
          question: "iPhone 13 tem Apple Intelligence?",
          answer: "Não. A Apple Intelligence exige iPhone 15 Pro, a linha 16 ou mais novo.",
        },
      ]}
    />
  ),
});
