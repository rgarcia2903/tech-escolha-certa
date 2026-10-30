// Lançamentos à venda com página própria "X é bom? Vale a pena?".
// Fichas conferidas em 30/10/2026 na Oficina da Net (fichas técnicas) e no Canaltech.
// O preço-alvo vem de GOOD_DEAL_UNDER (fair-prices.ts): é recomendação editorial, não preço de loja.
import { formatBRL, goodDealFor } from "./fair-prices";

export type Launch = {
  id: string;
  name: string;
  /** Mês e ano de lançamento no Brasil, ou só o ano quando as fontes divergem. */
  launched: string;
  /** Ordenação no índice /lancamentos (AAAA-MM). */
  sortKey: string;
  brand: "Samsung" | "Apple" | "Motorola" | "Xiaomi";
  /** Uma linha para o índice. */
  tagline: string;
  shortAnswer: string;
  specs: [string, string][];
  buyIf: string[];
  thinkTwiceIf: string[];
  compare: { label: string; path: string }[];
  versionNote?: string;
  faq: { question: string; answer: string }[];
};

export const LAUNCHES: Record<string, Launch> = {
  "moto-g-max": {
    id: "moto-g-max",
    name: "Moto G Max",
    launched: "2026",
    sortKey: "2026-08",
    brand: "Motorola",
    tagline: "Tela pOLED de 5.000 nits, câmera de 200 MP e IP68/IP69.",
    shortAnswer:
      "Sim. É o Motorola com melhor tela e câmera abaixo de R$ 2.000: pOLED de 6,8\" com 120 Hz, câmera de 200 MP com estabilização e proteção IP68 e IP69. O ponto fraco é o processador de entrada (Dimensity 6400): roda tudo do dia a dia, mas não é para jogos pesados.",
    specs: [
      ["Processador", "MediaTek Dimensity 6400 (6 nm)"],
      ["Tela", '6,8" pOLED • 120 Hz • até 5.000 nits'],
      ["Câmeras traseiras", "200 MP com OIS + ultra-angular 8 MP"],
      ["Câmera frontal", "32 MP"],
      ["Memória", "8 GB de RAM • 256 GB, com microSD"],
      ["Bateria", "5.200 mAh, recarga rápida com fio"],
      ["Proteção", "IP68 e IP69 • Gorilla Glass 7i"],
      ["Extras", "NFC • sem entrada para fone"],
    ],
    buyIf: [
      "Você quer a melhor tela e a melhor câmera da faixa.",
      "Usa o celular na rua, no sol ou perto de água.",
      "Quer 256 GB e ainda poder pôr cartão de memória.",
    ],
    thinkTwiceIf: [
      "Joga títulos pesados: o Moto G86 ou o Poco X8 Pro rodam melhor.",
      "Quer muitos anos de atualização: o Galaxy A36 vai até 2031.",
    ],
    compare: [
      { label: "Moto G Max ou Moto G86?", path: "/comparativo/moto-g-max-vs-moto-g86" },
      { label: "Melhores celulares Motorola", path: "/melhores-celulares-motorola" },
    ],
    versionNote: "No exterior, o mesmo aparelho é vendido como Moto G87. Confira se o anúncio é da versão de 256 GB.",
    faq: [
      {
        question: "O Moto G Max é bom?",
        answer:
          "Sim, para quem prioriza tela, câmera e resistência. Para jogos pesados, o processador Dimensity 6400 é o ponto fraco.",
      },
      { question: "O Moto G Max tem NFC?", answer: "Sim." },
      {
        question: "O Moto G Max aceita cartão de memória?",
        answer: "Sim, ele tem entrada para microSD além dos 256 GB internos.",
      },
      {
        question: "Moto G Max ou Moto G86?",
        answer:
          "O G Max tem tela e câmera melhores e costuma custar menos. O G86 tem processador mais forte, melhor para jogos.",
      },
    ],
  },
  "iphone-17": {
    id: "iphone-17",
    name: "iPhone 17",
    launched: "setembro de 2025",
    sortKey: "2025-09",
    brand: "Apple",
    tagline: "Tela de 120 Hz, câmera dupla de 48 MP e 256 GB de base.",
    shortAnswer:
      "Sim, é o iPhone que recomendamos para a maioria. Pela primeira vez o modelo de entrada tem tela de 120 Hz, câmera ultra-angular de 48 MP, selfie de 18 MP com Center Stage e 256 GB já na versão básica. Só falta a teleobjetiva dos modelos Pro.",
    specs: [
      ["Chip", "Apple A19"],
      ["Tela", '6,3" OLED ProMotion • 120 Hz • sempre ativa'],
      ["Câmeras traseiras", "48 MP + ultra-angular 48 MP"],
      ["Câmera frontal", "18 MP com Center Stage"],
      ["Armazenamento base", "256 GB"],
      ["Extras", "Dynamic Island • MagSafe • USB-C • Apple Intelligence"],
      ["Proteção", "IP68"],
      ["Lançamento", "Setembro de 2025 (R$ 7.999)"],
    ],
    buyIf: [
      "Quer um iPhone para usar por muitos anos.",
      "Faz questão de tela de 120 Hz e câmera ultra-angular boa.",
      "Precisa de espaço: 256 GB já na versão de entrada.",
    ],
    thinkTwiceIf: [
      "Usa o celular para o básico: o iPhone 17e tem o mesmo chip por bem menos.",
      "Quer zoom óptico: só os modelos Pro têm teleobjetiva.",
    ],
    compare: [
      { label: "iPhone 17 ou iPhone 17e?", path: "/comparativo/iphone-17-vs-iphone-17e" },
      { label: "Qual iPhone comprar em 2026", path: "/qual-iphone-comprar" },
    ],
    versionNote: "iPhone 17, 17 Pro, 17 Pro Max, iPhone Air e 17e são aparelhos diferentes. Confira o nome e a capacidade no anúncio.",
    faq: [
      {
        question: "O iPhone 17 vale a pena?",
        answer:
          "Sim, abaixo do preço-alvo. É o iPhone mais equilibrado da linha: tela de 120 Hz, câmera dupla de 48 MP e 256 GB.",
      },
      { question: "O iPhone 17 tem tela de 120 Hz?", answer: "Sim, com ProMotion e tela sempre ativa." },
      {
        question: "iPhone 17 ou iPhone 16?",
        answer: "O 17, se a diferença for de até uns R$ 1.000: tela de 120 Hz, ultra-angular de 48 MP e o dobro de armazenamento.",
      },
    ],
  },
  "poco-x8-pro": {
    id: "poco-x8-pro",
    name: "Poco X8 Pro",
    launched: "março de 2026",
    sortKey: "2026-03",
    brand: "Xiaomi",
    tagline: "O mais forte para jogos até R$ 2.500, com bateria de 6.500 mAh.",
    shortAnswer:
      "Sim, é o celular mais forte para jogos nessa faixa. O Dimensity 8500 Ultra passa de 1,9 milhão de pontos no AnTuTu, a bateria tem 6.500 mAh, a recarga é de 100 W e a Xiaomi promete 4 versões do Android e 6 anos de segurança. As câmeras são boas, mas não são o foco.",
    specs: [
      ["Processador", "MediaTek Dimensity 8500 Ultra (4 nm)"],
      ["Tela", '6,59" AMOLED 1.5K • 120 Hz • até 3.500 nits'],
      ["Câmeras traseiras", "50 MP com OIS + ultra-angular 8 MP"],
      ["Câmera frontal", "20 MP"],
      ["Bateria", "6.500 mAh • 100 W"],
      ["Proteção", "IP68"],
      ["Atualizações", "4 versões do Android e 6 anos de segurança"],
      ["Lançamento", "Março de 2026"],
    ],
    buyIf: [
      "Joga muito e quer desempenho de topo pagando intermediário.",
      "Quer bateria grande e recarga muito rápida.",
    ],
    thinkTwiceIf: [
      "Câmera é prioridade: o Moto G Max fotografa melhor.",
      "Quer tela compacta? Ela tem 6,59\", menor que a média.",
    ],
    compare: [
      { label: "Poco X8 Pro ou Poco X7 Pro?", path: "/comparativo/poco-x8-pro-vs-poco-x7-pro" },
      { label: "Melhores celulares para jogos até R$ 2.000", path: "/guia/melhores-celulares-para-jogos-ate-2000" },
    ],
    versionNote:
      "Poco X8 Pro e Poco X8 Pro Max são aparelhos diferentes: o Max tem tela de 6,83\", outro processador e bateria de 8.500 mAh. Confira o nome no anúncio.",
    faq: [
      { question: "O Poco X8 Pro é bom para jogos?", answer: "Sim, é o mais forte da faixa de até R$ 2.500." },
      {
        question: "Quantas atualizações o Poco X8 Pro recebe?",
        answer: "Quatro versões do Android e seis anos de segurança, segundo a ficha técnica.",
      },
      {
        question: "Qual a diferença entre Poco X8 Pro e X8 Pro Max?",
        answer: "O Max é maior (6,83\"), tem processador mais forte e bateria de 8.500 mAh, e custa mais.",
      },
    ],
  },
  "galaxy-a37-5g": {
    id: "galaxy-a37-5g",
    name: "Galaxy A37 5G",
    launched: "março de 2026",
    sortKey: "2026-03",
    brand: "Samsung",
    tagline: "Sucessor do A36 com Exynos 1480, IP68 e seis anos de atualizações.",
    shortAnswer:
      "Sim, mas compare com o A36. O A37 tem processador mais forte (Exynos 1480), IP68 e seis versões do Android a partir de 2026. Tela, câmeras e bateria são praticamente as mesmas do A36. Vale pagar a mais se a diferença for de até uns R$ 300.",
    specs: [
      ["Processador", "Samsung Exynos 1480"],
      ["Tela", '6,7" Super AMOLED • 120 Hz • até 1.900 nits'],
      ["Câmeras traseiras", "50 MP com OIS + ultra-angular 8 MP + macro 5 MP"],
      ["Câmera frontal", "12 MP"],
      ["Bateria", "5.000 mAh • suporta 45 W"],
      ["Proteção", "IP68"],
      ["Atualizações", "6 versões do Android"],
      ["Extras", "NFC • sem microSD"],
    ],
    buyIf: [
      "Quer um Samsung para usar por muitos anos.",
      "Faz questão de IP68.",
    ],
    thinkTwiceIf: [
      "O A36 está bem mais barato: entrega quase o mesmo.",
      "Quer cartão de memória: o A37 não tem microSD.",
    ],
    compare: [
      { label: "Galaxy A37 ou Galaxy A36?", path: "/comparativo/galaxy-a37-vs-galaxy-a36" },
      { label: "Melhores celulares Samsung", path: "/melhores-celulares-samsung" },
    ],
    faq: [
      {
        question: "O Galaxy A37 é bom?",
        answer: "Sim. É um intermediário completo, com IP68 e seis anos de atualizações. Compare o preço com o A36 antes de comprar.",
      },
      { question: "O Galaxy A37 tem NFC?", answer: "Sim." },
      { question: "O Galaxy A37 aceita cartão de memória?", answer: "Não. Escolha a capacidade certa na compra." },
    ],
  },
  "moto-g77": {
    id: "moto-g77",
    name: "Moto G77",
    launched: "março de 2026",
    sortKey: "2026-03",
    brand: "Motorola",
    tagline: "Tela AMOLED de 5.000 nits e câmera de 108 MP com OIS.",
    shortAnswer:
      "Sim, para quem quer tela e câmera boas gastando pouco. O Moto G77 tem AMOLED de 6,78\" com 5.000 nits, câmera de 108 MP com estabilização, NFC e três versões do Android. O processador é de entrada e a proteção é só IP64.",
    specs: [
      ["Processador", "MediaTek Dimensity 6400 (6 nm)"],
      ["Tela", '6,78" AMOLED • 120 Hz • até 5.000 nits'],
      ["Câmeras traseiras", "108 MP com OIS + ultra-angular 8 MP"],
      ["Câmera frontal", "32 MP"],
      ["Bateria", "5.200 mAh • 30 W"],
      ["Proteção", "IP64 e MIL-STD-810H"],
      ["Atualizações", "3 versões do Android"],
      ["Extras", "NFC • microSD (slot híbrido) • sem entrada para fone"],
    ],
    buyIf: [
      "Quer tela muito brilhante e boa câmera por pouco.",
      "Usa o celular para redes sociais, fotos e vídeos.",
    ],
    thinkTwiceIf: [
      "Quer proteção contra água de verdade: o Moto G Max tem IP68/IP69.",
      "Joga muito: o Moto G86 tem processador mais forte.",
    ],
    compare: [
      { label: "Moto G77 ou Moto G86?", path: "/comparativo/moto-g77-vs-moto-g86" },
      { label: "Melhores celulares Motorola", path: "/melhores-celulares-motorola" },
    ],
    faq: [
      { question: "O Moto G77 é bom?", answer: "Sim, pela tela e pela câmera. O processador é o ponto fraco." },
      { question: "O Moto G77 tem NFC?", answer: "Sim." },
      { question: "Quantas atualizações o Moto G77 recebe?", answer: "Três versões do Android, segundo a ficha técnica." },
    ],
  },
  "galaxy-a07": {
    id: "galaxy-a07",
    name: "Galaxy A07",
    launched: "2025",
    sortKey: "2025-09",
    brand: "Samsung",
    tagline: "O mais barato que vale a pena: Helio G99, IP54 e seis anos de atualizações.",
    shortAnswer:
      "Sim, é o celular barato que mais recomendamos. O Helio G99 é bem mais rápido que o processador dos concorrentes da faixa, tem IP54 e a Samsung promete seis anos de atualizações. A tela é LCD HD+ e a recarga é lenta, como em todos dessa faixa.",
    specs: [
      ["Processador", "MediaTek Helio G99 (6 nm)"],
      ["Tela", '6,7" LCD HD+ • 90 Hz'],
      ["Câmera principal", "50 MP"],
      ["Bateria", "5.000 mAh"],
      ["Proteção", "IP54"],
      ["Atualizações", "6 anos"],
    ],
    buyIf: [
      "Quer gastar até uns R$ 800 sem levar um celular lento.",
      "Vai ficar com o aparelho por muitos anos.",
    ],
    thinkTwiceIf: [
      "Pode chegar a R$ 900: o Galaxy A17 5G tem tela AMOLED e câmera estabilizada.",
    ],
    compare: [
      { label: "Galaxy A07 ou Moto G06?", path: "/comparativo/galaxy-a07-vs-moto-g06" },
      { label: "Melhores celulares até R$ 1.000", path: "/melhor-celular-ate-1000" },
    ],
    versionNote: "O Galaxy A07 tem versões de 128 GB e 256 GB. A de 128 GB com 4 GB de RAM é a mais barata.",
    faq: [
      { question: "O Galaxy A07 é bom?", answer: "Sim, para o preço. É o mais rápido e o que mais recebe atualizações na faixa de R$ 800." },
      { question: "Galaxy A07 ou Moto G06?", answer: "O A07: processador bem mais rápido e seis anos de atualizações." },
    ],
  },
  "moto-g06": {
    id: "moto-g06",
    name: "Moto G06",
    launched: "setembro de 2025",
    sortKey: "2025-09",
    brand: "Motorola",
    tagline: "Tela grande de 120 Hz, NFC e entrada para fone pelo menor preço.",
    shortAnswer:
      "Só para quem quer gastar o mínimo. O Moto G06 tem tela grande de 6,9\" com 120 Hz, NFC, entrada para fone, microSD e IP64, mas o processador Helio G81 é lento e a recarga é de só 10 W. Por pouco mais, o Galaxy A07 é bem mais rápido e tem seis anos de atualizações.",
    specs: [
      ["Processador", "MediaTek Helio G81 Extreme (12 nm)"],
      ["Tela", '6,9" LCD HD+ • 120 Hz'],
      ["Câmera principal", "50 MP"],
      ["Câmera frontal", "8 MP"],
      ["Bateria", "5.200 mAh • 10 W"],
      ["Proteção", "IP64"],
      ["Extras", "NFC • entrada para fone • microSD dedicado"],
      ["Lançamento", "Setembro de 2025"],
    ],
    buyIf: [
      "O orçamento é muito apertado.",
      "Faz questão de entrada para fone e tela grande.",
    ],
    thinkTwiceIf: [
      "Pode gastar um pouco mais: o Galaxy A07 é bem mais rápido.",
      "Quer recarga rápida: 10 W demora bastante.",
    ],
    compare: [
      { label: "Moto G06 ou Galaxy A07?", path: "/comparativo/galaxy-a07-vs-moto-g06" },
      { label: "Melhores celulares até R$ 1.000", path: "/melhor-celular-ate-1000" },
    ],
    faq: [
      { question: "O Moto G06 é bom?", answer: "Para o básico e pelo menor preço, sim. Para durar anos, o Galaxy A07 é melhor." },
      { question: "O Moto G06 tem NFC?", answer: "Sim." },
      { question: "O Moto G06 tem entrada para fone?", answer: "Sim, tem entrada de 3,5 mm." },
    ],
  },
  "iphone-17e": {
    id: "iphone-17e",
    name: "iPhone 17e",
    launched: "março de 2026",
    sortKey: "2026-03",
    brand: "Apple",
    tagline: "Chip A19 e 256 GB pelo menor preço de iPhone novo.",
    shortAnswer:
      "Sim, para quem quer iPhone novo gastando menos. O 17e tem o mesmo chip A19 do iPhone 17, 256 GB, MagSafe e IP68. Em troca, a tela é de 6,1\" e tem uma câmera só, sem ultra-angular. Para WhatsApp, redes sociais e fotos do dia a dia, é suficiente.",
    specs: [
      ["Chip", "Apple A19"],
      ["Tela", '6,1" OLED Super Retina XDR'],
      ["Câmera traseira", "48 MP com OIS (uma câmera)"],
      ["Câmera frontal", "12 MP"],
      ["Armazenamento", "256 GB ou 512 GB"],
      ["Extras", "MagSafe • USB-C • Apple Intelligence"],
      ["Proteção", "IP68"],
      ["Lançamento", "Março de 2026 (a partir de R$ 5.799)"],
    ],
    buyIf: [
      "Quer iPhone novo pelo menor preço.",
      "Não faz questão de câmera ultra-angular.",
    ],
    thinkTwiceIf: [
      "Quer tela de 120 Hz e câmera dupla: o iPhone 17 vale a diferença.",
    ],
    compare: [
      { label: "iPhone 17e ou iPhone 17?", path: "/comparativo/iphone-17-vs-iphone-17e" },
      { label: "Qual iPhone comprar em 2026", path: "/qual-iphone-comprar" },
    ],
    faq: [
      { question: "O iPhone 17e é bom?", answer: "Sim. Tem o mesmo chip do iPhone 17 e 256 GB; perde na tela e na câmera ultra-angular." },
      { question: "iPhone 17e ou iPhone 16e?", answer: "O 17e: chip A19, MagSafe e o dobro de armazenamento." },
    ],
  },
  "galaxy-s26-fe": {
    id: "galaxy-s26-fe",
    name: "Galaxy S26 FE",
    launched: "agosto de 2026",
    sortKey: "2026-08",
    brand: "Samsung",
    tagline: "Exynos 2500, teleobjetiva e sete anos de atualizações.",
    shortAnswer:
      "Sim, mas ainda está caro. O S26 FE tem Exynos 2500, teleobjetiva de 3x, vídeo em 4K a 120 fps, IP68 e sete anos de atualizações. O problema é o preço: o S25 FE entrega quase a mesma experiência por bem menos. Compre o S26 FE só abaixo do preço-alvo.",
    specs: [
      ["Processador", "Samsung Exynos 2500 (3 nm)"],
      ["Tela", '6,7" Dynamic AMOLED 2X • 120 Hz • até 1.900 nits'],
      ["Câmeras traseiras", "50 MP com OIS + ultra-angular 12 MP + tele 8 MP (3x)"],
      ["Câmera frontal", "12 MP"],
      ["Bateria", "4.900 mAh • 45 W • sem fio 15 W"],
      ["Proteção", "IP68"],
      ["Atualizações", "7 anos"],
      ["Lançamento", "Agosto de 2026 (R$ 5.499)"],
    ],
    buyIf: [
      "Quer a linha S com teleobjetiva e o processador mais novo.",
      "Grava muito vídeo (4K a 120 fps).",
    ],
    thinkTwiceIf: [
      "O S25 FE está bem mais barato: entrega quase o mesmo.",
    ],
    compare: [
      { label: "Galaxy S26 FE ou S25 FE?", path: "/comparativo/galaxy-s26-fe-vs-galaxy-s25-fe" },
      { label: "Melhores celulares Samsung", path: "/melhores-celulares-samsung" },
    ],
    faq: [
      { question: "O Galaxy S26 FE vale a pena?", answer: "Só abaixo do preço-alvo. Acima disso, o S25 FE é a melhor compra." },
      { question: "Quantas atualizações o Galaxy S26 FE recebe?", answer: "Sete anos de atualizações." },
    ],
  },
  "edge-70": {
    id: "edge-70",
    name: "Motorola Edge 70",
    launched: "março de 2026",
    sortKey: "2026-03",
    brand: "Motorola",
    tagline: "Ultrafino (6,3 mm), Snapdragon 7 Gen 4 e quatro anos de Android.",
    shortAnswer:
      "Sim, para quem quer um celular leve e fino. O Edge 70 tem só 6,3 mm e 163 g, Snapdragon 7 Gen 4, câmeras de 50 MP (principal, ultra-angular e frontal), IP68/IP69 e quatro anos de Android. Em troca, a bateria é menor (4.800 mAh) e não tem teleobjetiva.",
    specs: [
      ["Processador", "Qualcomm Snapdragon 7 Gen 4"],
      ["Tela", '6,7" pOLED • 120 Hz'],
      ["Espessura e peso", "6,3 mm • 163 g"],
      ["Câmeras traseiras", "50 MP com OIS + ultra-angular 50 MP"],
      ["Câmera frontal", "50 MP"],
      ["Bateria", "4.800 mAh • 68 W • sem fio 15 W"],
      ["Proteção", "IP68, IP69 e MIL-STD-810H"],
      ["Atualizações", "4 anos de Android"],
    ],
    buyIf: [
      "Quer um celular fino e leve.",
      "Tira muitas selfies (frontal de 50 MP).",
    ],
    thinkTwiceIf: [
      "Bateria é prioridade: o Edge 60 Pro tem 6.000 mAh.",
      "Quer zoom óptico: o Edge 60 Pro tem teleobjetiva.",
    ],
    compare: [
      { label: "Edge 70 ou Edge 60 Pro?", path: "/comparativo/edge-70-vs-edge-60-pro" },
      { label: "Melhores celulares Motorola", path: "/melhores-celulares-motorola" },
    ],
    versionNote: "Edge 70, Edge 70 Fusion, Edge 70 Pro e Edge 70 Ultra são aparelhos diferentes. Confira o nome no anúncio.",
    faq: [
      { question: "O Motorola Edge 70 é bom?", answer: "Sim, para quem valoriza leveza e câmeras. A bateria é o ponto fraco." },
      { question: "Edge 70 ou Edge 70 Fusion?", answer: "São aparelhos diferentes. Esta página é sobre o Edge 70 (sem Fusion)." },
    ],
  },
  "galaxy-s26": {
    id: "galaxy-s26",
    name: "Galaxy S26",
    launched: "fevereiro de 2026",
    sortKey: "2026-02",
    brand: "Samsung",
    tagline: "Topo de linha compacto: tela de 6,3\", teleobjetiva e sete anos de atualizações.",
    shortAnswer:
      "Sim, para quem quer um topo de linha compacto. O Galaxy S26 tem tela de 6,3\" com 120 Hz, câmera tripla com teleobjetiva de 3x, IP68 e sete anos de atualizações. A bateria (4.300 mAh) e a recarga (25 W) são os pontos fracos. Lançado a R$ 7.499, só vale perto do preço-alvo.",
    specs: [
      ["Processador", "Samsung Exynos 2600 (versão brasileira)"],
      ["Tela", '6,3" Dynamic AMOLED 2X • 120 Hz • até 2.600 nits'],
      ["Câmeras traseiras", "50 MP + ultra-angular 12 MP + tele 10 MP (3x)"],
      ["Câmera frontal", "12 MP"],
      ["Bateria", "4.300 mAh • 25 W • sem fio 15 W"],
      ["Proteção", "IP68"],
      ["Atualizações", "7 anos"],
      ["Lançamento", "Fevereiro de 2026 (R$ 7.499)"],
    ],
    buyIf: [
      "Quer um celular topo de linha que caiba bem na mão.",
      "Vai ficar com ele por muitos anos (sete de atualizações).",
    ],
    thinkTwiceIf: [
      "Bateria é prioridade: 4.300 mAh é pouco para uso pesado.",
      "Quer gastar menos: o Galaxy S25 FE tem teleobjetiva e bateria maior por bem menos.",
    ],
    compare: [
      { label: "Galaxy S26 ou Galaxy S25?", path: "/comparativo/galaxy-s26-vs-galaxy-s25" },
      { label: "Melhores celulares Samsung", path: "/melhores-celulares-samsung" },
    ],
    versionNote: "Galaxy S26, S26+, S26 Ultra e S26 FE são aparelhos diferentes. Confira o nome e a capacidade no anúncio.",
    faq: [
      { question: "O Galaxy S26 é bom?", answer: "Sim. É o topo de linha compacto da Samsung; o ponto fraco é a bateria." },
      { question: "O Galaxy S26 é bom para jogos?", answer: "Sim, o processador é de topo de linha. Em sessões longas, a bateria de 4.300 mAh acaba antes." },
      { question: "Quantas atualizações o Galaxy S26 recebe?", answer: "Sete anos de atualizações." },
    ],
  },
  "galaxy-s26-ultra": {
    id: "galaxy-s26-ultra",
    name: "Galaxy S26 Ultra",
    launched: "fevereiro de 2026",
    sortKey: "2026-02",
    brand: "Samsung",
    tagline: "Câmera de 200 MP com zoom de 5x, tela de 6,9\" e sete anos de atualizações.",
    shortAnswer:
      "Sim, é o Samsung mais completo: tela de 6,9\" com resolução QHD+, câmera de 200 MP com teleobjetivas de 3x e 5x, Snapdragon 8 Elite Gen 5, recarga de 60 W e sete anos de atualizações. Lançado a R$ 11.499, cai bastante: só compre perto do preço-alvo. Quem já tem o S25 Ultra não precisa trocar.",
    specs: [
      ["Processador", "Qualcomm Snapdragon 8 Elite Gen 5"],
      ["Tela", '6,9" Dynamic AMOLED 2X QHD+ • 120 Hz • modo privacidade'],
      ["Câmeras traseiras", "200 MP + ultra-angular 50 MP + tele 50 MP (5x) + tele 10 MP (3x)"],
      ["Câmera frontal", "12 MP"],
      ["Bateria", "5.000 mAh • 60 W • sem fio 25 W"],
      ["Proteção", "IP68"],
      ["Atualizações", "7 anos"],
      ["Lançamento", "Fevereiro de 2026 (R$ 11.499)"],
    ],
    buyIf: [
      "Quer a melhor câmera com zoom da Samsung.",
      "Usa o celular para trabalho e quer tela grande e privacidade.",
    ],
    thinkTwiceIf: [
      "Já tem o S25 Ultra: a diferença é pequena.",
      "Não usa zoom nem tela grande: o Galaxy S26 custa bem menos.",
    ],
    compare: [
      { label: "Galaxy S26 Ultra ou S25 Ultra?", path: "/comparativo/galaxy-s26-ultra-vs-galaxy-s25-ultra" },
      { label: "Galaxy S24 Ultra ainda vale a pena?", path: "/review/galaxy-s24-ultra" },
    ],
    faq: [
      { question: "O Galaxy S26 Ultra vale a pena?", answer: "Sim, perto do preço-alvo. Para quem já tem o S25 Ultra, a troca não compensa." },
      { question: "Galaxy S26 Ultra ou S25 Ultra?", answer: "Se a diferença for grande, o S25 Ultra entrega quase o mesmo. O S26 Ultra tem processador mais novo, recarga mais rápida e modo de privacidade na tela." },
    ],
  },
  "galaxy-s25": {
    id: "galaxy-s25",
    name: "Galaxy S25",
    launched: "janeiro de 2025",
    sortKey: "2025-01",
    brand: "Samsung",
    tagline: "Compacto com Snapdragon 8 Elite e sete anos de atualizações, bem mais barato que no lançamento.",
    shortAnswer:
      "Sim, e hoje é mais negócio que o S26 para quem quer um compacto. O Galaxy S25 tem Snapdragon 8 Elite, tela de 6,2\" com 120 Hz, teleobjetiva de 3x, IP68 e sete anos de atualizações (até 2032). O ponto fraco é a bateria de 4.000 mAh.",
    specs: [
      ["Processador", "Qualcomm Snapdragon 8 Elite (3 nm)"],
      ["Tela", '6,2" Dynamic AMOLED 2X • 120 Hz • até 2.600 nits'],
      ["Câmeras traseiras", "50 MP com OIS + ultra-angular 12 MP + tele 10 MP (3x)"],
      ["Câmera frontal", "12 MP"],
      ["Bateria", "4.000 mAh"],
      ["Proteção", "IP68 • Gorilla Glass Victus 2"],
      ["Atualizações", "7 anos"],
      ["Lançamento", "Janeiro de 2025 (R$ 6.999)"],
    ],
    buyIf: [
      "Quer desempenho de topo em um celular pequeno.",
      "Achou o S26 caro: o S25 entrega quase o mesmo.",
    ],
    thinkTwiceIf: [
      "Bateria é prioridade: 4.000 mAh é pouco para uso pesado.",
      "Prefere tela maior e bateria maior: o Galaxy S25 FE custa menos.",
    ],
    compare: [
      { label: "Galaxy S26 ou Galaxy S25?", path: "/comparativo/galaxy-s26-vs-galaxy-s25" },
      { label: "Galaxy S24 ainda vale a pena?", path: "/review/galaxy-s24" },
    ],
    versionNote: "Galaxy S25, S25+, S25 Edge, S25 Ultra e S25 FE são aparelhos diferentes. Confira o nome no anúncio.",
    faq: [
      { question: "O Galaxy S25 vale a pena em 2026?", answer: "Sim, abaixo do preço-alvo. Tem processador de topo e sete anos de atualizações." },
      { question: "Galaxy S25 ou S25 FE?", answer: "O S25 é menor e mais rápido. O S25 FE tem tela e bateria maiores e custa menos." },
    ],
  },
  "galaxy-a17-4g": {
    id: "galaxy-a17-4g",
    name: "Galaxy A17 4G",
    launched: "setembro de 2025",
    sortKey: "2025-09",
    brand: "Samsung",
    tagline: "Tela AMOLED Full HD+, NFC e seis anos de atualizações, sem 5G.",
    shortAnswer:
      "Sim, se você não precisa de 5G. O Galaxy A17 4G tem tela Super AMOLED de 6,7\" Full HD+ com 90 Hz, Helio G99, NFC, IP54 e seis anos de atualizações. Se a diferença para o A17 5G for pequena, leve o 5G, que tem processador mais forte.",
    specs: [
      ["Processador", "MediaTek Helio G99 (6 nm)"],
      ["Tela", '6,7" Super AMOLED Full HD+ • 90 Hz'],
      ["Câmeras traseiras", "50 MP + ultra-angular 5 MP + macro 2 MP"],
      ["Câmera frontal", "13 MP"],
      ["Bateria", "5.000 mAh • 25 W"],
      ["Proteção", "IP54"],
      ["Atualizações", "6 anos"],
      ["Extras", "NFC • microSD (slot híbrido) • sem 5G"],
    ],
    buyIf: [
      "Quer tela AMOLED e muitos anos de atualização gastando pouco.",
      "5G não faz diferença onde você usa o celular.",
    ],
    thinkTwiceIf: [
      "O A17 5G está só um pouco mais caro: ele é mais rápido e tem 5G.",
    ],
    compare: [
      { label: "Galaxy A17 4G ou 5G?", path: "/comparativo/galaxy-a17-4g-vs-galaxy-a17-5g" },
      { label: "Melhores celulares até R$ 1.000", path: "/melhor-celular-ate-1000" },
    ],
    versionNote: "Existem Galaxy A17 4G e Galaxy A17 5G, com processadores diferentes. Procure \"5G\" no nome do anúncio para saber qual é.",
    faq: [
      { question: "O Galaxy A17 4G é bom?", answer: "Sim, para o preço: tela AMOLED, NFC e seis anos de atualizações. Só não tem 5G." },
      { question: "O Galaxy A17 4G tem NFC?", answer: "Sim." },
      { question: "Galaxy A17 4G ou 5G?", answer: "O 5G, se a diferença for de até uns R$ 150: processador mais forte e conexão 5G." },
    ],
  },
  "moto-g17": {
    id: "moto-g17",
    name: "Moto G17",
    launched: "janeiro de 2026",
    sortKey: "2026-01",
    brand: "Motorola",
    tagline: "Básico com NFC, entrada para fone, IP64 e câmera de 50 MP.",
    shortAnswer:
      "Só para uso básico. O Moto G17 tem NFC, entrada para fone, microSD, IP64 e bateria de 5.200 mAh, mas a tela é LCD de 60 Hz e o processador Helio G81 é fraco: roda Free Fire e jogos leves com gráficos no mínimo. Pelo mesmo dinheiro, o Galaxy A17 5G é bem mais rápido e tem tela AMOLED.",
    specs: [
      ["Processador", "MediaTek Helio G81 Extreme (12 nm)"],
      ["Tela", '6,72" LCD Full HD+ • 60 Hz'],
      ["Câmeras traseiras", "50 MP + ultra-angular 5 MP"],
      ["Câmera frontal", "32 MP"],
      ["Bateria", "5.200 mAh • 18 W"],
      ["Proteção", "IP64"],
      ["Extras", "NFC • entrada para fone • microSD"],
      ["Lançamento", "Janeiro de 2026"],
    ],
    buyIf: [
      "Quer um Motorola barato com NFC e entrada para fone.",
      "Usa o celular para WhatsApp, redes sociais e vídeos.",
    ],
    thinkTwiceIf: [
      "Joga com frequência: o processador é fraco.",
      "Pode gastar o mesmo: o Galaxy A17 5G é bem mais rápido.",
    ],
    compare: [
      { label: "Moto G37 ou Moto G17?", path: "/comparativo/moto-g37-vs-moto-g17" },
      { label: "Melhores celulares até R$ 1.000", path: "/melhor-celular-ate-1000" },
    ],
    faq: [
      { question: "O Moto G17 é bom?", answer: "Para uso básico, sim. Para jogos e para durar anos, há opções melhores pelo mesmo preço." },
      { question: "O Moto G17 é bom para jogar Free Fire?", answer: "Roda, mas com gráficos baixos. O Helio G81 é um processador de entrada." },
      { question: "O Moto G17 tem NFC?", answer: "Sim, e também tem entrada para fone de ouvido." },
    ],
  },
};

export const LAUNCH_IDS = Object.keys(LAUNCHES);

/** Título para o Google: pergunta + preço-alvo. */
export function launchTitle(l: Launch): string {
  return `${l.name} é bom? Vale a pena em 2026? Até ${formatBRL(goodDealFor(l.id)!)}`;
}

export function launchDescription(l: Launch): string {
  return `${l.name}: ficha técnica, para quem vale e para quem não vale. Compre se estiver até ${formatBRL(goodDealFor(l.id)!)}. Veja o preço de hoje nas lojas.`;
}
