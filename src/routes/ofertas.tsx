import { trackAffiliateClick } from "@/lib/analytics";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BadgeCheck,
  Clock,
  ShieldCheck,
  Smartphone,
  Star,
  Zap,
} from "lucide-react";
import { Badge, Rating } from "@/components/site/ui";

const CANONICAL = "https://techescolhacerta.com.br/ofertas";

export const Route = createFileRoute("/ofertas")({
  head: () => ({
    meta: [
      {
        title: "Ofertas de celulares recomendados | Tech Escolha Certa",
      },
      {
        name: "description",
        content:
          "Confira ofertas dos celulares recomendados pelo Tech Escolha Certa. Links afiliados para Galaxy A55, Galaxy A35, Redmi Note 13 Pro e outros modelos analisados.",
      },
      {
        name: "keywords",
        content:
          "ofertas de celulares, celulares em promoção, ofertas Mercado Livre, Galaxy A55 oferta, Galaxy A35 oferta, Redmi Note 13 Pro oferta",
      },
      {
        property: "og:title",
        content: "Ofertas de celulares recomendados",
      },
      {
        property: "og:description",
        content:
          "Página central com ofertas dos celulares recomendados nos guias, reviews e comparativos do Tech Escolha Certa.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: CANONICAL },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
  component: OfertasPage,
});

const offers = [
  {
    name: "Samsung Galaxy A55 5G 256GB",
    badge: "Mais equilibrado",
    rating: 4.6,
    image: "/images/products/galaxy-a55-optimized.webp",
    priceLabel: "Ver preço atualizado",
    description:
      "Uma das escolhas mais seguras para quem quer tela boa, construção premium, IP67, boa câmera e experiência Samsung confiável.",
    bestFor: "Quem quer equilíbrio e menor risco de arrependimento.",
    href:
      "https://www.mercadolivre.com.br/samsung-galaxy-a55-5g-dual-sim-256-gb-azul-celeste-8-gb-ram/p/MLB34731719?pdp_filters=item_id%3AMLB4580836945&attributes=COLOR%3AMLB34731719&matt_tool=38524122",
    review: "/review/galaxy-a55",
  },
  {
    name: "Samsung Galaxy A35 5G 256GB",
    badge: "Custo-benefício Samsung",
    rating: 4.4,
    image: "/images/products/galaxy-a35-optimized.webp",
    priceLabel: "Ver preço atualizado",
    description:
      "Boa opção para quem quer economizar dentro da linha Samsung, mantendo tela AMOLED, 5G, IP67 e boa experiência no dia a dia.",
    bestFor: "Quem quer Samsung gastando menos.",
    href:
      "https://www.mercadolivre.com.br/samsung-galaxy-a35-5g-dual-sim-256gb-azul-escuro-8-gb-ram/p/MLB34729843?pdp_filters=item_id%3AMLB6662576092&matt_tool=38524122",
    review: "/review/galaxy-a35",
  },
  {
    name: "Redmi Note 13 Pro 5G 256GB",
    badge: "Ficha técnica forte",
    rating: 4.4,
    image: "/images/products/redmi-note-13-pro-optimized.webp",
    priceLabel: "Ver preço atualizado",
    description:
      "Alternativa interessante para quem busca tela AMOLED, boa bateria, carregamento rápido e câmera principal de alta resolução.",
    bestFor: "Quem quer boa ficha técnica pelo preço.",
    href:
      "https://www.mercadolivre.com.br/smartphone-redmi-note-13-pro-5g-256gb-8ram-cnfc-cor-preto/p/MLB39445846?pdp_filters=item_id%3AMLB4162070017&matt_tool=38524122",
    review: "/review/redmi-note-13-pro",
  },
];

const guides = [
  {
    title: "Melhores celulares até R$ 1.500",
    href: "/guia/melhores-celulares-ate-1500-reais",
  },
  {
    title: "Melhores celulares para jogos até R$ 2.000",
    href: "/guia/melhores-celulares-para-jogos-ate-2000",
  },
  {
    title: "Melhores celulares até R$ 3.500",
    href: "/guia/melhores-celulares-ate-3500-reais",
  },
  {
    title: "Melhores celulares Samsung",
    href: "/melhores-celulares-samsung",
  },
];

function OfertasPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <div className="absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-cta/10 blur-[120px]" />
        <div className="absolute -bottom-40 -left-32 h-[26rem] w-[26rem] rounded-full bg-teal/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="cta">Ofertas</Badge>
                <Badge variant="soft">Links afiliados</Badge>
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
                Ofertas de celulares recomendados
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Aqui reunimos os celulares recomendados nos nossos guias,
                reviews e comparativos. Os botões levam para ofertas no Mercado
                Livre usando links afiliados.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-teal" />
                  Curadoria editorial
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-cta" />
                  Preços podem mudar
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <BadgeCheck className="h-3.5 w-3.5 text-teal" />
                  Compra via Mercado Livre
                </span>
              </div>
            </div>

            <aside className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-cta/10 text-cta">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Transparência
                  </p>
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    Como funcionam os links?
                  </h2>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Podemos receber comissão quando você compra por um link indicado.
                Isso não muda o preço final para você e ajuda a manter o site.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Antes de comprar, confira preço, prazo, vendedor, garantia,
                avaliações e condições de parcelamento.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 md:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cta">
            Produtos recomendados
          </p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
            Celulares com links afiliados ativos
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            A lista abaixo prioriza os modelos que já aparecem nos principais
            conteúdos do site e que possuem link afiliado configurado.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {offers.map((offer) => (
            <article
              key={offer.name}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
            >
              <div className="relative aspect-[4/3] bg-surface">
                <img
                  src={offer.image}
                  alt={offer.name}
                  loading="lazy"
                  className="h-full w-full object-contain bg-surface p-4"
                />
                <div className="absolute left-4 top-4">
                  <Badge variant="cta">{offer.badge}</Badge>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold text-foreground">
                    {offer.name}
                  </h3>
                  <Rating value={offer.rating} />
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {offer.description}
                </p>

                <div className="mt-4 rounded-xl bg-surface p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Melhor para
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {offer.bestFor}
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                 <a
  href={offer.href}
  target="_blank"
  rel="nofollow sponsored noopener noreferrer"
  onClick={() =>
    trackAffiliateClick({
      productName: offer.name,
      pageType: "ofertas",
    })
  }
  className="inline-flex items-center justify-center gap-2 rounded-lg bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground shadow-soft transition hover:-translate-y-0.5 hover:brightness-105"
> 
                    
                  
                    {offer.priceLabel}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>

                  <Link
                    to={offer.review}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
                  >
                    Ler análise
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
                Ainda em dúvida?
              </p>
              <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
                Consulte os guias antes de comprar
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Se você ainda não sabe qual modelo faz mais sentido, comece por
                um dos guias abaixo antes de clicar em uma oferta.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {guides.map((guide) => (
                <Link
                  key={guide.href}
                  to={guide.href}
                  className="group rounded-2xl border border-border bg-card p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-elevated"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-cta/10 text-cta">
                      <Smartphone className="h-5 w-5" />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-cta" />
                  </div>
                  <h3 className="mt-5 text-base font-bold text-foreground">
                    {guide.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 md:py-20">
        <div className="rounded-2xl border border-cta/30 bg-card p-6 shadow-soft ring-1 ring-cta/10 md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <Star className="h-6 w-6 text-cta" />
                <h2 className="text-2xl font-bold text-foreground">
                  Dica antes de comprar
                </h2>
              </div>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Não compre só pelo menor preço. Veja se o anúncio é de um bom
                vendedor, se o produto é novo, se tem garantia e se a versão
                possui armazenamento suficiente para o seu uso.
              </p>
            </div>

            <Link
              to="/melhores-celulares-custo-beneficio"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground shadow-soft transition hover:-translate-y-0.5 hover:brightness-105"
            >
              Ver melhores custo-benefício
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
