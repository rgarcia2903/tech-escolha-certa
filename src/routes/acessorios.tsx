import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/acessorios")({
  head: () => ({
    meta: [
      { title: "Acessórios de tecnologia — Análises | Tech Escolha Certa" },
      { name: "description", content: "Fones, carregadores, hubs e mais: acessórios analisados para complementar seu setup com qualidade." },
      { property: "og:title", content: "Acessórios — Tech Escolha Certa" },
      { property: "og:description", content: "Acessórios tech recomendados sem enrolação." },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Acessórios"
      title="Acessórios de tecnologia que fazem diferença"
      intro="Selecionamos fones, carregadores, hubs USB-C, suportes e periféricos com bom custo-benefício para complementar seu setup."
    />
  ),
});


