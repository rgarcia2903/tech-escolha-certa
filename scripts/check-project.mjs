import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import ts from "typescript";
const routes = new Set(["/"]);
for (const file of fs.readdirSync("src/routes").filter((file) => file.endsWith(".tsx"))) {
  const text = fs.readFileSync(`src/routes/${file}`, "utf8");
  const match = text.match(/createFileRoute\(\s*["']([^"']+)/);
  if (match) routes.add(match[1]);
}
function routeExists(value) {
  if (routes.has(value)) return true;
  const parts = value.split("/");
  return [...routes].some((route) => {
    const pattern = route.split("/");
    return pattern.length === parts.length && pattern.some((segment) => segment.startsWith("$")) && pattern.every((segment, index) => segment.startsWith("$") ? Boolean(parts[index]) : segment === parts[index]);
  });
}
function files(directory) {
  return fs
    .readdirSync(directory, { withFileTypes: true })
    .flatMap((entry) =>
      entry.isDirectory()
        ? files(path.join(directory, entry.name))
        : [path.join(directory, entry.name)],
    );
}
const broken = [];
let checked = 0;
for (const file of files("src").filter(
  (file) => /\.(ts|tsx)$/.test(file) && !file.endsWith("routeTree.gen.ts"),
)) {
  const ast = ts.createSourceFile(
    file,
    fs.readFileSync(file, "utf8"),
    ts.ScriptTarget.Latest,
    true,
    file.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
  );
  function visit(node) {
    if (ts.isStringLiteral(node) && node.text.startsWith("/") && !node.text.startsWith("//")) {
      const value = node.text.split(/[?#]/)[0];
      if (
        !value ||
        value.startsWith("/images/") ||
        value.endsWith(".png") ||
        value.includes("*") ||
        node.text.includes("${")
      )
        return;
      // Only navigational properties and JSX href/to, not CSS or arbitrary labels.
      const parent = node.parent;
      const property = ts.isPropertyAssignment(parent)
        ? parent.name.getText(ast)
        : ts.isJsxAttribute(parent)
          ? parent.name.getText(ast)
          : "";
      if (
        [
          "to",
          "href",
          "review",
          "comparison",
          "reviewPath",
          "reviewHref",
          "compareHref",
          "cta",
          "internalPath",
          "secondaryPath",
          "proPath",
        ].includes(property)
      ) {
        checked++;
        if (!routeExists(value)) broken.push({ file, value });
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(ast);
}
const sitemap = fs.readFileSync("public/sitemap.xml", "utf8");
let sitemapCount = 0;
for (const [, url] of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
  sitemapCount++;
  const pathname = new URL(url).pathname;
  if (!routes.has(pathname)) broken.push({ file: "public/sitemap.xml", value: pathname });
}
assert.deepEqual(broken, [], "Internal destinations must resolve to a registered route");
assert.equal(
  (fs.readFileSync("src/routes/__root.tsx", "utf8").match(/rel: "canonical"/g) ?? []).length,
  1,
);
for (const file of files("src/routes").filter(
  (file) => file.endsWith(".tsx") && !file.endsWith("__root.tsx"),
)) {
  assert.ok(
    !/rel:\s*"canonical"/.test(fs.readFileSync(file, "utf8")),
    `Duplicate canonical owner: ${file}`,
  );
}
console.log(
  JSON.stringify(
    {
      registeredRoutes: routes.size,
      literalInternalLinksChecked: checked,
      sitemapUrls: sitemapCount,
      brokenLinks: broken.length,
      canonicalOwner: "root only",
    },
    null,
    2,
  ),
);
