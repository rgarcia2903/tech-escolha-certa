import { ArrowUpRight } from "lucide-react";
import { ACCESSORIES, accessorySearchUrl } from "@/lib/accessory-links";
import { trackAffiliateClick } from "@/lib/analytics";
import { getProduct } from "@/lib/product-catalog";

/** Atalhos para acessórios do modelo na Amazon. Só aparece para produtos do catálogo. */
export function AccessoryLinks({ productId, pageType }: { productId: string; pageType: string }) {
  const product = getProduct(productId);
  if (!product) return null;
  return (
    <div className="mt-6 rounded-2xl bg-[#FFF8EF] p-5 ring-1 ring-[#F2C38B]/60">
      <p className="text-sm font-bold text-[#0F3F4A]">Vai comprar? Já garanta a proteção do {product.name}</p>
      <p className="mt-1 text-xs text-slate-600">
        Busca na Amazon pelo nome exato do modelo. Confira a compatibilidade no anúncio.
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {ACCESSORIES.map((a) => {
          const href = accessorySearchUrl(a.id, product.name);
          return (
            <a
              key={a.id}
              href={href}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              onClick={() =>
                trackAffiliateClick({
                  productName: product.name,
                  pageType,
                  destination: "amazon",
                  productId: product.id,
                  offerId: "acessorio_" + a.id,
                  href,
                  ctaPlacement: "acessorios",
                })
              }
              className="inline-flex items-center gap-1 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0F3F4A] ring-1 ring-slate-300 hover:ring-[#0F3F4A]"
            >
              {a.label} <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          );
        })}
      </div>
    </div>
  );
}
