import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Award,
  Battery,
  Camera,
  Check,
  Gamepad2,
  Wallet,
  Trophy,
  X,
  Sparkles,
  ChevronDown,
  ShieldCheck,
  CalendarDays,
  Clock,
  User,
} from "lucide-react";
import { Badge, Rating } from "@/components/site/ui";

const CANONICAL =
  "https://tech-decide-right.lovable.app/guia/melhores-celulares-ate-3000-reais";

export const Route = createFileRoute("/guia/melhores-celulares-ate-3000-reais")({
  head: () => ({
    meta: [
      {
        title:
          "Melhores celulares até 3000 reais em 2026 | Guia editorial completo",
      },
      {
        name: "description",
        content:
          "Guia editorial dos melhores celulares até 3000 reais em 2026: Galaxy A55, Redmi Note 13 Pro, Poco X6 Pro e Motorola Edge 50 Neo testados em câmera, bateria e desempenho.",
      },
      {
        name: "keywords",
        content:
          "melhores celulares até 3000 reais, melhor celular custo benefício 2026, Galaxy A55, Redmi Note 13 Pro, Poco X6 Pro, Motorola Edge 50 Neo",
      },
      {
        property: "og:title",
        content: "Melhores celulares até 3000 reais em 2026",
      },
      {
        property: "og:description",
        content:
          "Comparamos os intermediários premium de 2026 para indicar o melhor celular até R$ 3.000 em câmera, bateria, gaming e custo-benefício.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: CANONICAL },
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1600&q=80",
      },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Melhores celulares até 3000 reais em 2026",
          description:
            "Guia editorial dos melhores celulares intermediários premium de 2026 até R$ 3.000.",
          author: { "@type": "Organization", name: "Tech Escolha Certa" },
          datePublished: "2026-05-01",
          image:
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1600&q=80",
        }),
      },
    ],
  }),
  component: GuidePage,
});

type Pick = {
  id: string;
  category: string;
  icon: typeof Award;
  badge: { variant: "cta" | "teal" | "default"; label: string };
  name: string;
  image: string;
  rating: number;
  price: string;
  short: string;
  review: string;
  profile: string;
  pros: string[];
  cons: string[];
};

