import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Battery,
  Camera,
  Check,
  ChevronDown,
  Cpu,
  Gamepad2,
  GitCompare,
  Smartphone,
  ShieldCheck,
  Sparkles,
  Sun,
  Star,
  X,
  Clock,
  CalendarDays,
  User,
} from "lucide-react";
import { Badge, Rating } from "@/components/site/ui";

const CANONICAL = "https://tech-decide-right.lovable.app/review/galaxy-s24";
const HERO_IMG =
  "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1600&q=80";

export const Route = createFileRoute("/review/galaxy-s24")({
  head: () => ({
    meta: [
      { title: "Galaxy S24 vale a pena em 2026? Review completo e honesto" },
      {
        name: "description",
        content:
          "Galaxy S24 vale a pena em 2026? Análise editorial completa: tela LTPO 120 Hz, Galaxy AI, câmera de 50 MP, bateria, gaming e comparativo direto com o iPhone 15.",
      },
      {
        name: "keywords",
        content:
          "Galaxy S24 vale a pena em 2026, Galaxy S24 review, Galaxy S24 análise, Galaxy S24 vs iPhone 15, Galaxy AI",
      },
      { property: "og:title", content: "Galaxy S24 vale a pena em 2026? Review completo" },
      {
        property: "og:description",
        content:
          "Testamos câmera, Galaxy AI, bateria e gaming do Galaxy S24 em 2026 para responder, sem rodeios, se ele ainda merece o seu dinheiro.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: CANONICAL },
      { property: "og:image", content: HERO_IMG },
      { property: "twitter:image", content: HERO_IMG },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Galaxy S24 vale a pena em 2026? Review completo",
          description:
            "Análise editorial do Galaxy S24 em 2026: câmera, Galaxy AI, bateria, gaming e comparativo com iPhone 15.",
          author: { "@type": "Organization", name: "Tech Escolha Certa" },
          datePublished: "2026-05-12",
          image: HERO_IMG,
        }),
      },
    ],
  }),
  component: ReviewPage,
});

const SECTIONS = [
  { id: "veredito", label: "Veredito" },
  { id: "pros-contras", label: "Prós e contras" },
  { id: "especificacoes", label: "Especificações" },
  { id: "tela", label: "Tela" },
  { id: "desempenho", label: "Desempenho" },
  { id: "gaming", label: "Gaming" },
  { id: "camera", label: "Câmera" },
  { id: "ia", label: "Galaxy AI" },
  { id: "bateria", label: "Bateria" },
  { id: "oneui", label: "One UI e ecossistema" },
  { id: "comparativos", label: "Comparativos" },
  { id: "recomendacao", label: "Recomendação" },
  { id: "faq", label: "FAQ" },
];

const SCORES = [
  { label: "Design e construção", value: 4.6 },
  { label: "Tela", value: 4.9 },
  { label: "Desempenho e gaming", value: 4.8 },
  { label: "Câmera", value: 4.6 },
  { label: "Bateria", value: 4.5 },
  { label: "Galaxy AI", value: 4.7 },
  { label: "Custo-benefício em 2026", value: 4.6 },
];

const PROS = [
  "Tela LTPO 120 Hz com 2.600 nits de pico — referência da categoria",
  "Snapdragon 8 Gen 3 for Galaxy entrega desempenho de top de linha sustentado",
  "Galaxy AI nativa: tradução em ligações, Circle to Search e edição generativa",
  "7 anos de atualizações de Android e patches de segurança",
  "Tamanho compacto (6,2\") com chassi em alumínio e Gorilla Glass Victus 2",
  "Carregamento de 25 W com fio + 15 W sem fio + carga reversa",
];

const CONS = [
  "Bateria de 4.000 mAh é a menor do segmento premium",
  "Carregamento de 25 W ficou atrás dos rivais chineses (45–100 W)",
  "Versão brasileira ainda usa Exynos em algumas regiões — confira a SKU",
  "Câmera ultrawide de 12 MP perde detalhe em baixa luz",
  "Bordas relativamente grossas comparadas ao Galaxy S24+ e Ultra",
];

