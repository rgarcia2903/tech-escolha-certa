import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Apple (lançamento em 07/09/2022). iOS 27 compatível (AppleInsider, 08/06/2026); sem Apple Intelligence.
const PAGE_TITLE = fairPriceTitle("iphone-14-pro");
const PAGE_DESCRIPTION = fairPriceDescription("iphone-14-pro");

export const Route = createFileRoute("/review/iphone-14-pro")({
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
      fairPriceId="iphone-14-pro"
      name="iPhone 14 Pro"
      launched="setembro de 2022"
      shortVerdict="Só abaixo de R$ 2.900, seminovo com garantia e bateria acima de 85%. O iPhone 14 Pro tem tela de 120 Hz sempre ligada, Dynamic Island e teleobjetiva, mas usa Lightning e não tem Apple Intelligence. Acima disso, o iPhone 16e novo é mais negócio; se a câmera é prioridade, junte para o iPhone 17."
      alternative={{ id: "iphone-16e", name: "iPhone 16e", reviewPath: "/review/iphone-16e" }}
      secondary={{
        id: "iphone-17",
        name: "iPhone 17",
        reviewPath: "/qual-iphone-comprar",
        why: "Quer tela de 120 Hz e câmera dupla em um aparelho novo? O iPhone 17 tem as duas, com 256 GB.",
      }}
      specs={[
        ["Chip", "Apple A16 Bionic"],
        ["Tela", "6,1\" OLED ProMotion • 120 Hz • sempre ligada"],
        ["Câmeras traseiras", "48 MP + ultra-angular 12 MP + tele 12 MP (3x)"],
        ["Câmera frontal", "12 MP"],
        ["Armazenamento base", "128 GB"],
        ["Conector", "Lightning"],
        ["Extras", "Dynamic Island"],
        ["Proteção", "IP68"],
        ["Lançamento", "Setembro de 2022"],
      ]}
      versus={[
        ["Chip", "A16", "A18", "new"],
        ["Tela", "120 Hz • sempre ligada", "60 Hz", "old"],
        ["Câmeras", "Tripla, com tele 3x", "Uma câmera de 48 MP", "old"],
        ["Apple Intelligence", "Não", "Sim", "new"],
        ["Bateria", "Média; em usados, confira a saúde", "A maior autonomia entre os iPhones de 6,1\" (Apple)", "new"],
        ["Conector", "Lightning", "USB-C", "new"],
        ["Compre se estiver até", "R$ 2.900", "R$ 3.300", "tie"],
      ]}
      stillGood={[
        "Tela de 120 Hz sempre ligada e Dynamic Island",
        "Câmera tripla com teleobjetiva",
        "Recebe o iOS 27",
      ]}
      whyNot={[
        "Sem Apple Intelligence",
        "Lightning: os acessórios novos são USB-C",
        "Em seminovos, a bateria costuma estar gasta",
      ]}
      versionNote={{
        text: "iPhone 14 Pro, 14 Pro Max e iPhone 14 são aparelhos diferentes. Em seminovos, peça a saúde da bateria (Ajustes > Bateria) e prefira loja com garantia.",
        proPath: "/review/iphone-14",
        proName: "iPhone 14",
      }}
      faq={[
        { question: "O iPhone 14 Pro vale a pena em 2026?", answer: "Só abaixo de R$ 2.900. Ele ainda tem ótima tela e câmeras, mas não tem Apple Intelligence e usa Lightning. Acima disso, o iPhone 16e novo é mais negócio." },
        { question: "iPhone 14 Pro ou iPhone 16e?", answer: "Depende do que pesa mais. O 14 Pro ganha na tela de 120 Hz e na teleobjetiva. O 16e ganha no chip, na bateria, na Apple Intelligence e por ser novo." },
        { question: "O iPhone 14 Pro recebe o iOS 27?", answer: "Sim. A Apple não informa até quando." },
      ]}
    />
  ),
});
