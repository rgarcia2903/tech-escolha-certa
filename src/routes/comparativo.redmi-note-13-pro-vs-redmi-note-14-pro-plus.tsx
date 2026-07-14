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

export const Route = createFileRoute("/comparativo/redmi-note-13-pro-vs-redmi-note-14-pro-plus")({
  head: () => ({
    meta: [
      {
        title:
          "Redmi Note 13 Pro vs Redmi Note 14 Pro+: qual vale mais a pena em 2026?",
      },
      {
        name: "description",
        content:
          "Redmi Note 13 Pro vs Redmi Note 14 Pro+: comparativo completo de tela, desempenho, câmera, bateria, carregamento, proteção e custo-benefício para decidir qual Xiaomi comprar em 2026.",
      },
      {
        name: "keywords",
        content:
          "Redmi Note 13 Pro vs Redmi Note 14 Pro Plus, Redmi Note 14 Pro Plus ou Redmi Note 13 Pro, melhor Redmi Note, comparativo Xiaomi, Redmi Note 14 Pro+ vale a pena",
      },
      {
        property: "og:title",
        content:
          "Redmi Note 13 Pro vs Redmi Note 14 Pro+: qual vale mais a pena em 2026?",
      },
      {
        property: "og:description",
        content:
          "Comparamos Redmi Note 13 Pro e Redmi Note 14 Pro+ em câmera, tela, bateria, desempenho e custo-benefício para mostrar qual Xiaomi comprar.",
      },
      {
        property: "og:image",
        content:
          "https://techescolhacerta.com.br/images/products/redmi-note-14-pro-plus-optimized.webp",
      },
      {
        property: "twitter:image",
        content:
          "https://techescolhacerta.com.br/images/products/redmi-note-14-pro-plus-optimized.webp",
      },
    ],
  }),
  component: ComparisonPage,
});

const REDMI13_AFFILIATE_URL =
  "https://www.mercadolivre.com.br/social/gari4140335?matt_word=gari4140335&matt_tool=94872161&forceInApp=true&ref=BGtpHQ2Gd7gu3NJ6rm%2BaBDzcdVEsJkmjUCfPoUqsyMdISk7qaEcLyOhgcKjTflKbMEvjvhG39ybzwLuBiHmGufxF%2FFBwYPJPvak9%2FHtxxTfaEdzk4I0k92KRruIQTVCVFPTIyFEF3xDzYe3eHCv%2Bo6MC6%2FXnj3uM2pxoKFhaJpyQgtgoF2cqW2%2BOv8BcdH0IMZlkW0I%3D";

const REDMI14_AFFILIATE_URL =
  "https://www.mercadolivre.com.br/social/gari4140335?matt_word=gari4140335&matt_tool=94872161&forceInApp=true&ref=BAtoKVPghjdMrPDSvQucfOIyJZTtqw%2B%2B99vk4nDBCh2L0rqadZ3UoTBTKgG8J8EasFIZlKmX4m8B6LUIisxINcxwzk7Os83ZSnuuskNd4Ovo3O%2FQTlSI4aN0G7I6DVL004nh8hlN6NcS42MwFHJFidRG0cEjSEpbyJqbez1Oz2UmljyX3ibeKPVHHjFVMp3aHdyMXe8%3D";

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

const REDMI13 = {
  name: "Redmi Note 13 Pro",
  badge: "Melhor custo-benefício",
  rating: 4.6,
  price: "R$ 1.699",
  image: "/images/products/redmi-note-13-pro-optimized.webp",
  strengths: [
    "Tela AMOLED 1.5K de 120 Hz ainda muito forte",
    "Câmera principal de 200 MP com OIS",
    "Carregamento rápido de 67 W",
    "Snapdragon 7s Gen 2 suficiente para uso diário",
    "Pode valer mais a pena quando aparece bem mais barato",
  ],
  weaknesses: [
    "Proteção inferior ao Redmi Note 14 Pro+",
    "Processador menos atual",
    "Menor folga para os próximos anos",
  ],
};

