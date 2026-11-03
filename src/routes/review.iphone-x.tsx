import { createFileRoute } from "@tanstack/react-router";
import { OlderModelVerdict } from "@/components/site/OlderModelVerdict";
import { fairPriceDescription, fairPriceTitle } from "@/lib/fair-prices";

// Ficha: Oficina da Net (anúncio em 12/09/2017). O iOS 17 exige iPhone XR/XS ou mais novo: o X parou no iOS 16 (9to5Mac, Apple).
const PAGE_TITLE = fairPriceTitle("iphone-x");
const PAGE_DESCRIPTION = fairPriceDescription("iphone-x");

export const Route = createFileRoute("/review/iphone-x")({
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
      fairPriceId="iphone-x"
      name="iPhone X"
      launched="setembro de 2017"
      shortVerdict="Não recomendamos, a não ser abaixo de R$ 500 e para uso muito simples. O iPhone X parou no iOS 16 em 2022 e não recebe versões novas do sistema, o que já afeta apps e segurança. Se quer iPhone, o 16e é o mais barato que vale a pena; se o orçamento é curto, um Android novo dura muito mais."
      alternative={{ id: "iphone-16e", name: "iPhone 16e", reviewPath: "/review/iphone-16e" }}
      secondary={{
        id: "galaxy-a36-5g",
        name: "Galaxy A36 5G",
        reviewPath: "/review/galaxy-a36-5g",
        why: "Orçamento curto? O Galaxy A36 novo custa bem menos que um iPhone atual e tem atualizações até 2031.",
      }}
      specs={[
        ["Chip", "Apple A11 Bionic"],
        ["Tela", "5,8\" OLED (2436 × 1125) • 60 Hz"],
        ["Câmeras traseiras", "12 MP + teleobjetiva 12 MP (2x)"],
        ["Memória", "3 GB de RAM"],
        ["Proteção", "IP67"],
        ["Atualizações", "Encerradas: última versão foi o iOS 16"],
        ["Lançamento", "Setembro de 2017"],
      ]}
      versus={[
        ["Chip", "A11 (2017)", "A18 (2025)", "new"],
        ["Sistema", "Parou no iOS 16", "iOS atual", "new"],
        ["Teleobjetiva", "Sim (2x)", "Não tem", "old"],
        ["Proteção", "IP67", "IP68", "new"],
        ["Compre se estiver até", "R$ 500", "R$ 3.300", "tie"],
      ]}
      stillGood={[
        "Tela OLED e Face ID",
        "Teleobjetiva de 2x",
        "Acabamento em aço e vidro",
      ]}
      whyNot={[
        "Parou no iOS 16: sem versões novas do sistema",
        "Apps de banco e mensagens tendem a deixar de funcionar com o tempo",
        "Em usados, a bateria quase sempre está gasta",
      ]}
      versionNote={{
        text: "iPhone X, XS, XS Max e XR são aparelhos diferentes. O XS e o XR receberam duas versões do iOS a mais (até o iOS 18).",
        proPath: "/review/iphone-xs",
        proName: "iPhone XS",
      }}
      faq={[
        { question: "O iPhone X vale a pena em 2026?", answer: "Só abaixo de R$ 500 e para uso simples. Ele parou no iOS 16 e não recebe versões novas do sistema. Se quer iPhone, o 16e é o mais barato que vale a pena." },
        { question: "O iPhone X ainda recebe atualização?", answer: "Não recebe versões novas: o iOS 17 já não foi para o iPhone X. A última versão dele é o iOS 16." },
        { question: "iPhone X ou iPhone XR?", answer: "O XR, se o preço for parecido: ele recebeu duas versões do iOS a mais (até o iOS 18) e tem bateria maior. Os dois já estão fora das versões novas." },
      ]}
    />
  ),
});
