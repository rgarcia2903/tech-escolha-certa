import { documentaryArticle } from "@/lib/editorial-schema";
import { GALAXY_S25_FE_AMAZON_URL } from "@/lib/affiliate-links";
import { createFileRoute } from "@tanstack/react-router";
import { ReviewTemplate } from "@/components/site/ReviewTemplate";

// Ficha conferida em 28/10/2026: Samsung Newsroom Brasil (bateria, tela, IP68, 7 anos de
// atualizações, 45 W) e Canaltech (processador, câmeras, dimensões).
const PAGE_TITLE = "Galaxy S25 FE vale a pena em 2026? Review, ficha e veredito";
const PAGE_DESCRIPTION =
  "Sim, para quem quer um Samsung de linha S sem pagar preço de topo: 7 anos de atualizações, IP68 e teleobjetiva. Veja pontos fracos, preço e quando o S24 ainda compensa.";

export const Route = createFileRoute("/review/galaxy-s25-fe")({
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
            "galaxy-s25-fe",
            "Galaxy S25 FE: análise documental",
            "Análise documental: perfil, limites, configuração e alternativas antes de comprar.",
          ),
        ),
      },
    ],
  }),
  component: ReviewGalaxyS25FE,
});

function ReviewGalaxyS25FE() {
  return (
    <ReviewTemplate
      breadcrumbs={[
        { label: "Home", to: "/" },
        { label: "Celulares", to: "/celulares" },
        { label: "Review Galaxy S25 FE" },
      ]}
      eyebrow="Análise editorial"
      title="Galaxy S25 FE vale a pena em 2026?"
      description="Sim, para quem quer a experiência da linha Galaxy S, com câmera teleobjetiva, resistência IP68 e sete anos de atualizações, sem pagar o preço de um topo de linha. O ponto fraco é o processador, que é o mesmo da geração anterior."
      updatedAt="Atualizado em outubro de 2026"
      readingTime="Leitura • 6 min"
      productName="Galaxy S25 FE"
      priceLabel="Ver preço na Amazon"
      overallScore="8.8"
      verdictShort="Sim — o Galaxy S25 FE é a forma mais barata de ter um Samsung da linha S novo em 2026. Ele junta tela de 120 Hz, três câmeras com teleobjetiva, IP68 e sete anos de atualizações. Não compre se você quer o processador mais recente ou carregamento muito rápido."
      affiliateHref={GALAXY_S25_FE_AMAZON_URL}
      affiliate={{
        title: "Galaxy S25 FE: confira o preço de hoje",
        description:
          "Compare as duas lojas. Até R$ 3.000, é a forma mais barata de ter um Galaxy S novo com sete anos de atualizações.",
        buttonText: "Ver Galaxy S25 FE na Amazon",
        highlight: "7 anos de atualizações • IP68 • Teleobjetiva • 4.900 mAh",
      }}
      decision={{
        bestFor:
          "Você quer um Samsung que dure muitos anos com atualizações, com câmera versátil (incluindo teleobjetiva) e resistência à água, gastando menos que num Galaxy S topo de linha.",
        caution:
          "O seu foco é desempenho máximo em jogos pesados ou recarga muito rápida; nesse caso, intermediários como o Poco X7 Pro entregam mais pelo preço.",
        comparisonHref: "/review/galaxy-s24",
        comparisonLabel: "Comparar com o Galaxy S24",
      }}
      pros={[
        "Sete anos de atualizações de sistema e segurança, segundo a Samsung",
        "Câmera tripla com teleobjetiva de 8 MP, rara nesta faixa de preço",
        "Resistência IP68 à água e poeira",
        "Tela Dynamic AMOLED 2X de 6,7\" com 120 Hz",
        "Bateria de 4.900 mAh, maior que a do Galaxy S24",
        "Corpo fino (7,4 mm) para um aparelho de tela grande",
      ]}
      cons={[
        "Processador Exynos 2400, o mesmo do Galaxy S24 e do S24 FE",
        "Carregamento de 45 W, abaixo de rivais chineses da mesma faixa",
        "Carregador vendido à parte",
        "Versão de 128 GB pode ficar apertada para quem guarda muitas fotos e vídeos",
      ]}
      scores={[
        { label: "Tela", score: "9.0" },
        { label: "Desempenho", score: "8.6" },
        { label: "Câmera", score: "8.7" },
        { label: "Bateria", score: "8.5" },
        { label: "Atualizações", score: "9.6" },
        { label: "Custo-benefício", score: "8.6" },
      ]}
      specs={[
        ["Tela", 'Dynamic AMOLED 2X 6,7" • FHD+ • 120 Hz'],
        ["Processador", "Samsung Exynos 2400"],
        ["Memória RAM", "8 GB"],
        ["Armazenamento", "128 GB, 256 GB ou 512 GB, conforme versão"],
        ["Câmera principal", "50 MP (f/1.8)"],
        ["Câmera ultrawide", "12 MP (f/2.2)"],
        ["Teleobjetiva", "8 MP (f/2.4)"],
        ["Câmera frontal", "12 MP (f/2.2)"],
        ["Bateria", "4.900 mAh (típica)"],
        ["Carregamento", "Até 45 W com fio (carregador vendido à parte)"],
        ["Proteção", "IP68"],
        ["Dimensões e peso", "161,3 × 76,6 × 7,4 mm • 190 g"],
        ["Atualizações", "7 anos de software e segurança, segundo a Samsung"],
      ]}
      sections={[
        {
          eyebrow: "Veredito",
          title: "Para quem o Galaxy S25 FE faz sentido",
          text: "O S25 FE é para quem quer comprar um celular e ficar com ele por muitos anos. A promessa de sete anos de atualizações, a resistência IP68 e a câmera com teleobjetiva são diferenciais difíceis de encontrar juntos abaixo do preço de um Galaxy S tradicional. Quem troca de celular a cada um ou dois anos e quer só potência pode gastar menos em outra linha.",
        },
        {
          eyebrow: "Tela e construção",
          title: "Tela grande e fluida em um corpo fino",
          text: "A tela Dynamic AMOLED 2X de 6,7 polegadas com 120 Hz é um dos pontos fortes. O aparelho tem 7,4 mm de espessura e 190 g, o que é leve para o tamanho. A certificação IP68 garante resistência a água doce em condições de laboratório, mas, como a própria Samsung lembra, essa proteção pode diminuir com o tempo.",
        },
        {
          eyebrow: "Desempenho",
          title: "Processador repetido é o ponto fraco",
          text: "O Exynos 2400 é o mesmo chip do Galaxy S24. Ele dá conta do uso diário, de jogos populares e dos recursos de IA da Samsung com folga, mas não é a geração mais nova. Para quem joga títulos pesados por horas, intermediários focados em desempenho entregam mais pelo mesmo preço.",
        },
        {
          eyebrow: "Câmeras",
          title: "Teleobjetiva faz diferença no dia a dia",
          text: "O conjunto tem câmera principal de 50 MP, ultrawide de 12 MP e teleobjetiva de 8 MP. A teleobjetiva é o que separa o S25 FE da maioria dos intermediários: permite fotos de pessoas e objetos distantes com mais qualidade do que o zoom digital. A câmera frontal é de 12 MP.",
        },
        {
          eyebrow: "Bateria",
          title: "Bateria maior que a do Galaxy S24",
          text: "A bateria de 4.900 mAh é maior que a do Galaxy S24, de 4.000 mAh. O carregamento chega a 45 W com um carregador compatível, que não vem na caixa. É rápido o bastante para o dia a dia, mas fica atrás de rivais da Xiaomi e da Motorola.",
        },
        {
          eyebrow: "Comparação",
          title: "Galaxy S25 FE ou Galaxy S24?",
          text: "Na nossa checagem de outubro de 2026, o S24 novo custava bem mais que o S25 FE. O S24 só faz sentido para quem faz questão de um celular compacto, com tela de 6,2 polegadas. Para todo o resto, o S25 FE entrega bateria maior e mais tempo de atualizações por menos dinheiro.",
        },
      ]}
      finalRecommendation="O Galaxy S25 FE vale a pena para quem quer um Samsung completo, durável e com câmera versátil sem pagar preço de topo de linha. Compre se atualizações por muitos anos, IP68 e teleobjetiva pesam na sua decisão. Se o seu foco é só desempenho em jogos ou recarga rápida, compare com o Poco X7 Pro antes de decidir."
      faq={[
        {
          question: "O Galaxy S25 FE vale a pena em 2026?",
          answer:
            "Sim, principalmente para quem quer um Samsung da linha S com sete anos de atualizações, IP68 e câmera teleobjetiva, gastando menos que num Galaxy S topo de linha.",
        },
        {
          question: "Quantos anos de atualização o Galaxy S25 FE recebe?",
          answer:
            "A Samsung promete sete anos de atualizações contínuas de software e segurança para o Galaxy S25 FE.",
        },
        {
          question: "O Galaxy S25 FE é à prova d'água?",
          answer:
            "Ele tem certificação IP68, com resistência a imersão em água doce em condições de laboratório. A Samsung avisa que essa resistência não é permanente e pode diminuir com o tempo.",
        },
        {
          question: "Galaxy S25 FE ou Galaxy S24: qual comprar?",
          answer:
            "Para a maioria das pessoas, o S25 FE: bateria maior, mais anos de atualização e, na nossa última checagem, preço menor. O S24 só compensa para quem quer um aparelho compacto.",
        },
        {
          question: "O Galaxy S25 FE vem com carregador?",
          answer:
            "Não. O carregamento de até 45 W exige um adaptador compatível, vendido separadamente.",
        },
      ]}
      relatedLinks={[
        { label: "Review Galaxy S24", to: "/review/galaxy-s24" },
        { label: "Melhores celulares Samsung", to: "/melhores-celulares-samsung" },
        { label: "Celular custo-benefício em 2026", to: "/melhores-celulares-custo-beneficio" },
      ]}
    />
  );
}