const REDMI14 = {
  name: "Redmi Note 14 Pro+",
  badge: "Mais completo",
  rating: 4.7,
  price: "R$ 2.399",
  image: "/images/products/redmi-note-14-pro-plus-optimized.webp",
  strengths: [
    "Snapdragon 7s Gen 3 mais atual",
    "Resistência IP68 contra água e poeira",
    "HyperCharge de 120 W",
    "Bateria de 5.110 mAh",
    "Conjunto mais premium e com maior longevidade",
  ],
  weaknesses: [
    "Geralmente custa mais caro",
    "Câmeras secundárias continuam simples",
    "Pode não compensar se o Redmi Note 13 Pro estiver muito mais barato",
  ],
};

const QUICK_SCORE = [
  { category: "Construção", winner: "Redmi Note 14 Pro+", reason: "IP68 e acabamento mais premium" },
  { category: "Tela", winner: "Empate técnico", reason: "ambos têm AMOLED 1.5K 120 Hz" },
  { category: "Desempenho", winner: "Redmi Note 14 Pro+", reason: "Snapdragon 7s Gen 3 mais novo" },
  { category: "Câmera", winner: "Redmi Note 14 Pro+", reason: "processamento mais atual e conjunto mais refinado" },
  { category: "Bateria e carga", winner: "Redmi Note 14 Pro+", reason: "5.110 mAh e 120 W" },
  { category: "Preço", winner: "Redmi Note 13 Pro", reason: "costuma aparecer mais barato" },
  { category: "Custo-benefício", winner: "Depende do preço", reason: "13 Pro em promoção; 14 Pro+ se a diferença for pequena" },
];

const SPECS: Array<[string, string, string]> = [
  ["Tela", "6,67\" AMOLED 1.5K 120 Hz", "6,67\" AMOLED 1.5K 120 Hz"],
  ["Processador", "Snapdragon 7s Gen 2", "Snapdragon 7s Gen 3"],
  ["RAM", "8 / 12 GB", "12 GB, conforme versão"],
  ["Armazenamento", "256 GB, conforme versão", "512 GB, conforme versão"],
  ["Câmera principal", "200 MP com OIS", "200 MP com OIS"],
  ["Ultrawide", "8 MP", "8 MP"],
  ["Macro", "2 MP", "2 MP"],
  ["Selfie", "16 MP", "20 MP"],
  ["Bateria", "5.100 mAh", "5.110 mAh"],
  ["Carregamento", "67 W", "120 W"],
  ["Proteção", "Proteção básica contra respingos", "IP68"],
  ["Sistema", "Android com HyperOS/MIUI", "Android com HyperOS"],
];

