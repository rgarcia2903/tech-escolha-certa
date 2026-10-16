import { createFileRoute } from "@tanstack/react-router";
import { ModelIdentityPage } from "@/components/site/ModelIdentityPage";
export const Route = createFileRoute("/review/redmi-note-13")({
  head: () => ({
    meta: [
      { title: "Redmi Note 13 5G sem Pro: identifique a versão | Tech Escolha Certa" },
      {
        name: "description",
        content:
          "Entenda a diferença entre Redmi Note 13 5G sem Pro, Note 13 4G e Note 13 Pro 5G antes de escolher um anúncio.",
      },
    ],
  }),
  component: () => (
    <ModelIdentityPage
      productId="redmi-note-13-5g"
      proPath="/review/redmi-note-13-pro"
      proName="Redmi Note 13 Pro 5G"
    />
  ),
});
