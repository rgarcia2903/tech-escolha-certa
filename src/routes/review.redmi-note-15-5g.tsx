import { documentaryArticle } from "@/lib/editorial-schema";
import { REDMI_NOTE_15_5G_AFFILIATE_URL } from "@/lib/affiliate-links";
import { createFileRoute } from "@tanstack/react-router";
import { ReviewTemplate } from "@/components/site/ReviewTemplate";

// Ficha conferida em 28/10/2026 na página oficial da Xiaomi Brasil:
// https://www.mi.com/br/product/redmi-note-15-5g/specs/
const PAGE_TITLE = "Redmi Note 15 5G vale a pena em 2026? Review, ficha e veredito";
const PAGE_DESCRIPTION =
  "Sim, para quem quer bateria de 5.520 mAh, tela AMOLED de 120 Hz e câmera de 108 MP por preço intermediário. Veja os pontos fracos, a versão certa (não confunda com o 4G) e onde comprar.";

export const Route = createFileRoute("/review/redmi-note-15-5g")({
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
        children: JSON.stringify(
          documentaryArticle(
            "redmi-note-15-5g",
            "Redmi Note 15 5G: análise documental",
            "Análise documental: perfil, limites, configuração e alternativas antes de comprar.",
          ),
        ),
      },
    ],
  }),
  component: ReviewRedmiNote155G,
});

