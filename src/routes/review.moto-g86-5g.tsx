import { documentaryArticle } from "@/lib/editorial-schema";
import { MOTO_G86_AMAZON_URL } from "@/lib/affiliate-links";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";
import { createFileRoute } from "@tanstack/react-router";
import { ReviewTemplate } from "@/components/site/ReviewTemplate";

// Ficha conferida em 28/10/2026: Canaltech e Hardware.com.br (lançamento no Brasil, R$ 2.499),
// Oficina da Net (Android 15, 2 atualizações de sistema e 4 anos de segurança).
// Preço visto na Amazon em 28/10/2026: R$ 1.799,10, vendido pela Amazon.
const PAGE_TITLE = fairPriceTitle("moto-g86-5g");
const PAGE_DESCRIPTION = fairPriceDescription("moto-g86-5g");

export const Route = createFileRoute("/review/moto-g86-5g")({
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
        children: JSON.stringify(documentaryArticle("moto-g86-5g", PAGE_TITLE, PAGE_DESCRIPTION)),
      },
    ],
  }),
  component: ReviewMotoG86,
});

function ReviewMotoG86() {
  return (
    <ReviewTemplate
      breadcrumbs={[
        { label: "Home", to: "/" },
        { label: "Celulares", to: "/celulares" },
        { label: "Review Moto G86 5G" },
      ]}
      eyebrow="Análise editorial"
      title="Moto G86 5G vale a pena em 2026?"
      description="Sim. Pelo preço que vem sendo praticado, é um dos intermediários mais completos: tela pOLED 1.5K muito brilhante, câmera Sony com estabilização óptica, IP69 e carregador na caixa. Só não é o mais indicado para quem joga títulos pesados."
      updatedAt="Atualizado em outubro de 2026"
      readingTime="Leitura • 6 min"
      productName="Moto G86 5G"
      priceLabel="Ver preço na Amazon"
      overallScore="8.6"
      verdictShort="Sim — abaixo de R$ 1.900, o Moto G86 5G é uma das melhores compras intermediárias de 2026. A tela pOLED 1.5K, a câmera com estabilização óptica e a resistência IP68/IP69 estão acima da média da faixa. Para jogos pesados, o Poco X7 Pro é mais forte."
      affiliateHref={MOTO_G86_AMAZON_URL}
      affiliate={{
        title: "Moto G86 5G: confira o preço de hoje",
        description:
          "Compare o preço na Amazon e no Mercado Livre. Na nossa checagem de outubro de 2026, a Amazon vendia a versão de 256 GB bem abaixo do preço de lançamento.",
        buttonText: "Ver Moto G86 5G na Amazon",
        highlight: "pOLED 1.5K • Sony LYTIA 600 com OIS • IP68 e IP69 • 33 W na caixa",
      }}
      fairPriceId="moto-g86-5g"
      decision={{
        bestFor:
          "Você quer uma tela excelente para vídeos, fotos com estabilização óptica e um aparelho resistente, sem gastar mais de R$ 2.000.",
        caution:
          "Você joga títulos pesados por horas ou quer muitos anos de atualização de sistema; o G86 recebe só duas versões novas do Android.",
        comparisonHref: "/review/redmi-note-15-5g",
        comparisonLabel: "Comparar com o Redmi Note 15 5G",
      }}
      pros={[
        "Tela pOLED de 6,7\" com resolução 1.5K, 120 Hz e pico de 4.500 nits",
        "Câmera principal Sony LYTIA 600 de 50 MP com estabilização óptica",
        "Resistência IP68 e IP69 e Gorilla Glass 7i",
        "Carregador de 33 W incluído na caixa",
        "Bateria de 5.200 mAh",
        "Alto-falantes estéreo com Dolby Atmos",
      ]}
      cons={[
        "Dimensity 7300 fica atrás de rivais focados em jogos",
        "Só 2 atualizações de Android (4 anos de segurança)",
        "Ultrawide simples, abaixo da câmera principal",
        "Sem carregamento sem fio",
      ]}
      scores={[
        { label: "Tela", score: "9.3" },
        { label: "Desempenho", score: "8.0" },
        { label: "Câmera", score: "8.4" },
        { label: "Bateria", score: "8.7" },
        { label: "Resistência", score: "9.3" },
        { label: "Custo-benefício", score: "8.8" },
      ]}
      specs={[
        ["Tela", 'pOLED 6,7" • 1.5K (2712 × 1220) • 120 Hz • até 4.500 nits'],
        ["Processador", "MediaTek Dimensity 7300 (4 nm)"],
        ["Memória RAM", "8 GB (mais RAM virtual)"],
        ["Armazenamento", "256 GB"],
        ["Câmera principal", "50 MP Sony LYTIA 600 com OIS"],
        ["Câmera ultrawide", "Ultra-angular com modo macro"],
        ["Câmera frontal", "32 MP"],
        ["Bateria", "5.200 mAh"],
        ["Carregamento", "33 W com carregador na caixa"],
        ["Proteção", "IP68, IP69 e Gorilla Glass 7i"],
        ["Sistema", "Android 15 • 2 atualizações de sistema e 4 anos de segurança"],
        ["Preço de lançamento", "R$ 2.499 (sugerido pela Motorola)"],
      ]}
      sections={[
        {
          eyebrow: "Veredito",
          title: "Para quem o Moto G86 5G faz sentido",
          text: "O G86 é para quem quer um intermediário equilibrado, com tela de aparelho mais caro e boa câmera principal. Ele foi lançado a R$ 2.499 e, na nossa checagem de outubro de 2026, era vendido bem abaixo disso. Nessa faixa, é difícil achar uma tela melhor.",
        },
        {
          eyebrow: "Tela",
          title: "A melhor parte do aparelho",
          text: "A tela pOLED de 6,7 polegadas tem resolução 1.5K, 120 Hz e pico de 4.500 nits, segundo a Motorola. Na prática, é uma tela nítida, com bom contraste e fácil de ler sob o sol. Para vídeos e redes sociais, está acima da média dos intermediários.",
        },
        {
          eyebrow: "Desempenho",
          title: "Rápido no dia a dia, limitado em jogos pesados",
          text: "O Dimensity 7300 é suficiente para uso diário, multitarefa e jogos populares. Em jogos mais exigentes, é preciso reduzir os gráficos. Quem joga muito encontra mais desempenho no Poco X7 Pro, que custa um pouco mais.",
        },
        {
          eyebrow: "Câmeras",
          title: "Estabilização óptica faz diferença",
          text: "A câmera principal usa o sensor Sony LYTIA 600 de 50 MP com estabilização óptica (OIS), algo pouco comum nesta faixa. Isso ajuda em fotos noturnas e em vídeos feitos andando. A ultrawide, que também faz macro, é mais simples. A câmera frontal tem 32 MP.",
        },
        {
          eyebrow: "Bateria e resistência",
          title: "Bateria grande, carregador incluído e IP69",
          text: "A bateria de 5.200 mAh aguenta o dia inteiro, e o carregador de 33 W vem na caixa. O aparelho tem certificação IP68 e IP69 e vidro Gorilla Glass 7i na frente, uma combinação que poucos rivais oferecem.",
        },
        {
          eyebrow: "Comparação",
          title: "Moto G86 5G ou Redmi Note 15 5G?",
          text: "Na nossa checagem de outubro de 2026, os dois custavam quase o mesmo. O G86 tem tela de resolução maior, câmera com estabilização óptica e resistência IP69. O Redmi Note 15 5G tem bateria um pouco maior e processador Snapdragon. Para quem prioriza tela e câmera, o G86 leva vantagem.",
        },
      ]}
      finalRecommendation="O Moto G86 5G vale a pena até cerca de R$ 1.900 para quem quer uma tela excelente, boa câmera principal e um aparelho resistente. Se você joga muito, compare com o Poco X7 Pro. Antes de comprar, confira se o anúncio é da versão 5G com 256 GB."
      faq={[
        {
          question: "O Moto G86 5G vale a pena em 2026?",
          answer:
            "Sim, principalmente abaixo de R$ 1.900. A tela pOLED 1.5K, a câmera com estabilização óptica e a resistência IP69 estão acima da média da faixa.",
        },
        {
          question: "O Moto G86 é bom para jogos?",
          answer:
            "Roda bem os jogos populares. Para títulos pesados em gráficos altos, o Poco X7 Pro é mais indicado.",
        },
        {
          question: "O Moto G86 vem com carregador?",
          answer: "Sim. Segundo a Motorola, o carregador TurboPower de 33 W vem na caixa.",
        },
        {
          question: "Quantas atualizações o Moto G86 vai receber?",
          answer:
            "Duas atualizações de sistema e quatro anos de atualizações de segurança. Ele foi lançado com Android 15.",
        },
        {
          question: "Moto G86 ou Moto G56: qual comprar?",
          answer:
            "O G86, se o orçamento permitir. Ele tem tela pOLED em vez de LCD, câmera com estabilização óptica e processador mais rápido.",
        },
      ]}
      relatedLinks={[
        { label: "Review Redmi Note 15 5G", to: "/review/redmi-note-15-5g" },
        { label: "Review Poco X7 Pro", to: "/review/poco-x7-pro" },
        { label: "Review Moto G56 5G", to: "/review/moto-g56-5g" },
      ]}
    />
  );
}
