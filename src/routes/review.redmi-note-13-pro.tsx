import { createFileRoute } from "@tanstack/react-router";
import { ReviewTemplate } from "@/components/site/ReviewTemplate";

export const Route = createFileRoute("/review/redmi-note-13-pro")({
  head: () => ({
    meta: [
      {
        title:
          "Redmi Note 13 Pro 5G vale a pena em 2026? Review completo e honesto",
      },
      {
        name: "description",
        content:
          "Redmi Note 13 Pro 5G vale a pena em 2026? Análise completa com tela, desempenho, câmera, bateria, carregamento, pontos positivos, negativos e comparação com Galaxy A55.",
      },
      {
        name: "keywords",
        content:
          "Redmi Note 13 Pro 5G vale a pena, Redmi Note 13 Pro review, Redmi Note 13 Pro é bom, Redmi Note 13 Pro vs Galaxy A55, melhor Xiaomi custo-benefício",
      },
      {
        property: "og:title",
        content: "Redmi Note 13 Pro 5G vale a pena em 2026?",
      },
      {
        property: "og:description",
        content:
          "Análise editorial completa do Redmi Note 13 Pro 5G para descobrir se ele ainda é uma das melhores compras custo-benefício.",
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
      eyebrow="Review completo"
      title="Redmi Note 13 Pro 5G vale a pena em 2026? Review completo e honesto"
      description="O Redmi Note 13 Pro 5G segue como uma das opções mais fortes para quem busca custo-benefício, tela bonita, bom desempenho, câmera de alta resolução e carregamento rápido sem pagar preço de topo de linha."
      updatedAt="Atualizado em 2026"
      readingTime="Leitura • 7 min"
      productName="Redmi Note 13 Pro 5G"
      priceLabel="Ver preço atualizado"
      overallScore="9.0"
      verdictShort="O Redmi Note 13 Pro 5G vale a pena para quem quer muita ficha técnica pelo preço. Ele entrega ótima tela, desempenho forte, carregamento rápido e bom conjunto geral, mas perde para Samsung em software mais refinado e suporte mais previsível."
      affiliateHref="https://www.mercadolivre.com.br/smartphone-redmi-note-13-pro-5g-256gb-8ram-cnfc-cor-preto/p/MLB39445846?pdp_filters=item_id%3AMLB4162070017&matt_tool=38524122"
      affiliate={{
        title: "Redmi Note 13 Pro 5G com melhor preço hoje",
        description:
          "Confira preço atualizado, parcelamento e disponibilidade do Redmi Note 13 Pro 5G no Mercado Livre.",
        buttonText: "Ver Redmi Note 13 Pro no Mercado Livre",
        highlight: "Tela AMOLED • Carregamento rápido • Ótimo custo-benefício",
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
          eyebrow: "Tela e design",
          title: "Tela AMOLED é um dos grandes destaques",
          text:
            "A tela do Redmi Note 13 Pro 5G é um dos seus principais argumentos de compra. O painel AMOLED com 120 Hz entrega ótima fluidez, bom contraste e excelente experiência para vídeos, redes sociais, navegação e jogos.",
        },
        {
          eyebrow: "Desempenho",
          title: "Bom desempenho para quem quer custo-benefício",
          text:
            "O desempenho é forte para a categoria. O Redmi Note 13 Pro 5G lida bem com aplicativos populares, multitarefa, redes sociais e jogos competitivos. Ele não é um gamer extremo como alguns modelos Poco, mas entrega ótima performance pelo preço.",
        },
        {
          eyebrow: "Câmeras",
          title: "Câmera principal forte durante o dia",
          text:
            "A câmera principal de alta resolução entrega bons resultados em ambientes bem iluminados, com bastante detalhe e cores chamativas. À noite, o processamento não é tão consistente quanto em alguns modelos Samsung, mas ainda atende bem para uso casual.",
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
      ]}
      finalRecommendation="O Redmi Note 13 Pro 5G é uma excelente escolha para quem prioriza custo-benefício, tela de qualidade, bom desempenho e carregamento rápido. Se o foco for ficha técnica pelo menor preço, ele é um dos modelos mais fortes da categoria. Se você prioriza software mais refinado, suporte e experiência mais previsível, o Galaxy A55 pode fazer mais sentido."
      faq={[
        {
          question: "O Redmi Note 13 Pro 5G vale a pena em 2026?",
          answer:
            "Sim. Ele ainda é uma das opções mais interessantes para quem busca custo-benefício, tela boa, carregamento rápido e desempenho forte na faixa intermediária.",
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







