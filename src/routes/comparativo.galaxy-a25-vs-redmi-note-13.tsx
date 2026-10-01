import { AffiliateRedirectNotice } from "@/components/site/AffiliateRedirectNotice";
import { MobilePurchaseBar } from "@/components/site/MobilePurchaseBar";
import { PurchaseActions } from "@/components/site/PurchaseActions";
import { ScoreMethodLink } from "@/components/site/ScoreMethodLink";
import { Badge } from "@/components/site/ui";
import { GALAXY_A25_AFFILIATE_URL, REDMI_NOTE_13_4G_AFFILIATE_URL } from "@/lib/affiliate-links";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BatteryCharging,
  CalendarDays,
  Camera,
  Check,
  Cpu,
  ExternalLink,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wifi,
} from "lucide-react";

const CANONICAL = "https://techescolhacerta.com.br/comparativo/galaxy-a25-vs-redmi-note-13";
const PAGE_TITLE = "Galaxy A25 vs Redmi Note 13: qual comprar em 2026?";
const PAGE_DESCRIPTION =
  "Galaxy A25 5G ou Redmi Note 13 4G? Compare tela, desempenho, câmera, bateria, 5G e suporte para escolher sem arrependimento.";

const FAQS = [
  {
    question: "Galaxy A25 ou Redmi Note 13: qual é melhor?",
    answer:
      "O Galaxy A25 5G é a escolha mais completa para a maioria das pessoas porque combina 5G, câmera principal com estabilização óptica, vídeo em 4K e suporte de software mais previsível. O Redmi Note 13 4G faz mais sentido quando custa menos e a prioridade é uma tela maior e carregamento mais rápido.",
  },
  {
    question: "Qual dos dois tem a melhor câmera?",
    answer:
      "O Redmi Note 13 4G tem câmera principal de 108 MP e pode registrar bastante detalhe em boa luz. O Galaxy A25 5G leva vantagem no conjunto para uso cotidiano por oferecer estabilização óptica na câmera principal e gravação em 4K.",
  },
  {
    question: "Qual tem 5G: Galaxy A25 ou Redmi Note 13?",
    answer:
      "O Galaxy A25 deste comparativo tem 5G. O Redmi Note 13 indicado aqui é a versão 4G; existe um Redmi Note 13 5G diferente, por isso confirme o nome completo do anúncio antes de comprar.",
  },
  {
    question: "Qual carrega mais rápido?",
    answer:
      "O Redmi Note 13 4G suporta carregamento de 33 W, enquanto o Galaxy A25 5G trabalha com 25 W. Nos dois casos, o tempo real varia conforme carregador, temperatura e nível da bateria.",
  },
];

const SPECS: Array<[string, string, string, "galaxy" | "redmi" | "tie"]> = [
  ["Tela", "6,5” Super AMOLED, 120 Hz", "6,67” AMOLED, 120 Hz", "redmi"],
  ["Processador", "Exynos 1280 (5 nm)", "Snapdragon 685 (6 nm)", "galaxy"],
  ["Conectividade móvel", "5G", "4G", "galaxy"],
  ["Câmera principal", "50 MP com OIS", "108 MP", "galaxy"],
  ["Câmeras auxiliares", "8 MP ultrawide + 2 MP macro", "8 MP ultrawide + 2 MP macro", "tie"],
  ["Câmera frontal", "13 MP", "16 MP", "tie"],
  ["Vídeo traseiro", "Até 4K a 30 fps", "Até 1080p a 30 fps", "galaxy"],
  ["Bateria", "5.000 mAh", "5.000 mAh", "tie"],
  ["Carregamento", "25 W", "33 W", "redmi"],
  ["Armazenamento", "128/256 GB + microSD", "128/256 GB + microSD", "tie"],
  [
    "Suporte anunciado",
    "4 versões de Android + 5 anos de segurança",
    "Sem promessa equivalente informada",
    "galaxy",
  ],
];

