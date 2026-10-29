import { createFileRoute } from "@tanstack/react-router";
import { ComparisonPage } from "@/components/site/ComparisonPage";
import { COMPARISONS } from "@/lib/comparisons";

const c = COMPARISONS["edge-70-vs-edge-60-pro"];

export const Route = createFileRoute("/comparativo/edge-70-vs-edge-60-pro")({
  head: () => ({
    meta: [
      { title: c.title },
      { name: "description", content: c.description },
      { property: "og:type", content: "article" },
      { property: "og:title", content: c.title },
      { property: "og:description", content: c.description },
      { name: "twitter:title", content: c.title },
      { name: "twitter:description", content: c.description },
    ],
  }),
  component: () => <ComparisonPage c={c} />,
});
