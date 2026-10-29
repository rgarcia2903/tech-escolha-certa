import { documentaryArticle } from "@/lib/editorial-schema";
import { EDGE_60_PRO_AMAZON_URL } from "@/lib/affiliate-links";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";
import { createFileRoute } from "@tanstack/react-router";
import { ReviewTemplate } from "@/components/site/ReviewTemplate";

// Ficha conferida em 28/10/2026: Canaltech (lançamento no Brasil em 14/05/2025, R$ 3.999) e
// Oficina da Net (dimensões, proteção, câmeras, Android 15 e 3 anos de atualizações).
const PAGE_TITLE = fairPriceTitle("edge-60-pro");
const PAGE_DESCRIPTION = fairPriceDescription("edge-60-pro");

export const Route = createFileRoute("/review/edge-60-pro")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(documentaryArticle("edge-60-pro", PAGE_TITLE, PAGE_DESCRIPTION)),
      },
    ],
  }),
  component: ReviewEdge60Pro,
});

function ReviewEdge60Pro() {
  return (
    <ReviewTemplate
      breadcrumbs={[
        { label: "Home", to: "/" },
        { label: "Celulares", to: "/celulares" },
        { label: "Review Motorola Edge 60 Pro" },
      ]}
      eyebrow="Análise editorial"
      title="Motorola Edge 60 Pro vale a pena em 2026?"
      description="Sim, pelo preço atual. Lançado a R$ 3.999, ele aparece bem mais barato e entrega bateria de 6.000 mAh, recarga de 90 W, zoom óptico de 3x e IP69. O ponto fraco é o suporte: são só três anos de atualizações."
      updatedAt="Atualizado em outubro de 2026"
      readingTime="Leitura • 6 min"
      productName="Motorola Edge 60 Pro"
      priceLabel="Ver preço na Amazon"
      overallScore="8.7"
      verdictShort="Sim — até cerca de R$ 2.700, o Edge 60 Pro é um dos aparelhos mais completos da faixa: bateria enorme, recarga de 90 W, três câmeras de qualidade com zoom óptico e 12 GB de RAM. Se você pretende ficar com o celular por mais de três anos, o Galaxy S25 FE tem suporte bem mais longo."
      affiliateHref={EDGE_60_PRO_AMAZON_URL}
      affiliate={{
        title: "Motorola Edge 60 Pro: confira o preço de hoje",
        description:
          "Lançado a R$ 3.999, ele costuma aparecer bem abaixo disso. Compare as duas lojas: se estiver até R$ 2.700, é um ótimo negócio.",
        buttonText: "Ver Edge 60 Pro na Amazon",
        highlight: "6.000 mAh • 90 W • Zoom óptico 3x • IP68 e IP69",
      }}
      fairPriceId="edge-60-pro"
      decision={{
        bestFor:
          "Você quer bateria para mais de um dia, recarga muito rápida, câmera com zoom óptico e um aparelho resistente, pagando bem menos que num topo de linha.",
        caution:
          "Você troca de celular a cada cinco anos ou mais; o Edge 60 Pro recebe atualizações por três anos.",
        comparisonHref: "/review/galaxy-s25-fe",
        comparisonLabel: "Comparar com o Galaxy S25 FE",
      }}
      pros={[
        "Bateria de 6.000 mAh com recarga de 90 W",
        "Carregamento sem fio de 15 W",
        "Teleobjetiva de 10 MP com zoom óptico de 3x",
        "Ultrawide e câmera frontal de 50 MP",
        "IP68, IP69 e certificação MIL-STD-810H",
        "12 GB de RAM e Dimensity 8350",
      ]}
      cons={[
        "Três anos de atualizações, menos que Samsung",
        "Tela curva: pode incomodar quem usa película ou capinha justa",
        "Sem entrada para fone e sem microSD",
      ]}
      scores={[
        { label: "Tela", score: "9.0" },
        { label: "Desempenho", score: "8.8" },
        { label: "Câmera", score: "8.8" },
        { label: "Bateria", score: "9.4" },
        { label: "Atualizações", score: "7.0" },
        { label: "Custo-benefício", score: "8.8" },
      ]}
      specs={[
        ["Tela", 'pOLED curva 6,7" • 2712 × 1220 • 120 Hz • HDR10+ • até 4.500 nits'],
        ["Processador", "MediaTek Dimensity 8350 Extreme"],
        ["Memória RAM", "12 GB"],
        ["Armazenamento", "256 GB ou 512 GB, sem microSD"],
        ["Câmera principal", "50 MP Sony LYTIA 700C (f/1.8) com OIS"],
        ["Câmera ultrawide", "50 MP (120°), também para macro"],
        ["Teleobjetiva", "10 MP com zoom óptico de 3x"],
        ["Câmera frontal", "50 MP com vídeo 4K"],
        ["Vídeo", "Até 4K a 30 fps"],
        ["Bateria", "6.000 mAh"],
        ["Carregamento", "90 W com fio • 15 W sem fio • 5 W reverso"],
        ["Proteção", "IP68, IP69, MIL-STD-810H e Gorilla Glass 7i"],
        ["Dimensões e peso", "160,7 × 73,1 × 8,2 mm • 186 g"],
        ["Sistema", "Android 15 • 3 anos de atualizações"],
        ["Preço de lançamento", "R$ 3.999 (256 GB)"],
      ]}
      sections={[
        {
          eyebrow: "Veredito",
          title: "Para quem o Edge 60 Pro faz sentido",
          text: "É para quem quer recursos de aparelho caro, como zoom óptico, recarga sem fio e bateria enorme, pagando preço de intermediário premium. Lançado a R$ 3.999, ele costuma aparecer bem mais barato. Até R$ 2.700, poucos aparelhos entregam tanto.",
        },
        {
          eyebrow: "Bateria",
          title: "A melhor bateria da faixa",
          text: "São 6.000 mAh com recarga de 90 W, além de carregamento sem fio de 15 W e reverso de 5 W para fones e relógios. Para quem usa o celular o dia inteiro fora de casa, é a maior vantagem sobre o Galaxy S25 FE, que tem 4.900 mAh e 45 W.",
        },
        {
          eyebrow: "Câmeras",
          title: "Três câmeras boas, com zoom óptico",
          text: "A principal usa o sensor Sony LYTIA 700C de 50 MP com estabilização óptica. A ultrawide também tem 50 MP, e a teleobjetiva de 10 MP faz zoom óptico de 3x, útil para retratos e objetos distantes. A câmera frontal de 50 MP grava em 4K, o que agrada quem faz vídeos e chamadas.",
        },
        {
          eyebrow: "Desempenho",
          title: "Dimensity 8350 com 12 GB de RAM",
          text: "O Dimensity 8350 Extreme roda jogos pesados e multitarefa com folga. Os 12 GB de RAM ajudam a manter vários apps abertos. Para a maioria das pessoas, é mais desempenho do que o necessário.",
        },
        {
          eyebrow: "Tela e construção",
          title: "Tela curva e resistência acima da média",
          text: "A tela pOLED de 6,7 polegadas é curva nas bordas, com 120 Hz e HDR10+. Ela é bonita, mas a curvatura pode dificultar a aplicação de película. Em resistência, o aparelho tem IP68, IP69 e certificação militar MIL-STD-810H, pesando apenas 186 g.",
        },
        {
          eyebrow: "Comparação",
          title: "Edge 60 Pro ou Galaxy S25 FE?",
          text: "O Edge 60 Pro vence em bateria, recarga, zoom e RAM, e costuma custar menos. O Galaxy S25 FE vence no suporte: são sete anos de atualizações, contra três do Edge. Se você troca de celular a cada dois ou três anos, o Edge é a melhor compra. Se quer ficar com ele por muito tempo, vá de S25 FE.",
        },
      ]}
      finalRecommendation="O Motorola Edge 60 Pro vale a pena até cerca de R$ 2.700 para quem quer bateria enorme, recarga rápida e câmera com zoom óptico. Se você pretende usar o aparelho por mais de três anos, o Galaxy S25 FE é a escolha mais segura. Confira no anúncio se é a versão de 12 GB de RAM."
      faq={[
        {
          question: "O Motorola Edge 60 Pro vale a pena em 2026?",
          answer:
            "Sim, pelo preço atual. Até cerca de R$ 2.700, ele entrega bateria de 6.000 mAh, recarga de 90 W, zoom óptico e IP69. O ponto fraco são os três anos de atualizações.",
        },
        {
          question: "O Edge 60 Pro tem carregamento sem fio?",
          answer: "Sim. Ele carrega sem fio a 15 W e ainda faz carregamento reverso de 5 W.",
        },
        {
          question: "Quantos anos de atualização o Edge 60 Pro recebe?",
          answer: "Três anos de atualizações, segundo a ficha técnica. Ele foi lançado com Android 15.",
        },
        {
          question: "O Edge 60 Pro é à prova d'água?",
          answer:
            "Ele tem certificação IP68 e IP69 em condições de teste. Mesmo assim, evite usar o aparelho na água: danos por líquido costumam não ser cobertos pela garantia.",
        },
        {
          question: "Edge 60 Pro ou Galaxy S25 FE: qual comprar?",
          answer:
            "O Edge 60 Pro para quem quer bateria, recarga rápida e zoom gastando menos. O Galaxy S25 FE para quem quer muitos anos de atualizações.",
        },
      ]}
      relatedLinks={[
        { label: "Melhores celulares Motorola", to: "/melhores-celulares-motorola" },
        { label: "Review Galaxy S25 FE", to: "/review/galaxy-s25-fe" },
        { label: "Review Moto G86 5G", to: "/review/moto-g86-5g" },
        { label: "Melhores celulares até R$ 3.000", to: "/guia/melhores-celulares-ate-3000-reais" },
      ]}
    />
  );
}
