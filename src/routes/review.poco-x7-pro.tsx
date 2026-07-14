import { createFileRoute } from "@tanstack/react-router";
import { ReviewTemplate } from "@/components/site/ReviewTemplate";

export const Route = createFileRoute("/review/poco-x7-pro")({
  head: () => ({
    meta: [
      {
        title:
          "Poco X7 Pro vale a pena em 2026? Review completo e honesto",
      },
      {
        name: "description",
        content:
          "Poco X7 Pro vale a pena em 2026? Análise completa com tela, desempenho, bateria, carregamento, câmeras, pontos positivos, negativos e recomendação final.",
      },
      {
        name: "keywords",
        content:
          "Poco X7 Pro vale a pena, Poco X7 Pro review, Poco X7 Pro é bom, Poco X7 Pro 5G, Poco X7 Pro para jogos, Poco X7 Pro vs Poco X6 Pro",
      },
      {
        property: "og:title",
        content: "Poco X7 Pro vale a pena em 2026?",
      },
      {
        property: "og:description",
        content:
          "Análise editorial completa do Poco X7 Pro para descobrir se ele é uma das melhores compras para quem prioriza desempenho e custo-benefício.",
      },
    ],
  }),
  component: ReviewPocoX7Pro,
});

function ReviewPocoX7Pro() {
  return (
    <ReviewTemplate
      image="/images/products/poco-x7-pro-optimized.webp"
      breadcrumbs={[
        { label: "Home", to: "/" },
        { label: "Celulares", to: "/celulares" },
        { label: "Review Poco X7 Pro" },
      ]}
      eyebrow="Review completo"
      title="Poco X7 Pro vale a pena em 2026? Review completo e honesto"
      description="O Poco X7 Pro é uma das opções mais fortes para quem quer muita performance, tela de qualidade, boa bateria e carregamento rápido sem pagar preço de topo de linha. A proposta é clara: entregar velocidade e ficha técnica forte acima de quase tudo."
      updatedAt="Atualizado em 2026"
      readingTime="Leitura • 8 min"
      productName="Poco X7 Pro"
      priceLabel="Ver preço atualizado"
      overallScore="9.3"
      verdictShort="O Poco X7 Pro vale a pena para quem quer um celular muito rápido, com excelente bateria, ótima tela e desempenho acima da média para jogos e multitarefa. Ele é uma evolução natural para quem gostou da linha Poco e quer mais potência sem saltar para um topo de linha muito caro."
      affiliateHref="https://www.mercadolivre.com.br/social/gari4140335?matt_word=gari4140335&matt_tool=94872161&forceInApp=true&ref=BEX9wHRtVEKXx9yO12fXHrh8xMgoDxPmqvJmScZP%2Bkpg%2Bjc924kYQWyPEwdMSE7Pofdd%2F3Dtwc2j60EISIGY%2BQrcELFX5fso2RASDnsUC2LtMEx4Os0fTE9%2F8GAv8o9U6RPyBDRQX6JlRJAzGu5gLZ8m9g%2FAwx%2BjHzZohHxVKTyWyZLU2APF8FUZqzy4DpZAN7ScnA%3D%3D"
      affiliate={{
        title: "Poco X7 Pro com preço atualizado",
        description:
          "Confira preço, parcelamento e disponibilidade do Poco X7 Pro no Mercado Livre.",
        buttonText: "Ver Poco X7 Pro no Mercado Livre",
        highlight:
          "Dimensity 8400-Ultra • Bateria 6000 mAh • Carregamento 90 W",
      }}
      pros={[
        "Desempenho muito forte para a categoria",
        "Excelente escolha para jogos e multitarefa pesada",
        "Tela AMOLED 120 Hz com ótima qualidade",
        "Bateria grande com boa autonomia",
        "Carregamento rápido de 90 W",
        "Versão com 12 GB RAM e 512 GB chama atenção pelo custo-benefício",
        "Boa opção para quem quer mais potência que o Poco X6 Pro",
      ]}
      cons={[
        "Câmeras não são o foco principal do aparelho",
        "HyperOS pode não agradar quem prefere sistema mais limpo",
        "Acabamento e experiência fotográfica ficam atrás de alguns rivais mais equilibrados",
        "Pode aquecer em sessões longas de jogo pesado",
        "Quem prioriza câmera ou software talvez prefira Samsung",
      ]}
      scores={[
        { label: "Tela", score: "9.3" },
        { label: "Desempenho", score: "9.7" },
        { label: "Câmera", score: "7.9" },
        { label: "Bateria", score: "9.4" },
        { label: "Carregamento", score: "9.4" },
        { label: "Custo-benefício", score: "9.4" },
      ]}
      specs={[
        ["Tela", 'AMOLED 6,67" • 1.5K • 120 Hz'],
        ["Processador", "MediaTek Dimensity 8400-Ultra"],
        ["Memória RAM", "12 GB, conforme versão"],
        ["Armazenamento", "512 GB, conforme versão"],
        ["Câmera principal", "50 MP com OIS"],
        ["Câmera ultrawide", "8 MP"],
        ["Câmera frontal", "20 MP"],
        ["Bateria", "6.000 mAh"],
        ["Carregamento", "90 W com fio"],
        ["Proteção", "IP68"],
        ["Sistema", "Android com HyperOS"],
      ]}
      sections={[
        {
          eyebrow: "Veredito",
          title: "O Poco X7 Pro é bom?",
          text:
            "Sim. O Poco X7 Pro é uma ótima escolha para quem quer desempenho muito forte, boa autonomia e uma tela de qualidade. Ele é um celular pensado para quem valoriza velocidade, jogos e multitarefa, mais do que câmera ou refinamento de software.",
        },
        {
          eyebrow: "Tela e construção",
          title: "Tela excelente para jogos, vídeos e uso diário",
          text:
            "A tela AMOLED com resolução 1.5K e 120 Hz entrega ótima fluidez, bom brilho e excelente experiência para vídeos, redes sociais, leitura e jogos. É um dos pontos fortes do aparelho e ajuda a reforçar a proposta premium da linha Poco X.",
        },
        {
          eyebrow: "Desempenho",
          title: "Desempenho é o grande destaque do Poco X7 Pro",
          text:
            "O Dimensity 8400-Ultra coloca o Poco X7 Pro entre os celulares mais interessantes para quem quer jogar e usar muitos apps ao mesmo tempo. A performance deve agradar bastante quem busca folga para os próximos anos, inclusive em tarefas mais pesadas.",
        },
        {
          eyebrow: "Câmeras",
          title: "Câmera principal é competente, mas não é o foco",
          text:
            "A câmera principal de 50 MP com estabilização óptica tende a entregar resultados bons no uso diário, especialmente durante o dia. Ainda assim, a proposta do Poco X7 Pro é muito mais centrada em desempenho do que em fotografia, então ele não é a melhor opção para quem prioriza câmera.",
        },
        {
          eyebrow: "Bateria e carregamento",
          title: "Autonomia forte e carregamento rápido fazem diferença",
          text:
            "A bateria de 6.000 mAh é um dos grandes trunfos do Poco X7 Pro. Ela deve entregar boa autonomia para uso pesado, enquanto o carregamento rápido de 90 W ajuda bastante na rotina de quem não quer ficar muito tempo preso à tomada.",
        },
        {
          eyebrow: "Software",
          title: "HyperOS tem recursos extras, mas divide opiniões",
          text:
            "O HyperOS oferece bastante personalização e recursos, algo que pode agradar usuários avançados. Por outro lado, quem prefere uma experiência mais limpa e previsível talvez se sinta mais confortável com aparelhos Samsung ou até alguns Motorola.",
        },
        {
          eyebrow: "Comparação",
          title: "Poco X7 Pro ou Poco X6 Pro: qual vale mais a pena?",
          text:
            "O Poco X7 Pro faz mais sentido para quem quer um passo à frente em bateria, hardware e longevidade. Já o Poco X6 Pro ainda continua interessante se aparecer com preço muito agressivo, principalmente para quem quer economizar sem abrir mão de muita performance.",
        },
      ]}
      finalRecommendation="O Poco X7 Pro vale a pena para quem quer um celular com foco claro em desempenho, jogos, bateria e custo-benefício. Se você procura potência e uma ficha técnica forte, ele é uma das opções mais interessantes da categoria. Se seu foco principal for câmera, acabamento premium ou software mais refinado, pode valer comparar com outras linhas antes de decidir."
      faq={[
        {
          question: "O Poco X7 Pro vale a pena em 2026?",
          answer:
            "Sim. Ele vale a pena para quem prioriza desempenho, jogos, tela boa, bateria forte e carregamento rápido em um celular intermediário premium.",
        },
        {
          question: "O Poco X7 Pro é melhor que o Poco X6 Pro?",
          answer:
            "De forma geral, sim. O Poco X7 Pro é mais atual e tende a oferecer melhor bateria, hardware mais novo e maior folga de desempenho. O Poco X6 Pro ainda pode compensar se estiver bem mais barato.",
        },
        {
          question: "O Poco X7 Pro é bom para jogos?",
          answer:
            "Sim. Esse é um dos seus principais pontos fortes. O conjunto de processador, tela de 120 Hz e boa bateria faz dele uma ótima escolha para jogos.",
        },
        {
          question: "A câmera do Poco X7 Pro é boa?",
          answer:
            "A câmera principal é competente para o uso diário, mas fotografia não é o foco principal do aparelho. Quem prioriza câmera pode encontrar opções mais equilibradas em outras linhas.",
        },
        {
          question: "Poco X7 Pro ou Galaxy A55: qual escolher?",
          answer:
            "Escolha o Poco X7 Pro se você quer mais desempenho e bateria. Escolha o Galaxy A55 se você prefere software mais refinado, experiência mais equilibrada e suporte mais previsível.",
        },
      ]}
      relatedLinks={[
        {
          label: "Review Poco X6 Pro",
          to: "/review/poco-x6-pro",
        },
        {
          label: "Melhores celulares Xiaomi",
          to: "/melhores-celulares-xiaomi",
        },
        {
          label: "Review Redmi Note 14 Pro+ 5G",
          to: "/review/redmi-note-14-pro-plus",
        },
        {
          label: "Melhores celulares até R$ 2.500",
          to: "/melhores-celulares-ate-2500",
        },
      ]}
    />
  );
}