const PICKS: Pick[] = [
  {
    id: "melhor-geral",
    category: "Melhor escolha geral",
    icon: Award,
    badge: { variant: "cta", label: "Recomendado" },
    name: "Samsung Galaxy A55",
    image:
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=1200&q=80",
    rating: 4.7,
    price: "R$ 2.499",
    short:
      "O equilíbrio mais maduro da faixa: tela AMOLED 120 Hz, construção em alumínio e quatro anos de atualizações garantidas.",
    review:
      "O Galaxy A55 é o intermediário que mais se aproxima da experiência de um top de linha no dia a dia. A tela Super AMOLED de 6,6\" com 1000 nits brilha bem ao sol, o Exynos 1480 entrega fluidez consistente na One UI 6 e a câmera principal de 50 MP com OIS produz fotos confiáveis em qualquer luz. O grande diferencial é o suporte: a Samsung promete quatro versões de Android e cinco anos de patches de segurança, algo raro nessa faixa de preço.",
    profile:
      "Quem quer um celular para usar de 3 a 4 anos sem se preocupar, com bom acabamento e ecossistema confiável.",
    pros: [
      "Tela AMOLED 120 Hz com excelente brilho",
      "Quatro grandes atualizações de Android",
      "Construção em alumínio com Gorilla Glass Victus+",
      "Câmera principal estabilizada (OIS)",
    ],
    cons: [
      "Carregamento de 25 W abaixo da concorrência",
      "Exynos 1480 perde em benchmarks puros",
    ],
  },
  {
    id: "melhor-custo-beneficio",
    category: "Melhor custo-benefício",
    icon: Wallet,
    badge: { variant: "teal", label: "Custo-benefício" },
    name: "Xiaomi Redmi Note 13 Pro",
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1200&q=80",
    rating: 4.6,
    price: "R$ 1.899",
    short:
      "O intermediário que entrega ficha técnica de top de linha por menos de R$ 2.000 — câmera de 200 MP e carga turbo de 67 W.",
    review:
      "Por bem menos de R$ 2.000, o Redmi Note 13 Pro entrega uma ficha técnica que envergonha celulares mais caros. A câmera principal Samsung HP3 de 200 MP usa pixel binning para fotos detalhadas mesmo com pouca luz, a tela AMOLED 1.5K de 120 Hz é uma das mais brilhantes da faixa (1800 nits em pico) e o Snapdragon 7s Gen 2 dá conta de qualquer aplicativo. Some o carregamento de 67 W e fica difícil achar pacote melhor pelo preço.",
    profile:
      "Quem quer o máximo de hardware pelo menor preço possível e não se importa com a interface MIUI cheia de recursos.",
    pros: [
      "Câmera principal de 200 MP com OIS",
      "Carregamento turbo de 67 W",
      "Tela AMOLED 1.5K com 1800 nits de pico",
      "Preço imbatível para a ficha técnica",
    ],
    cons: [
      "MIUI/HyperOS com bloatware pré-instalado",
      "Apenas 3 anos de atualizações",
    ],
  },
  {
    id: "melhor-camera",
    category: "Melhor câmera",
    icon: Camera,
    badge: { variant: "default", label: "Foto e vídeo" },
    name: "Motorola Edge 50 Neo",
    image:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1200&q=80",
    rating: 4.6,
    price: "R$ 2.799",
    short:
      "Conjunto fotográfico afinado pela Pantone com sensor Sony LYT-700C — cores fiéis e vídeo 4K estabilizado de verdade.",
    review:
      "O Edge 50 Neo é o intermediário com a calibração de cor mais bem resolvida da categoria. A parceria com a Pantone se traduz em tons de pele realistas e céu sem aquele exagero de saturação típico dos rivais. O sensor principal Sony LYT-700C de 50 MP com OIS captura vídeo 4K a 30 fps com estabilização eletrônica suave, e a tela pOLED de 6,4\" com 120 Hz e 3000 nits de pico é referência na faixa.",
    profile:
      "Criadores de conteúdo casuais e quem valoriza fotos com cores naturais sem precisar editar.",
    pros: [
      "Cores Pantone-validated muito naturais",
      "Tela pOLED 120 Hz com 3000 nits",
      "Resistência IP68 (rara na faixa)",
      "Design compacto e leve (171 g)",
    ],
    cons: [
      "Bateria de 4.310 mAh é a menor do grupo",
      "Dimensity 7300 fica abaixo no gaming pesado",
    ],
  },
  {
    id: "melhor-bateria",
    category: "Melhor bateria",
    icon: Battery,
    badge: { variant: "default", label: "Autonomia" },
    name: "Samsung Galaxy M55",
    image:
      "https://images.unsplash.com/photo-1610792516775-01de03eae630?auto=format&fit=crop&w=1200&q=80",
    rating: 4.5,
    price: "R$ 2.299",
    short:
      "Bateria de 5.000 mAh combinada ao Snapdragon 7 Gen 1 entrega dois dias completos de uso moderado sem suor.",
    review:
      "Quando o assunto é autonomia pura, poucos rivais batem o Galaxy M55. A bateria de 5.000 mAh somada à eficiência do Snapdragon 7 Gen 1 (4 nm) e ao painel AMOLED com refresh adaptativo entrega facilmente 8 a 9 horas de tela ativa — o que se traduz em um dia e meio para usuário pesado e dois dias completos no uso moderado. O carregamento de 45 W ainda completa 100% em pouco mais de uma hora.",
    profile:
      "Quem viaja, fica longe de tomada por longos períodos ou simplesmente odeia depender do carregador.",
    pros: [
      "Autonomia real de até dois dias",
      "Carregamento rápido de 45 W",
      "Tela Super AMOLED+ 120 Hz",
      "4 anos de atualizações Samsung",
    ],
    cons: [
      "Acabamento traseiro em plástico",
      "Sem certificação IP de água",
    ],
  },
  {
    id: "melhor-gaming",
    category: "Melhor para gaming",
    icon: Gamepad2,
    badge: { variant: "default", label: "Performance" },
    name: "Poco X6 Pro",
    image:
      "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=1200&q=80",
    rating: 4.7,
    price: "R$ 2.599",
    short:
      "Dimensity 8300-Ultra coloca o Poco X6 Pro no patamar de top de linha em jogos pesados, com câmara de vapor dedicada.",
    review:
      "Se o seu uso envolve Genshin Impact, Wuthering Waves ou Call of Duty Mobile no máximo, o Poco X6 Pro é a escolha óbvia até R$ 3.000. O MediaTek Dimensity 8300-Ultra entrega performance equivalente a um Snapdragon 8+ Gen 1, sustenta 60 fps estáveis em jogos pesados graças à câmara de vapor LiquidCool 4.0, e a tela CrystalRes AMOLED de 6,67\" com 120 Hz e resposta ao toque de 2160 Hz garante latência mínima.",
    profile:
      "Gamers mobile que querem desempenho de top de linha sem pagar R$ 5.000.",
    pros: [
      "Dimensity 8300-Ultra de nível flagship",
      "Câmara de vapor para sessões longas",
      "Tela 1.5K AMOLED com 2160 Hz de toque",
      "Carregamento turbo de 67 W",
    ],
    cons: [
      "Câmera ultrawide de qualidade modesta",
      "HyperOS com publicidade em alguns apps",
    ],
  },
];

