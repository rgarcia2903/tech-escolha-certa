import { Link } from "@tanstack/react-router";
import { getProduct } from "@/lib/product-catalog";

/**
 * Transparência em uma linha: o método fica disponível sem competir com o veredito
 * e o botão de compra. O texto completo abre ao clicar.
 */
export function ReviewContext({ productId }: { productId: string }) {
  const product = getProduct(productId);
  if (!product) return null;
  return (
    <aside className="container-tec my-4" aria-label="Contexto editorial da análise">
      <details className="group rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs leading-5 text-slate-600">
        <summary className="cursor-pointer list-none font-semibold text-[#0F3F4A]">
          Análise documental · revisada em outubro de 2026 ·{" "}
          <span className="underline group-open:no-underline">como avaliamos</span>
        </summary>
        <p className="mt-2">
          Esta página analisa o {product.name} com base em ficha técnica, fontes públicas e
          comparação com alternativas. Não fizemos teste de laboratório próprio; as observações são
          avaliações editoriais.
        </p>
        <p className="mt-2">
          {product.caution} Preço e estoque mudam com frequência: confira o valor final e a versão
          (memória e 4G/5G) na loja antes de comprar.
        </p>
        <Link to="/como-avaliamos" className="mt-2 inline-block font-semibold underline">
          Ver o método completo
        </Link>
      </details>
    </aside>
  );
}
