import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Battery,
  Camera,
  Check,
  Cpu,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Trophy,
  X,
  Zap,
} from "lucide-react";
import { Badge, Rating } from "@/components/site/ui";

const CANONICAL =
  "https://techescolhacerta.com.br/guia/melhores-celulares-ate-3500-reais";

export const Route = createFileRoute("/guia/melhores-celulares-ate-3500-reais")({
  head: () => ({
    meta: [
      {
        title:
          "Melhores celulares até R$ 3.500 em 2026 | Guia completo",
      },
      {
        name: "description",
        content:
          "Veja os melhores celulares até R$ 3.500 em 2026. Guia com Galaxy S24, iPhone 15, Edge 50 Pro, Galaxy A55 e Poco X6 Pro para escolher sem errar.",
      },
      {
        name: "keywords",
        content:
          "melhores celulares até 3500, melhor celular até 3500, Galaxy S24, iPhone 15, Edge 50 Pro, Galaxy A55, Poco X6 Pro, celular premium custo-benefício",
      },
      {
        property: "og:title",
        content: "Melhores celulares até R$ 3.500 em 2026",
      },
      {
        property: "og:description",
        content:
          "Selecionamos os celulares mais fortes até R$ 3.500 considerando câmera, desempenho, tela, bateria, acabamento e custo-benefício.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: CANONICAL },
      {
        property: "og:image",
        content: "https://techescolhacerta.com.br/images/products/phones-hero-optimized.webp",
      },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Melhores celulares até R$ 3.500 em 2026",
          description:
            "Guia editorial dos melhores celulares até R$ 3.500 para comprar em 2026.",
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
              name: "Qual é o melhor celular até R$ 3.500 em 2026?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Para a maioria das pessoas, o Galaxy S24 é a melhor escolha até R$ 3.500 quando aparece em promoção, por entregar câmera, desempenho premium, tela excelente e muitos anos de atualização.",
              },
            },
            {
              "@type": "Question",
              name: "Qual celular até R$ 3.500 é melhor para jogos?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "O Poco X6 Pro é uma das melhores escolhas para jogos até R$ 3.500 por causa do processador Dimensity 8300-Ultra, tela AMOLED 120 Hz e carregamento rápido.",
              },
            },
            {
              "@type": "Question",
              name: "iPhone 15 vale a pena até R$ 3.500?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Vale se você quer iOS, câmera consistente, bom desempenho e maior integração com o ecossistema Apple. Para tela 120 Hz e carregamento rápido, há opções Android melhores na faixa.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: BestPhones3500Guide,
});

const phones = [
  {
    rank: "1º",
    name: "Galaxy S24",
    badge: "Melhor geral",
    rating: 4.8,
    price: "até R$ 3.500 em promoção",
    image: "/images/products/galaxy-s24-optimized.webp",
    summary:
      "O Galaxy S24 é a melhor escolha quando aparece abaixo de R$ 3.500. Ele entrega experiência premium, ótima câmera, desempenho forte, tela excelente, recursos de IA e vários anos de atualizações.",
    bestFor:
      "Quem quer um celular compacto, premium, com câmera confiável, ótimo acabamento e suporte de longo prazo.",
    pros: [
      "Câmeras mais consistentes da lista",
      "Tela Dynamic AMOLED de alto nível",
      "Desempenho premium",
      "Galaxy AI e recursos avançados",
      "Boa política de atualizações",
    ],
    cons: [
      "Bateria menor que rivais maiores",
      "Preço varia bastante",
      "Carregamento poderia ser mais rápido",
    ],
    cta: "/review/galaxy-s24",
  },
  {
    rank: "2º",
    name: "Poco X6 Pro",
    badge: "Melhor desempenho",
    rating: 4.7,
    price: "até R$ 2.000",
    image: "/images/products/poco-x6-pro-optimized.webp",
    summary:
      "O Poco X6 Pro é a escolha mais forte para quem quer desempenho, jogos e carregamento rápido entregando desempenho acima da média mesmo custando menos que muitos intermediários premium.",
    bestFor:
      "Quem joga, usa muitos apps, quer fluidez e prioriza potência acima de câmera.",
    pros: [
      "Processador Dimensity 8300-Ultra",
      "Excelente para jogos",
      "Tela AMOLED 120 Hz",
      "Carregamento rápido de 67 W",
      "Ótimo custo-benefício",
    ],
    cons: [
      "Câmeras abaixo do Galaxy S24",
      "HyperOS pode dividir opiniões",
      "Construção menos premium",
    ],
    cta: "/review/poco-x6-pro",
  },
  {
    rank: "3º",
    name: "iPhone 15",
    badge: "Melhor iOS",
    rating: 4.6,
    price: "até R$ 3.500 em promoção",
    image: "/images/products/iphone-15-optimized.webp",
    summary:
      "O iPhone 15 é a melhor opção para quem quer entrar ou continuar no iOS com bom desempenho, câmera confiável, acabamento premium e excelente integração com o ecossistema Apple.",
    bestFor:
      "Quem prefere iOS, usa outros produtos Apple e quer uma experiência simples, estável e duradoura.",
    pros: [
      "Chip A16 Bionic ainda muito forte",
      "Câmera principal de 48 MP consistente",
      "Excelente acabamento",
      "Ótima gravação de vídeo",
      "Boa vida útil no ecossistema Apple",
    ],
    cons: [
      "Tela de 60 Hz",
      "Carregamento mais lento",
      "Pode custar mais que Androids mais completos",
    ],
    cta: "/review/iphone-15",
  },
  {
    rank: "4º",
    name: "Edge 50 Pro",
    badge: "Carregamento rápido",
    rating: 4.5,
    price: "até R$ 3.000",
    image: "/images/products/edge-50-pro-optimized.webp",
    summary:
      "O Edge 50 Pro é uma alternativa forte para quem quer design premium, tela de ótima qualidade, carregamento ultrarrápido e uma experiência Android mais limpa.",
    bestFor:
      "Quem quer tela bonita, carregamento muito rápido, design premium e boa experiência multimídia.",
    pros: [
      "Carregamento TurboPower 125 W",
      "Tela pOLED de excelente qualidade",
      "Design premium",
      "Boa câmera principal",
      "Interface mais limpa que muitos rivais",
    ],
    cons: [
      "Atualizações menos fortes que Samsung e Apple",
      "Desempenho abaixo do Poco X6 Pro",
      "Preço precisa estar competitivo",
    ],
    cta: "/melhores-celulares-custo-beneficio",
  },
  {
    rank: "5º",
    name: "Galaxy A55 5G",
    badge: "Melhor equilíbrio",
    rating: 4.5,
    price: "até R$ 2.500",
    image: "/images/products/galaxy-a55-optimized.webp",
    summary:
      "O Galaxy A55 é uma compra segura para quem não precisa de topo de linha, mas quer construção premium, IP67, boa tela e experiência Samsung confiável.",
    bestFor:
      "Quem quer equilíbrio, durabilidade, boa câmera e menor risco de arrependimento.",
    pros: [
      "Construção em vidro e alumínio",
      "IP67 contra água e poeira",
      "Tela Super AMOLED 120 Hz",
      "Boa câmera principal",
      "Software Samsung confiável",
    ],
    cons: [
      "Desempenho inferior ao Poco X6 Pro",
      "Carregamento de 25 W",
      "Não é compacto como o S24",
    ],
    cta: "/review/galaxy-a55",
  },
];

const quickRanking = [
  ["Melhor geral", "Galaxy S24"],
  ["Melhor desempenho", "Poco X6 Pro"],
  ["Melhor iOS", "iPhone 15"],
  ["Carregamento mais rápido", "Edge 50 Pro"],
  ["Mais equilibrado", "Galaxy A55"],
];

const faq = [
  {
    question: "Qual celular até R$ 3.500 comprar em 2026?",
    answer:
      "O Galaxy S24 é a melhor escolha se estiver abaixo de R$ 3.500. Para desempenho e jogos, o Poco X6 Pro entrega mais potência por menos. Para iOS, o iPhone 15 é a opção mais segura.",
  },
  {
    question: "Poco X6 Pro ou Galaxy S24?",
    answer:
      "O Poco X6 Pro é melhor para desempenho por real investido. O Galaxy S24 é melhor em câmera, acabamento, software, recursos premium e atualizações.",
  },
  {
    question: "iPhone 15 ou Galaxy S24?",
    answer:
      "Escolha o iPhone 15 se você prefere iOS e o ecossistema Apple. Escolha o Galaxy S24 se quer tela 120 Hz, recursos de IA, câmera mais versátil e melhor custo-benefício em promoção.",
  },
  {
    question: "Edge 50 Pro vale a pena até R$ 3.500?",
    answer:
      "Vale se estiver com bom preço e se você prioriza tela, design e carregamento ultrarrápido. Para atualizações e câmera mais consistente, Galaxy S24 costuma ser mais seguro.",
  },
];

function BestPhones3500Guide() {
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
                <Badge variant="soft">Intermediários premium</Badge>
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
                Melhores celulares até R$ 3.500 em 2026
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Selecionamos os celulares que mais fazem sentido para quem quer
                subir de nível sem pagar preço de topo de linha caro. Aqui entram
                modelos com câmera melhor, desempenho forte, tela premium e mais
                vida útil.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                <span>Por Equipe Tech Escolha Certa</span>
                <span>Atualizado em junho de 2026</span>
                <span>Leitura • 9 min</span>
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
                Esta faixa muda muito com promoções. Se o Galaxy S24 estiver
                abaixo de R$ 3.500, ele costuma ser a compra mais forte.
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
            Top celulares até R$ 3.500
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            A lista prioriza modelos que entregam salto real de qualidade em
            câmera, desempenho, tela, acabamento e vida útil.
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
              Como escolher um celular até R$ 3.500
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Nessa faixa, o ideal é evitar modelos básicos caros. Procure
              aparelhos que realmente entreguem câmera melhor, processador mais
              forte, tela superior e maior vida útil.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <CriteriaCard
              icon={<Camera className="h-5 w-5" />}
              title="Câmera"
              text="Se fotografia importa, o Galaxy S24 e o iPhone 15 são os mais consistentes da lista."
            />
            <CriteriaCard
              icon={<Cpu className="h-5 w-5" />}
              title="Desempenho"
              text="Para jogos e uso pesado, Poco X6 Pro entrega muita potência pelo preço."
            />
            <CriteriaCard
              icon={<Smartphone className="h-5 w-5" />}
              title="Tela"
              text="Priorize AMOLED 120 Hz, bom brilho e boa calibração de cores."
            />
            <CriteriaCard
              icon={<ShieldCheck className="h-5 w-5" />}
              title="Vida útil"
              text="Atualizações, resistência e construção fazem diferença no longo prazo."
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
          </div>

          <div className="space-y-3">
            {faq.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-border bg-card p-5 shadow-soft"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-semibold text-foreground">
                  {item.question}
                  <Sparkles className="h-5 w-5 shrink-0 text-cta transition group-open:rotate-12" />
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
                <Zap className="h-6 w-6 text-cta" />
                <h2 className="text-2xl font-bold text-foreground">
                  Conclusão: qual comprar?
                </h2>
              </div>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Se encontrar o Galaxy S24 abaixo de R$ 3.500, ele é a melhor
                compra geral. Se o foco for desempenho e jogos, o Poco X6 Pro é
                mais agressivo. Se você quer iOS, o iPhone 15 é a escolha mais
                segura. Se quer carregamento ultrarrápido e tela bonita, o Edge
                50 Pro também merece atenção.
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
