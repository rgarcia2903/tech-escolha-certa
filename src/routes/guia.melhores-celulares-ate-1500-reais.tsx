import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Award,
  Battery,
  Camera,
  Check,
  Gamepad2,
  Wallet,
  Trophy,
  X,
  Sparkles,
  ChevronDown,
  ShieldCheck,
  CalendarDays,
  Clock,
  User,
} from "lucide-react";
import { Badge, Rating } from "@/components/site/ui";

const CANONICAL =
  "https://techescolhacerta.com.br/melhores-celulares-ate-1500";

export const Route = createFileRoute("/guia/melhores-celulares-ate-1500-reais")({
  head: () => ({
    meta: [
      {
        title:
          "Melhores celulares até 1500 reais em 2026 | Guia completo",
      },
      {
        name: "description",
        content:
          "Guia dos melhores celulares até 1500 reais em 2026: modelos com boa câmera, bateria forte, tela de qualidade e bom custo-benefício para comprar sem errar.",
      },
      {
        name: "keywords",
        content:
          "melhores celulares até 1500 reais, melhor celular até 1500, celular custo benefício 2026, Redmi Note 13, Galaxy A25, Moto G84, Galaxy M35, Poco M6 Pro",
      },
      {
        property: "og:title",
        content: "Melhores celulares até 1500 reais em 2026",
      },
      {
        property: "og:description",
        content:
          "Selecionamos os celulares mais interessantes até R$ 1.500 para quem quer economizar sem abrir mão de tela, bateria e desempenho.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: CANONICAL },
      {
        property: "og:image",
        content:
          "https://techescolhacerta.com.br/favicon.png",
      },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: "Melhores celulares até 1500 reais em 2026",
          description:
            "Guia editorial dos melhores celulares custo-benefício de 2026 até R$ 1.500.",
          author: { "@type": "Organization", name: "Tech Escolha Certa" },
          datePublished: "2026-06-01",
          dateModified: "2026-06-01",
          image:
            "https://techescolhacerta.com.br/favicon.png",
        }),
      },
    ],
  }),
  component: GuidePage,
});

type Pick = {
  id: string;
  category: string;
  icon: typeof Award;
  badge: { variant: "cta" | "teal" | "default"; label: string };
  name: string;
  image: string;
  rating: number;
  price: string;
  short: string;
  review: string;
  profile: string;
  pros: string[];
  cons: string[];
};

