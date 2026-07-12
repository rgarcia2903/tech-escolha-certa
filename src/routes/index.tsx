import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, ShieldCheck, Smartphone, Star } from "lucide-react";

import { AffiliateCTA } from "@/components/site/AffiliateCTA";
import { CategoryHero } from "@/components/site/CategoryHero";
import { ComparisonCard } from "@/components/site/ComparisonCard";
import { ReviewCard } from "@/components/site/ReviewCard";
import { SectionTitle } from "@/components/site/SectionTitle";
import { TopPickCard } from "@/components/site/TopPickCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Tech Escolha Certa | Melhores celulares, reviews e comparativos 2026",
      },
      {
        name: "description",
        content:
          "Reviews, comparativos, guias e ofertas de celulares Samsung, Xiaomi, Redmi, Poco e iPhone para comprar melhor em 2026.",
      },
      {
        name: "keywords",
        content:
          "melhores celulares 2026, melhores celulares Xiaomi, celulares custo-benefício, comparativos de celulares, reviews de celulares",
      },
      {
        property: "og:title",
        content: "Tech Escolha Certa | Reviews e comparativos de celulares",
      },
      {
        property: "og:description",
        content:
          "Guias editoriais para comparar celulares, encontrar ofertas e escolher o modelo certo para seu perfil.",
      },
    ],
  }),
  component: HomePage,
});

const featuredPicks = [
  {
    category: "Melhor Xiaomi geral",
    product: "Redmi Note 13 Pro 5G",
    description:
      "Equilíbrio forte entre tela AMOLED, câmera de 200 MP, bateria e custo-benefício.",
  },
  {
    category: "Melhor Xiaomi premium",
    product: "Redmi Note 14 Pro+ 5G",
    description:
      "Mais completo para quem quer câmera forte, IP68 e carregamento de 120 W.",
  },
  {
    category: "Melhor performance",
    product: "Poco X7 Pro",
    description:
      "Escolha mais forte para jogos, multitarefa pesada, bateria e velocidade.",
  },
  {
    category: "Mais equilibrado",
    product: "Galaxy A55 5G",
    description:
      "Boa escolha para quem quer câmera, acabamento, One UI e segurança no longo prazo.",
  },
];

const mainHubs = [
  {
    title: "Melhores Xiaomi",
    href: "/melhores-celulares-xiaomi",
    description: "Redmi, Poco e Xiaomi organizados por perfil de compra.",
  },
  {
    title: "Comparativos",
    href: "/comparativos",
    description: "Decida entre dois modelos com veredito direto.",
  },
  {
    title: "Custo-benefício",
    href: "/melhores-celulares-custo-beneficio",
    description: "Modelos que entregam mais pelo preço.",
  },
  {
    title: "Ofertas",
    href: "/ofertas",
    description: "Links para consultar preços e disponibilidade.",
  },
];

const categoryLinks = [
  { title: "Samsung", href: "/melhores-celulares-samsung" },
  { title: "Xiaomi", href: "/melhores-celulares-xiaomi" },
  { title: "Até R$ 1.500", href: "/guia/melhores-celulares-ate-1500-reais" },
  { title: "Até R$ 2.000", href: "/melhores-celulares-ate-2000" },
  { title: "Até R$ 2.500", href: "/melhores-celulares-ate-2500" },
  { title: "Até R$ 3.500", href: "/guia/melhores-celulares-ate-3500-reais" },
  { title: "Para jogos", href: "/guia/melhores-celulares-para-jogos-ate-2000" },
  { title: "Todos os comparativos", href: "/comparativos" },
];

