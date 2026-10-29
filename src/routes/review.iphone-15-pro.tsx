import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Apple (lançamento em 12/09/2023). iOS 27 compatível (AppleInsider, 08/06/2026); tem Apple Intelligence.
const PAGE_TITLE = fairPriceTitle("iphone-15-pro");
const PAGE_DESCRIPTION = fairPriceDescription("iphone-15-pro");

export const Route = createFileRoute("/review/iphone-15-pro")({
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
      fairPriceId="iphone-15-pro"
      name="iPhone 15 Pro"
      launched="setembro de 2023"
      shortVerdict="Vale abaixo de R$ 3.600, seminovo com garantia e bateria acima de 85%. O iPhone 15 Pro tem teleobjetiva de 3x, tela de 120 Hz, Apple Intelligence e USB-C, então ainda é uma ótima compra nesse preço. Acima disso, o iPhone 17 novo tem chip A19, 256 GB e bateria maior; só perde a teleobjetiva."
      alternative={{ id: "iphone-17", name: "iPhone 17", reviewPath: "/qual-iphone-comprar" }}
      secondary={{
        id: "iphone-16e",
        name: "iPhone 16e",
        reviewPath: "/review/iphone-16e",
        why: "Quer gastar bem menos? O iPhone 16e é novo, tem Apple Intelligence e uma das melhores baterias da linha.",
      }}
      specs={[
        ["Chip", "Apple A17 Pro"],
        ["Tela", "6,1\" OLED ProMotion • 120 Hz"],
        ["Câmeras traseiras", "48 MP + ultra-angular 12 MP + tele 12 MP (3x)"],
        ["Câmera frontal", "12 MP"],
        ["Armazenamento base", "128 GB"],
        ["Conector", "USB-C (USB 3)"],
        ["Extras", "Botão de Ação, titânio, Apple Intelligence"],
        ["Proteção", "IP68"],
        ["Lançamento", "Setembro de 2023"],
      ]}
      versus={[
        ["Chip", "A17 Pro", "A19", "new"],
        ["Tela", "6,1\" • 120 Hz", "6,3\" • 120 Hz", "tie"],
        ["Teleobjetiva", "12 MP (3x)", "Não tem", "old"],
        ["Ultra-angular", "12 MP", "48 MP", "new"],
        ["Armazenamento base", "128 GB", "256 GB", "new"],
        ["Apple Intelligence", "Sim", "Sim", "tie"],
        ["Compre se estiver até", "R$ 3.600", "R$ 5.400", "tie"],
      ]}
      stillGood={[
        "Teleobjetiva de 3x e tela de 120 Hz",
        "Apple Intelligence e USB-C",
        "Recebe o iOS 27",
      ]}
      whyNot={[
        "128 GB na versão base",
        "Em seminovos, a bateria costuma estar gasta",
        "Será atualizado por menos tempo que o iPhone 17",
      ]}
      versionNote={{
        text: "iPhone 15 Pro, 15 Pro Max e iPhone 15 são aparelhos diferentes. Em seminovos, peça a saúde da bateria (Ajustes > Bateria) e prefira loja com garantia.",
        proPath: "/review/iphone-15",
        proName: "iPhone 15",
      }}
      faq={[
        { question: "O iPhone 15 Pro vale a pena em 2026?", answer: "Sim, abaixo de R$ 3.600: tem teleobjetiva, tela de 120 Hz e Apple Intelligence. Acima disso, o iPhone 17 novo é a compra melhor." },
        { question: "iPhone 15 Pro ou iPhone 17?", answer: "O 17, se a diferença for pequena: chip A19, 256 GB e bateria maior. O 15 Pro só ganha na teleobjetiva de 3x." },
        { question: "O iPhone 15 Pro tem Apple Intelligence?", answer: "Sim. Ele foi o primeiro iPhone compatível, junto com o 15 Pro Max." },
      ]}
    />
  ),
});