const PICKS: Pick[] = [
  {
    id: "melhor-geral",
    category: "Melhor escolha geral",
    icon: Award,
    badge: { variant: "cta", label: "Recomendado" },
    name: "Samsung Galaxy A25 5G",
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1200&q=80",
    rating: 4.6,
    price: "até R$ 1.500",
    short:
      "A escolha mais equilibrada da faixa: tela AMOLED 120 Hz, 5G, boa câmera principal e experiência Samsung mais completa.",
    review:
      "O Galaxy A25 5G é uma das escolhas mais seguras para quem quer gastar até R$ 1.500. Ele entrega tela Super AMOLED de 120 Hz, desempenho suficiente para redes sociais, vídeos, banco, mapas e jogos leves, além de câmera principal competente para fotos do dia a dia. O grande diferencial está no conjunto: interface estável, bom suporte de atualizações e acabamento mais confiável que muitos rivais da mesma faixa.",
    profile:
      "Quem quer um celular equilibrado, confiável e com boa tela para usar por vários anos.",
    pros: [
      "Tela Super AMOLED 120 Hz",
      "Boa câmera principal para o preço",
      "5G",
      "Interface Samsung madura",
    ],
    cons: [
      "Carregamento poderia ser mais rápido",
      "Não é o melhor para jogos pesados",
    ],
  },
  {
    id: "melhor-custo-beneficio",
    category: "Melhor custo-benefício",
    icon: Wallet,
    badge: { variant: "teal", label: "Custo-benefício" },
    name: "Redmi Note 13 4G",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
    rating: 4.5,
    price: "até R$ 1.500",
    short:
      "Uma das melhores compras para quem prioriza tela AMOLED, bateria forte e preço agressivo.",
    review:
      "O Redmi Note 13 4G costuma ser muito competitivo abaixo de R$ 1.500. Ele se destaca pela tela AMOLED de 120 Hz, bateria de longa duração e carregamento rápido. É um aparelho excelente para consumo de conteúdo, WhatsApp, Instagram, YouTube, navegação e uso comum. Para quem não faz questão de 5G, pode entregar mais sensação de fluidez e tela melhor que muitos modelos básicos vendidos na mesma faixa.",
    profile:
      "Quem quer gastar menos e ainda levar tela bonita, boa bateria e uso diário fluido.",
    pros: [
      "Tela AMOLED 120 Hz",
      "Boa autonomia de bateria",
      "Carregamento rápido",
      "Preço geralmente competitivo",
    ],
    cons: [
      "Não tem 5G nesta versão",
      "Câmeras secundárias simples",
    ],
  },
  {
    id: "melhor-bateria",
    category: "Melhor bateria",
    icon: Battery,
    badge: { variant: "default", label: "Bateria" },
    name: "Samsung Galaxy M35 5G",
    image:
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=1200&q=80",
    rating: 4.4,
    price: "quando abaixo de R$ 1.500",
    short:
      "Ideal para quem quer bateria acima da média, tela AMOLED e 5G sem passar do orçamento.",
    review:
      "O Galaxy M35 5G é uma alternativa forte quando aparece em promoção abaixo de R$ 1.500. O destaque é a bateria grande, que tende a aguentar um dia intenso com mais tranquilidade. Ele também traz tela AMOLED, 5G e desempenho adequado para rotina. É uma compra interessante para quem passa muito tempo fora de casa e prefere autonomia a design fino.",
    profile:
      "Quem trabalha fora, usa muito redes sociais, mapas, vídeos e não quer depender de tomada.",
    pros: [
      "Bateria acima da média",
      "Tela AMOLED",
      "5G",
      "Bom pacote para uso diário",
    ],
    cons: [
      "Pode ser mais pesado",
      "Vale mais quando está em promoção",
    ],
  },
  {
    id: "melhor-para-jogos-leves",
    category: "Melhor para jogos leves",
    icon: Gamepad2,
    badge: { variant: "teal", label: "Desempenho" },
    name: "Poco M6 Pro",
    image:
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=1200&q=80",
    rating: 4.3,
    price: "até R$ 1.500",
    short:
      "Boa opção para quem quer desempenho honesto, tela fluida e carregamento rápido gastando pouco.",
    review:
      "O Poco M6 Pro entra como opção interessante para quem quer um celular barato com boa fluidez. Ele não é um aparelho gamer pesado, mas roda bem jogos leves e populares com ajustes moderados. Também chama atenção pelo carregamento rápido e pela tela de boa qualidade. É uma escolha mais indicada para quem aceita abrir mão de 5G em troca de desempenho e preço.",
    profile:
      "Quem joga casualmente, usa bastante redes sociais e quer resposta rápida no dia a dia.",
    pros: [
      "Boa fluidez pelo preço",
      "Carregamento rápido",
      "Tela agradável para vídeos e jogos",
      "Preço competitivo",
    ],
    cons: [
      "Não é ideal para jogos pesados",
      "Pode não ter 5G dependendo da versão",
    ],
  },
  {
    id: "melhor-camera",
    category: "Melhor para fotos simples",
    icon: Camera,
    badge: { variant: "default", label: "Câmera" },
    name: "Motorola Moto G84",
    image:
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=1200&q=80",
    rating: 4.2,
    price: "quando abaixo de R$ 1.500",
    short:
      "Uma alternativa interessante quando aparece em promoção, com boa tela, design leve e câmera principal com OIS.",
    review:
      "O Moto G84 continua sendo uma opção interessante quando encontrado abaixo de R$ 1.500. Ele tem design leve, boa tela pOLED e câmera principal com estabilização óptica, algo importante para fotos com menos tremido. O desempenho é suficiente para uso comum e a interface da Motorola agrada quem prefere uma experiência mais limpa.",
    profile:
      "Quem quer um celular leve, bonito, com boa tela e câmera principal estável para fotos do cotidiano.",
    pros: [
      "Tela pOLED de boa qualidade",
      "Câmera principal com OIS",
      "Design leve",
      "Interface limpa",
    ],
    cons: [
      "Depende muito do preço promocional",
      "Atualizações costumam ser menos fortes que Samsung",
    ],
  },
];

