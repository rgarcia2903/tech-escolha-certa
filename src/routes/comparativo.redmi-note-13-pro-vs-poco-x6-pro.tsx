import { POCO_X6_PRO_AFFILIATE_URL, REDMI_NOTE_13_PRO_AFFILIATE_URL } from "@/lib/affiliate-links";
import { AffiliateRedirectNotice } from "@/components/site/AffiliateRedirectNotice";
import { ScoreMethodLink } from "@/components/site/ScoreMethodLink";
import { trackAffiliateClick } from "@/lib/analytics";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type ComponentType } from "react";
import {
  ArrowUpRight,
  Battery,
  Camera,
  Check,
  ChevronDown,
  Cpu,
  Gamepad2,
  Medal,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Trophy,
  User,
  CalendarDays,
  Clock,
  X,
  Zap,
} from "lucide-react";
import { Badge, Rating } from "@/components/site/ui";

export const Route = createFileRoute("/comparativo/redmi-note-13-pro-vs-poco-x6-pro")({
  head: () => ({
    meta: [
      {
        title: "Redmi Note 13 Pro vs Poco X6 Pro: qual Xiaomi vale mais a pena em 2026?",
      },
      {
        name: "description",
        content:
          "Redmi Note 13 Pro vs Poco X6 Pro: comparativo completo de desempenho, tela, bateria, câmeras, carregamento, custo-benefício e recomendação de compra em 2026.",
      },
      {
        name: "keywords",
        content:
          "Redmi Note 13 Pro vs Poco X6 Pro, Redmi Note 13 Pro ou Poco X6 Pro, Redmi Note 13 Pro vale a pena, Poco X6 Pro vale a pena, melhor Poco para jogos",
      },
      {
        property: "og:title",
        content: "Redmi Note 13 Pro vs Poco X6 Pro: qual Xiaomi vale mais a pena em 2026?",
      },
      {
        property: "og:description",
        content:
          "Comparamos Poco X6 Pro e Redmi Note 13 Pro em desempenho, bateria, tela, câmera e custo-benefício para mostrar qual comprar em 2026.",
      },
      {
        property: "og:image",
        content: "https://techescolhacerta.com.br/images/products/redmi-note-13-pro-optimized.webp",
      },
      {
        property: "twitter:image",
        content: "https://techescolhacerta.com.br/images/products/redmi-note-13-pro-optimized.webp",
      },
    ],
  }),
  component: ComparisonPage,
});

const SECTIONS = [
  { id: "veredito", label: "Veredito" },
  { id: "placar", label: "Placar rápido" },
  { id: "design", label: "Design" },
  { id: "tela", label: "Tela" },
  { id: "desempenho", label: "Desempenho" },
  { id: "camera", label: "Câmera" },
  { id: "bateria", label: "Bateria" },
  { id: "tabela", label: "Tabela" },
  { id: "perfis", label: "Para cada perfil" },
  { id: "faq", label: "FAQ" },
];

const POCO_X6 = {
  name: "Poco X6 Pro",
  badge: "Melhor para desempenho",
  rating: 4.6,
  image: "/images/products/poco-x6-pro-optimized.webp",
  affiliateHref: POCO_X6_PRO_AFFILIATE_URL,
  strengths: [
    "Dimensity 8300-Ultra ainda entrega desempenho muito forte",
    "Ótimo custo-benefício quando aparece abaixo do Redmi Note 13 Pro",
    "Tela AMOLED 120 Hz de excelente qualidade",
    "Carregamento rápido de 67 W",
    "Boa escolha para jogos sem gastar tanto",
  ],
  weaknesses: [
    "Bateria menor que a do Redmi Note 13 Pro",
    "Proteção IP54, sem vantagem clara em resistência",
    "Câmera principal menos chamativa que a do Redmi Note 13 Pro",
  ],
};

