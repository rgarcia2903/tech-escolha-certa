import { getSocialImage } from "@/lib/product-media";
import { ProductMedia } from "@/components/site/ProductMedia";
import { ProductPurchaseOptions } from "@/components/site/ProductPurchaseOptions";
import { EditorialSelection } from "@/components/site/EditorialSelection";
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

const CANONICAL = "https://techescolhacerta.com.br/guia/melhores-celulares-ate-3000-reais";

export const Route = createFileRoute("/guia/melhores-celulares-ate-3000-reais")({
  head: () => ({
    meta: [
      {
        title: "Melhores celulares até 3000 reais em 2026 | Guia editorial completo",
      },
      {
        name: "description",
        content:
          "Os melhores celulares até 3000 reais em 2026: Galaxy S25 FE, Edge 60 Pro, Poco X8 Pro, Galaxy A57 e Moto G86, com até quanto pagar em cada um.",
      },
      {
        name: "keywords",
        content:
          "melhores celulares até 3000 reais, melhor celular até 3000, Galaxy S25 FE, Edge 60 Pro, Poco X8 Pro, Galaxy A57, Moto G86",
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
        content: getSocialImage(
          "https://techescolhacerta.com.br/images/products/gallery/galaxy-s25-fe/01-principal.webp",
        ),
      },
    ],

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
          dateModified: "2026-11-03",
          image: getSocialImage(
            "https://techescolhacerta.com.br/images/products/gallery/galaxy-s25-fe/01-principal.webp",
          ),
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
  productId: string;
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
    category: "O mais completo",
    icon: Award,
    badge: { variant: "cta", label: "Recomendado" },
    name: "Samsung Galaxy S25 FE",
    productId: "galaxy-s25-fe",
    image: "/images/products/gallery/galaxy-s25-fe/01-principal.webp",
    rating: 0,
    price: "R$ 3.000",
    short: "Linha S por preço de intermediário: teleobjetiva de 3x, IP68 e sete anos de atualizações.",
    review:
      "O Galaxy S25 FE é o celular mais completo até R$ 3.000. Tem o Exynos 2400, o mesmo do Galaxy S24, tela AMOLED de 6,7\" com 120 Hz, câmera tripla com teleobjetiva de 3x e vídeo até 8K. É o único desta lista com sete anos de atualizações, o que faz dele a compra mais segura para quem fica muitos anos com o celular. O ponto fraco é a bateria de 4.900 mAh, menor que a dos rivais.",
    profile: "Quem quer um Samsung de linha S, com zoom e muitos anos de suporte, sem pagar preço de topo de linha.",
    pros: ["Teleobjetiva de 3x", "Sete anos de atualizações", "IP68 e recarga sem fio", "Exynos 2400"],
    cons: ["Bateria de 4.900 mAh", "No Mercado Livre costuma passar do preço-alvo; compare com a Amazon"],
  },
  {
    id: "melhor-bateria-camera",
    category: "Bateria e câmera",
    icon: Camera,
    badge: { variant: "default", label: "Foto e bateria" },
    name: "Motorola Edge 60 Pro",
    productId: "edge-60-pro",
    image: "/images/products/gallery/edge-60-pro/01-principal.webp",
    rating: 0,
    price: "R$ 2.700",
    short: "6.000 mAh, recarga de 90 W, zoom óptico de 3x e IP68/IP69.",
    review:
      "O Edge 60 Pro junta o que costuma vir separado: bateria de 6.000 mAh com recarga de 90 W, três câmeras de 50 MP (principal e ultra-angular) mais teleobjetiva de 3x, selfie de 50 MP com vídeo 4K, 12 GB de RAM e proteção IP68, IP69 e MIL-STD-810H. A Motorola promete só três anos de atualizações, bem menos que a Samsung.",
    profile: "Quem quer bateria para mais de um dia, recarga muito rápida e câmera com zoom.",
    pros: ["Bateria de 6.000 mAh e 90 W", "Zoom óptico de 3x", "IP68, IP69 e MIL-STD-810H", "12 GB de RAM"],
    cons: ["Só três anos de atualizações", "Tela curva divide opiniões"],
  },
  {
    id: "melhor-gaming",
    category: "Jogos e desempenho",
    icon: Gamepad2,
    badge: { variant: "default", label: "Performance" },
    name: "Poco X8 Pro",
    productId: "poco-x8-pro",
    image: "/images/products/phones-hero-optimized.webp",
    rating: 0,
    price: "R$ 2.450",
    short: "O mais forte para jogos até R$ 3.000: Dimensity 8500 Ultra, 6.500 mAh e 100 W.",
    review:
      "O Poco X8 Pro tem o processador mais forte da faixa, o Dimensity 8500 Ultra, que passa de 1,9 milhão de pontos no AnTuTu. A bateria é de 6.500 mAh com recarga de 100 W, a tela AMOLED 1.5K de 6,59\" chega a 120 Hz e ele tem IP68. A Xiaomi promete quatro versões do Android e seis anos de segurança. As câmeras são boas, mas não são o foco.",
    profile: "Quem joga títulos pesados, como Genshin Impact, e quer a maior bateria da lista.",
    pros: ["Dimensity 8500 Ultra", "Bateria de 6.500 mAh e 100 W", "Tela 1.5K de 120 Hz", "IP68"],
    cons: ["Câmeras abaixo do S25 FE e do Edge 60 Pro", "Não confunda com o X8 Pro Max, que é outro aparelho"],
  },
  {
    id: "melhor-custo-beneficio",
    category: "Custo-benefício",
    icon: Wallet,
    badge: { variant: "teal", label: "Custo-benefício" },
    name: "Samsung Galaxy A57 5G",
    productId: "galaxy-a57-5g",
    image: "/images/products/licensed/galaxy-a57-5g.webp",
    rating: 0,
    price: "R$ 1.850",
    short: "O Samsung intermediário mais completo, gastando bem menos que R$ 3.000.",
    review:
      "Se você não precisa de zoom nem joga pesado, o Galaxy A57 entrega o essencial por bem menos. Tem Exynos 1680, tela AMOLED de 6,7\" com 120 Hz, câmera principal de 50 MP com estabilização óptica, ultra-angular de 12 MP, IP68 e seis anos de atualizações, num corpo de 6,9 mm e 179 g.",
    profile: "Quem quer um Samsung moderno e duradouro sem gastar perto de R$ 3.000.",
    pros: ["Seis anos de atualizações", "IP68", "Fino e leve (6,9 mm, 179 g)", "Câmera com OIS"],
    cons: ["Sem teleobjetiva", "Carregador vendido separadamente"],
  },
  {
    id: "melhor-tela",
    category: "Tela e resistência",
    icon: Battery,
    badge: { variant: "default", label: "Tela" },
    name: "Motorola Moto G86 5G",
    productId: "moto-g86-5g",
    image: "/images/products/gallery/moto-g86-5g/01-principal.webp",
    rating: 0,
    price: "R$ 1.900",
    short: "Tela pOLED 1.5K com 4.500 nits, IP68/IP69 e carregador na caixa.",
    review:
      "O Moto G86 é a opção para quem quer gastar perto de R$ 1.900 e não abre mão de uma tela excelente: pOLED 1.5K de 120 Hz com pico de 4.500 nits, fácil de ler sob o sol. Tem câmera Sony de 50 MP com estabilização óptica, bateria de 5.200 mAh, carregador de 33 W na caixa e proteção IP68/IP69. São duas versões do Android e quatro anos de segurança.",
    profile: "Quem quer tela muito boa e resistência gastando menos.",
    pros: ["Tela pOLED 1.5K de 4.500 nits", "IP68 e IP69", "Carregador na caixa", "Câmera com OIS"],
    cons: ["Dimensity 7300 fica abaixo dos outros desta lista", "Menos anos de atualização"],
  },
];

const TABLE = [
  { label: "Galaxy S25 FE", price: "R$ 3.000", screen: 'AMOLED 6,7" 120 Hz', chip: "Exynos 2400", camera: "50 MP + tele 3x", battery: "4.900 mAh / 45 W", updates: "7 anos" },
  { label: "Edge 60 Pro", price: "R$ 2.700", screen: 'pOLED 6,7" 120 Hz', chip: "Dimensity 8350 Extreme", camera: "50 + 50 MP + tele 3x", battery: "6.000 mAh / 90 W", updates: "3 anos" },
  { label: "Poco X8 Pro", price: "R$ 2.450", screen: 'AMOLED 6,59" 1.5K 120 Hz', chip: "Dimensity 8500 Ultra", camera: "50 MP OIS", battery: "6.500 mAh / 100 W", updates: "4 Android + 6 segurança" },
  { label: "Galaxy A57", price: "R$ 1.850", screen: 'AMOLED 6,7" 120 Hz', chip: "Exynos 1680", camera: "50 MP OIS + 12 MP", battery: "5.000 mAh / 45 W", updates: "6 anos" },
  { label: "Moto G86", price: "R$ 1.900", screen: 'pOLED 6,67" 1.5K 120 Hz', chip: "Dimensity 7300", camera: "50 MP OIS", battery: "5.200 mAh / 33 W", updates: "2 Android + 4 segurança" },
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
    q: "Qual o melhor celular até 3000 reais em 2026?",
    a: "O Galaxy S25 FE, pelo conjunto: teleobjetiva de 3x, IP68 e sete anos de atualizações. Para jogos, o Poco X8 Pro; para bateria e câmera, o Edge 60 Pro.",
  },
  {
    q: "Qual o melhor celular para jogos até 3000 reais?",
    a: "O Poco X8 Pro, com Dimensity 8500 Ultra, 6.500 mAh e recarga de 100 W. Ele costuma custar perto de R$ 2.450, abaixo do teto.",
  },
  {
    q: "Vale gastar R$ 3.000 ou um celular de R$ 1.900 basta?",
    a: "Para redes sociais, fotos do dia a dia e vídeos, o Galaxy A57 ou o Moto G86 bastam. Os R$ 3.000 valem para quem quer zoom, joga pesado ou quer sete anos de atualizações.",
  },
  {
    q: "Galaxy S25 FE ou Edge 60 Pro?",
    a: "O S25 FE recebe atualizações por sete anos, contra três do Edge 60 Pro. O Edge tem bateria bem maior (6.000 mAh), recarga de 90 W e costuma custar menos.",
  },
  {
    q: "Compensa esperar a Black Friday?",
    a: "Se não há urgência, sim, desde que o preço fique perto do valor indicado em cada modelo. Desconfie de \"promoção\" que só volta ao preço normal.",
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
              <Link to="/" className="hover:text-foreground">
                Home
              </Link>
              <span>/</span>
              <span>Guia de compra</span>
              <span>/</span>
              <span className="text-foreground">Melhores celulares até R$ 3.000</span>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <Badge variant="cta">Guia editorial 2026</Badge>
              <Badge variant="soft">Atualizado em novembro/2026</Badge>
            </div>
            <h1 className="mt-4 font-heading text-3xl md:text-5xl font-bold leading-[1.1] text-foreground">
              Melhores celulares até 3000 reais em 2026
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Comparamos documentalmente intermediários premium, sem testes próprios, para discutir
              qual smartphone até R$ 3.000 entrega o melhor pacote em câmera, bateria, desempenho e
              longevidade. Um modelo atual para cada perfil.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <User className="h-4 w-4" /> Equipe Tech Escolha Certa
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" /> Novembro de 2026
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> 14 min de leitura
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-teal" /> Análise independente
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="container-tec py-14 md:py-20">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_280px] gap-12">
          <article className="min-w-0 max-w-3xl space-y-16">
            {/* Intro */}
            <EditorialSelection selection="ate-3000" />
            <div id="introducao" className="space-y-5 text-muted-foreground leading-relaxed">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Como escolhemos os melhores celulares até R$ 3.000
              </h2>
              <p>
                A faixa entre R$ 1.500 e R$ 3.000 é a mais disputada do mercado brasileiro — e
                também a mais confusa. É onde os fabricantes colocam suas melhores telas,
                processadores eficientes e câmeras competentes, mas também onde mais aparecem
                armadilhas de marketing.
              </p>
              <p>
                Escolhemos um modelo atual, à venda no Brasil, para cada perfil, com base na ficha
                técnica oficial, no tempo de atualizações e no preço visto nas lojas em novembro de
                2026. Não fazemos testes de laboratório próprios. O valor indicado em cada modelo é
                até quanto vale pagar, não o preço da loja.
              </p>
              <p>
                Os links de oferta são afiliados. Você paga o mesmo preço e nós recebemos uma
                comissão que mantém esta análise independente. Nenhum fabricante pagou pela posição
                neste guia.
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
                <div
                  className="overflow-x-auto"
                  role="region"
                  aria-label="Tabela comparativa: deslize para ver todas as colunas"
                  tabIndex={0}
                >
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
            <section
              id="resumo"
              className="rounded-3xl border border-cta/30 bg-gradient-to-br from-cta/5 to-teal/5 p-8 md:p-10"
            >
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
                Para a maioria, o <strong className="text-foreground">Galaxy S25 FE</strong>:
                teleobjetiva, IP68 e sete anos de atualizações. Quem quer bateria e zoom gastando
                menos deve olhar o <strong className="text-foreground">Edge 60 Pro</strong>; quem
                joga, o <strong className="text-foreground">Poco X8 Pro</strong>. Se o orçamento
                pode ser menor, o <strong className="text-foreground">Galaxy A57</strong> e o{" "}
                <strong className="text-foreground">Moto G86</strong> entregam o essencial por
                cerca de R$ 1.900.
              </p>
            </section>
          </article>

          {/* Sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Neste guia
                </span>
                <nav className="mt-3 space-y-2 text-sm">
                  <a
                    href="#introducao"
                    className="block text-muted-foreground hover:text-foreground"
                  >
                    Como escolhemos
                  </a>
                  {PICKS.map((p) => (
                    <a
                      key={p.id}
                      href={`#${p.id}`}
                      className="block text-muted-foreground hover:text-foreground"
                    >
                      {p.category}
                    </a>
                  ))}
                  <a
                    href="#comparativo"
                    className="block text-muted-foreground hover:text-foreground"
                  >
                    Tabela comparativa
                  </a>
                  <a href="#dicas" className="block text-muted-foreground hover:text-foreground">
                    Dicas de compra
                  </a>
                  <a href="#faq" className="block text-muted-foreground hover:text-foreground">
                    FAQ
                  </a>
                  <a href="#resumo" className="block text-muted-foreground hover:text-foreground">
                    Resumo final
                  </a>
                </nav>
              </div>
              <div className="rounded-2xl border border-cta/30 bg-card p-5 shadow-soft">
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-cta" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-cta">
                    Top do guia
                  </span>
                </div>
                <p className="mt-2 font-heading font-semibold text-foreground">Galaxy S25 FE</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  O mais completo até R$ 3.000
                </p>
                <a
                  href="#melhor-geral"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-cta hover:underline"
                >
                  Ver análise <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
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
            <ProductMedia
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
              <div className="text-right">
                <span className="block text-[11px] uppercase tracking-wider text-muted-foreground">
                  Compre se estiver até
                </span>
                <span className="font-heading text-xl font-bold text-foreground">{pick.price}</span>
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

            <ProductPurchaseOptions
              productId={pick.productId}
              pageType="guia"
              placement="legacy_guide"
              className="mt-5"
            />
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
