import { createFileRoute, Link, notFound } from "@tanstack/react-router";

// Todos os modelos com review têm rota própria (review.<id>.tsx). Esta rota só existe para
// responder 404 a modelos inexistentes, em vez de 200 com página vazia (soft 404).
export const Route = createFileRoute("/review/$productId")({
  loader: () => {
    throw notFound();
  },
  component: ReviewNotFound,
  notFoundComponent: ReviewNotFound,
  head: () => ({
    meta: [
      { title: "Review não encontrado | Tech Escolha Certa" },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
});

function ReviewNotFound() {
  return (
    <main className="container-tec py-16">
      <h1 className="text-3xl font-bold">Review não disponível</h1>
      <Link to="/celulares" className="mt-4 inline-block underline">
        Ver celulares
      </Link>
    </main>
  );
}
