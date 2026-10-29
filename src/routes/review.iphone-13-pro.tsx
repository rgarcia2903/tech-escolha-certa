import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Apple (lançamento em 14/09/2021). iOS 27 compatível (AppleInsider, 08/06/2026); sem Apple Intelligence.
const PAGE_TITLE = fairPriceTitle("iphone-13-pro");
const PAGE_DESCRIPTION = fairPriceDescription("iphone-13-pro");

export const Route = createFileRoute("/review/iphone-13-pro")({
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
      fairPriceId="iphone-13-pro"
      name="iPhone 13 Pro"
      launched="setembro de 2021"
      shortVerdict="Só abaixo de R$ 2.500, seminovo com garantia e bateria acima de 85%. O iPhone 13 Pro tem tela de 120 Hz e teleobjetiva, mas o chip é de 2021, usa Lightning e não tem Apple Intelligence. Acima disso, o iPhone 16e novo dura bem mais."
      alternative={{ id: "iphone-16e", name: "iPhone 16e", reviewPath: "/review/iphone-16e" }}
      secondary={{
        id: "iphone-15",
        name: "iPhone 15",
        reviewPath: "/review/iphone-15",
        why: "Quer manter a câmera ultra-angular em um aparelho mais novo? O iPhone 15 tem câmera de 48 MP, Dynamic Island e USB-C.",
      }}
      specs={[
        ["Chip", "Apple A15 Bionic (GPU de 5 núcleos)"],
        ["Tela", "6,1\" OLED ProMotion • 120 Hz"],
        ["Câmeras traseiras", "12 MP + ultra-angular 12 MP + tele 12 MP (3x)"],
        ["Câmera frontal", "12 MP"],
        ["Armazenamento base", "128 GB"],
        ["Conector", "Lightning • MagSafe"],
        ["Proteção", "IP68"],
        ["Lançamento", "Setembro de 2021"],
      ]}
      versus={[
        ["Chip", "A15", "A18", "new"],
        ["Tela", "120 Hz", "60 Hz", "old"],
        ["Teleobjetiva", "12 MP (3x)", "Não tem", "old"],
        ["Apple Intelligence", "Não", "Sim", "new"],
        ["Conector", "Lightning", "USB-C", "new"],
        ["Compre se estiver até", "R$ 2.500", "R$ 3.300", "tie"],
      ]}
      stillGood={[
        "Tela de 120 Hz",
        "Câmera tripla com teleobjetiva",
        "Recebe o iOS 27",
      ]}
      whyNot={[
        "Chip de 2021 e sem Apple Intelligence",
        "Em seminovos, a bateria costuma estar gasta",
        "Lightning",
      ]}
      versionNote={{
        text: "iPhone 13 Pro, 13 Pro Max e iPhone 13 são aparelhos diferentes. Em seminovos, peça a saúde da bateria (Ajustes > Bateria) e prefira loja com garantia.",
        proPath: "/review/iphone-13",
        proName: "iPhone 13",
      }}
      faq={[
        { question: "O iPhone 13 Pro vale a pena em 2026?", answer: "Só abaixo de R$ 2.500. Acima disso, o iPhone 16e novo tem chip muito mais novo, Apple Intelligence e USB-C." },
        { question: "iPhone 13 Pro ou iPhone 13?", answer: "O Pro tem tela de 120 Hz e teleobjetiva. Se a diferença for de até uns R$ 300, vale o Pro." },
        { question: "O iPhone 13 Pro recebe o iOS 27?", answer: "Sim. A Apple não informa até quando." },
      ]}
    />
  ),
});
