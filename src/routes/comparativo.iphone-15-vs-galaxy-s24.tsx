import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Battery,
  Camera,
  Check,
  Cpu,
  Gamepad2,
  Layers,
  Minus,
  Smartphone,
  Sparkles,
  Star,
  Sun,
  Wallet,
  X,
  Clock,
  CalendarDays,
  User,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/site/ui";

export const Route = createFileRoute("/comparativo/iphone-15-vs-galaxy-s24")({
  head: () => ({
    meta: [
      { title: "iPhone 15 vs Galaxy S24: qual vale mais a pena em 2026?" },
      {
        name: "description",
        content:
          "Comparativo editorial completo entre iPhone 15 e Galaxy S24 em 2026: design, tela, desempenho, câmera, bateria, gaming, IA, ecossistema e custo-benefício.",
      },
      {
        name: "keywords",
        content:
          "iPhone 15 vs Galaxy S24, comparativo iPhone 15 Galaxy S24, iPhone 15 ou Galaxy S24, qual comprar 2026",
      },
      { property: "og:title", content: "iPhone 15 vs Galaxy S24: qual vale mais a pena em 2026?" },
      {
        property: "og:description",
        content:
          "Testamos lado a lado iPhone 15 e Galaxy S24 para responder, sem rodeios, qual entrega mais pelo seu dinheiro em 2026.",
      },
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1592286927505-1def25115558?auto=format&fit=crop&w=1600&q=80",
      },
      {
        property: "twitter:image",
        content:
          "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1600&q=80",
      },
    ],
  }),
  component: VersusPage,
});

const IPHONE_IMG =
  "https://images.unsplash.com/photo-1592286927505-1def25115558?auto=format&fit=crop&w=1200&q=80";
const GALAXY_IMG =
  "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1200&q=80";

const SECTIONS = [
  { id: "veredito", label: "Veredito rápido" },
  { id: "design", label: "Design" },
  { id: "tela", label: "Tela" },
  { id: "desempenho", label: "Desempenho" },
  { id: "cameras", label: "Câmeras" },
  { id: "bateria", label: "Bateria" },
  { id: "gaming", label: "Gaming" },
  { id: "ia", label: "Recursos de IA" },
  { id: "ecossistema", label: "Ecossistema" },
  { id: "custo", label: "Custo-benefício" },
  { id: "tabela", label: "Tabela completa" },
  { id: "perfis", label: "Para qual perfil" },
];

const A_RATING = 4.7;
const B_RATING = 4.7;

const A_PROS = [
  "Câmera principal com tonalidade mais previsível e vídeo 4K cinema",
  "iOS 17 com suporte garantido até pelo menos 2029",
  "Integração total com Mac, iPad, AirPods, Apple Watch e CarPlay",
  "Maior valor de revenda no mercado brasileiro",
];
const A_CONS = [
  "Tela travada em 60 Hz em pleno 2026",
  "Carregamento de 20 W lento perto dos rivais",
  "Versão base ainda parte de 128 GB",
];

const B_PROS = [
  "Tela AMOLED de 120 Hz com 2.600 nits de pico",
  "Snapdragon 8 Gen 3 com teleobjetiva 3x dedicada",
  "Galaxy AI: tradução ao vivo, busca por círculo e edição generativa",
  "Sete anos de atualizações de Android e segurança",
];
const B_CONS = [
  "Modo retrato e tons de pele ainda menos consistentes que o iPhone",
  "Bloatware da Samsung e ofertas de apps na configuração",
  "Revenda inferior ao iPhone equivalente",
];

type Row = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  a: string;
  b: string;
  winner: "a" | "b" | "tie";
};

