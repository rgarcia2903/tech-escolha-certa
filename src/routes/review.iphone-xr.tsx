import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Apple (lançamento em 26/10/2018). O iOS 26 exige iPhone 11 ou mais novo: o XR parou no iOS 18.
const PAGE_TITLE = fairPriceTitle("iphone-xr");
const PAGE_DESCRIPTION = fairPriceDescription("iphone-xr");

export const Route = createFileRoute("/review/iphone-xr")({
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
      fairPriceId="iphone-xr"
      name="iPhone XR"
      launched="outubro de 2018"
      shortVerdict="Não recomendamos, a não ser abaixo de R$ 700 e para uso muito simples. O iPhone XR parou no iOS 18 e não recebe as versões novas do sistema, o que com o tempo afeta apps e segurança. Se o orçamento é curto, um Android novo dura mais; se quer iPhone, o 16e é o mais barato que vale a pena."
      alternative={{ id: "iphone-16e", name: "iPhone 16e", reviewPath: "/review/iphone-16e" }}
      secondary={{
        id: "galaxy-a17-5g",
        name: "Galaxy A17 5G",
        reviewPath: "/review/galaxy-a17-5g",
        why: "Orçamento de até R$ 900? O Galaxy A17 5G é novo, tem 5G e seis anos de atualizações.",
      }}
      specs={[
        ["Chip", "Apple A12 Bionic"],
        ["Tela", "6,1\" LCD Liquid Retina • 60 Hz"],
        ["Câmera traseira", "12 MP (uma câmera)"],
        ["Câmera frontal", "7 MP"],
        ["Armazenamento base", "64 GB"],
        ["Conexão", "4G (sem 5G)"],
        ["Proteção", "IP67"],
        ["Atualizações", "Parou no iOS 18"],
        ["Lançamento", "Outubro de 2018"],
      ]}
      versus={[
        ["Chip", "A12", "A18", "new"],
        ["Sistema", "Parou no iOS 18", "Recebe o iOS 27", "new"],
        ["Tela", "LCD", "OLED", "new"],
        ["5G", "Não", "Sim", "new"],
        ["Conector", "Lightning", "USB-C", "new"],
        ["Compre se estiver até", "R$ 700", "R$ 3.300", "tie"],
      ]}
      stillGood={[
        "Ainda roda os apps do dia a dia",
        "Construção resistente, com IP67",
      ]}
      whyNot={[
        "Não recebe as versões novas do iOS",
        "Bateria quase sempre gasta em usados",
        "Sem 5G, 64 GB de base e uma câmera só",
      ]}
      versionNote={{
        text: "Em seminovos, peça a saúde da bateria (Ajustes > Bateria) e prefira loja com garantia. O iPhone 11 é o modelo mais antigo que ainda recebe o iOS 27.",
        proPath: "/review/iphone-11",
        proName: "iPhone 11",
      }}
      faq={[
        { question: "O iPhone XR vale a pena em 2026?", answer: "Não, salvo abaixo de R$ 700 e para uso simples. Ele parou no iOS 18 e não recebe as versões novas do sistema." },
        { question: "O iPhone XR recebe o iOS 26 ou 27?", answer: "Não. O iOS 26 e o iOS 27 exigem iPhone 11 ou mais novo." },
        { question: "iPhone XR ou iPhone 11?", answer: "O 11: ainda recebe o iOS 27 e tem câmera dupla. Mas os dois são antigos; compre pensando em pouco tempo de uso." },
      ]}
    />
  ),
});
