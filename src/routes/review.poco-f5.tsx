import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Oficina da Net (anúncio em 09/05/2023). Atualizações: as fontes divergem sobre o Android 16 (droid.tools publicou as duas versões), então a página não afirma a última versão.
const PAGE_TITLE = fairPriceTitle("poco-f5");
const PAGE_DESCRIPTION = fairPriceDescription("poco-f5");

export const Route = createFileRoute("/review/poco-f5")({
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
      fairPriceId="poco-f5"
      name="Poco F5"
      launched="maio de 2023"
      shortVerdict="Só abaixo de R$ 1.400. O Snapdragon 7+ Gen 2 ainda é forte para jogos e a tela AMOLED de 120 Hz é boa, mas o Poco F5 está no fim do ciclo de atualizações da Xiaomi. Por pouco mais, o Poco X7 Pro novo tem processador mais forte e bateria de 6.000 mAh."
      alternative={{ id: "poco-x7-pro", name: "Poco X7 Pro", reviewPath: "/review/poco-x7-pro" }}
      secondary={{
        id: "poco-x8-pro",
        name: "Poco X8 Pro",
        reviewPath: "/review/poco-x8-pro",
        why: "Quer o máximo para jogos? O Poco X8 Pro tem Dimensity 8500 Ultra e 6.500 mAh.",
      }}
      specs={[
        ["Processador", "Snapdragon 7+ Gen 2 (4 nm)"],
        ["Tela", "6,67\" AMOLED • 120 Hz • 1.000 nits"],
        ["Câmera principal", "64 MP com OIS"],
        ["Memória", "8 ou 12 GB de RAM"],
        ["Armazenamento", "256 GB"],
        ["Bateria", "5.000 mAh"],
        ["Proteção", "IP53 (respingos)"],
        ["Lançamento", "Maio de 2023"],
      ]}
      versus={[
        ["Processador", "Snapdragon 7+ Gen 2", "Dimensity 8400-Ultra", "new"],
        ["Bateria", "5.000 mAh", "6.000 mAh", "new"],
        ["Proteção", "IP53", "IP68", "new"],
        ["Compre se estiver até", "R$ 1.400", "R$ 2.250", "tie"],
      ]}
      stillGood={[
        "Processador ainda forte para jogos",
        "Tela AMOLED de 120 Hz",
        "Câmera com OIS",
      ]}
      whyNot={[
        "No fim do ciclo de atualizações",
        "Só IP53 (respingos)",
        "Novo, costuma custar quase o mesmo que o X7 Pro",
      ]}
      versionNote={{
        text: "Poco F5 e Poco F5 Pro são aparelhos diferentes: o Pro tem Snapdragon 8+ Gen 1 e tela 2K.",
        proPath: "/review/poco-f6",
        proName: "Poco F6",
      }}
      faq={[
        { question: "O Poco F5 vale a pena em 2026?", answer: "Só abaixo de R$ 1.400. Ainda é forte, mas está no fim do ciclo de atualizações. Por pouco mais, o Poco X7 Pro novo é melhor." },
        { question: "Poco F5 ou Poco X7 Pro?", answer: "O X7 Pro: processador mais forte, bateria de 6.000 mAh, IP68 e mais anos de atualização. O F5 só compensa bem mais barato." },
        { question: "O Poco F5 roda Genshin Impact?", answer: "Roda, com gráficos médios. Para jogar com folga, o Poco X7 Pro e o X8 Pro são melhores." },
      ]}
    />
  ),
});
