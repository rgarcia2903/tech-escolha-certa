import { Link } from "@tanstack/react-router";
import { comparisonsForProduct } from "@/lib/comparisons";
import { guidesForProduct } from "@/lib/use-guides";

/** Links para os comparativos e guias que citam o produto. Some quando não há nenhum. */
export function RelatedComparisons({ productId, name }: { productId: string; name: string }) {
  const comparisons = comparisonsForProduct(productId);
  const guides = guidesForProduct(productId);
  if (comparisons.length === 0 && guides.length === 0) return null;
  return (
    <section aria-labelledby="compare-com" className="mx-auto max-w-5xl px-5 pb-12 sm:px-8">
      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 id="compare-com" className="text-xl font-extrabold text-[#0F3F4A]">
          Em dúvida entre o {name} e outro modelo?
        </h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {[...comparisons, ...guides].map((c) => (
            <li key={c.path}>
              <Link to={c.path} className="font-semibold text-[#0F3F4A] underline">
                {c.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
