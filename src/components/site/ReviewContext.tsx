import { Link } from "@tanstack/react-router";
import { getProduct } from "@/lib/product-catalog";
export function ReviewContext({ productId }: { productId: string }) {
  const product = getProduct(productId);
  if (!product) return null;
  return (
    <aside className="container-tec my-6" aria-label="Contexto editorial da análise">
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
        <p>
          <strong>Análise documental · revisão de contexto em outubro de 2026.</strong> Esta página
          preserva a análise de {product.name}. Sem teste próprio documentado, observações são
          avaliações editoriais, não medições do site.
        </p>
        <p className="mt-2">
          {product.caution} As conclusões são editoriais, não avaliações de compradores ou
          resultados de laboratório. Não há preço ou estoque atual verificado.
        </p>
        <Link
          to="/melhores-celulares-custo-beneficio"
          className="mt-2 inline-block font-semibold underline"
        >
          Compare também os candidatos da seleção atual
        </Link>
      </div>
    </aside>
  );
}
