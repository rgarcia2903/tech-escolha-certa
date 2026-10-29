import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Oficina da Net (lançamento em 19/02/2025, R$ 5.799) e iPhone 17e (02/03/2026).
const PAGE_TITLE = fairPriceTitle("iphone-16e");
const PAGE_DESCRIPTION = fairPriceDescription("iphone-16e");

export const Route = createFileRoute("/review/iphone-16e")({
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
      fairPriceId="iphone-16e"
      name="iPhone 16e"
      launched="fevereiro de 2025"
      shortVerdict="Sim, até R$ 3.300: é o jeito mais barato de ter um iPhone com chip atual, IP68 e boa bateria. Acima disso, o iPhone 17e vale a diferença, com chip A19, MagSafe e o dobro de armazenamento."
      alternative={{ id: "iphone-17e", name: "iPhone 17e", reviewPath: "/comparativo/iphone-17-vs-iphone-17e" }}
      secondary={{
        id: "iphone-17",
        name: "iPhone 17",
        reviewPath: "/qual-iphone-comprar",
        why: "Quer tela de 120 Hz e câmera ultra-angular? O iPhone 17 é o iPhone completo mais barato.",
      }}
      specs={[
        ["Chip", "Apple A18"],
        ["Tela", '6,1" OLED Super Retina XDR'],
        ["Câmera traseira", "48 MP (uma câmera)"],
        ["Câmera frontal", "12 MP"],
        ["Armazenamento base", "128 GB"],
        ["Bateria", "4.005 mAh"],
        ["Recarga sem fio", "7,5 W (sem MagSafe)"],
        ["Proteção", "IP68"],
        ["Lançamento", "Fevereiro de 2025 (R$ 5.799)"],
      ]}
      versus={[
        ["Chip", "A18", "A19", "new"],
        ["Armazenamento base", "128 GB", "256 GB", "new"],
        ["MagSafe", "Não", "Sim, até 15 W", "new"],
        ["Câmera", "48 MP", "48 MP", "tie"],
        ["Proteção", "IP68", "IP68", "tie"],
        ["Compre se estiver até", "R$ 3.300", "R$ 4.500", "old"],
      ]}
      stillGood={["O iPhone mais barato à venda, com chip A18", "Bateria que dura o dia todo", "IP68 e Face ID"]}
      whyNot={["Sem MagSafe", "128 GB podem ficar apertados", "Uma câmera só, sem ultra-angular"]}
      versionNote={{
        text: "iPhone 16e e iPhone 16 são aparelhos diferentes: o 16 tem câmera dupla, MagSafe e Dynamic Island. Confira o nome no anúncio.",
        proPath: "/review/iphone-16",
        proName: "iPhone 16",
      }}
      faq={[
        {
          question: "O iPhone 16e vale a pena em 2026?",
          answer:
            "Sim, até cerca de R$ 3.300. É o iPhone mais barato com chip atual. Acima disso, o iPhone 17e vale a diferença.",
        },
        {
          question: "iPhone 16e ou iPhone 15?",
          answer:
            "Depende. O 16e tem chip mais novo e bateria maior. O 15 tem câmera ultra-angular, MagSafe e Dynamic Island. Pelo preço, o 16e costuma ser a melhor compra.",
        },
        {
          question: "iPhone 16e ou iPhone 17e?",
          answer: "O 17e, se a diferença couber no orçamento: chip A19, MagSafe e 256 GB. Se não, o 16e atende muito bem.",
        },
      ]}
    />
  ),
});
