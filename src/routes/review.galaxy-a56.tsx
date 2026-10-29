import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Samsung (lançamento em 02/03/2025; 6 versões do Android e 6 anos de segurança).
const PAGE_TITLE = fairPriceTitle("galaxy-a56");
const PAGE_DESCRIPTION = fairPriceDescription("galaxy-a56");

export const Route = createFileRoute("/review/galaxy-a56")({
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
      fairPriceId="galaxy-a56"
      name="Galaxy A56"
      launched="março de 2025"
      shortVerdict="Só abaixo de R$ 1.600. O Galaxy A56 continua ótimo: tela de 120 Hz, câmera estabilizada, recarga de 45 W e atualizações até 2031. Mas o Galaxy A57, sucessor, costuma custar pouco mais e tem processador mais forte e IP68. Com diferença pequena, vá de A57."
      alternative={{ id: "galaxy-a57-5g", name: "Galaxy A57 5G", reviewPath: "/review/galaxy-a57-5g" }}
      secondary={{
        id: "galaxy-a36-5g",
        name: "Galaxy A36 5G",
        reviewPath: "/review/galaxy-a36-5g",
        why: "Quer gastar menos? O Galaxy A36 tem a mesma bateria, recarga de 45 W e IP67 por cerca de R$ 1.350.",
      }}
      specs={[
        ["Processador", "Exynos 1580"],
        ["Tela", "6,7\" Super AMOLED • 120 Hz"],
        ["Câmeras traseiras", "50 MP com OIS + ultra-angular 12 MP + macro 5 MP"],
        ["Câmera frontal", "12 MP"],
        ["Bateria", "5.000 mAh • 45 W"],
        ["Proteção", "IP67"],
        ["Atualizações", "6 versões do Android; segurança até 2031"],
        ["Lançamento", "Março de 2025"],
      ]}
      versus={[
        ["Processador", "Exynos 1580", "Exynos 1680", "new"],
        ["Tela", "6,7\" • 120 Hz", "6,7\" • 120 Hz", "tie"],
        ["Câmeras", "50 + 12 + 5 MP", "50 + 12 + 5 MP", "tie"],
        ["Proteção", "IP67", "IP68", "new"],
        ["Atualizações", "Até 2031", "Até 2032", "new"],
        ["Compre se estiver até", "R$ 1.600", "R$ 1.850", "tie"],
      ]}
      stillGood={[
        "Atualizações até 2031",
        "Recarga de 45 W e bateria de 5.000 mAh",
        "Câmera principal estabilizada e ultra-angular de 12 MP",
      ]}
      whyNot={[
        "O A57 custa pouco mais e é a geração seguinte",
        "IP67, não IP68",
      ]}
      versionNote={{
        text: "Galaxy A56, A55 e A57 são gerações diferentes. Confira o modelo no anúncio.",
        proPath: "/review/galaxy-a55",
        proName: "Galaxy A55",
      }}
      faq={[
        { question: "O Galaxy A56 vale a pena em 2026?", answer: "Vale abaixo de R$ 1.600: ele ainda recebe atualizações até 2031. Acima disso, o A57 é a geração seguinte por pouco mais." },
        { question: "Galaxy A56 ou A57?", answer: "O A57, se a diferença for de até uns R$ 250: processador mais forte, IP68 e um ano a mais de atualização." },
        { question: "Galaxy A56 ou A55?", answer: "O A56: tem recarga de 45 W e dois anos a mais de atualização." },
      ]}
    />
  ),
});
