import { documentaryArticle } from "@/lib/editorial-schema";
import { GALAXY_A57_AMAZON_URL } from "@/lib/affiliate-links";
import { createFileRoute } from "@tanstack/react-router";
import { ReviewTemplate } from "@/components/site/ReviewTemplate";

// Ficha conferida em 29/10/2026: Samsung Newsroom Brasil (lançamento em 15/04/2026, R$ 3.599 e
// R$ 3.999, IP68, 6,9 mm, 179 g, 6 gerações de Android) e Oficina da Net (Exynos 1680, 45 W,
// Android 16 / One UI 8.5, sem microSD e sem P2). Não exibir preço de loja (política da Amazon).
const PAGE_TITLE = "Galaxy A57 vale a pena em 2026? Compre se estiver até R$ 1.850";
const PAGE_DESCRIPTION =
  "Sim: é o Samsung intermediário mais novo, com Exynos 1680, tela AMOLED de 120 Hz, IP68 e seis anos de atualizações. Veja pontos fracos, preço-alvo e se vale trocar o A55 ou o A36.";

export const Route = createFileRoute("/review/galaxy-a57-5g")({
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
        children: JSON.stringify(documentaryArticle("galaxy-a57-5g", PAGE_TITLE, PAGE_DESCRIPTION)),
      },
    ],
  }),
  component: ReviewGalaxyA57,
});