const VERDICT_CARDS = [
  {
    icon: ShieldCheck,
    title: "Compre o Galaxy A25 5G se…",
    text: "você quer 5G, câmera mais estável, vídeo 4K e uma política de atualizações clara para ficar mais tempo com o aparelho.",
    bullets: [
      "Melhor compra geral",
      "Mais preparado para longo prazo",
      "Conjunto de câmera mais seguro",
    ],
    tone: "teal" as const,
  },
  {
    icon: Sparkles,
    title: "Compre o Redmi Note 13 4G se…",
    text: "você encontrou uma oferta mais barata, não precisa de 5G e prioriza tela grande, brilho e carregamento de 33 W.",
    bullets: ["Melhor se estiver bem mais barato", "Tela maior", "Carga mais rápida"],
    tone: "cta" as const,
  },
];

export const Route = createFileRoute("/comparativo/galaxy-a25-vs-redmi-note-13")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      {
        name: "keywords",
        content:
          "Galaxy A25 vs Redmi Note 13, Galaxy A25 ou Redmi Note 13, melhor celular até 1500, Galaxy A25 5G, Redmi Note 13 4G",
      },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: CANONICAL },
      {
        property: "og:image",
        content: "https://techescolhacerta.com.br/images/products/phones-hero-optimized.webp",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
      {
        name: "twitter:image",
        content: "https://techescolhacerta.com.br/images/products/phones-hero-optimized.webp",
      },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
          datePublished: "2026-10-01",
          dateModified: "2026-10-01",
          author: { "@type": "Organization", name: "Tech Escolha Certa" },
          publisher: { "@type": "Organization", name: "Tech Escolha Certa" },
          mainEntityOfPage: CANONICAL,
          image: "https://techescolhacerta.com.br/images/products/phones-hero-optimized.webp",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }),
      },
    ],
  }),
  component: GalaxyA25VsRedmiNote13Page,
});

