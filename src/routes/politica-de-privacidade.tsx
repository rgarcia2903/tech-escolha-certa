import { createFileRoute } from "@tanstack/react-router";
import { InfoLayout } from "@/components/site/InfoLayout";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Tech Escolha Certa" },
      { name: "description", content: "Como tratamos seus dados de navegação no Tech Escolha Certa." },
      { property: "og:title", content: "Política de Privacidade — Tech Escolha Certa" },
      { property: "og:description", content: "Tratamento de dados e cookies em conformidade com a LGPD." },
    ],
  }),
  component: () => (
    <InfoLayout
      eyebrow="Privacidade"
      title="Política de Privacidade"
      intro="Esta política descreve como coletamos, usamos e protegemos seus dados ao navegar pelo Tech Escolha Certa."
    >
      <h2 className="font-heading text-xl font-semibold text-foreground">Dados coletados</h2>
      <p>Coletamos apenas dados básicos de navegação (IP, páginas visitadas, tempo de leitura) por meio de cookies e ferramentas de analytics, com o objetivo de melhorar o conteúdo.</p>
      <h2 className="font-heading text-xl font-semibold text-foreground">Cookies</h2>
      <p>Utilizamos cookies próprios e de terceiros (como Google Analytics e parceiros afiliados) para entender o uso do site e medir cliques em links de oferta.</p>
      <h2 className="font-heading text-xl font-semibold text-foreground">Seus direitos</h2>
      <p>Você pode solicitar acesso, correção ou exclusão dos seus dados a qualquer momento por meio do nosso e-mail de contato, conforme previsto na LGPD.</p>
    </InfoLayout>
  ),
});







