import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  BUDGETS,
  getFinderCandidates,
  PRICE_UNCONFIRMED_NOTICE,
  type BudgetId,
  type Profile,
} from "@/lib/editorial-policy";
import { getOffers } from "@/lib/product-catalog";
import { trackFinderChoice } from "@/lib/analytics";
import { VisualProductCard } from "./VisualProductCard";
import { MobilePurchaseBar } from "./MobilePurchaseBar";

const STORAGE_KEY = "tech-escolha-certa:phone-finder";
const PROFILES: { id: Profile; label: string }[] = [
  { id: "equilibrio", label: "Uso cotidiano e equilíbrio" },
  { id: "desempenho", label: "Jogos e desempenho" },
  { id: "camera", label: "Câmeras e vídeo" },
];
export function PhoneDecisionFinder({
  pageType = "home",
  showOfferMobileBar = false,
}: {
  pageType?: "home" | "celulares" | "ofertas";
  showOfferMobileBar?: boolean;
}) {
  const [budget, setBudget] = useState<BudgetId>("ate-1500");
  const [profile, setProfile] = useState<Profile>("equilibrio");
  const [interacted, setInteracted] = useState(false);
  useEffect(() => {
    try {
      const stored = JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? "null");
      if (
        stored &&
        BUDGETS.some((b) => b.id === stored.budget) &&
        PROFILES.some((p) => p.id === (stored.profile ?? stored.priority))
      ) {
        setBudget(stored.budget);
        setProfile(stored.profile ?? stored.priority);
      }
    } catch {
      /* O seletor funciona sem armazenamento. */
    }
  }, []);
  function choose(nextBudget: BudgetId, nextProfile: Profile, step: string, choice: string) {
    setBudget(nextBudget);
    setProfile(nextProfile);
    setInteracted(true);
    try {
      sessionStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ budget: nextBudget, profile: nextProfile }),
      );
    } catch {
      /* Sem persistência quando bloqueada. */
    }
    trackFinderChoice({ step, choice, recommendation: "candidates_price_unconfirmed" });
  }
  const products = getFinderCandidates(budget, profile);
  const firstWithOffer = products.find(
    (product) => product.editorialStatus !== "evaluate" && getOffers(product.id).length,
  );
  const renderCandidate = (product: (typeof products)[number]) => (
    <VisualProductCard
      key={product.id}
      product={product}
      pageType={pageType}
      placement="decision_finder"
      showReviewLink={false}
    >
      {product.reviewPath && (
        <Link
          to={product.reviewPath}
          onClick={() =>
            trackFinderChoice({
              step: "resultado",
              choice: "review",
              recommendation: product.id,
            })
          }
          className="mt-4 inline-block text-sm font-semibold underline"
        >
          Ler análise de {product.name}
        </Link>
      )}
    </VisualProductCard>
  );
  return (
    <section id="escolha-rapida" className="scroll-mt-32 bg-[#0F3F4A] py-12 text-white md:py-16">
      <div className="container-tec">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#D7A77E]">
          Escolha guiada
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white">Compare celulares pelo seu perfil</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-200">
          Escolha um orçamento de referência e a prioridade. Apresentamos candidatos para pesquisar;
          sem preço verificado, nenhum deles é garantido dentro do teto selecionado.
        </p>
        <div className="mt-7 grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="rounded-3xl bg-white p-6 text-slate-900">
            <fieldset>
              <legend className="font-bold">1. Orçamento de referência</legend>
              <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                {BUDGETS.map((b) => (
                  <button
                    type="button"
                    key={b.id}
                    aria-pressed={budget === b.id}
                    onClick={() => choose(b.id, profile, "orcamento", b.id)}
                    className={`min-h-11 rounded-xl border px-4 py-3 text-left text-sm ${budget === b.id ? "border-[#8B5A2B] bg-[#FFF8F1] font-bold" : "border-slate-200"}`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </fieldset>
            <fieldset className="mt-6">
              <legend className="font-bold">2. O que mais importa?</legend>
              <div className="mt-3 grid gap-2">
                {PROFILES.map((p) => (
                  <button
                    type="button"
                    key={p.id}
                    aria-pressed={profile === p.id}
                    onClick={() => choose(budget, p.id, "prioridade", p.id)}
                    className={`min-h-11 rounded-xl border px-4 py-3 text-left text-sm ${profile === p.id ? "border-[#8B5A2B] bg-[#FFF8F1] font-bold" : "border-slate-200"}`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </fieldset>
            <p className="mt-5 text-xs leading-5 text-slate-600">{PRICE_UNCONFIRMED_NOTICE}</p>
          </div>
          <div
            aria-live="polite"
            aria-atomic="false"
            className="grid content-start items-start gap-4 md:grid-cols-2"
          >
            {products.slice(0, 2).map(renderCandidate)}
            {products.length > 2 && (
              <details
                key={`${budget}:${profile}`}
                className="rounded-2xl bg-white p-4 text-slate-900 md:col-span-2"
              >
                <summary className="cursor-pointer text-sm font-bold text-[#0F3F4A]">
                  Comparar outras {products.length - 2} opções deste perfil
                </summary>
                <div className="mt-4 grid items-start gap-4 md:grid-cols-2">
                  {products.slice(2).map(renderCandidate)}
                </div>
              </details>
            )}
          </div>
        </div>
      </div>
      {showOfferMobileBar && interacted && firstWithOffer && (
        <MobilePurchaseBar
          options={[
            { productName: firstWithOffer.name, href: getOffers(firstWithOffer.id)[0].url },
          ]}
          pageType={pageType}
          title={`Comparar: ${firstWithOffer.name}`}
          reserveSpace
        />
      )}
    </section>
  );
}