const TABLE = [
  { label: "Galaxy A55", price: "R$ 2.499", screen: "AMOLED 6,6\" 120 Hz", chip: "Exynos 1480", camera: "50 MP OIS", battery: "5.000 mAh / 25 W", updates: "4 anos" },
  { label: "Redmi Note 13 Pro", price: "R$ 1.899", screen: "AMOLED 6,67\" 120 Hz", chip: "Snapdragon 7s Gen 2", camera: "200 MP OIS", battery: "5.100 mAh / 67 W", updates: "3 anos" },
  { label: "Edge 50 Neo", price: "R$ 2.799", screen: "pOLED 6,4\" 120 Hz", chip: "Dimensity 7300", camera: "50 MP OIS Pantone", battery: "4.310 mAh / 68 W", updates: "5 anos" },
  { label: "Galaxy M55", price: "R$ 2.299", screen: "AMOLED+ 6,7\" 120 Hz", chip: "Snapdragon 7 Gen 1", camera: "50 MP OIS", battery: "5.000 mAh / 45 W", updates: "4 anos" },
  { label: "Poco X6 Pro", price: "R$ 2.599", screen: "AMOLED 6,67\" 120 Hz", chip: "Dimensity 8300-Ultra", camera: "64 MP OIS", battery: "5.000 mAh / 67 W", updates: "3 anos" },
];

const TIPS = [
  {
    title: "Priorize a tela AMOLED",
    text: "Acima de R$ 1.500 não há motivo para aceitar LCD. AMOLED entrega preto real, melhor brilho ao sol e consumo menor com always-on.",
  },
  {
    title: "Olhe o tempo de atualizações",
    text: "Um celular com 4 anos de updates dura mais que dois aparelhos com 2 anos. Samsung e Motorola lideram nessa faixa.",
  },
  {
    title: "Câmera não é só megapixel",
    text: "Sensor (tamanho), abertura, OIS e processamento importam mais que o número de MP. Prefira modelos com OIS no sensor principal.",
  },
  {
    title: "Carregamento rápido faz diferença",
    text: "Sair de 0 a 100% em uma hora muda o uso. Acima de 45 W já é um upgrade real frente aos 15-25 W tradicionais.",
  },
  {
    title: "Cuidado com versões globais x nacionais",
    text: "Algumas versões importadas perdem garantia local e bandas 5G. Compre de lojas oficiais ou marketplaces com selo do fabricante.",
  },
];

