import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ProductGallery } from "@/components/site/ProductGallery";
import { ProductPurchaseOptions } from "@/components/site/ProductPurchaseOptions";
import { getProduct } from "@/lib/product-catalog";

const PILOT_IDS = new Set(["galaxy-a36-5g","redmi-note-15-5g","moto-g56-5g","moto-g86-5g","edge-60-pro","galaxy-s25-fe"]);

function findPilot(productId: string) {
  return PILOT_IDS.has(productId) ? getProduct(productId) : undefined;
}

export const Route = createFileRoute("/review/$productId")({
  // Modelo inexistente responde 404 (antes respondia 200 e era indexado como soft 404).
  loader: ({ params }) => {
    if (!findPilot(params.productId)) throw notFound();
  },
  component: PilotReview,
  notFoundComponent: ReviewNotFound,
  head: ({ params }) => {
    const p = findPilot(params.productId);
    if (!p) return { meta: [{ title: "Review não encontrado | Tech Escolha Certa" }, { name: "robots", content: "noindex, follow" }] };
    return { meta: [
      { title: `${p.name}: análise completa e onde comprar | Tech Escolha Certa` },
      { name: "description", content: `Fotos, análise editorial e alternativas de compra do ${p.name}.` },
    ] };
  },
});

function ReviewNotFound() {
  return <main className="container-tec py-16"><h1 className="text-3xl font-bold">Review não disponível</h1><Link to="/celulares" className="mt-4 inline-block underline">Ver celulares</Link></main>;
}

function PilotReview() {
  const { productId } = Route.useParams();
  const product = findPilot(productId);
  if (!product) return <ReviewNotFound />;
  return (
    <main className="min-h-screen bg-[#F7F2EB] text-slate-900">
      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <nav aria-label="Navegação" className="mb-6 text-sm"><Link to="/celulares" className="underline">Celulares</Link> / {product.name}</nav>
        <p className="text-sm font-semibold uppercase text-[#8B5A2B]">Análise editorial · 2026</p>
        <h1 className="mt-2 text-3xl font-extrabold text-[#0F3F4A] sm:text-5xl">{product.name}: análise completa</h1>
        <p className="mt-4 max-w-3xl text-slate-700">Fotos do produto, orientações de compra e comparação de configurações.</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <ProductGallery productId={product.id} productName={product.name}/>
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#0F3F4A]">Vale a pena?</h2>
            <p className="mt-4 leading-7">{product.summary}</p>
            <p className="mt-5 rounded-xl bg-amber-50 p-4 text-sm"><strong>Observe:</strong> {product.caution}</p>
            <h3 className="mt-6 text-lg font-bold">Onde comprar</h3>
            {product.editorialStatus !== "evaluate" ? (
              <ProductPurchaseOptions productId={product.id} pageType="review" placement="hero" className="mt-3"/>
            ) : (
              <p className="mt-3 text-sm">A avaliação editorial deste modelo está pendente. Consulte o fabricante para especificações.</p>
            )}
            <p className="mt-4 text-xs text-slate-600">Antes de comprar, confira versão, armazenamento, vendedor, garantia e preço final. Avaliação documental, sem teste prático próprio.</p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl bg-white p-6"><h2 className="text-2xl font-bold text-[#0F3F4A]">Para quem faz sentido</h2><p className="mt-4 text-slate-700">{product.summary}</p></article>
          <article className="rounded-2xl bg-white p-6"><h2 className="text-2xl font-bold text-[#0F3F4A]">Pontos de atenção</h2><p className="mt-4 text-slate-700">{product.caution}</p></article>
          <article className="rounded-2xl bg-white p-6 md:col-span-2"><h2 className="text-2xl font-bold text-[#0F3F4A]">Ficha técnica e comparação</h2><dl className="mt-5 grid gap-4 sm:grid-cols-2"><div><dt className="font-bold">Modelo</dt><dd>{product.name}</dd></div><div><dt className="font-bold">Conectividade</dt><dd>{product.connectivity}</dd></div><div><dt className="font-bold">RAM / armazenamento</dt><dd>Confirme a variante no anúncio.</dd></div><div><dt className="font-bold">Preço e disponibilidade</dt><dd>Consulte as lojas.</dd></div></dl>{product.officialUrl && <a href={product.officialUrl} className="mt-6 inline-block underline" rel="noopener noreferrer" target="_blank">Especificações oficiais do fabricante</a>}</article>
        </div>
      </section>
    </main>
  );
}
