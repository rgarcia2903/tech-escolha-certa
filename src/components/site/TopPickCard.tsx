    import { Star } from "lucide-react";

type TopPickCardProps = {
  category: string;
  product: string;
  description?: string;
};

export function TopPickCard({
  category,
  product,
  description,
}: TopPickCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="inline-flex items-center gap-2 rounded-full bg-[#F7F2EB] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#B9774B] ring-1 ring-slate-200">
        <Star className="h-3.5 w-3.5" />
        Escolha recomendada
      </div>

      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#B9774B]">
        {category}
      </p>

      <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#0F3F4A]">
        {product}
      </h3>

      {description && (
        <p className="mt-4 text-sm leading-7 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}
