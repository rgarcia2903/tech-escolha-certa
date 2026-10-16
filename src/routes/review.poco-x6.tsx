import { createFileRoute } from "@tanstack/react-router";
import { ModelIdentityPage } from "@/components/site/ModelIdentityPage";
export const Route = createFileRoute("/review/poco-x6")({
  head: () => ({
    meta: [
      { title: "POCO X6 5G sem Pro: identifique a versão | Tech Escolha Certa" },
      {
        name: "description",
        content:
          "POCO X6 5G e POCO X6 Pro são aparelhos diferentes. Identifique a versão e evite abrir um anúncio de outro modelo.",
      },
    ],
  }),
  component: () => (
    <ModelIdentityPage productId="poco-x6-5g" proPath="/review/poco-x6-pro" proName="POCO X6 Pro" />
  ),
});