function ReviewGalaxyA57() {
  return (
    <ReviewTemplate
      breadcrumbs={[
        { label: "Home", to: "/" },
        { label: "Celulares", to: "/celulares" },
        { label: "Review Galaxy A57 5G" },
      ]}
      eyebrow="Análise editorial"
      title="Galaxy A57 5G vale a pena em 2026?"
      description="Sim. É o intermediário mais completo da Samsung hoje: processador novo, tela AMOLED de 120 Hz, IP68, corpo de 6,9 mm e seis anos de atualizações. Lançado a R$ 3.599, ele só faz sentido com o desconto que já aparece nas lojas."
      updatedAt="Atualizado em outubro de 2026"
      readingTime="Leitura • 6 min"
      productName="Galaxy A57 5G"
      priceLabel="Ver preço de hoje na Amazon"
      overallScore="8.8"
      verdictShort="Sim — se estiver até R$ 1.850, o Galaxy A57 é a melhor compra intermediária da Samsung: mais rápido, mais fino e mais resistente que o A36, com o mesmo tempo de atualização. Acima disso, o Galaxy A36 entrega quase a mesma experiência gastando menos."
      affiliateHref={GALAXY_A57_AMAZON_URL}
      affiliate={{
        title: "Galaxy A57 5G: veja o preço de hoje",
        description:
          "Compare a Amazon e a loja oficial da Samsung no Mercado Livre. Até R$ 1.850 é um ótimo negócio pela versão de 128 GB.",
        buttonText: "Ver preço de hoje na Amazon",
        highlight: "Exynos 1680 • AMOLED 120 Hz • IP68 • 6 anos de atualizações",
      }}
      decision={{
        bestFor:
          "Você quer um Samsung bonito, leve e resistente, que receba atualizações por muitos anos, sem pagar preço de linha S.",
        caution:
          "Você precisa de câmera com zoom óptico ou de muito armazenamento sem pagar a mais; o A57 não tem teleobjetiva nem cartão de memória.",
        comparisonHref: "/review/galaxy-a36-5g",
        comparisonLabel: "Comparar com o Galaxy A36 5G",
      }}
      pros={[
        "Exynos 1680, bem mais rápido que o chip do A36",
        "Tela Super AMOLED+ de 6,7\" com 120 Hz e HDR10+",
        "Resistência IP68 e vidro Gorilla Glass Victus+ na frente e atrás",
        "Corpo de alumínio com 6,9 mm e 179 g",
        "Seis gerações de Android e seis anos de segurança",
        "Câmera principal de 50 MP com estabilização óptica e vídeo 4K na frente e atrás",
      ]}
      cons={[
        "Sem cartão de memória e sem entrada para fone",
        "Carregador de 45 W vendido à parte",
        "Câmera macro de 5 MP pouco útil; sem teleobjetiva",
        "Sem carregamento sem fio",
      ]}
      scores={[
        { label: "Tela", score: "9.0" },
        { label: "Desempenho", score: "8.6" },
        { label: "Câmera", score: "8.3" },
        { label: "Bateria", score: "8.5" },
        { label: "Atualizações", score: "9.5" },
        { label: "Custo-benefício", score: "8.8" },
      ]}
      specs={[
        ["Tela", 'Super AMOLED+ 6,7" • 1080 × 2340 • 120 Hz • HDR10+'],
        ["Processador", "Samsung Exynos 1680 (4 nm)"],
        ["Memória RAM", "8 GB"],
        ["Armazenamento", "128 GB ou 256 GB, sem microSD"],
        ["Câmera principal", "50 MP (f/1.8) com OIS"],
        ["Câmera ultrawide", "12 MP (f/2.2)"],
        ["Câmera macro", "5 MP (f/2.4)"],
        ["Câmera frontal", "12 MP (f/2.2)"],
        ["Vídeo", "4K a 30 fps nas câmeras traseira e frontal"],
        ["Bateria", "5.000 mAh"],
        ["Carregamento", "45 W com fio (carregador vendido à parte)"],
        ["Proteção", "IP68 • Gorilla Glass Victus+ • moldura de alumínio"],
        ["Dimensões e peso", "161,5 × 76,8 × 6,9 mm • 179 g"],
        ["Sistema", "Android 16 com One UI 8.5"],
        ["Atualizações", "6 gerações de Android e 6 anos de segurança"],
        ["Preço de lançamento", "R$ 3.599 (128 GB) e R$ 3.999 (256 GB)"],
      ]}
      sections={[
        {
          eyebrow: "Veredito",
          title: "Para quem o Galaxy A57 faz sentido",
          text: "O A57 é para quem quer um Samsung que dure: tem seis anos de atualizações, resistência IP68 e acabamento em alumínio e vidro. Ele foi lançado caro, a R$ 3.599, mas já aparece muito abaixo disso. Até R$ 1.850, é a escolha mais completa da Samsung sem entrar na linha S.",
        },
        {
          eyebrow: "Desempenho",
          title: "Exynos 1680 é o grande salto",
          text: "O processador Exynos 1680, de 4 nm, é a maior novidade. Ele deixa o A57 bem mais rápido que o Galaxy A36 e que o antigo A55 em apps pesados, multitarefa e jogos. Para a maioria das pessoas, é desempenho de sobra para vários anos.",
        },
        {
          eyebrow: "Tela e construção",
          title: "Fino, leve e resistente",
          text: "Com 6,9 mm de espessura e 179 g, o A57 é um dos intermediários mais finos do mercado. Tem moldura de alumínio, vidro Gorilla Glass Victus+ na frente e atrás e certificação IP68. A tela Super AMOLED+ de 6,7 polegadas, com 120 Hz e HDR10+, é ótima para vídeos e redes sociais.",
        },
        {
          eyebrow: "Câmeras",
          title: "Boa câmera principal, sem zoom óptico",
          text: "A câmera principal de 50 MP tem estabilização óptica e grava em 4K. A ultrawide de 12 MP é melhor que a do A36, e a câmera frontal também grava em 4K. A macro de 5 MP serve pouco. Quem quer zoom óptico deve olhar o Galaxy S25 FE.",
        },
        {
          eyebrow: "Bateria",
          title: "5.000 mAh e recarga de 45 W",
          text: "A bateria de 5.000 mAh dura o dia todo em uso normal, e o carregamento chega a 45 W com um carregador compatível, que não vem na caixa. Não há carregamento sem fio.",
        },
        {
          eyebrow: "Comparação",
          title: "Galaxy A57 ou Galaxy A36?",
          text: "Os dois têm seis anos de atualizações. O A57 tem processador bem mais rápido, IP68 em vez de IP67, corpo mais fino de alumínio e ultrawide melhor. O A36 custa menos. Se a diferença de preço for pequena, vá de A57; se o orçamento estiver apertado, o A36 entrega a mesma experiência Samsung por menos.",
        },
      ]}
      finalRecommendation="O Galaxy A57 5G vale a pena até cerca de R$ 1.850 para quem quer um Samsung rápido, resistente e com muitos anos de atualizações. Acima disso, o Galaxy A36 é a escolha mais econômica, e o Galaxy S25 FE passa a valer para quem quer câmera com zoom óptico."
      faq={[
        {
          question: "O Galaxy A57 vale a pena em 2026?",
          answer:
            "Sim, se estiver até cerca de R$ 1.850. É o intermediário mais completo da Samsung, com processador novo, IP68 e seis anos de atualizações.",
        },
        {
          question: "Galaxy A57 ou Galaxy A55: qual comprar?",
          answer:
            "O A57. Ele é duas gerações mais novo, tem processador mais rápido, IP68 e atualizações por mais tempo, e costuma custar menos que o A55 novo.",
        },
        {
          question: "O Galaxy A57 é à prova d'água?",
          answer:
            "Ele tem certificação IP68 em condições de teste. Mesmo assim, evite usar o aparelho na água: danos por líquido costumam não ser cobertos pela garantia.",
        },
        {
          question: "O Galaxy A57 vem com carregador?",
          answer: "Não. O carregamento de até 45 W exige um adaptador compatível, vendido separadamente.",
        },
        {
          question: "Quantos anos de atualização o Galaxy A57 recebe?",
          answer:
            "Seis gerações de Android e seis anos de atualizações de segurança, segundo a Samsung. Ele foi lançado com Android 16.",
        },
      ]}
      relatedLinks={[
        { label: "Galaxy A57 ou Galaxy A36?", to: "/comparativo/galaxy-a57-vs-galaxy-a36" },
        { label: "Melhores celulares Samsung", to: "/melhores-celulares-samsung" },
        { label: "Review Galaxy A36 5G", to: "/review/galaxy-a36-5g" },
        { label: "Review Galaxy S25 FE", to: "/review/galaxy-s25-fe" },
      ]}
    />
  );
}
