import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type ComponentType } from "react";
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
  Medal,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Trophy,
  User,
  CalendarDays,
  Clock,
  X,
  Zap,
} from "lucide-react";
import { Badge, Rating } from "@/components/site/ui";

export const Route = createFileRoute("/comparativo/galaxy-a55-vs-redmi-note-13-pro")({
  head: () => ({
    meta: [
      {
        title:
          "Galaxy A55 vs Redmi Note 13 Pro: qual vale mais a pena em 2026?",
      },
      {
        name: "description",
        content:
          "Galaxy A55 vs Redmi Note 13 Pro: comparativo completo de câmera, tela, desempenho, bateria, construção, custo-benefício e recomendação de compra em 2026.",
      },
      {
        name: "keywords",
        content:
          "Galaxy A55 vs Redmi Note 13 Pro, Galaxy A55 ou Redmi Note 13 Pro, melhor celular até 2000, comparativo Samsung Xiaomi",
      },
      {
        property: "og:title",
        content:
          "Galaxy A55 vs Redmi Note 13 Pro: qual vale mais a pena em 2026?",
      },
      {
        property: "og:description",
        content:
          "Comparamos Galaxy A55 e Redmi Note 13 Pro em câmera, bateria, desempenho, tela e custo-benefício para mostrar qual comprar em 2026.",
      },
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=1600&q=80",
      },
      {
        property: "twitter:image",
        content:
          "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=1600&q=80",
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

const GALAXY = {
  name: "Galaxy A55",
  badge: "Mais equilibrado",
  rating: 4.6,
  price: "R$ 1.899",
  image:
    "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1200&q=80",
  strengths: [
    "Construção premium com vidro e alumínio",
    "One UI madura, estável e com boa política de atualizações",
    "Câmeras mais consistentes para fotos do dia a dia",
    "IP67 contra água e poeira",
    "Experiência Samsung mais confiável para longo prazo",
  ],
  weaknesses: [
    "Carregamento de 25 W é lento para a categoria",
    "Desempenho em jogos pesados fica atrás do Poco X6 Pro",
    "Carregador geralmente não vem na caixa",
  ],
};

const REDMI = {
  name: "Redmi Note 13 Pro",
  badge: "Melhor ficha técnica",
  rating: 4.5,
  price: "R$ 1.699",
  image:
    "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1200&q=80",
  strengths: [
    "Tela AMOLED muito forte para a faixa de preço",
    "Carregamento rápido de 67 W",
    "Câmera principal de 200 MP chama atenção em boa luz",
    "Ótimo custo-benefício em promoções",
    "Boa fluidez para redes sociais, vídeos e uso intenso",
  ],
  weaknesses: [
    "Construção e proteção inferiores ao Galaxy A55",
    "Software com mais apps pré-instalados e anúncios em algumas regiões",
    "Câmeras secundárias são simples",
  ],
};

const QUICK_SCORE = [
  { category: "Construção", winner: "Galaxy A55", reason: "vidro, alumínio e IP67" },
  { category: "Tela", winner: "Empate técnico", reason: "ambos entregam AMOLED forte" },
  { category: "Desempenho", winner: "Redmi Note 13 Pro", reason: "melhor resposta em uso intenso" },
  { category: "Câmera", winner: "Galaxy A55", reason: "mais previsível no automático" },
  { category: "Bateria e carga", winner: "Redmi Note 13 Pro", reason: "67 W muda o dia a dia" },
  { category: "Software", winner: "Galaxy A55", reason: "One UI mais estável e suporte melhor" },
  { category: "Custo-benefício", winner: "Redmi Note 13 Pro", reason: "geralmente custa menos" },
];

const SPECS: Array<[string, string, string]> = [
  ["Tela", "6,6\" Super AMOLED 120 Hz", "6,67\" AMOLED 120 Hz"],
  ["Processador", "Exynos 1480", "Snapdragon 7s Gen 2"],
  ["RAM", "8 GB", "8 / 12 GB"],
  ["Armazenamento", "128 / 256 GB", "256 / 512 GB"],
  ["Câmera principal", "50 MP com OIS", "200 MP com OIS"],
  ["Ultrawide", "12 MP", "8 MP"],
  ["Macro", "5 MP", "2 MP"],
  ["Selfie", "32 MP", "16 MP"],
  ["Bateria", "5.000 mAh", "5.100 mAh"],
  ["Carregamento", "25 W", "67 W"],
  ["Proteção", "IP67", "IP54"],
  ["Sistema", "Android com One UI", "Android com HyperOS/MIUI"],
];

const FAQS = [
  {
    q: "Galaxy A55 ou Redmi Note 13 Pro: qual é melhor?",
    a: "O Galaxy A55 é melhor para quem quer construção premium, câmeras mais consistentes e software mais confiável. O Redmi Note 13 Pro é melhor para quem quer mais ficha técnica, carregamento rápido e preço agressivo.",
  },
  {
    q: "Qual tem a melhor câmera?",
    a: "Apesar do sensor de 200 MP do Redmi chamar atenção, o Galaxy A55 costuma ser mais previsível no modo automático, especialmente em cores, HDR e consistência entre fotos.",
  },
  {
    q: "Qual vale mais a pena para jogar?",
    a: "Para jogos e uso mais pesado, o Redmi Note 13 Pro tende a ser mais interessante pelo conjunto de desempenho e carregamento rápido. Para estabilidade geral, o A55 segue mais equilibrado.",
  },
  {
    q: "Qual deve durar mais tempo?",
    a: "O Galaxy A55 leva vantagem por construção, proteção IP67 e política de atualizações mais confiável da Samsung.",
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
            <span className="text-foreground">Galaxy A55 vs Redmi Note 13 Pro</span>
          </nav>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="cta">Comparativo completo</Badge>
              <Badge variant="soft">Samsung vs Xiaomi</Badge>
            </div>

            <h1 className="mt-4 font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-foreground text-balance">
              Galaxy A55 vs Redmi Note 13 Pro: qual vale mais a pena em 2026?
            </h1>

            <p className="mt-5 max-w-3xl text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
              Dois dos intermediários mais buscados do Brasil colocam frente a frente a
              experiência mais equilibrada da Samsung e a ficha técnica agressiva da Xiaomi.
              Comparamos construção, tela, câmera, bateria, desempenho, software e custo-benefício
              para mostrar qual faz mais sentido para cada perfil de compra.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <User className="h-3.5 w-3.5" /> Por Equipe Tech Escolha Certa
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5" /> Atualizado em 15 mai. 2026
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
            <ProductHero product={GALAXY} accent="teal" />
            <ProductHero product={REDMI} accent="cta" />
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
                Para a maioria das pessoas, o Galaxy A55 é mais seguro. Para preço e carga rápida,
                o Redmi brilha.
              </p>
              <div className="mt-4 space-y-2">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground shadow-soft transition hover:brightness-105 hover:-translate-y-0.5"
                >
                  Ver Galaxy A55 <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
                >
                  Ver Redmi Note 13 Pro <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <main className="lg:col-span-9 space-y-14">
          <section id="veredito" className="scroll-mt-24">
            <SectionTitle eyebrow="Veredito rápido" title="Qual é melhor: Galaxy A55 ou Redmi Note 13 Pro?" />
            <div className="mt-5 rounded-2xl border border-border bg-card p-6 md:p-8 shadow-soft">
              <p className="text-lg leading-relaxed text-foreground">
                O <strong>Galaxy A55</strong> é a melhor escolha para quem quer um celular mais
                confiável para durar anos: construção superior, IP67, One UI madura e câmeras mais
                previsíveis. O <strong>Redmi Note 13 Pro</strong> é mais interessante para quem busca
                máximo custo-benefício, tela forte, carregamento rápido e preço menor.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <VerdictCard
                  icon={Trophy}
                  title="Escolha mais segura"
                  product="Galaxy A55"
                  text="Melhor para quem quer equilíbrio, durabilidade, software estável e menor risco de arrependimento."
                />
                <VerdictCard
                  icon={Zap}
                  title="Melhor custo-benefício"
                  product="Redmi Note 13 Pro"
                  text="Melhor para quem quer ficha técnica forte, carregamento rápido e preço agressivo em ofertas."
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
            eyebrow="Design e construção"
            title="Galaxy A55 parece mais premium; Redmi foca em praticidade"
            winner="Galaxy A55"
            paragraphs={[
              "O Galaxy A55 dá um salto importante em percepção de qualidade. A combinação de laterais em alumínio, traseira em vidro e proteção IP67 faz o aparelho parecer mais caro do que realmente é. No uso diário, isso transmite confiança: é um celular que aguenta melhor poeira, respingos e uso intenso por mais tempo.",
              "O Redmi Note 13 Pro também é bonito e confortável, mas tem proposta mais funcional. Ele entrega boa pegada, corpo fino e design moderno, porém a proteção IP54 e a construção menos refinada deixam claro que o foco está no custo-benefício, não na sensação premium.",
            ]}
            bullets={[
              "Galaxy A55: vidro, alumínio e IP67",
              "Redmi: mais leve na proposta, porém menos protegido",
              "Para durar mais, Samsung passa mais confiança",
            ]}
          />

          <ComparisonBlock
            id="tela"
            icon={Sparkles}
            eyebrow="Tela"
            title="AMOLED forte dos dois lados: aqui é quase empate"
            winner="Empate técnico"
            paragraphs={[
              "Os dois entregam telas AMOLED de 120 Hz com ótima nitidez, cores fortes e excelente experiência para YouTube, Instagram, TikTok e streaming. O Redmi costuma impressionar pela resolução e brilho, enquanto o Galaxy A55 traz calibração mais natural e consistência melhor em diferentes ambientes.",
              "Na prática, qualquer um dos dois vai agradar quem está saindo de celulares básicos. O Redmi pode parecer mais chamativo no primeiro contato; o Galaxy é mais equilibrado para uso longo, com menos saturação exagerada.",
            ]}
            bullets={[
              "Ambos têm AMOLED 120 Hz",
              "Redmi chama mais atenção em brilho e ficha técnica",
              "Galaxy é mais consistente em calibração",
            ]}
          />

          <ComparisonBlock
            id="desempenho"
            icon={Cpu}
            eyebrow="Desempenho"
            title="Redmi entrega mais força bruta; Galaxy é mais consistente"
            winner="Redmi Note 13 Pro"
            paragraphs={[
              "O Redmi Note 13 Pro tende a entregar melhor sensação de velocidade em tarefas pesadas, especialmente com mais RAM e armazenamento em algumas versões. Para quem alterna muitos apps, joga casualmente e quer resposta rápida, ele passa uma sensação de aparelho mais agressivo pelo preço.",
              "O Galaxy A55 não é lento — longe disso. A One UI está bem otimizada, as animações são estáveis e o Exynos 1480 segura bem o dia a dia. A diferença é que o Samsung prioriza estabilidade e eficiência, enquanto o Redmi busca entregar mais especificação pelo menor preço.",
            ]}
            bullets={[
              "Redmi leva vantagem em ficha técnica e carga de trabalho",
              "Galaxy é estável e bem otimizado",
              "Para uso comum, ambos atendem muito bem",
            ]}
          />

          <ComparisonBlock
            id="camera"
            icon={Camera}
            eyebrow="Câmeras"
            title="Sensor de 200 MP chama atenção, mas Galaxy fotografa melhor no automático"
            winner="Galaxy A55"
            paragraphs={[
              "O Redmi Note 13 Pro tem o número mais chamativo: câmera principal de 200 MP. Em boa luz, ele captura fotos detalhadas e impressiona em nitidez. Mas megapixel não é tudo. Em HDR, pele, cores, retratos e consistência entre ambientes, o Galaxy A55 costuma errar menos.",
              "Para quem só quer apontar e fotografar sem configurar nada, o Samsung é mais confiável. O Redmi recompensa quem gosta de testar modos, brincar com resolução alta e fotografar em boa iluminação. Em vídeo, o Galaxy também passa mais segurança pela estabilização e processamento mais estável.",
            ]}
            bullets={[
              "Redmi: mais detalhe em luz boa",
              "Galaxy: cores e HDR mais confiáveis",
              "Vídeo e modo automático favorecem Samsung",
            ]}
          />

          <ComparisonBlock
            id="bateria"
            icon={Battery}
            eyebrow="Bateria e carregamento"
            title="Autonomia parecida, mas Redmi ganha no carregamento"
            winner="Redmi Note 13 Pro"
            paragraphs={[
              "Na autonomia, os dois passam o dia com folga em uso misto: redes sociais, streaming, câmera, navegação e mensagens. O Galaxy A55 é eficiente e previsível, enquanto o Redmi Note 13 Pro se destaca por recarregar muito mais rápido.",
              "A diferença prática está na tomada. O carregamento de 67 W do Redmi muda o uso diário: poucos minutos já recuperam bateria suficiente para várias horas. O Galaxy A55, com 25 W, parece lento nesse ponto — especialmente para quem já usou Xiaomi, Realme ou Motorola com carga rápida.",
            ]}
            bullets={[
              "Ambos aguentam um dia de uso",
              "Redmi carrega muito mais rápido",
              "Galaxy é eficiente, mas conservador na tomada",
            ]}
          />

          <ComparisonBlock
            id="gaming"
            icon={Gamepad2}
            eyebrow="Jogos"
            title="Para gaming casual, ambos servem; para desempenho, Redmi é melhor"
            winner="Redmi Note 13 Pro"
            paragraphs={[
              "Em jogos populares como Free Fire, PUBG Mobile, Asphalt e Call of Duty Mobile, os dois entregam boa experiência. O Redmi tende a manter configurações mais altas em alguns cenários e agrada quem prioriza desempenho por real investido.",
              "O Galaxy A55 é mais do que suficiente para jogar casualmente, mas não é a melhor opção se o objetivo principal for performance. Nesse caso, o Poco X6 Pro, inclusive, pode ser ainda mais interessante que os dois.",
            ]}
            bullets={[
              "Redmi é mais indicado para quem joga mais",
              "Galaxy atende bem jogos casuais",
              "Poco X6 Pro é alternativa melhor para foco total em games",
            ]}
          />

          <section id="tabela" className="scroll-mt-24">
            <SectionTitle eyebrow="Tabela comparativa" title="Galaxy A55 vs Redmi Note 13 Pro em detalhes" />
            <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <table className="w-full text-sm">
                <thead className="bg-surface">
                  <tr>
                    <th className="px-5 py-4 text-left font-semibold text-foreground">Critério</th>
                    <th className="px-5 py-4 text-left font-semibold text-foreground">Galaxy A55</th>
                    <th className="px-5 py-4 text-left font-semibold text-foreground">Redmi Note 13 Pro</th>
                  </tr>
                </thead>
                <tbody>
                  {SPECS.map(([label, a55, redmi], index) => (
                    <tr key={label} className={index % 2 === 0 ? "bg-card" : "bg-surface"}>
                      <th scope="row" className="px-5 py-3 text-left font-semibold text-foreground">
                        {label}
                      </th>
                      <td className="px-5 py-3 text-muted-foreground">{a55}</td>
                      <td className="px-5 py-3 text-muted-foreground">{redmi}</td>
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
                title="Compre o Galaxy A55 se você..."
                items={[
                  "quer um celular para durar mais tempo",
                  "valoriza construção premium e IP67",
                  "prefere software estável e atualizado",
                  "tira muitas fotos no modo automático",
                  "quer menor risco de arrependimento",
                ]}
                positive
              />
              <ProfileCard
                title="Compre o Redmi Note 13 Pro se você..."
                items={[
                  "quer pagar menos por mais ficha técnica",
                  "valoriza carregamento rápido",
                  "gosta de tela grande e chamativa",
                  "não se importa em ajustar configurações",
                  "quer bom custo-benefício em promoção",
                ]}
                positive
              />
              <ProfileCard
                title="Evite o Galaxy A55 se você..."
                items={[
                  "faz questão de carregamento rápido",
                  "quer máximo desempenho por real",
                  "joga pesado com frequência",
                ]}
              />
              <ProfileCard
                title="Evite o Redmi se você..."
                items={[
                  "quer melhor suporte e atualizações",
                  "não gosta de apps pré-instalados",
                  "prioriza resistência à água e poeira",
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
                  Galaxy A55 é mais seguro; Redmi é mais agressivo no preço.
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  Para a maioria, o Galaxy A55 é a recomendação mais equilibrada. Para quem quer
                  economizar e valoriza carregamento rápido, o Redmi Note 13 Pro pode ser a melhor compra.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row md:flex-col">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground shadow-soft transition hover:brightness-105 hover:-translate-y-0.5"
                >
                  Ver Galaxy A55 <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
                >
                  Ver Redmi <ArrowUpRight className="h-4 w-4" />
                </a>
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
              A55 vs Redmi Note 13 Pro
            </span>
          </div>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-1.5 rounded-lg bg-cta px-4 py-2.5 text-xs font-semibold text-cta-foreground shadow-soft"
          >
            Ver ofertas <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
      <div className="h-20 lg:hidden" aria-hidden />
    </article>
  );
}

function ProductHero({
  product,
  accent,
}: {
  product: typeof GALAXY;
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







