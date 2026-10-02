import { REDMI_NOTE_14_PRO_PLUS_AFFILIATE_URL } from "@/lib/affiliate-links";
import { createFileRoute } from "@tanstack/react-router";
import { ReviewTemplate } from "@/components/site/ReviewTemplate";

const CANONICAL = "https://techescolhacerta.com.br/review/redmi-note-14-pro-plus";
const HERO_IMAGE =
  "https://techescolhacerta.com.br/images/products/redmi-note-14-pro-plus-optimized.webp";
const PAGE_TITLE = "Redmi Note 14 Pro+ 5G vale a pena em 2026? Review e problemas";
const PAGE_DESCRIPTION =
  "Sim, o Redmi Note 14 Pro+ 5G vale a pena para quem prioriza IP68, tela AMOLED e carga de 120 W. Veja problemas, preço e quando comprar em 2026.";

const PROS = [
  "Tela AMOLED 1.5K de 120 Hz com excelente qualidade visual",
  "Câmera principal de 200 MP com estabilização óptica",
  "Carregamento HyperCharge de 120 W muito rápido",
  "Boa bateria de 5.110 mAh para uso diário",
  "Snapdragon 7s Gen 3 entrega desempenho sólido na categoria",
  "Versões com bastante memória RAM e armazenamento",
  "Construção mais robusta, com certificação IP68",
];

const CONS = [
  "Preço pode ficar próximo de modelos Samsung mais equilibrados",
  "Câmeras auxiliares são menos impressionantes que a principal",
  "HyperOS pode não agradar quem prefere sistema mais limpo",
  "Atualizações ainda tendem a ser menos previsíveis que Samsung",
  "Pode não ser a melhor escolha para quem quer gastar pouco",
];

const FAQ = [
  {
    question: "O Redmi Note 14 Pro+ 5G vale a pena em 2026?",
    answer:
      "Sim. Ele vale a pena para quem quer um Xiaomi mais completo, com tela de alta qualidade, câmera principal de 200 MP, carregamento de 120 W, proteção IP68 e bom desempenho geral.",
  },
  {
    question: "Quais são os problemas do Redmi Note 14 Pro+ 5G?",
    answer:
      "Os principais pontos de atenção são o preço, as câmeras auxiliares mais simples, o HyperOS com aplicativos pré-instalados e uma política de atualizações menos previsível que a da Samsung.",
  },
  {
    question: "Qual a diferença entre Redmi Note 14 Pro+ e Redmi Note 13 Pro?",
    answer:
      "O Redmi Note 14 Pro+ traz Snapdragon 7s Gen 3, carregamento de 120 W, proteção IP68 e construção mais robusta. O Redmi Note 13 Pro pode compensar quando custa mais de 20% menos.",
  },
  {
    question: "O Redmi Note 14 Pro+ 5G é bom para jogos?",
    answer:
      "Sim. O Snapdragon 7s Gen 3 e a tela de 120 Hz entregam boa experiência em jogos populares. Para jogos muito pesados, modelos da linha Poco ainda podem oferecer mais desempenho pelo preço.",
  },
  {
    question: "A câmera do Redmi Note 14 Pro+ 5G é boa?",
    answer:
      "A câmera principal de 200 MP com OIS entrega boas fotos, principalmente durante o dia. As câmeras ultrawide e macro são mais simples, então o destaque real fica na lente principal.",
  },
  {
    question: "Redmi Note 14 Pro+ ou Galaxy A55: qual escolher?",
    answer:
      "Escolha o Redmi Note 14 Pro+ se você prioriza carregamento rápido, tela e ficha técnica. Escolha o Galaxy A55 se prefere software mais refinado e atualizações mais previsíveis.",
  },
];

