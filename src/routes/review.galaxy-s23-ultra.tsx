import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Samsung (lançamento em 01/02/2023; 4 versões do Android e 5 anos de segurança).
const PAGE_TITLE = fairPriceTitle("galaxy-s23-ultra");
const PAGE_DESCRIPTION = fairPriceDescription("galaxy-s23-ultra");

export const Route = createFileRoute("/review/galaxy-s23-ultra")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
    ],
  }),
  component: () => (
    <OlderModelVerdict
      fairPriceId="galaxy-s23-ultra"
      name="Galaxy S23 Ultra"
      launched="fevereiro de 2023"
      shortVerdict="Só abaixo de R$ 3.300. O Galaxy S23 Ultra ainda tem uma das melhores câmeras com zoom, S Pen e tela grande de alta resolução, mas a One UI 9 é a última versão grande do Android que ele recebe. Acima disso, junte para o S25 Ultra, que tem atualizações até 2032; se não usa a S Pen, o S25 FE custa menos e dura mais."
      alternative={{ id: "galaxy-s25-ultra", name: "Galaxy S25 Ultra", reviewPath: "/comparativo/galaxy-s26-ultra-vs-galaxy-s25-ultra" }}
      secondary={{
        id: "galaxy-s25-fe",
        name: "Galaxy S25 FE",
        reviewPath: "/review/galaxy-s25-fe",
        why: "Não usa a S Pen? O Galaxy S25 FE tem teleobjetiva e atualizações até 2032 por menos de R$ 3.000.",
      }}
      specs={[
        ["Processador", "Snapdragon 8 Gen 2 for Galaxy"],
        ["Tela", "6,8\" Dynamic AMOLED 2X QHD+ • 120 Hz"],
        ["Câmeras traseiras", "200 MP + ultra-angular 12 MP + tele 10 MP (3x) + tele 10 MP (10x)"],
        ["Câmera frontal", "12 MP"],
        ["Bateria", "5.000 mAh • 45 W"],
        ["Extras", "S Pen embutida"],
        ["Proteção", "IP68"],
        ["Atualizações", "Até a One UI 9 (Android 17); segurança até 2028"],
        ["Lançamento", "Fevereiro de 2023"],
      ]}
      versus={[
        ["Processador", "Snapdragon 8 Gen 2", "Snapdragon 8 Elite", "new"],
        ["Zoom", "3x e 10x", "3x e 5x", "tie"],
        ["Ultra-angular", "12 MP", "50 MP", "new"],
        ["S Pen", "Sim", "Sim", "tie"],
        ["Atualizações", "Última versão grande agora", "Até 2032", "new"],
        ["Compre se estiver até", "R$ 3.300", "R$ 5.800", "tie"],
      ]}
      stillGood={[
        "Câmera de 200 MP e zoom de 10x",
        "S Pen embutida",
        "Bateria de 5.000 mAh com recarga de 45 W",
      ]}
      whyNot={[
        "A One UI 9 é a última versão grande do Android que ele recebe",
        "Grande e pesado",
        "Em seminovos, confira bateria e tela",
      ]}
      versionNote={{
        text: "Galaxy S23 Ultra, S23+ e S23 são aparelhos diferentes. Só o Ultra tem S Pen.",
        proPath: "/review/galaxy-s24-ultra",
        proName: "Galaxy S24 Ultra",
      }}
      faq={[
        { question: "O Galaxy S23 Ultra vale a pena em 2026?", answer: "Só abaixo de R$ 3.300. As câmeras e a S Pen ainda impressionam, mas a One UI 9 é sua última versão grande do Android." },
        { question: "Galaxy S23 Ultra ou S25 FE?", answer: "O S25 FE dura mais em atualizações (até 2032) e custa menos. O S23 Ultra ganha no zoom de 10x, na S Pen e na tela. Para usar por muitos anos sem S Pen, o S25 FE." },
        { question: "Até quando o Galaxy S23 Ultra recebe atualização?", answer: "A One UI 9 (Android 17) é a última versão grande; as correções de segurança vão até 2028." },
      ]}
    />
  ),
});
