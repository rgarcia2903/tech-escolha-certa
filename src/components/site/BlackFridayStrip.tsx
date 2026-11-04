import { Link } from "@tanstack/react-router";
import { BLACK_FRIDAY, daysUntilBlackFriday } from "@/lib/black-friday";

/** Faixa para o guia de Black Friday. Aparece até o fim de semana da Black Friday e some depois. */
export function BlackFridayStrip() {
  const days = daysUntilBlackFriday();
  if (days < -3 || days > 45) return null;
  return (
    <div className="mx-auto max-w-5xl px-5 pt-6 sm:px-8">
      <p className="rounded-2xl bg-[#0F3F4A] px-5 py-3 text-sm text-white">
        <strong>Black Friday em {BLACK_FRIDAY.date}.</strong>{" "}
        <Link to="/black-friday-celulares" className="font-semibold text-[#F2C38B] underline">
          Veja até quanto pagar em cada celular
        </Link>{" "}
        antes de cair em desconto falso.
      </p>
    </div>
  );
}