const FAQ = [
  {
    q: "Vale a pena comprar um celular intermediário em 2026?",
    a: "Sim. Os intermediários premium de 2026 entregam tela AMOLED 120 Hz, câmera com OIS e processadores eficientes — recursos que custavam R$ 5.000 há três anos. Para 90% dos usuários, um celular até R$ 3.000 cobre todas as necessidades sem comprometer.",
  },
  {
    q: "Qual o melhor celular custo-benefício até 3000 reais?",
    a: "O Redmi Note 13 Pro é a escolha mais agressiva em ficha técnica pelo preço, enquanto o Galaxy A55 vence em longevidade e ecossistema. Para a maioria, o A55 oferece o equilíbrio mais inteligente entre hardware, software e suporte.",
  },
  {
    q: "Intermediário aguenta jogos pesados como Genshin Impact?",
    a: "Sim, mas escolha bem o processador. Dimensity 8300-Ultra (Poco X6 Pro) e Snapdragon 7+ Gen 2 sustentam 60 fps em configurações altas. Exynos 1480 e Snapdragon 7s Gen 2 rodam em médio com algumas quedas.",
  },
  {
    q: "Qual a diferença entre Galaxy A55 e M55?",
    a: "O A55 tem acabamento em alumínio, design mais premium e Gorilla Glass Victus+. O M55 prioriza autonomia e carregamento rápido (45 W) em uma carcaça plástica. Mesmo Snapdragon 7 Gen 1 no M55 e Exynos 1480 no A55 — desempenho prático similar.",
  },
  {
    q: "Compensa esperar Black Friday para comprar?",
    a: "Modelos lançados há 6+ meses (como Redmi Note 13 Pro e Galaxy A55) já caem 15-25% em datas promocionais. Se não há urgência, vale esperar.",
  },
];

function GuidePage() {
  return <Page />;
}

function useReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return progress;
}

