"use client";

import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  Check,
  CircleAlert,
  Gauge,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from "lucide-react";

import { AffiliateRedirectNotice } from "@/components/site/AffiliateRedirectNotice";
import {
  GALAXY_A35_AFFILIATE_URL,
  GALAXY_A55_AFFILIATE_URL,
  GALAXY_S24_AFFILIATE_URL,
  IPHONE_15_AFFILIATE_URL,
  POCO_X6_PRO_AFFILIATE_URL,
  POCO_X7_PRO_AFFILIATE_URL,
  REDMI_NOTE_13_PRO_AFFILIATE_URL,
  REDMI_NOTE_14_PRO_PLUS_AFFILIATE_URL,
} from "@/lib/affiliate-links";
import { trackAffiliateClick, trackFinderChoice } from "@/lib/analytics";

type Budget = "ate-2000" | "ate-3000" | "premium";
type Priority = "equilibrio" | "desempenho" | "camera";

type Recommendation = {
  productName: string;
  shortName: string;
  badge: string;
  verdict: string;
  strengths: [string, string, string];
  caution: string;
  image: string;
  affiliateHref: string;
  reviewHref: string;
  compareHref: string;
  compareLabel: string;
};

const budgets: Array<{ value: Budget; label: string; detail: string }> = [
  { value: "ate-2000", label: "Até R$ 2.000", detail: "Quero economizar" },
  { value: "ate-3000", label: "Até R$ 3.000", detail: "Quero subir de nível" },
  { value: "premium", label: "Premium", detail: "Quero a melhor experiência" },
];

const priorities: Array<{
  value: Priority;
  label: string;
  detail: string;
  icon: typeof ShieldCheck;
}> = [
  {
    value: "equilibrio",
    label: "Equilíbrio e segurança",
    detail: "Boa experiência em tudo",
    icon: ShieldCheck,
  },
  {
    value: "desempenho",
    label: "Jogos e velocidade",
    detail: "Mais potência e fluidez",
    icon: Gauge,
  },
  {
    value: "camera",
    label: "Câmera e acabamento",
    detail: "Fotos e experiência premium",
    icon: Camera,
  },
];

