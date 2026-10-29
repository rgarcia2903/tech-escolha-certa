import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductGallery } from "@/components/site/ProductGallery";
import { ProductPurchaseOptions } from "@/components/site/ProductPurchaseOptions";
import { getProduct } from "@/lib/product-catalog";

const product = getProduct("galaxy-a36-5g")!;
const title = "Galaxy A36 5G vale a pena em 2026? Review, ficha e onde comprar";
const description = "Review Galaxy A36 5G: tela Super AMOLED 120 Hz, Snapdragon 6 Gen 3, câmeras, bateria de 5.000 mAh, 45 W, vantagens e limitações.";
export const Route = createFileRoute("/review/galaxy-a36-5g")({
  head: () => ({ meta: [
    { title }, { name: "description", content: description },
    { property: "og:title", content: title }, { property: "og:description", content: description },
  ] }),
  component: GalaxyA36Review,
});

const specs: [string,string][] = [
  ["Tela","Super AMOLED, 6,7”, FHD+ (1080 × 2340), até 120 Hz"],
  ["Processador","Qualcomm Snapdragon 6 Gen 3, 4 nm"],
  ["RAM e armazenamento","6 GB + 128 GB ou 8 GB + 256 GB, segundo lançamento brasileiro; oferta pode variar"],
  ["Câmera principal","50 MP, estabilização óptica (OIS)"],
  ["Outras câmeras","8 MP ultra-wide + 5 MP macro"],
  ["Câmera frontal","12 MP"],
  ["Vídeo","Até 4K a 30 fps nas câmeras principal e frontal"],
  ["Bateria","5.000 mAh"],
  ["Carregamento","Até 45 W por cabo; carregador compatível vendido separadamente"],
  ["Resistência","IP67; vidro Gorilla Glass Victus+"],
  ["Sistema no lançamento","Android 15 e One UI 7"],
  ["Atualizações prometidas","Até 6 gerações do Android e 6 anos de patches de segurança"],
  ["Dimensões e peso","162,9 × 78,2 × 7,4 mm; aproximadamente 195 g"],
];

const details: [string,string,string][] = [
  ["Tela: ponto forte para vídeos e redes sociais",
   "O painel Super AMOLED de 6,7 polegadas combina resolução FHD+ com 120 Hz. Em medições independentes, a GSMArena registrou 1.233 nits no modo automático, uma referência útil para leitura em ambientes iluminados. Isso não equivale ao pico de brilho anunciado para áreas pequenas da tela.",
   "Quem lê, assiste a vídeos e usa aplicativos de redes sociais tende a aproveitar mais essa característica do que quem usa apenas chamadas."],
  ["Desempenho: intermediário, sem prometer potência de topo",
   "O Snapdragon 6 Gen 3 tem desempenho adequado para redes sociais, navegação, produtividade e jogos moderados. Nos testes da GSMArena, o avanço de desempenho sobre o Galaxy A35 foi pequeno. Portanto, não vale comprá-lo imaginando uma evolução enorme para jogos exigentes.",
   "A configuração brasileira anunciada inclui 6 GB/128 GB e 8 GB/256 GB. Para manter muitos aplicativos abertos, os 8 GB de RAM física trazem mais margem; não confunda RAM virtual com memória física."],
  ["Câmeras: principal com OIS e auxiliares mais simples",
   "A câmera principal tem 50 MP e estabilização óptica, útil para controlar pequenos movimentos. A ultra-wide de 8 MP ajuda em paisagens e grupos, enquanto a macro de 5 MP oferece fotografias de perto, com menos versatilidade. A câmera de selfies tem 12 MP. A presença de vários sensores não significa qualidade equivalente em todos eles.",
   "Compare amostras independentes de retratos, fotos noturnas e vídeos antes da compra. As imagens da galeria mostram o aparelho, não o resultado real das câmeras."],
  ["Bateria: suficiente, mas sem destaque extraordinário",
   "A bateria de 5.000 mAh obteve 11h38 no indicador de uso ativo do teste da GSMArena. É um resultado de laboratório externo, não uma promessa de duração diária. O consumo real muda com 5G, brilho, localização e aplicativos.",
   "O A36 suporta até 45 W, avanço relevante sobre o A35. A GSMArena mediu aproximadamente 1h14 para a recarga completa com carregador Samsung compatível; para atingir a potência máxima, é necessário cabo de 5 A."],
  ["Resistência e construção",
   "O Galaxy A36 tem certificação IP67, proteção Gorilla Glass Victus+ e cerca de 195 g. IP67 indica resistência em condições de teste, não impermeabilidade permanente ou garantia contra todos os danos causados por líquido.",
   "Considere também tamanho e peso: a tela de 6,7 polegadas oferece conforto visual, mas o aparelho pode ser grande para uso com uma mão."],
  ["Sistema, recursos e suporte",
   "O lançamento foi com Android 15 e One UI 7. A Samsung anunciou até seis gerações do Android e seis anos de atualizações de segurança, vantagem para quem pretende manter o celular. Há recursos como Circle to Search, mas os recursos de IA variam entre as linhas Galaxy.",
   "É uma boa razão para comparar com concorrentes da mesma faixa, sem presumir que ele ofereça todos os recursos de IA dos Galaxy S."],
];

