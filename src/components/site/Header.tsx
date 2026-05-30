import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Search, Tag, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/celulares", label: "Celulares" },
  { to: "/notebooks", label: "Notebooks" },
  { to: "/smartwatches", label: "Smartwatches" },
  { to: "/acessorios", label: "Acessórios" },
  { to: "/comparativos", label: "Comparativos" },
  { to: "/guias-de-compra", label: "Guias de Compra" },
] as const;

const FEATURED_LINKS = [
  { to: "/melhores-celulares-ate-2000", label: "Celulares até R$ 2.000" },
  { to: "/melhores-celulares-ate-2500", label: "Celulares até R$ 2.500" },
  { to: "/melhores-celulares-samsung", label: "Melhores Samsung" },
  { to: "/review/redmi-note-13-pro", label: "Redmi Note 13 Pro" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 shadow-[0_1px_0_rgba(15,23,42,0.04)] backdrop-blur-xl">
      <div className="container-tec flex h-16 items-center justify-between gap-4">
        <Link
          to="/"
          className="group flex items-center gap-3 font-heading font-bold text-foreground"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-sm font-extrabold text-primary-foreground shadow-sm transition group-hover:bg-cta">
            TE
          </span>

          <span className="leading-none">
            <span className="block text-base tracking-tight">
              Tech <span className="text-cta">Escolha Certa</span>
            </span>
            <span className="hidden text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:block">
              Guias, reviews e comparativos
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{
                className:
                  "bg-secondary text-foreground shadow-[inset_0_0_0_1px_rgba(15,23,42,0.04)]",
              }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="rounded-xl px-3 py-2 text-sm font-semibold transition-colors hover:bg-secondary hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Buscar"
            className="hidden rounded-xl border border-border bg-background p-2 text-muted-foreground transition hover:bg-secondary hover:text-foreground md:inline-flex"
          >
            <Search className="h-4 w-4" />
          </button>

          <Link
            to="/ofertas"
            className="hidden items-center gap-2 rounded-xl border border-border bg-background px-4 py-2 text-sm font-bold text-foreground transition-colors hover:bg-secondary sm:inline-flex"
          >
            <Tag className="h-4 w-4 text-cta" />
            Ver ofertas
          </Link>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="rounded-xl p-2 text-foreground transition hover:bg-secondary lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className="hidden border-t border-border/70 bg-surface/70 lg:block">
        <div className="container-tec flex h-10 items-center gap-4 overflow-x-auto">
          <span className="shrink-0 text-xs font-bold uppercase tracking-[0.18em] text-cta">
            Em destaque
          </span>

          <div className="flex items-center gap-1">
            {FEATURED_LINKS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold text-muted-foreground transition hover:bg-background hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background shadow-lg lg:hidden">
          <nav className="container-tec flex flex-col gap-1 py-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
              >
                {n.label}
              </Link>
            ))}

            <div className="my-2 border-t border-border" />

            {FEATURED_LINKS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-semibold text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/ofertas"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-cta px-4 py-3 text-sm font-bold text-cta-foreground"
            >
              <Tag className="h-4 w-4" />
              Ver ofertas
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}







