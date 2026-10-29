import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Oficina da Net (lançamento em 20/09/2024, R$ 7.799) e Hardware.com.br (iPhone 17).
const PAGE_TITLE = fairPriceTitle("iphone-16");
const PAGE_DESCRIPTION = fairPriceDescription("iphone-16");

export const Route = createFileRoute("/review/iphone-16")({
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
      fairPriceId="iphone-16"
      name="iPhone 16"
      launched="setembro de 2024"
      shortVerdict="Só abaixo de R$ 4.000. O iPhone 16 ainda é ótimo, mas a versão de 128 GB costuma custar quase o mesmo que o iPhone 17e de 256 GB, e pouco menos que o iPhone 17, que tem tela de 120 Hz e o dobro de armazenamento. Pagando preço cheio, o 17 é a compra certa."
      alternative={{ id: "iphone-17", name: "iPhone 17", reviewPath: "/qual-iphone-comprar" }}
      secondary={{
        id: "iphone-17e",
        name: "iPhone 17e",
        reviewPath: "/comparativo/iphone-17-vs-iphone-17e",
        why: "Quer gastar menos? O iPhone 17e tem chip A19 e 256 GB, mas uma câmera só.",
      }}
      specs={[
        ["Chip", "Apple A18"],
        ["Tela", '6,1" OLED Super Retina XDR • 60 Hz'],
        ["Câmeras traseiras", "48 MP + ultra-angular 12 MP"],
        ["Câmera frontal", "12 MP"],
        ["Armazenamento base", "128 GB"],
        ["Recarga sem fio", "MagSafe até 25 W"],
        ["Proteção", "IP68"],
        ["Extras", "Dynamic Island, Botão de Câmera, USB-C"],
        ["Lançamento", "Setembro de 2024 (R$ 7.799)"],
      ]}
      versus={[
        ["Chip", "A18", "A19", "new"],
        ["Tela", '6,1" • 60 Hz', '6,3" • 120 Hz', "new"],
        ["Ultra-angular", "12 MP", "48 MP", "new"],
        ["Câmera frontal", "12 MP", "18 MP Center Stage", "new"],
        ["Armazenamento base", "128 GB", "256 GB", "new"],
        ["Compre se estiver até", "R$ 4.000", "R$ 5.400", "tie"],
      ]}
      stillGood={["Chip A18, rápido para qualquer app", "Câmera dupla com Botão de Câmera", "MagSafe, IP68 e Dynamic Island"]}
      whyNot={[
        "128 GB enchem rápido com fotos e vídeos em 4K",
        "Tela de 60 Hz, enquanto o iPhone 17 já tem 120 Hz",
        "Costuma custar quase o mesmo que modelos mais novos com 256 GB",
      ]}
      versionNote={{
        text: "iPhone 16, 16e, 16 Plus e 16 Pro são aparelhos diferentes. Confira o modelo e a capacidade no anúncio.",
        proPath: "/review/iphone-16e",
        proName: "iPhone 16e",
      }}
      faq={[
        {
          question: "O iPhone 16 vale a pena em 2026?",
          answer:
            "Só abaixo de R$ 4.000. Acima disso, o iPhone 17 entrega tela de 120 Hz e o dobro de armazenamento por pouco mais, e o 17e entrega 256 GB e chip mais novo por um preço parecido.",
        },
        {
          question: "iPhone 16 ou iPhone 17?",
          answer: "O 17, se a diferença for de até uns R$ 1.000: tela de 120 Hz, ultra-angular de 48 MP e 256 GB.",
        },
        {
          question: "iPhone 16 ou iPhone 16e?",
          answer:
            "O 16 tem câmera dupla, MagSafe, Dynamic Island e Botão de Câmera. O 16e é bem mais barato. Se a câmera ultra-angular não faz falta, o 16e economiza bastante.",
        },
      ]}
    />
  ),
});
