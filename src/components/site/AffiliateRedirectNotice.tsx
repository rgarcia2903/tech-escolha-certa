import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

type AffiliateRedirectNoticeProps = {
  className?: string;
  tone?: "light" | "dark";
};

export function AffiliateRedirectNotice({
  className,
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
        Abre no ambiente oficial do Mercado Livre e pode passar por uma página intermediária antes
        do anúncio. O link é afiliado, sem custo adicional para você.
      </span>
    </p>
  );
}
