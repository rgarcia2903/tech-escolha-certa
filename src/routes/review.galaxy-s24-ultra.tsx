import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Samsung (lançamento em 17/01/2024; 7 anos de atualizações).
const PAGE_TITLE = fairPriceTitle("galaxy-s24-ultra");
const PAGE_DESCRIPTION = fairPriceDescription("galaxy-s24-ultra");

export const Route = createFileRoute("/review/galaxy-s24-ultra")({
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
      fairPriceId="galaxy-s24-ultra"
      name="Galaxy S24 Ultra"
      launched="janeiro de 2024"
      shortVerdict="Vale abaixo de R$ 4.500. O Galaxy S24 Ultra tem S Pen, zoom de 5x, moldura de titânio e atualizações até 2031, então segue como ótima compra nesse preço. Acima disso, o S25 Ultra é a geração seguinte por pouco mais."
      alternative={{ id: "galaxy-s25-ultra", name: "Galaxy S25 Ultra", reviewPath: "/comparativo/galaxy-s26-ultra-vs-galaxy-s25-ultra" }}
      secondary={{
        id: "galaxy-s25-fe",
        name: "Galaxy S25 FE",
        reviewPath: "/review/galaxy-s25-fe",
        why: "Não usa a S Pen? O Galaxy S25 FE tem teleobjetiva e atualizações até 2032 por bem menos.",
      }}
      specs={[
        ["Processador", "Snapdragon 8 Gen 3 for Galaxy"],
        ["Tela", "6,8\" Dynamic AMOLED 2X QHD+ • 120 Hz"],
        ["Câmeras traseiras", "200 MP + ultra-angular 12 MP + tele 10 MP (3x) + tele 50 MP (5x)"],
        ["Câmera frontal", "12 MP"],
        ["Bateria", "5.000 mAh • 45 W"],
        ["Extras", "S Pen embutida, moldura de titânio"],
        ["Proteção", "IP68"],
        ["Atualizações", "7 anos (até 2031)"],
        ["Lançamento", "Janeiro de 2024"],
      ]}
      versus={[
        ["Processador", "Snapdragon 8 Gen 3", "Snapdragon 8 Elite", "new"],
        ["Ultra-angular", "12 MP", "50 MP", "new"],
        ["Zoom", "3x e 5x", "3x e 5x", "tie"],
        ["S Pen", "Com Bluetooth (gestos remotos)", "Sem Bluetooth", "old"],
        ["Atualizações", "Até 2031", "Até 2032", "new"],
        ["Compre se estiver até", "R$ 4.500", "R$ 5.800", "tie"],
      ]}
      stillGood={[
        "S Pen com gestos remotos",
        "Zoom de 5x e câmera de 200 MP",
        "Atualizações até 2031",
      ]}
      whyNot={[
        "O S25 Ultra é a geração seguinte",
        "Grande e pesado",
      ]}
      versionNote={{
        text: "Galaxy S24 Ultra, S24+, S24 e S24 FE são aparelhos diferentes. Só o Ultra tem S Pen.",
        proPath: "/review/galaxy-s24",
        proName: "Galaxy S24",
      }}
      faq={[
        { question: "O Galaxy S24 Ultra vale a pena em 2026?", answer: "Sim, abaixo de R$ 4.500: tem S Pen, zoom de 5x e atualizações até 2031. Acima disso, o S25 Ultra é a geração seguinte." },
        { question: "Galaxy S24 Ultra ou S25 Ultra?", answer: "O S25 Ultra, se a diferença for de até uns R$ 1.000: processador mais forte, ultra-angular de 50 MP e um ano a mais de atualizações. O S24 Ultra mantém os gestos remotos da S Pen." },
        { question: "Até quando o Galaxy S24 Ultra recebe atualização?", answer: "A Samsung promete sete anos de atualizações, até 2031." },
      ]}
    />
  ),
});
