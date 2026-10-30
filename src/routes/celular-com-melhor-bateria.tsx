import { createFileRoute } from "@tanstack/react-router";
import { UseGuidePage } from "@/components/site/UseGuidePage";
import { USE_GUIDES } from "@/lib/use-guides";

const g = USE_GUIDES["celular-com-melhor-bateria"];

export const Route = createFileRoute("/celular-com-melhor-bateria")({
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
