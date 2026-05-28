import { createFileRoute } from "@tanstack/react-router";
import { InfoLayout } from "@/components/site/InfoLayout";

export const Route = createFileRoute("/transparencia")({
  head: () => ({
    meta: [
      { title: "Transparência e Política de Afiliados | Tech Escolha Certa" },
      { name: "description", content: "Como ganhamos dinheiro e por que isso não interfere nas nossas recomendações." },
      { property: "og:title", content: "Transparência — Tech Escolha Certa" },
      { property: "og:description", content: "Política editorial e de afiliados do Tech Escolha Certa." },
    ],
  }),
  component: () => (
    <InfoLayout
      eyebrow="Transparência"
      title="Política editorial e de afiliados"
      intro="Acreditamos que clareza gera confiança. Aqui explicamos como funciona o nosso modelo."
    >
      <p>O Tech Escolha Certa participa de programas de afiliados, incluindo o Mercado Livre. Quando você clica em um link e realiza uma compra, podemos receber uma comissão — sem qualquer custo adicional para você.</p>
      <p>Essa receita ajuda a manter o site no ar e nossa equipe produzindo conteúdo independente. Em hipótese alguma, a comissão influencia nossas recomendações: avaliamos os produtos pelo que eles entregam, não pelo que pagam.</p>
      <p>Se um produto não vale a pena, dizemos. Se um concorrente é melhor, indicamos. Essa é a nossa regra.</p>
    </InfoLayout>
  ),
});


