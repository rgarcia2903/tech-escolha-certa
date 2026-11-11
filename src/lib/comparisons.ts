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
  "galaxy-a37-vs-galaxy-a57": {
    slug: "galaxy-a37-vs-galaxy-a57",
    a: { id: "galaxy-a37-5g", name: "Galaxy A37 5G", reviewPath: "/review/galaxy-a37-5g" },
    b: { id: "galaxy-a57-5g", name: "Galaxy A57 5G", reviewPath: "/review/galaxy-a57-5g" },
    title: "Galaxy A37 ou Galaxy A57: qual o melhor para comprar em 2026?",
    description:
      "Galaxy A37 vs Galaxy A57: processador, câmeras, tela e preço lado a lado. Veja se vale pagar mais pelo A57 ou se o A37 basta.",
    shortAnswer:
      "São irmãos: tela AMOLED de 6,7\" com 120 Hz, bateria de 5.000 mAh com recarga de 45 W, IP68 e seis anos de atualizações nos dois. O Galaxy A57 tem processador mais forte (Exynos 1680) e ultra-angular de 12 MP. Se a diferença de preço for pequena, leve o A57; se passar de uns R$ 200, o A37 entrega quase tudo.",
    chooseA: [
      "Quer gastar menos: compre até R$ 1.700.",
      "O uso é redes sociais, fotos, vídeos e jogos leves.",
    ],
    chooseB: [
      "Joga ou usa muitos apps ao mesmo tempo (Exynos 1680).",
      "Fotografa muito com a ultra-angular.",
      "A diferença de preço é pequena.",
    ],
    rows: [
      { label: "Processador", a: "Exynos 1480", b: "Exynos 1680 (4 nm)", winner: "b" },
      { label: "Tela", a: 'AMOLED 6,7" • 120 Hz', b: 'AMOLED+ 6,7" • 120 Hz', winner: "tie" },
      { label: "Câmeras traseiras", a: "50 MP OIS + 8 MP + 5 MP", b: "50 MP OIS + 12 MP + 5 MP", winner: "b" },
      { label: "Bateria e recarga", a: "5.000 mAh • 45 W", b: "5.000 mAh • 45 W", winner: "tie" },
      { label: "Proteção", a: "IP68", b: "IP68", winner: "tie" },
      { label: "Atualizações", a: "6 versões do Android", b: "6 anos", winner: "tie" },
      { label: "Compre se estiver até", a: "R$ 1.700", b: "R$ 1.850", winner: "a" },
    ],
    faq: [
      {
        question: "Vale pagar mais pelo Galaxy A57?",
        answer: "Vale se a diferença for de até uns R$ 200: o processador é mais forte e a ultra-angular é melhor. O resto é praticamente igual.",
      },
      {
        question: "Qual é melhor para jogar?",
        answer: "O Galaxy A57, pelo Exynos 1680.",
      },
      {
        question: "Algum dos dois aceita cartão de memória?",
        answer: "O A37 não tem microSD. Escolha a capacidade certa na compra.",
      },
    ],
  },
  "moto-g17-vs-galaxy-a17": {
    slug: "moto-g17-vs-galaxy-a17",
    a: { id: "moto-g17", name: "Moto G17", reviewPath: "/review/moto-g17" },
    b: { id: "galaxy-a17-5g", name: "Galaxy A17 5G", reviewPath: "/review/galaxy-a17-5g" },
    title: "Moto G17 ou Galaxy A17: qual o melhor para comprar em 2026?",
    description:
      "Moto G17 vs Galaxy A17 5G: processador, tela, 5G, resistência e atualizações lado a lado. Veja qual celular barato vale mais.",
    shortAnswer:
      "Para a maioria, o Galaxy A17 5G: processador bem mais rápido (Exynos 1330 contra Helio G81), tela AMOLED de 90 Hz, 5G e seis anos de atualizações, por um preço parecido. O Moto G17 só leva vantagem em resistência (IP64), entrada para fone e câmera frontal de 32 MP.",
    chooseA: [
      "Faz questão de entrada para fone de ouvido.",
      "Precisa de mais resistência a poeira e água (IP64).",
      "Tira muitas selfies (frontal de 32 MP).",
    ],
    chooseB: [
      "Quer um celular que não fique lento (Exynos 1330).",
      "Quer 5G e tela AMOLED.",
      "Vai ficar muitos anos com o aparelho (seis anos de atualizações).",
    ],
    rows: [
      { label: "Processador", a: "Helio G81 Extreme (12 nm)", b: "Exynos 1330 (5 nm)", winner: "b" },
      { label: "Rede", a: "4G", b: "5G", winner: "b" },
      { label: "Tela", a: 'LCD 6,72" Full HD+ • 60 Hz', b: 'AMOLED 6,7" • 90 Hz', winner: "b" },
      { label: "Câmeras traseiras", a: "50 MP + ultra-angular 5 MP", b: "50 MP OIS + 5 MP + 2 MP", winner: "b" },
      { label: "Bateria e recarga", a: "5.200 mAh • 18 W", b: "5.000 mAh • 25 W", winner: "tie" },
      { label: "Proteção", a: "IP64", b: "IP54", winner: "a" },
      { label: "Compre se estiver até", a: "R$ 850", b: "R$ 900", winner: "tie" },
    ],
    faq: [
      {
        question: "Moto G17 ou Galaxy A17: qual é mais rápido?",
        answer: "O Galaxy A17 5G. O Exynos 1330 é de uma categoria acima do Helio G81 do Moto G17.",
      },
      {
        question: "Qual dura mais anos?",
        answer: "O Galaxy A17 5G, com seis anos de atualizações prometidas pela Samsung.",
      },
      {
        question: "Cuidado com o Galaxy A17 4G",
        answer: "Existe um Galaxy A17 4G com outro processador. Este comparativo é da versão 5G: confira no anúncio.",
      },
    ],
  },
  "moto-g17-vs-galaxy-a07": {
    slug: "moto-g17-vs-galaxy-a07",
    a: { id: "moto-g17", name: "Moto G17", reviewPath: "/review/moto-g17" },
    b: { id: "galaxy-a07", name: "Galaxy A07", reviewPath: "/review/galaxy-a07" },
    title: "Moto G17 ou Galaxy A07: qual o melhor celular barato em 2026?",
    description:
      "Moto G17 vs Galaxy A07: processador, tela, câmeras, resistência e atualizações lado a lado. Veja qual celular de entrada levar.",
    shortAnswer:
      "Depende do que pesa mais. O Galaxy A07 tem processador mais rápido (Helio G99) e seis anos de atualizações: dura mais sem travar. O Moto G17 tem tela Full HD+, câmera ultra-angular, frontal de 32 MP, bateria maior, IP64, NFC e entrada para fone. Para durar anos, o A07; para câmera e extras, o G17.",
    chooseA: [
      "Quer ultra-angular e selfie melhor (frontal de 32 MP).",
      "Quer NFC, entrada para fone e IP64.",
    ],
    chooseB: [
      "Quer um celular barato que não fique lento (Helio G99).",
      "Vai ficar muitos anos com o aparelho (seis anos de atualizações).",
      "Quer gastar menos: compre até R$ 800.",
    ],
    rows: [
      { label: "Processador", a: "Helio G81 Extreme", b: "Helio G99 (6 nm)", winner: "b" },
      { label: "Tela", a: 'LCD 6,72" Full HD+ • 60 Hz', b: 'LCD 6,7" HD+ • 90 Hz', winner: "tie" },
      { label: "Câmeras traseiras", a: "50 MP + ultra-angular 5 MP", b: "50 MP", winner: "a" },
      { label: "Bateria", a: "5.200 mAh • 18 W", b: "5.000 mAh", winner: "a" },
      { label: "Proteção", a: "IP64", b: "IP54", winner: "a" },
      { label: "Compre se estiver até", a: "R$ 850", b: "R$ 800", winner: "b" },
    ],
    faq: [
      {
        question: "Moto G17 ou Galaxy A07: qual é mais rápido?",
        answer: "O Galaxy A07. O Helio G99 é mais forte que o Helio G81 do Moto G17.",
      },
      {
        question: "Qual tem a melhor câmera?",
        answer: "O Moto G17, pela ultra-angular e pela frontal de 32 MP.",
      },
      {
        question: "Tem opção melhor por pouco mais?",
        answer: "Sim. Por uns R$ 900, o Galaxy A17 5G tem 5G, tela AMOLED e processador ainda mais rápido.",
      },
    ],
  },
  "galaxy-a36-vs-moto-g56": {
    slug: "galaxy-a36-vs-moto-g56",
    a: { id: "galaxy-a36-5g", name: "Galaxy A36 5G", reviewPath: "/review/galaxy-a36-5g" },
    b: { id: "moto-g56-5g", name: "Moto G56 5G", reviewPath: "/review/moto-g56-5g" },
    title: "Galaxy A36 ou Moto G56: qual o melhor para comprar em 2026?",
    description:
      "Galaxy A36 vs Moto G56: processador, tela AMOLED, câmeras, resistência e atualizações lado a lado. Veja qual vale mais o seu dinheiro.",
    shortAnswer:
      "O Galaxy A36 é melhor em quase tudo: processador mais forte (Snapdragon 6 Gen 3), tela AMOLED, câmera com estabilização e seis anos de atualizações. O Moto G56 ganha em resistência (IP68 e IP69) e costuma custar menos. Se a diferença for de até uns R$ 200, leve o A36.",
    chooseA: [
      "Joga ou quer o celular mais rápido da faixa.",
      "Quer tela AMOLED e câmera com estabilização.",
      "Vai ficar muitos anos com o aparelho (até 2031).",
    ],
    chooseB: [
      "Precisa de resistência máxima (IP68 e IP69).",
      "Quer gastar menos: compre até R$ 1.200.",
      "Quer microSD.",
    ],
    rows: [
      { label: "Processador", a: "Snapdragon 6 Gen 3", b: "Dimensity 7060 (6 nm)", winner: "a" },
      { label: "Tela", a: 'AMOLED 6,7" • 120 Hz', b: 'LCD 6,72" Full HD+ • 120 Hz', winner: "a" },
      { label: "Câmeras traseiras", a: "50 MP OIS + 8 MP + 5 MP", b: "50 MP", winner: "a" },
      { label: "Bateria e recarga", a: "5.000 mAh • 45 W", b: "5.200 mAh • 30 W", winner: "tie" },
      { label: "Proteção", a: "IP67", b: "IP68 e IP69", winner: "b" },
      { label: "Atualizações", a: "6 anos (até 2031)", b: "2 versões do Android, 3 anos de segurança", winner: "a" },
      { label: "Compre se estiver até", a: "R$ 1.350", b: "R$ 1.200", winner: "b" },
    ],
    faq: [
      {
        question: "Galaxy A36 ou Moto G56: qual é melhor para jogar?",
        answer: "O Galaxy A36. O Snapdragon 6 Gen 3 é mais forte que o Dimensity 7060.",
      },
      {
        question: "Qual é mais resistente?",
        answer: "O Moto G56, com IP68 e IP69. O A36 tem IP67, que já aguenta respingos e submersão rápida.",
      },
      {
        question: "Qual dura mais anos?",
        answer: "O Galaxy A36, com atualizações até 2031.",
      },
    ],
  },
  "moto-g-max-vs-edge-60-fusion": {
    slug: "moto-g-max-vs-edge-60-fusion",
    a: { id: "moto-g-max", name: "Moto G Max", reviewPath: "/review/moto-g-max" },
    b: { id: "edge-60-fusion", name: "Edge 60 Fusion", reviewPath: "/review/edge-60-fusion" },
    title: "Moto G Max ou Edge 60 Fusion: qual comprar em 2026?",
    description:
      "Moto G Max vs Motorola Edge 60 Fusion: tela, câmera de 200 MP, processador e preço lado a lado. Veja qual Motorola vale mais.",
    shortAnswer:
      "Para câmera e tela, o Moto G Max: câmera de 200 MP com estabilização, tela plana de 6,8\" com 5.000 nits e microSD, e costuma custar menos. Para desempenho, o Edge 60 Fusion: o Dimensity 7300 é mais forte que o Dimensity 6400 do G Max. Os dois têm IP68 e IP69.",
    chooseA: [
      "Prioriza câmera (200 MP) e tela mais brilhante.",
      "Quer microSD e tela plana.",
      "Quer gastar menos: compre até R$ 1.600.",
    ],
    chooseB: [
      "Joga ou quer um celular mais rápido (Dimensity 7300).",
      "Gosta de tela curva e visual mais premium.",
    ],
    rows: [
      { label: "Processador", a: "Dimensity 6400 (6 nm)", b: "Dimensity 7300", winner: "b" },
      { label: "Tela", a: 'pOLED plana 6,8" • 120 Hz • 5.000 nits', b: 'pOLED curva 6,7" • 120 Hz • 4.500 nits', winner: "a" },
      { label: "Câmera principal", a: "200 MP com OIS", b: "50 MP com OIS", winner: "a" },
      { label: "Armazenamento", a: "256 GB + microSD", b: "256 GB", winner: "a" },
      { label: "Bateria", a: "5.200 mAh", b: "5.200 mAh", winner: "tie" },
      { label: "Proteção", a: "IP68 e IP69", b: "IP68 e IP69", winner: "tie" },
      { label: "Compre se estiver até", a: "R$ 1.600", b: "R$ 1.800", winner: "a" },
    ],
    faq: [
      {
        question: "Moto G Max ou Edge 60 Fusion: qual é mais rápido?",
        answer: "O Edge 60 Fusion, com Dimensity 7300. O G Max usa o Dimensity 6400, suficiente para o dia a dia.",
      },
      {
        question: "Qual tem a melhor câmera?",
        answer: "O Moto G Max, com sensor de 200 MP e estabilização óptica.",
      },
      {
        question: "Moto G Max é o mesmo que Moto G87?",
        answer: "Sim, no exterior o mesmo aparelho é vendido como Moto G87.",
      },
    ],
  },
  "galaxy-a36-vs-redmi-note-15-5g": {
    slug: "galaxy-a36-vs-redmi-note-15-5g",
    a: { id: "galaxy-a36-5g", name: "Galaxy A36 5G", reviewPath: "/review/galaxy-a36-5g" },
    b: { id: "redmi-note-15-5g", name: "Redmi Note 15 5G", reviewPath: "/review/redmi-note-15-5g" },
    title: "Galaxy A36 ou Redmi Note 15 5G: qual comprar em 2026?",
    description:
      "Galaxy A36 vs Redmi Note 15 5G: mesmo processador, telas AMOLED de 120 Hz. Compare câmeras, bateria, resistência e preço.",
    shortAnswer:
      "Os dois usam o mesmo processador (Snapdragon 6 Gen 3) e têm tela AMOLED de 120 Hz. O Galaxy A36 tem câmera com estabilização, IP67 e atualizações até 2031, e costuma custar menos. O Redmi Note 15 5G tem bateria maior (5.520 mAh), carregador de 45 W na caixa e tela mais brilhante. Pelo preço, o A36 é a escolha mais segura.",
    chooseA: [
      "Quer gastar menos pelo mesmo desempenho: compre até R$ 1.350.",
      "Vai ficar muitos anos com o aparelho (até 2031).",
      "Quer câmera com estabilização óptica.",
    ],
    chooseB: [
      "Quer a maior bateria e o carregador na caixa.",
      "Usa muito o celular no sol (3.200 nits).",
    ],
    rows: [
      { label: "Processador", a: "Snapdragon 6 Gen 3", b: "Snapdragon 6 Gen 3", winner: "tie" },
      { label: "Tela", a: 'AMOLED 6,7" • 120 Hz', b: 'AMOLED 6,67" • 120 Hz • 3.200 nits', winner: "tie" },
      { label: "Câmera principal", a: "50 MP com OIS", b: "108 MP", winner: "tie" },
      { label: "Bateria e recarga", a: "5.000 mAh • 45 W", b: "5.520 mAh • 45 W, carregador na caixa", winner: "b" },
      { label: "Proteção", a: "IP67", b: "IP65", winner: "a" },
      { label: "Compre se estiver até", a: "R$ 1.350", b: "R$ 1.800", winner: "a" },
    ],
    faq: [
      {
        question: "Galaxy A36 ou Redmi Note 15 5G: qual é mais rápido?",
        answer: "São iguais: os dois usam o Snapdragon 6 Gen 3.",
      },
      {
        question: "Qual tem a bateria maior?",
        answer: "O Redmi Note 15 5G, com 5.520 mAh e carregador de 45 W na caixa.",
      },
      {
        question: "Não confunda com o Redmi Note 15 4G",
        answer: "O Redmi Note 15 4G tem outro processador. Este comparativo é da versão 5G: confira no anúncio.",
      },
    ],
  },
  "galaxy-a17-vs-moto-g56": {
    slug: "galaxy-a17-vs-moto-g56",
    a: { id: "galaxy-a17-5g", name: "Galaxy A17 5G", reviewPath: "/review/galaxy-a17-5g" },
    b: { id: "moto-g56-5g", name: "Moto G56 5G", reviewPath: "/review/moto-g56-5g" },
    title: "Galaxy A17 ou Moto G56: qual o melhor para comprar em 2026?",
    description:
      "Galaxy A17 5G vs Moto G56 5G: tela, câmera, bateria, resistência e atualizações lado a lado. Veja qual compensa mais pelo preço.",
    shortAnswer:
      "Depende do que pesa mais. O Galaxy A17 5G tem tela AMOLED, câmera com estabilização óptica e seis anos de atualizações, e costuma custar menos. O Moto G56 tem tela de 120 Hz, bateria maior, recarga de 30 W e é muito mais resistente (IP68 e IP69). Para durar anos, o A17; para quem trabalha na rua ou derruba o celular, o G56.",
    chooseA: [
      "Quer a tela AMOLED, com cores e contraste melhores.",
      "Vai ficar muitos anos com o celular (seis anos de atualizações).",
      "Quer gastar menos: compre até R$ 900.",
    ],
    chooseB: [
      "Precisa de um celular resistente a água e poeira (IP68 e IP69).",
      "Quer tela de 120 Hz e recarga mais rápida.",
      "Quer 256 GB com microSD.",
    ],
    rows: [
      { label: "Processador", a: "Exynos 1330 (5 nm)", b: "Dimensity 7060 (6 nm)", winner: "tie" },
      { label: "Tela", a: 'AMOLED 6,7" • 90 Hz', b: 'LCD 6,72" Full HD+ • 120 Hz', winner: "a" },
      { label: "Câmera principal", a: "50 MP com OIS", b: "50 MP", winner: "a" },
      { label: "Bateria", a: "5.000 mAh", b: "5.200 mAh", winner: "b" },
      { label: "Recarga", a: "25 W", b: "30 W", winner: "b" },
      { label: "Proteção", a: "IP54", b: "IP68 e IP69", winner: "b" },
      { label: "Atualizações", a: "6 anos", b: "2 versões do Android, 3 anos de segurança", winner: "a" },
      { label: "Compre se estiver até", a: "R$ 900", b: "R$ 1.200", winner: "a" },
    ],
    faq: [
      {
        question: "Galaxy A17 ou Moto G56: qual dura mais?",
        answer: "Em atualizações, o Galaxy A17, com seis anos prometidos pela Samsung. Em resistência física, o Moto G56, com IP68 e IP69.",
      },
      {
        question: "Qual tem a melhor tela?",
        answer: "A do Galaxy A17 é AMOLED, com cores e contraste melhores. A do Moto G56 é LCD, mas tem 120 Hz, mais fluida.",
      },
      {
        question: "Qual é melhor para jogar?",
        answer: "Os processadores ficam próximos. O G56 leva vantagem pela tela de 120 Hz e pela bateria um pouco maior.",
      },
    ],
  },
  "galaxy-a17-vs-redmi-note-15-5g": {
    slug: "galaxy-a17-vs-redmi-note-15-5g",
    a: { id: "galaxy-a17-5g", name: "Galaxy A17 5G", reviewPath: "/review/galaxy-a17-5g" },
    b: { id: "redmi-note-15-5g", name: "Redmi Note 15 5G", reviewPath: "/review/redmi-note-15-5g" },
    title: "Galaxy A17 ou Redmi Note 15 5G: qual comprar em 2026?",
    description:
      "Galaxy A17 5G vs Redmi Note 15 5G: processador, tela de 120 Hz, bateria, recarga e preço lado a lado. Veja se vale pagar mais pelo Redmi.",
    shortAnswer:
      "O Redmi Note 15 5G é melhor em quase tudo: processador mais forte, tela AMOLED de 120 Hz, bateria de 5.520 mAh com carregador de 45 W na caixa e IP65. Mas costuma custar perto do dobro. Até R$ 900, o Galaxy A17 5G é a compra certa e ainda tem seis anos de atualizações; se o orçamento chega a R$ 1.800, leve o Redmi.",
    chooseA: [
      "O orçamento é de até R$ 900.",
      "Vai ficar muitos anos com o celular (seis anos de atualizações).",
      "O uso é WhatsApp, redes sociais, fotos e vídeos.",
    ],
    chooseB: [
      "Joga com frequência (Snapdragon 6 Gen 3).",
      "Quer tela de 120 Hz e bateria para o dia todo.",
      "Quer o carregador de 45 W na caixa.",
    ],
    rows: [
      { label: "Processador", a: "Exynos 1330 (5 nm)", b: "Snapdragon 6 Gen 3", winner: "b" },
      { label: "Tela", a: 'AMOLED 6,7" • 90 Hz', b: 'AMOLED 6,67" • 120 Hz • 3.200 nits', winner: "b" },
      { label: "Câmera principal", a: "50 MP com OIS", b: "108 MP", winner: "tie" },
      { label: "Bateria e recarga", a: "5.000 mAh • 25 W", b: "5.520 mAh • 45 W, carregador na caixa", winner: "b" },
      { label: "Proteção", a: "IP54", b: "IP65", winner: "b" },
      { label: "Compre se estiver até", a: "R$ 900", b: "R$ 1.800", winner: "a" },
    ],
    faq: [
      {
        question: "Vale pagar o dobro pelo Redmi Note 15 5G?",
        answer: "Vale se você joga ou quer bateria e recarga melhores. Para uso do dia a dia, o Galaxy A17 5G entrega o essencial por metade do preço.",
      },
      {
        question: "Qual tem a melhor câmera?",
        answer: "Ficam próximos: o Redmi tem sensor de 108 MP; o Galaxy A17 tem estabilização óptica, que ajuda em fotos noturnas e vídeos.",
      },
      {
        question: "Não confunda com o Redmi Note 15 4G",
        answer: "O Redmi Note 15 4G tem outro processador. Este comparativo é da versão 5G: confira no anúncio.",
      },
    ],
  },
  "moto-g06-vs-moto-g17": {
    slug: "moto-g06-vs-moto-g17",
    a: { id: "moto-g06", name: "Moto G06", reviewPath: "/review/moto-g06" },
    b: { id: "moto-g17", name: "Moto G17", reviewPath: "/review/moto-g17" },
    title: "Moto G06 ou Moto G17: qual o melhor para comprar em 2026?",
    description:
      "Moto G06 vs Moto G17: mesmo processador, telas diferentes. Compare tela, câmeras, recarga e preço, e veja qual Motorola barato levar.",
    shortAnswer:
      "Têm o mesmo processador (Helio G81), a mesma bateria de 5.200 mAh e IP64. O Moto G06 tem tela maior de 6,9\" com 120 Hz, mas HD+ e recarga de só 10 W. O Moto G17 tem tela Full HD+ (60 Hz), câmera ultra-angular, frontal de 32 MP e recarga de 18 W. Pelo uso do dia a dia, o G17 vale a diferença se ela for pequena.",
    chooseA: [
      "Quer gastar o mínimo: compre até R$ 700.",
      "Prefere tela grande e fluida (6,9\", 120 Hz).",
    ],
    chooseB: [
      "Quer tela mais nítida (Full HD+).",
      "Tira selfies e fotos de grupo (frontal de 32 MP e ultra-angular).",
      "Quer recarga menos lenta (18 W).",
    ],
    rows: [
      { label: "Processador", a: "Helio G81 Extreme", b: "Helio G81 Extreme", winner: "tie" },
      { label: "Tela", a: 'LCD 6,9" HD+ • 120 Hz', b: 'LCD 6,72" Full HD+ • 60 Hz', winner: "tie" },
      { label: "Câmeras traseiras", a: "50 MP", b: "50 MP + ultra-angular 5 MP", winner: "b" },
      { label: "Câmera frontal", a: "8 MP", b: "32 MP", winner: "b" },
      { label: "Bateria e recarga", a: "5.200 mAh • 10 W", b: "5.200 mAh • 18 W", winner: "b" },
      { label: "Proteção", a: "IP64", b: "IP64", winner: "tie" },
      { label: "Extras", a: "NFC • fone • microSD", b: "NFC • fone • microSD", winner: "tie" },
      { label: "Compre se estiver até", a: "R$ 700", b: "R$ 850", winner: "a" },
    ],
    faq: [
      {
        question: "Moto G06 ou G17: qual é mais rápido?",
        answer: "São iguais: os dois usam o Helio G81 Extreme, um processador de entrada.",
      },
      {
        question: "Qual tem a melhor câmera?",
        answer: "O Moto G17, pela ultra-angular e pela câmera frontal de 32 MP.",
      },
      {
        question: "Tem opção melhor pelo mesmo preço?",
        answer: "Sim. Por uns R$ 800, o Galaxy A07 tem processador bem mais rápido (Helio G99) e seis anos de atualizações.",
      },
    ],
  },
  "redmi-15c-vs-poco-c85": {
    slug: "redmi-15c-vs-poco-c85",
    a: { id: "redmi-15c", name: "Redmi 15C", reviewPath: "/review/redmi-15c" },
    b: { id: "poco-c85", name: "Poco C85", reviewPath: "/review/poco-c85" },
    title: "Redmi 15C ou Poco C85: qual a diferença e qual comprar?",
    description:
      "Redmi 15C vs Poco C85: tela de 6,9\" com 120 Hz, bateria de 6.000 mAh e NFC nos dois. Veja a diferença real e qual vale mais a pena.",
    shortAnswer:
      "São praticamente o mesmo celular com marcas diferentes: tela LCD de 6,9\" com 120 Hz, bateria de 6.000 mAh, câmera de 50 MP, NFC, IP64 e microSD. Leve o que estiver mais barato na mesma memória, até R$ 750. Confira se o anúncio é 4G ou 5G: são versões diferentes.",
    chooseA: [
      "Encontrou mais barato que o Poco C85 na mesma memória.",
    ],
    chooseB: [
      "Encontrou mais barato que o Redmi 15C na mesma memória.",
    ],
    rows: [
      { label: "Tela", a: 'LCD 6,9" HD+ • 120 Hz', b: 'LCD 6,9" HD+ • 120 Hz', winner: "tie" },
      { label: "Câmera principal", a: "50 MP", b: "50 MP", winner: "tie" },
      { label: "Memória", a: "4, 6 ou 8 GB • 128 ou 256 GB + microSD", b: "4, 6 ou 8 GB • 128 ou 256 GB + microSD", winner: "tie" },
      { label: "Bateria", a: "6.000 mAh", b: "6.000 mAh", winner: "tie" },
      { label: "Proteção", a: "IP64", b: "IP64", winner: "tie" },
      { label: "NFC", a: "Sim", b: "Sim", winner: "tie" },
      { label: "Compre se estiver até", a: "R$ 750", b: "R$ 750", winner: "tie" },
    ],
    faq: [
      {
        question: "Redmi 15C e Poco C85 são iguais?",
        answer: "Praticamente. Têm a mesma tela, bateria, câmera e memória. A diferença está na marca e no preço de cada anúncio.",
      },
      {
        question: "Algum dos dois tem 5G?",
        answer: "Existem versões 4G e 5G, que são aparelhos diferentes. As mais vendidas no Brasil são 4G: confira no anúncio.",
      },
      {
        question: "Tem opção melhor pelo mesmo preço?",
        answer: "Para durar mais, o Galaxy A07 tem processador mais forte e seis anos de atualizações, mas bateria e tela menores.",
      },
    ],
  },
  "moto-g15-vs-moto-g17": {
    slug: "moto-g15-vs-moto-g17",
    a: { id: "moto-g15", name: "Moto G15", reviewPath: "/review/moto-g15" },
    b: { id: "moto-g17", name: "Moto G17", reviewPath: "/review/moto-g17" },
    title: "Moto G15 ou Moto G17: qual o melhor para comprar em 2026?",
    description:
      "Moto G15 vs Moto G17: mesmo processador e tela Full HD. Veja as diferenças de câmera, resistência e preço, e qual Motorola barato levar.",
    shortAnswer:
      "São muito parecidos: mesmo processador (Helio G81), tela LCD Full HD+ de 6,72\" com 60 Hz, bateria de 5.200 mAh e NFC. O Moto G17 é mais novo e acrescenta câmera ultra-angular, frontal de 32 MP e proteção IP64. Se a diferença de preço for pequena, leve o G17; senão, o G15 até R$ 750.",
    chooseA: [
      "Quer gastar menos: compre até R$ 750.",
      "Quer 256 GB com microSD.",
    ],
    chooseB: [
      "Tira selfies e fotos de grupo (frontal de 32 MP e ultra-angular).",
      "Quer proteção contra poeira e água (IP64).",
      "Quer o modelo mais novo (janeiro de 2026).",
    ],
    rows: [
      { label: "Processador", a: "Helio G81 Extreme", b: "Helio G81 Extreme", winner: "tie" },
      { label: "Tela", a: 'LCD 6,72" Full HD+ • 60 Hz', b: 'LCD 6,72" Full HD+ • 60 Hz', winner: "tie" },
      { label: "Câmeras traseiras", a: "50 MP", b: "50 MP + ultra-angular 5 MP", winner: "b" },
      { label: "Bateria", a: "5.200 mAh", b: "5.200 mAh • 18 W", winner: "tie" },
      { label: "Proteção", a: "Contra respingos", b: "IP64", winner: "b" },
      { label: "Lançamento", a: "Dezembro de 2024", b: "Janeiro de 2026", winner: "b" },
      { label: "Compre se estiver até", a: "R$ 750", b: "R$ 850", winner: "a" },
    ],
    faq: [
      {
        question: "Moto G15 ou G17: qual é mais rápido?",
        answer: "São iguais: os dois usam o Helio G81 Extreme.",
      },
      {
        question: "Algum dos dois tem 5G?",
        answer: "Não. Os dois são 4G. O Motorola 5G mais barato que indicamos é o Moto G37.",
      },
      {
        question: "Tem opção melhor pelo mesmo preço?",
        answer: "Por uns R$ 900, o Galaxy A17 5G tem 5G, tela AMOLED e seis anos de atualizações.",
      },
    ],
  },
  "galaxy-a07-vs-redmi-15c": {
    slug: "galaxy-a07-vs-redmi-15c",
    a: { id: "galaxy-a07", name: "Galaxy A07", reviewPath: "/review/galaxy-a07" },
    b: { id: "redmi-15c", name: "Redmi 15C", reviewPath: "/review/redmi-15c" },
    title: "Galaxy A07 ou Redmi 15C: qual o melhor celular barato em 2026?",
    description:
      "Galaxy A07 vs Redmi 15C: processador, tela, bateria e atualizações lado a lado. Veja qual celular barato dura mais.",
    shortAnswer:
      "Para a maioria, o Galaxy A07: o Helio G99 é bem mais rápido que o Helio G81 do Redmi e a Samsung promete seis anos de atualizações. O Redmi 15C ganha em tela (6,9\", 120 Hz), bateria (6.000 mAh) e resistência (IP64). Se o uso é só vídeos e redes sociais e a bateria pesa mais, o Redmi; para durar anos sem travar, o A07.",
    chooseA: [
      "Quer um celular barato que não fique lento (Helio G99).",
      "Vai ficar muitos anos com o aparelho (seis anos de atualizações).",
    ],
    chooseB: [
      "Quer a maior bateria (6.000 mAh) e tela grande de 120 Hz.",
      "Quer mais proteção contra água e poeira (IP64).",
    ],
    rows: [
      { label: "Processador", a: "Helio G99 (6 nm)", b: "Helio G81 Ultra", winner: "a" },
      { label: "Tela", a: 'LCD 6,7" HD+ • 90 Hz', b: 'LCD 6,9" HD+ • 120 Hz', winner: "b" },
      { label: "Câmera principal", a: "50 MP", b: "50 MP", winner: "tie" },
      { label: "Bateria", a: "5.000 mAh", b: "6.000 mAh", winner: "b" },
      { label: "Proteção", a: "IP54", b: "IP64", winner: "b" },
      { label: "Compre se estiver até", a: "R$ 800", b: "R$ 750", winner: "tie" },
    ],
    faq: [
      {
        question: "Galaxy A07 ou Redmi 15C: qual é mais rápido?",
        answer: "O Galaxy A07. O Helio G99 é um processador de categoria acima do Helio G81 Ultra.",
      },
      {
        question: "Qual tem a bateria maior?",
        answer: "O Redmi 15C, com 6.000 mAh, contra 5.000 mAh do Galaxy A07.",
      },
      {
        question: "Qual dura mais anos?",
        answer: "O Galaxy A07, com seis anos de atualizações prometidas pela Samsung.",
      },
    ],
  },
  "galaxy-a36-vs-galaxy-a17": {
    slug: "galaxy-a36-vs-galaxy-a17",
    a: { id: "galaxy-a36-5g", name: "Galaxy A36 5G", reviewPath: "/review/galaxy-a36-5g" },
    b: { id: "galaxy-a17-5g", name: "Galaxy A17 5G", reviewPath: "/review/galaxy-a17-5g" },
    title: "Galaxy A36 ou Galaxy A17: qual o melhor para comprar em 2026?",
    description:
      "Galaxy A36 vs Galaxy A17 5G: processador, tela, câmera, recarga e resistência lado a lado. Veja quando vale pagar mais pelo A36 e quando o A17 basta.",
    shortAnswer:
      "O Galaxy A36 é melhor em quase tudo: processador mais rápido, tela de 120 Hz, recarga de 45 W e IP67. Os dois recebem seis anos de atualizações. Vale pagar a diferença se ela for de até uns R$ 450; acima disso, o Galaxy A17 5G entrega o essencial com tela AMOLED e câmera estabilizada.",
    chooseA: [
      "Joga ou usa muitos apps ao mesmo tempo (Snapdragon 6 Gen 3).",
      "Quer tela de 120 Hz e recarga de 45 W.",
      "Quer resistência a água (IP67).",
    ],
    chooseB: [
      "O orçamento é de até R$ 900.",
      "O uso é WhatsApp, redes sociais, fotos e vídeos.",
      "Quer a versão de 8 GB de RAM gastando menos.",
    ],
    rows: [
      { label: "Processador", a: "Snapdragon 6 Gen 3", b: "Exynos 1330 (5 nm)", winner: "a" },
      { label: "Tela", a: 'AMOLED 6,7" • 120 Hz', b: 'AMOLED 6,7" • 90 Hz', winner: "a" },
      { label: "Câmeras traseiras", a: "50 MP OIS + 8 MP + 5 MP", b: "50 MP OIS + 5 MP + 2 MP", winner: "a" },
      { label: "Bateria e recarga", a: "5.000 mAh • 45 W", b: "5.000 mAh • 25 W", winner: "a" },
      { label: "Proteção", a: "IP67", b: "IP54", winner: "a" },
      { label: "Atualizações", a: "6 anos (até 2031)", b: "6 anos", winner: "tie" },
      { label: "Compre se estiver até", a: "R$ 1.350", b: "R$ 900", winner: "b" },
    ],
    faq: [
      {
        question: "Vale a pena pagar mais pelo Galaxy A36?",
        answer: "Vale se a diferença for de até uns R$ 450: ele é mais rápido, tem tela de 120 Hz, recarga de 45 W e IP67.",
      },
      {
        question: "Qual dos dois é melhor para jogar?",
        answer: "O Galaxy A36. O Snapdragon 6 Gen 3 é mais forte que o Exynos 1330 e a tela tem 120 Hz.",
      },
      {
        question: "Os dois recebem atualizações pelo mesmo tempo?",
        answer: "Sim. A Samsung promete seis anos de atualizações para os dois.",
      },
    ],
  },
  "poco-x8-pro-vs-galaxy-s25-fe": {
    slug: "poco-x8-pro-vs-galaxy-s25-fe",
    a: { id: "poco-x8-pro", name: "Poco X8 Pro", reviewPath: "/review/poco-x8-pro" },
    b: { id: "galaxy-s25-fe", name: "Galaxy S25 FE", reviewPath: "/review/galaxy-s25-fe" },
    title: "Poco X8 Pro ou Galaxy S25 FE: qual comprar em 2026?",
    description:
      "Poco X8 Pro vs Galaxy S25 FE: desempenho, bateria, câmeras, zoom e atualizações lado a lado. Veja qual vale mais o seu dinheiro.",
    shortAnswer:
      "Para jogos e bateria, o Poco X8 Pro: Dimensity 8500 Ultra, 6.500 mAh e recarga de 100 W, e costuma custar menos. Para câmera e longevidade, o Galaxy S25 FE: teleobjetiva de 3x, recarga sem fio e sete anos de atualizações.",
    chooseA: [
      "Joga títulos pesados e quer o máximo de desempenho pelo preço.",
      "Quer a maior bateria e a recarga mais rápida (6.500 mAh, 100 W).",
      "Quer gastar menos: compre até R$ 2.450.",
    ],
    chooseB: [
      "Quer zoom óptico de 3x para fotos de longe.",
      "Vai ficar muitos anos com o celular (sete anos de atualizações).",
      "Quer recarga sem fio e a experiência Samsung.",
    ],
    rows: [
      { label: "Processador", a: "Dimensity 8500 Ultra", b: "Exynos 2400", winner: "a" },
      { label: "Tela", a: 'AMOLED 6,59" 1.5K • 120 Hz • 3.500 nits', b: 'AMOLED 6,7" • 120 Hz', winner: "tie" },
      { label: "Câmeras traseiras", a: "50 MP OIS + 8 MP", b: "50 + 12 MP + tele 8 MP (3x)", winner: "b" },
      { label: "Bateria", a: "6.500 mAh", b: "4.900 mAh", winner: "a" },
      { label: "Recarga", a: "100 W", b: "45 W • sem fio", winner: "a" },
      { label: "Proteção", a: "IP68", b: "IP68", winner: "tie" },
      { label: "Atualizações", a: "4 versões do Android, 6 anos de segurança", b: "7 anos", winner: "b" },
      { label: "Compre se estiver até", a: "R$ 2.450", b: "R$ 3.000", winner: "a" },
    ],
    faq: [
      {
        question: "Qual é melhor para jogos?",
        answer: "O Poco X8 Pro. O Dimensity 8500 Ultra é mais forte e a bateria de 6.500 mAh aguenta sessões longas.",
      },
      {
        question: "Qual tem a melhor câmera?",
        answer: "O Galaxy S25 FE, pela teleobjetiva de 3x. Na câmera principal, os dois têm estabilização óptica.",
      },
      {
        question: "Qual dura mais anos?",
        answer: "O Galaxy S25 FE, com sete anos de atualizações. O Poco X8 Pro tem quatro versões do Android e seis anos de segurança.",
      },
    ],
  },
  "iphone-16e-vs-iphone-15": {
    slug: "iphone-16e-vs-iphone-15",
    a: { id: "iphone-16e", name: "iPhone 16e", reviewPath: "/review/iphone-16e" },
    b: { id: "iphone-15", name: "iPhone 15", reviewPath: "/review/iphone-15" },
    title: "iPhone 16e ou iPhone 15: qual o melhor para comprar em 2026?",
    description:
      "iPhone 16e vs iPhone 15: chip, câmeras, MagSafe, Dynamic Island e preço lado a lado. Veja qual iPhone barato vale mais a pena.",
    shortAnswer:
      "O iPhone 16e tem chip mais novo (A18) e deve receber atualizações por mais tempo. O iPhone 15 tem câmera ultra-angular, MagSafe e Dynamic Island, que o 16e não tem. Se você usa ultra-angular ou MagSafe, leve o 15 até R$ 3.400; senão, o 16e até R$ 3.300 é a compra mais segura para os próximos anos.",
    chooseA: [
      "Quer o chip mais novo (A18), para mais anos de uso.",
      "Uma câmera só (48 MP) atende você.",
      "Não usa MagSafe.",
    ],
    chooseB: [
      "Usa a câmera ultra-angular para fotos de grupo e paisagem.",
      "Usa ou quer usar MagSafe (carregador, carteira, suporte).",
      "Gosta da Dynamic Island.",
    ],
    rows: [
      { label: "Chip", a: "A18", b: "A16", winner: "a" },
      { label: "Tela", a: '6,1" OLED • 60 Hz', b: '6,1" OLED • 60 Hz', winner: "tie" },
      { label: "Câmeras traseiras", a: "48 MP (uma câmera)", b: "48 MP + ultra-angular 12 MP", winner: "b" },
      { label: "MagSafe", a: "Não (sem fio de 7,5 W)", b: "Sim, até 15 W", winner: "b" },
      { label: "Dynamic Island", a: "Não (entalhe)", b: "Sim", winner: "b" },
      { label: "Armazenamento base", a: "128 GB", b: "128 GB", winner: "tie" },
      { label: "Compre se estiver até", a: "R$ 3.300", b: "R$ 3.400", winner: "tie" },
    ],
    faq: [
      {
        question: "iPhone 16e ou iPhone 15: qual dura mais?",
        answer: "O 16e, por ter chip mais novo (A18) e ter sido lançado depois. O 15 continua recebendo atualizações, mas deve parar antes.",
      },
      {
        question: "Qual tem a melhor câmera?",
        answer: "O iPhone 15, por ter também a ultra-angular. Na câmera principal de 48 MP, os dois ficam próximos.",
      },
      {
        question: "Algum dos dois tem tela de 120 Hz?",
        answer: "Não. Os dois têm 60 Hz. Para 120 Hz, o iPhone mais barato é o iPhone 17.",
      },
    ],
  },
  "edge-60-fusion-vs-moto-g86": {
    slug: "edge-60-fusion-vs-moto-g86",
    a: { id: "edge-60-fusion", name: "Edge 60 Fusion", reviewPath: "/review/edge-60-fusion" },
    b: { id: "moto-g86-5g", name: "Moto G86 5G", reviewPath: "/review/moto-g86-5g" },
    title: "Edge 60 Fusion ou Moto G86: qual o melhor para comprar em 2026?",
    description:
      "Edge 60 Fusion vs Moto G86: os dois têm Dimensity 7300, tela de 4.500 nits e IP68/IP69. Veja as diferenças de tela, câmera e preço.",
    shortAnswer:
      "São muito parecidos: mesmo processador (Dimensity 7300), bateria de 5.200 mAh, IP68/IP69 e tela pOLED de 120 Hz com 4.500 nits. O Edge 60 Fusion tem tela curva e visual mais premium; o Moto G86 tem tela 1.5K plana, carregador de 33 W na caixa e câmera Sony com estabilização. Leve o que estiver mais barato.",
    chooseA: [
      "Gosta de tela curva e de um visual mais premium.",
      "Encontrou mais barato que o G86.",
    ],
    chooseB: [
      "Prefere tela plana, mais fácil para película e capinha.",
      "Quer o carregador de 33 W na caixa.",
      "Encontrou mais barato que o Edge 60 Fusion.",
    ],
    rows: [
      { label: "Processador", a: "Dimensity 7300", b: "Dimensity 7300", winner: "tie" },
      { label: "Tela", a: 'pOLED curva 6,7" • 120 Hz • 4.500 nits', b: 'pOLED plana 6,67" 1.5K • 120 Hz • 4.500 nits', winner: "tie" },
      { label: "Câmera principal", a: "50 MP com OIS", b: "50 MP Sony com OIS", winner: "tie" },
      { label: "Memória", a: "8 GB • 256 GB", b: "8 GB • 256 GB", winner: "tie" },
      { label: "Bateria", a: "5.200 mAh", b: "5.200 mAh • 33 W, carregador na caixa", winner: "b" },
      { label: "Proteção", a: "IP68 e IP69", b: "IP68 e IP69", winner: "tie" },
      { label: "Compre se estiver até", a: "R$ 1.800", b: "R$ 1.900", winner: "tie" },
    ],
    faq: [
      {
        question: "Edge 60 Fusion ou Moto G86: qual é mais rápido?",
        answer: "São iguais: os dois usam o Dimensity 7300 com 8 GB de RAM.",
      },
      {
        question: "Qual tem a melhor tela?",
        answer: "As duas são pOLED de 120 Hz com 4.500 nits. A do Fusion é curva; a do G86 é plana e tem resolução 1.5K.",
      },
      {
        question: "Qual comprar?",
        answer: "O que estiver mais barato. Se o preço for igual, o G86 pelo carregador na caixa; o Fusion se você prefere tela curva.",
      },
    ],
  },
  "galaxy-a17-vs-galaxy-a07": {
    slug: "galaxy-a17-vs-galaxy-a07",
    a: { id: "galaxy-a17-5g", name: "Galaxy A17 5G", reviewPath: "/review/galaxy-a17-5g" },
    b: { id: "galaxy-a07", name: "Galaxy A07", reviewPath: "/review/galaxy-a07" },
    title: "Galaxy A17 ou Galaxy A07: qual o melhor para comprar em 2026?",
    description:
      "Galaxy A17 5G vs Galaxy A07: tela, processador, câmera, 5G e atualizações lado a lado. Veja quando vale pagar mais pelo A17 e quando o A07 basta.",
    shortAnswer:
      "O Galaxy A17 5G é bem melhor: tela AMOLED, processador mais rápido, câmera com estabilização óptica e 5G. Vale pagar a diferença se ela for de até uns R$ 200. O Galaxy A07 só faz sentido para quem quer o Samsung mais barato possível, para WhatsApp, redes sociais e vídeos.",
    chooseA: [
      "Quer uma tela AMOLED, com cores e contraste bem melhores.",
      "Tira fotos e grava vídeos com frequência (estabilização óptica).",
      "Quer 5G e um processador que aguenta mais anos (Exynos 1330).",
    ],
    chooseB: [
      "O orçamento é de até R$ 800.",
      "O uso é básico: mensagens, redes sociais e vídeos.",
      "4G atende onde você mora.",
    ],
    rows: [
      { label: "Processador", a: "Exynos 1330 (5 nm)", b: "Helio G99 (6 nm)", winner: "a" },
      { label: "5G", a: "Sim", b: "Não", winner: "a" },
      { label: "Tela", a: 'AMOLED 6,7" • 90 Hz', b: 'LCD 6,7" HD+ • 90 Hz', winner: "a" },
      { label: "Câmera principal", a: "50 MP com OIS", b: "50 MP", winner: "a" },
      { label: "Bateria e recarga", a: "5.000 mAh • 25 W", b: "5.000 mAh • 15 W", winner: "a" },
      { label: "Proteção", a: "IP54", b: "IP54", winner: "tie" },
      { label: "Atualizações", a: "6 anos", b: "6 anos", winner: "tie" },
      { label: "Compre se estiver até", a: "R$ 900", b: "R$ 800", winner: "b" },
    ],
    faq: [
      {
        question: "Vale a pena pagar mais pelo Galaxy A17?",
        answer:
          "Sim, se a diferença for de até uns R$ 200. A tela AMOLED, a câmera estabilizada e o processador mais rápido fazem diferença no dia a dia.",
      },
      {
        question: "Qual dos dois é melhor para jogar?",
        answer: "O Galaxy A17 5G. O Exynos 1330 é mais rápido que o Helio G99 do A07; os dois rodam jogos leves, como Free Fire.",
      },
      {
        question: "Os dois recebem atualizações por quanto tempo?",
        answer: "A Samsung promete seis anos de atualizações para os dois.",
      },
    ],
  },
  "galaxy-a36-vs-moto-g86": {
    slug: "galaxy-a36-vs-moto-g86",
    a: { id: "galaxy-a36-5g", name: "Galaxy A36 5G", reviewPath: "/review/galaxy-a36-5g" },
    b: { id: "moto-g86-5g", name: "Moto G86 5G", reviewPath: "/review/moto-g86-5g" },
    title: "Galaxy A36 ou Moto G86: qual comprar em 2026?",
    description:
      "Galaxy A36 vs Moto G86: tela, processador, câmera, bateria, resistência e atualizações lado a lado. Veja qual intermediário vale mais o seu dinheiro.",
    shortAnswer:
      "Para a maioria, o Galaxy A36: costuma custar menos e recebe atualizações até 2031, contra quatro anos de segurança no Moto G86. Escolha o Moto G86 se você quer a tela mais nítida e brilhante, resistência IP68/IP69 e carregador na caixa, e ele estiver perto do preço do A36.",
    chooseA: [
      "Quer ficar muitos anos com o celular (atualizações até 2031).",
      "Quer gastar menos: compre até R$ 1.350.",
      "Quer recarga de 45 W (com carregador compatível).",
    ],
    chooseB: [
      "Usa muito o celular no sol: a tela chega a 4.500 nits.",
      "Precisa de resistência a água e poeira (IP68 e IP69).",
      "Quer o carregador na caixa e um pouco mais de bateria.",
    ],
    rows: [
      { label: "Processador", a: "Snapdragon 6 Gen 3", b: "Dimensity 7300", winner: "tie" },
      { label: "Tela", a: 'AMOLED 6,7" • 120 Hz', b: 'pOLED 6,67" 1.5K • 120 Hz • 4.500 nits', winner: "b" },
      { label: "Câmera principal", a: "50 MP com OIS", b: "50 MP Sony com OIS", winner: "tie" },
      { label: "Câmera frontal", a: "12 MP", b: "32 MP", winner: "tie" },
      { label: "Bateria", a: "5.000 mAh", b: "5.200 mAh", winner: "b" },
      { label: "Recarga", a: "45 W, sem carregador na caixa", b: "33 W, carregador na caixa", winner: "b" },
      { label: "Proteção", a: "IP67", b: "IP68 e IP69", winner: "b" },
      { label: "Atualizações", a: "6 anos (até 2031)", b: "2 de Android, 4 de segurança", winner: "a" },
      { label: "Compre se estiver até", a: "R$ 1.350", b: "R$ 1.900", winner: "a" },
    ],
    faq: [
      {
        question: "Galaxy A36 ou Moto G86: qual é melhor?",
        answer:
          "Pelo custo-benefício e pelos anos de atualização, o Galaxy A36. O Moto G86 ganha em tela, resistência e carregador na caixa.",
      },
      {
        question: "Qual dura mais anos?",
        answer:
          "O Galaxy A36: a Samsung promete atualizações até 2031. O Moto G86 tem duas versões do Android e quatro anos de segurança.",
      },
      {
        question: "Qual é melhor para jogar?",
        answer:
          "Os processadores são de desempenho parecido. Para jogos pesados, nenhum dos dois é o ideal; veja o guia de jogos pesados.",
      },
    ],
  },
  "moto-g56-vs-moto-g86": {
    slug: "moto-g56-vs-moto-g86",
    a: { id: "moto-g56-5g", name: "Moto G56 5G", reviewPath: "/review/moto-g56-5g" },
    b: { id: "moto-g86-5g", name: "Moto G86 5G", reviewPath: "/review/moto-g86-5g" },
    title: "Moto G56 ou Moto G86: qual o melhor para comprar em 2026?",
    description:
      "Moto G56 vs Moto G86: tela, câmera, processador e preço lado a lado. Os dois têm IP68/IP69 e 5.200 mAh; veja quando vale pagar mais pelo G86.",
    shortAnswer:
      "Os dois são resistentes (IP68 e IP69) e têm 5.200 mAh. O Moto G86 é melhor em quase tudo: tela pOLED 1.5K muito mais brilhante, câmera com estabilização óptica e processador mais rápido. Compre o Moto G56 só se ele estiver até uns R$ 1.200 e você não se importar com a tela LCD.",
    chooseA: [
      "O orçamento é de até R$ 1.200.",
      "Quer cartão de memória e entrada para fone com fio.",
      "Usa o celular para trabalho pesado na rua e quer gastar pouco.",
    ],
    chooseB: [
      "Quer uma tela bem melhor (pOLED 1.5K, 4.500 nits).",
      "Tira fotos à noite ou grava andando (estabilização óptica).",
      "Quer o carregador de 33 W na caixa.",
    ],
    rows: [
      { label: "Processador", a: "Dimensity 7060 (6 nm)", b: "Dimensity 7300 (4 nm)", winner: "b" },
      { label: "Tela", a: 'LCD 6,72" Full HD+ • 120 Hz', b: 'pOLED 6,67" 1.5K • 120 Hz • 4.500 nits', winner: "b" },
      { label: "Câmera principal", a: "50 MP", b: "50 MP Sony com OIS", winner: "b" },
      { label: "Bateria", a: "5.200 mAh", b: "5.200 mAh", winner: "tie" },
      { label: "Recarga", a: "30 W", b: "33 W, carregador na caixa", winner: "b" },
      { label: "Proteção", a: "IP68 e IP69", b: "IP68 e IP69", winner: "tie" },
      { label: "Armazenamento", a: "256 GB + microSD", b: "256 GB", winner: "a" },
      { label: "Compre se estiver até", a: "R$ 1.200", b: "R$ 1.900", winner: "a" },
    ],
    faq: [
      {
        question: "Vale a pena pagar mais pelo Moto G86?",
        answer:
          "Sim, se a diferença for de até uns R$ 500. A tela pOLED e a câmera estabilizada são bem superiores. Com diferença maior, o G56 é uma compra sólida para uso básico.",
      },
      {
        question: "Qual dos dois aguenta mais água e queda?",
        answer: "Os dois têm IP68 e IP69, que protegem contra água e poeira. Mesmo assim, a garantia costuma não cobrir dano por líquido.",
      },
      {
        question: "Qual tem mais bateria?",
        answer: "Os dois têm 5.200 mAh. O G86 traz o carregador de 33 W na caixa.",
      },
    ],
  },
  "galaxy-s25-fe-vs-galaxy-a57": {
    slug: "galaxy-s25-fe-vs-galaxy-a57",
    a: { id: "galaxy-s25-fe", name: "Galaxy S25 FE", reviewPath: "/review/galaxy-s25-fe" },
    b: { id: "galaxy-a57-5g", name: "Galaxy A57 5G", reviewPath: "/review/galaxy-a57-5g" },
    title: "Galaxy S25 FE ou Galaxy A57: qual o melhor para comprar em 2026?",
    description:
      "Galaxy S25 FE vs Galaxy A57: processador, câmeras, zoom, bateria e atualizações lado a lado. Veja quando vale subir para a linha S.",
    shortAnswer:
      "O Galaxy S25 FE é melhor em desempenho e câmera: processador Exynos 2400, teleobjetiva de 3x e um ano a mais de atualizações. O Galaxy A57 é mais fino, mais leve, tem bateria um pouco maior e custa bem menos. Se você não precisa de zoom nem joga pesado, o A57 entrega o essencial gastando menos.",
    chooseA: [
      "Quer zoom óptico de 3x para fotos de longe e retratos.",
      "Joga títulos pesados (Exynos 2400).",
      "Quer recarga sem fio e sete anos de atualizações.",
    ],
    chooseB: [
      "Quer gastar menos: compre até R$ 1.850.",
      "Prefere um celular fino e leve (6,9 mm, 179 g).",
      "Prefere bateria um pouco maior (5.000 mAh).",
    ],
    rows: [
      { label: "Processador", a: "Exynos 2400", b: "Exynos 1680 (4 nm)", winner: "a" },
      { label: "Tela", a: 'AMOLED 6,7" • 120 Hz', b: 'AMOLED+ 6,7" • 120 Hz', winner: "tie" },
      { label: "Câmeras traseiras", a: "50 + 12 MP + tele 8 MP (3x)", b: "50 MP OIS + 12 MP + 5 MP", winner: "a" },
      { label: "Bateria", a: "4.900 mAh", b: "5.000 mAh", winner: "tie" },
      { label: "Recarga", a: "45 W • sem fio", b: "45 W", winner: "a" },
      { label: "Proteção", a: "IP68", b: "IP68", winner: "tie" },
      { label: "Atualizações", a: "7 anos", b: "6 anos", winner: "a" },
      { label: "Compre se estiver até", a: "R$ 3.000", b: "R$ 1.850", winner: "b" },
    ],
    faq: [
      {
        question: "Vale a pena pagar mais pelo Galaxy S25 FE?",
        answer:
          "Vale se você usa zoom, joga pesado ou quer ficar sete anos com o celular. Para redes sociais, fotos do dia a dia e vídeos, o A57 basta e custa bem menos.",
      },
      {
        question: "Qual tem a melhor câmera?",
        answer: "O S25 FE, pela teleobjetiva de 3x. Na câmera principal e na frontal, os dois ficam próximos.",
      },
      {
        question: "Qual é melhor para jogos?",
        answer: "O S25 FE: o Exynos 2400 é de outra categoria. Veja também o guia de jogos pesados.",
      },
    ],
  },
  "iphone-16e-vs-iphone-17e": {
    slug: "iphone-16e-vs-iphone-17e",
    a: { id: "iphone-16e", name: "iPhone 16e", reviewPath: "/review/iphone-16e" },
    b: { id: "iphone-17e", name: "iPhone 17e", reviewPath: "/review/iphone-17e" },
    title: "iPhone 16e ou 17e: qual o melhor para comprar em 2026?",
    description:
      "iPhone 16e vs iPhone 17e: chip, armazenamento, MagSafe e câmera lado a lado. Veja quanto vale pagar a mais pelo 17e e quando o 16e é a compra certa.",
    shortAnswer:
      "Os dois são parecidos: tela de 6,1\" com 60 Hz e uma câmera de 48 MP. O iPhone 17e tem chip A19, o dobro de armazenamento (256 GB) e MagSafe. O iPhone 16e vale a pena se estiver até R$ 3.300 e 128 GB bastarem para você. Se a diferença for pequena, leve o 17e.",
    chooseA: [
      "Quer o iPhone mais barato com chip atual: compre até R$ 3.300.",
      "Usa pouco espaço (128 GB) e guarda fotos na nuvem.",
      "Não usa carregador magnético nem acessórios MagSafe.",
    ],
    chooseB: [
      "Quer 256 GB para fotos, vídeos e apps.",
      "Usa ou quer usar MagSafe (carregador, carteira, suporte).",
      "Quer o chip mais novo (A19), para mais anos de uso.",
    ],
    rows: [
      { label: "Chip", a: "A18", b: "A19", winner: "b" },
      { label: "Tela", a: '6,1" OLED • 60 Hz', b: '6,1" OLED • 60 Hz', winner: "tie" },
      { label: "Câmera traseira", a: "48 MP (uma câmera)", b: "48 MP (uma câmera)", winner: "tie" },
      { label: "Armazenamento base", a: "128 GB", b: "256 GB", winner: "b" },
      { label: "MagSafe", a: "Não (sem fio de 7,5 W)", b: "Sim, até 15 W", winner: "b" },
      { label: "Lançamento", a: "Fevereiro de 2025", b: "Março de 2026", winner: "b" },
      { label: "Compre se estiver até", a: "R$ 3.300", b: "R$ 4.500", winner: "a" },
    ],
    faq: [
      {
        question: "Vale a pena pagar mais pelo iPhone 17e?",
        answer:
          "Vale se a diferença for de até uns R$ 800: você leva o dobro de armazenamento, MagSafe e um chip mais novo. Com diferença maior, o 16e é a compra mais inteligente.",
      },
      {
        question: "Algum dos dois tem tela de 120 Hz?",
        answer: "Não. Os dois têm tela de 60 Hz. Para 120 Hz, o iPhone mais barato é o iPhone 17.",
      },
      {
        question: "Qual tem a melhor câmera?",
        answer: "São muito parecidas: uma câmera de 48 MP, sem ultra-angular. Para ter ultra-angular, veja o iPhone 17.",
      },
    ],
  },
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
    a: { id: "iphone-17", name: "iPhone 17", reviewPath: "/review/iphone-17" },
    b: { id: "iphone-17e", name: "iPhone 17e", reviewPath: "/review/iphone-17e" },
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
    b: { id: "galaxy-a17-4g", name: "Galaxy A17 4G", reviewPath: "/review/galaxy-a17-4g" },
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
    a: { id: "galaxy-a07", name: "Galaxy A07", reviewPath: "/review/galaxy-a07" },
    b: { id: "moto-g06", name: "Moto G06", reviewPath: "/review/moto-g06" },
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
    a: { id: "poco-x8-pro", name: "Poco X8 Pro", reviewPath: "/review/poco-x8-pro" },
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
    b: { id: "moto-g77", name: "Moto G77", reviewPath: "/review/moto-g77" },
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
    b: { id: "edge-70", name: "Motorola Edge 70", reviewPath: "/review/edge-70" },
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
    b: { id: "galaxy-a37-5g", name: "Galaxy A37 5G", reviewPath: "/review/galaxy-a37-5g" },
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
  "galaxy-s26-vs-galaxy-s25": {
    slug: "galaxy-s26-vs-galaxy-s25",
    a: { id: "galaxy-s25", name: "Galaxy S25", reviewPath: "/review/galaxy-s25" },
    b: { id: "galaxy-s26", name: "Galaxy S26", reviewPath: "/review/galaxy-s26" },
    title: "Galaxy S26 ou Galaxy S25: qual comprar em 2026?",
    description:
      "Galaxy S26 vs Galaxy S25: o que mudou de verdade, o que continua igual e qual vale mais a pena pelo preço de hoje.",
    shortAnswer:
      "Mudou pouco. Câmeras, tela, recarga, IP68 e os sete anos de atualizações são iguais. O S26 tem bateria um pouco maior (4.300 contra 4.000 mAh), tela de 6,3\" e Exynos 2600 no lugar do Snapdragon 8 Elite. Comprando a versão de 256 GB dos dois, o S25 costuma sair bem mais barato, e é a compra mais inteligente.",
    chooseA: [
      "Quer o melhor preço por um Galaxy S compacto.",
      "Prefere o processador Snapdragon.",
      "Encontrou a versão de 256 GB.",
    ],
    chooseB: [
      "A diferença de preço para o S25 é pequena.",
      "Quer a bateria um pouco maior.",
      "Quer o suporte de atualizações indo até o mais tarde possível.",
    ],
    rows: [
      { label: "Processador", a: "Snapdragon 8 Elite", b: "Exynos 2600", winner: "tie" },
      { label: "Tela", a: '6,2" AMOLED • 120 Hz', b: '6,3" AMOLED • 120 Hz', winner: "tie" },
      { label: "Câmeras", a: "50 + 12 + 10 MP (zoom 3x)", b: "50 + 12 + 10 MP (zoom 3x)", winner: "tie" },
      { label: "Bateria", a: "4.000 mAh", b: "4.300 mAh", winner: "b" },
      { label: "Recarga", a: "25 W • sem fio 15 W", b: "25 W • sem fio 15 W", winner: "tie" },
      { label: "Atualizações", a: "7 anos (desde 2025)", b: "7 anos (desde 2026)", winner: "b" },
      { label: "Preço de lançamento", a: "R$ 6.999", b: "R$ 7.499", winner: "a" },
      { label: "Compre se estiver até", a: "R$ 3.900", b: "R$ 4.800", winner: "a" },
    ],
    faq: [
      {
        question: "Vale a pena trocar o S25 pelo S26?",
        answer: "Não. As diferenças são pequenas; a troca não compensa.",
      },
      {
        question: "Galaxy S25 ou Galaxy S25 FE?",
        answer:
          "O S25 é compacto, tem processador bem mais forte e acabamento superior. O S25 FE tem tela maior e bateria maior, e custa menos. Para quem quer tamanho menor e desempenho, o S25.",
      },
      {
        question: "O Galaxy S26 vem com carregador?",
        answer: "Não. O carregamento de 25 W exige um adaptador compatível, vendido separadamente.",
      },
    ],
  },
  "galaxy-s26-ultra-vs-galaxy-s25-ultra": {
    slug: "galaxy-s26-ultra-vs-galaxy-s25-ultra",
    a: { id: "galaxy-s25-ultra", name: "Galaxy S25 Ultra", reviewPath: "/melhores-celulares-samsung" },
    b: { id: "galaxy-s26-ultra", name: "Galaxy S26 Ultra", reviewPath: "/review/galaxy-s26-ultra" },
    title: "Galaxy S26 Ultra ou S25 Ultra: qual comprar em 2026?",
    description:
      "Galaxy S26 Ultra vs S25 Ultra: processador, recarga, tela de privacidade, câmeras e preço. Veja se vale pagar a mais pelo modelo novo.",
    shortAnswer:
      "O S25 Ultra continua sendo um topo de linha excelente: mesma tela de 6,9\", mesma bateria de 5.000 mAh, câmera de 200 MP com zoom de 5x, S Pen e sete anos de atualizações. O S26 Ultra traz processador mais novo, recarga de 60 W, a Tela de Privacidade e é um pouco mais leve. Se o S25 Ultra estiver uns R$ 800 ou mais abaixo, ele é a compra mais inteligente.",
    chooseA: [
      "Quer um topo de linha completo gastando bem menos.",
      "Prefere o acabamento em titânio.",
      "A recarga de 45 W já atende você.",
    ],
    chooseB: [
      "Quer o processador mais rápido e recarga de 60 W.",
      "Usa o celular em público e quer a Tela de Privacidade.",
      "A diferença de preço é pequena.",
    ],
    rows: [
      { label: "Processador", a: "Snapdragon 8 Elite", b: "Snapdragon 8 Elite Gen 5", winner: "b" },
      { label: "Tela", a: '6,9" AMOLED • 120 Hz', b: '6,9" AMOLED • 120 Hz • Tela de Privacidade', winner: "b" },
      { label: "Câmeras", a: "200 + 50 + 50 (5x) + 10 MP (3x)", b: "200 + 50 + 50 (5x) + 10 MP (3x)", winner: "tie" },
      { label: "Bateria", a: "5.000 mAh", b: "5.000 mAh", winner: "tie" },
      { label: "Recarga com fio", a: "45 W", b: "60 W", winner: "b" },
      { label: "Peso e material", a: "218 g • titânio", b: "214 g • alumínio", winner: "tie" },
      { label: "Atualizações", a: "7 anos (desde 2025)", b: "7 anos (desde 2026)", winner: "b" },
      { label: "Compre se estiver até", a: "R$ 5.800", b: "R$ 6.750", winner: "a" },
    ],
    faq: [
      {
        question: "Vale a pena trocar o S25 Ultra pelo S26 Ultra?",
        answer: "Para a maioria das pessoas, não. A evolução é pequena; faz sentido só se a recarga de 60 W ou a Tela de Privacidade forem importantes para você.",
      },
      {
        question: "Os dois têm S Pen?",
        answer: "Sim, os dois vêm com a S Pen embutida.",
      },
      {
        question: "Galaxy S25 Ultra ou iPhone 17?",
        answer:
          "O S25 Ultra tem câmera com zoom de 5x, S Pen e tela maior. O iPhone 17 é menor e mais barato. Para fotografia de longe e produtividade, o Ultra.",
      },
    ],
  },
  "galaxy-s26-fe-vs-galaxy-s25-fe": {
    slug: "galaxy-s26-fe-vs-galaxy-s25-fe",
    a: { id: "galaxy-s25-fe", name: "Galaxy S25 FE", reviewPath: "/review/galaxy-s25-fe" },
    b: { id: "galaxy-s26-fe", name: "Galaxy S26 FE", reviewPath: "/review/galaxy-s26-fe" },
    title: "Galaxy S26 FE ou S25 FE: qual comprar em 2026?",
    description:
      "Galaxy S26 FE vs S25 FE: tela, câmeras e bateria são iguais. Veja o que muda e qual vale mais a pena pelo preço de hoje.",
    shortAnswer:
      "Tela, câmeras, bateria, recarga com fio, IP68 e os sete anos de atualizações são iguais. O S26 FE tem processador mais novo (Exynos 2500) e mais modos de vídeo, como 4K a 120 fps. Pelo preço de hoje, o S25 FE entrega praticamente a mesma experiência por bem menos, e é a melhor compra.",
    chooseA: [
      "Quer a linha S acessível pelo menor preço.",
      "Grava vídeos comuns, sem câmera lenta em 4K.",
      "Quer recarga sem fio mais rápida (25 W).",
    ],
    chooseB: [
      "A diferença de preço é pequena.",
      "Grava muitos vídeos e quer 4K a 120 fps.",
      "Quer o processador mais novo.",
    ],
    rows: [
      { label: "Processador", a: "Exynos 2400", b: "Exynos 2500", winner: "b" },
      { label: "Tela", a: '6,7" AMOLED • 120 Hz', b: '6,7" AMOLED • 120 Hz', winner: "tie" },
      { label: "Câmeras", a: "50 + 12 + 8 MP (zoom 3x)", b: "50 + 12 + 8 MP (zoom 3x)", winner: "tie" },
      { label: "Vídeo", a: "Até 8K a 30 fps", b: "4K a 120 fps e 8K a 30 fps", winner: "b" },
      { label: "Bateria", a: "4.900 mAh", b: "4.900 mAh", winner: "tie" },
      { label: "Recarga", a: "45 W • sem fio 25 W", b: "45 W • sem fio 15 W", winner: "a" },
      { label: "Atualizações", a: "7 anos (desde 2025)", b: "7 anos (desde 2026)", winner: "b" },
      { label: "Compre se estiver até", a: "R$ 3.000", b: "R$ 3.300", winner: "a" },
    ],
    faq: [
      {
        question: "O Galaxy S26 FE vale a pena?",
        answer: "Vale se estiver perto do preço do S25 FE. Com diferença grande, o S25 FE é a compra mais inteligente.",
      },
      {
        question: "Qual tem câmera melhor?",
        answer: "As câmeras são as mesmas. O S26 FE grava mais modos de vídeo.",
      },
      {
        question: "Algum dos dois vem com carregador?",
        answer: "Não. O carregamento de 45 W exige um adaptador compatível, vendido separadamente.",
      },
    ],
  },
  "redmi-note-15-4g-vs-5g": {
    slug: "redmi-note-15-4g-vs-5g",
    a: { id: "redmi-note-15-5g", name: "Redmi Note 15 5G", reviewPath: "/review/redmi-note-15-5g" },
    b: { id: "redmi-note-15-4g", name: "Redmi Note 15 4G", reviewPath: "/melhores-celulares-xiaomi" },
    title: "Redmi Note 15 4G ou 5G: qual comprar em 2026?",
    description:
      "Redmi Note 15 4G vs 5G: processador, bateria, recarga, vídeo e 5G. Veja a diferença entre os dois e qual versão comprar.",
    shortAnswer:
      "Os nomes confundem, mas são aparelhos diferentes. O 5G tem Snapdragon 6 Gen 3, recarga de 45 W, vídeo em 4K e conexão 5G. O 4G tem Helio G100 Ultra e bateria maior (6.000 mAh), mas recarga de 33 W e vídeo só em Full HD. Para a maioria, o 5G. O 4G só vale se estiver uns R$ 300 mais barato e você não precisar de 5G.",
    chooseA: [
      "Quer 5G e o processador mais forte.",
      "Grava vídeos em 4K.",
      "Quer carregar mais rápido (45 W).",
    ],
    chooseB: [
      "Quer a maior bateria (6.000 mAh).",
      "O 5G ainda não faz diferença na sua região.",
      "Ele está bem mais barato que o 5G.",
    ],
    rows: [
      { label: "Processador", a: "Snapdragon 6 Gen 3", b: "Helio G100 Ultra", winner: "a" },
      { label: "5G", a: "Sim", b: "Não", winner: "a" },
      { label: "Tela", a: "AMOLED 120 Hz", b: "AMOLED 120 Hz", winner: "tie" },
      { label: "Câmera principal", a: "108 MP", b: "108 MP", winner: "tie" },
      { label: "Vídeo", a: "4K a 30 fps", b: "Full HD a 60 fps", winner: "a" },
      { label: "Bateria", a: "5.520 mAh", b: "6.000 mAh", winner: "b" },
      { label: "Recarga", a: "45 W", b: "33 W", winner: "a" },
      { label: "Compre se estiver até", a: "R$ 1.800", b: "R$ 1.400", winner: "tie" },
    ],
    faq: [
      {
        question: "Como saber se o anúncio é do Redmi Note 15 4G ou 5G?",
        answer:
          "Procure \"5G\" no nome. O código 2510DRA23L, que aparece em muitos anúncios, é da versão 4G.",
      },
      {
        question: "O Redmi Note 15 4G é ruim?",
        answer: "Não. Ele tem tela boa e bateria grande. Só não faz sentido pagar quase o preço do 5G por ele.",
      },
      {
        question: "E o Redmi Note 15 Pro?",
        answer: "É outro aparelho, mais caro, com câmera e recarga superiores. Confira o nome exato no anúncio.",
      },
    ],
  },
  "moto-g-max-vs-moto-g86": {
    slug: "moto-g-max-vs-moto-g86",
    a: { id: "moto-g-max", name: "Moto G Max", reviewPath: "/review/moto-g-max" },
    b: { id: "moto-g86-5g", name: "Moto G86 5G", reviewPath: "/review/moto-g86-5g" },
    title: "Moto G Max ou Moto G86: qual comprar em 2026?",
    description:
      "Moto G Max vs Moto G86: tela, câmera de 200 MP, processador e resistência lado a lado. Veja qual Motorola de até R$ 2.000 vale mais.",
    shortAnswer:
      "Para a maioria das pessoas, o Moto G Max: tela pOLED maior e mais brilhante (5.000 nits), câmera de 200 MP com estabilização, a mesma proteção IP68/IP69, 256 GB com cartão de memória, e costuma custar menos. O Moto G86 só leva vantagem no processador (Dimensity 7300 contra 6400): para jogos, ele é mais rápido.",
    chooseA: [
      "Quer a melhor tela e a melhor câmera da faixa.",
      "Quer cartão de memória e 256 GB.",
      "Quer gastar menos.",
    ],
    chooseB: [
      "Joga bastante e quer o processador mais forte.",
      "Prefere tela um pouco menor (6,67\").",
      "Encontrou o G86 pelo mesmo preço.",
    ],
    rows: [
      { label: "Processador", a: "Dimensity 6400 (6 nm)", b: "Dimensity 7300 (4 nm)", winner: "b" },
      { label: "Tela", a: 'pOLED 6,8" • 120 Hz • 5.000 nits', b: 'pOLED 6,67" • 120 Hz • 4.500 nits', winner: "a" },
      { label: "Câmera principal", a: "200 MP com OIS", b: "50 MP Sony com OIS", winner: "a" },
      { label: "Bateria", a: "5.200 mAh", b: "5.200 mAh", winner: "tie" },
      { label: "Proteção", a: "IP68 e IP69", b: "IP68 e IP69", winner: "tie" },
      { label: "Armazenamento", a: "256 GB + microSD", b: "256 GB", winner: "a" },
      { label: "Lançamento", a: "2026", b: "2025", winner: "a" },
      { label: "Compre se estiver até", a: "R$ 1.600", b: "R$ 1.900", winner: "a" },
    ],
    faq: [
      {
        question: "O Moto G Max é bom para jogos?",
        answer:
          "Roda bem os jogos populares, mas o Dimensity 6400 é de entrada. Para jogos pesados, o Moto G86 é mais rápido e o Poco X8 Pro, bem mais.",
      },
      {
        question: "A câmera de 200 MP faz diferença?",
        answer:
          "Ajuda em detalhe com boa luz e em recortes. A estabilização óptica é o que mais importa à noite, e os dois têm.",
      },
      {
        question: "Moto G Max ou Moto G77?",
        answer:
          "Usam o mesmo processador. O G Max tem câmera de 200 MP e IP68/IP69; o G77 tem IP64. Se o preço for parecido, o G Max.",
      },
    ],
  },
  "moto-g37-vs-moto-g17": {
    slug: "moto-g37-vs-moto-g17",
    a: { id: "moto-g37", name: "Moto G37", reviewPath: "/review/moto-g37" },
    b: { id: "moto-g17", name: "Moto G17", reviewPath: "/review/moto-g17" },
    title: "Moto G37 ou Moto G17: qual comprar em 2026?",
    description:
      "Moto G37 vs Moto G17: 5G, processador, tela e câmeras dos Motorola mais baratos de 2026. Veja qual comprar até R$ 1.000.",
    shortAnswer:
      "O Moto G37, para a maioria: tem 5G, processador bem mais rápido (Dimensity 6300 contra Helio G81) e tela de 120 Hz. O Moto G17 tem tela Full HD mais nítida, câmera ultra-angular e selfie de 32 MP, mas é 4G e mais lento. Se puder chegar a uns R$ 900, o Galaxy A17 5G ainda é melhor que os dois.",
    chooseA: [
      "Quer 5G e um celular mais rápido.",
      "Prefere a tela mais fluida (120 Hz).",
      "Quer carregar um pouco mais rápido (20 W).",
    ],
    chooseB: [
      "Quer tela mais nítida (Full HD) para ler e ver vídeos.",
      "Faz muitas selfies (32 MP) e usa a ultra-angular.",
      "Quer 256 GB gastando pouco.",
    ],
    rows: [
      { label: "Processador", a: "Dimensity 6300 (6 nm)", b: "Helio G81 (12 nm)", winner: "a" },
      { label: "5G", a: "Sim", b: "Não", winner: "a" },
      { label: "Tela", a: 'LCD 6,7" HD+ • 120 Hz', b: 'LCD 6,72" Full HD • 60 Hz', winner: "tie" },
      { label: "Câmeras traseiras", a: "50 MP", b: "50 MP + ultra-angular 5 MP", winner: "b" },
      { label: "Câmera frontal", a: "8 MP", b: "32 MP", winner: "b" },
      { label: "Bateria e recarga", a: "5.200 mAh • 20 W", b: "5.200 mAh • 18 W", winner: "a" },
      { label: "Proteção", a: "IP64", b: "IP64", winner: "tie" },
      { label: "Compre se estiver até", a: "R$ 900", b: "R$ 850", winner: "tie" },
    ],
    faq: [
      {
        question: "Qual é mais rápido, Moto G37 ou G17?",
        answer: "O Moto G37. O Dimensity 6300 é bem mais forte que o Helio G81.",
      },
      {
        question: "Vale mais um Moto G37 ou um Galaxy A17 5G?",
        answer:
          "O Galaxy A17 5G, se o preço for parecido: tela AMOLED, câmera com estabilização óptica e seis anos de atualizações.",
      },
      {
        question: "Os dois têm entrada para fone e cartão de memória?",
        answer: "Sim, os dois têm entrada P2 e slot para microSD.",
      },
    ],
  },
};

/** Comparativos em que o modelo aparece, para links a partir dos reviews e lançamentos. */
export function comparisonsForProduct(productId: string): { label: string; path: string }[] {
  return Object.values(COMPARISONS)
    .filter((c) => c.a.id === productId || c.b.id === productId)
    .map((c) => ({ label: `${c.a.name} ou ${c.b.name}?`, path: "/comparativo/" + c.slug }));
}
