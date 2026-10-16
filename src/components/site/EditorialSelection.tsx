import { Link } from "@tanstack/react-router";
import { getSelection, PRICE_UNCONFIRMED_NOTICE, type Selection } from "@/lib/editorial-policy";
import { getProduct } from "@/lib/product-catalog";
import { ProductPurchaseOptions } from "./ProductPurchaseOptions";

type Props = {
  selection?: Selection;
  productIds?: readonly string[];
  pageType?: string;
  title?: string;
  id?: string;
};
export function EditorialSelection({
  selection = "general",
  productIds,
  pageType = "guia",
  title = "Modelos para comparar por perfil",
  id = "selecao-editorial",
}: Props) {
  const products = productIds
    ? productIds.map((value) => getProduct(value)!).filter(Boolean)
    : getSelection(selection);
  return (
    <section id={id} className="container-tec scroll-mt-32 py-10">
      <p className="text-xs font-semibold uppercase tracking-widest text-cta">
        Revisão editorial · outubro de 2026
      </p>
      <h2 className="mt-2 text-2xl font-bold md:text-3xl">{title}</h2>
      <p className="mt-3 max-w-4xl text-sm leading-6 text-muted-foreground">
        {PRICE_UNCONFIRMED_NOTICE}
      </p>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {products.map((product) => (
          <article
            key={product.id}
            id={`modelo-${product.id}`}
            className="scroll-mt-32 rounded-3xl border border-border bg-card p-6 shadow-soft"
          >
            <p className="text-xs font-semibold text-cta">
              {product.editorialStatus === "evaluate"
                ? "Em avaliação editorial"
                : product.editorialStatus === "previous_generation"
                  ? "Alternativa de geração anterior"
                  : "Candidato para comparar"}
            </p>
            <h3 className="mt-2 text-xl font-bold">{product.name}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{product.summary}</p>
            <p className="mt-3 rounded-xl bg-secondary p-3 text-xs leading-5">{product.caution}</p>
            {product.editorialStatus !== "evaluate" && (
              <ProductPurchaseOptions
                productId={product.id}
                pageType={pageType}
                placement="editorial_selection"
                className="mt-5"
              />
            )}
            {product.editorialStatus === "evaluate" && product.officialUrl && (
              <a
                className="mt-4 inline-block text-sm underline"
                href={product.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar fonte oficial
              </a>
            )}
            {product.reviewPath && (
              <Link
                to={product.reviewPath}
                className="mt-4 inline-block text-sm font-semibold text-[#0F3F4A] underline"
              >
                Ler análise de {product.name}
              </Link>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
