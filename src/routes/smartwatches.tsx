import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";

export const Route = createFileRoute("/smartwatches")({
  head: () => ({
    meta: [
      { title: "Smartwatches — Análises e melhores modelos | Tech Escolha Certa" },
      { name: "description", content: "Análises de smartwatches: saúde, esporte, autonomia e integração. Veja qual vale a pena para o seu perfil." },
      { property: "og:title", content: "Smartwatches — Tech Escolha Certa" },
      { property: "og:description", content: "Smartwatches analisados sem rodeios para você escolher melhor." },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Smartwatches"
      title="Smartwatches: análises e recomendações"
      intro="Avaliamos smartwatches com foco em saúde, esporte, bateria e integração com o celular para indicar o melhor modelo para o seu dia a dia."
    />
  ),
});


