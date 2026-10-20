import type { ReactNode } from "react";
import { getProduct } from "@/lib/product-catalog";

type Topic = { title: string; takeaway: string; detail: string; buyingTip: string };
type Editorial = { verdict: string; idealFor: string[]; notFor: string[]; topics: Topic[]; compare: { id: string; reason: string }[] };
const REVIEWS: Record<string, Editorial> = {
  "galaxy-a17-5g": {
    verdict: "Uma escolha que deve ser julgada pelo preço da versão oferecida e pelo tipo de uso. O nome Galaxy e o 5G, sozinhos, não garantem que a configuração seja ideal para você.",
    idealFor: ["Mensagens, redes sociais, aplicativos bancários e navegação.", "Quem deseja um Samsung para tarefas cotidianas.", "Quem prioriza o preço final e o suporte da versão comprada."],
    notFor: ["Quem quer jogar títulos exigentes por longos períodos.", "Quem procura um salto de câmeras sem comparar os modelos superiores.", "Quem precisa de muita memória sem conferir a configuração exata."],
    topics: [
      {title:"Tela e experiência diária",takeaway:"O principal é a legibilidade e a fluidez no seu uso real.",detail:"Em um aparelho de entrada, uma tela grande não substitui a necessidade de verificar resolução, brilho ao ar livre e taxa de atualização. Para vídeos, leitura e aplicativos sociais, avalie se a tela permanece confortável em ambientes iluminados e se o tamanho cabe bem na mão.",buyingTip:"Compare a ficha da versão anunciada e, se possível, veja a tela ligada antes de comprar."},
      {title:"Processador, RAM e desempenho",takeaway:"A variante pesa tanto quanto o nome do aparelho.",detail:"Mensagens e navegação tendem a exigir menos que jogos e multitarefa. RAM física, armazenamento disponível e espaço ocupado pelo sistema influenciam a experiência conforme o tempo passa. Não confunda expansão virtual de RAM com memória física.",buyingTip:"Confirme a RAM física e o armazenamento no anúncio; não presuma que todos os A17 5G são iguais."},
      {title:"Câmeras e vídeos",takeaway:"Megapixels não são uma garantia de fotos melhores.",detail:"Priorize exemplos feitos em ambientes internos, fotos de pessoas, movimento e vídeos. A qualidade depende do processamento, foco e iluminação, não apenas do número de sensores. Fotos de divulgação não demonstram o resultado real da câmera.",buyingTip:"Procure amostras do A17 5G da mesma região e confira estabilização e gravação de vídeo na ficha técnica."},
      {title:"Bateria e carregamento",takeaway:"Compare autonomia em uso misto, não só a capacidade declarada.",detail:"Brilho de tela, 5G, aplicativos em segundo plano e intensidade de uso alteram a autonomia. Potência máxima de carregamento e carregador incluído na caixa são informações diferentes.",buyingTip:"Confira capacidade, potência aceita e se a oferta acompanha carregador."},
      {title:"Construção, software e durabilidade",takeaway:"A longevidade depende de cuidados e atualização.",detail:"Verifique a proteção declarada para o modelo específico, as condições de garantia no Brasil e a política oficial de atualizações. Não confunda classificações de resistência com impermeabilidade permanente.",buyingTip:"Prefira vendedor com nota fiscal e garantia claramente identificada."}
    ],
    compare:[{id:"galaxy-a36-5g",reason:"Considere subir para o A36 se a diferença de preço justificar tela, desempenho ou recursos superiores."},{id:"redmi-note-15-5g",reason:"Compare tamanho da tela, armazenamento e bateria da variante de cada anúncio."}],
  },
  "galaxy-a36-5g": {
    verdict:"Uma alternativa intermediária para quem prioriza equilíbrio e ecossistema Samsung. Antes de recomendar, é necessário conferir a variante e compará-la com as gerações próximas.",
    idealFor:["Quem usa muitas aplicações e quer um conjunto intermediário.","Quem valoriza o ecossistema e recursos de software Samsung.","Quem pretende usar o aparelho por vários anos e verifica o suporte oficial."],
    notFor:["Quem busca o menor preço absoluto.","Quem decide a compra apenas pelo número de megapixels.","Quem precisa de desempenho extremo em jogos competitivos."],
    topics:[
      {title:"Tela e multimídia",takeaway:"É uma categoria em que a tela precisa justificar o preço extra.",detail:"Ao comparar com aparelhos de entrada, avalie painel, brilho externo, fluidez de rolagem e qualidade do áudio. Vídeos e jogos não dependem apenas da resolução: contraste, taxa de atualização e desempenho sustentado também interferem.",buyingTip:"Compare as especificações de tela com Galaxy A17 e concorrentes na mesma faixa."},
      {title:"Desempenho e multitarefa",takeaway:"Examine a memória da variante, não apenas o processador.",detail:"Aplicativos simultâneos, câmera e navegação pesada podem expor limitações de RAM e armazenamento. Benchmark isolado não demonstra aquecimento e estabilidade em sessões longas.",buyingTip:"Verifique RAM física, armazenamento e informações de desempenho de fontes independentes."},
      {title:"Fotografia",takeaway:"Compare a câmera principal, grande-angular e a consistência do vídeo.",detail:"O valor está na confiabilidade das fotos em diferentes luzes. Um conjunto de câmeras deve ser avaliado por foco, cores, estabilização e processamento; câmeras auxiliares podem ter utilidade limitada.",buyingTip:"Busque amostras reais noturnas e de vídeo do A36 5G."},
      {title:"Autonomia e recarga",takeaway:"O perfil de uso muda radicalmente a duração da bateria.",detail:"Tela brilhante, redes móveis e gravação de vídeo aceleram o consumo. Compare potência de carga suportada, tempo de recarga medido e o carregador efetivamente incluído na oferta.",buyingTip:"Não suponha que o carregador de maior potência venha na caixa."},
      {title:"Atualizações e construção",takeaway:"O suporte deve ser confirmado para a versão brasileira.",detail:"Considere política oficial de atualizações, proteção do aparelho, assistência e facilidade de reposição. Resistência à água é medida em condições específicas, não uma garantia contra qualquer dano.",buyingTip:"Consulte documentação oficial e confirme garantia nacional."}
    ],
    compare:[{id:"galaxy-a17-5g",reason:"O A17 pode ser suficiente se o orçamento pesar mais do que os ganhos intermediários."},{id:"galaxy-s25-fe",reason:"O S25 FE atende quem pretende pagar mais por recursos premium."}],
  },
  "redmi-note-15-5g": {
    verdict:"É um candidato forte para quem valoriza tela AMOLED de 120 Hz e bateria de 5.520 mAh. O Snapdragon 6 Gen 3 exige expectativas realistas em jogos pesados.",
    idealFor:["Quem usa muitos vídeos, redes sociais e leitura na tela.","Quem procura bateria grande para uso cotidiano.","Quem compara ficha técnica e preço na mesma configuração."],
    notFor:["Quem quer desempenho de topo em jogos exigentes.","Quem não quer conferir se o anúncio é 5G, 4G ou Pro.","Quem precisa de garantia sem verificar a origem da unidade."],
    topics:[
      {title:"Tela AMOLED de 120 Hz",takeaway:"Um dos argumentos relevantes do modelo para multimídia.",detail:"A tecnologia AMOLED permite pretos profundos e a taxa de 120 Hz pode tornar rolagens mais fluidas quando o aplicativo e o sistema suportam. Ainda importam brilho sob sol, calibração e eficiência energética.",buyingTip:"Confirme que a descrição do anúncio corresponde ao Redmi Note 15 5G, não a outro Note 15."},
      {title:"Snapdragon 6 Gen 3 e jogos",takeaway:"Perfil mais equilibrado que dedicado a jogos pesados.",detail:"O processador atende à proposta de uso cotidiano, mas a fluidez em jogos varia com gráficos, temperatura e otimização. Não é responsável afirmar FPS sem medições controladas. Para jogos exigentes, compare com opções da linha POCO.",buyingTip:"Veja avaliações do jogo específico que você utiliza e da mesma variante."},
      {title:"Câmeras e gravação",takeaway:"Priorize resultados práticos e não apenas a resolução anunciada.",detail:"Fotos de dia, retratos, cenas noturnas e vídeos podem ter comportamentos diferentes. Analise exemplos em movimento e a estabilidade do foco, além do tipo de lente disponível na versão comercial.",buyingTip:"Compare amostras independentes e as funções de vídeo divulgadas pela Xiaomi."},
      {title:"Bateria de 5.520 mAh",takeaway:"Capacidade generosa, mas autonomia não é um número fixo de horas.",detail:"A bateria divulgada pela Xiaomi é de 5.520 mAh. Tela em 120 Hz, sinal fraco e jogos podem reduzir a duração; consumo em espera depende de software e rede. A carga rápida deve ser comparada pela potência suportada e acessórios do anúncio.",buyingTip:"Confirme se o carregador está incluído e se o anúncio informa corretamente a potência."},
      {title:"Construção e resistência",takeaway:"A certificação deve ser interpretada dentro das condições de teste.",detail:"A publicidade do produto destaca resistência à poeira e água; isso não significa proteção irrestrita contra submersão ou jatos em todas as circunstâncias. Quedas, desgaste e reparos alteram a proteção original.",buyingTip:"Leia as restrições oficiais de uso e cobertura de garantia, especialmente para danos por líquido."}
    ],
    compare:[{id:"moto-g86-5g",reason:"Compare resistência, conjunto de câmeras, tela e preço da variante."},{id:"galaxy-a36-5g",reason:"Considere diferenças de software, política de atualização e assistência."}],
  },
  "moto-g56-5g": {
    verdict:"Uma opção para quem quer concentrar o orçamento no essencial. Sem uma comparação concreta de preço, versão e suporte, não faz sentido classificá-lo como melhor compra automaticamente.",
    idealFor:["Chamadas, redes sociais, GPS e uso diário.","Quem prefere interfaces e recursos Motorola.","Quem deseja controlar o orçamento e evitar pagar por recursos não utilizados."],
    notFor:["Quem pretende rodar jogos exigentes em gráficos altos.","Quem deseja fotografar frequentemente à noite sem ver testes.","Quem decide por especificações de acessórios sem confirmar o conteúdo da caixa."],
    topics:[
      {title:"Tela e leitura",takeaway:"Conforto de uso deve pesar mais que slogans.",detail:"Confira nitidez de texto, fluidez e visibilidade ao sol. A percepção de qualidade também muda com brilho, proteção da tela e qualidade dos alto-falantes.",buyingTip:"Consulte o painel e a taxa de atualização declarados para a variante brasileira."},
      {title:"Performance em aplicativos",takeaway:"Pense nos aplicativos que mantém abertos ao mesmo tempo.",detail:"Navegação, câmera, mapas e redes sociais exigem recursos diferentes. RAM física, armazenamento e controle térmico são mais úteis para avaliar o uso contínuo que uma lista de recursos promocionais.",buyingTip:"Compare a RAM e a capacidade anunciadas antes de escolher entre ofertas."},
      {title:"Câmera principal e selfies",takeaway:"Busque consistência em pessoas e movimento.",detail:"Uma foto de marketing revela o design, não o desempenho fotográfico. Vale conferir velocidade de captura, exposição noturna, tons de pele e estabilização de vídeos.",buyingTip:"Procure amostras independentes do Moto G56 5G comum."},
      {title:"Energia e acessórios",takeaway:"Carregador na imagem promocional não prova inclusão em todas as ofertas.",detail:"A duração depende de sinal, tela e intensidade de uso. Verifique também a potência de recarga, cabos e acessórios da caixa, pois podem variar por país e canal de venda.",buyingTip:"Confirme na descrição do anúncio o que acompanha o produto."},
      {title:"Resistência e acabamento",takeaway:"Certificações exigem leitura das condições de teste.",detail:"O acabamento influencia aderência, conservação e sensação na mão. A proteção declarada contra água, poeira ou impactos não equivale a proteção ilimitada e pode se degradar com o uso.",buyingTip:"Compare dimensões, peso, garantia e certificações da variante exata."}
    ],
    compare:[{id:"moto-g86-5g",reason:"Avalie se o preço adicional do G86 compensa em tela e experiência geral."},{id:"galaxy-a17-5g",reason:"Alternativa de entrada para comparar garantia, memória e software."}],
  },
  "moto-g86-5g": {
    verdict:"Candidato intermediário para quem procura tela e resistência em uma opção equilibrada. É fundamental não confundi-lo com o Moto G86 Power, que é outra variante.",
    idealFor:["Quem quer um intermediário para vídeos, trabalho e uso misto.","Quem prioriza construção e conforto visual.","Quem avalia suporte e assistência do fabricante."],
    notFor:["Quem precisa da máxima potência em jogos pesados.","Quem está avaliando ofertas do G86 Power como se fossem deste modelo.","Quem compra sem comparar o armazenamento e a RAM."],
    topics:[
      {title:"Tela e experiência visual",takeaway:"Analise brilho externo e fluidez além da resolução.",detail:"Uma boa tela intermediária deve servir para leitura, vídeo e navegação. Compare formato, contraste, proteção do vidro e legibilidade ao ar livre entre as opções da mesma faixa.",buyingTip:"Verifique a ficha do Moto G86 5G comum, não a do Power."},
      {title:"Desempenho e jogos",takeaway:"Para uso misto, estabilidade importa mais que um pico de benchmark.",detail:"Multitarefa, câmera e navegação devem ser avaliadas com a configuração exata de RAM e armazenamento. Em jogos pesados, observe aquecimento, consumo e queda de desempenho após sessões prolongadas.",buyingTip:"Compare medições independentes e configurações dos modelos concorrentes."},
      {title:"Câmeras",takeaway:"Examine fotos noturnas e vídeos para encontrar diferenças reais.",detail:"Poder fazer boas fotos em situações variadas importa mais que somar megapixels. Avalie retratos, alcance de foco, processamento de cores e estabilização em gravações.",buyingTip:"Busque amostras sem edição e compare com o Edge 60 Pro, se a câmera for prioridade."},
      {title:"Bateria e carregamento",takeaway:"Diferencie capacidade declarada de autonomia medida.",detail:"O consumo muda com brilho, 5G, aplicativos em segundo plano e jogos. Confira compatibilidade com carregadores e conteúdo da caixa, pois ofertas podem variar.",buyingTip:"Não use especificações do G86 Power para julgar este G86."},
      {title:"Construção e suporte",takeaway:"Proteção e atualizações devem ser avaliadas em conjunto.",detail:"Verifique resistência anunciada, peso, conforto nas mãos e condições de garantia. Certificações não significam que impactos e danos por líquido estejam cobertos indiscriminadamente.",buyingTip:"Confirme documentação e disponibilidade de assistência oficial."}
    ],
    compare:[{id:"moto-g56-5g",reason:"O G56 pode economizar dinheiro para uso mais básico."},{id:"edge-60-pro",reason:"O Edge 60 Pro merece comparação se câmeras e recarga forem decisivas."}],
  },
  "edge-60-pro": {
    verdict:"Voltado a quem pretende pagar mais por um conjunto avançado, sobretudo câmera, recarga e experiência de uso. O benefício real depende da diferença de preço para intermediários.",
    idealFor:["Quem fotografa, grava vídeos e usa muitos aplicativos.","Quem valoriza recarga e experiência mais premium.","Quem compara qualidade de construção e recursos além de especificações isoladas."],
    notFor:["Quem usa só mensagens e chamadas.","Quem quer decidir exclusivamente pela potência anunciada do carregador.","Quem não pretende aproveitar as câmeras e os recursos adicionais."],
    topics:[
      {title:"Tela e acabamento",takeaway:"Avalie conforto visual e ergonomia por mais tempo.",detail:"Curvatura, brilho, contraste e sensibilidade ao toque podem influenciar o uso com capa e película. A experiência premium também depende de vibração, alto-falantes e conforto no manuseio.",buyingTip:"Avalie como o aparelho fica com capa e compare resistência do vidro."},
      {title:"Desempenho sustentado",takeaway:"O que importa é o desempenho após minutos de uso intenso.",detail:"Em aplicativos pesados, processamento de fotos e jogos, o controle de calor determina quanto da potência permanece disponível. RAM e armazenamento da variante devem ser considerados junto com o processador.",buyingTip:"Procure testes independentes de aquecimento e desempenho continuado."},
      {title:"Câmeras e zoom",takeaway:"O conjunto fotográfico é um dos principais motivos para considerar este modelo.",detail:"A galeria mostra o design do módulo, mas não substitui amostras de câmera. Compare principal, grande-angular, teleobjetiva, alcance óptico, retratos e vídeo com estabilização — especialmente à noite.",buyingTip:"Compare imagens reais do Edge 60 Pro com as do S25 FE; não trate zoom digital como óptico."},
      {title:"Autonomia e recarga",takeaway:"Recarga rápida ajuda, mas não substitui autonomia consistente.",detail:"Considere como o consumo varia em vídeo, navegação e fotografia. Compare tempos de carregamento medidos, compatibilidade de carregador e as condições de potência máxima.",buyingTip:"Confirme se o carregador e cabo da oferta suportam a recarga divulgada."},
      {title:"Durabilidade e pós-venda",takeaway:"Material premium não elimina a necessidade de cuidado.",detail:"Verifique condições das certificações de resistência, proteção do display, garantia nacional e disponibilidade de assistência. Resistência a água e poeira não é uma promessa de proteção permanente.",buyingTip:"Leia as condições de garantia para líquidos, quedas e reparos."}
    ],
    compare:[{id:"moto-g86-5g",reason:"O G86 pode ser mais racional quando o ganho fotográfico não for essencial."},{id:"galaxy-s25-fe",reason:"Compare câmera, software, suporte e preço antes de escolher um premium."}],
  },
  "galaxy-s25-fe": {
    verdict:"Alternativa premium Samsung para quem quer recursos avançados e ecossistema Galaxy. A decisão deve levar em conta o preço da geração FE frente aos Galaxy S mais recentes e aos intermediários superiores.",
    idealFor:["Quem usa recursos Galaxy e quer subir de categoria.","Quem procura um aparelho para fotos, trabalho e multimídia.","Quem valoriza integração e suporte de software da Samsung."],
    notFor:["Quem quer economizar ao máximo.","Quem usa só aplicativos básicos e não aproveita recursos premium.","Quem compra por marca sem comparar o preço com gerações mais novas."],
    topics:[
      {title:"Tela para multimídia",takeaway:"Um premium precisa entregar experiência consistente em ambientes variados.",detail:"Avalie brilho, fluidez, sensibilidade e conforto de visualização em vídeo. Também compare tamanho, peso e legibilidade sob sol, pois a experiência depende do conjunto e não de um único número.",buyingTip:"Compare as versões exatas dos Galaxy S e FE disponíveis no mercado."},
      {title:"Potência e produtividade",takeaway:"A fluidez real depende do software e do controle térmico.",detail:"Transições rápidas e potência inicial são apenas parte da história. Examine multitarefa, gravação de vídeos, aquecimento e autonomia durante tarefas intensas; RAM física e armazenamento influenciam a longevidade.",buyingTip:"Consulte avaliações independentes do mesmo modelo e variante."},
      {title:"Câmeras e vídeo",takeaway:"A qualidade deve ser testada em vários cenários.",detail:"Compare principal, ultra-wide e recursos de zoom disponíveis, mas priorize fotos reais de pessoas, pouca luz e vídeos em movimento. Processamento de cores e estabilização importam tanto quanto resolução.",buyingTip:"Compare lado a lado com Edge 60 Pro e Galaxy S superiores."},
      {title:"Bateria e carregamento",takeaway:"Tamanho de bateria não explica tudo sozinho.",detail:"Processador, tela, 5G e configuração do sistema alteram o consumo. A experiência deve ser comparada em horas de uso real, não apenas pela capacidade; carregadores e potência podem variar por pacote.",buyingTip:"Confirme carregador e condições de recarga no anúncio."},
      {title:"Recursos, atualizações e garantia",takeaway:"Software e longevidade podem justificar uma compra premium.",detail:"Confira quais funcionalidades estão incluídas na versão local e qual é a política de atualização publicada pela Samsung. Preço de manutenção, proteção e assistência devem entrar na decisão de custo total.",buyingTip:"Compare tempo de suporte remanescente, garantia e preço com modelos novos."}
    ],
    compare:[{id:"edge-60-pro",reason:"Alternativa premium para comparar câmeras, recarga e experiência de software."},{id:"galaxy-a36-5g",reason:"O A36 pode ser suficiente se recursos premium não forem necessários."}],
  }
};