const SPECS: Array<[string, string]> = [
  ["Tela", "6,2\" Dynamic AMOLED 2X LTPO · 120 Hz · 2.600 nits HDR"],
  ["Processador", "Snapdragon 8 Gen 3 for Galaxy (4 nm)"],
  ["Memória RAM", "8 GB LPDDR5X"],
  ["Armazenamento", "128 / 256 / 512 GB UFS 4.0"],
  ["Câmera principal", "50 MP f/1.8 OIS + tele 10 MP 3x + ultrawide 12 MP"],
  ["Câmera frontal", "12 MP f/2.2 com autofoco dual pixel"],
  ["Bateria", "4.000 mAh · até 22h de vídeo"],
  ["Carregamento", "25 W com fio · 15 W Qi2 · 4,5 W reverso"],
  ["Conector", "USB-C 3.2 (até 10 Gbps)"],
  ["Resistência", "IP68 (até 1,5 m, 30 min)"],
  ["Peso", "167 g"],
  ["Sistema", "One UI 6.1 sobre Android 14 (atualizável até Android 21)"],
];

const COMPARES = [
  {
    title: "Galaxy S24 vs iPhone 15",
    note: "S24 entrega tela 120 Hz LTPO, Galaxy AI e mais armazenamento de base. iPhone devolve com câmera previsível, integração com Mac/iPad e revenda historicamente superior.",
  },
  {
    title: "Galaxy S24 vs S23",
    note: "Galaxy AI exclusiva, novo Snapdragon 8 Gen 3 e tela com 2.600 nits valem o upgrade vindo do S22 ou anterior. Do S23 para o S24 o salto é incremental.",
  },
  {
    title: "Galaxy S24 vs S24+",
    note: "O Plus traz tela 6,7\" QHD+, bateria de 4.900 mAh e carga de 45 W. Se autonomia e área de tela importam, vale a diferença de R$ 1.000.",
  },
];

