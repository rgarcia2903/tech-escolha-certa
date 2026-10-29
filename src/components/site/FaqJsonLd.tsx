/**
 * Dados estruturados FAQPage gerados a partir do FAQ visível na página.
 * Ajuda buscadores e assistentes de IA a citar a resposta direta.
 */
export function FaqJsonLd({ faq }: { faq: { question: string; answer: string }[] }) {
  if (!faq.length) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  return (
    <script
      type="application/ld+json"
      // O conteúdo vem de constantes do próprio site; "<" é escapado por segurança.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
