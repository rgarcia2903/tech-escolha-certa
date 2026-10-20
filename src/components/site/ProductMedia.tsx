import { useEffect, useRef, useState, type ImgHTMLAttributes } from "react";
import { Smartphone } from "lucide-react";
import { getProduct, getProductByName } from "@/lib/product-catalog";
import { getApprovedPhoto, productForImage } from "@/lib/product-media";
import { cn } from "@/lib/utils";
import { PILOT_GALLERIES } from "@/lib/pilot-galleries";

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  productId?: string;
  name?: string;
  src?: string;
  compact?: boolean;
  usePilotGallery?: boolean;
};

/** Licensed media by default; supplied pilot covers require an explicit storefront opt-in. */
export function ProductMedia({
  productId,
  name,
  src,
  alt,
  className,
  loading = "lazy",
  compact = false,
  usePilotGallery = false,
  ...props
}: Props) {
  void alt; // Approved captions describe the actual file, never a caller's marketing text.
  const product = productId
    ? getProduct(productId)
    : name
      ? getProductByName(name)
      : productForImage(src);
  const photo = product ? getApprovedPhoto(product.id) : undefined;
  const [failedSrc, setFailedSrc] = useState<string>();
  const imageRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    // An SSR image can fail before React attaches its onError listener.
    const image = imageRef.current;
    if (photo && image?.complete && image.naturalWidth === 0) setFailedSrc(photo.src);
  }, [photo]);
  const available = photo && failedSrc !== photo.src;
  const label = product?.name ?? name ?? "Celulares para comparar";
  const decorative = props["aria-hidden"] === true || props["aria-hidden"] === "true";
  const pilot = usePilotGallery && product ? PILOT_GALLERIES[product.id]?.[0] : undefined;
  if (pilot) {
    return (
      <div
        data-product-media={product!.id}
        data-photo-status="pilot"
        aria-hidden={decorative || undefined}
        className={cn("product-media", compact && "product-media-compact", className)}
      >
        <figure className="product-photo relative">
          <div className="product-photo-stage">
            <img
              src={pilot.src}
              alt={decorative ? "" : `${product!.name} — vista principal`}
              loading={loading}
              decoding="async"
              fetchPriority={loading === "eager" ? "high" : "auto"}
              className="product-photo-image"
            />
          </div>
          
        </figure>
      </div>
    );
  }
  return (
    <div
      data-product-media={product?.id ?? "unidentified"}
      data-photo-status={available ? "approved" : photo ? "failed" : "pending"}
      aria-hidden={decorative || undefined}
      className={cn("product-media", compact && "product-media-compact", className)}
    >
      {available ? (
        <figure className="product-photo">
          <div className="product-photo-stage">
            <img
              ref={imageRef}
              src={photo.src}
              alt={decorative ? "" : photo.alt}
              width={photo.width}
              height={photo.height}
              loading={loading}
              decoding="async"
              onError={() => setFailedSrc(photo.src)}
              fetchPriority={loading === "eager" ? "high" : "auto"}
              className="product-photo-image"
            />
          </div>
          <details className="absolute bottom-2 right-2 z-10 max-w-[85%] text-xs"><summary aria-label="Créditos da imagem" className="ml-auto flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white/95 text-slate-600 shadow ring-1 ring-slate-200" title="Créditos da imagem">i</summary><figcaption className="rounded-lg bg-white p-3 text-slate-700 shadow-lg ring-1 ring-slate-200">
            {photo.kind === "official-render" ? "Imagem" : "Foto"}: {photo.author} ·{" "}
            <a
              href={photo.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Origem
            </a>{" "}
            ·{" "}
            <a
              href={photo.licenseUrl}
              target="_blank"
              rel="license noopener noreferrer"
              className="underline"
            >
              {photo.licenseLabel ?? "CC BY-SA 4.0"}
            </a>{" "}
            <details className="product-photo-license">
              <summary>Tratamento da imagem</summary>
              <p>{photo.changes}</p>
            </details>
          </figcaption></details>
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