const FAQ = [
  {
    q: "Galaxy S24 vale a pena comprar em 2026?",
    a: "Sim. Com a chegada do S25 e do S26, o S24 caiu para a faixa de R$ 4.299 e ficou com um custo-benefício excelente. Você leva tela LTPO 120 Hz, Snapdragon 8 Gen 3, Galaxy AI completa e 7 anos de atualizações — pacote que poucos rivais entregam pelo preço.",
  },
  {
    q: "A versão brasileira do Galaxy S24 é Snapdragon ou Exynos?",
    a: "Em 2026, a Samsung passou a distribuir majoritariamente a versão Snapdragon 8 Gen 3 for Galaxy no Brasil, mas algumas SKUs antigas em estoque ainda trazem o Exynos 2400. A diferença em uso real é pequena, mas o Snapdragon vence em eficiência térmica e gaming sustentado.",
  },
  {
    q: "Galaxy AI funciona em português?",
    a: "Sim. Tradução ao vivo de ligações, Circle to Search, resumo de notas, transcrição de áudio e edição generativa de fotos funcionam em português brasileiro com boa qualidade. Recursos como Browsing Assist no Samsung Internet também rodam nativamente no idioma.",
  },
  {
    q: "Galaxy S24 esquenta jogando?",
    a: "Sob carga pesada (Genshin Impact, Wuthering Waves), o aparelho atinge cerca de 42 °C na traseira após 30 minutos. A câmara de vapor faz um trabalho honesto, mas o S24+ e o S24 Ultra dissipam calor melhor por terem chassi maior.",
  },
  {
    q: "Por quanto tempo o Galaxy S24 vai receber atualizações?",
    a: "A Samsung garante 7 anos de atualizações de Android e patches de segurança, ou seja, suporte estendido até 2031. É a maior promessa de longevidade do mercado Android, equivalente ao histórico da Apple.",
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

function ReviewPage() {
  const progress = useReadingProgress();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const overall = 4.7;

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
        <div className="container-tec relative grid gap-12 py-14 md:py-20 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <nav className="mb-5 flex items-center gap-2 text-xs text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Home</Link>
              <span>/</span>
              <Link to="/celulares" className="hover:text-foreground">Celulares</Link>
              <span>/</span>
              <span className="text-foreground">Galaxy S24 Review</span>
            </nav>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="cta">Review completo</Badge>
              <Badge variant="soft">Celulares · Top de linha</Badge>
              <Badge variant="teal">Galaxy AI</Badge>
            </div>
            <h1 className="mt-4 font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-foreground text-balance">
              Galaxy S24 vale a pena em 2026? Review completo e sem rodeios
            </h1>
            <p className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
              Passamos quatro semanas com o Galaxy S24 padrão como aparelho principal — fotografando
              ao sol e à noite, jogando títulos pesados, testando Galaxy AI em português e carregando
              ele do zero ao fim do dia. O veredito direto sobre tela, câmera, bateria e custo-benefício
              em 2026, com o Galaxy S26 já no mercado.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><User className="h-3.5 w-3.5" /> Por Equipe Tech Escolha Certa</span>
              <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" /> Atualizado em 12 mai. 2026</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Leitura · 11 min</span>
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-teal" /> Análise independente</span>
            </div>
          </div>
          <div className="relative lg:col-span-5">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cta/20 via-cta/5 to-teal/15 blur-3xl" />
            <img
              src={HERO_IMG}
              alt="Samsung Galaxy S24 em vista frontal e traseira"
              width={1200}
              height={900}
              loading="eager"
              className="relative w-full rounded-[1.25rem] border border-border object-cover aspect-[4/3] shadow-elevated"
            />
            <div className="relative mt-4 flex items-center justify-between rounded-2xl border border-border bg-card p-4 shadow-soft">
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-muted-foreground">
                  Nota geral
                </span>
                <div className="mt-1 flex items-end gap-2">
                  <span className="font-heading text-3xl font-bold leading-none text-foreground">
                    {overall.toFixed(1)}
                  </span>
                  <span className="text-sm text-muted-foreground">/ 5</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < Math.round(overall) ? "fill-cta text-cta" : "text-border"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="container-tec grid gap-10 py-14 lg:grid-cols-12 lg:gap-12">
        {/* Sidebar TOC */}
        <div className="hidden lg:col-span-3 lg:block">
          <div className="sticky top-24 space-y-6">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Nesta análise
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
                Onde comprar
              </span>
              <p className="mt-2 text-sm text-muted-foreground">
                Veja a oferta mais atualizada em parceiro confiável.
              </p>
              <div className="mt-3 font-heading text-2xl font-bold text-foreground">R$ 4.299</div>
              <span className="text-[11px] text-muted-foreground">*pode variar</span>
              <a
                href="https://www.mercadolivre.com.br/celular-samsung-galaxy-s24-galaxy-ai-cmera-tripla-traseira-de-ate-50mp-selfie-de-12mp-tela-de-62-1-120hz-256gb-8gb-de-ram-esim-cinza/p/MLB34102203?pdp_filters=item_id%3AMLB4661894473&matt_tool=38524122"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground shadow-soft transition hover:brightness-105 hover:-translate-y-0.5"
              >
                Ver oferta <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                to="/comparativo/iphone-15-vs-galaxy-s24"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
              >
                Ver comparativo <GitCompare className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Main */}
        <main className="lg:col-span-9 space-y-14">
          {/* Veredito */}
          <section id="veredito" className="scroll-mt-24">
            <SectionTitle eyebrow="Veredito rápido" title="Vale a pena comprar o Galaxy S24 em 2026?" />
            <p className="mt-4 text-lg leading-relaxed text-foreground">
              Sim — e talvez seja a compra mais inteligente do segmento Android premium em 2026.
              Com a queda natural de preço pós-S26, o S24 padrão ficou na faixa de R$ 4.299
              entregando <strong>tela LTPO 120 Hz, Snapdragon 8 Gen 3 for Galaxy, Galaxy AI completa
              em português e 7 anos de atualizações</strong>. Os pontos fracos seguem sendo
              autonomia (4.000 mAh) e carga lenta (25 W), mas a soma dos acertos faz dele o
              melhor compacto Android do momento.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {SCORES.map((s) => (
                <div key={s.label} className="rounded-xl border border-border bg-card p-4 shadow-soft">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-foreground">{s.label}</span>
                    <Rating value={s.value} />
                  </div>
                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-cta"
                      style={{ width: `${(s.value / 5) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Prós e contras */}
          <section id="pros-contras" className="scroll-mt-24">
            <SectionTitle eyebrow="Prós e contras" title="O que pesa na decisão" />
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-teal/30 bg-card p-6 shadow-soft">
                <div className="flex items-center gap-2">
                  <span className="grid h-8 w-8 place-items-center rounded-md bg-teal/10 text-teal">
                    <Check className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-foreground">Pontos fortes</h3>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {PROS.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-[15px] text-foreground">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-teal" strokeWidth={2.5} />
                      <span className="leading-snug">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="flex items-center gap-2">
                  <span className="grid h-8 w-8 place-items-center rounded-md bg-destructive/10 text-destructive">
                    <X className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-foreground">Pontos fracos</h3>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {CONS.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-[15px] text-foreground">
                      <X className="mt-1 h-4 w-4 shrink-0 text-destructive" strokeWidth={2.5} />
                      <span className="leading-snug">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Specs */}
          <section id="especificacoes" className="scroll-mt-24">
            <SectionTitle eyebrow="Ficha técnica" title="Especificações" />
            <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <table className="w-full text-sm">
                <tbody>
                  {SPECS.map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-card" : "bg-surface"}>
                      <th scope="row" className="w-1/3 px-5 py-3 text-left font-semibold text-foreground">
                        {k}
                      </th>
                      <td className="px-5 py-3 text-muted-foreground">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <AnalysisBlock
            id="tela"
            icon={Sun}
            eyebrow="Tela"
            title="Dynamic AMOLED 2X LTPO: a melhor tela compacta do mercado"
            score={4.9}
            paragraphs={[
              "A tela é o argumento mais forte do Galaxy S24. O painel Dynamic AMOLED 2X com tecnologia LTPO varia de forma adaptativa entre 1 e 120 Hz, economizando bateria em telas estáticas e mantendo fluidez impecável em rolagem e jogos. O brilho de pico de 2.600 nits em conteúdo HDR coloca o aparelho à frente do iPhone 15 padrão (2.000 nits) e deixa o painel perfeitamente legível ao sol direto.",
              "A calibração de cor sai de fábrica próxima do padrão DCI-P3 com a opção 'Vivid' e do sRGB com a 'Natural'. Para criadores de conteúdo, a precisão é suficiente para edição leve em mobilidade. As bordas são finas e simétricas em três lados, com queixo um pouco mais grosso — detalhe que separa o S24 do S24 Ultra esteticamente.",
            ]}
            bullets={[
              "LTPO 1–120 Hz adaptativo com economia real de bateria",
              "2.600 nits de pico HDR, legível ao sol direto",
              "Modo Natural calibrado próximo de sRGB",
            ]}
          />

          <AnalysisBlock
            id="desempenho"
            icon={Cpu}
            eyebrow="Desempenho"
            title="Snapdragon 8 Gen 3 for Galaxy: top de linha sustentado"
            score={4.8}
            paragraphs={[
              "A versão 'for Galaxy' do Snapdragon 8 Gen 3 chega com clock levemente superior ao padrão e é exclusiva da linha S24. Em benchmarks, marca cerca de 2.250 pontos no single-core e 7.100 no multi-core do Geekbench 6. Em uso real, o que mais impressiona é a sustentação: depois de 20 minutos de carga pesada, o desempenho cai apenas 7–9% — bem abaixo dos 15–20% típicos de rivais Android.",
              "Os 8 GB de RAM LPDDR5X dão conta de multitarefa real com 6–8 apps em segundo plano sem recarregar. Para quem usa muito Samsung DeX, abrir o aparelho ao monitor entrega uma experiência de mini-PC bastante competente — algo que o iOS ainda não oferece sem adaptações.",
            ]}
            bullets={[
              "Geekbench 6: ~2.250 single / ~7.100 multi",
              "Throttling controlado: queda de 7–9% sob carga longa",
              "Samsung DeX para uso desktop em monitor externo",
            ]}
          />

          <AnalysisBlock
            id="gaming"
            icon={Gamepad2}
            eyebrow="Gaming"
            title="Gaming no Galaxy S24: 120 Hz e câmara de vapor para sessões longas"
            score={4.7}
            paragraphs={[
              "Genshin Impact roda em qualidade alta com 60 fps quase travados, e Wuthering Waves se mantém em 60 fps com configuração média-alta. Call of Duty Mobile aceita 120 fps no Battle Royale e a tela LTPO entrega de fato essa fluidez visual — algo que o iPhone 15 não consegue por travar em 60 Hz.",
              "A câmara de vapor é maior que a do S23 e dissipa calor de forma eficiente até cerca de 30 minutos. Em sessões mais longas, o aparelho atinge ~42 °C na traseira e o desempenho cai uns 8%. Para quem joga sério, é o melhor pacote do segmento compacto Android até R$ 4.500.",
            ]}
            bullets={[
              "Genshin Impact: 60 fps em High estáveis",
              "CoDM em 120 fps reais com tela acompanhando",
              "Câmara de vapor mais robusta que a do S23",
            ]}
          />

          <AnalysisBlock
            id="camera"
            icon={Camera}
            eyebrow="Câmera"
            title="Câmera de 50 MP + tele 3x: versatilidade rara no compacto"
            score={4.6}
            paragraphs={[
              "O conjunto fotográfico do S24 padrão é o que falta na maioria dos rivais: além da principal de 50 MP com OIS, ele traz uma teleobjetiva dedicada de 10 MP com zoom óptico de 3x — recurso que o iPhone 15 padrão não oferece. As fotos saem com bom alcance dinâmico, processamento Samsung um pouco mais saturado que o natural e excelente performance em retratos com bokeh recortado.",
              "Em baixa luz, o modo Noturno usa exposições de até 5 segundos e o ISP do Snapdragon entrega resultados consistentes, com ruído controlado e cores fiéis. O vídeo chega a 8K 30 fps e 4K 60 fps com HDR10+, com estabilização Super Steady muito eficiente. A ultrawide de 12 MP é o elo mais fraco: cumpre em luz boa, mas perde nitidez à noite.",
            ]}
            bullets={[
              "Teleobjetiva dedicada 3x (10 MP) — rara no compacto",
              "Vídeo 8K 30 fps e 4K 60 fps com HDR10+",
              "Modo Noturno com até 5s de exposição estabilizada",
            ]}
          />

          <AnalysisBlock
            id="ia"
            icon={Sparkles}
            eyebrow="Galaxy AI"
            title="Galaxy AI em português: o diferencial real do S24 em 2026"
            score={4.7}
            paragraphs={[
              "Galaxy AI deixou de ser promessa e virou recurso de uso diário. A tradução ao vivo de ligações funciona em português brasileiro com latência de 1–2 segundos e precisão alta para conversas comuns — testamos com inglês, espanhol e japonês. O Circle to Search (em parceria com o Google) permite contornar qualquer elemento na tela e pesquisar imediatamente, recurso que economiza tempo real quando se vê algo em foto ou vídeo.",
              "Outros destaques: Note Assist gera resumos e formatação automática de notas; Browsing Assist resume páginas longas no Samsung Internet; Photo Assist remove pessoas, objetos e reflexos com qualidade comparável ao Magic Editor do Pixel; e Interpreter funciona offline em conversas presenciais. A Samsung confirmou que esses recursos seguem gratuitos até 2025 e devem permanecer no S24 mesmo após eventual cobrança em modelos novos.",
            ]}
            bullets={[
              "Tradução ao vivo de ligações em português",
              "Circle to Search e Photo Assist generativo",
              "Recursos confirmados sem cobrança no S24",
            ]}
          />

          <AnalysisBlock
            id="bateria"
            icon={Battery}
            eyebrow="Bateria"
            title="Bateria do Galaxy S24: dia inteiro, mas sem folga"
            score={4.5}
            paragraphs={[
              "Os 4.000 mAh são o ponto mais frágil do pacote. Em uso misto (1h30 de redes sociais, 1h de streaming, 30 min de jogos, GPS e mensagens), o S24 termina o dia entre 12% e 22%, com 6h30 a 8h de tela ativa graças à eficiência do LTPO. É um resultado dentro do esperado para o tamanho da bateria, mas inferior ao Galaxy S24+ (4.900 mAh) e ao iPhone 15 Plus.",
              "O carregamento de 25 W com fio é o ponto mais defasado: 0–50% em cerca de 30 minutos e carga total em pouco mais de 1 hora. Com Android chegando a 100 W no segmento chinês, a Samsung manteve uma postura conservadora prometendo maior longevidade da bateria — algo que se confirma em históricos de saúde após 12–18 meses.",
            ]}
            bullets={[
              "Tela ativa: 6h30 a 8h em uso real",
              "0–50% em ~30 min · carga total em ~1h",
              "Saúde da bateria preservada após ciclos longos",
            ]}
          />

          <AnalysisBlock
            id="oneui"
            icon={Smartphone}
            eyebrow="One UI e ecossistema"
            title="One UI 6.1 em 2026: madura, fluida e com 7 anos de suporte"
            score={4.7}
            paragraphs={[
              "A One UI 6.1 sobre Android 14 é, hoje, a melhor versão da skin da Samsung. Animações fluidas, painel rápido reformulado, modo escuro consistente em todos os apps próprios e personalização profunda de tela inicial e telas de bloqueio. O Good Lock, baixado à parte, libera customizações que o Android puro não oferece.",
              "O ecossistema cresceu: Galaxy Watch, Buds, tablets e notebooks Samsung conversam de forma fluida com o S24 via Quick Share, transferência de áudio automática e Continuity. Para quem já tem uma TV Samsung, o Smart View ainda é a melhor experiência de espelhamento Android. O grande trunfo, porém, segue sendo o suporte: 7 anos de Android e patches garantidos até 2031, equiparando o histórico da Apple.",
            ]}
            bullets={[
              "7 anos de Android + patches garantidos pela Samsung",
              "Good Lock libera customizações exclusivas",
              "Quick Share e Continuity entre dispositivos Samsung",
            ]}
          />

          {/* Comparativos */}
          <section id="comparativos" className="scroll-mt-24">
            <SectionTitle eyebrow="Comparativos" title="Galaxy S24 vs iPhone 15 e outros rivais" />
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Contra o iPhone 15, o S24 leva vantagem em <strong>tela (LTPO 120 Hz vs 60 Hz)</strong>,
              <strong> versatilidade fotográfica</strong> (teleobjetiva dedicada de 3x), <strong>recursos
              de IA generativa nativos</strong> e <strong>preço cerca de R$ 1.200 menor</strong> no
              Brasil em 2026. O iPhone devolve com câmera mais previsível em vídeo, integração com
              Mac/iPad/AirPods e curva de revenda mais favorável. Para quem está fora do ecossistema
              Apple, o S24 é hoje a escolha mais racional na faixa premium até R$ 4.500.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {COMPARES.map((c) => (
                <Link
                  key={c.title}
                  to="/comparativo/iphone-15-vs-galaxy-s24"
                  className="group rounded-2xl border border-border bg-card p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-card"
                >
                  <Badge variant="teal">VS</Badge>
                  <h3 className="mt-3 font-heading text-base font-semibold text-foreground">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{c.note}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-foreground group-hover:text-cta">
                    Ver comparativo <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Recomendação */}
          <section id="recomendacao" className="scroll-mt-24">
            <SectionTitle eyebrow="Recomendação" title="Veredito final: Galaxy S24 vale a pena em 2026?" />
            <div className="mt-6 rounded-2xl border border-border bg-card p-6 md:p-8 shadow-soft">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    Compre se você…
                  </h3>
                  <ul className="mt-3 space-y-2 text-[15px] text-foreground">
                    {[
                      "Quer o melhor compacto Android premium com a tela mais brilhante da categoria",
                      "Vai usar Galaxy AI no dia a dia (tradução, Circle to Search, Photo Assist)",
                      "Vem de um Galaxy S21, S22 ou anterior e quer um upgrade de 4+ anos",
                      "Joga títulos pesados e quer 120 Hz reais com câmara de vapor",
                      "Já tem Galaxy Watch, Buds ou TV Samsung e busca integração total",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-teal" strokeWidth={2.5} />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    Evite se você…
                  </h3>
                  <ul className="mt-3 space-y-2 text-[15px] text-foreground">
                    {[
                      "Precisa de bateria de dois dias — olhe o S24+ ou um intermediário com 5.000 mAh",
                      "Quer carga ultrarrápida (45 W ou mais) presente em rivais chineses",
                      "Já tem um Galaxy S23 — o ganho prático é incremental",
                      "Vive no ecossistema Apple (Mac, iPad, AirPods) — o iPhone 15 faz mais sentido",
                      "Procura o melhor custo-benefício puro (Redmi Note 13 Pro entrega mais hardware por R$)",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2">
                        <X className="mt-1 h-4 w-4 shrink-0 text-destructive" strokeWidth={2.5} />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-muted-foreground">
                    Veredito final
                  </span>
                  <p className="mt-1 font-heading text-lg font-semibold text-foreground">
                    Sim, o Galaxy S24 vale a pena em 2026 — é o melhor Android compacto pelo preço.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.mercadolivre.com.br/celular-samsung-galaxy-s24-galaxy-ai-cmera-tripla-traseira-de-ate-50mp-selfie-de-12mp-tela-de-62-1-120hz-256gb-8gb-de-ram-esim-cinza/p/MLB34102203?pdp_filters=item_id%3AMLB4661894473&matt_tool=38524122"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex items-center gap-2 rounded-lg bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground shadow-soft transition hover:brightness-105 hover:-translate-y-0.5"
                  >
                    Ver oferta <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <Link
                    to="/comparativo/iphone-15-vs-galaxy-s24"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
                  >
                    Ver comparativo <GitCompare className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="scroll-mt-24">
            <SectionTitle eyebrow="Perguntas frequentes" title="FAQ: Galaxy S24 em 2026" />
            <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-soft divide-y divide-border">
              {FAQ.map((item, i) => {
                const open = openFaq === i;
                return (
                  <div key={item.q}>
                    <button
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-heading text-[15px] font-semibold text-foreground">
                        {item.q}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
                      />
                    </button>
                    {open && (
                      <div className="px-6 pb-6 text-[15px] leading-relaxed text-muted-foreground">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      </div>

      {/* Mobile floating CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur lg:hidden">
        <div className="container-tec flex items-center gap-3">
          <div className="min-w-0 flex-1">
            <span className="block text-[10px] uppercase tracking-wider text-muted-foreground">
              Galaxy S24
            </span>
            <span className="font-heading text-base font-bold text-foreground">R$ 4.299</span>
          </div>
          <Link
            to="/comparativo/iphone-15-vs-galaxy-s24"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-2.5 text-xs font-semibold text-foreground"
          >
            Comparar
          </Link>
          <a
            href="https://www.mercadolivre.com.br/celular-samsung-galaxy-s24-galaxy-ai-cmera-tripla-traseira-de-ate-50mp-selfie-de-12mp-tela-de-62-1-120hz-256gb-8gb-de-ram-esim-cinza/p/MLB34102203?pdp_filters=item_id%3AMLB4661894473&matt_tool=38524122"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-1.5 rounded-lg bg-cta px-4 py-2.5 text-xs font-semibold text-cta-foreground shadow-soft"
          >
            Ver oferta <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
      <div className="h-20 lg:hidden" aria-hidden />
    </article>
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

function AnalysisBlock({
  id,
  icon: Icon,
  eyebrow,
  title,
  score,
  paragraphs,
  bullets,
}: {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  eyebrow: string;
  title: string;
  score: number;
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
            Nota
          </span>
          <span className="font-heading text-lg font-bold leading-none text-foreground">
            {score.toFixed(1)}
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







