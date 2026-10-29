import { createFileRoute } from "@tanstack/react-router";
import { ComparisonPage } from "@/components/site/ComparisonPage";
import { COMPARISONS } from "@/lib/comparisons";

const c = COMPARISONS["moto-g86-vs-redmi-note-15-5g"];

export const Route = createFileRoute("/comparativo/moto-g86-vs-redmi-note-15-5g")({
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
