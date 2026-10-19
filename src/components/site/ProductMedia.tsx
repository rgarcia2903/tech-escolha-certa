import { useEffect, useRef, useState, type ImgHTMLAttributes } from "react";
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

// Imagens de catálogo selecionadas apenas na branch de revisão visual.
// Não promover esta branch sem verificar as condições de publicação das imagens.
const CATALOG_PREVIEW = {
  "moto-g56-5g": {
    src: "/images/products/catalogo/moto-g56-5g.webp",
    alt: "Moto G56 5G Black Oyster — frente e traseira",
    author: "Motorola",
    sourceUrl: "https://motorolanews.com/pressbox/moto-g-family/moto-g56-5g/",
    licenseUrl: "https://www.motorola.com/us/en/legal/terms-of-use",
    licenseLabel: "Fonte do fabricante",
    changes: "Imagem de catálogo redimensionada; demonstração na branch de revisão.",
    kind: "official-render" as const,
    width: 1440, height: 1440,
  },
  "moto-g86-5g": {
    src: "/images/products/catalogo/moto-g86-5g.webp",
    alt: "Moto G86 5G Spellbound — frente e traseira",
    author: "Motorola",
    sourceUrl: "https://motorolanews.com/pressbox/moto-g-family/moto-g86-5g/",
    licenseUrl: "https://www.motorola.com/us/en/legal/terms-of-use",
    licenseLabel: "Fonte do fabricante",
    changes: "Modelo Moto G86 5G comum (não Power); demonstração na branch de revisão.",
    kind: "official-render" as const,
    width: 1440, height: 1440,
  },
  "galaxy-s25-fe": {
    src: "/images/products/catalogo/galaxy-s25-fe.webp",
    alt: "Galaxy S25 FE Jetblack — frente e traseira",
    author: "Samsung",
    sourceUrl: "https://www.samsung.com/br/smartphones/galaxy-s/galaxy-s25-fe-jetblack-256gb-sm-s731bzkkzto/",
    licenseUrl: "https://www.samsung.com/br/info/legal/",
    licenseLabel: "Fonte do fabricante",
    changes: "Imagem de catálogo redimensionada; demonstração na branch de revisão.",
    kind: "official-render" as const,
    width: 1440, height: 1152,
  },
} as const;

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
  const photo = product ? (getApprovedPhoto(product.id) ?? CATALOG_PREVIEW[product.id as keyof typeof CATALOG_PREVIEW]) : undefined;
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
  return (
    <div
      data-product-media={product?.id ?? "unidentified"}
      data-photo-status={available ? (photo?.kind === "official-render" ? "catalog-preview" : "approved") : photo ? "failed" : "pending"}
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
          <figcaption className="product-photo-credit">
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
