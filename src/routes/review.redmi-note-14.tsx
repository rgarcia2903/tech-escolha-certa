import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Xiaomi. Suporte (GSMArena, fev/2025): Note 14 4G com 4 versões do Android e 6 anos de segurança; Note 14 5G com 2 versões e 4 anos.
const PAGE_TITLE = fairPriceTitle("redmi-note-14");
const PAGE_DESCRIPTION = fairPriceDescription("redmi-note-14");

export const Route = createFileRoute("/review/redmi-note-14")({
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
      fairPriceId="redmi-note-14"
      name="Redmi Note 14"
      launched="janeiro de 2025"
      shortVerdict="Só abaixo de R$ 1.000. O Redmi Note 14 tem tela AMOLED de 120 Hz, câmera de 108 MP e bateria grande, mas o processador da versão 4G (Helio G99-Ultra) é fraco para o preço. Por pouco mais, o Galaxy A36 é bem mais rápido, tem 5G, IP67 e atualizações até 2031."
      alternative={{ id: "galaxy-a36-5g", name: "Galaxy A36 5G", reviewPath: "/review/galaxy-a36-5g" }}
      secondary={{
        id: "redmi-note-15-5g",
        name: "Redmi Note 15 5G",
        reviewPath: "/review/redmi-note-15-5g",
        why: "Quer continuar na Xiaomi? O Redmi Note 15 5G é o sucessor, com Snapdragon 6 Gen 3 e vídeo em 4K.",
      }}
      specs={[
        ["Processador", "Helio G99-Ultra (4G) ou Dimensity 7025-Ultra (5G)"],
        ["Tela", "6,67\" AMOLED • 120 Hz"],
        ["Câmera principal", "108 MP"],
        ["Câmera frontal", "20 MP"],
        ["Bateria", "5.500 mAh • 33 W (4G) ou 5.110 mAh • 45 W (5G)"],
        ["Atualizações", "4G: 4 versões do Android e segurança até 2031 • 5G: 2 versões e 4 anos"],
        ["Lançamento", "Janeiro de 2025"],
      ]}
      versus={[
        ["Processador", "Helio G99-Ultra", "Snapdragon 6 Gen 3", "new"],
        ["5G", "Só na versão 5G", "Sim", "new"],
        ["Tela", "6,67\" AMOLED • 120 Hz", "6,7\" AMOLED • 120 Hz", "tie"],
        ["Bateria", "5.500 mAh", "5.000 mAh", "old"],
        ["Proteção", "IP54", "IP67", "new"],
        ["Compre se estiver até", "R$ 1.000", "R$ 1.350", "tie"],
      ]}
      stillGood={[
        "Tela AMOLED de 120 Hz",
        "Bateria grande na versão 4G",
        "Na versão 4G, atualizações de segurança até 2031",
      ]}
      whyNot={[
        "Processador da versão 4G fraco para jogos",
        "A versão 5G tem bem menos tempo de atualização",
        "Só IP54 contra respingos",
      ]}
      versionNote={{
        text: "Redmi Note 14 4G, Note 14 5G, Note 14 Pro e Note 14 Pro+ são aparelhos diferentes, com atualizações diferentes. Confira o nome exato no anúncio.",
        proPath: "/review/redmi-note-14-pro-plus",
        proName: "Redmi Note 14 Pro+",
      }}
      faq={[
        { question: "O Redmi Note 14 vale a pena em 2026?", answer: "Só abaixo de R$ 1.000. Por pouco mais, o Galaxy A36 tem processador bem mais forte, 5G, IP67 e atualizações até 2031." },
        { question: "Até quando o Redmi Note 14 recebe atualização?", answer: "Depende da versão. O Note 14 4G tem quatro versões do Android e seis anos de segurança (até 2031). O Note 14 5G tem só duas versões do Android e quatro anos de segurança." },
        { question: "Redmi Note 14 ou Redmi Note 15?", answer: "O Note 15 5G, se puder pagar mais: processador muito mais forte e vídeo em 4K. O Note 14 só compensa bem mais barato." },
      ]}
    />
  ),
});
