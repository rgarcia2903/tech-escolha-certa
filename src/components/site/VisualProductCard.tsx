import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { getOffers, type Product } from "@/lib/product-catalog";
import { PRODUCT_VISUAL_FACTS } from "@/lib/product-media";
import { ProductMedia } from "./ProductMedia";
import { ProductPurchaseOptions } from "./ProductPurchaseOptions";

export function VisualProductCard({
  product,
  pageType,
  placement,
  id,
  children,
  showReviewLink = true,
}: {
  product: Product;
  pageType: string;
  placement: string;
  id?: string;
  children?: ReactNode;
  showReviewLink?: boolean;
}) {
  const visual = PRODUCT_VISUAL_FACTS[product.id];
  const status =
    product.editorialStatus === "evaluate"
      ? "Em avaliação editorial"
      : product.editorialStatus === "previous_generation"
        ? "Alternativa de geração anterior"
        : "Compare nas lojas";
  return (
    <article
      id={id}
      data-visual-product={product.id}
      className="visual-product-card scroll-mt-32 overflow-hidden rounded-2xl border border-slate-200 bg-white"
    >
      <header className="product-card-heading">
        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
          {product.brand} · {status}
        </p>
        <h3 className="mt-1 text-xl font-bold tracking-tight text-slate-950">{product.name}</h3>
        {product.editorialStatus !== "evaluate" &&
          new Set(getOffers(product.id).map((offer) => offer.store)).size === 2 && (
            <p className="mt-1 text-xs text-slate-600">Amazon e Mercado Livre</p>
          )}
      </header>
      <ProductMedia productId={product.id} className="w-full" />
      <div className="flex min-w-0 flex-1 flex-col p-5 md:p-6">
        <div className="mt-3 flex flex-wrap gap-2 text-xs text-[#0F3F4A]">
          <span className="rounded-full bg-[#EEF4F2] px-3 py-1">
            {visual?.profile ?? product.brand}
          </span>
          <span className="rounded-full border border-slate-200 px-3 py-1">
            {product.connectivity === "unconfirmed"
              ? "Conectividade a conferir"
              : product.connectivity}
          </span>
        </div>
        {visual && (
          <ul className="mt-4 grid gap-2 text-xs text-slate-700">
            {visual.facts.slice(0, 2).map((fact) => (
              <li key={fact} className="border-l-2 border-[#8B5A2B]/40 pl-3">
                {fact}
              </li>
            ))}
          </ul>
        )}
        {product.editorialStatus !== "evaluate" ? (
          <ProductPurchaseOptions
            compact
            productId={product.id}
            pageType={pageType}
            placement={placement}
            className="mt-5"
          />
        ) : (
          product.officialUrl && (
            <a
              href={product.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-11 items-center text-sm underline"
            >
              Consultar fonte oficial
            </a>
          )
        )}
        <details className="mt-4 rounded-xl bg-[#F7F2EB] p-3 text-xs leading-5 text-slate-700">
          <summary className="cursor-pointer font-semibold">Resumo e ponto de atenção</summary>
          <p>{product.summary}</p>
          <p>
            <strong>Atenção: </strong>
            {product.caution}
          </p>
        </details>
        {showReviewLink && product.reviewPath && (
          <Link
            to={product.reviewPath}
            className="mt-3 inline-flex min-h-11 items-center text-sm font-bold text-[#0F3F4A] underline"
          >
            Ler análise de {product.name}
          </Link>
        )}
        {children}
      </div>
    </article>
  );
}