const ROWS: Row[] = [
  { label: "Tela", icon: Sun, a: "OLED 6,1\" · 60 Hz · 2.000 nits", b: "AMOLED 6,2\" · 120 Hz · 2.600 nits", winner: "b" },
  { label: "Processador", icon: Cpu, a: "Apple A16 Bionic (4 nm)", b: "Snapdragon 8 Gen 3 for Galaxy (4 nm)", winner: "tie" },
  { label: "Memória RAM", icon: Layers, a: "6 GB", b: "8 GB", winner: "b" },
  { label: "Câmera principal", icon: Camera, a: "48 MP f/1.6 + ultrawide 12 MP", b: "50 MP f/1.8 + ultrawide 12 MP + tele 10 MP 3x", winner: "b" },
  { label: "Vídeo", icon: Camera, a: "4K 60 fps Dolby Vision HDR", b: "4K 60 fps · 8K 30 fps", winner: "tie" },
  { label: "Bateria", icon: Battery, a: "3.349 mAh · até 20h vídeo", b: "4.000 mAh · até 22h vídeo", winner: "b" },
  { label: "Carregamento", icon: Battery, a: "20 W fio · 15 W MagSafe", b: "25 W fio · 15 W sem fio", winner: "b" },
  { label: "Software", icon: Smartphone, a: "iOS 17 · ~6 anos de updates", b: "One UI 6 (Android 14) · 7 anos de updates", winner: "b" },
  { label: "Recursos de IA", icon: Sparkles, a: "Apple Intelligence (não chega ao iPhone 15)", b: "Galaxy AI nativa", winner: "b" },
  { label: "Resistência", icon: ShieldCheck, a: "IP68", b: "IP68", winner: "tie" },
  { label: "Preço de partida (BR)", icon: Wallet, a: "R$ 5.499", b: "R$ 4.299", winner: "b" },
];

