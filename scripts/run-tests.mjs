import { build } from "esbuild";
import { mkdir } from "node:fs/promises";
await mkdir("work/tests", { recursive: true });
await build({
  entryPoints: ["tests/catalog-and-purchase.test.tsx"],
  bundle: true,
  platform: "node",
  format: "esm",
  packages: "external",
  outfile: "work/tests/catalog-and-purchase.test.mjs",
  jsx: "automatic",
  tsconfig: "tsconfig.json",
});
