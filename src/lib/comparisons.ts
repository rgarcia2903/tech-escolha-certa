// Comparativos "X ou Y": dados de cada página. As fichas vêm dos reviews do site
// (fontes oficiais citadas em cada review). Preço-alvo editorial de src/lib/fair-prices.ts;
// não exibir preço de loja (política da Amazon).

export type Side = "a" | "b" | "tie";

export type Comparison = {
  slug: string;
  a: { id: string; name: string; reviewPath: string };
  b: { id: string; name: string; reviewPath: string };
  title: string;
  description: string;
  /** Resposta curta, logo no topo. */
  shortAnswer: string;
  chooseA: string[];
  chooseB: string[];
  rows: { label: string; a: string; b: string; winner: Side }[];
  faq: { question: string; answer: string }[];
};

export const COMPARISONS: Record<string, Comparison> = {
  "galaxy-a57-vs-galaxy-a36": {
    slug: "galaxy-a57-vs-galaxy-a36",
    a: { id: "galaxy-a57-5g", name: "Galaxy A57 5G", reviewPath: "/review/galaxy-a57-5g" },
    b: { id: "galaxy-a36-5g", name: "Galaxy A36 5G", reviewPath: "/review/galaxy-a36-5g" },
    title: "Galaxy A57 ou Galaxy A36: qual comprar em 2026?",
    description:
      "Galaxy A57 vs Galaxy A36: processador, tela, câmeras, resistência e atualizações lado a lado. Veja quando vale pagar mais pelo A57 e quando o A36 basta.",
    shortAnswer:
      "Compre o Galaxy A57 se a diferença de preço for de até uns R$ 500: ele é bem mais rápido, mais fino, tem IP68 e ultrawide melhor. Se o orçamento estiver apertado, o Galaxy A36 entrega a mesma experiência Samsung, com os mesmos seis anos de atualizações, gastando menos.",
    chooseA: [
      "Você quer desempenho de sobra por vários anos (Exynos 1680).",
      "Faz questão de IP68 e de um aparelho fino e leve (6,9 mm, 179 g).",
      "Tira muitas fotos de grupo e paisagem (ultrawide de 12 MP).",
    ],
    chooseB: [
      "Quer gastar menos e o uso é redes sociais, vídeos e fotos do dia a dia.",
      "O A57 estiver bem acima de R$ 1.850.",
      "IP67 e 7,4 mm já atendem você.",
    ],
    rows: [
      { label: "Processador", a: "Exynos 1680 (4 nm)", b: "Snapdragon 6 Gen 3 (4 nm)", winner: "a" },
      { label: "Tela", a: 'AMOLED+ 6,7" 120 Hz, HDR10+', b: 'AMOLED 6,7" 120 Hz', winner: "tie" },
      { label: "Câmeras traseiras", a: "50 MP OIS + 12 MP + 5 MP", b: "50 MP OIS + 8 MP + 5 MP", winner: "a" },
      { label: "Câmera frontal", a: "12 MP, vídeo 4K", b: "12 MP, vídeo 4K", winner: "tie" },
      { label: "Bateria e recarga", a: "5.000 mAh • 45 W", b: "5.000 mAh • 45 W", winner: "tie" },
      { label: "Proteção", a: "IP68", b: "IP67", winner: "a" },
      { label: "Espessura e peso", a: "6,9 mm • 179 g", b: "7,4 mm • 195 g", winner: "a" },
      { label: "Atualizações", a: "6 anos", b: "6 anos", winner: "tie" },
      { label: "Compre se estiver até", a: "R$ 1.850", b: "R$ 1.350", winner: "b" },
    ],
    faq: [
      {
        question: "Vale a pena pagar mais pelo Galaxy A57?",
        answer:
          "Vale se a diferença for pequena, até uns R$ 500. O A57 é mais rápido, mais resistente e mais fino. Com diferença maior, o A36 é a compra mais inteligente.",
      },
      {
        question: "Os dois recebem atualizações pelo mesmo tempo?",
        answer: "Sim. A Samsung promete seis anos de atualizações para os dois.",
      },
      {
        question: "Algum dos dois vem com carregador?",
        answer: "Não. Os dois carregam a 45 W com um adaptador compatível, vendido separadamente.",
      },
    ],
  },
  "moto-g86-vs-redmi-note-15-5g": {
    slug: "moto-g86-vs-redmi-note-15-5g",
    a: { id: "moto-g86-5g", name: "Moto G86 5G", reviewPath: "/review/moto-g86-5g" },
    b: { id: "redmi-note-15-5g", name: "Redmi Note 15 5G", reviewPath: "/review/redmi-note-15-5g" },
    title: "Moto G86 ou Redmi Note 15 5G: qual comprar em 2026?",
    description:
      "Moto G86 vs Redmi Note 15 5G: tela, câmera, bateria, recarga e resistência lado a lado. Veja qual intermediário de até R$ 2.000 combina com você.",
    shortAnswer:
      "Escolha o Moto G86 se você prioriza tela, câmera e resistência: a tela pOLED 1.5K é mais nítida, a câmera tem estabilização óptica e ele tem IP68/IP69. Escolha o Redmi Note 15 5G se o mais importante é bateria e recarga: são 5.520 mAh, 45 W com carregador na caixa e cartão de memória.",
    chooseA: [
      "Assiste muito vídeo e quer a tela mais nítida e brilhante.",
      "Tira fotos à noite ou grava andando (estabilização óptica).",
      "Precisa de resistência a água e quedas (IP68, IP69 e MIL-STD).",
    ],
    chooseB: [
      "Passa o dia longe da tomada e quer recarga rápida.",
      "Quer expandir o armazenamento com cartão de memória.",
      "Prefere um processador Snapdragon.",
    ],
    rows: [
      { label: "Tela", a: 'pOLED 6,7" 1.5K • 120 Hz • 4.500 nits', b: 'AMOLED 6,67" FHD+ • 120 Hz • 3.200 nits', winner: "a" },
      { label: "Processador", a: "Dimensity 7300", b: "Snapdragon 6 Gen 3", winner: "tie" },
      { label: "Armazenamento", a: "256 GB", b: "256 GB + microSD", winner: "b" },
      { label: "Câmera principal", a: "50 MP Sony com OIS", b: "108 MP", winner: "a" },
      { label: "Câmera frontal", a: "32 MP", b: "20 MP", winner: "a" },
      { label: "Bateria", a: "5.200 mAh", b: "5.520 mAh", winner: "b" },
      { label: "Recarga", a: "33 W, carregador na caixa", b: "45 W, carregador na caixa", winner: "b" },
      { label: "Proteção", a: "IP68, IP69 e MIL-STD", b: "IP65", winner: "a" },
      { label: "Compre se estiver até", a: "R$ 1.900", b: "R$ 1.800", winner: "tie" },
    ],
    faq: [
      {
        question: "Qual é melhor para jogos?",
        answer:
          "Os dois rodam bem jogos populares e ficam no mesmo nível de desempenho. Para jogos pesados, o Poco X7 Pro é mais indicado.",
      },
      {
        question: "Qual tem a câmera melhor?",
        answer:
          "O Moto G86, principalmente à noite e em vídeo, por causa da estabilização óptica. O Note 15 5G tem mais megapixels, mas sem OIS.",
      },
      {
        question: "Os dois vêm com carregador?",
        answer: "Sim. O G86 vem com carregador de 33 W e o Redmi Note 15 5G, com um de 45 W.",
      },
    ],
  },
  "edge-60-pro-vs-galaxy-s25-fe": {
    slug: "edge-60-pro-vs-galaxy-s25-fe",
    a: { id: "edge-60-pro", name: "Motorola Edge 60 Pro", reviewPath: "/review/edge-60-pro" },
    b: { id: "galaxy-s25-fe", name: "Galaxy S25 FE", reviewPath: "/review/galaxy-s25-fe" },
    title: "Edge 60 Pro ou Galaxy S25 FE: qual comprar em 2026?",
    description:
      "Motorola Edge 60 Pro vs Galaxy S25 FE: bateria, câmeras, recarga, resistência e atualizações lado a lado. Veja qual premium acessível combina com você.",
    shortAnswer:
      "O Edge 60 Pro ganha em quase tudo na ficha: bateria de 6.000 mAh, recarga de 90 W, 12 GB de RAM, ultrawide e selfie de 50 MP e IP69, e costuma custar menos. O Galaxy S25 FE só vence em um ponto, mas é um ponto importante: sete anos de atualizações, contra três. Se você fica com o celular por mais de três anos, vá de S25 FE.",
    chooseA: [
      "Troca de celular a cada dois ou três anos.",
      "Quer a maior bateria e a recarga mais rápida (90 W + sem fio).",
      "Faz muitas selfies e vídeos (frontal de 50 MP em 4K).",
    ],
    chooseB: [
      "Quer ficar com o celular por cinco anos ou mais.",
      "Prefere tela plana e o ecossistema Samsung.",
      "Prioriza suporte e valor de revenda.",
    ],
    rows: [
      { label: "Tela", a: 'pOLED curva 6,7" • 120 Hz', b: 'Dynamic AMOLED 2X 6,7" plana • 120 Hz', winner: "tie" },
      { label: "Processador", a: "Dimensity 8350 Extreme", b: "Exynos 2400", winner: "tie" },
      { label: "Memória RAM", a: "12 GB", b: "8 GB", winner: "a" },
      { label: "Câmeras traseiras", a: "50 + 50 MP + tele 10 MP (3x)", b: "50 + 12 MP + tele 8 MP", winner: "a" },
      { label: "Câmera frontal", a: "50 MP, vídeo 4K", b: "12 MP", winner: "a" },
      { label: "Bateria", a: "6.000 mAh", b: "4.900 mAh", winner: "a" },
      { label: "Recarga", a: "90 W + sem fio 15 W", b: "45 W", winner: "a" },
      { label: "Proteção", a: "IP68, IP69 e MIL-STD", b: "IP68", winner: "a" },
      { label: "Atualizações", a: "3 anos", b: "7 anos", winner: "b" },
      { label: "Compre se estiver até", a: "R$ 2.700", b: "R$ 3.000", winner: "a" },
    ],
    faq: [
      {
        question: "Qual tem a melhor câmera?",
        answer:
          "Os dois têm teleobjetiva. O Edge 60 Pro tem ultrawide e câmera frontal de 50 MP, o que dá vantagem em fotos de grupo e selfies.",
      },
      {
        question: "Por que as atualizações importam tanto?",
        answer:
          "Elas mantêm o celular seguro e compatível com apps. Com sete anos, o S25 FE continua recebendo correções muito depois do Edge 60 Pro.",
      },
      {
        question: "Algum dos dois vem com carregador?",
        answer: "O S25 FE não vem com carregador. Confira no anúncio do Edge 60 Pro o que acompanha a caixa.",
      },
    ],
  },
  "iphone-17-vs-iphone-17e": {
    slug: "iphone-17-vs-iphone-17e",
    a: { id: "iphone-17", name: "iPhone 17", reviewPath: "/qual-iphone-comprar" },
    b: { id: "iphone-17e", name: "iPhone 17e", reviewPath: "/qual-iphone-comprar" },
    title: "iPhone 17 ou iPhone 17e: qual comprar em 2026?",
    description:
      "iPhone 17 vs iPhone 17e: tela de 120 Hz, câmeras, Dynamic Island e preço lado a lado. Veja quando vale pagar mais pelo 17 e quando o 17e basta.",
    shortAnswer:
      "Os dois têm o mesmo chip A19 e 256 GB. O iPhone 17 vale a diferença se você quer tela de 120 Hz maior (6,3\"), câmera ultra-angular de 48 MP, selfie de 18 MP e Dynamic Island. Se o uso é WhatsApp, redes sociais e fotos do dia a dia, o iPhone 17e entrega a mesma potência gastando menos.",
    chooseA: [
      "Quer a tela mais fluida (120 Hz) e um pouco maior.",
      "Tira fotos de paisagem e de grupo (ultra-angular de 48 MP).",
      "Faz muitas selfies e chamadas de vídeo (frontal de 18 MP Center Stage).",
    ],
    chooseB: [
      "Quer o iPhone novo mais barato, com chip atual e 256 GB.",
      "Usa uma câmera só no dia a dia e não sente falta da ultra-angular.",
      "Prefere um aparelho menor e mais leve (6,1\", 170 g).",
    ],
    rows: [
      { label: "Chip", a: "A19", b: "A19", winner: "tie" },
      { label: "Tela", a: '6,3" OLED • 120 Hz (ProMotion)', b: '6,1" OLED • 60 Hz', winner: "a" },
      { label: "Câmeras traseiras", a: "48 MP + ultra-angular 48 MP", b: "48 MP (uma câmera)", winner: "a" },
      { label: "Câmera frontal", a: "18 MP Center Stage", b: "12 MP", winner: "a" },
      { label: "Dynamic Island", a: "Sim", b: "Não (entalhe)", winner: "a" },
      { label: "Armazenamento base", a: "256 GB", b: "256 GB", winner: "tie" },
      { label: "MagSafe", a: "Sim", b: "Sim", winner: "tie" },
      { label: "Preço de lançamento", a: "R$ 7.999", b: "R$ 5.799", winner: "b" },
      { label: "Compre se estiver até", a: "R$ 5.400", b: "R$ 4.500", winner: "tie" },
    ],
    faq: [
      {
        question: "O iPhone 17e é tão rápido quanto o iPhone 17?",
        answer: "Sim, no dia a dia. Os dois usam o chip A19. A diferença está na tela, nas câmeras e no acabamento.",
      },
      {
        question: "Vale pagar a diferença pelo iPhone 17?",
        answer:
          "Vale se você usa muito a câmera ou valoriza a tela de 120 Hz. Se a diferença de preço passar de uns R$ 1.000 e seu uso for básico, o 17e é a compra mais inteligente.",
      },
      {
        question: "E o iPhone 16, ainda vale?",
        answer:
          "Só abaixo de R$ 4.000. Com 128 GB e tela de 60 Hz, ele custa quase o mesmo que o 17e de 256 GB, que é mais novo.",
      },
    ],
  },
};