export const Route = createFileRoute("/review/redmi-note-14-pro-plus")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      {
        name: "keywords",
        content:
          "Redmi Note 14 Pro+ 5G vale a pena em 2026, Redmi Note 14 Pro Plus review, problemas Redmi Note 14 Pro+, Redmi Note 14 Pro+ é bom, Redmi Note 14 Pro Plus 5G",
      },
      { property: "og:type", content: "article" },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:url", content: CANONICAL },
      { property: "og:image", content: HERO_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
      { name: "twitter:image", content: HERO_IMAGE },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Redmi Note 14 Pro+ 5G",
          image: [HERO_IMAGE],
          description: PAGE_DESCRIPTION,
          brand: { "@type": "Brand", name: "Xiaomi" },
          url: CANONICAL,
          review: {
            "@type": "Review",
            name: PAGE_TITLE,
            author: {
              "@type": "Organization",
              name: "Tech Escolha Certa",
              url: "https://techescolhacerta.com.br/sobre",
            },
            dateModified: "2026-10-02",
            reviewRating: {
              "@type": "Rating",
              ratingValue: 9.2,
              bestRating: 10,
              worstRating: 0,
            },
            positiveNotes: {
              "@type": "ItemList",
              itemListElement: PROS.map((name, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name,
              })),
            },
            negativeNotes: {
              "@type": "ItemList",
              itemListElement: CONS.map((name, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name,
              })),
            },
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map(({ question, answer }) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: { "@type": "Answer", text: answer },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://techescolhacerta.com.br/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Celulares",
              item: "https://techescolhacerta.com.br/celulares",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Review Redmi Note 14 Pro+ 5G",
              item: CANONICAL,
            },
          ],
        }),
      },
    ],
  }),
  component: ReviewRedmiNote14ProPlus,
});

