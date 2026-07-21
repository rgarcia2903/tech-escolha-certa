import { createFileRoute } from "@tanstack/react-router";
import { ReviewTemplate } from "@/components/site/ReviewTemplate";

export const Route = createFileRoute("/review/redmi-note-13-pro")({
  head: () => ({
    meta: [
      {
        title:
          "Redmi Note 13 Pro 5G vale a pena em 2026? Review sincero",
      },
      {
        name: "description",
        content:
          "Veja se o Redmi Note 13 Pro 5G ainda vale a pena em 2026: tela, desempenho, câmera, bateria, pontos negativos e para quem ele faz sentido antes de comprar.",
      },
      {
        name: "keywords",
        content:
          "Redmi Note 13 Pro 5G vale a pena em 2026, Redmi Note 13 Pro vale a pena, Redmi Note 13 Pro review, Redmi Note 13 Pro é bom, Redmi Note 13 Pro vs Galaxy A55, melhor Xiaomi custo-benefício",
      },
      {
        property: "og:title",
        content: "Redmi Note 13 Pro 5G vale a pena em 2026?",
      },
      {
        property: "og:description",
        content:
          "Review sincero do Redmi Note 13 Pro 5G com pontos fortes, pontos fracos, câmera, bateria, desempenho e recomendação de compra.",
      },
    ],
  }),
  component: ReviewRedmiNote13Pro,
});

