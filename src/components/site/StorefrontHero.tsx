import { ArrowRight, Smartphone } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function StorefrontHero() {
  return (
    <section className="storefront-hero">
      <div className="container-tec py-7 md:py-9">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#BEE7EA]">
          Tecnologia para o seu dia a dia
        </p>
        <div className="mt-3 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="max-w-3xl text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              Seu próximo celular começa aqui.
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-200 md:text-base">
              Compare os aparelhos. Escolha seu perfil. Confira preço e versão na Amazon e no
              Mercado Livre.
            </p>
          </div>
          <a
            href="#selecao-editorial"
            className="inline-flex min-h-12 w-fit shrink-0 items-center gap-3 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#103A49]"
          >
            Explorar celulares <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
        <nav
          className="mt-6 flex flex-wrap gap-2"
          aria-label="Explorar celulares por marca e perfil"
        >
          <Link to="/melhores-celulares-samsung" className="storefront-chip">
            <Smartphone className="h-4 w-4" aria-hidden /> Samsung
          </Link>
          <Link to="/melhores-celulares-xiaomi" className="storefront-chip">
            Xiaomi e Redmi
          </Link>
          <Link to="/celulares" className="storefront-chip">
            Todas as marcas
          </Link>
          <a href="#escolha-rapida" className="storefront-chip">
            Encontrar meu perfil
          </a>
        </nav>
      </div>
    </section>
  );
}
