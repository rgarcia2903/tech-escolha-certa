import { STORE_LABELS, type Store } from "@/lib/product-catalog";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

type AffiliateRedirectNoticeProps = {
  className?: string;
  store?: Store;
  tone?: "light" | "dark";
};

export function AffiliateRedirectNotice({
  className,
  store = "mercado_livre",
  tone = "light",
}: AffiliateRedirectNoticeProps) {
  return (
    <p
      className={cn(
        "flex items-start gap-2 text-xs leading-5",
        tone === "dark" ? "text-slate-300" : "text-muted-foreground",
        className,
      )}
    >
      <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
      <span>
        Abre {store === "amazon" ? "na" : "no"} {STORE_LABELS[store]} e pode passar por uma página
        intermediária antes do anúncio. Confira modelo, versão e condição na loja. O link é
        afiliado, sem custo adicional para você.
      </span>
    </p>
  );
}