const FAQS = [
  {
    q: "Redmi Note 13 Pro ou Redmi Note 14 Pro+: qual é melhor?",
    a: "O Redmi Note 14 Pro+ é melhor no conjunto geral por ter processador mais novo, proteção IP68, carregamento de 120 W e acabamento mais premium. O Redmi Note 13 Pro ainda vale a pena se estiver bem mais barato.",
  },
  {
    q: "O Redmi Note 14 Pro+ é muito melhor que o Redmi Note 13 Pro?",
    a: "Ele é melhor, mas não em tudo de forma gigantesca. A maior diferença está em proteção, carregamento, chip mais novo e sensação de aparelho mais completo. Se a diferença de preço for grande, o Redmi Note 13 Pro continua competitivo.",
  },
  {
    q: "Qual tem a melhor câmera?",
    a: "Os dois usam câmera principal de 200 MP com OIS. O Redmi Note 14 Pro+ tende a levar vantagem pelo processamento mais novo e conjunto mais refinado, mas o salto não deve ser o principal motivo de troca para quem já tem o Redmi Note 13 Pro.",
  },
  {
    q: "Qual vale mais a pena para jogos?",
    a: "O Redmi Note 14 Pro+ leva vantagem por usar Snapdragon 7s Gen 3. Para jogos muito pesados, porém, a linha Poco ainda costuma fazer mais sentido dentro da Xiaomi.",
  },
  {
    q: "Vale trocar o Redmi Note 13 Pro pelo Redmi Note 14 Pro+?",
    a: "Só vale se você quer mais resistência, carregamento mais rápido, bateria ligeiramente maior e hardware mais atual. Se o Redmi Note 13 Pro ainda atende bem, a troca não é obrigatória.",
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
            <span className="text-foreground">Redmi Note 13 Pro vs Redmi Note 14 Pro+</span>
          </nav>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="cta">Comparativo completo</Badge>
              <Badge variant="soft">Xiaomi vs Xiaomi</Badge>
            </div>

            <h1 className="mt-4 font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-foreground text-balance">
              Redmi Note 13 Pro vs Redmi Note 14 Pro+: qual vale mais a pena em 2026?
            </h1>

            <p className="mt-5 max-w-3xl text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
              O Redmi Note 13 Pro ficou conhecido pelo conjunto forte de tela, câmera e
              carregamento rápido. O Redmi Note 14 Pro+ chega como opção mais completa,
              com chip mais atual, IP68 e carregamento de 120 W. Veja qual faz mais sentido
              para comprar agora.
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
            <ProductHero product={REDMI13} accent="teal" />
            <ProductHero product={REDMI14} accent="cta" />
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
                O Redmi Note 14 Pro+ é melhor no conjunto. O Redmi Note 13 Pro pode vencer
                quando a diferença de preço for grande.
              </p>
              <div className="mt-4 space-y-2">
                <a
                  href={REDMI14_AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  onClick={() =>
                    trackAffiliateClick({
                      productName: "Redmi Note 14 Pro+",
                      pageType: "comparativo",
                    })
                  }
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground shadow-soft transition hover:brightness-105 hover:-translate-y-0.5"
                >
                  Ver Redmi Note 14 Pro+ <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={REDMI13_AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  onClick={() =>
                    trackAffiliateClick({
                      productName: "Redmi Note 13 Pro",
                      pageType: "comparativo",
                    })
                  }
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
            <SectionTitle eyebrow="Veredito rápido" title="Qual é melhor: Redmi Note 13 Pro ou Redmi Note 14 Pro+?" />
            <div className="mt-5 rounded-2xl border border-border bg-card p-6 md:p-8 shadow-soft">
              <p className="text-lg leading-relaxed text-foreground">
                O <strong>Redmi Note 14 Pro+</strong> é a melhor escolha para quem quer o
                Xiaomi mais completo: processador mais novo, proteção IP68, carregamento de
                120 W e conjunto mais premium. O <strong>Redmi Note 13 Pro</strong> ainda é
                excelente para quem quer economizar e encontrar uma boa oferta sem abrir mão
                de tela AMOLED, câmera de 200 MP e carregamento rápido.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <VerdictCard
                  icon={Trophy}
                  title="Melhor escolha geral"
                  product="Redmi Note 14 Pro+"
                  text="Mais completo, mais protegido e com maior folga para os próximos anos."
                />
                <VerdictCard
                  icon={Zap}
                  title="Melhor compra em promoção"
                  product="Redmi Note 13 Pro"
                  text="Continua forte se aparecer bem mais barato que o modelo novo."
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
            title="Redmi Note 14 Pro+ leva vantagem clara em resistência"
            winner="Redmi Note 14 Pro+"
            paragraphs={[
              "O Redmi Note 14 Pro+ tem uma proposta mais premium e passa mais segurança para uso de longo prazo. O grande diferencial é a proteção IP68 contra água e poeira, algo que coloca o aparelho em uma posição superior dentro da própria linha Redmi.",
              "O Redmi Note 13 Pro continua bonito, fino e confortável, mas fica em uma categoria mais simples quando falamos de resistência. Para quem usa o celular por muitos anos, leva o aparelho para praia, academia, trabalho externo ou rotina mais intensa, o Redmi Note 14 Pro+ é a escolha mais tranquila.",
            ]}
            bullets={[
              "14 Pro+: IP68",
              "13 Pro: ainda bonito e leve",
              "Mais segurança no modelo novo",
            ]}
          />

          <ComparisonBlock
            id="tela"
            icon={Sparkles}
            eyebrow="Tela"
            title="Ambos entregam AMOLED 1.5K de 120 Hz"
            winner="Empate técnico"
            paragraphs={[
              "A tela é um dos pontos em que o Redmi Note 13 Pro ainda envelhece muito bem. O painel AMOLED 1.5K de 120 Hz entrega ótima nitidez, fluidez e qualidade para redes sociais, vídeos, leitura e jogos.",
              "O Redmi Note 14 Pro+ mantém esse alto nível e adiciona uma sensação mais refinada no conjunto geral. Na prática, a diferença de tela não deve ser o principal motivo para escolher o modelo novo. Os dois oferecem uma experiência visual forte para a faixa de preço.",
            ]}
            bullets={[
              "AMOLED 1.5K nos dois",
              "120 Hz nos dois",
              "Diferença maior está no conjunto",
            ]}
          />

          <ComparisonBlock
            id="desempenho"
            icon={Cpu}
            eyebrow="Desempenho"
            title="Snapdragon 7s Gen 3 dá mais folga ao Redmi Note 14 Pro+"
            winner="Redmi Note 14 Pro+"
            paragraphs={[
              "O Redmi Note 13 Pro usa o Snapdragon 7s Gen 2 e ainda entrega uma experiência muito boa para redes sociais, vídeos, bancos, navegação, fotos e multitarefa comum. Para a maioria das pessoas, ele não parece lento.",
              "O Redmi Note 14 Pro+ leva vantagem por usar o Snapdragon 7s Gen 3. O ganho mais importante não é só velocidade imediata, mas também maior fôlego para os próximos anos, melhor eficiência e uma base mais atual para apps, jogos e recursos de IA.",
            ]}
            bullets={[
              "13 Pro ainda é suficiente",
              "14 Pro+ tem chip mais novo",
              "Mais longevidade no modelo novo",
            ]}
          />

          <ComparisonBlock
            id="camera"
            icon={Camera}
            eyebrow="Câmeras"
            title="Os dois têm 200 MP, mas o modelo novo é mais refinado"
            winner="Redmi Note 14 Pro+"
            paragraphs={[
              "Os dois modelos apostam em câmera principal de 200 MP com estabilização óptica. Isso significa que o Redmi Note 13 Pro ainda entrega fotos muito boas em boa iluminação, com bastante detalhe e boa nitidez para redes sociais.",
              "O Redmi Note 14 Pro+ tende a ser mais interessante pelo processamento mais atual e pelo conjunto mais premium. Ainda assim, não é uma diferença que transforme completamente a experiência. Quem já tem o Redmi Note 13 Pro não precisa trocar apenas por câmera.",
            ]}
            bullets={[
              "200 MP com OIS nos dois",
              "14 Pro+ tem processamento mais novo",
              "Câmeras auxiliares seguem simples",
            ]}
          />

          <ComparisonBlock
            id="bateria"
            icon={Battery}
            eyebrow="Bateria e carregamento"
            title="Carregamento de 120 W é o maior salto prático"
            winner="Redmi Note 14 Pro+"
            paragraphs={[
              "Na bateria, a diferença de capacidade é pequena: 5.100 mAh no Redmi Note 13 Pro contra 5.110 mAh no Redmi Note 14 Pro+. Os dois devem entregar boa autonomia para um dia inteiro de uso comum.",
              "A grande diferença está no carregamento. O Redmi Note 13 Pro já é rápido com 67 W, mas o Redmi Note 14 Pro+ sobe para 120 W. Para quem vive esquecendo de carregar o celular ou precisa de recargas muito rápidas durante o dia, esse é um dos motivos mais fortes para escolher o modelo novo.",
            ]}
            bullets={[
              "Autonomia parecida",
              "67 W no Redmi Note 13 Pro",
              "120 W no Redmi Note 14 Pro+",
            ]}
          />

          <ComparisonBlock
            id="gaming"
            icon={Gamepad2}
            eyebrow="Jogos"
            title="Para jogar, o Redmi Note 14 Pro+ é melhor; Poco ainda é alternativa"
            winner="Redmi Note 14 Pro+"
            paragraphs={[
              "Para jogos casuais e títulos populares, os dois atendem bem. O Redmi Note 13 Pro já roda bem Free Fire, COD Mobile, Asphalt e jogos leves com boa fluidez, principalmente pela tela de 120 Hz.",
              "O Redmi Note 14 Pro+ é a melhor escolha entre os dois por ter hardware mais atual. Mesmo assim, se o foco principal for jogar pesado, vale olhar também para a linha Poco, que costuma entregar mais desempenho bruto pelo preço.",
            ]}
            bullets={[
              "14 Pro+ tem mais folga",
              "13 Pro serve para jogos casuais",
              "Poco pode ser melhor para gamer pesado",
            ]}
          />

          <section id="tabela" className="scroll-mt-24">
            <SectionTitle eyebrow="Tabela comparativa" title="Redmi Note 13 Pro vs Redmi Note 14 Pro+ em detalhes" />
            <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <table className="w-full text-sm">
                <thead className="bg-surface">
                  <tr>
                    <th className="px-5 py-4 text-left font-semibold text-foreground">Critério</th>
                    <th className="px-5 py-4 text-left font-semibold text-foreground">Redmi Note 13 Pro</th>
                    <th className="px-5 py-4 text-left font-semibold text-foreground">Redmi Note 14 Pro+</th>
                  </tr>
                </thead>
                <tbody>
                  {SPECS.map(([label, redmi13, redmi14], index) => (
                    <tr key={label} className={index % 2 === 0 ? "bg-card" : "bg-surface"}>
                      <th scope="row" className="px-5 py-3 text-left font-semibold text-foreground">
                        {label}
                      </th>
                      <td className="px-5 py-3 text-muted-foreground">{redmi13}</td>
                      <td className="px-5 py-3 text-muted-foreground">{redmi14}</td>
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
                title="Compre o Redmi Note 14 Pro+ se você..."
                items={[
                  "quer o modelo mais completo da comparação",
                  "valoriza resistência IP68",
                  "faz questão de carregamento de 120 W",
                  "quer chip mais novo e maior longevidade",
                  "pretende ficar vários anos com o celular",
                ]}
                positive
              />
              <ProfileCard
                title="Compre o Redmi Note 13 Pro se você..."
                items={[
                  "quer economizar",
                  "encontrou uma promoção bem mais barata",
                  "já se satisfaz com carregamento de 67 W",
                  "quer tela AMOLED 1.5K e câmera de 200 MP",
                  "busca o melhor custo-benefício possível",
                ]}
                positive
              />
              <ProfileCard
                title="Evite o Redmi Note 14 Pro+ se você..."
                items={[
                  "não quer pagar mais pelo modelo novo",
                  "não liga para IP68",
                  "vai usar o celular só para tarefas básicas",
                ]}
              />
              <ProfileCard
                title="Evite o Redmi Note 13 Pro se você..."
                items={[
                  "quer a melhor proteção contra água e poeira",
                  "faz questão de hardware mais atual",
                  "pode pagar pouca diferença no Redmi Note 14 Pro+",
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
                  Redmi Note 14 Pro+ é melhor; Redmi Note 13 Pro vence no preço.
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  Escolha o Redmi Note 14 Pro+ se a diferença de preço for pequena ou se você
                  quer IP68, 120 W e chip mais novo. Escolha o Redmi Note 13 Pro se ele estiver
                  em promoção e você quiser economizar sem perder uma boa tela e câmera forte.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row md:flex-col">
                <a
                  href={REDMI14_AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  onClick={() =>
                    trackAffiliateClick({
                      productName: "Redmi Note 14 Pro+",
                      pageType: "comparativo",
                    })
                  }
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground shadow-soft transition hover:brightness-105 hover:-translate-y-0.5"
                >
                  Ver Redmi Note 14 Pro+ <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={REDMI13_AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  onClick={() =>
                    trackAffiliateClick({
                      productName: "Redmi Note 13 Pro",
                      pageType: "comparativo",
                    })
                  }
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
                >
                  Ver Redmi Note 13 Pro <ArrowUpRight className="h-4 w-4" />
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
              Redmi 13 Pro vs 14 Pro+
            </span>
          </div>
          <a
            href={REDMI14_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            onClick={() =>
              trackAffiliateClick({
                productName: "Redmi Note 14 Pro+",
                pageType: "comparativo",
              })
            }
            className="inline-flex items-center gap-1.5 rounded-lg bg-cta px-4 py-2.5 text-xs font-semibold text-cta-foreground shadow-soft"
          >
            Ver 14 Pro+ <ArrowUpRight className="h-3.5 w-3.5" />
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
  product: typeof REDMI13;
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
          className="aspect-[4/3] w-full rounded-2xl border border-border object-contain bg-surface p-4 shadow-soft"
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
