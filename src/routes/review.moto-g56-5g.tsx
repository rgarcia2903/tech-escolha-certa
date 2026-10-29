import { documentaryArticle } from "@/lib/editorial-schema";
import { MOTO_G56_AMAZON_URL } from "@/lib/affiliate-links";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";
import { createFileRoute } from "@tanstack/react-router";
import { ReviewTemplate } from "@/components/site/ReviewTemplate";

// Ficha conferida em 28/10/2026: Oficina da Net (lançamento no Brasil em 29/05/2025 e ficha
// técnica) e anúncio da Amazon Brasil.
const PAGE_TITLE = fairPriceTitle("moto-g56-5g");
const PAGE_DESCRIPTION = fairPriceDescription("moto-g56-5g");

export const Route = createFileRoute("/review/moto-g56-5g")({
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
        children: JSON.stringify(documentaryArticle("moto-g56-5g", PAGE_TITLE, PAGE_DESCRIPTION)),
      },
    ],
  }),
  component: ReviewMotoG56,
});

function ReviewMotoG56() {
  return (
    <ReviewTemplate
      breadcrumbs={[
        { label: "Home", to: "/" },
        { label: "Celulares", to: "/celulares" },
        { label: "Review Moto G56 5G" },
      ]}
      eyebrow="Análise editorial"
      title="Moto G56 5G vale a pena em 2026?"
      description="Vale, mas só com desconto. É um celular resistente, com bateria grande, 256 GB e entrada para fone de ouvido. O problema é a tela LCD: pelo mesmo preço, já dá para levar um Galaxy A36 com tela AMOLED e mais anos de atualização."
      updatedAt="Atualizado em outubro de 2026"
      readingTime="Leitura • 5 min"
      productName="Moto G56 5G"
      priceLabel="Ver preço na Amazon"
      overallScore="7.6"
      verdictShort="Depende do preço. Até cerca de R$ 1.200, o Moto G56 5G é uma boa compra para quem quer um celular resistente, com bateria grande e muito espaço. Acima disso, o Galaxy A36 5G entrega tela, processador e suporte melhores pelo mesmo dinheiro."
      affiliateHref={MOTO_G56_AMAZON_URL}
      affiliate={{
        title: "Moto G56 5G: confira o preço de hoje",
        description:
          "Compare as duas lojas e confira o vendedor. Até R$ 1.200 é uma boa compra; acima disso, veja o Galaxy A36.",
        buttonText: "Ver Moto G56 5G na Amazon",
        highlight: "256 GB • 5.200 mAh • IP68 e IP69 • Fone P2",
      }}
      fairPriceId="moto-g56-5g"
      decision={{
        bestFor:
          "Você quer um celular resistente para o dia a dia, com bateria para o dia inteiro, 256 GB de espaço, cartão de memória e entrada para fone de ouvido com fio.",
        caution:
          "Você assiste muito vídeo ou quer o celular por muitos anos; a tela LCD e as duas atualizações de Android pesam contra.",
        comparisonHref: "/review/galaxy-a36-5g",
        comparisonLabel: "Comparar com o Galaxy A36 5G",
      }}
      pros={[
        "256 GB de armazenamento, com cartão microSD",
        "Bateria de 5.200 mAh",
        "Resistência IP68 e IP69 e vidro Gorilla Glass 7i na tela",
        "Entrada para fone de ouvido com fio (P2)",
        "Alto-falantes estéreo com Dolby Atmos",
        "5G e NFC",
      ]}
      cons={[
        "Tela LCD, menos contraste que as AMOLED dos rivais",
        "Só 2 atualizações de Android e 3 anos de segurança",
        "Ultrawide de apenas 8 MP",
        "Vídeo limitado a Full HD",
        "Carregamento de 30 W, sem carregamento sem fio",
      ]}
      scores={[
        { label: "Tela", score: "7.0" },
        { label: "Desempenho", score: "7.5" },
        { label: "Câmera", score: "7.4" },
        { label: "Bateria", score: "8.6" },
        { label: "Resistência", score: "9.2" },
        { label: "Custo-benefício", score: "7.6" },
      ]}
      specs={[
        ["Tela", 'IPS LCD 6,72" • Full HD+ • 120 Hz • Gorilla Glass 7i'],
        ["Processador", "MediaTek Dimensity 7060 (6 nm)"],
        ["Memória RAM", "8 GB"],
        ["Armazenamento", "256 GB, com microSD"],
        ["Câmera principal", "50 MP (f/1.8)"],
        ["Câmera ultrawide", "8 MP (f/2.2), também para macro"],
        ["Câmera frontal", "32 MP"],
        ["Vídeo", "Full HD a 30 fps"],
        ["Bateria", "5.200 mAh"],
        ["Carregamento", "30 W com fio"],
        ["Proteção", "IP68 e IP69"],
        ["Dimensões e peso", "165,8 × 76,3 × 8,4 mm • 200 g"],
        ["Sistema", "Android 15 • 2 atualizações de sistema e 3 anos de segurança"],
        ["Extras", "NFC, eSIM, fone P2, estéreo Dolby Atmos, leitor na lateral"],
      ]}
      sections={[
        {
          eyebrow: "Veredito",
          title: "Para quem o Moto G56 5G faz sentido",
          text: "O Moto G56 é para quem quer um celular que aguente o tranco: tem certificação IP68 e IP69, bateria grande e 256 GB de espaço já na versão de entrada. É uma boa escolha para quem guarda muitas fotos, usa fone com fio ou trabalha em ambiente com poeira e água. Ele só deixa de fazer sentido quando o preço encosta no de rivais com tela AMOLED.",
        },
        {
          eyebrow: "Tela",
          title: "A tela LCD é o ponto mais fraco",
          text: "A tela de 6,72 polegadas tem 120 Hz, o que deixa a rolagem fluida, mas é LCD. Na prática, os pretos são menos profundos e o contraste é menor que nas telas AMOLED do Galaxy A36 e do Redmi Note 15 5G. Para quem passa horas em vídeos e redes sociais, essa é a diferença que mais aparece no uso.",
        },
        {
          eyebrow: "Desempenho",
          title: "Dimensity 7060 dá conta do básico",
          text: "O Dimensity 7060 roda bem redes sociais, mensagens, vídeos e jogos leves. Em jogos pesados, é preciso baixar a qualidade gráfica. Os 8 GB de RAM e os 256 GB de armazenamento ajudam o aparelho a não ficar apertado com o tempo.",
        },
        {
          eyebrow: "Câmeras",
          title: "Câmera principal correta, o resto é simples",
          text: "A câmera principal de 50 MP resolve bem as fotos do dia a dia com boa luz. A ultrawide de 8 MP serve para fotos de grupo e macro, mas perde detalhe. O vídeo vai só até Full HD, o que é uma limitação para quem grava muito.",
        },
        {
          eyebrow: "Bateria e resistência",
          title: "Feito para durar o dia e aguentar quedas",
          text: "A bateria de 5.200 mAh é suficiente para um dia inteiro de uso intenso, e o carregamento é de 30 W. A certificação IP69 vai além do comum: protege contra jatos de água em alta pressão e temperatura, segundo a norma. É um diferencial real para quem trabalha na rua.",
        },
        {
          eyebrow: "Comparação",
          title: "Moto G56 5G ou Galaxy A36 5G?",
          text: "Os dois costumam custar quase o mesmo. O Galaxy A36 vence em tela, processador e tempo de atualização. O Moto G56 vence em armazenamento, resistência, cartão de memória e entrada para fone. Para a maioria das pessoas, o A36 é a compra melhor; o G56 só passa na frente quando aparece bem mais barato.",
        },
      ]}
      finalRecommendation="O Moto G56 5G vale a pena até cerca de R$ 1.200, para quem quer resistência, bateria e espaço de sobra. Acima disso, prefira o Galaxy A36 5G, que tem tela e suporte melhores pelo mesmo preço. Antes de comprar, confira se o anúncio é da versão 5G com 256 GB e quem é o vendedor."
      faq={[
        {
          question: "O Moto G56 5G vale a pena em 2026?",
          answer:
            "Vale com desconto. Até cerca de R$ 1.200, é uma compra sólida para quem quer resistência e bateria. Acima disso, o Galaxy A36 5G é melhor pelo mesmo dinheiro.",
        },
        {
          question: "A tela do Moto G56 é AMOLED?",
          answer:
            "Não. É uma tela IPS LCD de 6,72 polegadas com 120 Hz. Ela é fluida, mas tem menos contraste que as telas AMOLED de rivais da mesma faixa.",
        },
        {
          question: "O Moto G56 é à prova d'água?",
          answer:
            "Ele tem certificação IP68 e IP69, que cobre imersão e jatos de água em condições de teste. Mesmo assim, evite usar o aparelho na água: danos por líquido costumam não ser cobertos pela garantia.",
        },
        {
          question: "Quantas atualizações o Moto G56 vai receber?",
          answer:
            "A Motorola promete duas atualizações de sistema e três anos de atualizações de segurança. O aparelho foi lançado com Android 15.",
        },
        {
          question: "Moto G56 ou Moto G86: qual comprar?",
          answer:
            "O Moto G86 tem tela pOLED muito melhor, câmera com estabilização óptica e processador mais rápido. Se a diferença de preço couber no orçamento, o G86 é a escolha mais completa.",
        },
      ]}
      relatedLinks={[
        { label: "Melhores celulares Motorola", to: "/melhores-celulares-motorola" },
        { label: "Review Moto G86 5G", to: "/review/moto-g86-5g" },
        { label: "Review Galaxy A36 5G", to: "/review/galaxy-a36-5g" },
        { label: "Melhores celulares até R$ 1.500", to: "/guia/melhores-celulares-ate-1500-reais" },
      ]}
    />
  );
}