function ReviewRedmiNote14ProPlus() {
  return (
    <ReviewTemplate
      image="/images/products/redmi-note-14-pro-plus-optimized.webp"
      breadcrumbs={[
        { label: "Home", to: "/" },
        { label: "Celulares", to: "/celulares" },
        { label: "Review Redmi Note 14 Pro+ 5G" },
      ]}
      eyebrow="Review completo"
      title="Redmi Note 14 Pro+ 5G vale a pena em 2026?"
      description="Sim — o Redmi Note 14 Pro+ 5G vale a pena para quem quer tela AMOLED 1.5K, proteção IP68 e carregamento de 120 W. O preço e as câmeras auxiliares são os principais pontos de atenção."
      updatedAt="Atualizado em outubro de 2026"
      readingTime="Leitura • 8 min"
      productName="Redmi Note 14 Pro+ 5G"
      priceLabel="Ver preço atual"
      overallScore="9.2"
      verdictShort="Sim — o Redmi Note 14 Pro+ 5G vale a pena para quem quer um Xiaomi intermediário premium com IP68, tela de alto nível, câmera principal de 200 MP e carregamento de 120 W. Ele perde atratividade quando custa muito mais que o Redmi Note 13 Pro."
      affiliateHref={REDMI_NOTE_14_PRO_PLUS_AFFILIATE_URL}
      affiliate={{
        title: "Redmi Note 14 Pro+ 5G: confira preço e versão",
        description:
          "Confira se a oferta é do modelo 5G com Snapdragon 7s Gen 3, preço, parcelamento e disponibilidade.",
        buttonText: "Conferir preço atual",
        highlight: "IP68 • AMOLED 120 Hz • Câmera 200 MP • Carga de 120 W",
      }}
      decision={{
        bestFor:
          "Você quer um Redmi mais completo, com câmera principal forte, IP68 e recarga de 120 W, e ele custa até cerca de 15% a mais que o Note 13 Pro.",
        caution:
          "A diferença para o Redmi Note 13 Pro passar de 20%; o modelo anterior normalmente entrega melhor custo-benefício.",
        comparisonHref: "/comparativo/redmi-note-13-pro-vs-redmi-note-14-pro-plus",
        comparisonLabel: "Comparar Note 14 Pro+ e Note 13 Pro",
      }}
      pros={PROS}
      cons={CONS}
      scores={[
        { label: "Tela", score: "9.5" },
        { label: "Desempenho", score: "9.1" },
        { label: "Câmera", score: "8.9" },
        { label: "Bateria", score: "9.0" },
        { label: "Carregamento", score: "9.8" },
        { label: "Custo-benefício", score: "8.8" },
      ]}
      specs={[
        ["Tela", 'AMOLED 6,67" • 1.5K • 120 Hz'],
        ["Processador", "Snapdragon 7s Gen 3"],
        ["Memória RAM", "12 GB, conforme versão"],
        ["Armazenamento", "512 GB, conforme versão"],
        ["Câmera principal", "200 MP com OIS"],
        ["Câmera ultrawide", "8 MP"],
        ["Câmera macro", "2 MP"],
        ["Câmera frontal", "20 MP"],
        ["Bateria", "5.110 mAh"],
        ["Carregamento", "120 W HyperCharge"],
        ["Proteção", "IP68"],
        ["Sistema", "Android com HyperOS"],
      ]}
      sections={[
        {
          eyebrow: "Veredito",
          title: "O Redmi Note 14 Pro+ 5G é bom?",
          text: "Sim. O Redmi Note 14 Pro+ 5G é uma boa escolha para quem quer um Xiaomi mais completo, com foco em tela, câmera principal, carregamento rápido e bastante memória. Ele mira quem quer mais do que um intermediário básico, mas ainda não quer pagar preço de topo de linha.",
        },
        {
          eyebrow: "Tela e construção",
          title: "Tela 1.5K de 120 Hz é um dos pontos fortes",
          text: "A tela AMOLED de 6,67 polegadas com resolução 1.5K e taxa de atualização de 120 Hz entrega uma experiência muito boa para vídeos, redes sociais, leitura, navegação e jogos. É um painel acima da média para quem valoriza qualidade visual.",
        },
        {
          eyebrow: "Desempenho",
          title: "Snapdragon 7s Gen 3 dá conta do uso pesado",
          text: "O Snapdragon 7s Gen 3 oferece desempenho sólido para aplicativos, multitarefa, redes sociais, vídeos e jogos populares. Ele não é um chip topo de linha, mas entrega uma experiência rápida e consistente para a maioria dos usuários.",
        },
        {
          eyebrow: "Câmeras",
          title: "Câmera principal de 200 MP é o destaque",
          text: "A câmera principal de 200 MP com OIS é o grande atrativo do conjunto. Ela tende a entregar fotos com bom nível de detalhe, especialmente durante o dia. As câmeras auxiliares são mais simples, então o foco real está na câmera principal.",
        },
        {
          eyebrow: "Bateria e carregamento",
          title: "Carregamento de 120 W é o maior diferencial",
          text: "A bateria de 5.110 mAh oferece boa autonomia para um dia de uso, mas o grande destaque é o carregamento HyperCharge de 120 W. Para quem costuma carregar o celular rapidamente antes de sair, esse é um diferencial muito forte frente a vários concorrentes.",
        },
        {
          eyebrow: "Software",
          title: "HyperOS tem recursos, mas divide opiniões",
          text: "O HyperOS traz muitas funções e opções de personalização, o que agrada usuários que gostam de controle e recursos extras. Por outro lado, quem prefere uma experiência mais limpa e previsível pode se adaptar melhor à One UI da Samsung.",
        },
        {
          eyebrow: "Comparação",
          title: "Redmi Note 14 Pro+ ou Redmi Note 13 Pro?",
          text: "O Redmi Note 14 Pro+ faz mais sentido para quem quer um conjunto mais atual, carregamento muito mais rápido, melhor construção e desempenho mais moderno. Já o Redmi Note 13 Pro ainda pode ser melhor compra se estiver bem mais barato.",
        },
        {
          eyebrow: "Preço e custo-benefício",
          title: "Quando o Redmi Note 14 Pro+ é a melhor compra?",
          text: "Use o Redmi Note 13 Pro como referência. Se o Note 14 Pro+ custar até cerca de 15% a mais, o IP68, a carga de 120 W e o chip mais atual justificam a diferença. Acima de 20%, o Note 13 Pro normalmente é a escolha mais racional. Entre 15% e 20%, pague mais apenas se proteção e recarga rápida forem prioridades.",
        },
      ]}
      finalRecommendation="Sim — o Redmi Note 14 Pro+ 5G vale a pena para quem busca tela excelente, IP68, câmera principal forte, bom desempenho e carregamento extremamente rápido. A melhor compra acontece quando ele custa até cerca de 15% a mais que o Redmi Note 13 Pro. Acima de 20%, compare com atenção antes de pagar pela geração mais nova."
      faq={FAQ}
      relatedLinks={[
        {
          label: "Review Redmi Note 13 Pro 5G",
          to: "/review/redmi-note-13-pro",
        },
        {
          label: "Redmi Note 13 Pro vs Redmi Note 14 Pro+",
          to: "/comparativo/redmi-note-13-pro-vs-redmi-note-14-pro-plus",
        },
        {
          label: "Galaxy A55 vs Redmi Note 13 Pro",
          to: "/comparativo/galaxy-a55-vs-redmi-note-13-pro",
        },
        {
          label: "Melhores celulares Xiaomi",
          to: "/melhores-celulares-xiaomi",
        },
        {
          label: "Melhores celulares até R$ 2.500",
          to: "/melhores-celulares-ate-2500",
        },
      ]}
    />
  );
}
