import { getSocialImage } from "@/lib/product-media";
import { ProductMedia } from "@/components/site/ProductMedia";
import { ProductPurchaseOptions } from "@/components/site/ProductPurchaseOptions";
import { getProductByName } from "@/lib/product-catalog";
import { EditorialSelection } from "@/components/site/EditorialSelection";
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

const CANONICAL = "https://techescolhacerta.com.br/guia/melhores-celulares-ate-3500-reais";

export const Route = createFileRoute("/guia/melhores-celulares-ate-3500-reais")({
  head: () => ({
    meta: [
      {
        title: "Melhores celulares até R$ 3.500 em 2026 | Guia completo",
      },
      {
        name: "description",
        content:
          "Os melhores celulares até R$ 3.500 em 2026: Galaxy S26 FE, Galaxy S25 FE, Edge 60 Pro, Poco X8 Pro e iPhone 16e, com até quanto pagar em cada um.",
      },
      {
        name: "keywords",
        content:
          "melhores celulares até 3500, melhor celular até 3500, Galaxy S26 FE, Galaxy S25 FE, Edge 60 Pro, Poco X8 Pro, iPhone 16e",
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
        content: getSocialImage(
          "https://techescolhacerta.com.br/images/products/phones-hero-optimized.webp",
        ),
      },
    ],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Melhores celulares até R$ 3.500 em 2026",
          description: "Guia editorial dos melhores celulares até R$ 3.500 para comprar em 2026.",
          author: {
            "@type": "Organization",
            name: "Tech Escolha Certa",
          },
          publisher: {
            "@type": "Organization",
            name: "Tech Escolha Certa",
          },
          datePublished: "2026-06-02",
          dateModified: "2026-11-03",
          mainEntityOfPage: CANONICAL,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }),
      },
    ],
  }),
  component: BestPhones3500Guide,
});

const phones = [
  {
    rank: "1º",
    name: "Galaxy S26 FE",
    badge: "O mais novo",
    rating: 0,
    price: "até R$ 3.300",
    image: "/images/products/phones-hero-optimized.webp",
    summary:
      "O Galaxy S26 FE é o FE mais novo da Samsung: Exynos 2500, vídeo em 4K a 120 fps, teleobjetiva de 3x, IP68 e sete anos de atualizações. Lançado a R$ 5.499, só vale perto de R$ 3.300.",
    bestFor: "Quem quer o Samsung de linha S mais recente e vai ficar muitos anos com o celular.",
    pros: ["Exynos 2500", "Teleobjetiva de 3x", "Sete anos de atualizações", "IP68"],
    cons: ["Bateria de 4.900 mAh", "Câmeras quase iguais às do S25 FE, que custa menos"],
    cta: "/review/galaxy-s26-fe",
  },
  {
    rank: "2º",
    name: "Galaxy S25 FE",
    badge: "Custo-benefício",
    rating: 0,
    price: "até R$ 3.000",
    image: "/images/products/gallery/galaxy-s25-fe/01-principal.webp",
    summary:
      "Tem as mesmas câmeras do S26 FE (incluindo a teleobjetiva de 3x), IP68 e sete anos de atualizações, por cerca de R$ 300 a menos. O processador é o Exynos 2400, do Galaxy S24.",
    bestFor: "Quem quer a experiência de linha S gastando menos que no S26 FE.",
    pros: ["Teleobjetiva de 3x", "Sete anos de atualizações", "IP68 e recarga sem fio", "Vídeo até 8K"],
    cons: ["Bateria de 4.900 mAh", "Processador um ano mais antigo"],
    cta: "/review/galaxy-s25-fe",
  },
  {
    rank: "3º",
    name: "Motorola Edge 60 Pro",
    badge: "Bateria e câmera",
    rating: 0,
    price: "até R$ 2.700",
    image: "/images/products/gallery/edge-60-pro/01-principal.webp",
    summary:
      "Bateria de 6.000 mAh com recarga de 90 W, três câmeras de qualidade com zoom óptico de 3x, selfie de 50 MP e IP68/IP69 com certificação militar. Custa bem menos que os FE.",
    bestFor: "Quem quer bateria para mais de um dia e recarga muito rápida.",
    pros: ["6.000 mAh e 90 W", "Zoom óptico de 3x", "IP68, IP69 e MIL-STD-810H", "12 GB de RAM"],
    cons: ["Só três anos de atualizações", "Tela curva"],
    cta: "/review/edge-60-pro",
  },
  {
    rank: "4º",
    name: "POCO X8 Pro",
    badge: "Jogos",
    rating: 0,
    price: "até R$ 2.450",
    image: "/images/products/phones-hero-optimized.webp",
    summary:
      "O mais forte para jogos desta lista: Dimensity 8500 Ultra, 6.500 mAh e recarga de 100 W, por bem menos de R$ 3.500.",
    bestFor: "Quem joga títulos pesados e quer a maior bateria.",
    pros: ["Dimensity 8500 Ultra", "6.500 mAh e 100 W", "Tela 1.5K de 120 Hz", "IP68"],
    cons: ["Câmeras não são o foco", "Não confunda com o X8 Pro Max"],
    cta: "/review/poco-x8-pro",
  },
  {
    rank: "5º",
    name: "iPhone 16e",
    badge: "iPhone",
    rating: 0,
    price: "até R$ 3.300",
    image: "/images/products/phones-hero-optimized.webp",
    summary:
      "O iPhone mais barato à venda, com chip A18, IP68 e Face ID. Tem tela de 60 Hz, uma câmera só e 128 GB. Se a diferença for pequena, o iPhone 17e traz chip A19, MagSafe e 256 GB.",
    bestFor: "Quem quer iPhone gastando o mínimo.",
    pros: ["Chip A18", "IP68 e Face ID", "Bateria que dura o dia todo"],
    cons: ["Tela de 60 Hz", "Uma câmera só", "128 GB podem ficar apertados"],
    cta: "/review/iphone-16e",
  },
];