const REDMI_NOTE_13_PRO = {
  name: "Redmi Note 13 Pro",
  badge: "Mais equilibrado",
  rating: 4.7,
  image: "/images/products/redmi-note-13-pro-optimized.webp",
  affiliateHref: REDMI_NOTE_13_PRO_AFFILIATE_URL,
  strengths: [
    "Câmera principal de 200 MP com OIS",
    "Bateria de 5.100 mAh com boa autonomia",
    "Carregamento rápido de 67 W",
    "Tela AMOLED 120 Hz muito boa para a faixa",
    "Escolha mais equilibrada para câmera, tela e uso diário",
  ],
  weaknesses: [
    "Snapdragon 7s Gen 2 fica atrás do Poco X6 Pro em desempenho bruto",
    "Não é a melhor opção da dupla para jogos pesados",
    "HyperOS ainda pode não agradar todos os usuários",
  ],
};

const QUICK_SCORE = [
  {
    category: "Desempenho",
    winner: "Poco X6 Pro",
    reason: "Dimensity 8300-Ultra é mais forte para jogos e uso pesado",
  },
  {
    category: "Tela",
    winner: "Empate técnico",
    reason: "ambos entregam AMOLED 120 Hz de ótima qualidade",
  },
  {
    category: "Bateria",
    winner: "Empate técnico",
    reason: "5.100 mAh no Redmi contra 5.000 mAh no Poco",
  },
  {
    category: "Carregamento",
    winner: "Empate técnico",
    reason: "os dois trabalham com carregamento rápido de 67 W",
  },
  {
    category: "Câmera",
    winner: "Redmi Note 13 Pro",
    reason: "sensor principal de 200 MP é mais forte no papel",
  },
  {
    category: "Resistência",
    winner: "Empate técnico",
    reason: "ambos têm proteção IP54",
  },
  {
    category: "Custo-benefício",
    winner: "Depende do preço",
    reason: "X6 Pro compensa se estiver bem mais barato",
  },
];

const SPECS: Array<[string, string, string]> = [
  ["Tela", 'AMOLED 6,67" • 1.5K • 120 Hz', 'AMOLED 6,67" • 1.5K • 120 Hz'],
  ["Processador", "MediaTek Dimensity 8300-Ultra", "Snapdragon 7s Gen 2"],
  ["RAM", "8 GB / 12 GB", "8 GB / 12 GB"],
  ["Armazenamento", "256 GB / 512 GB", "256 GB / 512 GB"],
  ["Câmera principal", "64 MP com OIS", "200 MP com OIS"],
  ["Ultrawide", "8 MP", "8 MP"],
  ["Macro", "2 MP", "2 MP"],
  ["Selfie", "16 MP", "16 MP"],
  ["Bateria", "5.000 mAh", "5.100 mAh"],
  ["Carregamento", "67 W", "67 W"],
  ["Proteção", "IP54", "IP54"],
  ["Sistema", "Android com HyperOS", "Android com HyperOS"],
];

const FAQS = [
  {
    q: "Redmi Note 13 Pro ou Poco X6 Pro: qual é melhor?",
    a: "Depende do perfil. O Redmi Note 13 Pro é melhor para câmera principal e equilíbrio geral. O Poco X6 Pro ainda vale a pena se estiver bem mais barato.",
  },
  {
    q: "O Redmi Note 13 Pro vale a diferença de preço?",
    a: "Vale se a diferença for pequena ou se você pretende ficar mais tempo com o celular. Se o Poco X6 Pro estiver com promoção muito agressiva, ele ainda pode ser a compra mais racional.",
  },
  {
    q: "Qual é melhor para jogos?",
    a: "O Poco X6 Pro é melhor para jogos por ter desempenho bruto mais forte. O Redmi Note 13 Pro é mais equilibrado para câmera, tela e uso diário.",
  },
  {
    q: "Qual tem melhor câmera?",
    a: "O Redmi Note 13 Pro leva vantagem para quem prioriza fotografia: traz câmera principal de 200 MP com OIS, contra 64 MP com OIS no Poco X6 Pro. O Poco continua mais atraente para desempenho.",
  },
];

function useReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? Math.min(100, (h.scrollTop / total) * 100) : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return progress;
}

function ComparisonPage() {
  const progress = useReadingProgress();

  return (
    <article className="bg-background">
      <div
        className="fixed left-0 top-0 z-50 h-[3px] bg-cta transition-[width] duration-150"
        style={{ width: `${progress}%` }}
        aria-hidden
      />

      <header className="relative overflow-hidden border-b border-border bg-surface">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-cta/10 blur-[120px]" />
          <div className="absolute -bottom-40 -left-32 h-[26rem] w-[26rem] rounded-full bg-teal/10 blur-[120px]" />
        </div>

        <div className="container-tec relative py-14 md:py-20">
          <nav className="mb-5 flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">
              Home
            </Link>
            <span>/</span>
            <Link to="/comparativos" className="hover:text-foreground">
              Comparativos
            </Link>
            <span>/</span>
            <span className="text-foreground">Redmi Note 13 Pro vs Poco X6 Pro</span>
          </nav>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="cta">Comparativo completo</Badge>
              <Badge variant="soft">Redmi vs Poco</Badge>
            </div>

            <h1 className="mt-4 font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-foreground text-balance">
              Redmi Note 13 Pro vs Poco X6 Pro: qual Xiaomi vale mais a pena em 2026?
            </h1>

            <p className="mt-5 max-w-3xl text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
              O Poco X6 Pro ainda é um intermediário muito forte, mas o Redmi Note 13 Pro se destaca
              pela câmera principal de 200 MP, boa tela e bateria ligeiramente maior. Comparamos os
              dois para mostrar quando priorizar fotografia e quando o desempenho do Poco faz mais
              sentido.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <User className="h-3.5 w-3.5" /> Por Equipe Tech Escolha Certa
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5" /> Atualizado em 2026
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> Leitura · 8 min
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-teal" /> Análise independente
              </span>
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <ProductHero product={POCO_X6} accent="teal" />
            <ProductHero product={REDMI_NOTE_13_PRO} accent="cta" />
          </div>
          <AffiliateRedirectNotice className="mt-4" />
          <ScoreMethodLink className="mt-3" />
        </div>
      </header>

      <div className="container-tec grid gap-10 py-14 lg:grid-cols-12 lg:gap-12">
        <div className="hidden lg:col-span-3 lg:block">
          <div className="sticky top-24 space-y-6">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Neste comparativo
              </span>
              <ul className="mt-3 space-y-1.5">
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="block rounded-md px-2 py-1.5 text-sm text-muted-foreground transition hover:bg-surface hover:text-foreground"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-cta/30 bg-card p-5 shadow-soft ring-1 ring-cta/10">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cta">
                Mais equilibrado
              </span>
              <p className="mt-2 text-sm text-muted-foreground">
                O Redmi Note 13 Pro é a escolha mais completa. O Poco X6 Pro só leva vantagem se
                estiver com preço bem menor.
              </p>
              <div className="mt-4 space-y-2">
                <AffiliateButton
                  product={REDMI_NOTE_13_PRO}
                  label="Ver Redmi Note 13 Pro no Mercado Livre"
                  variant="primary"
                />
                <AffiliateButton
                  product={POCO_X6}
                  label="Ver Poco X6 Pro no Mercado Livre"
                  variant="secondary"
                />
              </div>
            </div>
          </div>
        </div>

        <main className="lg:col-span-9 space-y-14">
          <section id="veredito" className="scroll-mt-24">
            <SectionTitle
              eyebrow="Veredito rápido"
              title="Qual é melhor: Redmi Note 13 Pro ou Poco X6 Pro?"
            />
            <div className="mt-5 rounded-2xl border border-border bg-card p-6 md:p-8 shadow-soft">
              <p className="text-lg leading-relaxed text-foreground">
                O <strong>Poco X6 Pro</strong> é a escolha mais forte para jogos e tarefas pesadas,
                graças ao Dimensity 8300-Ultra e ao armazenamento UFS 4.0. O
                <strong> Redmi Note 13 Pro</strong> faz mais sentido para quem prioriza câmera de
                200 MP, entrada para fone de ouvido e um conjunto equilibrado para o dia a dia.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <VerdictCard
                  icon={Trophy}
                  title="Mais equilibrado"
                  product="Redmi Note 13 Pro"
                  text="Melhor para quem prioriza câmera, tela e uso diário."
                />
                <VerdictCard
                  icon={Zap}
                  title="Melhor para desempenho"
                  product="Poco X6 Pro"
                  text="Continua muito forte e pode ser compra melhor quando a diferença de preço for grande."
                />
              </div>
            </div>
          </section>

          <section id="placar" className="scroll-mt-24">
            <SectionTitle eyebrow="Placar rápido" title="Vencedor por categoria" />
            <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              {QUICK_SCORE.map((item, index) => (
                <div
                  key={item.category}
                  className={`grid gap-3 px-5 py-4 md:grid-cols-3 md:items-center ${
                    index % 2 === 0 ? "bg-card" : "bg-surface"
                  }`}
                >
                  <span className="font-semibold text-foreground">{item.category}</span>
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-cta/10 px-3 py-1 text-sm font-semibold text-cta">
                    <Medal className="h-4 w-4" /> {item.winner}
                  </span>
                  <span className="text-sm text-muted-foreground">{item.reason}</span>
                </div>
              ))}
            </div>
          </section>

          <ComparisonBlock
            id="design"
            icon={Smartphone}
            eyebrow="Design e resistência"
            title="Construção semelhante e proteção IP54 nos dois"
            winner="Empate técnico"
            paragraphs={[
              "Poco X6 Pro e Redmi Note 13 Pro têm certificação IP54 contra poeira e respingos. O Redmi usa Gorilla Glass Victus na frente, enquanto o Poco X6 Pro usa Gorilla Glass 5.",
              "Os dois têm peso e dimensões próximos. A escolha de construção depende mais do acabamento preferido do que de uma diferença grande de resistência.",
            ]}
            bullets={[
              "Ambos têm IP54",
              "Redmi traz Gorilla Glass Victus",
              "Peso e dimensões são próximos",
            ]}
          />

          <ComparisonBlock
            id="tela"
            icon={Sparkles}
            eyebrow="Tela"
            title="Telas AMOLED 1.5K de 120 Hz muito parecidas"
            winner="Empate técnico"
            paragraphs={[
              "Os dois modelos têm tela AMOLED de 6,67 polegadas, resolução alta e taxa de 120 Hz. Isso significa ótima fluidez para redes sociais, vídeos, navegação e jogos.",
              "As especificações são muito próximas: resolução 2712 × 1220, brilho de pico anunciado de 1.800 nits e suporte a Dolby Vision. Na prática, a tela não deve decidir a compra sozinha.",
            ]}
            bullets={[
              "Ambos entregam AMOLED 120 Hz",
              "Resolução 1.5K e Dolby Vision nos dois",
              "Tela não é o principal critério de desempate",
            ]}
          />

          <ComparisonBlock
            id="desempenho"
            icon={Cpu}
            eyebrow="Desempenho"
            title="Poco X6 Pro é claramente mais forte em desempenho"
            winner="Poco X6 Pro"
            paragraphs={[
              "O Poco X6 Pro usa o Dimensity 8300-Ultra, memória LPDDR5X e armazenamento UFS 4.0. Esse conjunto é mais indicado para jogos, edição e multitarefa pesada.",
              "O Redmi Note 13 Pro usa o Snapdragon 7s Gen 2 e faz mais sentido para quem quer equilíbrio entre câmera, tela, bateria e uso diário. Para desempenho bruto e jogos, o Poco X6 Pro continua levando vantagem.",
            ]}
            bullets={[
              "Dimensity 8300-Ultra no Poco X6 Pro",
              "Poco X6 Pro é mais forte em desempenho",
              "Para jogos, Poco X6 Pro é melhor",
            ]}
          />

          <ComparisonBlock
            id="camera"
            icon={Camera}
            eyebrow="Câmeras"
            title="Redmi Note 13 Pro leva vantagem clara em fotografia"
            winner="Redmi Note 13 Pro"
            paragraphs={[
              "O Poco X6 Pro traz câmera principal de 64 MP com OIS, enquanto o Redmi Note 13 Pro 5G usa um sensor principal de 200 MP com OIS. Os dois têm ultrawide de 8 MP e macro de 2 MP.",
              "Megapixels não contam toda a história, mas o conjunto do Redmi oferece mais margem para recorte e foi pensado com maior foco em fotografia. O Poco prioriza desempenho e jogos.",
            ]}
            bullets={[
              "Poco X6 Pro: principal de 64 MP com OIS",
              "Redmi Note 13 Pro: principal de 200 MP com OIS",
              "Redmi é a escolha mais voltada a fotografia",
            ]}
          />

          <ComparisonBlock
            id="bateria"
            icon={Battery}
            eyebrow="Bateria e carregamento"
            title="Redmi tem leve vantagem de capacidade; os dois carregam a 67 W"
            winner="Redmi Note 13 Pro"
            paragraphs={[
              "O Poco X6 Pro tem bateria de 5.000 mAh e carregamento de 67 W, conjunto que já é muito bom para a categoria.",
              "O Redmi Note 13 Pro sobe para 5.100 mAh e mantém os mesmos 67 W. A diferença de capacidade é pequena, então autonomia real também dependerá de tela, sinal, software e padrão de uso.",
            ]}
            bullets={[
              "Redmi Note 13 Pro tem 100 mAh a mais",
              "Ambos carregam a 67 W",
              "Diferença de capacidade é pequena",
            ]}
          />

          <ComparisonBlock
            id="gaming"
            icon={Gamepad2}
            eyebrow="Jogos"
            title="Poco X6 Pro é a escolha certa para jogos"
            winner="Poco X6 Pro"
            paragraphs={[
              "O Dimensity 8300-Ultra, a memória LPDDR5X e o armazenamento UFS 4.0 dão ao Poco X6 Pro mais folga para jogos do que o Snapdragon 7s Gen 2 do Redmi.",
              "Taxa de quadros, aquecimento e autonomia variam conforme o jogo e as configurações, mas a vantagem de hardware do Poco é clara para esse perfil.",
            ]}
            bullets={[
              "X6 Pro ainda é ótimo para games",
              "Poco X6 Pro tem mais desempenho para jogar",
              "Quem joga muito deve priorizar o Poco X6 Pro",
            ]}
          />

          <section id="tabela" className="scroll-mt-24">
            <SectionTitle
              eyebrow="Tabela comparativa"
              title="Redmi Note 13 Pro vs Poco X6 Pro em detalhes"
            />
            <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <table className="w-full text-sm">
                <thead className="bg-surface">
                  <tr>
                    <th className="px-5 py-4 text-left font-semibold text-foreground">Critério</th>
                    <th className="px-5 py-4 text-left font-semibold text-foreground">
                      Poco X6 Pro
                    </th>
                    <th className="px-5 py-4 text-left font-semibold text-foreground">
                      Redmi Note 13 Pro
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {SPECS.map(([label, x6, x7], index) => (
                    <tr key={label} className={index % 2 === 0 ? "bg-card" : "bg-surface"}>
                      <th scope="row" className="px-5 py-3 text-left font-semibold text-foreground">
                        {label}
                      </th>
                      <td className="px-5 py-3 text-muted-foreground">{x6}</td>
                      <td className="px-5 py-3 text-muted-foreground">{x7}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="perfis" className="scroll-mt-24">
            <SectionTitle
              eyebrow="Recomendação por perfil"
              title="Qual comprar para cada tipo de usuário?"
            />
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <ProfileCard
                title="Compre o Redmi Note 13 Pro se você..."
                items={[
                  "prioriza câmera principal de 200 MP com OIS",
                  "quer entrada de 3,5 mm para fones",
                  "valoriza bateria ligeiramente maior",
                  "busca equilíbrio entre câmera, tela e uso diário",
                ]}
                positive
              />
              <ProfileCard
                title="Compre o Poco X6 Pro se você..."
                items={[
                  "prioriza desempenho bruto e jogos",
                  "quer memória LPDDR5X e armazenamento UFS 4.0",
                  "faz edição ou multitarefa pesada",
                  "encontrou preço próximo ao do Redmi",
                ]}
                positive
              />
              <ProfileCard
                title="Evite o Redmi Note 13 Pro se você..."
                items={[
                  "quer o máximo de desempenho para jogos",
                  "prioriza armazenamento mais rápido",
                  "encontrou o Poco X6 Pro pelo mesmo preço",
                ]}
              />
              <ProfileCard
                title="Evite o Poco X6 Pro se você..."
                items={[
                  "prioriza câmera acima de desempenho",
                  "precisa de entrada de 3,5 mm para fones",
                  "prefere o conjunto fotográfico do Redmi",
                ]}
              />
            </div>
          </section>

          <section id="faq" className="scroll-mt-24">
            <SectionTitle eyebrow="FAQ" title="Dúvidas comuns" />
            <div className="mt-6 space-y-3">
              {FAQS.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-border bg-card p-5 shadow-soft"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-semibold text-foreground">
                    {faq.q}
                    <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-cta/30 bg-card p-6 md:p-8 shadow-soft ring-1 ring-cta/10">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cta">
                  Veredito final
                </span>
                <h2 className="mt-2 font-heading text-2xl font-bold text-foreground">
                  Poco X6 Pro vence em desempenho; Redmi Note 13 Pro vence em câmera.
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  Para jogos e uso pesado, escolha o Poco X6 Pro. Para fotografia e uso equilibrado,
                  o Redmi Note 13 Pro é mais adequado. Compare o preço atual antes de decidir.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row md:flex-col">
                <AffiliateButton
                  product={REDMI_NOTE_13_PRO}
                  label="Ver Redmi Note 13 Pro no Mercado Livre"
                  variant="primary"
                />
                <AffiliateButton
                  product={POCO_X6}
                  label="Ver Poco X6 Pro no Mercado Livre"
                  variant="secondary"
                />
              </div>
            </div>
          </section>
        </main>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur lg:hidden">
        <div className="container-tec flex items-center gap-3">
          <div className="min-w-0 flex-1">
            <span className="block text-[10px] uppercase tracking-wider text-muted-foreground">
              Comparativo
            </span>
            <span className="font-heading text-sm font-bold text-foreground">
              Redmi Note 13 Pro vs Poco X6 Pro
            </span>
          </div>
          <a
            href={REDMI_NOTE_13_PRO.affiliateHref}
            target="_blank"
            rel="noopener noreferrer sponsored"
            onClick={() =>
              trackAffiliateClick({
                productName: "Redmi Note 13 Pro",
                pageType: "comparativo",
              })
            }
            className="inline-flex items-center gap-1.5 rounded-lg bg-cta px-4 py-2.5 text-xs font-semibold text-cta-foreground shadow-soft"
          >
            Ver no Mercado Livre <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
      <div className="h-20 lg:hidden" aria-hidden />
    </article>
  );
}

function AffiliateButton({
  product,
  label,
  variant,
}: {
  product: typeof POCO_X6;
  label: string;
  variant: "primary" | "secondary";
}) {
  const className =
    variant === "primary"
      ? "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground shadow-soft transition hover:brightness-105 hover:-translate-y-0.5"
      : "inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary";

  return (
    <a
      href={product.affiliateHref}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={() =>
        trackAffiliateClick({
          productName: product.name,
          pageType: "comparativo",
        })
      }
      className={className}
    >
      {label} <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}

function ProductHero({ product, accent }: { product: typeof POCO_X6; accent: "teal" | "cta" }) {
  const accentClasses =
    accent === "teal" ? "border-teal/30 bg-teal/5 text-teal" : "border-cta/30 bg-cta/5 text-cta";

  return (
    <div className="relative overflow-hidden rounded-[1.5rem] border border-border bg-card p-5 shadow-elevated">
      <div className="grid gap-5 sm:grid-cols-2 sm:items-center">
        <img
          src={product.image}
          alt={product.name}
          width={800}
          height={600}
          loading="eager"
          className="aspect-[4/3] w-full rounded-2xl border border-border bg-surface object-contain p-3 shadow-soft"
        />
        <div>
          <span
            className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${accentClasses}`}
          >
            {product.badge}
          </span>
          <h2 className="mt-3 font-heading text-2xl font-bold text-foreground">{product.name}</h2>
          <div className="mt-2 flex items-center gap-2">
            <Rating value={product.rating} />
          </div>
          <div className="mt-4 font-heading text-lg font-bold text-foreground">
            Preço atualizado no Mercado Livre
          </div>
          <span className="text-[11px] text-muted-foreground">
            Consulte valor, estoque e condições
          </span>
          <div className="mt-4">
            <AffiliateButton
              product={product}
              label={`Ver ${product.name} no Mercado Livre`}
              variant={accent === "cta" ? "primary" : "secondary"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cta">{eyebrow}</span>
      <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
    </div>
  );
}

function VerdictCard({
  icon: Icon,
  title,
  product,
  text,
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  product: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5">
      <span className="grid h-10 w-10 place-items-center rounded-lg bg-cta/10 text-cta">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-1 text-sm font-semibold text-cta">{product}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}

function ComparisonBlock({
  id,
  icon: Icon,
  eyebrow,
  title,
  winner,
  paragraphs,
  bullets,
}: {
  id: string;
  icon: ComponentType<{ className?: string }>;
  eyebrow: string;
  title: string;
  winner: string;
  paragraphs: string[];
  bullets: string[];
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-teal/10 text-teal">
            <Icon className="h-5 w-5" />
          </span>
          <SectionTitle eyebrow={eyebrow} title={title} />
        </div>
        <div className="hidden shrink-0 rounded-lg border border-border bg-card px-3 py-2 text-right shadow-soft sm:block">
          <span className="block text-[10px] uppercase tracking-wider text-muted-foreground">
            Vencedor
          </span>
          <span className="font-heading text-sm font-bold leading-none text-foreground">
            {winner}
          </span>
        </div>
      </div>

      <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <ul className="mt-5 grid gap-2 sm:grid-cols-3">
        {bullets.map((b) => (
          <li
            key={b}
            className="rounded-lg border border-border bg-surface px-3 py-2.5 text-[13px] text-foreground"
          >
            {b}
          </li>
        ))}
      </ul>
    </section>
  );
}

function ProfileCard({
  title,
  items,
  positive = false,
}: {
  title: string;
  items: string[];
  positive?: boolean;
}) {
  const Icon = positive ? Check : X;

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
      <h3 className="font-heading text-base font-semibold text-foreground">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-[15px] text-foreground">
            <Icon
              className={`mt-1 h-4 w-4 shrink-0 ${positive ? "text-teal" : "text-destructive"}`}
              strokeWidth={2.5}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
