import { createFileRoute } from "@tanstack/react-router";
import { InfoLayout } from "@/components/site/InfoLayout";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso | Tech Escolha Certa" },
      { name: "description", content: "Termos e condições de uso do portal Tech Escolha Certa." },
      { property: "og:title", content: "Termos de Uso — Tech Escolha Certa" },
      { property: "og:description", content: "Regras de uso, isenção de responsabilidade e propriedade intelectual." },
    ],
  }),
  component: () => (
    <InfoLayout
      eyebrow="Termos"
      title="Termos de Uso"
      intro="Ao utilizar o Tech Escolha Certa, você concorda com os termos descritos abaixo."
    >
      <h2 className="font-heading text-xl font-semibold text-foreground">Conteúdo informativo</h2>
      <p>Os conteúdos publicados têm caráter informativo. Preços, ofertas e disponibilidade podem variar e devem ser sempre verificados na loja antes da compra.</p>
      <h2 className="font-heading text-xl font-semibold text-foreground">Isenção de responsabilidade</h2>
      <p>Não nos responsabilizamos por compras realizadas em sites de terceiros. Recomendamos confirmar todos os dados, frete e prazo no momento da compra.</p>
      <h2 className="font-heading text-xl font-semibold text-foreground">Propriedade intelectual</h2>
      <p>Todo o conteúdo deste site é protegido por direitos autorais. A reprodução é permitida apenas com citação da fonte.</p>
    </InfoLayout>
  ),
});
