import { createFileRoute } from "@tanstack/react-router";
import { ComparisonPage } from "@/components/site/ComparisonPage";
import { COMPARISONS } from "@/lib/comparisons";

const c = COMPARISONS["moto-g37-vs-moto-g17"];

export const Route = createFileRoute("/comparativo/moto-g37-vs-moto-g17")({
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
