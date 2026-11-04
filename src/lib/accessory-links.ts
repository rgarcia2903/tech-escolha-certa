// Links de busca da Amazon para acessórios de um modelo (capinha, película, carregador).
// Ficam fora de affiliate-links.ts: são buscas, não anúncios, e o verificador mensal não os acessa.
// Não exibir preço (política da Amazon).
const AMAZON_TAG = "techescolha03-20";

export const ACCESSORIES = [
  { id: "capinha", label: "Capinhas" },
  { id: "pelicula", label: "Películas" },
  { id: "carregador", label: "Carregadores" },
] as const;

const SEARCH_TERM: Record<(typeof ACCESSORIES)[number]["id"], string> = {
  capinha: "capinha",
  pelicula: "película",
  carregador: "carregador turbo",
};

export function accessorySearchUrl(accessoryId: (typeof ACCESSORIES)[number]["id"], modelName: string): string {
  const q = `${SEARCH_TERM[accessoryId]} ${modelName}`;
  return "https://www.amazon.com.br/s?k=" + encodeURIComponent(q) + "&tag=" + AMAZON_TAG;
}
