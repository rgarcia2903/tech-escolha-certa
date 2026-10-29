// Verifica se cada link de afiliado abre o produto esperado.
// Uso: node scripts/check-affiliate-links.mjs [--report caminho.md]
// Saída: tabela em Markdown; código 1 se algum link estiver quebrado ou com modelo errado.
import fs from "node:fs";

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36";
const source = fs.readFileSync("src/lib/affiliate-links.ts", "utf8");
const expectations = JSON.parse(fs.readFileSync("scripts/affiliate-expectations.json", "utf8"));
const links = [...source.matchAll(/export const (\w+) = "(https:\/\/[^"]+)"/g)].map((m) => ({
  name: m[1],
  url: m[2],
}));

const normalize = (text) =>
  text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ");

function htmlToText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, "\n")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/\n\s*\n+/g, "\n");
}

// Não gerar cliques de afiliado automáticos: na Amazon, confere a página do produto sem a tag;
// links encurtados da Amazon (link.amazon) não são acessados e ficam para conferência manual.
function checkUrl(url) {
  const parsed = new URL(url);
  if (parsed.hostname === "link.amazon") return null;
  if (parsed.hostname.endsWith("amazon.com.br")) {
    parsed.search = "";
    return parsed.toString();
  }
  return url;
}

async function fetchPage(url) {
  const response = await fetch(url, {
    redirect: "follow",
    headers: { "user-agent": UA, "accept-language": "pt-BR,pt;q=0.9" },
    signal: AbortSignal.timeout(30000),
  });
  return { status: response.status, finalUrl: response.url, html: await response.text() };
}

// Devolve { state, product } onde state é ok | broken | paused | unverifiable
function readDestination(finalUrl, html) {
  const text = htmlToText(html);
  if (/amazon\.com\.br/.test(finalUrl)) {
    if (/captcha|validateCaptcha|Digite os caracteres/i.test(html)) return { state: "unverifiable" };
    const title = html.match(/id="productTitle"[^>]*>([\s\S]*?)<\/span>/)?.[1];
    if (!title) return { state: "broken", product: "página sem produto" };
    const unavailable = /Não disponível|Indisponível/i.test(
      html.match(/id="availability"[\s\S]{0,400}/)?.[0] ?? "",
    );
    const bullets = htmlToText(html.match(/id="feature-bullets"[\s\S]{0,3000}/)?.[0] ?? "");
    return {
      state: unavailable ? "paused" : "ok",
      product: htmlToText(title).trim(),
      // Os destaques só ajudam a achar termos obrigatórios; termos indevidos são buscados
      // apenas no título (palavras como "processador" contêm "pro").
      extra: bullets.slice(0, 300),
    };
  }
  if (/mercadoli[vb]re\.com/.test(finalUrl)) {
    if (/account-verification|acesse sua conta/i.test(finalUrl + text.slice(0, 2000)))
      return { state: "unverifiable" };
    if (/Este perfil ainda está vazio/i.test(text)) return { state: "broken", product: "perfil vazio" };
    // Vitrine social: o produto em destaque fica entre "Seguir" e "Ir para produto".
    const featured = text.split(/\nSeguir\n/)[1]?.split(/Ir para produto/)[0];
    const product = (featured ?? text.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? "").trim();
    if (!product) return { state: "unverifiable" };
    if (/Anúncio pausado|Sem estoque/i.test(product)) return { state: "paused", product };
    return { state: "ok", product };
  }
  return { state: "unverifiable", product: finalUrl };
}

function matches(product, rule, extra = "") {
  const p = normalize(product);
  const full = normalize(`${product} ${extra}`);
  const missing = (rule.include ?? []).filter((word) => !full.includes(normalize(word)));
  const wrong = (rule.exclude ?? []).filter((word) => p.includes(normalize(word)));
  const anyOk = !rule.includeAny || rule.includeAny.some((word) => full.includes(normalize(word)));
  return { ok: missing.length === 0 && wrong.length === 0 && anyOk, missing, wrong };
}

const results = [];
for (const link of links) {
  const rule = expectations[link.name];
  let row = { ...link, result: "", detail: "" };
  try {
    const target = checkUrl(link.url);
    if (!target) {
      results.push({ ...row, result: "NÃO VERIFICÁVEL", detail: "link encurtado da Amazon: conferir manualmente (não acessado para não gerar clique)" });
      continue;
    }
    const { status, finalUrl, html } = await fetchPage(target);
    const dest = readDestination(finalUrl, html);
    const product = (dest.product ?? "").replace(/\s+/g, " ").slice(0, 120);
    if (status >= 400) row = { ...row, result: "QUEBRADO", detail: `HTTP ${status}` };
    else if (dest.state === "unverifiable") row = { ...row, result: "NÃO VERIFICÁVEL", detail: "loja pediu login ou captcha" };
    else if (dest.state === "broken") row = { ...row, result: "QUEBRADO", detail: product };
    else if (dest.state === "paused") row = { ...row, result: "PAUSADO", detail: product };
    else if (!rule) row = { ...row, result: "SEM REGRA", detail: product };
    else {
      const check = matches(dest.product, rule, dest.extra);
      row = check.ok
        ? { ...row, result: "OK", detail: product }
        : {
            ...row,
            result: "MODELO ERRADO",
            detail: `${product} (falta: ${check.missing.join(", ") || "-"}; indevido: ${check.wrong.join(", ") || "-"})`,
          };
    }
  } catch (error) {
    row = { ...row, result: "NÃO VERIFICÁVEL", detail: String(error.message ?? error).slice(0, 100) };
  }
  if (rule?.knownIssue && ["QUEBRADO", "PAUSADO", "MODELO ERRADO"].includes(row.result))
    row = { ...row, result: "CONHECIDO", detail: `${row.result}: ${rule.knownIssue}` };
  results.push(row);
  console.log(`${row.result.padEnd(16)} ${row.name} — ${row.detail}`);
}

const failing = results.filter((r) => ["QUEBRADO", "PAUSADO", "MODELO ERRADO"].includes(r.result));
const report = [
  `# Verificação de links de afiliado — ${new Date().toISOString().slice(0, 10)}`,
  "",
  `${results.length} links: ${results.filter((r) => r.result === "OK").length} OK, ${failing.length} com problema, ${results.filter((r) => r.result === "NÃO VERIFICÁVEL").length} não verificáveis (a Amazon bloqueia robôs; esses são conferidos manualmente), ${results.filter((r) => r.result === "CONHECIDO").length} problema(s) já conhecido(s).`,
  "",
  "| Resultado | Constante | Destino |",
  "| --- | --- | --- |",
  ...results
    .sort((a, b) => (a.result === "OK") - (b.result === "OK"))
    .map((r) => `| ${r.result} | \`${r.name}\` | ${r.detail.replace(/\|/g, "/")} |`),
].join("\n");

const reportIndex = process.argv.indexOf("--report");
if (reportIndex > -1) fs.writeFileSync(process.argv[reportIndex + 1], report);
console.log(`\n${failing.length} link(s) com problema.`);
process.exit(failing.length ? 1 : 0);
