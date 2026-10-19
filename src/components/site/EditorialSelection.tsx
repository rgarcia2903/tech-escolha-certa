import { getSelection, PRICE_UNCONFIRMED_NOTICE, type Selection } from "@/lib/editorial-policy";
import { getProduct } from "@/lib/product-catalog";
import { VisualProductCard } from "./VisualProductCard";

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
      <div className="mt-6 grid items-start gap-5 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <VisualProductCard
            key={product.id}
            id={`modelo-${product.id}`}
            product={product}
            pageType={pageType}
            placement="editorial_selection"
          />
        ))}
      </div>
    </section>
  );
}
