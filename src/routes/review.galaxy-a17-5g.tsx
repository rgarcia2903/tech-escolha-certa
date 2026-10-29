import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductGallery } from "@/components/site/ProductGallery";
import { ProductPurchaseOptions } from "@/components/site/ProductPurchaseOptions";
import { getProduct } from "@/lib/product-catalog";

const product = getProduct("galaxy-a17-5g")!;
const title = "Galaxy A17 5G vale a pena? Análise para comprar em 2026";
const description = "Ficha técnica e avaliação do Galaxy A17 5G: tela AMOLED 90 Hz, Exynos 1330, câmeras, bateria de 5.000 mAh, prós e contras e onde comprar.";

export const Route = createFileRoute("/review/galaxy-a17-5g")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: GalaxyA17Review,
});

function GalaxyA17Review() {
  return (
    <main className="min-h-screen bg-[#F7F2EB] text-slate-900">
      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <nav className="mb-6 text-sm text-slate-600" aria-label="Navegação">
          <Link to="/celulares" className="underline">Celulares</Link> / Galaxy A17 5G
        </nav>
        <p className="text-sm font-semibold uppercase tracking-wide text-[#8B5A2B]">Análise editorial · 2026</p>
        <h1 className="mt-3 text-3xl font-extrabold text-[#0F3F4A] sm:text-5xl">Galaxy A17 5G: vale a pena comprar?</h1>
        <p className="mt-4 max-w-3xl text-slate-700">{description}</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <ProductGallery productId={product.id} productName={product.name}/>
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#0F3F4A]">Resumo para decidir</h2>
            <p className="mt-4 text-slate-700">O Galaxy A17 5G tem tela Super AMOLED de 6,7 polegadas e 90 Hz, câmera principal de 50 MP com estabilização óptica, bateria de 5.000 mAh e promessa de seis gerações de Android. É uma opção interessante para uso cotidiano, mas a versão com 4 GB de RAM merece cautela: análises independentes registraram lentidão em tarefas mais exigentes.</p>
            <div className="mt-5 rounded-xl bg-amber-50 p-4 text-sm text-amber-950">
              <strong>Antes de comprar:</strong> {product.caution}
            </div>
            <h3 className="mt-6 font-bold">Onde comprar</h3>
            <ProductPurchaseOptions productId={product.id} pageType="review" placement="hero" className="mt-3"/>
            <p className="mt-3 text-xs text-slate-600">Confira RAM, armazenamento, vendedor, garantia e preço final no anúncio. Não há teste prático próprio declarado.</p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl space-y-6 px-5 pb-14 sm:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Tela", "6,7” Super AMOLED · FHD+ · 90 Hz"],
            ["Processador", "Samsung Exynos 1330 (5 nm)"],
            ["Bateria", "5.000 mAh · carga de até 25 W"],
            ["Câmera traseira", "50 MP OIS + 5 MP ultra-wide + 2 MP macro"],
            ["Selfies", "13 MP"],
            ["Proteção", "IP54 · Gorilla Glass Victus"],
          ].map(([label,value]) => (
            <div key={label} className="rounded-xl bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{label}</p>
              <p className="mt-2 text-lg font-bold text-[#0F3F4A]">{value}</p>
            </div>
          ))}
        </div>
        <article className="rounded-2xl bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-bold text-[#0F3F4A]">Vale a pena comprar o Galaxy A17 5G?</h2>
          <p className="mt-4 leading-7 text-slate-700">A principal vantagem é reunir uma tela AMOLED com boa resolução, câmera principal estabilizada e suporte de software prolongado em um Samsung de entrada. Para mensagens, navegação, estudos e vídeos, ele tem uma proposta coerente. O ponto mais delicado é o desempenho: a versão de 4 GB de RAM pode apresentar lentidão com várias tarefas abertas. Se houver pouca diferença de preço, a versão nacional com 8 GB de RAM e 256 GB de armazenamento merece preferência.</p>
          <p className="mt-3 leading-7 text-slate-700">Não é a melhor escolha para quem prioriza jogos exigentes ou resposta imediata em multitarefa pesada. O preço praticado hoje também precisa ser comparado ao Galaxy A36 5G; não usamos aqui o preço sugerido de lançamento como se fosse uma oferta atual.</p>
        </article>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl bg-white p-6">
            <h2 className="text-2xl font-bold text-[#0F3F4A]">Pontos positivos</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-slate-700">
              <li>Tela Super AMOLED de 6,7” com resolução FHD+ e rolagem de até 90 Hz.</li>
              <li>Câmera principal de 50 MP com estabilização óptica (OIS).</li>
              <li>Proteção IP54 contra poeira e respingos e Gorilla Glass Victus.</li>
              <li>Até seis atualizações de Android e seis anos de atualizações de segurança, conforme anúncio da Samsung.</li>
              <li>NFC para pagamento por aproximação na versão brasileira divulgada.</li>
            </ul>
          </article>
          <article className="rounded-2xl bg-white p-6">
            <h2 className="text-2xl font-bold text-[#0F3F4A]">Pontos negativos</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-slate-700">
              <li>Exynos 1330 não foi feito para alto desempenho em jogos.</li>
              <li>Versão com 4 GB de RAM oferece pouca margem para multitarefa mais pesada.</li>
              <li>Câmeras ultra-wide de 5 MP e macro de 2 MP são mais limitadas que a principal.</li>
              <li>Carregamento de 25 W; adaptador de tomada vendido separadamente pela Samsung.</li>
              <li>IP54 protege contra respingos, não contra mergulhos.</li>
            </ul>
          </article>
        </div>
        <article className="rounded-2xl bg-white p-7">
          <h2 className="text-2xl font-bold text-[#0F3F4A]">Tela: um dos melhores argumentos</h2>
          <p className="mt-4 leading-7 text-slate-700">A tela de 6,7 polegadas usa tecnologia Super AMOLED, resolução de 1080 × 2340 pixels e atualização máxima de 90 Hz. Isso beneficia leitura, séries e redes sociais, com contraste típico de painéis OLED e rolagem mais suave que 60 Hz. Não equivale, porém, à experiência de painéis premium com maior brilho ou controle de taxa de atualização. Testes independentes também apontam ausência de reprodução HDR avançada.</p>
        </article>
        <article className="rounded-2xl bg-white p-7">
          <h2 className="text-2xl font-bold text-[#0F3F4A]">Desempenho: 4 GB ou 8 GB de RAM?</h2>
          <p className="mt-4 leading-7 text-slate-700">O Exynos 1330, fabricado em 5 nm, é adequado a tarefas do dia a dia, mas não compete com chips voltados a jogos intensivos. A GSMArena testou uma unidade com 4 GB de RAM e relatou animações e navegação pouco fluidas. A versão de 8 GB físicos tende a oferecer mais folga para aplicativos simultâneos, embora isso não mude o processador. RAM Plus é expansão virtual e não deve ser confundida com RAM física.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-[#F3F7F8] p-4"><strong>128 GB + 4 GB</strong><p className="mt-2 text-sm text-slate-700">Faz mais sentido para uso leve e diferença de preço expressiva.</p></div>
            <div className="rounded-xl bg-[#F3F7F8] p-4"><strong>256 GB + 8 GB</strong><p className="mt-2 text-sm text-slate-700">Opção mais interessante para quem pretende manter o aparelho por vários anos.</p></div>
          </div>
        </article>
        <article className="rounded-2xl bg-white p-7">
          <h2 className="text-2xl font-bold text-[#0F3F4A]">Câmeras: onde ele entrega e onde limita</h2>
          <p className="mt-4 leading-7 text-slate-700">A câmera principal de 50 MP conta com OIS, recurso que ajuda a compensar pequenos movimentos, especialmente em ambientes de pouca luz. Há também ultra-wide de 5 MP para fotografar cenas amplas e macro de 2 MP para aproximações. A câmera frontal tem 13 MP. Na prática, espere maior versatilidade da lente principal; as auxiliares têm menor resolução e não devem ser tratadas como equivalentes. Não realizamos ensaio fotográfico próprio.</p>
          <p className="mt-3 leading-7 text-slate-700">Para vídeos e fotos noturnas, examine amostras independentes antes da compra: estabilização não elimina todos os problemas de foco, ruído ou movimento.</p>
        </article>
        <article className="rounded-2xl bg-white p-7">
          <h2 className="text-2xl font-bold text-[#0F3F4A]">Bateria e carregamento</h2>
          <p className="mt-4 leading-7 text-slate-700">São 5.000 mAh e carregamento de até 25 W. A autonomia varia com brilho, sinal de rede, vídeos e jogos. Em teste independente, a GSMArena registrou 11 horas e 48 minutos em sua métrica de uso ativo, abaixo da média apontada pela própria publicação para a categoria. Esse resultado é de laboratório externo, não uma garantia de horas de uso para cada comprador.</p>
          <p className="mt-3 leading-7 text-slate-700">A Samsung informa que o adaptador de 25 W é comercializado separadamente. Confira o conteúdo da caixa na oferta.</p>
        </article>
        <article className="rounded-2xl bg-white p-7">
          <h2 className="text-2xl font-bold text-[#0F3F4A]">Durabilidade, conectividade e atualizações</h2>
          <p className="mt-4 leading-7 text-slate-700">O modelo pesa 192 g, tem 7,5 mm de espessura, suporte a 5G e NFC na ficha brasileira. A classificação IP54 significa resistência limitada a poeira e respingos; não indica proteção para submersão. A Samsung anunciou até seis gerações de Android e seis anos de correções de segurança. Essa política é uma vantagem para longevidade, embora a capacidade do hardware permaneça importante ao longo dos anos.</p>
        </article>
        <article className="rounded-2xl bg-white p-7">
          <h2 className="text-2xl font-bold text-[#0F3F4A]">Galaxy A17 5G ou Galaxy A17 4G?</h2>
          <p className="mt-4 leading-7 text-slate-700">Tela, câmeras, bateria, proteção e atualizações são iguais. O 5G tem processador um pouco mais rápido (Exynos 1330 contra Helio G99) e conexão 5G. Se a diferença de preço for pequena, fique com o 5G.</p>
          <p className="mt-4"><Link to="/comparativo/galaxy-a17-4g-vs-galaxy-a17-5g" className="font-semibold underline">Ver o comparativo Galaxy A17 4G vs 5G</Link> · <Link to="/melhor-celular-ate-1000" className="font-semibold underline">Melhores celulares até R$ 1.000</Link></p>
        </article>
        <article className="rounded-2xl bg-white p-7">
          <h2 className="text-2xl font-bold text-[#0F3F4A]">Galaxy A17 5G ou Galaxy A36 5G?</h2>
          <p className="mt-4 leading-7 text-slate-700">O A17 5G prioriza tarefas essenciais e custo de entrada. O A36 5G entra na comparação quando você exige mais fluidez e um conjunto intermediário. Não recomendamos escolher automaticamente o mais caro: compare a mesma capacidade de armazenamento, os recursos de cada versão e o preço final. Se o salto de preço for pequeno, o A36 merece atenção; se o A17 estiver substancialmente mais barato e o uso for básico, ele pode ser suficiente.</p>
        </article>
        <article className="rounded-2xl bg-white p-7">
          <h2 className="text-2xl font-bold text-[#0F3F4A]">Ficha técnica — Galaxy A17 5G no Brasil</h2>
          <dl className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              ["Tela", "Super AMOLED, 6,7”, 1080 × 2340, até 90 Hz"],
              ["Chip", "Samsung Exynos 1330, 5 nm"],
              ["Memória", "4 GB / 128 GB ou 8 GB / 256 GB (versões divulgadas no lançamento nacional)"],
              ["Expansão", "MicroSD de até 2 TB, vendido separadamente"],
              ["Câmeras traseiras", "50 MP com OIS + 5 MP ultra-wide + 2 MP macro"],
              ["Câmera frontal", "13 MP"],
              ["Bateria", "5.000 mAh; carregamento de até 25 W"],
              ["Conectividade", "5G, NFC"],
              ["Sistema no lançamento", "Android 15 / One UI 7"],
              ["Suporte anunciado", "6 versões de Android e 6 anos de atualizações de segurança"],
              ["Proteção", "IP54; Gorilla Glass Victus"],
              ["Dimensões / peso", "164,4 × 77,9 × 7,5 mm; 192 g"],
            ].map(([label,value])=><div key={label} className="border-b border-slate-100 pb-3"><dt className="text-sm font-semibold text-slate-600">{label}</dt><dd className="mt-1 font-medium text-slate-900">{value}</dd></div>)}
          </dl>
          <p className="mt-5 text-sm text-slate-600">Os anúncios de lojas podem ter outras variantes de memória ou origem. Confira a configuração e garantia da unidade antes de pagar.</p>
        </article>
        <article className="rounded-2xl bg-white p-7">
          <h2 className="text-2xl font-bold text-[#0F3F4A]">Fontes e transparência</h2>
          <p className="mt-3 text-slate-700">Especificações conferidas nas páginas oficiais da Samsung Brasil. A avaliação de fluidez e o dado de autonomia são atribuídos à GSMArena, que realizou os testes; o Tech Escolha Certa não afirma ter testado o produto.</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
            <li><a target="_blank" rel="noopener noreferrer" className="underline" href="https://www.samsung.com/br/smartphones/galaxy-a/galaxy-a17-5g-gray-128gb-sm-a176bzaozto/">Ficha oficial Samsung Brasil</a></li>
            <li><a target="_blank" rel="noopener noreferrer" className="underline" href="https://news.samsung.com/br/feitos-para-durar-samsung-apresenta-galaxy-a17-e-galaxy-a07-no-brasil-com-armazenamento-robusto-recursos-ai-processador-de-alto-desempenho-e-ate-6-anos-de-atualizacoes">Lançamento e variantes no Brasil — Samsung Newsroom</a></li>
            <li><a target="_blank" rel="noopener noreferrer" className="underline" href="https://www.gsmarena.com/samsung_galaxy_a17_5g-review-2869p4.php">Análise independente do desempenho — GSMArena</a></li>
            <li><a target="_blank" rel="noopener noreferrer" className="underline" href="https://www.gsmarena.com/samsung_galaxy_a17_5g-review-2869p3.php">Teste independente de bateria — GSMArena</a></li>
          </ul>
        </article>
        <div className="rounded-2xl bg-[#0F3F4A] p-7 text-white">
          <h2 className="text-2xl font-bold">Escolheu o Galaxy A17 5G?</h2>
          <p className="mt-3 text-sm leading-6">Compare as ofertas cadastradas e confira preço, RAM física, armazenamento, vendedor e garantia no anúncio.</p>
          <ProductPurchaseOptions productId={product.id} pageType="review" placement="footer" className="mt-5"/>
        </div>
      </section>
    </main>
  );
}
