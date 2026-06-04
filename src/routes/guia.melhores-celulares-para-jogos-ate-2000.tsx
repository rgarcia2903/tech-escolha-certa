import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Battery,
  Check,
  Cpu,
  Gamepad2,
  ShieldCheck,
  Smartphone,
  Trophy,
  X,
  Zap,
} from "lucide-react";
import { Badge, Rating } from "@/components/site/ui";

const CANONICAL =
  "https://techescolhacerta.com.br/guia/melhores-celulares-para-jogos-ate-2000";

export const Route = createFileRoute("/guia/melhores-celulares-para-jogos-ate-2000")({
  head: () => ({
    meta: [
      {
        title:
          "Melhores celulares para jogos até R$ 2.000 em 2026 | Guia completo",
      },
      {
        name: "description",
        content:
          "Veja os melhores celulares para jogos até R$ 2.000 em 2026. Guia com Poco X6, Galaxy M35, Galaxy A35, Redmi Note 13 5G e outras opções para Free Fire, COD Mobile, PUBG e Genshin Impact.",
      },
      {
        name: "keywords",
        content:
          "melhor celular para jogos até 2000, celular gamer até 2000, melhor celular para Free Fire, melhor celular para COD Mobile, celular para Genshin Impact barato, Poco X6, Galaxy M35",
      },
      {
        property: "og:title",
        content: "Melhores celulares para jogos até R$ 2.000 em 2026",
      },
      {
        property: "og:description",
        content:
          "Selecionamos os celulares com melhor desempenho para jogos até R$ 2.000, considerando processador, tela, bateria, aquecimento e custo-benefício.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: CANONICAL },
      {
        property: "og:image",
        content: "https://techescolhacerta.com.br/favicon.png",
      },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Melhores celulares para jogos até R$ 2.000 em 2026",
          description:
            "Guia editorial com os melhores celulares para jogos até R$ 2.000 em 2026.",
          author: {
            "@type": "Organization",
            name: "Tech Escolha Certa",
          },
          publisher: {
            "@type": "Organization",
            name: "Tech Escolha Certa",
          },
          datePublished: "2026-06-02",
          dateModified: "2026-06-02",
          mainEntityOfPage: CANONICAL,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Qual é o melhor celular para jogos até R$ 2.000?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "O Poco X6 5G tende a ser uma das melhores escolhas até R$ 2.000 para quem prioriza desempenho, tela AMOLED 120 Hz, boa fluidez e carregamento rápido.",
              },
            },
            {
              "@type": "Question",
              name: "Celular até R$ 2.000 roda Genshin Impact?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Roda, mas com ajustes gráficos. Modelos como Poco X6 5G e Galaxy M35 5G são boas opções para jogos pesados nessa faixa, mas não entregam a mesma folga de aparelhos mais caros.",
              },
            },
            {
              "@type": "Question",
              name: "O Galaxy A35 é bom para jogos?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sim, o Galaxy A35 é bom para jogos casuais e intermediários. Para jogos pesados, o Poco X6 5G costuma entregar melhor desempenho pelo preço.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: GamingPhonesGuide,
});

const phones = [
  {
    rank: "1º",
    name: "Poco X6 5G",
    badge: "Melhor para jogos",
    rating: 4.7,
    price: "até R$ 2.000",
    image: "/images/products/poco-x6-pro-optimized.webp",
    summary:
      "A melhor escolha para quem quer desempenho em jogos sem passar de R$ 2.000. O conjunto de processador, tela AMOLED 120 Hz e carregamento rápido faz muita diferença no uso real.",
    bestFor: "Free Fire, COD Mobile, PUBG Mobile, Asphalt e Genshin Impact com ajustes.",
    pros: [
      "Ótimo desempenho pelo preço",
      "Tela AMOLED 120 Hz muito boa para jogos",
      "Carregamento rápido de 67 W",
      "Boa fluidez em multitarefa",
    ],
    cons: [
      "Câmeras não são o foco",
      "Pode aquecer em sessões longas",
      "Interface HyperOS pode não agradar todo mundo",
    ],
    cta: "/review/poco-x6-pro",
  },
  {
    rank: "2º",
    name: "Samsung Galaxy M35 5G",
    badge: "Melhor bateria",
    rating: 4.5,
    price: "até R$ 2.000",
    image: "/images/products/galaxy-a35-optimized.webp",
    summary:
      "Boa alternativa para quem joga bastante e precisa de bateria forte. Não é o mais potente da lista, mas entrega equilíbrio, tela boa e autonomia acima da média.",
    bestFor: "Jogos populares, uso intenso, redes sociais, vídeos e longas sessões longe da tomada.",
    pros: [
      "Bateria acima da média",
      "Tela AMOLED 120 Hz",
      "5G",
      "Boa experiência Samsung",
    ],
    cons: [
      "Carregamento mais lento que rivais Xiaomi/Poco",
      "Mais pesado",
      "Desempenho inferior ao Poco X6 em jogos pesados",
    ],
    cta: "/melhores-celulares-samsung",
  },
  {
    rank: "3º",
    name: "Samsung Galaxy A35 5G",
    badge: "Mais equilibrado",
    rating: 4.4,
    price: "até R$ 2.000",
    image: "/images/products/galaxy-a35-optimized.webp",
    summary:
      "Escolha segura para quem quer jogar, mas também valoriza construção, câmera, resistência IP67 e software mais previsível.",
    bestFor: "Jogos casuais, redes sociais, vídeos, uso diário e quem quer celular mais confiável.",
    pros: [
      "IP67 contra água e poeira",
      "Tela Super AMOLED 120 Hz",
      "Boa construção",
      "Software Samsung mais estável",
    ],
    cons: [
      "Não é o melhor em desempenho bruto",
      "Carregamento de 25 W é lento",
      "Não é ideal para jogos pesados no máximo",
    ],
    cta: "/review/galaxy-a35",
  },
  {
    rank: "4º",
    name: "Redmi Note 13 5G",
    badge: "Bom custo-benefício",
    rating: 4.2,
    price: "até R$ 2.000",
    image: "/images/products/redmi-note-13-pro-optimized.webp",
    summary:
      "Boa opção para jogos leves e intermediários, principalmente quando aparece com preço agressivo. A tela AMOLED ajuda bastante na experiência.",
    bestFor: "Free Fire, Roblox, Subway Surfers, jogos competitivos leves e uso comum.",
    pros: [
      "Tela AMOLED 120 Hz",
      "Boa autonomia",
      "Preço competitivo em promoções",
      "5G",
    ],
    cons: [
      "Desempenho abaixo do Poco X6",
      "Câmeras secundárias simples",
      "Não é o mais indicado para jogos pesados",
    ],
    cta: "/review/redmi-note-13-pro",
  },
];

const quickRanking = [
  ["Melhor geral para jogos", "Poco X6 5G"],
  ["Melhor bateria", "Galaxy M35 5G"],
  ["Mais equilibrado", "Galaxy A35 5G"],
  ["Mais barato em promoções", "Redmi Note 13 5G"],
];

const faq = [
  {
    question: "Qual é o melhor celular para jogos até R$ 2.000 em 2026?",
    answer:
      "O Poco X6 5G é a melhor escolha para a maioria das pessoas, porque combina bom processador, tela AMOLED 120 Hz, carregamento rápido e desempenho forte para a faixa de preço.",
  },
  {
    question: "Celular até R$ 2.000 roda Genshin Impact?",
    answer:
      "Sim, mas normalmente com ajustes gráficos. O ideal é priorizar modelos com processador mais forte, boa refrigeração, tela de 120 Hz e pelo menos 8 GB de RAM.",
  },
  {
    question: "Samsung é boa para jogos até R$ 2.000?",
    answer:
      "Sim, principalmente Galaxy A35 e Galaxy M35. Eles não são os campeões de desempenho bruto, mas entregam estabilidade, tela boa, bateria e software mais confiável.",
  },
  {
    question: "O que olhar antes de comprar um celular para jogos?",
    answer:
      "Priorize processador, RAM, armazenamento, tela de 120 Hz, bateria, carregamento e controle de aquecimento. Câmera deve ser prioridade secundária se o foco for jogo.",
  },
];

function GamingPhonesGuide() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <div className="absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-cta/10 blur-[120px]" />
        <div className="absolute -bottom-40 -left-32 h-[26rem] w-[26rem] rounded-full bg-teal/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="cta">Guia de compra</Badge>
                <Badge variant="soft">Celulares para jogos</Badge>
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
                Melhores celulares para jogos até R$ 2.000 em 2026
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Selecionamos os celulares que mais fazem sentido para jogar bem
                sem passar de R$ 2.000. O foco aqui é desempenho real,
                estabilidade, tela, bateria, carregamento e custo-benefício.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                <span>Por Equipe Tech Escolha Certa</span>
                <span>Atualizado em junho de 2026</span>
                <span>Leitura • 8 min</span>
                <span>Análise independente</span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#ranking"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground shadow-soft transition hover:-translate-y-0.5 hover:brightness-105"
                >
                  Ver ranking
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#como-escolher"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-soft transition hover:bg-secondary"
                >
                  Como escolher
                </a>
              </div>
            </div>

            <aside className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-cta/10 text-cta">
                  <Trophy className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Resumo rápido
                  </p>
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    Melhor por perfil
                  </h2>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {quickRanking.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-4 rounded-xl bg-surface px-4 py-3"
                  >
                    <span className="text-sm text-muted-foreground">{label}</span>
                    <strong className="text-right text-sm text-foreground">
                      {value}
                    </strong>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                Preços mudam muito. Antes de comprar, confirme se o modelo está
                realmente abaixo de R$ 2.000 e se a versão tem memória suficiente.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section id="ranking" className="mx-auto max-w-7xl px-6 py-14 lg:px-8 md:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cta">
            Ranking
          </p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
            Top celulares para jogos até R$ 2.000
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            A lista prioriza desempenho real. Câmera, acabamento e marca também
            importam, mas aqui o peso maior está em jogos, fluidez e autonomia.
          </p>
        </div>

        <div className="mt-10 space-y-10">
          {phones.map((phone) => (
            <article
              key={phone.name}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
            >
              <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[280px] bg-surface">
                  <img
                    src={phone.image}
                    alt={phone.name}
                    loading="lazy"
                    className="h-full w-full object-contain bg-surface p-4"
                  />
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-background px-3 py-1 text-xs font-bold text-foreground shadow-soft">
                      {phone.rank}
                    </span>
                    <Badge variant="cta">{phone.badge}</Badge>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground md:text-3xl">
                        {phone.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Faixa indicada: {phone.price}
                      </p>
                    </div>
                    <Rating value={phone.rating} />
                  </div>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    {phone.summary}
                  </p>

                  <div className="mt-5 rounded-xl border border-border bg-surface p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Melhor para
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      {phone.bestFor}
                    </p>
                  </div>

                  <div className="mt-6 grid gap-5 md:grid-cols-2">
                    <div>
                      <p className="text-sm font-bold text-foreground">
                        Pontos fortes
                      </p>
                      <ul className="mt-3 space-y-2">
                        {phone.pros.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2 text-sm text-muted-foreground"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-sm font-bold text-foreground">
                        Pontos de atenção
                      </p>
                      <ul className="mt-3 space-y-2">
                        {phone.cons.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2 text-sm text-muted-foreground"
                          >
                            <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      to={phone.cta}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground shadow-soft transition hover:-translate-y-0.5 hover:brightness-105"
                    >
                      Ver análise
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    <Link
                      to="/ofertas"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
                    >
                      Ver ofertas
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="como-escolher" className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
              Critérios
            </p>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
              Como escolher um celular para jogos até R$ 2.000
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Para jogar bem, não escolha apenas pela câmera ou pela quantidade
              de megapixels. O que mais pesa é processador, tela, bateria,
              carregamento e controle de aquecimento.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <CriteriaCard
              icon={<Cpu className="h-5 w-5" />}
              title="Processador"
              text="É o item mais importante. Quanto melhor o chip, mais estável será o FPS nos jogos."
            />
            <CriteriaCard
              icon={<Smartphone className="h-5 w-5" />}
              title="Tela"
              text="AMOLED e 120 Hz deixam jogos, rolagem e animações mais suaves."
            />
            <CriteriaCard
              icon={<Battery className="h-5 w-5" />}
              title="Bateria"
              text="Procure pelo menos 5.000 mAh para jogar sem depender tanto da tomada."
            />
            <CriteriaCard
              icon={<Zap className="h-5 w-5" />}
              title="Carregamento"
              text="Carga rápida ajuda muito para quem joga bastante e precisa recuperar bateria rápido."
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cta">
              Perguntas frequentes
            </p>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
              Dúvidas antes de comprar
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Respostas rápidas para escolher um celular gamer barato sem cair
              em propaganda exagerada.
            </p>
          </div>

          <div className="space-y-3">
            {faq.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-border bg-card p-5 shadow-soft"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-semibold text-foreground">
                  {item.question}
                  <Gamepad2 className="h-5 w-5 shrink-0 text-cta transition group-open:rotate-12" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14 lg:px-8 md:pb-20">
        <div className="rounded-2xl border border-cta/30 bg-card p-6 shadow-soft ring-1 ring-cta/10 md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-teal" />
                <h2 className="text-2xl font-bold text-foreground">
                  Conclusão: qual comprar?
                </h2>
              </div>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Para a maioria das pessoas, o Poco X6 5G é a melhor escolha para
                jogos até R$ 2.000. Se você prefere bateria e estabilidade,
                Galaxy M35 é uma boa alternativa. Se quer uma experiência mais
                equilibrada e segura, Galaxy A35 também faz sentido.
              </p>
            </div>

            <Link
              to="/ofertas"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground shadow-soft transition hover:-translate-y-0.5 hover:brightness-105"
            >
              Ver ofertas
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function CriteriaCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string; 
}) {
  return (
    <article className="rounded-2xl border border-border bg-card p-6 shadow-soft">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-cta/10 text-cta">
        {icon}
      </div>
      <h3 className="mt-5 text-xl font-bold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </article>
  );
}