function InfoSection({title,children}:{title:string;children:React.ReactNode}) {
  return <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8"><h2 className="text-2xl font-bold text-[#0F3F4A]">{title}</h2>{children}</section>;
}

function GalaxyA36Review() {
 return <main className="min-h-screen bg-[#F7F2EB] text-slate-900">
  <div className="mx-auto max-w-6xl space-y-7 px-5 py-10 sm:px-8">
   <nav className="text-sm text-slate-600" aria-label="Navegação"><Link to="/celulares" className="underline">Celulares</Link> / Galaxy A36 5G</nav>
   <header><p className="text-sm font-semibold uppercase tracking-wide text-[#8B5A2B]">Review editorial · 2026</p><h1 className="mt-2 text-3xl font-extrabold text-[#0F3F4A] sm:text-5xl">Galaxy A36 5G: vale a pena comprar?</h1><p className="mt-4 max-w-3xl leading-7 text-slate-700">{description}</p></header>
   <div className="grid gap-7 lg:grid-cols-2">
    <ProductGallery productId={product.id} productName={product.name}/>
    <div className="rounded-2xl bg-white p-6 shadow-sm">
     <h2 className="text-2xl font-bold text-[#0F3F4A]">Resumo para decidir</h2>
     <p className="mt-4 leading-7 text-slate-700">O Galaxy A36 5G combina uma boa tela AMOLED de 120 Hz, resistência IP67, câmera principal estabilizada e suporte longo de software. É uma escolha equilibrada para uso cotidiano, mas seu Snapdragon 6 Gen 3 não representa um salto expressivo sobre o Galaxy A35. A decisão depende do preço e da memória da versão anunciada.</p>
     <div className="mt-5 rounded-xl bg-amber-50 p-4 text-sm text-amber-950"><strong>Atenção:</strong> confira RAM física, armazenamento, origem, nota fiscal e garantia. O valor e o estoque não são consultados automaticamente pelo site.</div>
     <h3 className="mt-6 font-bold">Onde comprar</h3>
     <ProductPurchaseOptions productId={product.id} pageType="review" placement="hero" className="mt-3"/>
     <p className="mt-3 text-xs text-slate-600">Verifique o preço e a variante na Amazon ou no Mercado Livre antes de concluir a compra.</p>
    </div>
   </div>
   <div className="grid gap-6 md:grid-cols-2">
    <InfoSection title="Pontos positivos"><ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700"><li>Super AMOLED de 6,7” com 120 Hz.</li><li>Resistência IP67 e Gorilla Glass Victus+.</li><li>Câmera principal de 50 MP com OIS.</li><li>Carregamento de até 45 W.</li><li>Suporte de software anunciado por seis anos.</li></ul></InfoSection>
    <InfoSection title="Pontos de atenção"><ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700"><li>Desempenho evolui pouco sobre o A35.</li><li>Câmeras ultra-wide e macro menos versáteis.</li><li>Autonomia adequada, mas sem se destacar nos testes.</li><li>45 W exigem carregador e cabo compatíveis.</li><li>Não possui todos os recursos de IA dos modelos premium.</li></ul></InfoSection>
   </div>
   <h2 className="text-3xl font-extrabold text-[#0F3F4A]">Análise detalhada</h2>
   {details.map(([heading,text,tip])=><InfoSection key={heading} title={heading}><p className="mt-4 leading-7 text-slate-700">{text}</p><p className="mt-4 rounded-xl bg-[#F1F7F6] p-4 text-sm leading-6 text-slate-800"><strong>Para decidir:</strong> {tip}</p></InfoSection>)}
   <InfoSection title="Galaxy A36 5G ou Galaxy A57 5G?"><p className="mt-4 leading-7 text-slate-700">O A57 é mais rápido, mais fino, tem IP68 e ultrawide melhor; os dois recebem seis anos de atualizações. Se a diferença de preço for pequena, o A57 compensa. Se não, o A36 entrega a mesma experiência Samsung gastando menos.</p><p className="mt-4"><Link to="/comparativo/galaxy-a57-vs-galaxy-a36" className="font-semibold underline">Ver o comparativo Galaxy A57 vs Galaxy A36</Link></p></InfoSection>
   <InfoSection title="Galaxy A36 5G ou Galaxy A17 5G?"><p className="mt-4 leading-7 text-slate-700">O A17 5G atende melhor quem prioriza o menor custo e tarefas simples. O A36 reúne tela de 120 Hz, proteção IP67 e carregamento de 45 W, além de uma proposta intermediária mais completa. A diferença de preço entre versões equivalentes deve determinar se vale o investimento adicional.</p><p className="mt-4"><Link to="/review/galaxy-a17-5g" className="font-semibold underline">Ler review completo do Galaxy A17 5G</Link></p></InfoSection>
   <InfoSection title="Ficha técnica — Galaxy A36 5G"><dl className="mt-5 grid gap-4 sm:grid-cols-2">{specs.map(([label,value])=><div key={label} className="border-b border-slate-100 pb-3"><dt className="text-sm font-semibold text-slate-600">{label}</dt><dd className="mt-1 font-medium">{value}</dd></div>)}</dl><p className="mt-5 text-sm text-slate-600">Especificações de lançamento; disponibilidade das variantes depende do mercado e do vendedor.</p></InfoSection>
   <InfoSection title="Fontes e transparência"><p className="mt-4 leading-7 text-slate-700">Dados técnicos conferidos no lançamento oficial Samsung Brasil. Medições de tela, autonomia, recarga e impressões de desempenho são da GSMArena, não testes realizados pelo Tech Escolha Certa.</p><ul className="mt-4 list-disc space-y-2 pl-5 text-sm"><li><a href="https://news.samsung.com/br/o-seu-primeiro-smartphone-galaxy-com-ai-samsung-apresenta-galaxy-a56-a36-e-a26-com-evolucao-da-inteligencia-artificial" target="_blank" rel="noopener noreferrer" className="underline">Samsung Newsroom Brasil — A36 5G</a></li><li><a href="https://www.gsmarena.com/samsung_galaxy_a36-review-2814.php" target="_blank" rel="noopener noreferrer" className="underline">GSMArena — análise completa</a></li><li><a href="https://www.gsmarena.com/samsung_galaxy_a36-review-2814p3.php" target="_blank" rel="noopener noreferrer" className="underline">GSMArena — testes de tela e bateria</a></li></ul></InfoSection>
   <section className="rounded-2xl bg-[#0F3F4A] p-7 text-white"><h2 className="text-2xl font-bold">Decidiu pelo Galaxy A36 5G?</h2><p className="mt-3 text-sm">Confira as ofertas e confirme o modelo, memória, vendedor e garantia na loja.</p><ProductPurchaseOptions productId={product.id} pageType="review" placement="footer" tone="dark" className="mt-5"/></section>
  </div>
 </main>;
}
