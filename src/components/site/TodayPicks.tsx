import { Link } from "@tanstack/react-router";
import { HeroPickCTA } from "@/components/site/HeroPickCTA";
import { formatBRL, goodDealFor } from "@/lib/fair-prices";

const PICKS = [
  {
    id: "galaxy-a36-5g",
    label: "Melhor até R$ 1.500",
    name: "Galaxy A36 5G",
    why: "Tela AMOLED de 120 Hz, IP67 e seis anos de atualizações.",
    reviewPath: "/review/galaxy-a36-5g",
  },
  {
    id: "moto-g86-5g",
    label: "Melhor até R$ 2.000",
    name: "Moto G86 5G",
    why: "Melhor tela da faixa, câmera com estabilização óptica e IP69.",
    reviewPath: "/review/moto-g86-5g",
  },
  {
    id: "galaxy-s25-fe",
    label: "Melhor acima de R$ 2.000",
    name: "Galaxy S25 FE",
    why: "Linha S com teleobjetiva, IP68 e sete anos de atualizações.",
    reviewPath: "/review/galaxy-s25-fe",
  },
];

/** "Escolhas de hoje" na home: a resposta direta, com preço-alvo e botões das lojas. */
export function TodayPicks() {
  return (
    <section aria-labelledby="escolhas-de-hoje" className="container-tec pt-8">
      <h2 id="escolhas-de-hoje" className="text-2xl font-extrabold text-[#0F3F4A] md:text-3xl">
        Nossas escolhas de hoje
      </h2>
      <p className="mt-2 text-sm text-slate-600">
        Uma recomendação por faixa de preço, com até quanto vale pagar. Atualizado em outubro de 2026.
      </p>
      <div className="mt-5 grid gap-5 lg:grid-cols-3">
        {PICKS.map((p) => (
          <article key={p.id} className="flex flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B5A2B]">{p.label}</p>
            <h3 className="mt-2 text-xl font-extrabold text-[#0F3F4A]">{p.name}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">{p.why}</p>
            <p className="mt-3 text-sm text-slate-700">
              Compre se estiver até <strong className="text-[#8B5A2B]">{formatBRL(goodDealFor(p.id)!)}</strong>.
            </p>
            <div className="mt-auto">
              <HeroPickCTA productId={p.id} pageType="home" />
              <Link to={p.reviewPath} className="mt-3 inline-block text-sm font-semibold text-[#0F3F4A] underline">
                Ler o review
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