function ReviewRedmiNote155G() {
  return (
    <ReviewTemplate
      breadcrumbs={[
        { label: "Home", to: "/" },
        { label: "Celulares", to: "/celulares" },
        { label: "Review Redmi Note 15 5G" },
      ]}
      eyebrow="Análise editorial"
      title="Redmi Note 15 5G vale a pena em 2026?"
      description="Sim, para quem quer um intermediário com bateria grande, tela AMOLED brilhante e câmera principal de 108 MP sem gastar muito. Os pontos fracos são o armazenamento mais lento e a câmera ultrawide simples."
      updatedAt="Atualizado em outubro de 2026"
      readingTime="Leitura • 6 min"
      productName="Redmi Note 15 5G"
      priceLabel="Ver preço no Mercado Livre"
      overallScore="8.6"
      verdictShort="Sim — o Redmi Note 15 5G é uma das compras mais equilibradas da Xiaomi em 2026: bateria de 5.520 mAh, tela AMOLED de 120 Hz com até 3.200 nits, 5G e carregador de 45 W na caixa. Atenção para não levar a versão 4G por engano, que tem outro processador."
      affiliateHref={REDMI_NOTE_15_5G_AFFILIATE_URL}
      affiliate={{
        title: "Redmi Note 15 5G: confira o preço de hoje",
        description:
          "Compare o preço no Mercado Livre e na Amazon e confira se o anúncio é da versão 5G, com 8 GB de RAM.",
        buttonText: "Ver Redmi Note 15 5G no Mercado Livre",
        highlight: "Snapdragon 6 Gen 3 • 5.520 mAh • 45 W com carregador • AMOLED 120 Hz",
      }}
      decision={{
        bestFor:
          "Você quer bateria para o dia inteiro, uma tela boa para vídeos e redes sociais e 5G, gastando menos que num intermediário premium.",
        caution:
          "Você joga títulos pesados com frequência ou precisa de uma ultrawide boa; nesse caso, o Poco X7 Pro entrega mais desempenho.",
        comparisonHref: "/review/redmi-note-13-pro",
        comparisonLabel: "Comparar com o Redmi Note 13 Pro",
      }}
      pros={[
        "Bateria grande de 5.520 mAh",
        "Tela AMOLED de 6,67\" com 120 Hz e pico de 3.200 nits",
        "Carregador de 45 W incluído na caixa",
        "Câmera principal de 108 MP",
        "Alto-falantes estéreo com Dolby Atmos",
        "Resistência IP65 a respingos e poeira",
        "Leve (178 g) e fino para a bateria que tem",
      ]}
      cons={[
        "Armazenamento UFS 2.2, mais lento que o de rivais mais caros",
        "Ultrawide de apenas 8 MP",
        "Vídeo frontal limitado a 1080p",
        "IP65 protege contra respingos, não contra imersão",
        "A versão 4G tem nome quase igual e processador diferente",
      ]}
      scores={[
        { label: "Tela", score: "9.0" },
        { label: "Desempenho", score: "8.0" },
        { label: "Câmera", score: "8.0" },
        { label: "Bateria", score: "9.2" },
        { label: "Carregamento", score: "8.6" },
        { label: "Custo-benefício", score: "9.0" },
      ]}
      specs={[
        ["Tela", 'AMOLED 6,67" • 2392 × 1080 • 120 Hz • até 3.200 nits'],
        ["Processador", "Snapdragon 6 Gen 3 (4 nm)"],
        ["Memória RAM", "8 GB"],
        ["Armazenamento", "256 GB ou 512 GB (UFS 2.2), com microSD até 1 TB"],
        ["Câmera principal", "108 MP (f/1.7)"],
        ["Câmera ultrawide", "8 MP (f/2.2)"],
        ["Câmera frontal", "20 MP"],
        ["Vídeo", "Até 4K a 30 fps (traseira)"],
        ["Bateria", "5.520 mAh (típica)"],
        ["Carregamento", "45 W com carregador na caixa"],
        ["Proteção", "IP65"],
        ["Dimensões e peso", "164 × 75,42 × 7,35 mm • 178 g"],
        ["Sistema", "Xiaomi HyperOS 2"],
      ]}
      sections={[
        {
          eyebrow: "Veredito",
          title: "Para quem o Redmi Note 15 5G faz sentido",
          text: "É o celular para quem quer passar o dia longe da tomada, assistir vídeos numa tela boa e ter 5G, sem pagar preço de intermediário premium. Não é o mais rápido da faixa nem tem a melhor câmera secundária, mas acerta no que a maioria das pessoas usa todos os dias.",
        },
        {
          eyebrow: "Versão certa",
          title: "Não confunda com o Redmi Note 15 4G",
          text: "Existem o Redmi Note 15 5G e o Redmi Note 15 (4G), com nomes quase iguais. Esta análise é do 5G, com Snapdragon 6 Gen 3. Antes de comprar, confira no anúncio se aparece \"5G\" no nome e no modelo. O Redmi Note 15 Pro 5G é outro aparelho, mais caro.",
        },
        {
          eyebrow: "Tela",
          title: "Tela brilhante e fluida",
          text: "A tela AMOLED de 6,67 polegadas tem 120 Hz e pico de 3.200 nits, segundo a Xiaomi, o que ajuda bastante sob o sol. Para vídeos e redes sociais, é um dos pontos mais fortes do aparelho, junto com os alto-falantes estéreo com Dolby Atmos.",
        },
        {
          eyebrow: "Desempenho",
          title: "Snapdragon 6 Gen 3 dá conta do dia a dia",
          text: "O Snapdragon 6 Gen 3 é suficiente para redes sociais, vídeos, navegação e jogos populares em configurações moderadas. O armazenamento UFS 2.2 é mais lento que o de aparelhos mais caros, o que pode aparecer na abertura de apps pesados. Para jogos exigentes, o Poco X7 Pro é mais indicado.",
        },
        {
          eyebrow: "Câmeras",
          title: "Principal boa, ultrawide simples",
          text: "A câmera principal de 108 MP com sensor de 1/1,67 polegada é a parte forte do conjunto e grava vídeo em 4K a 30 fps. A ultrawide de 8 MP é básica, e a câmera frontal de 20 MP grava só em 1080p. Para fotos do dia a dia com a câmera principal, o resultado tende a ser bom.",
        },
        {
          eyebrow: "Bateria",
          title: "Bateria grande e carregador na caixa",
          text: "A bateria de 5.520 mAh é o maior trunfo para quem usa muito o celular fora de casa. O carregador de 45 W vem na caixa, o que nem todos os concorrentes oferecem. Mesmo com bateria grande, o aparelho pesa 178 g.",
        },
        {
          eyebrow: "Comparação",
          title: "Redmi Note 15 5G ou Redmi Note 13 Pro?",
          text: "Na nossa checagem de outubro de 2026, o Redmi Note 15 5G novo custava menos que o Note 13 Pro e é dois anos mais novo. O Note 13 Pro ainda tem a câmera de 200 MP, mas, pagando mais por um modelo mais antigo, o Note 15 5G é a escolha mais sensata para a maioria das pessoas.",
        },
      ]}
      finalRecommendation="O Redmi Note 15 5G vale a pena para quem quer bateria grande, tela boa e 5G por preço intermediário, com o carregador já incluído. Compre a versão 5G com 8 GB de RAM e confira o modelo no anúncio. Se você joga muito ou quer uma câmera mais completa, compare com o Poco X7 Pro antes de decidir."
      faq={[
        {
          question: "O Redmi Note 15 5G vale a pena em 2026?",
          answer:
            "Sim, para quem quer bateria grande, tela AMOLED de 120 Hz e 5G sem gastar muito. Não é a melhor opção para jogos pesados.",
        },
        {
          question: "Qual a diferença entre o Redmi Note 15 5G e o Redmi Note 15 4G?",
          answer:
            "São aparelhos diferentes, com processadores diferentes. Esta análise é do 5G, com Snapdragon 6 Gen 3. Confira \"5G\" no nome e no modelo do anúncio antes de comprar.",
        },
        {
          question: "O Redmi Note 15 5G vem com carregador?",
          answer: "Sim. Segundo a Xiaomi Brasil, o carregador de 45 W vem na caixa.",
        },
        {
          question: "O Redmi Note 15 5G é à prova d'água?",
          answer:
            "Não totalmente. Ele tem certificação IP65, que protege contra poeira e respingos, mas não contra imersão. A Xiaomi informa que danos por líquido fora das condições de teste não são cobertos pela garantia.",
        },
        {
          question: "Redmi Note 15 5G ou Poco X7 Pro?",
          answer:
            "Escolha o Redmi Note 15 5G se você quer gastar menos e prioriza bateria e tela. Escolha o Poco X7 Pro se você joga bastante e quer mais desempenho.",
        },
      ]}
      relatedLinks={[
        { label: "Redmi Note 15 4G ou 5G?", to: "/comparativo/redmi-note-15-4g-vs-5g" },
        { label: "Redmi Note 15 5G ou Moto G86?", to: "/comparativo/moto-g86-vs-redmi-note-15-5g" },
        { label: "Review Redmi Note 13 Pro 5G", to: "/review/redmi-note-13-pro" },
        { label: "Review Poco X7 Pro", to: "/review/poco-x7-pro" },
        { label: "Melhores celulares Xiaomi", to: "/melhores-celulares-xiaomi" },
      ]}
    />
  );
}
