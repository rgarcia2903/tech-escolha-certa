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
  "galaxy-a17-4g-vs-galaxy-a17-5g": {
    slug: "galaxy-a17-4g-vs-galaxy-a17-5g",
    a: { id: "galaxy-a17-5g", name: "Galaxy A17 5G", reviewPath: "/review/galaxy-a17-5g" },
    b: { id: "galaxy-a17-4g", name: "Galaxy A17 4G", reviewPath: "/melhor-celular-ate-1000" },
    title: "Galaxy A17 4G ou 5G: qual comprar em 2026?",
    description:
      "Galaxy A17 4G vs A17 5G: a tela, as câmeras e a bateria são iguais. Veja a única diferença que importa e qual versão comprar pelo preço de hoje.",
    shortAnswer:
      "Os dois são quase iguais: mesma tela AMOLED de 90 Hz, mesmas câmeras, mesma bateria de 5.000 mAh, IP54 e seis anos de atualizações. O 5G tem processador um pouco mais rápido (Exynos 1330) e, claro, 5G. Se a diferença de preço for pequena, compre o 5G. O 4G só vale se estiver claramente mais barato.",
    chooseA: [
      "A diferença de preço para o 4G é pequena.",
      "Você quer 5G e um pouco mais de fôlego no processador.",
      "Vai ficar com o celular por muitos anos.",
    ],
    chooseB: [
      "Ele está pelo menos uns R$ 100 mais barato.",
      "Na sua região, o 5G ainda não faz diferença.",
      "O uso é básico: WhatsApp, redes sociais e vídeos.",
    ],
    rows: [
      { label: "Processador", a: "Exynos 1330 (5 nm)", b: "Helio G99 (6 nm)", winner: "a" },
      { label: "5G", a: "Sim", b: "Não", winner: "a" },
      { label: "Tela", a: 'AMOLED 6,7" • 90 Hz', b: 'AMOLED 6,7" • 90 Hz', winner: "tie" },
      { label: "Câmeras", a: "50 MP OIS + 5 + 2 MP", b: "50 MP OIS + 5 + 2 MP", winner: "tie" },
      { label: "Bateria e recarga", a: "5.000 mAh • 25 W", b: "5.000 mAh • 25 W", winner: "tie" },
      { label: "Proteção", a: "IP54", b: "IP54", winner: "tie" },
      { label: "Atualizações", a: "6 anos", b: "6 anos", winner: "tie" },
      { label: "Preço de lançamento", a: "R$ 1.699", b: "R$ 1.399", winner: "b" },
      { label: "Compre se estiver até", a: "R$ 900", b: "R$ 850", winner: "tie" },
    ],
    faq: [
      {
        question: "Qual a diferença entre o Galaxy A17 4G e o A17 5G?",
        answer:
          "O processador (Exynos 1330 no 5G, Helio G99 no 4G) e o suporte a 5G. Tela, câmeras, bateria, proteção e atualizações são iguais.",
      },
      {
        question: "O Galaxy A17 4G é ruim?",
        answer:
          "Não. Para uso básico ele atende bem. Só não faz sentido pagar quase o mesmo que o 5G, que é um pouco mais rápido.",
      },
      {
        question: "Vale mais um A17 5G ou um Galaxy A36?",
        answer:
          "Se você pode gastar uns R$ 450 a mais, o A36 é bem superior: processador mais forte, tela de 120 Hz e IP67.",
      },
    ],
  },
  "galaxy-a07-vs-moto-g06": {
    slug: "galaxy-a07-vs-moto-g06",
    a: { id: "galaxy-a07", name: "Galaxy A07", reviewPath: "/melhor-celular-ate-1000" },
    b: { id: "moto-g06", name: "Moto G06", reviewPath: "/melhor-celular-ate-1000" },
    title: "Galaxy A07 ou Moto G06: qual comprar em 2026?",
    description:
      "Galaxy A07 vs Moto G06: processador, tela, bateria, recarga e atualizações dos dois celulares mais baratos entre os mais vendidos. Veja qual comprar.",
    shortAnswer:
      "O Galaxy A07, para a maioria das pessoas: o processador Helio G99 é bem mais rápido que o Helio G81 do Moto G06, a recarga é mais rápida e a Samsung promete seis anos de atualizações. O Moto G06 só compensa se você quer tela grande de 120 Hz, entrada para fone e o menor preço possível.",
    chooseA: [
      "Quer um celular que continue fluido por mais tempo.",
      "Valoriza atualizações por muitos anos.",
      "Quer carregar mais rápido.",
    ],
    chooseB: [
      "Quer a maior tela (6,9\") com 120 Hz.",
      "Prefere mais proteção contra água e poeira (IP64).",
      "Ele está bem mais barato que o A07.",
    ],
    rows: [
      { label: "Processador", a: "Helio G99 (6 nm)", b: "Helio G81 (12 nm)", winner: "a" },
      { label: "Tela", a: 'LCD 6,7" HD+ • 90 Hz', b: 'LCD 6,9" HD+ • 120 Hz', winner: "b" },
      { label: "Câmera principal", a: "50 MP", b: "50 MP", winner: "tie" },
      { label: "Bateria", a: "5.000 mAh", b: "5.200 mAh", winner: "b" },
      { label: "Recarga", a: "15 W", b: "10 W", winner: "a" },
      { label: "Proteção", a: "IP54", b: "IP64", winner: "b" },
      { label: "Atualizações", a: "6 anos", b: "Não divulgado em detalhe", winner: "a" },
      { label: "Compre se estiver até", a: "R$ 800", b: "R$ 700", winner: "tie" },
    ],
    faq: [
      {
        question: "Qual é mais rápido, Galaxy A07 ou Moto G06?",
        answer: "O Galaxy A07. O Helio G99 é bem mais forte que o Helio G81 do Moto G06.",
      },
      {
        question: "Vale juntar um pouco mais?",
        answer:
          "Sim, se puder. O Galaxy A17 5G costuma custar pouco mais e tem tela AMOLED, câmera com estabilização óptica, 5G e seis anos de atualizações.",
      },
      {
        question: "Os dois têm 5G?",
        answer: "Não. As versões mais vendidas dos dois são 4G.",
      },
    ],
  },
  "poco-x8-pro-vs-poco-x7-pro": {
    slug: "poco-x8-pro-vs-poco-x7-pro",
    a: { id: "poco-x8-pro", name: "Poco X8 Pro", reviewPath: "/melhores-celulares-xiaomi" },
    b: { id: "poco-x7-pro", name: "Poco X7 Pro", reviewPath: "/review/poco-x7-pro" },
    title: "Poco X8 Pro ou Poco X7 Pro: qual comprar em 2026?",
    description:
      "Poco X8 Pro vs Poco X7 Pro: processador, bateria, recarga e atualizações lado a lado. Veja se vale pagar a diferença pelo modelo novo.",
    shortAnswer:
      "O Poco X8 Pro, se a diferença for de até uns R$ 300: o Dimensity 8500 Ultra é bem mais rápido, a bateria sobe para 6.500 mAh, a recarga para 100 W e ele recebe atualizações por mais tempo. O X7 Pro só vale se estiver abaixo de R$ 2.150, especialmente na versão de 512 GB.",
    chooseA: [
      "Joga títulos pesados e quer o máximo de desempenho.",
      "Quer a maior bateria e a recarga mais rápida.",
      "Vai ficar com o celular por vários anos.",
    ],
    chooseB: [
      "Ele está bem mais barato que o X8 Pro.",
      "Prefere uma versão de 512 GB pelo mesmo dinheiro.",
      "Joga jogos populares, não os mais pesados.",
    ],
    rows: [
      { label: "Processador", a: "Dimensity 8500 Ultra", b: "Dimensity 8400-Ultra", winner: "a" },
      { label: "Tela", a: 'AMOLED 6,59" 1.5K • 120 Hz • 3.500 nits', b: 'AMOLED 6,67" 1.5K • 120 Hz', winner: "tie" },
      { label: "Bateria", a: "6.500 mAh", b: "6.000 mAh", winner: "a" },
      { label: "Recarga", a: "100 W", b: "90 W", winner: "a" },
      { label: "Câmera principal", a: "50 MP com OIS", b: "50 MP com OIS", winner: "tie" },
      { label: "Proteção", a: "IP68", b: "IP68", winner: "tie" },
      { label: "Atualizações", a: "4 de sistema, 6 de segurança", b: "Geração anterior", winner: "a" },
      { label: "Compre se estiver até", a: "R$ 2.450", b: "R$ 2.150", winner: "tie" },
    ],
    faq: [
      {
        question: "O Poco X8 Pro é muito melhor que o X7 Pro?",
        answer:
          "Em desempenho e bateria, sim. Na tela e na câmera, a diferença é pequena. Se o preço for parecido, o X8 Pro é a escolha.",
      },
      {
        question: "Qual o melhor Poco para jogos em 2026?",
        answer: "O Poco X8 Pro. O Dimensity 8500 Ultra é o processador mais forte da faixa de até R$ 2.500.",
      },
      {
        question: "Poco X8 Pro ou X8 Pro Max?",
        answer:
          "O Max é outro aparelho, maior e mais caro, com bateria ainda maior. Confira o nome no anúncio para não pagar a mais por engano.",
      },
    ],
  },
  "moto-g77-vs-moto-g86": {
    slug: "moto-g77-vs-moto-g86",
    a: { id: "moto-g86-5g", name: "Moto G86 5G", reviewPath: "/review/moto-g86-5g" },
    b: { id: "moto-g77", name: "Moto G77", reviewPath: "/melhores-celulares-motorola" },
    title: "Moto G77 ou Moto G86: qual comprar em 2026?",
    description:
      "Moto G77 vs Moto G86: processador, tela, câmera de 108 MP, resistência e atualizações. Veja qual Motorola intermediário vale mais a pena.",
    shortAnswer:
      "O Moto G86 é mais completo: processador bem mais forte (Dimensity 7300 contra 6400) e resistência IP68/IP69. O Moto G77 é mais novo, tem tela maior e mais brilhante, câmera de 108 MP com OIS e três atualizações de Android, e costuma custar menos. Para jogos e durabilidade, G86; para tela, câmera e economia, G77.",
    chooseA: [
      "Quer mais desempenho para jogos e multitarefa.",
      "Precisa de resistência a água e poeira (IP68 e IP69).",
      "A diferença de preço é pequena.",
    ],
    chooseB: [
      "Quer a tela maior e mais brilhante (6,78\", 5.000 nits).",
      "Prefere câmera de 108 MP e mais atualizações de Android.",
      "Quer gastar menos.",
    ],
    rows: [
      { label: "Processador", a: "Dimensity 7300 (4 nm)", b: "Dimensity 6400 (6 nm)", winner: "a" },
      { label: "Tela", a: 'pOLED 6,67" • 120 Hz • 4.500 nits', b: 'AMOLED 6,78" • 120 Hz • 5.000 nits', winner: "b" },
      { label: "Câmera principal", a: "50 MP Sony com OIS", b: "108 MP com OIS", winner: "b" },
      { label: "Bateria", a: "5.200 mAh", b: "5.200 mAh", winner: "tie" },
      { label: "Proteção", a: "IP68 e IP69", b: "IP64 e MIL-STD", winner: "a" },
      { label: "Atualizações", a: "2 de Android, 4 de segurança", b: "3 de Android", winner: "b" },
      { label: "Lançamento", a: "Maio de 2025", b: "Janeiro de 2026", winner: "b" },
      { label: "Compre se estiver até", a: "R$ 1.900", b: "R$ 1.500", winner: "tie" },
    ],
    faq: [
      {
        question: "O Moto G77 substitui o Moto G86?",
        answer:
          "Não exatamente. O G77 é mais novo, mas tem processador mais fraco. Os dois convivem: o G86 é mais forte e resistente; o G77 tem tela e câmera melhores no papel.",
      },
      {
        question: "Qual é melhor para jogos?",
        answer: "O Moto G86, pelo Dimensity 7300. Para jogos pesados, o Poco X8 Pro é ainda melhor.",
      },
      {
        question: "Qual tem a câmera melhor?",
        answer:
          "No papel, o G77, com 108 MP e OIS. O G86 usa sensor Sony de 50 MP com OIS, que também entrega fotos muito boas.",
      },
    ],
  },
  "edge-70-vs-edge-60-pro": {
    slug: "edge-70-vs-edge-60-pro",
    a: { id: "edge-60-pro", name: "Motorola Edge 60 Pro", reviewPath: "/review/edge-60-pro" },
    b: { id: "edge-70", name: "Motorola Edge 70", reviewPath: "/melhores-celulares-motorola" },
    title: "Edge 70 ou Edge 60 Pro: qual comprar em 2026?",
    description:
      "Motorola Edge 70 vs Edge 60 Pro: o ultrafino contra o de bateria grande e zoom óptico. Veja diferenças, atualizações e qual comprar.",
    shortAnswer:
      "Depende do que você valoriza. O Edge 60 Pro tem bateria bem maior (6.000 contra 4.800 mAh), recarga mais rápida e teleobjetiva com zoom óptico de 3x. O Edge 70 é ultrafino (6,3 mm e 163 g), tem processador Snapdragon e quatro anos de Android, contra três do 60 Pro. Bateria e zoom: Edge 60 Pro. Leveza e suporte: Edge 70.",
    chooseA: [
      "Quer bateria para mais de um dia e recarga de 90 W.",
      "Usa zoom óptico para fotos de longe.",
      "Prefere mais RAM (12 GB).",
    ],
    chooseB: [
      "Quer um celular fino e leve.",
      "Prefere mais anos de atualização de Android.",
      "Quer processador Snapdragon.",
    ],
    rows: [
      { label: "Processador", a: "Dimensity 8350 Extreme", b: "Snapdragon 7 Gen 4", winner: "tie" },
      { label: "Espessura e peso", a: "8,2 mm • 186 g", b: "6,3 mm • 163 g", winner: "b" },
      { label: "Bateria", a: "6.000 mAh", b: "4.800 mAh", winner: "a" },
      { label: "Recarga", a: "90 W + sem fio 15 W", b: "68 W + sem fio 15 W", winner: "a" },
      { label: "Câmeras traseiras", a: "50 + 50 MP + tele 10 MP (3x)", b: "50 + 50 MP", winner: "a" },
      { label: "Câmera frontal", a: "50 MP", b: "50 MP", winner: "tie" },
      { label: "Proteção", a: "IP68, IP69 e MIL-STD", b: "IP68, IP69 e MIL-STD", winner: "tie" },
      { label: "Atualizações", a: "3 anos", b: "4 anos de Android", winner: "b" },
      { label: "Compre se estiver até", a: "R$ 2.700", b: "R$ 2.400", winner: "tie" },
    ],
    faq: [
      {
        question: "O Edge 70 é sucessor do Edge 60 Pro?",
        answer:
          "Não diretamente. O Edge 70 é a versão fina da linha; o sucessor direto do 60 Pro é o Edge 70 Pro. Por isso cada um ganha em pontos diferentes.",
      },
      {
        question: "A bateria do Edge 70 dura o dia todo?",
        answer:
          "Para uso normal, sim. Mas com 4.800 mAh ela é bem menor que a do Edge 60 Pro, que é a escolha para quem usa muito o celular fora de casa.",
      },
      {
        question: "Algum dos dois vem com carregador?",
        answer: "Confira no anúncio: o conteúdo da caixa pode variar conforme a loja.",
      },
    ],
  },
  "galaxy-a37-vs-galaxy-a36": {
    slug: "galaxy-a37-vs-galaxy-a36",
    a: { id: "galaxy-a36-5g", name: "Galaxy A36 5G", reviewPath: "/review/galaxy-a36-5g" },
    b: { id: "galaxy-a37-5g", name: "Galaxy A37 5G", reviewPath: "/melhores-celulares-samsung" },
    title: "Galaxy A37 ou Galaxy A36: qual comprar em 2026?",
    description:
      "Galaxy A37 vs Galaxy A36: processador, proteção, atualizações e preço lado a lado. Veja se vale pagar a mais pelo modelo novo.",
    shortAnswer:
      "O Galaxy A36 continua sendo a melhor compra pelo preço. O A37 tem processador mais forte (Exynos 1480, o mesmo do antigo A55), IP68 e atualizações até mais tarde, por ser de 2026. Vale pagar a mais pelo A37 se a diferença for de até uns R$ 300; acima disso, fique com o A36.",
    chooseA: [
      "Quer gastar menos com a mesma tela, câmera e bateria.",
      "O uso é redes sociais, vídeos e fotos do dia a dia.",
      "A diferença para o A37 passa de R$ 300.",
    ],
    chooseB: [
      "Quer mais desempenho para jogos e multitarefa.",
      "Faz questão de IP68.",
      "Quer o suporte de atualizações indo até o mais tarde possível.",
    ],
    rows: [
      { label: "Processador", a: "Snapdragon 6 Gen 3", b: "Exynos 1480", winner: "b" },
      { label: "Tela", a: 'AMOLED 6,7" • 120 Hz', b: 'AMOLED 6,7" • 120 Hz • 1.900 nits', winner: "tie" },
      { label: "Câmeras", a: "50 MP OIS + 8 + 5 MP", b: "50 MP OIS + 8 + 5 MP", winner: "tie" },
      { label: "Bateria e recarga", a: "5.000 mAh • 45 W", b: "5.000 mAh • 45 W", winner: "tie" },
      { label: "Proteção", a: "IP67", b: "IP68", winner: "b" },
      { label: "Atualizações", a: "6 anos (desde 2025)", b: "6 anos (desde 2026)", winner: "b" },
      { label: "Compre se estiver até", a: "R$ 1.350", b: "R$ 1.700", winner: "a" },
    ],
    faq: [
      {
        question: "Vale a pena trocar o A36 pelo A37?",
        answer: "Não. Se você já tem o A36, a diferença não justifica a troca.",
      },
      {
        question: "Galaxy A37 ou Galaxy A57?",
        answer:
          "O A57 tem processador ainda mais forte, corpo mais fino de alumínio e ultrawide melhor. Se a diferença for pequena, vá de A57.",
      },
      {
        question: "Algum dos dois vem com carregador de 45 W?",
        answer: "Não. O carregamento de 45 W exige um adaptador compatível, vendido separadamente.",
      },
    ],
  },
};
