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
  "https://techescolhacerta.com.br/melhores-celulares-ate-2000";

export const Route = createFileRoute("/guia/melhores-celulares-ate-2000-reais")({
  head: () => ({
    meta: [
      {
        title:
          "Melhores celulares até 2000 reais em 2026 | Guia editorial completo",
      },
      {
        name: "description",
        content:
          "Guia editorial dos melhores celulares até 2000 reais em 2026: Galaxy A35, Redmi Note 13, Poco X6, Moto G84 e Galaxy M35 testados em câmera, bateria e desempenho.",
      },
      {
        name: "keywords",
        content:
          "melhores celulares até 2000 reais, melhor celular custo benefício 2026, Galaxy A35, Redmi Note 13, Poco X6, Moto G84, Galaxy M35",
      },
      {
        property: "og:title",
        content: "Melhores celulares até 2000 reais em 2026",
      },
      {
        property: "og:description",
        content:
          "Comparamos os intermediários de 2026 para indicar o melhor celular até R$ 2.000 em câmera, bateria, gaming e custo-benefício.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: CANONICAL },
      {
        property: "og:image",
        content:
          "https://techescolhacerta.com.br/favicon.png",
      },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: "Melhores celulares até 2000 reais em 2026",
          description:
            "Guia editorial dos melhores celulares intermediários de 2026 até R$ 2.000.",
          author: { "@type": "Organization", name: "Tech Escolha Certa" },
          datePublished: "2026-05-15",
          image:
            "https://techescolhacerta.com.br/favicon.png",
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
    name: "Samsung Galaxy A35 5G",
    image:
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=1200&q=80",
    rating: 4.6,
    price: "R$ 1.899",
    short:
      "O equilíbrio mais maduro até R$ 2.000: tela AMOLED 120 Hz, certificação IP67 e quatro anos de atualizações Samsung.",
    review:
      "O Galaxy A35 5G é o intermediário mais bem resolvido da faixa. A tela Super AMOLED de 6,6\" com 1000 nits brilha bem ao sol, o Exynos 1380 entrega uma One UI fluida e a câmera principal de 50 MP com OIS produz fotos confiáveis em qualquer luz. O grande diferencial é a soma: chassi com Gorilla Glass Victus+, certificação IP67 contra água e poeira (raríssima no preço) e quatro versões de Android garantidas pela Samsung.",
    profile:
      "Quem quer um celular maduro para usar 3 a 4 anos, com bom acabamento e sem se preocupar com suporte de software.",
    pros: [
      "Tela AMOLED 120 Hz com bom brilho ao sol",
      "Certificação IP67 contra água e poeira",
      "4 grandes atualizações de Android",
      "Câmera principal estabilizada (OIS)",
    ],
    cons: [
      "Carregamento de 25 W abaixo dos rivais chineses",
      "Exynos 1380 perde no gaming pesado",
    ],
  },
  {
    id: "melhor-custo-beneficio",
    category: "Melhor custo-benefício",
    icon: Wallet,
    badge: { variant: "teal", label: "Custo-benefício" },
    name: "Xiaomi Redmi Note 13 5G",
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1200&q=80",
    rating: 4.6,
    price: "R$ 1.499",
    short:
      "Difícil bater: AMOLED 120 Hz, 5G, câmera de 108 MP e carga de 33 W por menos de R$ 1.500.",
    review:
      "Pelo preço, o Redmi Note 13 5G entrega uma ficha que faz qualquer rival nacional suar. A câmera principal Samsung HM6 de 108 MP usa pixel binning para fotos detalhadas mesmo com pouca luz, a tela AMOLED FHD+ de 120 Hz é uma das mais brilhantes da faixa (1800 nits em pico) e o Dimensity 6080 dá conta de uso pesado de redes sociais e jogos casuais. Bateria de 5.000 mAh com carga de 33 W fecha o pacote.",
    profile:
      "Quem quer o máximo de hardware pelo menor preço possível e não se importa com a HyperOS cheia de recursos.",
    pros: [
      "Câmera principal de 108 MP",
      "Carregamento turbo de 33 W",
      "Tela AMOLED 120 Hz com 1800 nits",
      "Preço imbatível para a ficha",
    ],
    cons: [
      "HyperOS com bloatware pré-instalado",
      "Apenas 2 anos de atualizações Android",
    ],
  },
  {
    id: "melhor-bateria",
    category: "Melhor bateria",
    icon: Battery,
    badge: { variant: "default", label: "Autonomia" },
    name: "Samsung Galaxy M35 5G",
    image:
      "https://images.unsplash.com/photo-1610792516775-01de03eae630?auto=format&fit=crop&w=1200&q=80",
    rating: 4.5,
    price: "R$ 1.799",
    short:
      "Bateria de 6.000 mAh combinada ao Exynos 1380 entrega dois dias completos de uso moderado sem suor.",
    review:
      "Quando o assunto é autonomia pura, o Galaxy M35 5G é imbatível na faixa. Os 6.000 mAh somados à eficiência do Exynos 1380 (5 nm) e ao painel Super AMOLED+ com refresh adaptativo entregam facilmente 9 a 10 horas de tela ativa — o que se traduz em dois dias completos de uso moderado e um dia e meio para usuário pesado. O carregamento de 25 W cobre 0–50% em cerca de 35 minutos, suficiente para a proposta.",
    profile:
      "Quem viaja, fica longe de tomada por longos períodos ou simplesmente odeia depender do carregador.",
    pros: [
      "Autonomia real de até dois dias",
      "Tela Super AMOLED+ 120 Hz",
      "4 anos de atualizações Samsung",
      "Hot swap entre 5G e Wi-Fi sem queda",
    ],
    cons: [
      "Acabamento traseiro em plástico",
      "Carga de 25 W é apenas correta",
    ],
  },
  {
    id: "melhor-gaming",
    category: "Melhor para gaming",
    icon: Gamepad2,
    badge: { variant: "default", label: "Performance" },
    name: "Poco X6 5G",
    image:
      "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=1200&q=80",
    rating: 4.6,
    price: "R$ 1.999",
    short:
      "Snapdragon 7s Gen 2 e tela CrystalRes AMOLED 1.5K colocam o X6 acima de qualquer rival até R$ 2.000 em desempenho.",
    review:
      "Se o seu uso envolve jogos pesados e fluidez no Instagram, o Poco X6 5G é a escolha óbvia até R$ 2.000. O Snapdragon 7s Gen 2 (4 nm) entrega desempenho equivalente a um celular de R$ 3.000 da geração passada, sustenta 60 fps estáveis em Genshin Impact em médio e a tela CrystalRes AMOLED de 6,67\" com 1.5K de resolução, 120 Hz e 1800 nits é referência na faixa. Carga turbo de 67 W completa 0–100% em ~45 minutos.",
    profile:
      "Gamers mobile e usuários intensivos que querem o máximo de hardware sem ultrapassar R$ 2.000.",
    pros: [
      "Snapdragon 7s Gen 2 (4 nm) eficiente",
      "Tela CrystalRes AMOLED 1.5K",
      "Carga turbo de 67 W",
      "12 GB de RAM em algumas SKUs",
    ],
    cons: [
      "Câmera ultrawide de qualidade modesta",
      "HyperOS com publicidade em alguns apps",
    ],
  },
  {
    id: "melhor-camera",
    category: "Melhor câmera",
    icon: Camera,
    badge: { variant: "default", label: "Foto e vídeo" },
    name: "Motorola Moto G84 5G",
    image:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1200&q=80",
    rating: 4.5,
    price: "R$ 1.699",
    short:
      "Sensor Sony LYTIA com OIS e calibração Pantone — cores fiéis e vídeo 1080p estabilizado de verdade.",
    review:
      "O Moto G84 5G é o intermediário com a calibração de cor mais bem resolvida da categoria até R$ 2.000. A parceria com a Pantone se traduz em tons de pele realistas e céu sem aquele exagero de saturação típico dos rivais chineses. O sensor principal Sony LYTIA de 50 MP com OIS captura vídeo 1080p a 60 fps com estabilização eficiente, e a tela pOLED de 6,55\" com 120 Hz tem brilho e contraste muito acima do esperado para o preço.",
    profile:
      "Quem fotografa o dia a dia, redes sociais e família, e valoriza cores naturais sem precisar editar.",
    pros: [
      "Cores Pantone-validated muito naturais",
      "Tela pOLED 120 Hz com 1300 nits",
      "Design fino e leve (167 g)",
      "Android quase puro, sem bloatware",
    ],
    cons: [
      "Bateria de 5.000 mAh entrega só um dia",
      "Snapdragon 6s Gen 1 limita gaming pesado",
    ],
  },
];

const TABLE = [
  { label: "Galaxy A35 5G", price: "R$ 1.899", screen: "AMOLED 6,6\" 120 Hz", chip: "Exynos 1380", camera: "50 MP OIS", battery: "5.000 mAh / 25 W", updates: "4 anos" },
  { label: "Redmi Note 13 5G", price: "R$ 1.499", screen: "AMOLED 6,67\" 120 Hz", chip: "Dimensity 6080", camera: "108 MP", battery: "5.000 mAh / 33 W", updates: "2 anos" },
  { label: "Galaxy M35 5G", price: "R$ 1.799", screen: "AMOLED+ 6,6\" 120 Hz", chip: "Exynos 1380", camera: "50 MP OIS", battery: "6.000 mAh / 25 W", updates: "4 anos" },
  { label: "Poco X6 5G", price: "R$ 1.999", screen: "AMOLED 6,67\" 1.5K 120 Hz", chip: "Snapdragon 7s Gen 2", camera: "64 MP OIS", battery: "5.100 mAh / 67 W", updates: "3 anos" },
  { label: "Moto G84 5G", price: "R$ 1.699", screen: "pOLED 6,55\" 120 Hz", chip: "Snapdragon 6s Gen 1", camera: "50 MP OIS Pantone", battery: "5.000 mAh / 30 W", updates: "3 anos" },
];

const TIPS = [
  {
    title: "Não aceite tela LCD acima de R$ 1.200",
    text: "AMOLED virou padrão na faixa até R$ 2.000. Entrega preto real, brilho melhor ao sol e consumo menor com always-on display.",
  },
  {
    title: "Verifique se é 5G de verdade",
    text: "Algumas SKUs antigas ainda saem com 4G. Confira a faixa n78 (3,5 GHz) usada pelas operadoras brasileiras antes de comprar.",
  },
  {
    title: "OIS faz mais diferença que megapixel",
    text: "Estabilização óptica salva fotos à noite e vídeos a pé. Prefira modelos com OIS no sensor principal — Galaxy A35, M35, Poco X6 e Moto G84 entregam.",
  },
  {
    title: "Tempo de atualização importa muito",
    text: "Samsung lidera com 4 anos de Android, Motorola e Poco oferecem 3 anos, e a Xiaomi clássica entrega só 2. Pense em quanto tempo quer ficar com o aparelho.",
  },
  {
    title: "Compre em loja oficial ou parceiro confiável",
    text: "Versões importadas perdem garantia local e algumas bandas 5G. Busque selo do fabricante em marketplaces e verifique a versão (BR vs global).",
  },
];

const FAQ = [
  {
    q: "Vale a pena comprar um celular de até 2000 reais em 2026?",
    a: "Sim. Os intermediários de 2026 entregam tela AMOLED 120 Hz, câmera com OIS, 5G e processadores eficientes — recursos que custavam o dobro há dois anos. Para a maioria dos usuários, um celular nessa faixa cobre todas as necessidades sem comprometer.",
  },
  {
    q: "Qual o melhor celular custo-benefício até 2000 reais?",
    a: "O Redmi Note 13 5G é a escolha mais agressiva em ficha técnica pelo preço, enquanto o Galaxy A35 5G vence em longevidade, IP67 e ecossistema. Para a maioria, o A35 oferece o equilíbrio mais inteligente entre hardware, software e suporte.",
  },
  {
    q: "Intermediário roda jogos pesados como Genshin Impact?",
    a: "Depende do processador. Snapdragon 7s Gen 2 (Poco X6) sustenta 60 fps em médio. Dimensity 6080 e Snapdragon 6s Gen 1 rodam em baixo com quedas frequentes. Para gaming sério, o Poco X6 é a única escolha clara até R$ 2.000.",
  },
  {
    q: "Galaxy A35 ou M35: qual escolher?",
    a: "O A35 tem acabamento em vidro com Gorilla Glass Victus+, certificação IP67 e design mais premium. O M35 prioriza autonomia (6.000 mAh) em uma carcaça plástica sem certificação de água. Mesmo Exynos 1380 nos dois — desempenho prático similar.",
  },
  {
    q: "Compensa esperar Black Friday para comprar?",
    a: "Modelos lançados há 8+ meses (como Redmi Note 13 e Moto G84) caem 15-20% em datas promocionais. Se não há urgência, vale esperar — especialmente para Galaxy A35 e Poco X6, que costumam ter desconto agressivo.",
  },
];

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

function GuidePage() {
  const progress = useReadingProgress();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
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
              <span className="text-foreground">Melhores celulares até R$ 2.000</span>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <Badge variant="cta">Guia editorial 2026</Badge>
              <Badge variant="soft">Atualizado em maio/2026</Badge>
            </div>
            <h1 className="mt-4 font-heading text-3xl md:text-5xl font-bold leading-[1.1] text-foreground">
              Melhores celulares até 2000 reais em 2026
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Testamos os intermediários mais relevantes do ano para indicar, sem
              rodeios, qual smartphone até R$ 2.000 entrega o melhor pacote em
              câmera, bateria, desempenho e longevidade. Cinco categorias, cinco
              vencedores.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><User className="h-4 w-4" /> Equipe Tech Escolha Certa</span>
              <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-4 w-4" /> Maio de 2026</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> 13 min de leitura</span>
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
                Como escolhemos os melhores celulares até R$ 2.000
              </h2>
              <p>
                A faixa entre R$ 1.300 e R$ 2.000 é a mais disputada do mercado
                brasileiro — e onde a maior parte das vendas acontece. É também
                onde aparecem mais armadilhas de marketing: telas com brilho
                exagerado no papel, câmeras com 200 MP que rendem fotos modestas
                e baterias enormes presas a processadores ineficientes.
              </p>
              <p>
                Para este guia, analisamos mais de 15 lançamentos entre 2024 e
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
                  FAQ: melhores celulares até R$ 2.000
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
                Se a sua prioridade é <strong className="text-foreground">durar 4 anos com IP67 e bom acabamento</strong>,
                escolha o <strong className="text-foreground">Galaxy A35 5G</strong>. Para
                <strong className="text-foreground"> extrair o máximo de hardware pelo menor preço</strong>, o
                <strong className="text-foreground"> Redmi Note 13 5G</strong> não tem rival. Quem precisa de bateria infinita
                deve olhar o <strong className="text-foreground">Galaxy M35 5G</strong>; quem joga, o
                <strong className="text-foreground"> Poco X6 5G</strong>; e quem fotografa muito, o
                <strong className="text-foreground"> Moto G84 5G</strong>. Cinco escolhas, cinco perfis — e
                nenhuma escolha errada dentro do orçamento de R$ 2.000.
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
                <p className="mt-2 font-heading font-semibold text-foreground">Galaxy A35 5G</p>
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