function HomePage() {
  return (
    <main className="min-h-screen bg-[#F7F2EB] text-slate-900">
      <CategoryHero
        eyebrow="Portal editorial de tecnologia"
        title="Escolha seu próximo celular com mais segurança."
        description="Reviews, comparativos, guias de compra e recomendações editoriais para ajudar você a escolher entre Samsung, Xiaomi, Redmi, Poco e iPhone sem cair em marketing vazio."
        image="/images/products/phones-hero-optimized.webp"
        aside={
          <>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#8B5A2B] ring-1 ring-white/20">
              <ShieldCheck className="h-3.5 w-3.5" />
              Hub em destaque
            </div>

            <h2 className="mt-4 text-3xl font-bold text-white">
              Melhores celulares Xiaomi
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-200">
              Guia atualizado com Redmi Note 13 Pro, Redmi Note 14 Pro+, Poco X7 Pro
              e Poco X6 Pro, incluindo reviews e comparativos para decidir melhor.
            </p>

            <Link
              to="/melhores-celulares-xiaomi"
              className="mt-6 block rounded-full bg-[#8B5A2B] px-5 py-3 text-center text-sm font-bold text-white transition hover:brightness-95"
            >
              Ver guia Xiaomi
            </Link>
          </>
        }
      >
        <Link
          to="/melhores-celulares-xiaomi"
          className="rounded-full bg-[#8B5A2B] px-6 py-3 text-sm font-bold text-white transition hover:brightness-95"
        >
          Ver melhores Xiaomi
        </Link>

        <Link
          to="/comparativos"
          className="rounded-full bg-white/10 px-6 py-3 text-sm font-bold text-white ring-1 ring-white/20 transition hover:bg-white/15"
        >
          Ver comparativos
        </Link>
      </CategoryHero>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <SectionTitle
          eyebrow="Comece por aqui"
          title="Escolha o melhor caminho para comprar"
          description="Acesse rapidamente os hubs principais do site: guias, comparativos, custo-benefício e ofertas."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {mainHubs.map((item) => (
            <HubCard
              key={item.title}
              title={item.title}
              href={item.href}
              description={item.description}
            />
          ))}
        </div>

        <section className="mt-14">
          <SectionTitle
            eyebrow="Escolhas editoriais"
            title="Os celulares que mais valem a pena hoje"
            description="Seleção editorial focada em experiência real, custo-benefício, desempenho e longevidade."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredPicks.map((item) => (
              <TopPickCard
                key={item.product}
                category={item.category}
                product={item.product}
                description={item.description}
              />
            ))}
          </div>
        </section>

        <section className="mt-14">
          <SectionTitle
            eyebrow="Categorias principais"
            title="Explore por tipo de compra"
            description="Encontre rapidamente o guia ideal para seu orçamento, marca ou perfil de uso."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categoryLinks.map((item) => (
              <CategoryLink key={item.title} title={item.title} href={item.href} />
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <SectionTitle
            eyebrow="Reviews em destaque"
            title="Análises completas para ler agora"
            description="Reviews dos aparelhos mais importantes para quem está comparando custo-benefício, câmera, bateria e desempenho."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <ReviewCard
              title="Review Redmi Note 14 Pro+ 5G"
              description="Xiaomi mais completo da linha Redmi, com 200 MP, IP68 e 120 W."
              href="/review/redmi-note-14-pro-plus"
              image="/images/products/redmi-note-14-pro-plus-optimized.webp"
              score="9.2"
              badge="Xiaomi premium"
            />

            <ReviewCard
              title="Review Poco X7 Pro"
              description="Uma das melhores opções para desempenho, jogos e bateria."
              href="/review/poco-x7-pro"
              image="/images/products/poco-x7-pro-optimized.webp"
              score="9.3"
              badge="Performance"
            />

            <ReviewCard
              title="Review Redmi Note 13 Pro 5G"
              description="Excelente equilíbrio entre tela, câmera e carregamento rápido."
              href="/review/redmi-note-13-pro"
              image="/images/products/redmi-note-13-pro-optimized.webp"
              score="9.0"
              badge="Custo-benefício"
            />

            <ReviewCard
              title="Review Poco X6 Pro"
              description="Ainda vale para quem quer muita performance pagando menos."
              href="/review/poco-x6-pro"
              image="/images/products/poco-x6-pro-optimized.webp"
              score="8.9"
              badge="Gamer"
            />

            <ReviewCard
              title="Review Galaxy A55 5G"
              description="O Samsung mais equilibrado para a maioria das pessoas."
              href="/review/galaxy-a55"
              image="/images/products/galaxy-a55-optimized.webp"
              score="9.0"
              badge="Samsung"
            />

            <ReviewCard
              title="Review Galaxy S24"
              description="Experiência flagship compacta, premium e muito completa."
              href="/review/galaxy-s24"
              image="/images/products/galaxy-s24-optimized.webp"
              score="9.6"
              badge="Premium"
            />
          </div>
        </section>

        <section className="mt-14 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <SectionTitle
            eyebrow="Comparativos"
            title="As comparações mais importantes"
            description="Veja qual aparelho realmente faz mais sentido para o seu perfil antes de comprar."
          />

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <ComparisonCard
              title="Redmi Note 13 Pro vs Redmi Note 14 Pro+"
              description="Compare os dois Redmi mais importantes para decidir se vale pagar mais no modelo novo."
              href="/comparativo/redmi-note-13-pro-vs-redmi-note-14-pro-plus"
              image="/images/products/redmi-note-14-pro-plus-optimized.webp"
              winner="Redmi Note 14 Pro+ para conjunto mais completo; Redmi Note 13 Pro para economizar."
            />

            <ComparisonCard
              title="Poco X6 Pro vs Poco X7 Pro"
              description="Veja qual Poco vale mais a pena em desempenho, bateria, tela e preço."
              href="/comparativo/poco-x6-pro-vs-poco-x7-pro"
              image="/images/products/poco-x7-pro-optimized.webp"
              winner="Poco X7 Pro para bateria e hardware novo; Poco X6 Pro se estiver bem mais barato."
            />

            <ComparisonCard
              title="Galaxy A55 vs Redmi Note 13 Pro"
              description="Samsung ou Xiaomi? Compare software, câmera, bateria e custo-benefício."
              href="/comparativo/galaxy-a55-vs-redmi-note-13-pro"
              image="/images/products/redmi-note-13-pro-optimized.webp"
              winner="Galaxy A55 para experiência premium; Redmi para ficha técnica e preço."
            />

            <ComparisonCard
              title="Galaxy A55 vs Poco X6 Pro"
              description="Samsung mais equilibrado contra Poco com foco em desempenho e jogos."
              href="/comparativo/galaxy-a55-vs-poco-x6-pro"
              image="/images/products/poco-x6-pro-optimized.webp"
              winner="Galaxy A55 para equilíbrio; Poco X6 Pro para desempenho."
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/comparativos"
              className="inline-flex items-center gap-2 rounded-full bg-[#8B5A2B] px-5 py-3 text-sm font-bold text-white transition hover:brightness-95"
            >
              Ver todos os comparativos <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/melhores-celulares-xiaomi"
              className="inline-flex items-center gap-2 rounded-full bg-[#F7F2EB] px-5 py-3 text-sm font-bold text-[#0F3F4A] ring-1 ring-slate-200 transition hover:text-[#8B5A2B]"
            >
              Ver guia Xiaomi <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[1fr_340px]">
          <article className="space-y-10">
            <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#F7F2EB] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#8B5A2B] ring-1 ring-slate-200">
                <Smartphone className="h-3.5 w-3.5" />
                Guia editorial
              </div>

              <h2 className="mt-5 text-3xl font-bold text-[#0F3F4A]">
                Nosso foco é ajudar você a comprar melhor.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                O mercado de smartphones ficou extremamente confuso. Existem dezenas de
                modelos parecidos, fichas técnicas difíceis de comparar e muito marketing
                que nem sempre explica o que muda no uso real.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                O Tech Escolha Certa simplifica isso com reviews claros, comparativos
                diretos e recomendações organizadas por perfil: custo-benefício, marca,
                jogos, câmera, bateria e faixa de preço.
              </p>
            </section>

            <AffiliateCTA
              title="Ofertas atualizadas dos celulares recomendados"
              description="Veja preço, parcelamento e disponibilidade dos modelos mais recomendados do momento."
              buttonText="Ver ofertas atualizadas"
              href="https://www.mercadolivre.com.br/samsung-galaxy-a55-5g-dual-sim-256-gb-azul-celeste-8-gb-ram/p/MLB34731719?pdp_filters=item_id%3AMLB4580836945&attributes=COLOR%3AMLB34731719&matt_tool=38524122"
              highlight="Samsung • Xiaomi • Redmi • Poco"
              productName="Galaxy A55"
              pageType="home"
            />

            <section className="rounded-3xl bg-[#0F3F4A] p-8 text-white shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#8B5A2B] ring-1 ring-white/20">
                <Star className="h-3.5 w-3.5" />
                Filosofia editorial
              </div>

              <h2 className="mt-5 text-3xl font-bold text-[#F8FAFC]">
                Nem sempre o celular mais caro é o melhor para você.
              </h2>

              <p className="mt-4 max-w-4xl text-base leading-7 text-slate-100">
                Nosso foco é encontrar os aparelhos que realmente fazem sentido para cada
                perfil e faixa de preço, equilibrando experiência, longevidade,
                desempenho e custo-benefício.
              </p>
            </section>
          </article>

          <div className="space-y-6 lg:sticky lg:top-28 lg:h-fit">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5A2B]">
                Links rápidos
              </p>

              <div className="mt-5 space-y-3 text-sm">
                <SidebarLink title="Melhores Xiaomi" href="/melhores-celulares-xiaomi" />
                <SidebarLink title="Comparativos" href="/comparativos" />
                <SidebarLink title="Melhores custo-benefício" href="/melhores-celulares-custo-beneficio" />
                <SidebarLink title="Ofertas" href="/ofertas" />
                <SidebarLink title="Melhores Samsung" href="/melhores-celulares-samsung" />
                <SidebarLink title="Melhores até R$ 2.500" href="/melhores-celulares-ate-2500" />
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

function HubCard({ title, href, description }: { title: string; href: string; description: string }) {
  return (
    <Link
      to={href}
      className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="flex h-full flex-col justify-between gap-5">
        <div>
          <p className="text-sm font-bold text-[#0F3F4A]">{title}</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
        </div>

        <div className="inline-flex items-center gap-2 text-sm font-bold text-[#8B5A2B]">
          Acessar <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

function CategoryLink({ title, href }: { title: string; href: string }) {
  return (
    <Link
      to={href}
      className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-[#0F3F4A]">{title}</p>

          <p className="mt-2 text-sm text-slate-600">
            Ver recomendações editoriais
          </p>
        </div>

        <div className="rounded-full bg-[#F7F2EB] p-3 text-[#8B5A2B] ring-1 ring-slate-200">
          <ChevronRight className="h-5 w-5 transition group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

function SidebarLink({ title, href }: { title: string; href: string }) {
  return (
    <Link
      to={href}
      className="flex items-center justify-between rounded-2xl bg-[#F7F2EB] px-4 py-3 text-slate-700 ring-1 ring-slate-200 transition hover:text-[#8B5A2B]"
    >
      <span>{title}</span>
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
