import { createFileRoute, Link } from "@tanstack/react-router";
import { InfoLayout } from "@/components/site/InfoLayout";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre o Tech Escolha Certa" },
      { name: "description", content: "Conheça nossa missão: ajudar você a comprar tecnologia com clareza e confiança." },
      { property: "og:title", content: "Sobre — Tech Escolha Certa" },
      { property: "og:description", content: "Quem somos e como produzimos nossas análises." },
    ],
  }),
  component: () => (
    <InfoLayout
      eyebrow="Sobre"
      title="Quem somos"
      intro="O Tech Escolha Certa é um portal independente de análises e recomendações de tecnologia."
    >
      <p>Acreditamos que comprar bem começa por entender bem. Cada análise é feita com critério, comparando produtos lado a lado e mostrando vantagens e desvantagens reais.</p>
      <p>Não somos uma loja. Somos um portal editorial — nosso compromisso é com o leitor. Indicamos produtos que recomendaríamos a um amigo, nada mais.</p>
      <p><Link to="/contato" className="text-cta font-semibold hover:underline">Fale com a gente</Link> para sugerir um produto, comparativo ou guia.</p>
    </InfoLayout>
  ),
});




