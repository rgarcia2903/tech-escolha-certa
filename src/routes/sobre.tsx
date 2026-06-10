import { createFileRoute, Link } from "@tanstack/react-router";
import { InfoLayout } from "@/components/site/InfoLayout";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      {
        title: "Sobre o Tech Escolha Certa",
      },
      {
        name: "description",
        content:
          "Conheça o Tech Escolha Certa, portal editorial independente com reviews, comparativos e guias para ajudar você a comprar tecnologia com mais clareza.",
      },
      {
        property: "og:title",
        content: "Sobre — Tech Escolha Certa",
      },
      {
        property: "og:description",
        content:
          "Entenda como produzimos nossas análises, recomendações e comparativos de tecnologia.",
      },
    ],
  }),
  component: () => (
    <InfoLayout
      eyebrow="Sobre"
      title="Tecnologia explicada de forma simples para comprar melhor"
      intro="O Tech Escolha Certa é um portal editorial independente criado para ajudar você a escolher celulares, notebooks, acessórios e outros produtos de tecnologia com mais segurança."
    >
      <p>
        Nosso objetivo é transformar fichas técnicas, comparativos e diferenças
        entre modelos em recomendações claras, diretas e úteis para o dia a dia.
      </p>

      <p>
        Produzimos reviews, guias de compra, rankings e comparativos pensando em
        pessoas que querem comprar bem, evitar arrependimento e entender qual
        produto faz mais sentido para o próprio uso.
      </p>

      <p>
        Não somos uma loja e não vendemos produtos diretamente. Quando indicamos
        uma oferta, o usuário é direcionado para a loja parceira responsável pela
        venda, preço, entrega, garantia e atendimento.
      </p>

      <p>
        Algumas páginas podem conter links afiliados. Isso significa que podemos
        receber comissão caso você compre por meio desses links, sem custo extra
        para você. Essa possibilidade não altera nossa lógica editorial: buscamos
        recomendar produtos que façam sentido de verdade.
      </p>

      <p>
        Nossa prioridade é responder perguntas práticas: qual celular vale mais a
        pena, qual modelo tem melhor custo-benefício, qual é melhor para jogos,
        qual câmera entrega mais segurança e quais escolhas devem ser evitadas.
      </p>

      <p>
        Para entender melhor como funcionam os links afiliados, acesse nossa{" "}
        <Link
          to="/divulgacao-de-afiliados"
          className="font-semibold text-cta hover:underline"
        >
          Divulgação de Afiliados
        </Link>
        .
      </p>

      <p>
        Para sugerir um produto, comparativo ou guia, fale com a gente pela página
        de{" "}
        <Link to="/contato" className="font-semibold text-cta hover:underline">
          contato
        </Link>
        .
      </p>
    </InfoLayout>
  ),
});