import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductGallery } from "@/components/site/ProductGallery";
import { DetailedReview } from "@/components/site/DetailedReview";
import { ProductPurchaseOptions } from "@/components/site/ProductPurchaseOptions";
import { getProduct } from "@/lib/product-catalog";

const product = getProduct("galaxy-a17-5g")!;
const title = "Galaxy A17 5G vale a pena? Análise para comprar em 2026";
const description = "Veja o perfil de uso, vantagens, limitações e opções de compra do Galaxy A17 5G. Compare o modelo e confira a configuração nas lojas.";

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
            <p className="mt-4 text-slate-700">{product.summary}</p>
            <div className="mt-5 rounded-xl bg-amber-50 p-4 text-sm text-amber-950">
              <strong>Antes de comprar:</strong> {product.caution}
            </div>
            <h3 className="mt-6 font-bold">Onde comprar</h3>
            <ProductPurchaseOptions productId={product.id} pageType="review" placement="hero" className="mt-3"/>
            <p className="mt-3 text-xs text-slate-600">Confira RAM, armazenamento, vendedor, garantia e preço final no anúncio. Não há teste prático próprio declarado.</p>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-14 sm:px-8 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6">
          <h2 className="text-2xl font-bold text-[#0F3F4A]">Pontos positivos</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-slate-700">
            <li>Conectividade 5G para planos e redes compatíveis.</li>
            <li>Proposta voltada a tarefas cotidianas, mensagens e navegação.</li>
            <li>Opções de compra cadastradas na Amazon e no Mercado Livre.</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-white p-6">
          <h2 className="text-2xl font-bold text-[#0F3F4A]">Pontos de atenção</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-slate-700">
            <li>Confirmar memória RAM e armazenamento da unidade anunciada.</li>
            <li>Comparar preço e suporte com modelos Galaxy de faixa superior.</li>
            <li>Não tomar o nome comercial como garantia de uma variante específica.</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-white p-6 md:col-span-2">
          <h2 className="text-2xl font-bold text-[#0F3F4A]">Ficha e critérios de compra</h2>
          <dl className="mt-5 grid gap-4 sm:grid-cols-2">
            <div><dt className="font-semibold">Modelo</dt><dd>{product.name}</dd></div>
            <div><dt className="font-semibold">Conectividade</dt><dd>5G</dd></div>
            <div><dt className="font-semibold">RAM e armazenamento</dt><dd>Verificar no anúncio escolhido.</dd></div>
            <div><dt className="font-semibold">Preço e disponibilidade</dt><dd>Consultar diretamente na loja.</dd></div>
          </dl>
          {product.officialUrl && <p className="mt-6 text-sm"><a className="underline" target="_blank" rel="noopener noreferrer" href={product.officialUrl}>Conferir especificações no fabricante</a></p>}
        </div>
        <DetailedReview productId={product.id}/>
      </section>
    </main>
  );
}
