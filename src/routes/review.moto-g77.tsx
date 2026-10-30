import { createFileRoute } from "@tanstack/react-router";
import { LaunchVerdict } from "@/components/site/LaunchVerdict";
import { LAUNCHES, launchDescription, launchTitle } from "@/lib/launches";

const l = LAUNCHES["moto-g77"];
const PAGE_TITLE = launchTitle(l);
const PAGE_DESCRIPTION = launchDescription(l);

export const Route = createFileRoute("/review/moto-g77")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
    ],
  }),
  component: () => <LaunchVerdict l={l} />,
});
