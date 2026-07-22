import { createFileRoute } from "@tanstack/react-router";
import { ReviewTemplate } from "@/components/site/ReviewTemplate";

export const Route = createFileRoute("/review/poco-x6-pro")({
  head: () => ({
    meta: [
      {
        title: "Poco X6 Pro compensa em 2026? Review sincero",
      },
      {
        name: "description",
        content:
          "Veja se o Poco X6 Pro ainda compensa em 2026: desempenho, jogos, tela, bateria, câmeras, pontos negativos e comparação com Poco X7 Pro antes de comprar.",
      },
      {
        name: "keywords",
        content:
          "Poco X6 Pro compensa em 2026, Poco X6 Pro vale a pena em 2026, Poco X6 Pro review, Poco X6 Pro é bom, Poco X6 Pro para jogos, Poco X6 Pro vs Poco X7 Pro",
      },
      {
        property: "og:title",
        content: "Poco X6 Pro compensa em 2026?",
      },
      {
        property: "og:description",
        content:
          "Review sincero do Poco X6 Pro com foco em desempenho, jogos, tela, bateria, câmeras e recomendação de compra.",
      },
    ],
  }),
  component: ReviewPocoX6Pro,
});

function ReviewPocoX6Pro() {
  return (
    <ReviewTemplate
      image="/images/products/poco-x6-pro-optimized.webp"
      breadcrumbs={[
        { label: "Home", to: "/" },
        { label: "Celulares", to: "/celulares" },
        { label: "Review Poco X6 Pro" },
      ]}
      eyebrow="Review sincero"
      title="Poco X6 Pro compensa em 2026?"
      description="Sim, o Poco X6 Pro ainda compensa em 2026 para quem prioriza desempenho, jogos, tela AMOLED fluida e carregamento rápido. Ele continua sendo uma opção forte entre os intermediários, mas já precisa ser comparado com o Poco X7 Pro antes da compra."
      updatedAt="Atualizado em 2026"
      readingTime="Leitura • 7 min"
      productName="Poco X6 Pro"
      priceLabel="Conferir preço atualizado"
      overallScore="8.9"
      verdictShort="O Poco X6 Pro compensa em 2026 se você quer potência, jogos, tela boa e carregamento rápido por um preço competitivo. Ele não é a melhor escolha para quem prioriza câmeras, acabamento premium ou atualizações mais previsíveis."
      affiliateHref="https://www.mercadolivre.com.br/social/gari4140335?matt_word=gari4140335&matt_tool=94872161&forceInApp=true&ref=BNcRGlKdJOfT6JoH3E5fZGIfv7c24CXTT3VxCIOml%2BVEr9jpSKxFF7Hjgu%2F2OHm3qzTcjdy2zGZmVxFSJuMa%2BKFSXlB2TY0GDX7lrtHOcSbNH%2B1QkMcVpeseWTif%2FPnEXCEL14RtFO4wSnZ6svrG62ZYOPj6RGfs%2BNBdzymz8MVrIyQhE%2BWL3C6XatHNbIAwzCnEXMc%3D"
      affiliate={{
        title: "Conferir preço do Poco X6 Pro",
        description:
          "Veja o preço atualizado, parcelamento, disponibilidade e condições do Poco X6 Pro no Mercado Livre antes de comprar.",
        buttonText: "Ver Poco X6 Pro no Mercado Livre",
        highlight: "Desempenho forte • Tela AMOLED • Foco em jogos",
      }}
      pros={[
        "Desempenho muito forte para a categoria",
        "Excelente opção para jogos e multitarefa",
        "Tela AMOLED de 120 Hz com ótima definição",
        "Carregamento rápido de 67 W",
        "Bateria segura para um dia de uso",
        "Versões com bastante armazenamento",
      ]}
      cons={[
        "Câmeras secundárias são simples",
        "Não é o melhor celular para fotos noturnas",
        "HyperOS pode não agradar todo mundo",
        "Atualizações menos previsíveis que Samsung",
        "Pode aquecer em jogos pesados por muito tempo",
      ]}
      scores={[
        { label: "Tela", score: "9.1" },
        { label: "Design e construção", score: "8.2" },
        { label: "Desempenho", score: "9.6" },
        { label: "Câmera", score: "7.5" },
        { label: "Bateria", score: "8.8" },
        { label: "Custo-benefício", score: "9.3" },
      ]}
      specs={[
        ["Tela", 'AMOLED 6,67" • 120 Hz • resolução 1.5K'],
        ["Processador", "MediaTek Dimensity 8300-Ultra"],
        ["Memória RAM", "8 GB / 12 GB, conforme versão"],
        ["Armazenamento", "256 GB / 512 GB, conforme versão"],
        ["Câmera principal", "64 MP com OIS"],
        ["Câmeras auxiliares", "8 MP ultrawide + 2 MP macro"],
        ["Câmera frontal", "16 MP"],
        ["Bateria", "5.000 mAh"],
        ["Carregamento", "67 W com fio"],
        ["Sistema", "HyperOS"],
      ]}
      sections={[
        {
          eyebrow: "Resposta rápida",
          title: "Poco X6 Pro compensa em 2026?",
          text:
            "Compensa principalmente para quem quer desempenho acima da média, boa tela e foco em jogos sem pagar preço de topo de linha. A compra fica menos interessante se o Poco X7 Pro estiver com pouca diferença de preço ou se câmera e suporte de atualizações forem prioridades maiores.",
        },
        {
          eyebrow: "Para quem faz sentido",
          title: "É uma boa compra para jogos e uso pesado",
          text:
            "O Poco X6 Pro faz mais sentido para quem joga, abre muitos aplicativos, usa redes sociais com frequência, assiste vídeos e quer um celular rápido por vários anos. Ele é menos indicado para quem procura a experiência mais equilibrada possível em câmeras, acabamento e software.",
        },
        {
          eyebrow: "Desempenho",
          title: "O maior motivo para comprar o Poco X6 Pro",
          text:
            "O Dimensity 8300-Ultra é o grande diferencial do Poco X6 Pro. Na prática, ele entrega uma experiência muito rápida em redes sociais, navegação, multitarefa, vídeos e jogos. A sensação de desempenho é superior à de muitos intermediários vendidos na mesma faixa.",
        },
        {
          eyebrow: "Jogos",
          title: "Poco X6 Pro é bom para jogos?",
          text:
            "Sim. O Poco X6 Pro é bom para jogos como Free Fire, COD Mobile, PUBG e títulos mais exigentes. Em sessões longas, pode haver aquecimento e redução de desempenho para controle de temperatura, mas ele segue como uma das opções mais fortes da categoria para jogar.",
        },
        {
          eyebrow: "Tela",
          title: "Tela AMOLED de 120 Hz combina com o perfil gamer",
          text:
            "A tela AMOLED de 6,67 polegadas com 120 Hz entrega boa fluidez, contraste forte e definição acima da média. É uma tela muito boa para vídeos, redes sociais e jogos, especialmente considerando o posicionamento de preço do aparelho.",
        },
        {
          eyebrow: "Bateria e carregamento",
          title: "Bateria segura e carregamento rápido",
          text:
            "A bateria de 5.000 mAh segura bem um dia de uso comum. O carregamento de 67 W também ajuda bastante na rotina, porque reduz o tempo preso na tomada e torna o aparelho mais prático para quem usa o celular intensamente.",
        },
        {
          eyebrow: "Câmeras",
          title: "Câmeras boas, mas não são o foco",
          text:
            "A câmera principal de 64 MP com OIS atende bem para fotos de dia e registros casuais. O ponto de atenção fica nas câmeras auxiliares e nas fotos noturnas. Quem compra o Poco X6 Pro deve comprar principalmente pelo desempenho, não pelo conjunto de câmeras.",
        },
        {
          eyebrow: "Comparativo",
          title: "Poco X6 Pro ou Poco X7 Pro?",
          text:
            "Se a diferença de preço for pequena, o Poco X7 Pro tende a ser a escolha mais interessante por ser mais novo e mais completo. Se o Poco X6 Pro estiver bem mais barato, ele ainda pode compensar muito para quem quer desempenho forte e bom custo-benefício.",
        },
        {
          eyebrow: "Antes de comprar",
          title: "Confira versão, preço e vendedor",
          text:
            "Antes de comprar, confira se o anúncio é da versão desejada, se o produto é novo, a reputação do vendedor, o prazo de entrega, a garantia e o preço final parcelado. No caso do Poco X6 Pro, a recomendação depende muito da diferença de preço para o Poco X7 Pro.",
        },
      ]}
      finalRecommendation="O Poco X6 Pro ainda compensa em 2026 para quem quer desempenho forte, tela AMOLED, boa bateria e carregamento rápido. Ele é especialmente indicado para jogos e uso pesado. A compra só fica menos atrativa se o Poco X7 Pro estiver próximo de preço ou se você priorizar câmeras, acabamento e atualizações mais previsíveis."
      faq={[
        {
          question: "Poco X6 Pro compensa em 2026?",
          answer:
            "Sim. O Poco X6 Pro compensa em 2026 se você busca desempenho, jogos, tela AMOLED e carregamento rápido por um preço competitivo. Só vale comparar com o Poco X7 Pro antes de comprar.",
        },
        {
          question: "Poco X6 Pro vale a pena em 2026?",
          answer:
            "Vale a pena para quem prioriza potência e custo-benefício. Ele ainda é muito forte para uso diário e jogos, mas não é a melhor escolha para quem quer as melhores câmeras ou suporte de atualizações mais previsível.",
        },
        {
          question: "Poco X6 Pro é bom para jogos?",
          answer:
            "Sim. Ele é uma das melhores opções intermediárias para jogos, principalmente por causa do Dimensity 8300-Ultra, da tela AMOLED de 120 Hz e da boa capacidade de memória nas versões mais completas.",
        },
        {
          question: "Poco X6 Pro ou Poco X7 Pro: qual escolher?",
          answer:
            "Se o Poco X7 Pro estiver pouco mais caro, ele tende a ser a escolha mais completa. Se o Poco X6 Pro estiver com desconto relevante, ele ainda pode ser o melhor custo-benefício.",
        },
        {
          question: "A câmera do Poco X6 Pro é boa?",
          answer:
            "A câmera principal é boa para fotos de dia e registros casuais. Porém, câmeras auxiliares e fotos noturnas não são o ponto forte do aparelho.",
        },
      ]}
      relatedLinks={[
        {
          label: "Review Poco X7 Pro",
          to: "/review/poco-x7-pro",
        },
        {
          label: "Poco X6 Pro vs Poco X7 Pro",
          to: "/comparativo/poco-x6-pro-vs-poco-x7-pro",
        },
        {
          label: "Galaxy A55 vs Poco X6 Pro",
          to: "/comparativo/galaxy-a55-vs-poco-x6-pro",
        },
        {
          label: "Melhores celulares Xiaomi",
          to: "/melhores-celulares-xiaomi",
        },
        {
          label: "Melhores celulares para jogos até R$ 2.000",
          to: "/guia/melhores-celulares-para-jogos-ate-2000",
        },
        {
          label: "Ofertas de celulares recomendados",
          to: "/ofertas",
        },
      ]}
    />
  );
}