const recommendations: Record<`${Budget}:${Priority}`, Recommendation> = {
  "ate-2000:equilibrio": {
    productName: "Galaxy A35 5G",
    shortName: "Galaxy A35",
    badge: "Escolha segura até R$ 2.000",
    verdict:
      "É a indicação mais equilibrada para quem quer boa tela, bateria confiável, resistência e uma experiência Samsung previsível.",
    strengths: ["Tela Super AMOLED", "Proteção IP67", "Software confiável"],
    caution: "Se jogos pesados forem prioridade, compare com o Poco X6 Pro.",
    image: "/images/products/galaxy-a35-optimized.webp",
    affiliateHref: GALAXY_A35_AFFILIATE_URL,
    reviewHref: "/review/galaxy-a35",
    compareHref: "/comparativo-galaxy-a55-vs-galaxy-a35",
    compareLabel: "Comparar A35 e A55",
  },
  "ate-2000:desempenho": {
    productName: "Poco X6 Pro",
    shortName: "Poco X6 Pro",
    badge: "Mais desempenho até R$ 2.000",
    verdict:
      "Faz mais sentido para quem prioriza jogos, velocidade e tela fluida, especialmente quando aparece bem abaixo do Poco X7 Pro.",
    strengths: ["Processador potente", "Tela AMOLED 120 Hz", "Carregamento rápido"],
    caution: "O conjunto de câmeras e o acabamento não são os principais motivos para comprá-lo.",
    image: "/images/products/poco-x6-pro-optimized.webp",
    affiliateHref: POCO_X6_PRO_AFFILIATE_URL,
    reviewHref: "/review/poco-x6-pro",
    compareHref: "/comparativo/poco-x6-pro-vs-poco-x7-pro",
    compareLabel: "Comparar X6 Pro e X7 Pro",
  },
  "ate-2000:camera": {
    productName: "Redmi Note 13 Pro 5G",
    shortName: "Redmi Note 13 Pro",
    badge: "Mais ficha técnica pelo preço",
    verdict:
      "É uma escolha forte para quem quer tela de alta qualidade, câmera principal de 200 MP e carregamento rápido sem entrar na faixa premium.",
    strengths: ["Câmera de 200 MP", "Tela AMOLED", "Carga rápida de 67 W"],
    caution: "A experiência de software pode exigir mais ajustes do que em um Galaxy.",
    image: "/images/products/redmi-note-13-pro-optimized.webp",
    affiliateHref: REDMI_NOTE_13_PRO_AFFILIATE_URL,
    reviewHref: "/review/redmi-note-13-pro",
    compareHref: "/comparativo/galaxy-a35-vs-redmi-note-13-pro",
    compareLabel: "Comparar Redmi e Galaxy A35",
  },
  "ate-3000:equilibrio": {
    productName: "Galaxy A55 5G",
    shortName: "Galaxy A55",
    badge: "Melhor equilíbrio até R$ 3.000",
    verdict:
      "É a compra mais conservadora para quem valoriza acabamento, câmera consistente, software refinado e uso tranquilo por vários anos.",
    strengths: ["Construção premium", "Boa câmera", "Experiência Samsung"],
    caution: "Quem prioriza desempenho bruto pode encontrar mais potência no Poco X7 Pro.",
    image: "/images/products/galaxy-a55-optimized.webp",
    affiliateHref: GALAXY_A55_AFFILIATE_URL,
    reviewHref: "/review/galaxy-a55",
    compareHref: "/comparativo/galaxy-a55-vs-redmi-note-13-pro",
    compareLabel: "Comparar A55 e Redmi",
  },
  "ate-3000:desempenho": {
    productName: "Poco X7 Pro",
    shortName: "Poco X7 Pro",
    badge: "Performance e bateria",
    verdict:
      "É a recomendação para quem quer muita velocidade, jogos exigentes e bateria forte sem pagar o preço de um flagship tradicional.",
    strengths: ["Dimensity 8400-Ultra", "Bateria grande", "Tela AMOLED 120 Hz"],
    caution: "Câmera e acabamento ficam atrás de opções mais equilibradas como o Galaxy A55.",
    image: "/images/products/poco-x7-pro-optimized.webp",
    affiliateHref: POCO_X7_PRO_AFFILIATE_URL,
    reviewHref: "/review/poco-x7-pro",
    compareHref: "/comparativo/poco-x6-pro-vs-poco-x7-pro",
    compareLabel: "Comparar X7 Pro e X6 Pro",
  },
  "ate-3000:camera": {
    productName: "Redmi Note 14 Pro+ 5G",
    shortName: "Redmi Note 14 Pro+",
    badge: "Redmi mais completo",
    verdict:
      "Entrega câmera principal de 200 MP, proteção IP68, tela forte e carregamento muito rápido para quem quer uma ficha técnica completa.",
    strengths: ["Câmera de 200 MP", "Proteção IP68", "Carregamento de 120 W"],
    caution: "Confirme se o preço atual cabe na faixa; promoções e estoque mudam rapidamente.",
    image: "/images/products/redmi-note-14-pro-plus-optimized.webp",
    affiliateHref: REDMI_NOTE_14_PRO_PLUS_AFFILIATE_URL,
    reviewHref: "/review/redmi-note-14-pro-plus",
    compareHref: "/comparativo/redmi-note-13-pro-vs-redmi-note-14-pro-plus",
    compareLabel: "Comparar os dois Redmi",
  },
  "premium:equilibrio": {
    productName: "Galaxy S24",
    shortName: "Galaxy S24",
    badge: "Premium compacto e completo",
    verdict:
      "É a escolha mais equilibrada para quem quer desempenho de topo, boas câmeras, acabamento premium e um aparelho compacto.",
    strengths: ["Câmeras consistentes", "Desempenho premium", "Suporte prolongado"],
    caution:
      "A bateria é adequada, mas o tamanho compacto limita a capacidade frente a aparelhos maiores.",
    image: "/images/products/galaxy-s24-optimized.webp",
    affiliateHref: GALAXY_S24_AFFILIATE_URL,
    reviewHref: "/review/galaxy-s24",
    compareHref: "/comparativo/iphone-15-vs-galaxy-s24",
    compareLabel: "Comparar Galaxy S24 e iPhone 15",
  },
  "premium:desempenho": {
    productName: "Galaxy S24",
    shortName: "Galaxy S24",
    badge: "Flagship Android equilibrado",
    verdict:
      "Combina desempenho de alto nível com câmeras, acabamento e software mais completos do que celulares focados apenas em potência.",
    strengths: ["Desempenho de topo", "Galaxy AI", "Tela premium"],
    caution:
      "Se a prioridade for somente jogos e autonomia, o Poco X7 Pro custa menos e merece comparação.",
    image: "/images/products/galaxy-s24-optimized.webp",
    affiliateHref: GALAXY_S24_AFFILIATE_URL,
    reviewHref: "/review/galaxy-s24",
    compareHref: "/comparativo/iphone-15-vs-galaxy-s24",
    compareLabel: "Comparar Galaxy S24 e iPhone 15",
  },
  "premium:camera": {
    productName: "iPhone 15",
    shortName: "iPhone 15",
    badge: "Câmera e ecossistema Apple",
    verdict:
      "Faz sentido para quem valoriza vídeo, câmera consistente, acabamento e integração com outros produtos Apple.",
    strengths: ["Vídeos excelentes", "Desempenho forte", "Ecossistema Apple"],
    caution: "Tela de 60 Hz e carregamento mais lento podem pesar contra o Galaxy S24.",
    image: "/images/products/iphone-15-optimized.webp",
    affiliateHref: IPHONE_15_AFFILIATE_URL,
    reviewHref: "/review/iphone-15",
    compareHref: "/comparativo/iphone-15-vs-galaxy-s24",
    compareLabel: "Comparar iPhone 15 e Galaxy S24",
  },
};

