import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Oficina da Net (anúncio em 22/03/2021). Ficou sem Android 14: recebeu o HyperOS sobre Android 13 (Xataka Android, Notebookcheck).
const PAGE_TITLE = fairPriceTitle("poco-f3");
const PAGE_DESCRIPTION = fairPriceDescription("poco-f3");

export const Route = createFileRoute("/review/poco-f3")({
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
      fairPriceId="poco-f3"
      name="Poco F3"
      launched="março de 2021"
      shortVerdict="Só abaixo de R$ 900, e sabendo que ele não recebe mais versões novas do Android. O Snapdragon 870 ainda é rápido e a tela AMOLED de 120 Hz é boa, mas o Poco F3 parou no Android 13. Para jogar, o Poco X7 Pro novo é bem mais forte e recebe atualizações."
      alternative={{ id: "poco-x7-pro", name: "Poco X7 Pro", reviewPath: "/review/poco-x7-pro" }}
      secondary={{
        id: "moto-g86-5g",
        name: "Moto G86 5G",
        reviewPath: "/review/moto-g86-5g",
        why: "Quer gastar menos? O Moto G86 tem tela pOLED de 120 Hz, IP68/IP69 e carregador na caixa.",
      }}
      specs={[
        ["Processador", "Snapdragon 870 5G"],
        ["Tela", "6,67\" AMOLED • 120 Hz • 900 nits"],
        ["Câmera principal", "48 MP"],
        ["Memória", "6 ou 8 GB de RAM"],
        ["Armazenamento", "128 ou 256 GB"],
        ["Bateria", "4.520 mAh"],
        ["Atualizações", "Sem Android 14: parou no Android 13 (HyperOS)"],
        ["Lançamento", "Março de 2021"],
      ]}
      versus={[
        ["Processador", "Snapdragon 870", "Dimensity 8400-Ultra", "new"],
        ["Bateria", "4.520 mAh", "6.000 mAh", "new"],
        ["Sistema", "Parou no Android 13", "Recebe atualizações", "new"],
        ["Compre se estiver até", "R$ 900", "R$ 2.250", "tie"],
      ]}
      stillGood={[
        "Snapdragon 870 ainda rápido",
        "Tela AMOLED de 120 Hz",
        "Preço baixo nos usados",
      ]}
      whyNot={[
        "Parou no Android 13",
        "Bateria menor que a dos atuais",
        "Sem proteção contra água para imersão",
      ]}
      versionNote={{
        text: "Poco F3 e Poco F3 GT são aparelhos diferentes.",
        proPath: "/review/poco-f5",
        proName: "Poco F5",
      }}
      faq={[
        { question: "O Poco F3 vale a pena em 2026?", answer: "Só abaixo de R$ 900. Ainda é rápido, mas parou no Android 13. Para jogar, o Poco X7 Pro novo é bem mais forte e recebe atualizações." },
        { question: "O Poco F3 ainda recebe atualização?", answer: "Não recebe versões novas do Android: ele ficou sem o Android 14 e recebeu o HyperOS sobre o Android 13." },
        { question: "Poco F3 ainda roda jogos?", answer: "Roda a maioria dos jogos populares. Para os pesados, como Genshin, os Poco atuais com Dimensity 8400 ou 8500 vão muito melhor." },
      ]}
    />
  ),
});