const quickRanking = [
  ["O mais novo", "Galaxy S26 FE"],
  ["Custo-benefício", "Galaxy S25 FE"],
  ["Bateria e câmera", "Edge 60 Pro"],
  ["Jogos", "POCO X8 Pro"],
  ["iPhone", "iPhone 16e"],
];

const faq = [
  {
    question: "Qual celular até R$ 3.500 comprar em 2026?",
    answer:
      "O Galaxy S26 FE, se estiver perto de R$ 3.300; senão, o Galaxy S25 FE, com as mesmas câmeras, por cerca de R$ 3.000. Para jogos, o POCO X8 Pro; para iPhone, o iPhone 16e.",
  },
  {
    question: "Galaxy S26 FE ou S25 FE?",
    answer:
      "O S26 FE tem processador mais novo (Exynos 2500) e grava em 4K a 120 fps. Câmeras, tela, bateria e os sete anos de atualizações são praticamente iguais. Se a diferença passar de uns R$ 300, leve o S25 FE.",
  },
  {
    question: "Qual o melhor celular para jogos até R$ 3.500?",
    answer: "O POCO X8 Pro, com Dimensity 8500 Ultra, 6.500 mAh e recarga de 100 W, costuma custar perto de R$ 2.450.",
  },
  {
    question: "Dá para comprar iPhone até R$ 3.500?",
    answer:
      "Sim, o iPhone 16e, que vale a pena até R$ 3.300. O iPhone 17e é melhor (chip A19, MagSafe e 256 GB), mas costuma passar de R$ 4.000.",
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
                Selecionamos os celulares que mais fazem sentido para quem quer subir de nível sem
                pagar preço de topo de linha caro. Aqui entram modelos com câmera melhor, desempenho
                forte, tela premium e mais vida útil.
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
                    <strong className="text-right text-sm text-foreground">{value}</strong>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                Os valores são até quanto vale pagar em cada modelo, não o preço da loja. Acima
                disso, espere uma promoção.
              </p>
            </aside>
          </div>
        </div>
      </section>
      <EditorialSelection selection="ate-3000" />

      <section id="ranking" className="mx-auto max-w-7xl px-6 py-14 lg:px-8 md:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cta">Ranking</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
            Top celulares até R$ 3.500
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            A lista prioriza modelos que entregam salto real de qualidade em câmera, desempenho,
            tela, acabamento e vida útil.
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
                  <ProductMedia
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
                  </div>

                  <p className="mt-5 leading-relaxed text-muted-foreground">{phone.summary}</p>

                  <div className="mt-5 rounded-xl border border-border bg-surface p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Melhor para
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">{phone.bestFor}</p>
                  </div>

                  <div className="mt-6 grid gap-5 md:grid-cols-2">
                    <div>
                      <p className="text-sm font-bold text-foreground">Pontos fortes</p>
                      <ul className="mt-3 space-y-2">
                        {phone.pros.map((item) => (
                          <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-sm font-bold text-foreground">Pontos de atenção</p>
                      <ul className="mt-3 space-y-2">
                        {phone.cons.map((item) => (
                          <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                            <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {phone.cta && (
                      <Link
                        to={phone.cta}
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground shadow-soft transition hover:-translate-y-0.5 hover:brightness-105"
                      >
                        Ver análise
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    )}
                    <ProductPurchaseOptions
                      productId={getProductByName(phone.name)!.id}
                      pageType="guia"
                      placement="legacy_3500_card"
                    />
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
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Critérios</p>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
              Como escolher um celular até R$ 3.500
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Nessa faixa, o ideal é evitar modelos básicos caros. Procure aparelhos que realmente
              entreguem câmera melhor, processador mais forte, tela superior e maior vida útil.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <CriteriaCard
              icon={<Camera className="h-5 w-5" />}
              title="Câmera"
              text="Para zoom, os Galaxy FE e o Edge 60 Pro têm teleobjetiva de 3x."
            />
            <CriteriaCard
              icon={<Cpu className="h-5 w-5" />}
              title="Desempenho"
              text="Para jogos e uso pesado, o POCO X8 Pro entrega a maior potência pelo preço."
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
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
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
                <h2 className="text-2xl font-bold text-foreground">Conclusão: qual comprar?</h2>
              </div>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Para a maioria, um Galaxy FE: o S26 FE perto de R$ 3.300 ou o S25 FE perto de R$
                3.000. Para bateria e recarga rápida, o Edge 60 Pro. Para jogos, o POCO X8 Pro. Para
                iPhone, o iPhone 16e.
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
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-cta/10 text-cta">{icon}</div>
      <h3 className="mt-5 text-xl font-bold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </article>
  );
}