type PhoneDecisionFinderProps = {
  pageType?: "home" | "celulares" | "ofertas";
};

export function PhoneDecisionFinder({ pageType = "home" }: PhoneDecisionFinderProps) {
  const [budget, setBudget] = useState<Budget>("ate-2000");
  const [priority, setPriority] = useState<Priority>("equilibrio");

  const recommendation = useMemo(
    () => recommendations[`${budget}:${priority}`],
    [budget, priority],
  );

  const changeBudget = (value: Budget) => {
    setBudget(value);
    trackFinderChoice({ step: "orcamento", choice: value });
  };

  const changePriority = (value: Priority) => {
    setPriority(value);
    trackFinderChoice({ step: "prioridade", choice: value });
  };

  return (
    <section id="escolha-rapida" className="scroll-mt-32 bg-[#0F3F4A] py-12 text-white md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#D7A77E] ring-1 ring-white/15">
            <Sparkles className="h-3.5 w-3.5" />
            Escolha guiada
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-white md:text-4xl">
            Encontre uma boa escolha em menos de 30 segundos
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-200 md:text-lg">
            Selecione quanto pretende gastar e o que mais importa. Nós mostramos a indicação mais
            coerente, o ponto de atenção e a comparação que vale fazer antes da compra.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="rounded-3xl bg-white p-6 text-slate-900 shadow-2xl md:p-8">
            <fieldset>
              <legend className="flex items-center gap-3 text-lg font-extrabold text-[#0F3F4A]">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#8B5A2B] text-sm text-white">
                  1
                </span>
                Qual é o seu orçamento?
              </legend>

              <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {budgets.map((option) => {
                  const selected = budget === option.value;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => changeBudget(option.value)}
                      className={`rounded-2xl border p-4 text-left transition ${
                        selected
                          ? "border-[#8B5A2B] bg-[#FFF8F1] ring-2 ring-[#8B5A2B]/20"
                          : "border-slate-200 bg-white hover:border-[#8B5A2B]/50 hover:bg-[#F7F2EB]"
                      }`}
                    >
                      <span className="flex items-center justify-between gap-2">
                        <WalletCards className="h-4 w-4 text-[#8B5A2B]" />
                        {selected && <Check className="h-4 w-4 text-[#8B5A2B]" />}
                      </span>
                      <span className="mt-3 block text-sm font-bold text-[#0F3F4A]">
                        {option.label}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-slate-500">
                        {option.detail}
                      </span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <fieldset className="mt-7 border-t border-slate-200 pt-7">
              <legend className="flex items-center gap-3 text-lg font-extrabold text-[#0F3F4A]">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#8B5A2B] text-sm text-white">
                  2
                </span>
                O que mais importa?
              </legend>

              <div className="mt-4 grid gap-3">
                {priorities.map((option) => {
                  const selected = priority === option.value;
                  const Icon = option.icon;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => changePriority(option.value)}
                      className={`flex items-center gap-4 rounded-2xl border p-4 text-left transition ${
                        selected
                          ? "border-[#8B5A2B] bg-[#FFF8F1] ring-2 ring-[#8B5A2B]/20"
                          : "border-slate-200 bg-white hover:border-[#8B5A2B]/50 hover:bg-[#F7F2EB]"
                      }`}
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#F7F2EB] text-[#8B5A2B]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-bold text-[#0F3F4A]">
                          {option.label}
                        </span>
                        <span className="mt-1 block text-xs text-slate-500">{option.detail}</span>
                      </span>
                      {selected && <Check className="h-5 w-5 shrink-0 text-[#8B5A2B]" />}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <p className="mt-6 flex items-start gap-2 text-xs leading-5 text-slate-500">
              <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" />
              Preços mudam. A faixa escolhida orienta a recomendação, mas o valor atual deve ser
              confirmado antes da compra.
            </p>
          </div>

          <article
            key={`${budget}:${priority}`}
            aria-live="polite"
            className="overflow-hidden rounded-3xl bg-[#F7F2EB] text-slate-900 shadow-2xl ring-1 ring-white/15"
          >
            <div className="grid h-full md:grid-cols-[220px_1fr]">
              <div className="flex min-h-64 items-center justify-center bg-white p-6 md:min-h-full">
                <img
                  src={recommendation.image}
                  alt={recommendation.productName}
                  className="h-56 w-full object-contain md:h-80"
                />
              </div>

              <div className="flex flex-col p-6 md:p-8">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#0F3F4A] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#D7A77E]" />
                  {recommendation.badge}
                </div>

                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#8B5A2B]">
                  Nossa indicação para você
                </p>
                <h3 className="mt-2 text-3xl font-extrabold text-[#0F3F4A]">
                  {recommendation.productName}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-700">{recommendation.verdict}</p>

                <ul className="mt-5 grid gap-2 sm:grid-cols-3 md:grid-cols-1 xl:grid-cols-3">
                  {recommendation.strengths.map((strength) => (
                    <li
                      key={strength}
                      className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-semibold text-[#0F3F4A] ring-1 ring-slate-200"
                    >
                      <Check className="h-3.5 w-3.5 shrink-0 text-[#8B5A2B]" />
                      {strength}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                  <p className="flex items-start gap-2 text-xs leading-5 text-amber-950">
                    <CircleAlert className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
                    <span>
                      <strong>Ponto de atenção:</strong> {recommendation.caution}
                    </span>
                  </p>
                </div>

                <div className="mt-auto grid gap-3 pt-6 sm:grid-cols-2">
                  <a
                    href={recommendation.affiliateHref}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    onClick={() =>
                      trackAffiliateClick({
                        productName: recommendation.shortName,
                        pageType,
                        ctaPlacement: "decision_finder",
                      })
                    }
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#8B5A2B] px-5 py-3 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:brightness-105"
                  >
                    Ver preço atual <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <Link
                    to={recommendation.reviewHref}
                    onClick={() =>
                      trackFinderChoice({
                        step: "resultado",
                        choice: "review",
                        recommendation: recommendation.shortName,
                      })
                    }
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-center text-sm font-bold text-[#0F3F4A] transition hover:border-[#8B5A2B] hover:text-[#8B5A2B]"
                  >
                    Ler análise <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <Link
                  to={recommendation.compareHref}
                  onClick={() =>
                    trackFinderChoice({
                      step: "resultado",
                      choice: "comparativo",
                      recommendation: recommendation.shortName,
                    })
                  }
                  className="mt-4 text-center text-sm font-semibold text-[#0F3F4A] underline decoration-[#8B5A2B]/40 underline-offset-4 transition hover:text-[#8B5A2B]"
                >
                  {recommendation.compareLabel}
                </Link>

                <AffiliateRedirectNotice className="mt-5 border-t border-slate-200 pt-4" />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
