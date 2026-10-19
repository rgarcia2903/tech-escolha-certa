import { getProduct } from "@/lib/product-catalog";
import { COMPARISON_PRODUCTS } from "@/lib/product-media";
import { ProductMedia } from "./ProductMedia";

export function ComparisonVisual({ path }: { path: string }) {
  const pair = COMPARISON_PRODUCTS[path];
  if (!pair) return null;
  return (
    <div
      className="comparison-visual grid grid-cols-2 gap-2 rounded-2xl bg-[#EEF4F2] p-3"
      aria-label="Modelos deste comparativo"
    >
      {pair.map((id) => (
        <div key={id} className="min-w-0">
          <ProductMedia productId={id} compact className="aspect-square w-full rounded-xl" />
          <p className="mt-2 text-center text-xs font-bold text-[#0F3F4A]">
            {getProduct(id)!.name}
          </p>
        </div>
      ))}
    </div>
  );
}
