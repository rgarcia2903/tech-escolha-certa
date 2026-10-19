import type { ImgHTMLAttributes } from "react";
import { Smartphone } from "lucide-react";
import { getProduct, getProductByName } from "@/lib/product-catalog";
import { getApprovedPhoto, productForImage } from "@/lib/product-media";
import { cn } from "@/lib/utils";

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  productId?: string;
  name?: string;
  src?: string;
  compact?: boolean;
};

/** Never renders an unapproved or mismatched photograph. No stock phone lookalikes. */
export function ProductMedia({
  productId,
  name,
  src,
  alt,
  className,
  loading = "lazy",
  compact = false,
  ...props
}: Props) {
  void alt; // Approved captions describe the actual file, never a caller's marketing text.
  const product = productId
    ? getProduct(productId)
    : name
      ? getProductByName(name)
      : productForImage(src);
  const photo = product ? getApprovedPhoto(product.id) : undefined;
  const label = product?.name ?? name ?? "Celulares para comparar";
  const decorative = props["aria-hidden"] === true || props["aria-hidden"] === "true";
  return (
    <div
      data-product-media={product?.id ?? "unidentified"}
      data-photo-status={photo ? "approved" : "pending"}
      aria-hidden={decorative || undefined}
      className={cn("product-media", compact && "product-media-compact", className)}
    >
      {photo ? (
        <figure className="flex h-full w-full flex-col">
          <img
            src={photo.src}
            alt={decorative ? "" : photo.alt}
            width={photo.width}
            height={photo.height}
            loading={loading}
            decoding="async"
            fetchPriority={loading === "eager" ? "high" : "auto"}
            className="min-h-0 flex-1 object-contain p-4"
          />
          <figcaption className="break-all p-2 text-[10px] text-slate-600">
            {photo.author} · {photo.licenseUrl} · {photo.sourceUrl} · {photo.changes}
          </figcaption>
        </figure>
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-5 text-center">
          <span className="rounded-2xl border border-[#0F3F4A]/15 bg-white/75 p-3 text-[#0F3F4A]">
            <Smartphone className={compact ? "h-7 w-7" : "h-10 w-10"} aria-hidden="true" />
          </span>
          {!compact && <span className="max-w-60 text-sm font-bold text-[#0F3F4A]">{label}</span>}
          <span className="text-[11px] leading-4 text-slate-600">Foto indisponível</span>
        </div>
      )}
    </div>
  );
}
