import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight, Star } from "lucide-react";

type LinkTo = ComponentProps<typeof Link>["to"];

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: { to: LinkTo; label: string };
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
      <div className="max-w-2xl">
        {eyebrow && (
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-cta mb-2">
            {eyebrow}
          </span>
        )}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
        {description && <p className="mt-2 text-muted-foreground">{description}</p>}
      </div>
      {action && (
        <Link
          to={action.to}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-cta"
        >
          {action.label} <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}

export function Badge({
  variant = "default",
  children,
}: {
  variant?: "default" | "cta" | "teal" | "soft";
  children: ReactNode;
}) {
  const styles = {
    default: "bg-secondary text-secondary-foreground",
    cta: "bg-cta text-cta-foreground",
    teal: "bg-teal text-teal-foreground",
    soft: "bg-surface text-foreground border border-border",
  } as const;
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${styles[variant]}`}>
      {children}
    </span>
  );
}

export function Rating({ value }: { value: number }) {
  return (
    <div className="inline-flex items-center gap-1 text-sm text-foreground">
      <Star className="h-4 w-4 fill-cta text-cta" />
      <span className="font-semibold">{value.toFixed(1)}</span>
      <span className="text-muted-foreground">/5</span>
    </div>
  );
}