function GalaxyA25VsRedmiNote13Page() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background pb-4 lg:pb-0">
      <header className="relative overflow-hidden border-b border-border bg-surface">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -right-36 -top-36 h-[28rem] w-[28rem] rounded-full bg-cta/10 blur-[120px]" />
          <div className="absolute -bottom-40 -left-32 h-[26rem] w-[26rem] rounded-full bg-teal/10 blur-[120px]" />
        </div>

        <div className="container-tec relative py-12 md:py-20">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">
              Home
            </Link>
            <span>/</span>
            <Link to="/comparativos" className="hover:text-foreground">
              Comparativos
            </Link>
            <span>/</span>
            <span className="text-foreground">Galaxy A25 vs Redmi Note 13</span>
          </nav>

          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2">
              <Badge variant="cta">Comparativo direto</Badge>
              <Badge variant="soft">Até R$ 1.500</Badge>
              <Badge variant="teal">Samsung vs Xiaomi</Badge>
            </div>

            <h1 className="mt-5 text-balance font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground md:text-6xl">
              Galaxy A25 5G vs Redmi Note 13 4G: qual comprar?
            </h1>
            <p className="mt-5 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Os dois entregam tela AMOLED de 120 Hz e bateria de 5.000 mAh, mas seguem caminhos
              diferentes. O Galaxy aposta em 5G, câmera estabilizada e suporte; o Redmi prioriza
              tela maior, carga mais rápida e preço agressivo.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5" /> Atualizado em 1º out. 2026
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-teal" /> Especificações conferidas em
                fontes oficiais
              </span>
            </div>
          </div>

          <PurchaseActions
            className="mt-8"
            options={[
              {
                productName: "Galaxy A25 5G",
                href: GALAXY_A25_AFFILIATE_URL,
                label: "Ver preço do Galaxy A25",
              },
              {
                productName: "Redmi Note 13 4G",
                href: REDMI_NOTE_13_4G_AFFILIATE_URL,
                label: "Ver preço do Redmi Note 13",
              },
            ]}
            pageType="comparativo"
            placement="hero"
            title="Compare o preço dos dois modelos"
            description="O melhor negócio depende da diferença de preço hoje. Confirme versão, memória, vendedor e frete no anúncio."
          />
          <ScoreMethodLink className="mt-3" />
        </div>
      </header>

      <section id="veredito" className="container-tec py-12 md:py-16">
        <div className="rounded-3xl border border-cta/25 bg-card p-6 shadow-elevated md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cta">
                Veredito em 30 segundos
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
                Galaxy A25 5G é a escolha mais segura no conjunto
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Para quem pretende usar o celular por vários anos, o Galaxy A25 entrega vantagens
                difíceis de recuperar depois da compra: 5G, OIS, vídeo 4K e política oficial de
                quatro gerações do Android e cinco anos de segurança. O Redmi Note 13 4G ainda é uma
                ótima compra quando aparece com desconto relevante e o 5G não faz falta.
              </p>
            </div>

            <div className="rounded-2xl bg-[#0F3F4A] p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D7A77E]">
                Regra prática de compra
              </p>
              <p className="mt-3 text-lg font-bold">
                Preços próximos? Galaxy A25. Redmi bem mais barato? Redmi Note 13.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                Não indicamos uma diferença fixa porque preço, cupom e frete mudam diariamente.
                Compare o valor final no carrinho.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="container-tec py-12 md:py-16">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              Escolha por perfil
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
              Qual combina mais com você?
            </h2>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {VERDICT_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  className="rounded-3xl border border-border bg-card p-6 shadow-soft"
                >
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-2xl ${
                      card.tone === "teal" ? "bg-teal/10 text-teal" : "bg-cta/10 text-cta"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-heading text-2xl font-bold text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                  <ul className="mt-5 grid gap-2">
                    {card.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2 text-sm text-foreground">
                        <Check className="h-4 w-4 shrink-0 text-teal" /> {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="ficha-tecnica" className="container-tec py-12 md:py-16">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cta">
            Comparação lado a lado
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Ficha técnica que realmente muda a decisão
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            O destaque indica a vantagem prática da categoria, não apenas o maior número da ficha.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
          <div className="grid grid-cols-[0.9fr_1fr_1fr] bg-[#0F3F4A] text-white">
            <div className="p-4 text-xs font-semibold uppercase tracking-wider">Critério</div>
            <div className="border-l border-white/10 p-4 text-sm font-bold">Galaxy A25 5G</div>
            <div className="border-l border-white/10 p-4 text-sm font-bold">Redmi Note 13 4G</div>
          </div>
          {SPECS.map(([label, galaxy, redmi, winner]) => (
            <div
              key={label}
              className="grid grid-cols-[0.9fr_1fr_1fr] border-t border-border text-xs sm:text-sm"
            >
              <div className="bg-surface/60 p-3 font-semibold text-foreground sm:p-4">{label}</div>
              <div
                className={`border-l border-border p-3 leading-relaxed sm:p-4 ${
                  winner === "galaxy"
                    ? "bg-teal/5 font-semibold text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {galaxy}
              </div>
              <div
                className={`border-l border-border p-3 leading-relaxed sm:p-4 ${
                  winner === "redmi"
                    ? "bg-cta/5 font-semibold text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {redmi}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="container-tec py-12 md:py-16">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <DecisionDetail
              icon={Cpu}
              title="Desempenho"
              winner="Galaxy A25"
              text="O Exynos 1280 oferece mais fôlego para multitarefa e jogos do que o Snapdragon 685. Nenhum dos dois, porém, é um celular gamer."
            />
            <DecisionDetail
              icon={Camera}
              title="Câmera"
              winner="Galaxy A25"
              text="O Redmi chama atenção pelos 108 MP, mas OIS e vídeo 4K tornam o Galaxy mais versátil para fotos e vídeos do dia a dia."
            />
            <DecisionDetail
              icon={BatteryCharging}
              title="Bateria e carga"
              winner="Redmi Note 13"
              text="A capacidade é igual. A vantagem do Redmi está nos 33 W contra 25 W; autonomia real depende do seu uso."
            />
            <DecisionDetail
              icon={Wifi}
              title="Conectividade"
              winner="Galaxy A25"
              text="O 5G é a diferença mais objetiva. Se pretende manter o aparelho por anos, ele reduz a chance de arrependimento."
            />
          </div>
        </div>
      </section>

      <section className="container-tec py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cta">
              Antes de comprar
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground">
              Confira a versão do anúncio
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              O nome “Redmi Note 13” aparece em versões 4G e 5G, com processadores diferentes. Os
              links desta página levam ao Galaxy A25 5G e ao Redmi Note 13 4G. Confira memória, cor,
              garantia, vendedor e valor final antes de pagar.
            </p>
          </div>

          <PurchaseActions
            options={[
              { productName: "Galaxy A25 5G", href: GALAXY_A25_AFFILIATE_URL },
              { productName: "Redmi Note 13 4G", href: REDMI_NOTE_13_4G_AFFILIATE_URL },
            ]}
            pageType="comparativo"
            placement="decision"
            title="Veja qual oferta compensa hoje"
            description="Os links podem abrir uma vitrine intermediária do Mercado Livre antes do anúncio. Isso é normal no programa de afiliados."
          />
        </div>
      </section>

      <section id="faq" className="border-y border-border bg-surface">
        <div className="container-tec py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
                Perguntas frequentes
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground">
                Dúvidas antes da escolha
              </h2>
            </div>
            <div className="space-y-3">
              {FAQS.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-border bg-card p-5 shadow-soft"
                >
                  <summary className="cursor-pointer list-none pr-6 font-semibold text-foreground">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-tec py-12 md:py-16">
        <div className="rounded-3xl bg-[#0F3F4A] p-7 text-white md:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="font-heading text-2xl font-bold md:text-3xl">
                Ainda em dúvida sobre o orçamento?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-200">
                Veja o ranking completo até R$ 1.500 ou compare todas as ofertas verificadas antes
                de decidir.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/guia/melhores-celulares-ate-1500-reais"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#B9774B] px-5 py-3 text-sm font-bold text-white"
              >
                Ver ranking até R$ 1.500 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/ofertas"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-bold text-white"
              >
                Ver ofertas
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-card p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Fontes das especificações
          </p>
          <div className="mt-3 flex flex-col gap-2 text-sm sm:flex-row sm:gap-5">
            <a
              href="https://news.samsung.com/br/poderosos-nas-maos-e-economicos-no-bolso-samsung-apresenta-novos-integrantes-da-familia-galaxy-a-no-brasil"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-cta hover:underline"
            >
              Samsung Newsroom Brasil <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://www.mi.com/global/product/redmi-note-13/specs/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-cta hover:underline"
            >
              Especificações oficiais Xiaomi <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
          <AffiliateRedirectNotice className="mt-4 border-t border-border pt-4" />
        </div>
      </section>

      <MobilePurchaseBar
        options={[
          { productName: "Galaxy A25 5G", href: GALAXY_A25_AFFILIATE_URL, label: "A25" },
          {
            productName: "Redmi Note 13 4G",
            href: REDMI_NOTE_13_4G_AFFILIATE_URL,
            label: "Redmi",
            primary: false,
          },
        ]}
        pageType="comparativo"
        title="Galaxy A25 vs Redmi Note 13"
      />
    </main>
  );
}

function DecisionDetail({
  icon: Icon,
  title,
  winner,
  text,
}: {
  icon: typeof Smartphone;
  title: string;
  winner: string;
  text: string;
}) {
  return (
    <article className="rounded-2xl border border-border bg-card p-5 shadow-soft">
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal/10 text-teal">
        <Icon className="h-5 w-5" />
      </span>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <h3 className="font-heading text-lg font-bold text-foreground">{title}</h3>
        <Badge variant="soft">{winner}</Badge>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </article>
  );
}