function Page() {
  const progress = useReadingProgress();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Reading progress */}
      <div className="fixed top-0 left-0 right-0 z-40 h-0.5 bg-border/40">
        <div
          className="h-full bg-cta transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Hero */}
      <section className="hero-gradient border-b border-border">
        <div className="container-tec py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Home</Link>
              <span>/</span>
              <span>Guia de compra</span>
              <span>/</span>
              <span className="text-foreground">Melhores celulares até R$ 3.000</span>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <Badge variant="cta">Guia editorial 2026</Badge>
              <Badge variant="soft">Atualizado em maio/2026</Badge>
            </div>
            <h1 className="mt-4 font-heading text-3xl md:text-5xl font-bold leading-[1.1] text-foreground">
              Melhores celulares até 3000 reais em 2026
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Testamos os intermediários premium do ano para indicar, sem rodeios,
              qual smartphone até R$ 3.000 entrega o melhor pacote em câmera,
              bateria, desempenho e longevidade. Cinco categorias, cinco vencedores.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><User className="h-4 w-4" /> Equipe Tech Escolha Certa</span>
              <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-4 w-4" /> Maio de 2026</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> 14 min de leitura</span>
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-teal" /> Análise independente</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container-tec py-14 md:py-20">
        <div className="grid lg:grid-cols-[1fr_280px] gap-12">
          <article className="max-w-3xl space-y-16">
            {/* Intro */}
            <div id="introducao" className="space-y-5 text-muted-foreground leading-relaxed">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Como escolhemos os melhores celulares até R$ 3.000
              </h2>
              <p>
                A faixa entre R$ 1.500 e R$ 3.000 é a mais disputada do mercado
                brasileiro — e também a mais confusa. É onde os fabricantes
                colocam suas melhores telas, processadores eficientes e câmeras
                competentes, mas também onde mais aparecem armadilhas de
                marketing.
              </p>
              <p>
                Para este guia, analisamos mais de 20 lançamentos entre 2024 e
                2026 considerando cinco critérios objetivos: <strong className="text-foreground">qualidade
                real da tela</strong> (brilho medido, refresh adaptativo, calibração),
                <strong className="text-foreground"> desempenho sustentado</strong> (não apenas pico de
                benchmark), <strong className="text-foreground">câmera em cenários reais</strong> (baixa luz,
                vídeo, retratos), <strong className="text-foreground">autonomia comprovada</strong> e
                <strong className="text-foreground"> tempo garantido de atualizações</strong>. Preço de
                referência considera lojas oficiais e principais marketplaces
                em maio de 2026.
              </p>
              <p>
                Os links de oferta são afiliados. Você paga o mesmo preço e nós
                recebemos uma comissão que mantém esta análise independente.
                Nenhum fabricante pagou pela posição neste guia.
              </p>
            </div>

            {/* Picks */}
            {PICKS.map((p) => (
              <PickBlock key={p.id} pick={p} />
            ))}

            {/* Comparison table */}
            <section id="comparativo" className="space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cta">
                  Comparativo rápido
                </span>
                <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-foreground">
                  Tabela comparativa: ficha técnica lado a lado
                </h2>
              </div>
              <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-surface text-left">
                      <tr className="text-xs uppercase tracking-wider text-muted-foreground">
                        <th className="px-4 py-3 font-semibold">Modelo</th>
                        <th className="px-4 py-3 font-semibold">Preço</th>
                        <th className="px-4 py-3 font-semibold">Tela</th>
                        <th className="px-4 py-3 font-semibold">Chip</th>
                        <th className="px-4 py-3 font-semibold">Câmera</th>
                        <th className="px-4 py-3 font-semibold">Bateria / Carga</th>
                        <th className="px-4 py-3 font-semibold">Updates</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border bg-card">
                      {TABLE.map((row) => (
                        <tr key={row.label} className="hover:bg-surface/50">
                          <td className="px-4 py-3 font-semibold text-foreground">{row.label}</td>
                          <td className="px-4 py-3 text-muted-foreground">{row.price}</td>
                          <td className="px-4 py-3 text-muted-foreground">{row.screen}</td>
                          <td className="px-4 py-3 text-muted-foreground">{row.chip}</td>
                          <td className="px-4 py-3 text-muted-foreground">{row.camera}</td>
                          <td className="px-4 py-3 text-muted-foreground">{row.battery}</td>
                          <td className="px-4 py-3 text-muted-foreground">{row.updates}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Tips */}
            <section id="dicas" className="space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cta">
                  Antes de comprar
                </span>
                <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-foreground">
                  5 dicas práticas para acertar na escolha
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {TIPS.map((tip, i) => (
                  <div
                    key={tip.title}
                    className="rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-elevated"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cta/10 text-cta text-sm font-bold">
                        {i + 1}
                      </div>
                      <h3 className="font-heading font-semibold text-foreground">{tip.title}</h3>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{tip.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cta">
                  Perguntas frequentes
                </span>
                <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-foreground">
                  FAQ: melhores celulares até R$ 3.000
                </h2>
              </div>
              <div className="rounded-2xl border border-border bg-card shadow-soft divide-y divide-border">
                {FAQ.map((item, i) => {
                  const open = openFaq === i;
                  return (
                    <div key={item.q}>
                      <button
                        onClick={() => setOpenFaq(open ? null : i)}
                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                      >
                        <span className="font-heading font-semibold text-foreground">{item.q}</span>
                        <ChevronDown
                          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
                        />
                      </button>
                      {open && (
                        <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Recommendation summary */}
            <section id="resumo" className="rounded-3xl border border-cta/30 bg-gradient-to-br from-cta/5 to-teal/5 p-8 md:p-10">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-cta" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cta">
                  Resumo da recomendação
                </span>
              </div>
              <h2 className="mt-3 font-heading text-2xl md:text-3xl font-bold text-foreground">
                O veredito final
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Se a sua prioridade é <strong className="text-foreground">durar 4 anos sem dor de cabeça</strong>,
                escolha o <strong className="text-foreground">Galaxy A55</strong>. Para
                <strong className="text-foreground"> extrair o máximo de hardware pelo menor preço</strong>, o
                <strong className="text-foreground"> Redmi Note 13 Pro</strong> não tem rival. Quem fotografa muito
                deve olhar o <strong className="text-foreground">Motorola Edge 50 Neo</strong>; quem joga, o
                <strong className="text-foreground"> Poco X6 Pro</strong>; e quem precisa de bateria infinita,
                o <strong className="text-foreground">Galaxy M55</strong>. Cinco escolhas, cinco perfis — e
                nenhuma escolha errada dentro do orçamento de R$ 3.000.
              </p>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Neste guia
                </span>
                <nav className="mt-3 space-y-2 text-sm">
                  <a href="#introducao" className="block text-muted-foreground hover:text-foreground">Como escolhemos</a>
                  {PICKS.map((p) => (
                    <a key={p.id} href={`#${p.id}`} className="block text-muted-foreground hover:text-foreground">
                      {p.category}
                    </a>
                  ))}
                  <a href="#comparativo" className="block text-muted-foreground hover:text-foreground">Tabela comparativa</a>
                  <a href="#dicas" className="block text-muted-foreground hover:text-foreground">Dicas de compra</a>
                  <a href="#faq" className="block text-muted-foreground hover:text-foreground">FAQ</a>
                  <a href="#resumo" className="block text-muted-foreground hover:text-foreground">Resumo final</a>
                </nav>
              </div>
              <div className="rounded-2xl border border-cta/30 bg-card p-5 shadow-soft">
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-cta" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-cta">
                    Top do guia
                  </span>
                </div>
                <p className="mt-2 font-heading font-semibold text-foreground">Galaxy A55</p>
                <p className="mt-1 text-xs text-muted-foreground">Melhor escolha geral 2026</p>
                <a
                  href="#melhor-geral"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-cta hover:underline"
                >
                  Ver análise <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function PickBlock({ pick }: { pick: Pick }) {
  const Icon = pick.icon;
  return (
    <section id={pick.id} className="scroll-mt-24">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cta/10 text-cta">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cta">
            {pick.category}
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            {pick.name}
          </h2>
        </div>
      </div>

      <article className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition hover:shadow-elevated">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-[4/3] md:aspect-auto bg-surface overflow-hidden">
            <img
              src={pick.image}
              alt={pick.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
            />
            <div className="absolute top-4 left-4">
              <Badge variant={pick.badge.variant}>{pick.badge.label}</Badge>
            </div>
          </div>
          <div className="p-6 md:p-8 flex flex-col">
            <div className="flex items-center justify-between gap-3">
              <Rating value={pick.rating} />
              <div className="text-right">
                <span className="block text-[11px] uppercase tracking-wider text-muted-foreground">
                  A partir de
                </span>
                <span className="font-heading text-xl font-bold text-foreground">
                  {pick.price}
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground italic border-l-2 border-teal/40 pl-3">
              "{pick.short}"
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{pick.review}</p>

            <div className="mt-5 rounded-xl bg-surface/60 p-4">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Ideal para
              </span>
              <p className="mt-1 text-sm text-foreground">{pick.profile}</p>
            </div>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground shadow-soft transition-all hover:brightness-105 hover:-translate-y-0.5 hover:shadow-elevated"
            >
              Ver oferta
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 border-t border-border">
          <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-border">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-teal">
              Pontos fortes
            </span>
            <ul className="mt-3 space-y-2">
              {pick.pros.map((p) => (
                <li key={p} className="flex gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 shrink-0 text-teal mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 md:p-8">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-cta">
              Pontos de atenção
            </span>
            <ul className="mt-3 space-y-2">
              {pick.cons.map((c) => (
                <li key={c} className="flex gap-2 text-sm text-muted-foreground">
                  <X className="h-4 w-4 shrink-0 text-cta mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
}

