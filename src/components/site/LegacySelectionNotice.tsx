import { PRICE_UNCONFIRMED_NOTICE } from "@/lib/editorial-policy";
export function LegacySelectionNotice() {
  return (
    <aside className="container-tec py-5" aria-label="Contexto das referências anteriores">
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
        <strong>Referências anteriores preservadas.</strong> As análises e modelos abaixo ajudam na
        comparação; não representam estoque, preço atual nem um ranking de ofertas verificadas.{" "}
        {PRICE_UNCONFIRMED_NOTICE} A seleção de candidatos revisada aparece acima e segue os mesmos
        critérios da home e do seletor.
      </div>
    </aside>
  );
}