function Card({title,children}: {title:string;children:ReactNode}) {
  return <section className="rounded-2xl bg-white p-6 shadow-sm"><h2 className="text-2xl font-bold text-[#0F3F4A]">{title}</h2>{children}</section>;
}

export function DetailedReview({ productId }: {productId:string}) {
  const content=REVIEWS[productId];
  if(!content) return null;
  return <div className="space-y-7">
    <Card title="Nossa avaliação: vale a pena?"><p className="mt-4 leading-7 text-slate-700">{content.verdict}</p></Card>
    <div className="grid gap-6 md:grid-cols-2">
      <Card title="Para quem recomendamos"><ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">{content.idealFor.map(t=><li key={t}>{t}</li>)}</ul></Card>
      <Card title="Para quem não recomendamos"><ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">{content.notFor.map(t=><li key={t}>{t}</li>)}</ul></Card>
    </div>
    <h2 className="pt-3 text-3xl font-extrabold text-[#0F3F4A]">Análise por categoria</h2>
    <div className="grid gap-6">
      {content.topics.map(t=><Card key={t.title} title={t.title}>
        <p className="mt-3 text-lg font-semibold text-[#0F3F4A]">{t.takeaway}</p>
        <p className="mt-3 leading-7 text-slate-700">{t.detail}</p>
        <p className="mt-4 rounded-lg bg-[#F1F7F6] p-4 text-sm leading-6 text-slate-800"><strong>Antes da compra:</strong> {t.buyingTip}</p>
      </Card>)}
    </div>
    <Card title="Compare antes de decidir">
      <ul className="mt-4 space-y-4">{content.compare.map(c=>{const other=getProduct(c.id);return <li key={c.id} className="border-b border-slate-100 pb-3"><strong>{other?.name ?? c.id}</strong><p className="mt-1 text-slate-700">{c.reason}</p></li>})}</ul>
    </Card>
    <p className="text-xs text-slate-600">Esta é uma análise editorial baseada em informações públicas e critérios de compra, não em teste prático realizado pela equipe. As condições comerciais, ficha e variantes devem ser verificadas na fonte oficial e no anúncio.</p>
  </div>;
}