const QUICK_RANKING = [
  ["Melhor geral", "Galaxy A25 5G"],
  ["Melhor custo-benefício", "Redmi Note 13 4G"],
  ["Melhor bateria", "Galaxy M35 5G"],
  ["Melhor para jogos leves", "Poco M6 Pro"],
  ["Melhor câmera simples", "Moto G84"],
];

const FAQS = [
  {
    question: "Qual é o melhor celular até R$ 1.500 em 2026?",
    answer:
      "Para a maioria das pessoas, o Galaxy A25 5G é a escolha mais equilibrada até R$ 1.500 por combinar tela AMOLED 120 Hz, 5G, boa câmera principal e experiência Samsung mais madura.",
  },
  {
    question: "Vale a pena comprar celular Xiaomi até R$ 1.500?",
    answer:
      "Vale, principalmente quando o foco é tela, bateria e carregamento rápido. O Redmi Note 13 4G é uma boa opção, mas quem faz questão de 5G deve comparar com modelos Samsung ou Motorola.",
  },
  {
    question: "Celular até R$ 1.500 roda jogos?",
    answer:
      "Roda jogos leves e populares, como Free Fire, Roblox, Subway Surfers e alguns jogos competitivos com gráficos reduzidos. Para jogos pesados, é melhor subir para modelos como Poco X6 Pro ou Galaxy A55.",
  },
  {
    question: "O que priorizar em um celular até R$ 1.500?",
    answer:
      "Priorize tela AMOLED, pelo menos 6 GB de RAM, 128 GB ou 256 GB de armazenamento, bateria de 5.000 mAh, boa política de atualizações e câmera principal com boa estabilização.",
  },
];

function GuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
    return () => document.documentElement.classList.remove("scroll-smooth");
  }, []);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <section className="relative overflow-hidden bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <Badge variant="teal">Guia de compra</Badge>
                <span className="inline-flex items-center gap-1">
                  <CalendarDays className="h-3.5 w-3.5" />
                  Atualizado em junho de 2026
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  9 min de leitura
                </span>
                <span className="inline-flex items-center gap-1">
                  <User className="h-3.5 w-3.5" />
                  Tech Escolha Certa
                </span>
              </div>

              <h1 className="mt-6 font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                Melhores celulares até R$ 1.500 em 2026
              </h1>

              <p className="mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                Selecionamos os celulares que fazem mais sentido para quem quer
                gastar até R$ 1.500 sem cair em modelos fracos. O foco aqui é
                equilíbrio: tela boa, bateria forte, desempenho honesto, câmera
                confiável e bom custo-benefício.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#ranking"
                  className="inline-flex items-center gap-2 rounded-lg bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground shadow-soft transition-all hover:brightness-105 hover:-translate-y-0.5"
                >
                  Ver ranking
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#como-escolher"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-soft transition-all hover:bg-surface"
                >
                  Como escolher
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-elevated">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cta/10 text-cta">
                  <Trophy className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Resumo rápido
                  </span>
                  <h2 className="font-heading text-2xl font-bold">
                    Escolha certa por perfil
                  </h2>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {QUICK_RANKING.map(([label, model]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-4 rounded-xl bg-surface/70 px-4 py-3"
                  >
                    <span className="text-sm text-muted-foreground">{label}</span>
                    <span className="text-sm font-semibold text-foreground text-right">
                      {model}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-xs text-muted-foreground leading-relaxed">
                Os preços variam bastante. A recomendação é usar esta lista como
                referência editorial e conferir a oferta atual antes de comprar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="ranking" className="mx-auto max-w-7xl px-6 lg:px-8 py-14 md:py-20">
        <div className="mb-10 max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cta">
            Ranking
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold">
            Top celulares até R$ 1.500
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A lista abaixo prioriza aparelhos que entregam boa experiência real
            pelo preço. Não é só ficha técnica: consideramos equilíbrio, risco
            de compra, vida útil e facilidade de recomendação.
          </p>
        </div>

        <div className="space-y-12">
          {PICKS.map((pick) => (
            <PickCard key={pick.id} pick={pick} />
          ))}
        </div>
      </section>

      <section id="como-escolher" className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
              Guia rápido
            </span>
            <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold">
              Como escolher um celular até R$ 1.500
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Nessa faixa de preço, o melhor celular não é necessariamente o que
              tem mais megapixels ou mais memória no anúncio. O ideal é buscar o
              conjunto mais equilibrado.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <CriteriaCard
              icon={ShieldCheck}
              title="Priorize segurança de compra"
              text="Prefira marcas com assistência, boas atualizações e modelos conhecidos. Isso reduz risco de comprar aparelho problemático."
            />
            <CriteriaCard
              icon={Battery}
              title="Bateria importa muito"
              text="Procure modelos com 5.000 mAh ou mais. Para a maioria das pessoas, autonomia vale mais que pequenos ganhos de câmera."
            />
            <CriteriaCard
              icon={Sparkles}
              title="Tela boa muda a experiência"
              text="AMOLED ou pOLED com 90 Hz/120 Hz deixa o uso mais agradável em redes sociais, vídeos e navegação."
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-14 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cta">
              Perguntas frequentes
            </span>
            <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold">
              Dúvidas comuns antes de comprar
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Respostas diretas para evitar escolhas ruins na faixa de até
              R$ 1.500.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-border bg-card shadow-soft"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-semibold text-foreground">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 md:py-16">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold">
                Quer comparar com modelos mais fortes?
              </h2>
              <p className="mt-3 max-w-2xl text-background/75">
                Se o orçamento puder subir um pouco, veja também nossa lista de
                celulares até R$ 2.000 e os reviews dos intermediários mais
                buscados.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/melhores-celulares-ate-2000"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground"
              >
                Ver até R$ 2.000
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/review/galaxy-a55"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-background/20 px-5 py-3 text-sm font-semibold text-background"
              >
                Review Galaxy A55
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function CriteriaCard({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof ShieldCheck;
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-2xl border border-border bg-card p-6 shadow-soft">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal/10 text-teal">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 font-heading text-xl font-bold text-foreground">
        {title}
      </h3>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
        {text}
      </p>
    </article>
  );
}

function PickCard({ pick }: { pick: Pick }) {
  const Icon = pick.icon;

  return (
    <section id={pick.id} className="scroll-mt-24">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cta/10 text-cta">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cta">
            {pick.category}
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            {pick.name}
          </h2>
        </div>
      </div>

      <article className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition hover:shadow-elevated">
        <div className="grid md:grid-cols-2 w-full">
          <div className="relative aspect-[4/3] md:aspect-auto bg-surface overflow-hidden">
            <img
              src={pick.image}
              alt={pick.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
            />
            <div className="absolute top-4 left-4">
              <Badge variant={pick.badge.variant}>{pick.badge.label}</Badge>
            </div>
          </div>
          <div className="p-6 md:p-8 flex flex-col">
            <div className="flex items-center justify-between gap-3">
              <Rating value={pick.rating} />
              <div className="text-right">
                <span className="block text-[11px] uppercase tracking-wider text-muted-foreground">
                  Faixa indicada
                </span>
                <span className="font-heading text-xl font-bold text-foreground">
                  {pick.price}
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground italic border-l-2 border-teal/40 pl-3">
              "{pick.short}"
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {pick.review}
            </p>

            <div className="mt-5 rounded-xl bg-surface/60 p-4">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Ideal para
              </span>
              <p className="mt-1 text-sm text-foreground">{pick.profile}</p>
            </div>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground shadow-soft transition-all hover:brightness-105 hover:-translate-y-0.5 hover:shadow-elevated"
            >
              Ver oferta
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 border-t border-border">
          <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-border">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-teal">
              Pontos fortes
            </span>
            <ul className="mt-3 space-y-2">
              {pick.pros.map((p) => (
                <li key={p} className="flex gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 shrink-0 text-teal mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 md:p-8">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-cta">
              Pontos de atenção
            </span>
            <ul className="mt-3 space-y-2">
              {pick.cons.map((c) => (
                <li key={c} className="flex gap-2 text-sm text-muted-foreground">
                  <X className="h-4 w-4 shrink-0 text-cta mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
}
