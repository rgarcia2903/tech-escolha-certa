import { IPHONE_15_AFFILIATE_URL } from "@/lib/affiliate-links";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AffiliateRedirectNotice } from "@/components/site/AffiliateRedirectNotice";
import { PurchaseActions } from "@/components/site/PurchaseActions";
import { ScoreMethodLink } from "@/components/site/ScoreMethodLink";
import { trackAffiliateClick } from "@/lib/analytics";
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

const HERO_IMG = "https://techescolhacerta.com.br/images/products/iphone-15-optimized.webp";

export const Route = createFileRoute("/review/iphone-15")({
  head: () => ({
    meta: [
      { title: "iPhone 15 vale a pena em 2026? Review completo e honesto" },
      {
        name: "description",
        content:
          "iPhone 15 vale a pena em 2026? Análise editorial completa: câmera de 48 MP, bateria, desempenho do A16, iOS e comparativo direto com o Galaxy S24.",
      },
      {
        name: "keywords",
        content:
          "iPhone 15 vale a pena em 2026, iPhone 15 review, iPhone 15 análise, iPhone 15 vs Galaxy S24",
      },
      { property: "og:title", content: "iPhone 15 vale a pena em 2026? Review completo" },
      {
        property: "og:description",
        content:
          "Analisamos câmera, bateria, desempenho e experiência de uso do iPhone 15 em 2026 para responder se ele ainda merece o seu dinheiro.",
      },
      {
        property: "og:image",
        content: HERO_IMG,
      },
      {
        property: "twitter:image",
        content: HERO_IMG,
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
  "Longo histórico de atualizações do iOS e boa procura no mercado de usados",
  "Tela Super Retina XDR com calibração de cor consistente para foto e vídeo",
  "USB-C universal facilita o ecossistema com iPad, Mac e acessórios",
];

const CONS = [
  "Tela travada em 60 Hz incomoda em rolagem e jogos depois de testar 120 Hz",
  "Carregamento de 20 W é lento perto dos 45–67 W dos rivais Android",
  "Versão base de 128 GB ficou apertada para quem grava vídeo em 4K",
  "Preço no Brasil costuma ficar acima de rivais Android equivalentes",
  "USB-C limitado à velocidade USB 2.0 (480 Mbps), atrás do Pro",
];

const SPECS: Array<[string, string]> = [
  ["Tela", '6,1" Super Retina XDR OLED · 60 Hz · 2.000 nits HDR'],
  ["Processador", "Apple A16 Bionic (6 núcleos)"],
  ["Memória RAM", "6 GB"],
  ["Armazenamento", "128 / 256 / 512 GB"],
  ["Câmera principal", "48 MP f/1.6 OIS + ultrawide 12 MP f/2.4"],
  ["Câmera frontal", "12 MP TrueDepth f/1.9 com autofoco"],
  ["Bateria", "Até 20h de reprodução de vídeo, segundo a Apple"],
  ["Carregamento", "20 W com fio · 15 W MagSafe · 7,5 W Qi"],
  ["Conector", "USB-C (USB 2.0, 480 Mbps)"],
  ["Resistência", "IP68 (até 6 m, 30 min)"],
  ["Peso", "171 g"],
  ["Sistema", "iOS · compatível com as atualizações disponibilizadas pela Apple"],
];

const COMPARES = [
  {
    title: "iPhone 15 vs Galaxy S24",
    note: "Galaxy leva tela 120 Hz, carga de 25 W e mais armazenamento em algumas versões. iPhone devolve com câmera previsível, integração com o ecossistema Apple e boa revenda.",
  },
  {
    title: "iPhone 15 vs iPhone 14",
    note: "Câmera de 48 MP, USB-C e Dynamic Island justificam o upgrade vindo de iPhone 13 ou anterior — do 14 para o 15 o salto é incremental.",
  },
  {
    title: "iPhone 15 vs iPhone 15 Pro",
    note: "O Pro entrega ProMotion 120 Hz, chassi em titânio, A17 Pro e teleobjetiva 3x. O padrão acerta no essencial e normalmente custa menos.",
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
              <Link to="/" className="hover:text-foreground">
                Home
              </Link>
              <span>/</span>
              <Link to="/celulares" className="hover:text-foreground">
                Celulares
              </Link>
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
              Nesta análise editorial, reunimos especificações oficiais e os pontos que mais pesam
              na compra do iPhone 15 padrão: câmera, bateria, desempenho, experiência com o iOS e
              custo-benefício em 2026.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <User className="h-3.5 w-3.5" /> Por Equipe Tech Escolha Certa
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5" /> Atualizado em 10 mai. 2026
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> Leitura · 9 min
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-teal" /> Análise independente
              </span>
            </div>

            <PurchaseActions
              className="mt-6"
              options={[
                {
                  productName: "iPhone 15",
                  href: IPHONE_15_AFFILIATE_URL,
                  label: "Ver iPhone 15 no Mercado Livre",
                },
              ]}
              pageType="review"
              placement="hero"
            />
          </div>
          <div className="relative lg:col-span-5">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cta/20 via-cta/5 to-teal/15 blur-3xl" />
            <img
              src={HERO_IMG}
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
                    {(overall * 2).toFixed(1)}
                  </span>
                  <span className="text-sm text-muted-foreground">/10</span>
                </div>
                <ScoreMethodLink className="mt-2" />
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
              <div className="mt-3 font-heading text-lg font-bold text-foreground">
                Consulte o preço atual
              </div>
              <span className="text-[11px] text-muted-foreground">
                Preço, estoque e condições podem mudar
              </span>
              <a
                href={IPHONE_15_AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer sponsored"
                onClick={() =>
                  trackAffiliateClick({
                    productName: "iPhone 15",
                    pageType: "review",
                    ctaPlacement: "sidebar",
                  })
                }
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground shadow-soft transition hover:brightness-105 hover:-translate-y-0.5"
              >
                Ver iPhone 15 no Mercado Livre <ArrowUpRight className="h-4 w-4" />
              </a>
              <AffiliateRedirectNotice className="mt-3" />
              <Link
                to="/comparativos"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
              >
                Ver comparativo <GitCompare className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Main content */}
        <main className="lg:col-span-9 space-y-14">
          {/* Veredito */}
          <section id="veredito" className="scroll-mt-24">
            <SectionTitle
              eyebrow="Veredito rápido"
              title="Vale a pena comprar o iPhone 15 em 2026?"
            />
            <p className="mt-4 text-lg leading-relaxed text-foreground">
              Sim — desde que o seu critério principal seja{" "}
              <strong>câmera previsível, longevidade de software e fluidez</strong>. Em 2026, com a
              queda natural do preço e um iOS maduro, o iPhone 15 padrão é o melhor ponto de entrada
              no ecossistema Apple. Se a sua prioridade é tela 120 Hz, carregamento rápido ou o
              menor preço por especificação, o Galaxy S24 ou um intermediário premium fazem mais
              sentido financeiro.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {SCORES.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-border bg-card p-4 shadow-soft"
                >
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
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    Pontos fortes
                  </h3>
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
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    Pontos fracos
                  </h3>
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
                      <th
                        scope="row"
                        className="w-1/3 px-5 py-3 text-left font-semibold text-foreground"
                      >
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
              "Três anos após a estreia, o A16 Bionic continua confortável para redes sociais, navegação, câmera, edição e jogos. Resultados de benchmark variam por versão do sistema, temperatura e metodologia, por isso são menos úteis do que observar o perfil de uso.",
              "No uso diário, o A16 continua confortável para redes sociais, navegação, câmera, edição e jogos. Os 6 GB de RAM são administrados pelo iOS, embora aplicativos pesados possam recarregar com mais frequência do que em aparelhos com mais memória.",
            ]}
            bullets={[
              "A16 Bionic ainda atende tarefas exigentes",
              "Desempenho varia conforme temperatura e software",
              "Gestão de memória integrada ao iOS",
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
              "O A16 Bionic ainda oferece potência para jogos exigentes, mas desempenho, temperatura e autonomia variam conforme o título, a qualidade gráfica e a versão do sistema.",
              "O grande limitador é a tela de 60 Hz. Em jogos compatíveis com taxas maiores, o painel não mostra a mesma suavidade visual de um aparelho de 90 ou 120 Hz, como o Galaxy S24.",
            ]}
            bullets={[
              "A16 Bionic ainda tem boa folga para jogos",
              "Tela de 60 Hz limita a fluidez visual",
              "Resultado varia conforme jogo e configuração",
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
              "A Apple informa até 20 horas de reprodução de vídeo. A autonomia real varia bastante com brilho, sinal, câmera, jogos, navegação e saúde da bateria; quem usa o aparelho intensamente pode precisar de uma recarga antes do fim do dia.",
              "O carregamento é mais lento que o de muitos rivais Android. Com adaptador compatível, a Apple informa recarga de até cerca de 50% em 30 minutos; o MagSafe acrescenta conveniência, mas também pode gerar mais calor.",
            ]}
            bullets={[
              "Até 20h de reprodução de vídeo, segundo a Apple",
              "Até cerca de 50% em 30 min com adaptador compatível",
              "Autonomia depende do uso e da saúde da bateria",
            ]}
          />

          {/* iOS */}
          <AnalysisBlock
            id="ios"
            icon={Smartphone}
            eyebrow="Experiência iOS"
            title="iOS em 2026: integração e suporte de longo prazo"
            score={4.8}
            paragraphs={[
              "O iOS oferece integração consistente com Mac, iPad, AirPods e Apple Watch, além de recursos como AirDrop, StandBy e widgets interativos. Esse ecossistema continua sendo um argumento forte para quem já usa outros produtos Apple.",
              "A Apple não publica antecipadamente uma data final de suporte para cada iPhone. O histórico da marca indica vários anos de atualizações, mas a decisão deve considerar o suporte efetivamente disponível no momento da compra, sem prometer uma versão futura específica.",
            ]}
            bullets={[
              "Histórico de vários anos de atualizações",
              "Ecossistema integrado com Mac, iPad e AirPods",
              "Revenda historicamente superior ao Android premium",
            ]}
          />

          {/* Comparativos */}
          <section id="comparativos" className="scroll-mt-24">
            <SectionTitle eyebrow="Comparativos" title="iPhone 15 vs Galaxy S24 e outros rivais" />
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              O Galaxy S24 é o rival direto e a comparação é menos óbvia do que parece. O Samsung
              entrega <strong>tela LTPO 120 Hz</strong>, carregamento de 25 W e mais armazenamento
              em algumas versões, recursos de IA generativa nativos — vantagens reais no dia a dia.
              O iPhone 15 devolve com câmera mais previsível em vídeo, fluidez de iOS, integração
              com Mac/iPad e uma curva de revenda historicamente favorável. O S24 costuma aparecer
              mais barato — diferença que pesa, mas que para quem já vive no ecossistema Apple
              raramente compensa a migração.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {COMPARES.map((c) => (
                <Link
                  key={c.title}
                  to="/comparativos"
                  className="group rounded-2xl border border-border bg-card p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-card"
                >
                  <Badge variant="teal">VS</Badge>
                  <h3 className="mt-3 font-heading text-base font-semibold text-foreground">
                    {c.title}
                  </h3>
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
              os cenários em que recomendamos a compra e aqueles em que sua grana rende mais em
              outro aparelho.
            </p>
          </section>

          {/* Recomendação */}
          <section id="recomendacao" className="scroll-mt-24">
            <SectionTitle
              eyebrow="Recomendação"
              title="Veredito final: iPhone 15 vale a pena em 2026?"
            />
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
                    Sim, o iPhone 15 vale a pena em 2026 para quem prioriza câmera, iOS e
                    longevidade.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={IPHONE_15_AFFILIATE_URL}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    onClick={() =>
                      trackAffiliateClick({
                        productName: "iPhone 15",
                        pageType: "review",
                        ctaPlacement: "content",
                      })
                    }
                    className="inline-flex items-center gap-2 rounded-lg bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground shadow-soft transition hover:brightness-105 hover:-translate-y-0.5"
                  >
                    Ver iPhone 15 no Mercado Livre <ArrowUpRight className="h-4 w-4" />
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
            <span className="font-heading text-sm font-bold text-foreground">Preço atualizado</span>
          </div>
          <Link
            to="/comparativos"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-2.5 text-xs font-semibold text-foreground"
          >
            Comparar
          </Link>
          <a
            href={IPHONE_15_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            onClick={() =>
              trackAffiliateClick({
                productName: "iPhone 15",
                pageType: "review",
                ctaPlacement: "sticky",
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
