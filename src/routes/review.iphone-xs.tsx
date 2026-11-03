import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Oficina da Net (anúncio em 12/09/2018). O iOS 26 deixou de fora iPhone XS, XS Max e XR: o XS parou no iOS 18 (9to5Mac).
const PAGE_TITLE = fairPriceTitle("iphone-xs");
const PAGE_DESCRIPTION = fairPriceDescription("iphone-xs");

export const Route = createFileRoute("/review/iphone-xs")({
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
      fairPriceId="iphone-xs"
      name="iPhone XS"
      launched="setembro de 2018"
      shortVerdict="Não recomendamos, a não ser abaixo de R$ 750 e para uso simples. O iPhone XS parou no iOS 18: o iOS 26 já não roda nele. Ainda tem tela OLED, teleobjetiva e IP68, mas a bateria é pequena e o sistema não evolui mais. Se quer iPhone, o 16e é o mais barato que vale a pena."
      alternative={{ id: "iphone-16e", name: "iPhone 16e", reviewPath: "/review/iphone-16e" }}
      secondary={{
        id: "galaxy-a36-5g",
        name: "Galaxy A36 5G",
        reviewPath: "/review/galaxy-a36-5g",
        why: "Orçamento curto? O Galaxy A36 novo tem atualizações até 2031.",
      }}
      specs={[
        ["Chip", "Apple A12 Bionic"],
        ["Tela", "5,8\" OLED (2436 × 1125) • 60 Hz"],
        ["Câmeras traseiras", "12 MP + teleobjetiva 12 MP (2x)"],
        ["Memória", "4 GB de RAM"],
        ["Armazenamento", "64, 256 ou 512 GB"],
        ["Proteção", "IP68"],
        ["Atualizações", "Encerradas: última versão foi o iOS 18"],
        ["Lançamento", "Setembro de 2018"],
      ]}
      versus={[
        ["Chip", "A12 (2018)", "A18 (2025)", "new"],
        ["Sistema", "Parou no iOS 18", "iOS atual", "new"],
        ["Teleobjetiva", "Sim (2x)", "Não tem", "old"],
        ["Armazenamento base", "64 GB", "128 GB", "new"],
        ["Compre se estiver até", "R$ 750", "R$ 3.300", "tie"],
      ]}
      stillGood={[
        "Tela OLED e Face ID",
        "Teleobjetiva de 2x",
        "IP68",
      ]}
      whyNot={[
        "Parou no iOS 18: não recebe o iOS 26",
        "Bateria pequena para hoje",
        "A versão de 64 GB enche rápido",
      ]}
      versionNote={{
        text: "iPhone XS e XS Max diferem só no tamanho (5,8\" e 6,5\") e na bateria. O XR tem tela LCD e uma câmera só.",
        proPath: "/review/iphone-xr",
        proName: "iPhone XR",
      }}
      faq={[
        { question: "O iPhone XS vale a pena em 2026?", answer: "Só abaixo de R$ 750 e para uso simples. Ele parou no iOS 18 e não recebe o iOS 26. Se quer iPhone, o 16e é o mais barato que vale a pena." },
        { question: "O iPhone XS recebe o iOS 26?", answer: "Não. O iOS 26 deixou de fora o XS, o XS Max e o XR. A última versão para eles é o iOS 18." },
        { question: "iPhone XS ou XR?", answer: "O XS tem tela OLED e teleobjetiva; o XR tem bateria maior. Os dois pararam no iOS 18, então só valem por pouco dinheiro." },
      ]}
    />
  ),
});
