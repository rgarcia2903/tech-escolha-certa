import { Link } from "@tanstack/react-router";
import { Info } from "lucide-react";

import { cn } from "@/lib/utils";

type ScoreMethodLinkProps = {
  tone?: "light" | "dark";
  className?: string;
};

export function ScoreMethodLink({ tone = "light", className }: ScoreMethodLinkProps) {
  return (
    <Link
      to="/como-avaliamos"
      className={cn(
        "inline-flex items-center gap-1.5 text-xs font-semibold underline decoration-current/30 underline-offset-4 transition hover:decoration-current",
        tone === "dark"
          ? "text-slate-200 hover:text-white"
          : "text-muted-foreground hover:text-foreground",
        className,
      )}
    >
      <Info className="h-3.5 w-3.5" aria-hidden />
      Como calculamos as notas
    </Link>
  );
}
