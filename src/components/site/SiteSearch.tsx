"use client";

import { useEffect, useState } from "react";
import { useRouter } from "@tanstack/react-router";
import { ArrowRight, BookOpen, GitCompareArrows, Search, Smartphone, Tag } from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { trackSiteSearchSelection } from "@/lib/analytics";

const SEARCH_ITEMS = [
  {
    group: "Comece por aqui",
    title: "Celulares",
    description: "Reviews, guias e comparativos em um só lugar",
    to: "/celulares",
    keywords: "smartphone escolher comprar",
    icon: Smartphone,
  },
  {
    group: "Comece por aqui",
    title: "Melhores custo-benefício",
    description: "As escolhas mais equilibradas pelo preço",
    to: "/melhores-celulares-custo-beneficio",
    keywords: "barato economia melhor compra",
    icon: BookOpen,
  },
  {
    group: "Comece por aqui",
    title: "Comparativos",
    description: "Coloque dois modelos lado a lado",
    to: "/comparativos",
    keywords: "comparar versus diferença",
    icon: GitCompareArrows,
  },
  {
    group: "Comece por aqui",
    title: "Ofertas recomendadas",
    description: "Consulte preços e disponibilidade",
    to: "/ofertas",
    keywords: "promoção preço mercado livre comprar",
    icon: Tag,
  },
  {
    group: "Guias por orçamento",
    title: "Celulares até R$ 1.500",
    description: "Boas escolhas para gastar menos",
    to: "/guia/melhores-celulares-ate-1500-reais",
    keywords: "1500 barato orçamento",
    icon: BookOpen,
  },
  {
    group: "Guias por orçamento",
    title: "Celulares até R$ 2.000",
    description: "Intermediários com ótimo custo-benefício",
    to: "/melhores-celulares-ate-2000",
    keywords: "2000 dois mil orçamento",
    icon: BookOpen,
  },
  {
    group: "Guias por orçamento",
    title: "Celulares até R$ 2.500",
    description: "Intermediários premium equilibrados",
    to: "/melhores-celulares-ate-2500",
    keywords: "2500 dois mil quinhentos orçamento",
    icon: BookOpen,
  },
  {
    group: "Guias por orçamento",
    title: "Celulares até R$ 3.000",
    description: "Modelos fortes para vários perfis",
    to: "/guia/melhores-celulares-ate-3000-reais",
    keywords: "3000 três mil orçamento",
    icon: BookOpen,
  },
  {
    group: "Marcas e perfis",
    title: "Melhores Samsung",
    description: "Galaxy organizados por perfil de compra",
    to: "/melhores-celulares-samsung",
    keywords: "galaxy samsung a35 a55 s24",
    icon: Smartphone,
  },
  {
    group: "Marcas e perfis",
    title: "Melhores Xiaomi, Redmi e Poco",
    description: "Equilíbrio, câmera, jogos e desempenho",
    to: "/melhores-celulares-xiaomi",
    keywords: "xiaomi redmi poco",
    icon: Smartphone,
  },
  {
    group: "Marcas e perfis",
    title: "Melhores para jogos até R$ 2.000",
    description: "Desempenho e tela para jogar",
    to: "/guia/melhores-celulares-para-jogos-ate-2000",
    keywords: "gamer jogos desempenho poco",
    icon: Smartphone,
  },
  {
    group: "Reviews",
    title: "Galaxy A35 5G",
    description: "Samsung equilibrado até R$ 2.000",
    to: "/review/galaxy-a35",
    keywords: "review análise samsung",
    icon: BookOpen,
  },
  {
    group: "Reviews",
    title: "Galaxy A55 5G",
    description: "Intermediário Samsung mais completo",
    to: "/review/galaxy-a55",
    keywords: "review análise samsung",
    icon: BookOpen,
  },
  {
    group: "Reviews",
    title: "Galaxy S24",
    description: "Flagship compacto da Samsung",
    to: "/review/galaxy-s24",
    keywords: "review análise premium samsung",
    icon: BookOpen,
  },
  {
    group: "Reviews",
    title: "iPhone 15",
    description: "Desempenho, câmera e ecossistema Apple",
    to: "/review/iphone-15",
    keywords: "review análise apple ios",
    icon: BookOpen,
  },
  {
    group: "Reviews",
    title: "Redmi Note 13 Pro 5G",
    description: "Câmera e ficha técnica pelo preço",
    to: "/review/redmi-note-13-pro",
    keywords: "review análise xiaomi redmi",
    icon: BookOpen,
  },
  {
    group: "Reviews",
    title: "Redmi Note 14 Pro+ 5G",
    description: "Redmi mais completo da seleção",
    to: "/review/redmi-note-14-pro-plus",
    keywords: "review análise xiaomi redmi plus",
    icon: BookOpen,
  },
  {
    group: "Reviews",
    title: "Poco X6 Pro",
    description: "Desempenho forte pagando menos",
    to: "/review/poco-x6-pro",
    keywords: "review análise xiaomi jogos gamer",
    icon: BookOpen,
  },
  {
    group: "Reviews",
    title: "Poco X7 Pro",
    description: "Performance e bateria para jogos",
    to: "/review/poco-x7-pro",
    keywords: "review análise xiaomi jogos gamer",
    icon: BookOpen,
  },
] as const;

const GROUPS = ["Comece por aqui", "Guias por orçamento", "Marcas e perfis", "Reviews"] as const;

export function SiteSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const selectResult = (item: (typeof SEARCH_ITEMS)[number]) => {
    trackSiteSearchSelection({
      query: query.trim() || "atalhos_iniciais",
      resultTitle: item.title,
      destination: item.to,
    });
    setOpen(false);
    setQuery("");
    void router.navigate({ to: item.to });
  };

  return (
    <>
      <button
        type="button"
        aria-label="Buscar no Tech Escolha Certa"
        title="Buscar no site (Ctrl+K)"
        onClick={() => setOpen(true)}
        className="inline-flex rounded-xl border border-border bg-background p-2 text-muted-foreground transition hover:bg-secondary hover:text-foreground"
      >
        <Search className="h-4 w-4" />
      </button>

      <CommandDialog
        open={open}
        onOpenChange={(nextOpen) => {
          setOpen(nextOpen);
          if (!nextOpen) setQuery("");
        }}
      >
        <DialogTitle className="sr-only">Buscar no Tech Escolha Certa</DialogTitle>
        <DialogDescription className="sr-only">
          Procure guias, reviews, comparativos e ofertas de celulares.
        </DialogDescription>
        <CommandInput
          value={query}
          onValueChange={setQuery}
          placeholder="Busque por modelo, marca, orçamento ou perfil..."
        />
        <CommandList className="max-h-[min(65vh,30rem)] p-2">
          <CommandEmpty>Nenhum conteúdo encontrado. Tente outro termo.</CommandEmpty>

          {GROUPS.map((group) => (
            <CommandGroup key={group} heading={group}>
              {SEARCH_ITEMS.filter((item) => item.group === group).map((item) => {
                const Icon = item.icon;

                return (
                  <CommandItem
                    key={item.to}
                    value={`${item.title} ${item.description} ${item.keywords}`}
                    onSelect={() => selectResult(item)}
                    className="cursor-pointer rounded-xl px-3 py-3"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#F7F2EB] text-[#8B5A2B]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-semibold text-foreground">
                        {item.title}
                      </span>
                      <span className="block truncate text-xs text-muted-foreground">
                        {item.description}
                      </span>
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </CommandItem>
                );
              })}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
