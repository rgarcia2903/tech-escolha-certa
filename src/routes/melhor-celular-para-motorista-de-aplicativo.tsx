import { createFileRoute } from "@tanstack/react-router";
import { UseGuidePage } from "@/components/site/UseGuidePage";
import { USE_GUIDES } from "@/lib/use-guides";

const g = USE_GUIDES["melhor-celular-para-motorista-de-aplicativo"];

export const Route = createFileRoute("/melhor-celular-para-motorista-de-aplicativo")({
  head: () => ({
    meta: [
      { title: g.title },
      { name: "description", content: g.description },
      { property: "og:type", content: "article" },
      { property: "og:title", content: g.title },
      { property: "og:description", content: g.description },
    ],
  }),
  component: () => <UseGuidePage g={g} />,
});