const PROFILES = [
  {
    title: "Compre o iPhone 15 se você…",
    image: IPHONE_IMG,
    items: [
      "já tem Mac, iPad, AirPods ou Apple Watch e quer integração imediata",
      "valoriza câmera com tom de pele realista e vídeo 4K profissional",
      "pretende usar o aparelho por 4 a 5 anos com revenda alta no fim",
      "prefere uma curva de uso simples, sem bloatware nem propaganda",
    ],
    cta: "Ver oferta do iPhone 15",
    accent: "cta" as const,
  },
  {
    title: "Compre o Galaxy S24 se você…",
    image: GALAXY_IMG,
    items: [
      "quer tela 120 Hz, hardware mais agressivo e carga rápida real",
      "usa muito recursos de IA: tradução, transcrição e edição generativa",
      "precisa de teleobjetiva óptica de 3x para retrato e shows",
      "quer 7 anos de atualizações Android sem pagar preço de iPhone",
    ],
    cta: "Ver oferta do Galaxy S24",
    accent: "teal" as const,
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

function VersusPage() {
  const progress = useReadingProgress();

  return (
    <article className="bg-background">
      <div
        className="fixed left-0 top-0 z-50 h-[3px] bg-cta transition-[width] duration-150"
        style={{ width: `${progress}%` }}
        aria-hidden
      />

      {/* Hero */}
      <header className="relative overflow-hidden border-b border-border bg-surface">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-cta/10 blur-[120px]" />
          <div className="absolute -bottom-40 -left-32 h-[26rem] w-[26rem] rounded-full bg-teal/10 blur-[120px]" />
        </div>
        <div className="container-tec relative py-14 md:py-20">
          <nav className="mb-5 flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link to="/comparativos" className="hover:text-foreground">Comparativos</Link>
            <span>/</span>
            <span className="text-foreground">iPhone 15 vs Galaxy S24</span>
          </nav>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="cta">Comparativo completo</Badge>
                <Badge variant="soft">Top de linha · 2026</Badge>
              </div>
              <h1 className="mt-4 font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-foreground text-balance">
                iPhone 15 vs Galaxy S24: qual vale mais a pena em 2026?
              </h1>
              <p className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
                Colocamos lado a lado os dois smartphones mais procurados do Brasil em 2026.
                Tela, câmera, bateria, desempenho, IA e ecossistema — testados em uso real
                durante quatro semanas para mostrar, sem rodeios, qual entrega mais pelo seu dinheiro.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><User className="h-3.5 w-3.5" /> Por Equipe Tech Escolha Certa</span>
                <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" /> Atualizado em 13 mai. 2026</span>
                <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Leitura · 11 min</span>
                <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-teal" /> Análise independente</span>
              </div>
            </div>

            {/* Side by side hero */}
            <div className="lg:col-span-5">
              <div className="relative grid grid-cols-2 overflow-hidden rounded-[1.25rem] border border-border bg-card shadow-elevated">
                <HeroSide image={IPHONE_IMG} name="iPhone 15" rating={A_RATING} align="left" />
                <HeroSide image={GALAXY_IMG} name="Galaxy S24" rating={B_RATING} align="right" />
                <div aria-hidden className="pointer-events-none absolute inset-y-3 left-1/2 -translate-x-1/2 w-px bg-border" />
                <span
                  aria-hidden
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full border border-border bg-background text-xs font-bold tracking-wider text-foreground shadow-soft"
                >
                  VS
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="container-tec grid gap-10 py-14 lg:grid-cols-12 lg:gap-12">
        {/* Sticky TOC + CTAs */}
        <aside className="hidden lg:col-span-3 lg:block">
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
                Ofertas atualizadas
              </span>
              <div className="mt-4 space-y-3">
                <OfferLine name="iPhone 15" price="R$ 5.499" cta="Ver oferta do iPhone 15" variant="cta" />
                <OfferLine name="Galaxy S24" price="R$ 4.299" cta="Ver oferta do Galaxy S24" variant="outline" />
              </div>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="lg:col-span-9 space-y-14">
          {/* Veredito rápido */}
          <section id="veredito" className="scroll-mt-24">
            <SectionTitle eyebrow="Veredito rápido" title="iPhone 15 ou Galaxy S24 em 2026?" />
            <p className="mt-4 text-lg leading-relaxed text-foreground">
              Em hardware puro, o <strong>Galaxy S24 entrega mais pelo preço cobrado</strong>:
              tela 120 Hz, teleobjetiva óptica, bateria maior, carga mais rápida e Galaxy AI
              integrada. O <strong>iPhone 15</strong> devolve com câmera mais previsível, vídeo
              de qualidade cinematográfica, integração total com o ecossistema Apple e revenda
              que segura o investimento por anos. A escolha não é técnica — é sobre como você
              usa o celular.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <VerdictCard
                tone="cta"
                badge="Vencedor em ecossistema e câmera"
                title="iPhone 15"
                text="Para quem já vive no mundo Apple ou prioriza vídeo, fotos consistentes e suporte de software de longo prazo."
              />
              <VerdictCard
                tone="teal"
                badge="Vencedor em hardware e custo"
                title="Galaxy S24"
                text="Para quem quer mais especificações por menos dinheiro, ama IA generativa no celular e usa zoom óptico de verdade."
              />
            </div>
          </section>

          {/* Design */}
          <ComparisonBlock
            id="design"
            icon={Smartphone}
            eyebrow="Design e construção"
            title="Alumínio aeroespacial vs moldura plana"
            a={{
              name: "iPhone 15",
              image: IPHONE_IMG,
              text:
                "Alumínio aeroespacial com vidro fosco que reduz marcas de dedo. A 171 g, equilíbrio perfeito na mão. Dynamic Island se mostrou útil para timer, navegação e música após algumas semanas de uso.",
            }}
            b={{
              name: "Galaxy S24",
              image: GALAXY_IMG,
              text:
                "Moldura de alumínio reto e cantos ligeiramente arredondados. 167 g, levemente mais leve. O acabamento é premium, mas o vidro traseiro brilhante marca digitais com facilidade.",
            }}
            winner="tie"
          />

          {/* Tela */}
          <ComparisonBlock
            id="tela"
            icon={Sun}
            eyebrow="Tela"
            title="60 Hz contra 120 Hz: a diferença que se sente em segundos"
            a={{
              name: "iPhone 15",
              image: IPHONE_IMG,
              text:
                "Super Retina XDR de 6,1\" com calibração de cor impecável e 2.000 nits em HDR. O incômodo segue sendo a taxa de atualização de 60 Hz: rolar feed e jogar parece datado depois de testar 120 Hz.",
            }}
            b={{
              name: "Galaxy S24",
              image: GALAXY_IMG,
              text:
                "AMOLED de 6,2\" com 120 Hz adaptativos, 2.600 nits de pico e visibilidade superior sob sol forte. A fluidez na rolagem e nos jogos é o diferencial mais imediato em relação ao iPhone.",
            }}
            winner="b"
          />

          {/* Desempenho */}
          <ComparisonBlock
            id="desempenho"
            icon={Cpu}
            eyebrow="Desempenho"
            title="A16 Bionic vs Snapdragon 8 Gen 3"
            a={{
              name: "iPhone 15",
              image: IPHONE_IMG,
              text:
                "A16 Bionic ainda figura no topo do single-core (Geekbench 6 ~2.520) e abre apps de forma instantânea. Os 6 GB de RAM são compensados pela gestão agressiva do iOS, que mantém vários apps em segundo plano.",
            }}
            b={{
              name: "Galaxy S24",
              image: GALAXY_IMG,
              text:
                "Snapdragon 8 Gen 3 for Galaxy lidera o multi-core (Geekbench 6 ~6.900) e tem GPU mais potente. Os 8 GB de RAM ajudam em multitarefa pesada, edição de vídeo e Galaxy AI rodando localmente.",
            }}
            winner="tie"
          />

          {/* Câmeras */}
          <ComparisonBlock
            id="cameras"
            icon={Camera}
            eyebrow="Câmeras"
            title="Tom de pele vs versatilidade"
            a={{
              name: "iPhone 15",
              image: IPHONE_IMG,
              text:
                "48 MP f/1.6 com pixel binning de 24 MP, mais ultrawide 12 MP. Tom de pele realista, vídeo 4K Dolby Vision líder do mercado e modo retrato automático sem precisar trocar de modo.",
            }}
            b={{
              name: "Galaxy S24",
              image: GALAXY_IMG,
              text:
                "50 MP f/1.8, ultrawide 12 MP e teleobjetiva óptica 3x de 10 MP. Mais alcance e versatilidade para shows, viagens e retratos. Edição generativa com IA permite remover objetos e refazer fundos.",
            }}
            winner="b"
          />

          {/* Bateria */}
          <ComparisonBlock
            id="bateria"
            icon={Battery}
            eyebrow="Bateria"
            title="Autonomia real e velocidade de carga"
            a={{
              name: "iPhone 15",
              image: IPHONE_IMG,
              text:
                "3.349 mAh entregam 6 a 7 horas de tela em uso misto. Carregamento de 20 W com fio leva o aparelho de 0% a 50% em ~30 minutos, mas a carga completa exige cerca de 1h30.",
            }}
            b={{
              name: "Galaxy S24",
              image: GALAXY_IMG,
              text:
                "4.000 mAh sustentam 7 a 8 horas de tela. Carga de 25 W com fio (cabo não incluso) atinge 0% a 65% em 30 minutos. Há ainda 15 W sem fio e 4,5 W reverso para carregar fones.",
            }}
            winner="b"
          />

          {/* Gaming */}
          <ComparisonBlock
            id="gaming"
            icon={Gamepad2}
            eyebrow="Gaming"
            title="Estabilidade térmica vs taxa de quadros"
            a={{
              name: "iPhone 15",
              image: IPHONE_IMG,
              text:
                "Genshin Impact em qualidade Alta segura 55–60 fps por longas sessões com aquecimento controlado. A limitação real é o painel de 60 Hz, que não acompanha jogos preparados para 90 ou 120 fps.",
            }}
            b={{
              name: "Galaxy S24",
              image: GALAXY_IMG,
              text:
                "Snapdragon 8 Gen 3 com ray tracing por hardware roda Genshin acima de 60 fps e suporta jogos a 120 fps no painel adaptativo. Esquenta um pouco mais sob carga sustentada, mas mantém estabilidade.",
            }}
            winner="b"
          />

          {/* IA */}
          <ComparisonBlock
            id="ia"
            icon={Sparkles}
            eyebrow="Recursos de IA"
            title="Galaxy AI hoje vs Apple Intelligence amanhã"
            a={{
              name: "iPhone 15",
              image: IPHONE_IMG,
              text:
                "Apple Intelligence ficou restrita à linha 15 Pro e superior — o iPhone 15 padrão não roda os recursos generativos do iOS 18. O que existe é a Siri tradicional e ditado offline. Para quem busca IA local, fica devendo.",
            }}
            b={{
              name: "Galaxy S24",
              image: GALAXY_IMG,
              text:
                "Galaxy AI integrada nativamente: tradução de chamadas ao vivo, busca por círculo, transcrição com resumo de reuniões, edição generativa de fotos e teclado com sugestões de tom. Funciona local e na nuvem.",
            }}
            winner="b"
          />

          {/* Ecossistema */}
          <ComparisonBlock
            id="ecossistema"
            icon={Layers}
            eyebrow="Ecossistema"
            title="Apple amarrado vs Samsung integrável"
            a={{
              name: "iPhone 15",
              image: IPHONE_IMG,
              text:
                "Integração quase invisível com Mac, iPad, AirPods, Apple Watch, AirTag e CarPlay. AirDrop, Handoff, Universal Clipboard e Continuity Camera funcionam sem configuração. Difícil sair depois de entrar.",
            }}
            b={{
              name: "Galaxy S24",
              image: GALAXY_IMG,
              text:
                "Conecta bem com Galaxy Watch, Buds e tablets, e tem boa integração com Windows via Phone Link. Quick Share funciona como o AirDrop. Menos amarrado, mais flexível com produtos de terceiros.",
            }}
            winner="a"
          />

          {/* Custo-benefício */}
          <ComparisonBlock
            id="custo"
            icon={Wallet}
            eyebrow="Custo-benefício"
            title="Preço de tabela e revenda em 2026"
            a={{
              name: "iPhone 15",
              image: IPHONE_IMG,
              text:
                "A partir de R$ 5.499 na versão de 128 GB. Revenda histórica acima de 60% após dois anos — o melhor mercado de seminovos do país. O custo real após troca tende a ser menor que rivais Android.",
            }}
            b={{
              name: "Galaxy S24",
              image: GALAXY_IMG,
              text:
                "A partir de R$ 4.299 na versão de 256 GB — mais armazenamento por menos dinheiro. Revenda gira em torno de 45% em dois anos, abaixo do iPhone, mas o desconto inicial compensa em quase todos os cenários.",
            }}
            winner="b"
          />

          {/* Forças e fraquezas */}
          <section className="scroll-mt-24">
            <SectionTitle eyebrow="Forças e fraquezas" title="O que pesa de cada lado" />
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <StrengthsCard
                tone="cta"
                name="iPhone 15"
                pros={A_PROS}
                cons={A_CONS}
              />
              <StrengthsCard
                tone="teal"
                name="Galaxy S24"
                pros={B_PROS}
                cons={B_CONS}
              />
            </div>
          </section>

          {/* Tabela */}
          <section id="tabela" className="scroll-mt-24">
            <SectionTitle eyebrow="Tabela completa" title="iPhone 15 vs Galaxy S24, item por item" />
            <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <div className="grid grid-cols-[1.1fr_1fr_1fr] border-b border-border bg-surface text-sm">
                <div className="p-4 font-semibold text-foreground">Característica</div>
                <div className="p-4 font-heading font-semibold text-foreground">iPhone 15</div>
                <div className="p-4 font-heading font-semibold text-foreground">Galaxy S24</div>
              </div>
              {ROWS.map((r) => {
                const Icon = r.icon;
                return (
                  <div
                    key={r.label}
                    className="grid grid-cols-[1.1fr_1fr_1fr] border-b border-border last:border-0 text-sm"
                  >
                    <div className="flex items-center gap-2 p-4 font-medium text-muted-foreground">
                      <Icon className="h-4 w-4 text-cta" />
                      {r.label}
                    </div>
                    <Cell value={r.a} highlight={r.winner === "a"} tie={r.winner === "tie"} />
                    <Cell value={r.b} highlight={r.winner === "b"} tie={r.winner === "tie"} />
                  </div>
                );
              })}
            </div>
          </section>

          {/* Perfis */}
          <section id="perfis" className="scroll-mt-24">
            <SectionTitle eyebrow="Para qual perfil" title="Recomendação por tipo de usuário" />
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {PROFILES.map((p) => (
                <ProfileCard key={p.title} {...p} />
              ))}
            </div>
          </section>

          {/* Conclusão final */}
          <section className="scroll-mt-24 rounded-2xl border border-border bg-surface p-7 shadow-soft">
            <Badge variant="cta">Conclusão</Badge>
            <h2 className="mt-3 font-heading text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Qual vale mais a pena em 2026?
            </h2>
            <p className="mt-3 text-foreground leading-relaxed">
              Se a decisão fosse puramente racional pelo preço cobrado, o <strong>Galaxy S24</strong> sai
              na frente em quase todas as categorias técnicas. Mas comprar celular é decisão de
              ecossistema. Se você já tem produtos Apple, ou se câmera com tom de pele realista e
              vídeo de qualidade profissional importam mais do que IA generativa, o <strong>iPhone 15</strong> ainda
              é o caminho. Não existe escolha errada — existe a escolha alinhada ao seu uso.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 rounded-lg bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground shadow-soft transition hover:brightness-105 hover:-translate-y-0.5"
              >
                Ver oferta do iPhone 15 <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
              >
                Ver oferta do Galaxy S24 <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </section>
        </main>
      </div>

      {/* Mobile floating CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur lg:hidden">
        <div className="container-tec flex items-center gap-2">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-cta px-3 py-2.5 text-xs font-semibold text-cta-foreground shadow-soft"
          >
            iPhone 15 · R$ 5.499
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-background px-3 py-2.5 text-xs font-semibold text-foreground"
          >
            Galaxy S24 · R$ 4.299
          </a>
        </div>
      </div>
      <div className="h-20 lg:hidden" aria-hidden />
    </article>
  );
}

/* ---------- Pieces ---------- */

function HeroSide({
  image,
  name,
  rating,
  align,
}: {
  image: string;
  name: string;
  rating: number;
  align: "left" | "right";
}) {
  return (
    <div className="relative aspect-[4/5] overflow-hidden bg-surface">
      <img src={image} alt={name} className="h-full w-full object-cover" loading="eager" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/15 to-transparent" />
      <div className={`absolute bottom-3 ${align === "left" ? "left-3" : "right-3"} space-y-1`}>
        <span className="block rounded-md bg-background/90 px-2 py-1 text-[11px] font-semibold text-foreground backdrop-blur">
          {name}
        </span>
        <span className="inline-flex items-center gap-1 rounded-md bg-background/90 px-2 py-1 text-[11px] font-semibold text-foreground backdrop-blur">
          <Star className="h-3 w-3 fill-cta text-cta" /> {rating.toFixed(1)}
        </span>
      </div>
    </div>
  );
}

function OfferLine({
  name,
  price,
  cta,
  variant,
}: {
  name: string;
  price: string;
  cta: string;
  variant: "cta" | "outline";
}) {
  return (
    <div className="rounded-xl border border-border bg-background p-3">
      <div className="flex items-baseline justify-between">
        <span className="text-xs font-semibold text-foreground">{name}</span>
        <span className="font-heading text-base font-bold text-foreground">{price}</span>
      </div>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer sponsored"
        className={`mt-2 inline-flex w-full items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition ${
          variant === "cta"
            ? "bg-cta text-cta-foreground shadow-soft hover:brightness-105"
            : "border border-border bg-background text-foreground hover:bg-secondary"
        }`}
      >
        {cta} <ArrowUpRight className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}

function VerdictCard({
  tone,
  badge,
  title,
  text,
}: {
  tone: "cta" | "teal";
  badge: string;
  title: string;
  text: string;
}) {
  const ring = tone === "cta" ? "border-cta/30 ring-cta/10" : "border-teal/30 ring-teal/10";
  return (
    <div className={`rounded-2xl border bg-card p-6 shadow-soft ring-1 ${ring}`}>
      <Badge variant={tone}>{badge}</Badge>
      <h3 className="mt-3 font-heading text-xl font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
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

function ComparisonBlock({
  id,
  icon: Icon,
  eyebrow,
  title,
  a,
  b,
  winner,
}: {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  eyebrow: string;
  title: string;
  a: { name: string; image: string; text: string };
  b: { name: string; image: string; text: string };
  winner: "a" | "b" | "tie";
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-start gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-teal/10 text-teal">
          <Icon className="h-5 w-5" />
        </span>
        <SectionTitle eyebrow={eyebrow} title={title} />
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <SidePanel data={a} highlight={winner === "a"} tieLabel={winner === "tie"} />
        <SidePanel data={b} highlight={winner === "b"} tieLabel={winner === "tie"} />
      </div>
    </section>
  );
}

function SidePanel({
  data,
  highlight,
  tieLabel,
}: {
  data: { name: string; image: string; text: string };
  highlight: boolean;
  tieLabel: boolean;
}) {
  return (
    <article
      className={`group overflow-hidden rounded-2xl border bg-card shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-elevated ${
        highlight ? "border-cta/40 ring-1 ring-cta/15" : "border-border"
      }`}
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-surface">
        <img
          src={data.image}
          alt={data.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-background/0 to-transparent" />
        <span className="absolute bottom-3 left-3 rounded-md bg-background/90 px-2 py-1 text-[11px] font-semibold text-foreground backdrop-blur">
          {data.name}
        </span>
        {highlight && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-md bg-cta px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-cta-foreground shadow-soft">
            <Check className="h-3 w-3" strokeWidth={3} /> Vencedor
          </span>
        )}
        {tieLabel && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-md bg-background/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            Empate
          </span>
        )}
      </div>
      <p className="p-5 text-[15px] leading-relaxed text-muted-foreground">{data.text}</p>
    </article>
  );
}

function Cell({ value, highlight, tie }: { value: string; highlight: boolean; tie: boolean }) {
  return (
    <div className={`p-4 ${highlight ? "bg-cta/5" : ""}`}>
      <span className="inline-flex items-start gap-2 text-foreground">
        {highlight ? (
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-cta" strokeWidth={2.5} />
        ) : tie ? (
          <Minus className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
        ) : (
          <span className="mt-0.5 h-4 w-4 shrink-0" />
        )}
        <span className={highlight ? "font-semibold" : ""}>{value}</span>
      </span>
    </div>
  );
}

function StrengthsCard({
  tone,
  name,
  pros,
  cons,
}: {
  tone: "cta" | "teal";
  name: string;
  pros: string[];
  cons: string[];
}) {
  const ring = tone === "cta" ? "border-cta/30 ring-cta/10" : "border-teal/30 ring-teal/10";
  return (
    <div className={`rounded-2xl border bg-card p-6 shadow-soft ring-1 ${ring}`}>
      <h3 className="font-heading text-lg font-bold text-foreground">{name}</h3>
      <div className="mt-4 space-y-4">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-teal">
            Pontos fortes
          </span>
          <ul className="mt-2 space-y-2">
            {pros.map((p) => (
              <li key={p} className="flex items-start gap-2 text-[14px] text-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" strokeWidth={2.5} />
                <span className="leading-snug">{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-destructive">
            Pontos fracos
          </span>
          <ul className="mt-2 space-y-2">
            {cons.map((c) => (
              <li key={c} className="flex items-start gap-2 text-[14px] text-foreground">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" strokeWidth={2.5} />
                <span className="leading-snug">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ProfileCard({
  title,
  image,
  items,
  cta,
  accent,
}: {
  title: string;
  image: string;
  items: string[];
  cta: string;
  accent: "cta" | "teal";
}) {
  const ring = accent === "cta" ? "border-cta/30 ring-cta/10" : "border-teal/30 ring-teal/10";
  return (
    <article
      className={`overflow-hidden rounded-2xl border bg-card shadow-soft ring-1 ${ring} transition-all duration-300 hover:-translate-y-0.5 hover:shadow-elevated`}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img src={image} alt="" loading="lazy" className="h-full w-full object-cover" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-lg font-bold text-foreground">{title}</h3>
        <ul className="mt-4 space-y-2">
          {items.map((it) => (
            <li key={it} className="flex items-start gap-2 text-[14px] text-foreground">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" strokeWidth={2.5} />
              <span className="leading-snug">{it}</span>
            </li>
          ))}
        </ul>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer sponsored"
          className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition ${
            accent === "cta"
              ? "bg-cta text-cta-foreground shadow-soft hover:brightness-105 hover:-translate-y-0.5"
              : "border border-border bg-background text-foreground hover:bg-secondary"
          }`}
        >
          {cta} <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