function ReviewRedmiNote13Pro() {
  return (
    <ReviewTemplate
      image="/images/products/redmi-note-13-pro-optimized.webp"
      breadcrumbs={[
        { label: "Home", to: "/" },
        { label: "Celulares", to: "/celulares" },
        { label: "Review Redmi Note 13 Pro" },
      ]}
      eyebrow="Review sincero"
      title="Redmi Note 13 Pro 5G vale a pena em 2026?"
      description="Sim, o Redmi Note 13 Pro 5G ainda vale a pena em 2026 para quem busca muita ficha técnica pelo preço. Ele se destaca pela tela AMOLED, bom desempenho, câmera principal de 200 MP e carregamento rápido, mas exige atenção ao software e ao suporte de atualizações."
      updatedAt="Atualizado em 2026"
      readingTime="Leitura • 7 min"
      productName="Redmi Note 13 Pro 5G"
      priceLabel="Conferir preço atualizado"
      overallScore="9.0"
      verdictShort="O Redmi Note 13 Pro 5G vale a pena em 2026 se você quer tela excelente, desempenho forte, carregamento rápido e boa ficha técnica sem pagar preço de topo de linha. Ele só não é a melhor escolha para quem prioriza software mais limpo, suporte mais previsível e câmeras mais consistentes à noite."
      affiliateHref="https://www.mercadolivre.com.br/social/gari4140335?matt_word=gari4140335&matt_tool=94872161&forceInApp=true&ref=BGtpHQ2Gd7gu3NJ6rm%2BaBDzcdVEsJkmjUCfPoUqsyMdISk7qaEcLyOhgcKjTflKbMEvjvhG39ybzwLuBiHmGufxF%2FFBwYPJPvak9%2FHtxxTfaEdzk4I0k92KRruIQTVCVFPTIyFEF3xDzYe3eHCv%2Bo6MC6%2FXnj3uM2pxoKFhaJpyQgtgoF2cqW2%2BOv8BcdH0IMZlkW0I%3D"
      affiliate={{
        title: "Conferir preço do Redmi Note 13 Pro 5G",
        description:
          "Veja o preço atualizado, parcelamento, disponibilidade e condições do Redmi Note 13 Pro 5G no Mercado Livre antes de comprar.",
        buttonText: "Ver Redmi Note 13 Pro no Mercado Livre",
        highlight: "Tela AMOLED • Câmera 200 MP • Carregamento rápido",
      }}
      pros={[
        "Tela AMOLED de alta qualidade com ótima fluidez",
        "Carregamento rápido muito acima de vários concorrentes",
        "Boa performance para aplicativos, redes sociais e multitarefa",
        "Excelente custo-benefício quando aparece em promoção",
        "Câmera principal de alta resolução com bons resultados durante o dia",
        "Ótima escolha para quem quer ficha técnica forte pelo preço",
      ]}
      cons={[
        "Interface pode não agradar quem prefere sistema mais limpo",
        "Pode vir com apps pré-instalados em excesso",
        "Câmera noturna fica abaixo dos melhores Samsung",
        "Atualizações e suporte tendem a ser menos previsíveis que Samsung",
        "Experiência geral é menos refinada que Galaxy A55",
      ]}
      scores={[
        { label: "Tela", score: "9.3" },
        { label: "Desempenho", score: "8.9" },
        { label: "Câmera", score: "8.5" },
        { label: "Bateria", score: "8.8" },
        { label: "Carregamento", score: "9.4" },
        { label: "Custo-benefício", score: "9.4" },
      ]}
      specs={[
        ["Tela", 'AMOLED 6,67" • 120 Hz'],
        ["Processador", "Snapdragon 7s Gen 2"],
        ["Memória RAM", "8 GB / 12 GB, conforme versão"],
        ["Armazenamento", "256 GB, conforme versão"],
        ["Câmera principal", "200 MP com OIS"],
        ["Câmera frontal", "16 MP"],
        ["Bateria", "5.100 mAh"],
        ["Carregamento", "67 W com fio"],
        ["Conector", "USB-C"],
        ["Sistema", "Android com HyperOS / MIUI, conforme atualização"],
      ]}
      sections={[
        {
          eyebrow: "Resposta rápida",
          title: "Redmi Note 13 Pro 5G vale a pena em 2026?",
          text:
            "Vale a pena para quem procura um intermediário forte com tela bonita, bom desempenho, bateria consistente e carregamento rápido. Ele é especialmente interessante quando aparece com preço competitivo. A ressalva fica para quem prefere uma experiência de software mais limpa e um histórico de atualizações mais previsível.",
        },
        {
          eyebrow: "Para quem faz sentido",
          title: "É uma boa compra para quem quer ficha técnica forte",
          text:
            "O Redmi Note 13 Pro 5G combina tela AMOLED, processador competente, câmera principal de alta resolução e carregamento rápido. Por isso, faz sentido para quem usa bastante redes sociais, vídeos, navegação, aplicativos do dia a dia e quer um celular com aparência e especificações acima da média na faixa intermediária.",
        },
        {
          eyebrow: "Tela e design",
          title: "Tela AMOLED é um dos grandes destaques",
          text:
            "A tela do Redmi Note 13 Pro 5G é um dos seus principais argumentos de compra. O painel AMOLED com 120 Hz entrega ótima fluidez, bom contraste e excelente experiência para vídeos, redes sociais, navegação e jogos.",
        },
        {
          eyebrow: "Desempenho",
          title: "Bom desempenho para uso diário e jogos populares",
          text:
            "O desempenho é forte para a categoria. O Redmi Note 13 Pro 5G lida bem com aplicativos populares, multitarefa, redes sociais e jogos competitivos. Ele não é um gamer extremo como alguns modelos Poco, mas entrega ótima performance pelo preço.",
        },
        {
          eyebrow: "Câmeras",
          title: "Câmera principal forte durante o dia",
          text:
            "A câmera principal de 200 MP entrega bons resultados em ambientes bem iluminados, com bastante detalhe e cores chamativas. À noite, o processamento não é tão consistente quanto em alguns modelos Samsung, mas ainda atende bem para uso casual.",
        },
        {
          eyebrow: "Bateria e carregamento",
          title: "Carregamento rápido é um diferencial real",
          text:
            "A bateria entrega boa autonomia para um dia de uso, mas o grande destaque é o carregamento rápido. Essa é uma vantagem importante sobre modelos Samsung da mesma faixa, principalmente para quem precisa recuperar carga em pouco tempo.",
        },
        {
          eyebrow: "Software",
          title: "HyperOS/MIUI divide opiniões",
          text:
            "O sistema da Xiaomi oferece muitos recursos e personalizações, mas pode incomodar quem prefere uma experiência mais limpa. Alguns usuários gostam da quantidade de funções, enquanto outros preferem a estabilidade e simplicidade da One UI da Samsung.",
        },
        {
          eyebrow: "Antes de comprar",
          title: "Confira preço, versão e vendedor",
          text:
            "Antes de comprar o Redmi Note 13 Pro 5G, confira se o anúncio é da versão desejada, se o produto é novo, qual é a garantia oferecida, a reputação do vendedor, o prazo de entrega e o valor final parcelado. A recomendação muda bastante dependendo do preço encontrado no momento.",
        },
      ]}
      finalRecommendation="O Redmi Note 13 Pro 5G é uma excelente escolha para quem prioriza custo-benefício, tela de qualidade, bom desempenho e carregamento rápido. Se o foco for ficha técnica pelo menor preço, ele é um dos modelos mais fortes da categoria. Se você prioriza software mais refinado, suporte e experiência mais previsível, o Galaxy A55 pode fazer mais sentido."
      faq={[
        {
          question: "O Redmi Note 13 Pro 5G vale a pena em 2026?",
          answer:
            "Sim. Ele ainda vale a pena em 2026 para quem busca tela AMOLED, bom desempenho, carregamento rápido e boa ficha técnica na faixa intermediária. Só vale comparar o preço com Galaxy A55, Poco X6 Pro e Redmi Note 14 Pro+ antes de decidir.",
        },
        {
          question: "O Redmi Note 13 Pro 5G é bom?",
          answer:
            "Sim. O Redmi Note 13 Pro 5G é bom para uso diário, redes sociais, vídeos, multitarefa e jogos populares. Os principais destaques são a tela, o carregamento rápido e a câmera principal durante o dia.",
        },
        {
          question: "O Redmi Note 13 Pro 5G é melhor que o Galaxy A55?",
          answer:
            "Depende do perfil. O Redmi entrega mais ficha técnica e carregamento mais rápido. O Galaxy A55 oferece construção mais premium, software mais refinado e suporte mais previsível.",
        },
        {
          question: "O Redmi Note 13 Pro 5G é bom para jogos?",
          answer:
            "Sim, ele roda bem jogos populares e tem bom desempenho para a categoria. Para jogos muito pesados, modelos Poco podem ser mais indicados.",
        },
        {
          question: "A câmera do Redmi Note 13 Pro 5G é boa?",
          answer:
            "A câmera principal é boa durante o dia e entrega bastante detalhe. Em fotos noturnas, o resultado é correto, mas não é o ponto mais forte do aparelho.",
        },
      ]}
      relatedLinks={[
        {
          label: "Review Redmi Note 14 Pro+ 5G",
          to: "/review/redmi-note-14-pro-plus",
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
        {
          label: "Review Galaxy A55",
          to: "/review/galaxy-a55",
        },
      ]}
    />
  );
}
