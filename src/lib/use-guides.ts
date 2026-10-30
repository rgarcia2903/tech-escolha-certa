// Guias por uso ("melhor celular para X"): um modelo por faixa de preço, com o motivo para esse uso.
// Sem prometer fps ou desempenho que não medimos: a escolha se apoia em processador, tela, memória e
// câmera, conferidos nas fichas usadas nos reviews. Preço-alvo editorial via goodDealFor.

export type UseTier = {
  label: string;
  productId: string;
  name: string;
  why: string;
  path: string;
};

export type UseGuide = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  shortAnswer: string;
  tiers: UseTier[];
  mattersTitle: string;
  matters: string[];
  avoid: { text: string; path?: string }[];
  related: { label: string; path: string }[];
  faq: { question: string; answer: string }[];
};

export const USE_GUIDES: Record<string, UseGuide> = {
  "melhor-celular-para-free-fire": {
    slug: "melhor-celular-para-free-fire",
    title: "Melhor celular para Free Fire em 2026: barato e que roda liso",
    description:
      "Qual celular comprar para jogar Free Fire em 2026: uma indicação por faixa de preço, de R$ 900 a R$ 2.500, o que importa para rodar liso e quais modelos evitar.",
    eyebrow: "Guia por uso · jogos · atualizado em outubro de 2026",
    h1: "Melhor celular para jogar Free Fire em 2026",
    shortAnswer:
      "Free Fire é leve e roda em quase qualquer celular atual. Para jogar liso, sem travar no meio da partida, o que faz diferença é o processador e uma tela de 90 ou 120 Hz. Até R$ 900, o Galaxy A17 5G. Até R$ 1.400, o Galaxy A36. Até R$ 2.000, o Moto G86. Para o melhor desempenho até R$ 2.500, o Poco X8 Pro.",
    tiers: [
      {
        label: "Até R$ 900",
        productId: "galaxy-a17-5g",
        name: "Galaxy A17 5G",
        why: "Processador Exynos 1330, bem mais rápido que o dos celulares mais baratos, e tela AMOLED de 90 Hz.",
        path: "/review/galaxy-a17-5g",
      },
      {
        label: "Até R$ 1.400",
        productId: "galaxy-a36-5g",
        name: "Galaxy A36 5G",
        why: "Snapdragon 6 Gen 3, tela AMOLED de 120 Hz e 6 GB de RAM: joga liso e ainda dura anos.",
        path: "/review/galaxy-a36-5g",
      },
      {
        label: "Até R$ 2.000",
        productId: "moto-g86-5g",
        name: "Moto G86 5G",
        why: "Dimensity 7300, tela pOLED de 120 Hz e bateria de 5.200 mAh para sessões longas.",
        path: "/review/moto-g86-5g",
      },
      {
        label: "Até R$ 2.500 (o melhor para jogos)",
        productId: "poco-x8-pro",
        name: "Poco X8 Pro",
        why: "Dimensity 8500 Ultra, o processador mais forte da faixa, bateria de 6.500 mAh e recarga de 100 W.",
        path: "/review/poco-x8-pro",
      },
    ],
    mattersTitle: "O que importa para rodar Free Fire liso",
    matters: [
      "Processador: é o que mais pesa. Os de entrada (Helio G81 e G85) rodam, mas travam mais nas partidas cheias.",
      "Tela de 90 ou 120 Hz: deixa o movimento mais suave, se o jogo e o celular estiverem configurados para isso.",
      "Memória: 4 GB rodam; 6 GB ou mais evitam que o jogo recarregue ao trocar de aplicativo.",
      "Bateria de 5.000 mAh ou mais: jogo gasta bateria rápido.",
    ],
    avoid: [
      { text: "Moto G06 e Moto G17: processador Helio G81, fraco para jogar liso.", path: "/review/moto-g17" },
      { text: "Moto G24 e Redmi 13C: processador Helio G85 e sem atualizações novas.", path: "/review/moto-g24" },
    ],
    related: [
      { label: "Melhor celular para Roblox", path: "/melhor-celular-para-roblox" },
      { label: "Melhores celulares para jogos até R$ 2.000", path: "/guia/melhores-celulares-para-jogos-ate-2000" },
      { label: "Poco X8 Pro é bom?", path: "/review/poco-x8-pro" },
    ],
    faq: [
      {
        question: "Qual o celular mais barato que roda Free Fire liso?",
        answer:
          "Entre os que recomendamos, o Galaxy A17 5G. Celulares com processador Helio G81, como o Moto G06, rodam o jogo, mas travam mais.",
      },
      {
        question: "Precisa de tela de 120 Hz para jogar Free Fire?",
        answer: "Não é obrigatório, mas deixa o jogo mais fluido. O Galaxy A36, o Moto G86 e o Poco X8 Pro têm 120 Hz.",
      },
      {
        question: "Qual o melhor celular para Free Fire até R$ 1.500?",
        answer: "O Galaxy A36 5G: processador Snapdragon 6 Gen 3, tela de 120 Hz e atualizações até 2031.",
      },
    ],
  },
  "melhor-celular-para-roblox": {
    slug: "melhor-celular-para-roblox",
    title: "Melhor celular para jogar Roblox em 2026: barato e sem travar",
    description:
      "Qual celular comprar para jogar Roblox sem travar em 2026: uma indicação por faixa de preço, a partir de R$ 900, quanto de memória precisa e quais modelos evitar.",
    eyebrow: "Guia por uso · jogos · atualizado em outubro de 2026",
    h1: "Melhor celular para jogar Roblox em 2026",
    shortAnswer:
      "No Roblox, cada jogo (\"experiência\") pesa diferente, e os mapas mais cheios exigem bem mais do celular. Por isso, memória RAM e processador importam mais que a câmera. Até R$ 900, o Galaxy A17 5G. Até R$ 1.400, o Galaxy A36, com 6 GB de RAM. Até R$ 2.000, o Moto G86. Para jogar tudo sem travar até R$ 2.500, o Poco X8 Pro.",
    tiers: [
      {
        label: "Até R$ 900",
        productId: "galaxy-a17-5g",
        name: "Galaxy A17 5G",
        why: "Exynos 1330 e tela AMOLED. A versão de 4 GB roda bem os jogos leves; se puder, prefira a de 8 GB.",
        path: "/review/galaxy-a17-5g",
      },
      {
        label: "Até R$ 1.400",
        productId: "galaxy-a36-5g",
        name: "Galaxy A36 5G",
        why: "6 GB de RAM e Snapdragon 6 Gen 3: aguenta as experiências mais pesadas com folga.",
        path: "/review/galaxy-a36-5g",
      },
      {
        label: "Até R$ 2.000",
        productId: "moto-g86-5g",
        name: "Moto G86 5G",
        why: "Dimensity 7300, 8 GB de RAM e 256 GB: espaço para muitos jogos e partidas longas.",
        path: "/review/moto-g86-5g",
      },
      {
        label: "Até R$ 2.500 (sem travar em nada)",
        productId: "poco-x8-pro",
        name: "Poco X8 Pro",
        why: "O processador mais forte da faixa e bateria de 6.500 mAh.",
        path: "/review/poco-x8-pro",
      },
    ],
    mattersTitle: "O que importa para jogar Roblox sem travar",
    matters: [
      "Memória RAM: 4 GB é o mínimo confortável; 6 GB ou mais fazem diferença nos mapas cheios.",
      "Processador: os de entrada travam nas experiências mais pesadas.",
      "Armazenamento: o Roblox e os jogos baixam conteúdo; 128 GB é o mínimo recomendável.",
      "Para criança: escolha um modelo com muitos anos de atualização e resistência a respingos.",
    ],
    avoid: [
      { text: "Moto G06 e Moto G17: processador Helio G81 e 4 GB de RAM, travam nos mapas cheios.", path: "/review/moto-g17" },
      { text: "Galaxy A06 e Redmi 13C: processador fraco e poucas atualizações.", path: "/review/galaxy-a06" },
    ],
    related: [
      { label: "Melhor celular para Free Fire", path: "/melhor-celular-para-free-fire" },
      { label: "Melhores celulares até R$ 1.000", path: "/melhor-celular-ate-1000" },
      { label: "Galaxy A36 é bom?", path: "/review/galaxy-a36-5g" },
    ],
    faq: [
      {
        question: "Quanto de RAM precisa para jogar Roblox?",
        answer: "4 GB rodam os jogos mais leves. Para os mapas cheios, sem recarregar, prefira 6 GB ou mais.",
      },
      {
        question: "Qual o melhor celular barato para Roblox?",
        answer: "O Galaxy A17 5G, de preferência na versão de 8 GB de RAM. Se puder chegar a R$ 1.400, o Galaxy A36 é bem melhor.",
      },
      {
        question: "Qual celular comprar para criança jogar Roblox?",
        answer:
          "O Galaxy A36: roda bem, tem proteção IP67 contra água e poeira e recebe atualizações até 2031. Mais barato, o Galaxy A17 5G.",
      },
    ],
  },
  "melhor-celular-para-gravar-videos": {
    slug: "melhor-celular-para-gravar-videos",
    title: "Melhor celular para fotos e vídeos em 2026, por faixa de preço",
    description:
      "Qual celular tem a melhor câmera para fotos e vídeos em cada faixa de preço, de R$ 900 a iPhone: estabilização, 4K, câmera frontal e o que evitar.",
    eyebrow: "Guia por uso · câmera e vídeo · atualizado em outubro de 2026",
    h1: "Melhor celular para fotos e vídeos em 2026",
    shortAnswer:
      "Para vídeo, o que mais pesa é estabilização da câmera e gravação em 4K, inclusive na frontal, para quem grava falando para a tela. Até R$ 900, o Galaxy A17 5G. Até R$ 1.400, o Galaxy A36. Até R$ 2.000, o Galaxy A57. Até R$ 3.000, o Galaxy S25 FE. Para o melhor vídeo, o iPhone 17.",
    tiers: [
      {
        label: "Até R$ 900",
        productId: "galaxy-a17-5g",
        name: "Galaxy A17 5G",
        why: "Câmera principal com estabilização óptica, rara nessa faixa: vídeo andando fica menos tremido.",
        path: "/review/galaxy-a17-5g",
      },
      {
        label: "Até R$ 1.400",
        productId: "galaxy-a36-5g",
        name: "Galaxy A36 5G",
        why: "Grava em 4K nas câmeras traseira e frontal, com estabilização óptica na principal.",
        path: "/review/galaxy-a36-5g",
      },
      {
        label: "Até R$ 2.000",
        productId: "galaxy-a57-5g",
        name: "Galaxy A57 5G",
        why: "4K a 30 fps na traseira e na frontal, estabilização óptica e ultra-angular de 12 MP.",
        path: "/review/galaxy-a57-5g",
      },
      {
        label: "Até R$ 3.000",
        productId: "galaxy-s25-fe",
        name: "Galaxy S25 FE",
        why: "Teleobjetiva de 3x, gravação até 8K e a câmera mais completa da faixa.",
        path: "/review/galaxy-s25-fe",
      },
      {
        label: "iPhone (o melhor vídeo)",
        productId: "iphone-17",
        name: "iPhone 17",
        why: "Vídeo de referência entre os celulares, ultra-angular de 48 MP e câmera frontal de 18 MP com Center Stage.",
        path: "/review/iphone-17",
      },
    ],
    mattersTitle: "O que importa para gravar vídeos",
    matters: [
      "Estabilização óptica (OIS) na câmera principal: é o que separa vídeo tremido de vídeo usável.",
      "4K na câmera frontal: faz diferença para quem grava falando para a tela (TikTok, Reels, YouTube).",
      "Armazenamento: vídeo em 4K ocupa muito espaço; 256 GB é o ideal para quem grava sempre.",
      "Microfone e luz: um microfone de lapela e boa iluminação melhoram mais o vídeo do que trocar de celular.",
    ],
    avoid: [
      { text: "Celulares sem estabilização óptica para quem grava andando, como o Moto G35.", path: "/review/moto-g35" },
      { text: "Modelos com 64 GB: enchem em poucos vídeos.", path: "/review/iphone-11" },
    ],
    related: [
      { label: "Galaxy A57 é bom?", path: "/review/galaxy-a57-5g" },
      { label: "Qual iPhone comprar", path: "/qual-iphone-comprar" },
      { label: "Lançamentos de celulares", path: "/lancamentos" },
    ],
    faq: [
      {
        question: "Qual o melhor celular para gravar vídeos para o YouTube?",
        answer:
          "Se o orçamento permite, o iPhone 17. No Android, o Galaxy S25 FE até R$ 3.000 e o Galaxy A57 até R$ 2.000, que grava em 4K também na frente.",
      },
      {
        question: "Qual celular tem a melhor câmera até R$ 1.500?",
        answer: "O Galaxy A36 5G: estabilização óptica e 4K nas câmeras traseira e frontal.",
      },
      {
        question: "Qual o celular com melhor câmera até R$ 1.000?",
        answer: "O Galaxy A17 5G, por ter estabilização óptica na câmera principal, algo raro nessa faixa.",
      },
    ],
  },
  "celular-com-melhor-bateria": {
    slug: "celular-com-melhor-bateria",
    title: "Celular com melhor bateria em 2026: um por faixa de preço",
    description:
      "Qual celular tem a melhor bateria em 2026, de R$ 1.200 a R$ 2.700: capacidade, velocidade de recarga, o que mais pesa na duração e quais modelos evitar se bateria é prioridade.",
    eyebrow: "Guia por uso · bateria · atualizado em outubro de 2026",
    h1: "Celular com melhor bateria em 2026",
    shortAnswer:
      "Para bateria, olhe a capacidade (6.000 mAh ou mais é muito acima da média) e a velocidade da recarga. Até R$ 1.200, o Moto G56 5G. Até R$ 1.400, o Redmi Note 15 4G, com 6.000 mAh. Até R$ 1.800, o Redmi Note 15 5G. Até R$ 2.500, o Poco X8 Pro, com 6.500 mAh e recarga de 100 W. Com câmera melhor, o Edge 60 Pro.",
    tiers: [
      {
        label: "Até R$ 1.200",
        productId: "moto-g56-5g",
        name: "Moto G56 5G",
        why: "5.200 mAh, recarga de 30 W, 256 GB e proteção IP68/IP69. A tela é LCD, por isso só vale com desconto.",
        path: "/review/moto-g56-5g",
      },
      {
        label: "Até R$ 1.400 (a maior bateria barata)",
        productId: "redmi-note-15-4g",
        name: "Redmi Note 15 4G",
        why: "6.000 mAh e recarga de 33 W. Não tem 5G nem grava em 4K: confira no anúncio que é a versão que você quer.",
        path: "/comparativo/redmi-note-15-4g-vs-5g",
      },
      {
        label: "Até R$ 1.800",
        productId: "redmi-note-15-5g",
        name: "Redmi Note 15 5G",
        why: "5.520 mAh com Snapdragon 6 Gen 3, um processador econômico, e tela AMOLED de 120 Hz.",
        path: "/review/redmi-note-15-5g",
      },
      {
        label: "Até R$ 2.500 (a maior bateria da lista)",
        productId: "poco-x8-pro",
        name: "Poco X8 Pro",
        why: "6.500 mAh e recarga de 100 W, além do processador mais forte da faixa.",
        path: "/review/poco-x8-pro",
      },
      {
        label: "Até R$ 2.700 (bateria e câmera)",
        productId: "edge-60-pro",
        name: "Motorola Edge 60 Pro",
        why: "6.000 mAh, recarga de 90 W, zoom óptico de 3x e IP68/IP69. O ponto fraco são os três anos de atualizações.",
        path: "/review/edge-60-pro",
      },
    ],
    mattersTitle: "O que faz a bateria durar mais",
    matters: [
      "Capacidade: 5.000 mAh é o padrão; 6.000 mAh ou mais dá folga para mais de um dia em uso leve.",
      "Processador: os mais novos e eficientes gastam menos; mAh sozinho não conta a história toda.",
      "Tela: brilho no máximo e 120 Hz gastam mais. Brilho automático ajuda bastante.",
      "Recarga rápida: não aumenta a duração, mas 30 minutos na tomada passam a render muito mais.",
    ],
    avoid: [
      { text: "Galaxy S25 (4.000 mAh) e Galaxy S26 (4.300 mAh): ótimos celulares, mas bateria não é o forte.", path: "/review/galaxy-s25" },
      { text: "Motorola Edge 70: fino e leve, com 4.800 mAh; se bateria é prioridade, o Edge 60 Pro é melhor.", path: "/comparativo/edge-70-vs-edge-60-pro" },
    ],
    related: [
      { label: "Melhor celular para motoboy e entregas", path: "/melhor-celular-para-motoboy" },
      { label: "Melhor celular para Free Fire", path: "/melhor-celular-para-free-fire" },
      { label: "Poco X8 Pro é bom?", path: "/review/poco-x8-pro" },
    ],
    faq: [
      {
        question: "Qual o celular com a melhor bateria em 2026?",
        answer:
          "Entre os que recomendamos até R$ 2.500, o Poco X8 Pro, com 6.500 mAh e recarga de 100 W. Mais barato, o Redmi Note 15 4G tem 6.000 mAh.",
      },
      {
        question: "Qual Samsung tem a melhor bateria?",
        answer:
          "Na linha A, o Galaxy A36 e o A37 têm 5.000 mAh. Na linha S, o S25 FE e o S25 Ultra têm 4.900 e 5.000 mAh. Os compactos S25 e S26 têm bateria menor.",
      },
      {
        question: "Celular com bateria de 6.000 mAh dura quanto?",
        answer:
          "Depende do uso, da tela e do processador. Não publicamos horas porque não medimos em laboratório; o que dá para dizer é que 6.000 mAh fica bem acima dos 5.000 mAh da maioria.",
      },
    ],
  },
  "melhor-celular-para-motoboy": {
    slug: "melhor-celular-para-motoboy",
    title: "Melhor celular para motoboy e entregador em 2026: resistente e com bateria",
    description:
      "Qual celular comprar para trabalhar com entregas de moto em 2026: resistência a água e poeira, tela legível no sol, bateria para o dia todo e um modelo por faixa de preço.",
    eyebrow: "Guia por uso · trabalho · atualizado em outubro de 2026",
    h1: "Melhor celular para motoboy e entregador em 2026",
    shortAnswer:
      "Para quem trabalha na rua, o celular precisa aguentar chuva e poeira (IP68 ou IP69), ter tela que dá para ler no sol e bateria para o dia inteiro com GPS ligado. A Motorola domina essa faixa. Até R$ 1.200, o Moto G56 5G. Até R$ 1.600, o Moto G Max. Até R$ 1.900, o Moto G86. Até R$ 2.700, o Edge 60 Pro, com 6.000 mAh e recarga de 90 W.",
    tiers: [
      {
        label: "Até R$ 1.200",
        productId: "moto-g56-5g",
        name: "Moto G56 5G",
        why: "IP68 e IP69, Gorilla Glass 7i, 5.200 mAh e 256 GB. O mais barato que aguenta chuva de verdade.",
        path: "/review/moto-g56-5g",
      },
      {
        label: "Até R$ 1.600",
        productId: "moto-g-max",
        name: "Moto G Max",
        why: "Tela grande de 6,8\" com pico de 5.000 nits, a mais fácil de ler no sol desta lista, IP68/IP69 e 5.200 mAh.",
        path: "/review/moto-g-max",
      },
      {
        label: "Até R$ 1.900",
        productId: "moto-g86-5g",
        name: "Moto G86 5G",
        why: "IP68/IP69, tela pOLED com pico de 4.500 nits, 5.200 mAh e carregador de 33 W na caixa.",
        path: "/review/moto-g86-5g",
      },
      {
        label: "Até R$ 2.700 (bateria de sobra)",
        productId: "edge-60-pro",
        name: "Motorola Edge 60 Pro",
        why: "6.000 mAh, recarga de 90 W para encher rápido no intervalo, IP68/IP69 e certificação militar MIL-STD-810H.",
        path: "/review/edge-60-pro",
      },
    ],
    mattersTitle: "O que importa para quem trabalha com entregas",
    matters: [
      "Proteção IP68 ou IP69: aguenta chuva e poeira. IP54 e IP64 só protegem contra respingos.",
      "Tela brilhante: acima de 3.000 nits de pico, o mapa fica legível no sol do meio-dia.",
      "Bateria de 5.000 mAh ou mais e recarga rápida: GPS e tela ligados o dia todo gastam muito.",
      "Suporte com amortecedor: a vibração do motor pode danificar câmeras com estabilização óptica; fabricantes como a Apple alertam para isso.",
    ],
    avoid: [
      { text: "Moto G06 e Moto G17: proteção IP64 (só respingos) e processador fraco para GPS e app de entrega abertos juntos.", path: "/review/moto-g17" },
      { text: "Celulares com 64 GB: os apps de entrega e mapas ocupam espaço e deixam o aparelho lento.", path: "/review/iphone-11" },
    ],
    related: [
      { label: "Celular com melhor bateria", path: "/celular-com-melhor-bateria" },
      { label: "Moto G Max ou Moto G86?", path: "/comparativo/moto-g-max-vs-moto-g86" },
      { label: "Melhores celulares Motorola", path: "/melhores-celulares-motorola" },
    ],
    faq: [
      {
        question: "Qual o melhor celular para motoboy barato?",
        answer: "O Moto G56 5G: tem IP68/IP69, 5.200 mAh e 256 GB. Vale a pena até cerca de R$ 1.200.",
      },
      {
        question: "Celular com IP68 pode tomar chuva?",
        answer:
          "Sim, a certificação cobre chuva e até imersão em teste. Mesmo assim, a garantia costuma não cobrir dano por líquido; evite molhar de propósito e seque as entradas antes de carregar.",
      },
      {
        question: "Qual celular aguenta o dia todo com GPS ligado?",
        answer:
          "Os de 5.200 mAh ou mais desta lista dão conta de um turno normal. Para turnos longos, o Edge 60 Pro, com 6.000 mAh e recarga de 90 W, é o mais folgado.",
      },
    ],
  },
};

/** Guias por uso que indicam o modelo, para links a partir dos reviews. */
export function guidesForProduct(productId: string): { label: string; path: string }[] {
  return Object.values(USE_GUIDES)
    .filter((g) => g.tiers.some((t) => t.productId === productId))
    .map((g) => ({ label: g.h1.replace(/ em 2026$/, ""), path: "/" + g.slug }));
}
