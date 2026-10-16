import { createFileRoute, Link } from "@tanstack/react-router";
import { InfoLayout } from "@/components/site/InfoLayout";
export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Tech Escolha Certa" },
      {
        name: "description",
        content:
          "Ferramentas de medição, links afiliados Amazon e Mercado Livre e informações sobre dados de navegação.",
      },
    ],
  }),
  component: () => (
    <InfoLayout
      eyebrow="Privacidade"
      title="Política de Privacidade"
      intro="Informações sobre dados de navegação, ferramentas instaladas e links de terceiros. Revisão: 16 de outubro de 2026."
    >
      <h2 className="text-xl font-bold">Medição de navegação</h2>
      <p>
        O site carrega Google Analytics 4 para medir páginas e interações, incluindo cliques em
        opções de compra, seleção de perfil e resultados da busca. Os eventos incluem página,
        produto, loja, variante e posição do botão; não representam uma venda.
      </p>
      <h2 className="text-xl font-bold">Análise de comportamento</h2>
      <p>
        Microsoft Clarity é utilizado para análise de navegação, como mapas de calor e registros de
        sessões conforme sua configuração. As ferramentas podem tratar dados de dispositivo,
        identificadores e interações. Não forneça informações sensíveis no campo de busca.
      </p>
      <h2 className="text-xl font-bold">Cookies e lojas externas</h2>
      <p>
        Google Analytics, Microsoft Clarity e as lojas externas podem utilizar cookies e tecnologias
        semelhantes conforme suas configurações. Amazon e Mercado Livre têm políticas próprias. Ao
        abrir um link afiliado, você passa ao ambiente da loja, que pode atribuir compras
        qualificadas ao programa.
      </p>
      <h2 className="text-xl font-bold">Escolhas e direitos</h2>
      <p>
        Você pode gerenciar cookies nas configurações do navegador e consultar as opções oferecidas
        pelos fornecedores. O site ainda não dispõe de um painel próprio de preferências.
      </p>
      <p>
        Solicitações sobre acesso, correção ou exclusão de dados podem ser encaminhadas pelo{" "}
        <Link to="/contato" className="underline">
          canal de contato
        </Link>
        . Não coletamos dados de pagamento nem concluímos compras no site.
      </p>
    </InfoLayout>
  ),
});
