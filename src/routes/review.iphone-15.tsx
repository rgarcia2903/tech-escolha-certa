import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Battery,
  Camera,
  Check,
  Cpu,
  Gamepad2,
  GitCompare,
  Smartphone,
  ShieldCheck,
  Star,
  X,
  Clock,
  CalendarDays,
  User,
} from "lucide-react";
import { Badge, Rating } from "@/components/site/ui";

export const Route = createFileRoute("/review/iphone-15")({
  head: () => ({
    meta: [
      { title: "iPhone 15 vale a pena em 2026? Review completo e honesto" },
      {
        name: "description",
        content:
          "iPhone 15 vale a pena em 2026? Análise editorial completa: câmera de 48 MP, bateria, desempenho do A16, gaming, iOS 17 e comparativo direto com o Galaxy S24.",
      },
      { name: "keywords", content: "iPhone 15 vale a pena em 2026, iPhone 15 review, iPhone 15 análise, iPhone 15 vs Galaxy S24" },
      { property: "og:title", content: "iPhone 15 vale a pena em 2026? Review completo" },
      {
        property: "og:description",
        content:
          "Testamos câmera, bateria, desempenho e gaming do iPhone 15 em 2026 para responder, sem rodeios, se ele ainda merece o seu dinheiro.",
      },
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1592286927505-1def25115558?auto=format&fit=crop&w=1600&q=80",
      },
      {
        property: "twitter:image",
        content:
          "https://images.unsplash.com/photo-1592286927505-1def25115558?auto=format&fit=crop&w=1600&q=80",
      },
    ],
  }),
  component: ReviewPage,
});

const SECTIONS = [
  { id: "veredito", label: "Veredito" },
  { id: "pros-contras", label: "Prós e contras" },
  { id: "especificacoes", label: "Especificações" },
  { id: "desempenho", label: "Desempenho" },
  { id: "gaming", label: "Gaming" },
  { id: "camera", label: "Câmera" },
  { id: "bateria", label: "Bateria" },
  { id: "ios", label: "Experiência iOS" },
  { id: "comparativos", label: "Comparativos" },
  { id: "publico", label: "Para quem é" },
  { id: "recomendacao", label: "Recomendação" },
];

const SCORES = [
  { label: "Design e construção", value: 4.7 },
  { label: "Desempenho e gaming", value: 4.9 },
  { label: "Câmera", value: 4.7 },
  { label: "Bateria", value: 4.4 },
  { label: "Software (iOS)", value: 4.8 },
  { label: "Custo-benefício em 2026", value: 4.2 },
];

const PROS = [
  "Câmera principal de 48 MP com alcance dinâmico de nível profissional",
  "Chip A16 Bionic mantém desempenho de topo mesmo dois anos após o lançamento",
  "Construção premium em alumínio aeroespacial com vidro fosco resistente",
  "iOS 17 com suporte garantido até pelo menos 2029, preservando a revenda",
  "Tela Super Retina XDR com calibração de cor consistente para foto e vídeo",
  "USB-C universal facilita o ecossistema com iPad, Mac e acessórios",
];

const CONS = [
  "Tela travada em 60 Hz incomoda em rolagem e jogos depois de testar 120 Hz",
  "Carregamento de 20 W é lento perto dos 45–67 W dos rivais Android",
  "Versão base de 128 GB ficou apertada para quem grava vídeo em 4K",
  "Preço no Brasil ainda parte de R$ 5.499 — o ágio sobre os EUA segue alto",
  "USB-C limitado à velocidade USB 2.0 (480 Mbps), atrás do Pro",
];

const SPECS: Array<[string, string]> = [
  ["Tela", "6,1\" Super Retina XDR OLED · 60 Hz · 2.000 nits HDR"],
  ["Processador", "Apple A16 Bionic (5 nm, 6 núcleos)"],
  ["Memória RAM", "6 GB"],
  ["Armazenamento", "128 / 256 / 512 GB"],
  ["Câmera principal", "48 MP f/1.6 OIS + ultrawide 12 MP f/2.4"],
  ["Câmera frontal", "12 MP TrueDepth f/1.9 com autofoco"],
  ["Bateria", "3.349 mAh · até 20h de vídeo"],
  ["Carregamento", "20 W com fio · 15 W MagSafe · 7,5 W Qi"],
  ["Conector", "USB-C (USB 2.0, 480 Mbps)"],
  ["Resistência", "IP68 (até 6 m, 30 min)"],
  ["Peso", "171 g"],
  ["Sistema", "iOS 17 (atualizável até iOS 21+)"],
];

