import { build } from "esbuild";
import { mkdir } from "node:fs/promises";
await mkdir("work/tests", { recursive: true });
await build({
  entryPoints: ["tests/catalog-and-purchase.test.tsx", "tests/product-media.test.tsx"],
  bundle: true,
  platform: "node",
  format: "esm",
  packages: "external",
  outdir: "work/tests",
  outExtension: { ".js": ".mjs" },
  jsx: "automatic",
  tsconfig: "tsconfig.json",
});
