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

export const Route = createFileRoute("/comparativo/poco-x6-pro-vs-poco-x7-pro")({
  head: () => ({
    meta: [
      {
        title: "Poco X6 Pro vs Poco X7 Pro: qual vale mais a pena em 2026?",
      },
      {
        name: "description",
        content:
          "Poco X6 Pro vs Poco X7 Pro: comparativo completo de desempenho, tela, bateria, câmeras, carregamento, custo-benefício e recomendação de compra em 2026.",
      },
      {
        name: "keywords",
        content:
          "Poco X6 Pro vs Poco X7 Pro, Poco X7 Pro ou Poco X6 Pro, Poco X7 Pro vale a pena, Poco X6 Pro vale a pena, melhor Poco para jogos",
      },
      {
        property: "og:title",
        content: "Poco X6 Pro vs Poco X7 Pro: qual vale mais a pena em 2026?",
      },
      {
        property: "og:description",
        content:
          "Comparamos Poco X6 Pro e Poco X7 Pro em desempenho, bateria, tela, câmera e custo-benefício para mostrar qual comprar em 2026.",
      },
      {
        property: "og:image",
        content:
          "https://techescolhacerta.com.br/images/products/poco-x7-pro-optimized.webp",
      },
      {
        property: "twitter:image",
        content:
          "https://techescolhacerta.com.br/images/products/poco-x7-pro-optimized.webp",
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
  badge: "Melhor se estiver barato",
  rating: 4.6,
  price: "R$ 1.899",
  image: "/images/products/poco-x6-pro-optimized.webp",
  affiliateHref:
    "https://www.mercadolivre.com.br/xiaomi-pocophone-poco-x6-pro-5g-dual-sim-512-gb-amarelo-12-gb-ram/p/MLB29734179?pdp_filters=item_id%3AMLB4712693597&attributes=COLOR%3AMLB29734179&matt_tool=38524122",
  strengths: [
    "Dimensity 8300-Ultra ainda entrega desempenho muito forte",
    "Ótimo custo-benefício quando aparece abaixo do Poco X7 Pro",
    "Tela AMOLED 120 Hz de excelente qualidade",
    "Carregamento rápido de 67 W",
    "Boa escolha para jogos sem gastar tanto",
  ],
  weaknesses: [
    "Bateria menor que a do Poco X7 Pro",
    "Proteção inferior contra água e poeira",
    "Menor folga para os próximos anos",
  ],
};

const POCO_X7 = {
  name: "Poco X7 Pro",
  badge: "Melhor escolha geral",
  rating: 4.7,
  price: "R$ 2.299",
  image: "/images/products/poco-x7-pro-optimized.webp",
  affiliateHref:
    "https://www.mercadolivre.com.br/xiaomi-poco-x7-pro-5g-12ram-512-gb-global-cor-preto/p/MLB47308422?pdp_filters=item_id%3AMLB6936726414&matt_tool=38524122",
  strengths: [
    "Dimensity 8400-Ultra entrega mais desempenho e longevidade",
    "Bateria de 6.000 mAh é um salto importante",
    "Carregamento rápido de 90 W",
    "Proteção IP68 contra água e poeira",
    "Melhor opção para quem quer comprar e ficar mais tempo",
  ],
  weaknesses: [
    "Pode custar bem mais que o Poco X6 Pro",
    "Câmeras continuam não sendo o grande foco da linha Poco",
    "HyperOS ainda pode não agradar todos os usuários",
  ],
};

const QUICK_SCORE = [
  {
    category: "Desempenho",
    winner: "Poco X7 Pro",
    reason: "Dimensity 8400-Ultra é mais novo e mais forte",
  },
  {
    category: "Tela",
    winner: "Poco X7 Pro",
    reason: "painel 1.5K 120 Hz mais atual",
  },
  {
    category: "Bateria",
    winner: "Poco X7 Pro",
    reason: "6.000 mAh contra 5.000 mAh",
  },
  {
    category: "Carregamento",
    winner: "Poco X7 Pro",
    reason: "90 W contra 67 W",
  },
  {
    category: "Câmera",
    winner: "Empate técnico",
    reason: "ambos cumprem bem, mas não são focados em fotografia",
  },
  {
    category: "Resistência",
    winner: "Poco X7 Pro",
    reason: "IP68 é uma vantagem importante",
  },
  {
    category: "Custo-benefício",
    winner: "Depende do preço",
    reason: "X6 Pro compensa se estiver bem mais barato",
  },
];

const SPECS: Array<[string, string, string]> = [
  ["Tela", 'AMOLED 6,67" • 1.5K • 120 Hz', 'AMOLED 6,67" • 1.5K • 120 Hz'],
  ["Processador", "MediaTek Dimensity 8300-Ultra", "MediaTek Dimensity 8400-Ultra"],
  ["RAM", "8 GB / 12 GB", "12 GB, conforme versão"],
  ["Armazenamento", "256 GB / 512 GB", "512 GB, conforme versão"],
  ["Câmera principal", "64 MP com OIS", "50 MP com OIS"],
  ["Ultrawide", "8 MP", "8 MP"],
  ["Macro", "2 MP", "—"],
  ["Selfie", "16 MP", "20 MP"],
  ["Bateria", "5.000 mAh", "6.000 mAh"],
  ["Carregamento", "67 W", "90 W"],
  ["Proteção", "IP54", "IP68"],
  ["Sistema", "Android com HyperOS", "Android com HyperOS"],
];

const FAQS = [
  {
    q: "Poco X6 Pro ou Poco X7 Pro: qual é melhor?",
    a: "O Poco X7 Pro é melhor no conjunto geral, principalmente por desempenho mais novo, bateria maior, carregamento mais rápido e IP68. O Poco X6 Pro ainda vale a pena se estiver bem mais barato.",
  },
  {
    q: "O Poco X7 Pro vale a diferença de preço?",
    a: "Vale se a diferença for pequena ou se você pretende ficar mais tempo com o celular. Se o Poco X6 Pro estiver com promoção muito agressiva, ele ainda pode ser a compra mais racional.",
  },
  {
    q: "Qual é melhor para jogos?",
    a: "O Poco X7 Pro é melhor para jogos por ter hardware mais novo e bateria maior. O Poco X6 Pro, porém, ainda roda muito bem jogos populares e segue forte em custo-benefício.",
  },
  {
    q: "Qual tem melhor câmera?",
    a: "Nenhum dos dois é focado principalmente em câmera. O Poco X7 Pro tende a ser mais atual, mas a linha Poco continua sendo mais interessante por desempenho do que por fotografia.",
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
            <span className="text-foreground">Poco X6 Pro vs Poco X7 Pro</span>
          </nav>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="cta">Comparativo completo</Badge>
              <Badge variant="soft">Poco vs Poco</Badge>
            </div>

            <h1 className="mt-4 font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-foreground text-balance">
              Poco X6 Pro vs Poco X7 Pro: qual vale mais a pena em 2026?
            </h1>

            <p className="mt-5 max-w-3xl text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
              O Poco X6 Pro ainda é um intermediário muito forte, mas o Poco X7 Pro
              chegou com bateria maior, chip mais novo, carregamento mais rápido e
              proteção superior. Comparamos os dois para mostrar quando vale pagar mais
              pelo modelo novo e quando o X6 Pro ainda faz sentido.
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
            <ProductHero product={POCO_X7} accent="cta" />
          </div>
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
                Melhor escolha geral
              </span>
              <p className="mt-2 text-sm text-muted-foreground">
                O Poco X7 Pro é a escolha mais completa. O Poco X6 Pro só leva vantagem
                se estiver com preço bem menor.
              </p>
              <div className="mt-4 space-y-2">
                <AffiliateButton product={POCO_X7} label="Ver Poco X7 Pro" variant="primary" />
                <AffiliateButton product={POCO_X6} label="Ver Poco X6 Pro" variant="secondary" />
              </div>
            </div>
          </div>
        </div>

        <main className="lg:col-span-9 space-y-14">
          <section id="veredito" className="scroll-mt-24">
            <SectionTitle eyebrow="Veredito rápido" title="Qual é melhor: Poco X6 Pro ou Poco X7 Pro?" />
            <div className="mt-5 rounded-2xl border border-border bg-card p-6 md:p-8 shadow-soft">
              <p className="text-lg leading-relaxed text-foreground">
                O <strong>Poco X7 Pro</strong> é a melhor escolha para quem quer o conjunto
                mais atual: mais desempenho, bateria maior, carregamento de 90 W e proteção IP68.
                O <strong>Poco X6 Pro</strong> ainda vale a pena se aparecer com preço bem mais baixo,
                porque continua sendo muito forte para jogos e uso pesado.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <VerdictCard
                  icon={Trophy}
                  title="Melhor escolha geral"
                  product="Poco X7 Pro"
                  text="Mais novo, mais completo e melhor para quem quer ficar mais tempo com o celular."
                />
                <VerdictCard
                  icon={Zap}
                  title="Melhor se estiver barato"
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
            title="Poco X7 Pro ganha pela proteção IP68"
            winner="Poco X7 Pro"
            paragraphs={[
              "O Poco X6 Pro tem visual moderno e continua bonito, mas o Poco X7 Pro dá um passo importante em resistência. A certificação IP68 é uma diferença real para quem quer mais segurança contra água e poeira no uso diário.",
              "Na prática, os dois mantêm a identidade agressiva da linha Poco, mas o X7 Pro passa mais confiança para quem pretende ficar mais tempo com o aparelho.",
            ]}
            bullets={[
              "X7 Pro tem IP68",
              "X6 Pro continua moderno, mas menos protegido",
              "Para longevidade, X7 Pro leva vantagem",
            ]}
          />

          <ComparisonBlock
            id="tela"
            icon={Sparkles}
            eyebrow="Tela"
            title="Duas telas muito boas, com vantagem para o modelo novo"
            winner="Poco X7 Pro"
            paragraphs={[
              "Os dois modelos têm tela AMOLED de 6,67 polegadas, resolução alta e taxa de 120 Hz. Isso significa ótima fluidez para redes sociais, vídeos, navegação e jogos.",
              "A diferença é que o Poco X7 Pro traz um painel mais atual dentro do conjunto geral do aparelho. Não é um salto que sozinho justifique a troca, mas soma pontos quando colocado ao lado de bateria, desempenho e resistência.",
            ]}
            bullets={[
              "Ambos entregam AMOLED 120 Hz",
              "X7 Pro tem conjunto mais atual",
              "Diferença de tela não é o principal motivo da troca",
            ]}
          />

          <ComparisonBlock
            id="desempenho"
            icon={Cpu}
            eyebrow="Desempenho"
            title="O Poco X7 Pro é mais forte e tem mais folga para o futuro"
            winner="Poco X7 Pro"
            paragraphs={[
              "O Poco X6 Pro já era muito forte com o Dimensity 8300-Ultra e continua excelente para jogos, multitarefa e uso pesado. Para muita gente, ele ainda sobra em desempenho.",
              "O Poco X7 Pro avança com o Dimensity 8400-Ultra, entregando mais fôlego para os próximos anos. Se a ideia é comprar agora e ficar bastante tempo com o celular, o X7 Pro é a escolha mais segura.",
            ]}
            bullets={[
              "X6 Pro ainda é muito rápido",
              "X7 Pro é mais novo e mais forte",
              "Para longevidade, X7 Pro é melhor",
            ]}
          />

          <ComparisonBlock
            id="camera"
            icon={Camera}
            eyebrow="Câmeras"
            title="Nenhum dos dois é comprado principalmente pela câmera"
            winner="Empate técnico"
            paragraphs={[
              "A linha Poco é conhecida principalmente por desempenho, não por fotografia. O Poco X6 Pro tem câmera principal de 64 MP com OIS, enquanto o Poco X7 Pro traz câmera principal de 50 MP com OIS.",
              "No uso diário, ambos devem atender bem para fotos em boa luz, redes sociais e registros casuais. Mas se câmera for prioridade absoluta, talvez faça mais sentido olhar para modelos Samsung, Motorola Edge ou Xiaomi/Redmi com foco maior em fotografia.",
            ]}
            bullets={[
              "Os dois têm OIS na câmera principal",
              "Fotos de dia devem atender bem",
              "Para câmera, há opções mais equilibradas",
            ]}
          />

          <ComparisonBlock
            id="bateria"
            icon={Battery}
            eyebrow="Bateria e carregamento"
            title="Bateria maior e 90 W dão vitória clara ao Poco X7 Pro"
            winner="Poco X7 Pro"
            paragraphs={[
              "Aqui está uma das maiores diferenças. O Poco X6 Pro tem bateria de 5.000 mAh e carregamento de 67 W, conjunto que já é muito bom para a categoria.",
              "O Poco X7 Pro sobe para 6.000 mAh e 90 W, o que melhora tanto autonomia quanto conveniência. Para quem joga, usa 5G, assiste muitos vídeos ou passa bastante tempo fora de casa, essa vantagem pesa bastante.",
            ]}
            bullets={[
              "X7 Pro tem 6.000 mAh",
              "X7 Pro carrega a 90 W",
              "Maior diferença prática do comparativo",
            ]}
          />

          <ComparisonBlock
            id="gaming"
            icon={Gamepad2}
            eyebrow="Jogos"
            title="Para jogos, os dois são fortes; o Poco X7 Pro é mais completo"
            winner="Poco X7 Pro"
            paragraphs={[
              "O Poco X6 Pro segue excelente para jogos. Ele roda títulos populares com ótimo desempenho e continua sendo uma opção muito forte se aparecer com preço agressivo.",
              "O Poco X7 Pro, porém, combina processador mais novo, bateria maior e carregamento mais rápido. Para quem joga bastante, esses três pontos fazem diferença no uso real.",
            ]}
            bullets={[
              "X6 Pro ainda é ótimo para games",
              "X7 Pro tem mais bateria para jogar",
              "Quem joga muito deve priorizar o X7 Pro",
            ]}
          />

          <section id="tabela" className="scroll-mt-24">
            <SectionTitle eyebrow="Tabela comparativa" title="Poco X6 Pro vs Poco X7 Pro em detalhes" />
            <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <table className="w-full text-sm">
                <thead className="bg-surface">
                  <tr>
                    <th className="px-5 py-4 text-left font-semibold text-foreground">Critério</th>
                    <th className="px-5 py-4 text-left font-semibold text-foreground">Poco X6 Pro</th>
                    <th className="px-5 py-4 text-left font-semibold text-foreground">Poco X7 Pro</th>
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
            <SectionTitle eyebrow="Recomendação por perfil" title="Qual comprar para cada tipo de usuário?" />
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <ProfileCard
                title="Compre o Poco X7 Pro se você..."
                items={[
                  "quer o melhor desempenho da comparação",
                  "joga bastante no celular",
                  "valoriza bateria grande",
                  "quer carregamento mais rápido",
                  "pretende ficar mais tempo com o aparelho",
                ]}
                positive
              />
              <ProfileCard
                title="Compre o Poco X6 Pro se você..."
                items={[
                  "encontrou uma promoção muito boa",
                  "quer economizar sem perder muito desempenho",
                  "usa o celular para jogos, mas não precisa do modelo mais novo",
                  "não liga tanto para IP68",
                  "quer máximo custo-benefício imediato",
                ]}
                positive
              />
              <ProfileCard
                title="Evite o Poco X7 Pro se você..."
                items={[
                  "encontrou o Poco X6 Pro muito mais barato",
                  "não joga e usa o celular só para tarefas simples",
                  "prioriza câmera acima de desempenho",
                ]}
              />
              <ProfileCard
                title="Evite o Poco X6 Pro se você..."
                items={[
                  "quer mais bateria e proteção IP68",
                  "pretende ficar muitos anos com o celular",
                  "quer o melhor desempenho possível dentro da linha Poco X",
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
                  Poco X7 Pro é melhor; Poco X6 Pro só vence no preço.
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  Para comprar hoje e ficar mais tempo, o Poco X7 Pro é a escolha mais completa.
                  Se o Poco X6 Pro aparecer muito mais barato, ele ainda pode ser uma compra inteligente.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row md:flex-col">
                <AffiliateButton product={POCO_X7} label="Ver Poco X7 Pro" variant="primary" />
                <AffiliateButton product={POCO_X6} label="Ver Poco X6 Pro" variant="secondary" />
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
              X6 Pro vs X7 Pro
            </span>
          </div>
          <a
            href={POCO_X7.affiliateHref}
            target="_blank"
            rel="noopener noreferrer sponsored"
            onClick={() =>
              trackAffiliateClick({
                productName: "Poco X7 Pro",
                pageType: "comparativo",
              })
            }
            className="inline-flex items-center gap-1.5 rounded-lg bg-cta px-4 py-2.5 text-xs font-semibold text-cta-foreground shadow-soft"
          >
            Ver X7 Pro <ArrowUpRight className="h-3.5 w-3.5" />
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

function ProductHero({
  product,
  accent,
}: {
  product: typeof POCO_X6;
  accent: "teal" | "cta";
}) {
  const accentClasses =
    accent === "teal"
      ? "border-teal/30 bg-teal/5 text-teal"
      : "border-cta/30 bg-cta/5 text-cta";

  return (
    <div className="relative overflow-hidden rounded-[1.5rem] border border-border bg-card p-5 shadow-elevated">
      <div className="grid gap-5 sm:grid-cols-2 sm:items-center">
        <img
          src={product.image}
          alt={product.name}
          width={800}
          height={600}
          loading="eager"
          className="aspect-[4/3] w-full rounded-2xl border border-border object-cover shadow-soft"
        />
        <div>
          <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${accentClasses}`}>
            {product.badge}
          </span>
          <h2 className="mt-3 font-heading text-2xl font-bold text-foreground">
            {product.name}
          </h2>
          <div className="mt-2 flex items-center gap-2">
            <Rating value={product.rating} />
            <span className="text-sm font-semibold text-foreground">{product.rating.toFixed(1)}</span>
          </div>
          <div className="mt-4 font-heading text-2xl font-bold text-foreground">
            A partir de {product.price}
          </div>
          <span className="text-[11px] text-muted-foreground">*preço pode variar</span>
          <div className="mt-4">
            <AffiliateButton
              product={product}
              label={`Ver ${product.name}`}
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
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cta">
        {eyebrow}
      </span>
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