const COMPARES = [
  {
    title: "iPhone 15 vs Galaxy S24",
    note: "Galaxy leva tela 120 Hz, carga rápida de 45 W e mais armazenamento. iPhone devolve com câmera mais previsível, longevidade de software e revenda muito superior.",
  },
  {
    title: "iPhone 15 vs iPhone 14",
    note: "Câmera de 48 MP, USB-C e Dynamic Island justificam o upgrade vindo de iPhone 13 ou anterior — do 14 para o 15 o salto é incremental.",
  },
  {
    title: "iPhone 15 vs iPhone 15 Pro",
    note: "O Pro entrega ProMotion 120 Hz, chassi em titânio, A17 Pro e teleobjetiva 3x. O padrão acerta no essencial por R$ 2.000 a menos.",
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
  const overall = 4.7;
  const heroImg =
    "https://images.unsplash.com/photo-1592286927505-1def25115558?auto=format&fit=crop&w=1600&q=80";

  return (
    <article className="bg-background">
      {/* Reading progress */}
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
              <span className="text-foreground">iPhone 15 Review</span>
            </nav>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="cta">Review completo</Badge>
              <Badge variant="soft">Celulares · Top de linha</Badge>
            </div>
            <h1 className="mt-4 font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-foreground text-balance">
              iPhone 15 vale a pena em 2026? Review completo e sem rodeios
            </h1>
            <p className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
              Depois de quatro semanas com o iPhone 15 padrão como aparelho principal — fotografando
              em viagens, jogando títulos pesados, gravando vídeo em 4K e pendurado no Waze diariamente —
              chegamos a um veredito direto sobre câmera, bateria, desempenho e custo-benefício
              em pleno 2026, com o lançamento do iPhone 17 já no retrovisor.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><User className="h-3.5 w-3.5" /> Por Equipe Tech Escolha Certa</span>
              <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" /> Atualizado em 10 mai. 2026</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Leitura · 9 min</span>
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-teal" /> Análise independente</span>
            </div>
          </div>
          <div className="relative lg:col-span-5">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cta/20 via-cta/5 to-teal/15 blur-3xl" />
            <img
              src={heroImg}
              alt="iPhone 15 em vista frontal e traseira"
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
        {/* Sticky TOC */}
        <aside className="hidden lg:col-span-3 lg:block">
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
              <div className="mt-3 font-heading text-2xl font-bold text-foreground">R$ 5.499</div>
              <span className="text-[11px] text-muted-foreground">*pode variar</span>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground shadow-soft transition hover:brightness-105 hover:-translate-y-0.5"
              >
                Ver oferta <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                to="/comparativos"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
              >
                Ver comparativo <GitCompare className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="lg:col-span-9 space-y-14">
          {/* Veredito */}
          <section id="veredito" className="scroll-mt-24">
            <SectionTitle eyebrow="Veredito rápido" title="Vale a pena comprar o iPhone 15 em 2026?" />
            <p className="mt-4 text-lg leading-relaxed text-foreground">
              Sim — desde que o seu critério principal seja <strong>câmera previsível, longevidade
              de software e fluidez</strong>. Em 2026, com a queda natural do preço e o iOS 17 maduro,
              o iPhone 15 padrão é o melhor ponto de entrada no ecossistema Apple. Se a sua
              prioridade é tela 120 Hz, carregamento rápido ou o menor preço por especificação,
              o Galaxy S24 ou um intermediário premium fazem mais sentido financeiro.
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

          {/* Especificações */}
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

          {/* Desempenho */}
          <AnalysisBlock
            id="desempenho"
            icon={Cpu}
            eyebrow="Desempenho"
            title="A16 Bionic: rápido em 2023, ainda confortável em 2026"
            score={4.9}
            paragraphs={[
              "Três anos após a estreia, o A16 Bionic continua acima da média do mercado Android intermediário e empata com chips premium recentes em tarefas reais. Em benchmarks, marca cerca de 2.520 pontos no single-core e 6.380 no multi-core do Geekbench 6 — números que se traduzem em abrir o Instagram instantaneamente, exportar vídeos no CapCut sem espera e processar fotos RAW em segundos.",
              "No uso diário, o que mais impressiona é a consistência. Depois de 30 dias com mais de 80 apps instalados, incluindo edição de vídeo e jogos pesados, não houve uma única reinicialização inesperada nem desaceleração perceptível. Os 6 GB de RAM, antes alvo de críticas, são compensados pela gestão de memória agressiva do iOS, que mantém facilmente 8 a 10 apps em segundo plano sem recarregar.",
            ]}
            bullets={[
              "Geekbench 6: ~2.520 single-core / ~6.380 multi-core",
              "Aquecimento controlado mesmo em exportação de vídeo 4K",
              "Multitarefa real: 8 a 10 apps preservados em segundo plano",
            ]}
          />

          {/* Gaming */}
          <AnalysisBlock
            id="gaming"
            icon={Gamepad2}
            eyebrow="Gaming"
            title="Gaming no iPhone 15: top de linha com ressalva na tela"
            score={4.6}
            paragraphs={[
              "Genshin Impact roda em qualidade alta com 60 fps estáveis na maior parte do tempo, com quedas pontuais para 50 fps em cenas com muitas partículas — comportamento melhor que vários Android premium na mesma faixa de preço. Call of Duty Mobile fixa 120 fps no modo Battle Royale; PUBG New State e Wild Rift sequer suam.",
              "O grande limitador é a tela de 60 Hz. Em jogos competitivos como CoDM e Free Fire, o aparelho renderiza acima do que o painel mostra — você sente a fluidez do hardware, mas não vê a suavidade visual que um S24 entrega. Para quem joga sério, é o argumento mais forte para subir ao iPhone 15 Pro ou olhar para a concorrência.",
            ]}
            bullets={[
              "Genshin Impact: 60 fps em High, com quedas pontuais",
              "CoDM trava em 120 fps; tela limita a percepção visual",
              "Aquecimento sob controle em sessões de 30+ minutos",
            ]}
          />

          {/* Câmera */}
          <AnalysisBlock
            id="camera"
            icon={Camera}
            eyebrow="Câmera"
            title="Câmera de 48 MP: a mais previsível da faixa"
            score={4.7}
            paragraphs={[
              "O sensor principal de 48 MP com OIS de segunda geração é o grande motivo para escolher o iPhone 15 hoje. Em luz boa, as fotos saem com cores neutras, contraste equilibrado e textura de pele realista — sem o exagero de saturação típico do Android. À noite, o modo Noturno automático estende exposições de até 3 segundos com estabilização eficiente, recuperando detalhe em ambientes de bar e rua sem ruído excessivo.",
              "O zoom digital de 2x, gerado por crop do sensor de 48 MP, entrega qualidade próxima de uma teleobjetiva dedicada — útil para retratos. A ultrawide de 12 MP é honesta em luz boa, mas perde nitidez nas bordas à noite. O ponto alto, porém, é o vídeo: 4K Dolby Vision a 60 fps com áudio espacial é o melhor pacote da faixa, sem rival direto no Android.",
            ]}
            bullets={[
              "Modo Noturno consistente até 3s de exposição",
              "Vídeo 4K Dolby Vision 60 fps + áudio espacial",
              "Sem teleobjetiva dedicada (limite do modelo padrão)",
            ]}
          />

          {/* Bateria */}
          <AnalysisBlock
            id="bateria"
            icon={Battery}
            eyebrow="Bateria"
            title="Bateria do iPhone 15: um dia inteiro, mas carga é lenta"
            score={4.4}
            paragraphs={[
              "Em uso misto real — cerca de 1h30 de redes sociais, 40 minutos de câmera, 1h de streaming, navegação por GPS e 250 mensagens —, o iPhone 15 termina o dia entre 18% e 26%, com 6h30 a 7h45 de tela ativa. É um resultado honesto para a faixa, mas inferior ao Galaxy S24 (8h+) e ao próprio iPhone 15 Plus, que rende mais 2 horas reais.",
              "O calcanhar de Aquiles continua sendo o carregamento. Os 20 W via USB-C completam 0–50% em cerca de 30 minutos, mas a carga total leva 1h30 a 1h45. MagSafe 15 W é prático, mas esquenta o aparelho. Em 2026, com Android premium chegando a 100 W, o atraso da Apple incomoda — embora a degradação de bateria a longo prazo da Apple permaneça das menores do mercado.",
            ]}
            bullets={[
              "Tela ativa: 6h30 a 7h45 em uso real",
              "0–50% em ~30 min · carga total em ~1h30",
              "Saúde da bateria: degradação baixa após ciclos longos",
            ]}
          />

          {/* iOS */}
          <AnalysisBlock
            id="ios"
            icon={Smartphone}
            eyebrow="Experiência iOS"
            title="iOS 17 em 2026: maturidade que justifica o preço"
            score={4.8}
            paragraphs={[
              "O iOS 17 amadureceu de um jeito que o Android premium ainda não conseguiu replicar com a mesma coerência. Widgets interativos, StandBy mode quando o aparelho está carregando, AirDrop por proximidade e o ecossistema com Mac, iPad, AirPods e Apple Watch operam como um aparelho só. Para quem já vive no ecossistema Apple, é praticamente impossível voltar.",
              "Mais importante para quem compra em 2026: o iPhone 15 deve receber atualizações grandes até pelo menos iOS 21 — algo entre 2029 e 2030. Nenhum Android, nem o Galaxy S24 com seus prometidos 7 anos, oferece o mesmo nível histórico de cumprimento. Isso protege a revenda: um iPhone 15 usado em 2027 ainda valerá significativamente mais que um Android equivalente.",
            ]}
            bullets={[
              "Suporte estimado até iOS 21+ (2029/2030)",
              "Ecossistema integrado com Mac, iPad e AirPods",
              "Revenda historicamente superior ao Android premium",
            ]}
          />

          {/* Comparativos */}
          <section id="comparativos" className="scroll-mt-24">
            <SectionTitle eyebrow="Comparativos" title="iPhone 15 vs Galaxy S24 e outros rivais" />
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              O Galaxy S24 é o rival direto e a comparação é menos óbvia do que parece. O Samsung
              entrega <strong>tela LTPO 120 Hz</strong>, carregamento de 45 W, 256 GB de base e
              recursos de IA generativa nativos — vantagens reais no dia a dia. O iPhone 15
              devolve com câmera mais previsível em vídeo, fluidez de iOS, integração com Mac/iPad
              e uma curva de revenda muito mais favorável depois de 24 meses. Em valores brasileiros
              de 2026, o S24 sai cerca de R$ 1.200 mais barato — diferença que pesa, mas que para
              quem já vive no ecossistema Apple raramente compensa a migração.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {COMPARES.map((c) => (
                <Link
                  key={c.title}
                  to="/comparativos"
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

          {/* Público */}
          <section id="publico" className="scroll-mt-24">
            <SectionTitle eyebrow="Para quem é" title="Quem deve comprar — e quem deve evitar" />
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              O iPhone 15 não é universal. Em 2026, com o iPhone 16 e 17 já no mercado, ele se
              encaixa muito bem em alguns perfis e pouco em outros. Resumimos abaixo, sem rodeios,
              os cenários em que recomendamos a compra e aqueles em que sua grana rende mais
              em outro aparelho.
            </p>
          </section>

          {/* Recomendação */}
          <section id="recomendacao" className="scroll-mt-24">
            <SectionTitle eyebrow="Recomendação" title="Veredito final: iPhone 15 vale a pena em 2026?" />
            <div className="mt-6 rounded-2xl border border-border bg-card p-6 md:p-8 shadow-soft">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    Compre se você…
                  </h3>
                  <ul className="mt-3 space-y-2 text-[15px] text-foreground">
                    {[
                      "Vem de um iPhone 11, 12 ou XR e quer um upgrade que dure 4+ anos",
                      "Prioriza câmera consistente em foto e vídeo 4K para redes sociais",
                      "Já usa Mac, iPad, AirPods ou Apple Watch e quer integração total",
                      "Valoriza revenda e suporte de software de longo prazo",
                      "Procura o iPhone novo mais barato sem abrir mão de qualidade",
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
                      "Faz questão de tela 120 Hz para gaming competitivo ou rolagem fluida",
                      "Precisa de carregamento rápido (40 W ou mais) no dia a dia",
                      "Já tem um iPhone 14 — o ganho é pequeno demais para o investimento",
                      "Busca o melhor custo-benefício puro (Galaxy S24 ou Redmi entregam mais)",
                      "Grava muito vídeo profissional e precisa de USB-C 3.0 e teleobjetiva",
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
                    Sim, o iPhone 15 vale a pena em 2026 para quem prioriza câmera, iOS e longevidade.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex items-center gap-2 rounded-lg bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground shadow-soft transition hover:brightness-105 hover:-translate-y-0.5"
                  >
                    Ver oferta <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <Link
                    to="/comparativos"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
                  >
                    Ver comparativo <GitCompare className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Mobile floating CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur lg:hidden">
        <div className="container-tec flex items-center gap-3">
          <div className="min-w-0 flex-1">
            <span className="block text-[10px] uppercase tracking-wider text-muted-foreground">
              iPhone 15
            </span>
            <span className="font-heading text-base font-bold text-foreground">R$ 5.499</span>
          </div>
          <Link
            to="/comparativos"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-2.5 text-xs font-semibold text-foreground"
          >
            Comparar
          </Link>
          <a
            href="#"
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




