import { Link } from "@tanstack/react-router";
import { getProduct } from "@/lib/product-catalog";
import { ProductPurchaseOptions } from "./ProductPurchaseOptions";
export function ModelIdentityPage({
  productId,
  proPath,
  proName,
}: {
  productId: string;
  proPath: string;
  proName: string;
}) {
  const product = getProduct(productId)!;
  return (
    <main className="container-tec py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-cta">
        Identifique a versão antes de comprar
      </p>
      <h1 className="mt-3 text-4xl font-bold">{product.name}: versão sem Pro</h1>
      <p className="mt-6 max-w-3xl leading-7">
        Esta URL corresponde ao {product.name}. Ele é diferente do {proName}: ficha técnica,
        conectividade, desempenho e anúncio não devem ser tratados como equivalentes. A análise
        detalhada da versão sem Pro ainda não está disponível nesta página.
      </p>
      <p className="mt-4 max-w-3xl leading-7">
        {product.summary} {product.caution}
      </p>
      <ProductPurchaseOptions
        productId={productId}
        pageType="review"
        placement="model_identity"
        className="mt-6 max-w-3xl"
      />
      <div className="mt-8 flex flex-wrap gap-4">
        <Link to={proPath} className="font-semibold underline">
          Se você procura o {proName}, leia a análise dessa versão
        </Link>
        <Link to="/melhores-celulares-custo-beneficio" className="font-semibold underline">
          Comparar candidatos por perfil
        </Link>
      </div>
    </main>
  );
}
