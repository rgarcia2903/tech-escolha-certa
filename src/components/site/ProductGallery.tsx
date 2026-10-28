import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, Smartphone, X } from "lucide-react";
import { getApprovedPhoto } from "@/lib/product-media";
import { PILOT_GALLERIES } from "@/lib/pilot-galleries";

export type GalleryImage = {
  src: string;
  alt: string;
  credit?: string;
};

export function ProductGallery({
  productId,
  productName,
  images = [],
}: {
  productId: string;
  productName: string;
  images?: GalleryImage[];
}) {
  const approved = getApprovedPhoto(productId);
  const initial: GalleryImage[] = approved
    ? [{ src: approved.src, alt: approved.alt, credit: approved.author }]
    : [];
  const pilot: GalleryImage[] = PILOT_GALLERIES[productId] ?? [];
  const all: GalleryImage[] = [...pilot, ...initial, ...images].filter(
    (item, index, array) => array.findIndex((other) => other.src === item.src) === index,
  );
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const current = all[Math.min(index, Math.max(0, all.length - 1))];
  const change = (step: number) => setIndex((previous) => (previous + step + all.length) % all.length);

  useEffect(() => {
    if (!expanded) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setExpanded(false);
      if (event.key === "ArrowLeft" && all.length > 1) change(-1);
      if (event.key === "ArrowRight" && all.length > 1) change(1);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [expanded, all.length]);

  if (!current) {
    return (
      <section
        aria-label={`Galeria de ${productName}`}
        className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-white px-5 py-8 text-center"
      >
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#0F3F4A]/5 text-[#0F3F4A]">
          <Smartphone className="h-8 w-8" aria-hidden="true" />
        </span>
        <span className="text-base font-bold text-[#0F3F4A]">{productName}</span>
        <span className="max-w-64 text-xs leading-5 text-slate-600">
          Veja as fotos oficiais e as cores disponíveis no anúncio da loja.
        </span>
      </section>
    );
  }

  const photo = (full = false) => (
    <img
      src={current.src}
      alt={current.alt}
      className={full ? "max-h-[82vh] w-full object-contain" : "h-full w-full object-contain"}
      loading={full ? "eager" : "lazy"}
    />
  );

  return (
    <section aria-label={`Galeria de fotos de ${productName}`} className="rounded-2xl bg-white p-3 text-slate-950 sm:p-4">
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-[#F4F7F8]">
        {photo()}
        <button
          type="button"
          aria-label="Ampliar foto"
          onClick={() => setExpanded(true)}
          className="absolute right-3 top-3 rounded-full bg-white/95 p-3 shadow"
        >
          <Expand size={20} />
        </button>
        {all.length > 1 && (
          <>
            <button type="button" aria-label="Foto anterior" onClick={() => change(-1)} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/95 p-3 shadow">
              <ChevronLeft size={20}/>
            </button>
            <button type="button" aria-label="Próxima foto" onClick={() => change(1)} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/95 p-3 shadow">
              <ChevronRight size={20}/>
            </button>
          </>
        )}
      </div>
      <div className="mt-3 flex flex-wrap gap-2" aria-label="Escolher fotografia">
        {all.map((item, i) => (
          <button key={item.src} type="button" onClick={() => setIndex(i)} aria-label={`Ver imagem ${i+1} de ${all.length}`} aria-pressed={i===index} className={`h-16 w-16 overflow-hidden rounded-lg border-2 bg-slate-50 p-1 ${i===index ? "border-[#0F3F4A]" : "border-slate-200"}`}>
            <img src={item.src} alt="" loading="lazy" className="h-full w-full object-contain"/>
          </button>
        ))}
      </div>
      <p className="mt-2 text-xs text-slate-600">{index + 1} de {all.length}{current.credit ? ` · Foto: ${current.credit}` : ""}</p>
      {expanded && (
        <div role="dialog" aria-modal="true" aria-label={`Foto ampliada de ${productName}`} className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 p-4">
          <button type="button" aria-label="Fechar ampliação" onClick={() => setExpanded(false)} className="absolute right-4 top-4 rounded-full bg-white p-3 text-slate-950"><X/></button>
          <div className="flex max-h-[85vh] w-full max-w-5xl items-center justify-center">{photo(true)}</div>
          {all.length > 1 && (
            <div className="mt-3 flex gap-5">
              <button type="button" onClick={() => change(-1)} aria-label="Foto anterior" className="rounded-full bg-white p-3 text-slate-950"><ChevronLeft/></button>
              <span className="self-center text-sm text-white">{index + 1} / {all.length}</span>
              <button type="button" onClick={() => change(1)} aria-label="Próxima foto" className="rounded-full bg-white p-3 text-slate-950"><ChevronRight/></button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
