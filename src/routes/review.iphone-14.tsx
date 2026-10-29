import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Apple (lançamento em 07/09/2022). iOS 27 compatível com iPhone 11 e posteriores
// (AppleInsider, 08/06/2026). Apple Intelligence exige iPhone 15 Pro, linha 16 ou mais novo.
const PAGE_TITLE = fairPriceTitle("iphone-14");
const PAGE_DESCRIPTION = fairPriceDescription("iphone-14");

export const Route = createFileRoute("/review/iphone-14")({
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
      fairPriceId="iphone-14"
      name="iPhone 14"
      launched="setembro de 2022"
      shortVerdict="Só abaixo de R$ 2.600, novo ou seminovo com garantia e bateria acima de 85%. O iPhone 14 é quase um iPhone 13 com câmera melhor no escuro; ainda usa Lightning e não tem Apple Intelligence. Pagando mais que isso, o iPhone 16e é a compra certa, e o iPhone 15 se você quer câmera dupla."
      alternative={{ id: "iphone-16e", name: "iPhone 16e", reviewPath: "/review/iphone-16e" }}
      secondary={{
        id: "iphone-15",
        name: "iPhone 15",
        reviewPath: "/review/iphone-15",
        why: "Quer manter a câmera ultra-angular? O iPhone 15 tem câmera de 48 MP, Dynamic Island e USB-C.",
      }}
      specs={[
        ["Chip", "Apple A15 Bionic (GPU de 5 núcleos)"],
        ["Tela", '6,1" OLED Super Retina XDR • 60 Hz'],
        ["Câmeras traseiras", "12 MP + ultra-angular 12 MP"],
        ["Câmera frontal", "12 MP com foco automático"],
        ["Armazenamento base", "128 GB"],
        ["Conector", "Lightning • MagSafe"],
        ["Segurança", "Detecção de Acidente"],
        ["Proteção", "IP68"],
        ["Lançamento", "Setembro de 2022"],
      ]}
      versus={[
        ["Chip", "A15", "A18", "new"],
        ["Apple Intelligence", "Não", "Sim", "new"],
        ["Câmera principal", "12 MP", "48 MP", "new"],
        ["Ultra-angular", "12 MP", "Não tem", "old"],
        ["Bateria", "Boa quando nova", "A maior autonomia entre os iPhones de 6,1\" (Apple)", "new"],
        ["Conector", "Lightning", "USB-C", "new"],
        ["Compre se estiver até", "R$ 2.600", "R$ 3.300", "tie"],
      ]}
      stillGood={[
        "Câmera dupla com bom resultado à noite",
        "Detecção de Acidente, MagSafe e IP68",
        "Recebe o iOS 27",
      ]}
      whyNot={[
        "Mesmo chip do iPhone 13 (A15)",
        "Sem Apple Intelligence",
        "Lightning: os acessórios novos são USB-C",
        "Costuma custar perto do 16e, que é bem mais novo",
      ]}
      versionNote={{
        text: "iPhone 14, 14 Plus, 14 Pro e 14 Pro Max são aparelhos diferentes. Em seminovos, peça a saúde da bateria (Ajustes > Bateria) e prefira loja com garantia.",
        proPath: "/review/iphone-15",
        proName: "iPhone 15",
      }}
      faq={[
        {
          question: "O iPhone 14 vale a pena em 2026?",
          answer:
            "Só abaixo de R$ 2.600. Acima disso, o iPhone 16e tem chip A18, Apple Intelligence, USB-C e bateria maior por pouco mais.",
        },
        {
          question: "iPhone 14 ou iPhone 13?",
          answer:
            "São muito parecidos: mesmo chip A15 e mesma tela. O 14 tem câmera um pouco melhor no escuro, frontal com foco automático e Detecção de Acidente. Se a diferença passar de uns R$ 300, fique com o 13.",
        },
        {
          question: "iPhone 14 ou iPhone 16e?",
          answer:
            "O 16e, para a maioria: chip muito mais novo, Apple Intelligence, USB-C e bateria melhor. O 14 só ganha na câmera ultra-angular e no MagSafe.",
        },
      ]}
    />
  ),
});
