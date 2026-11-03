import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Oficina da Net (anúncio em 20/02/2019, R$ 4.999). Sem Android 13 (Tecnoblog); a Samsung encerrou as atualizações da linha S10 (How-To Geek). Processador omitido: a ficha cita Snapdragon 855, mas a versão vendida no Brasil usava outro chip.
const PAGE_TITLE = fairPriceTitle("galaxy-s10");
const PAGE_DESCRIPTION = fairPriceDescription("galaxy-s10");

export const Route = createFileRoute("/review/galaxy-s10")({
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
      fairPriceId="galaxy-s10"
      name="Galaxy S10"
      launched="fevereiro de 2019"
      shortVerdict="Não recomendamos, a não ser abaixo de R$ 600. O Galaxy S10 parou no Android 12 e a Samsung já encerrou as atualizações da linha, inclusive as de segurança. A tela e as câmeras ainda são boas, mas a bateria de 3.400 mAh é pequena. Por pouco mais, o Galaxy A36 novo tem atualizações até 2031."
      alternative={{ id: "galaxy-a36-5g", name: "Galaxy A36 5G", reviewPath: "/review/galaxy-a36-5g" }}
      secondary={{
        id: "galaxy-s25-fe",
        name: "Galaxy S25 FE",
        reviewPath: "/review/galaxy-s25-fe",
        why: "Quer continuar na linha S, com teleobjetiva? O Galaxy S25 FE tem atualizações até 2032.",
      }}
      specs={[
        ["Tela", "6,1\" Dynamic AMOLED (3040 × 1440) • Gorilla Glass 6"],
        ["Câmeras traseiras", "12 MP + tele 12 MP + ultra-angular 16 MP"],
        ["Memória", "8 GB de RAM"],
        ["Armazenamento", "128 ou 512 GB, com microSD"],
        ["Bateria", "3.400 mAh"],
        ["Proteção", "IP68"],
        ["Atualizações", "Encerradas: última versão foi o Android 12"],
        ["Lançamento", "Fevereiro de 2019 (R$ 4.999)"],
      ]}
      versus={[
        ["Sistema", "Parou no Android 12", "Atualizações até 2031", "new"],
        ["Bateria", "3.400 mAh", "5.000 mAh", "new"],
        ["Teleobjetiva", "Sim", "Não tem", "old"],
        ["Tela", "60 Hz", "120 Hz", "new"],
        ["Compre se estiver até", "R$ 600", "R$ 1.350", "tie"],
      ]}
      stillGood={[
        "Tela AMOLED de alta resolução",
        "Teleobjetiva e ultra-angular",
        "IP68 e cartão de memória",
      ]}
      whyNot={[
        "Sem atualizações, nem de segurança",
        "Bateria de 3.400 mAh, pequena para hoje",
        "Em usados, a bateria quase sempre está gasta",
      ]}
      versionNote={{
        text: "Galaxy S10e, S10, S10+ e S10 5G são aparelhos diferentes; todos pararam no Android 12.",
        proPath: "/review/galaxy-s21",
        proName: "Galaxy S21",
      }}
      faq={[
        { question: "O Galaxy S10 vale a pena em 2026?", answer: "Só abaixo de R$ 600. Ele parou no Android 12 e não recebe mais atualizações, nem de segurança. Por pouco mais, o Galaxy A36 novo tem atualizações até 2031." },
        { question: "O Galaxy S10 ainda recebe atualização?", answer: "Não. A linha S10 não recebeu o Android 13, e a Samsung encerrou as atualizações de segurança." },
        { question: "Galaxy S10 ou Galaxy A36?", answer: "O A36: tela de 120 Hz, bateria de 5.000 mAh e atualizações até 2031. O S10 só ganha na teleobjetiva." },
      ]}
    />
  ),
});
