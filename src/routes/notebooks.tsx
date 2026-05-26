import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/notebooks")({
  head: () => ({
    meta: [
      { title: "Notebooks — Análises e recomendações | Tech Escolha Certa" },
      { name: "description", content: "Notebooks para estudo, trabalho e games. Saiba o que observar em processador, memória, SSD e tela." },
      { property: "og:title", content: "Notebooks — Tech Escolha Certa" },
      { property: "og:description", content: "Análises objetivas para você escolher o notebook ideal." },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Notebooks"
      title="Notebooks que valem a pena em 2026"
      intro="Avaliações práticas de notebooks para estudo, trabalho remoto, criação de conteúdo e games — com análises de desempenho real e relação custo-benefício."
    />
  ),
});
