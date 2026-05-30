import { Link } from "@tanstack/react-router";
import { Instagram, ShieldCheck, Twitter, Youtube } from "lucide-react";

const LINKS_EDITORIAIS = [
  { to: "/celulares", label: "Celulares" },
  { to: "/comparativos", label: "Comparativos" },
  { to: "/guias-de-compra", label: "Guias de Compra" },
  { to: "/ofertas", label: "Ofertas" },
];

const GUIAS = [
  { to: "/melhores-celulares-ate-2000", label: "Melhores celulares até R$ 2.000" },
  { to: "/melhores-celulares-ate-2500", label: "Melhores celulares até R$ 2.500" },
  { to: "/melhores-celulares-samsung", label: "Melhores celulares Samsung" },
];

const REVIEWS = [
  { to: "/review/galaxy-a35", label: "Review Galaxy A35" },
  { to: "/review/galaxy-a55", label: "Review Galaxy A55" },
  { to: "/review/redmi-note-13-pro", label: "Review Redmi Note 13 Pro" },
  { to: "/review/galaxy-s24", label: "Review Galaxy S24" },
];

const COMPARATIVOS = [
  { to: "/comparativo-galaxy-a55-vs-galaxy-a35", label: "Galaxy A55 vs Galaxy A35" },
  {
    to: "/comparativo/galaxy-a55-vs-redmi-note-13-pro",
    label: "Galaxy A55 vs Redmi Note 13 Pro",
  },
];

const INSTITUCIONAL = [
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
  { to: "/transparencia", label: "Transparência" },
  { to: "/politica-de-privacidade", label: "Política de Privacidade" },
  { to: "/termos-de-uso", label: "Termos de Uso" },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-[#0B2D35] text-white">
      <div className="container-tec py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          <div className="max-w-md">
            <Link to="/" className="flex items-center gap-3 font-heading font-bold">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-sm font-extrabold text-primary">
                TE
              </span>

              <span className="leading-none">
                <span className="block text-lg tracking-tight">
                  Tech <span className="text-[#8B5A2B]">Escolha Certa</span>
                </span>
                <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Guia editorial de tecnologia
                </span>
              </span>
            </Link>

            <p className="mt-5 text-sm leading-7 text-slate-300">
              Portal independente de análises, comparativos e recomendações de tecnologia.
              Ajudamos você a comprar celulares, notebooks, smartwatches e acessórios com
              mais clareza, contexto e segurança.
            </p>

            <div className="mt-6 rounded-2xl bg-white/8 p-4 ring-1 ring-white/10">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#8B5A2B]" />

                <p className="text-xs leading-6 text-slate-300">
                  Trabalhamos com curadoria editorial e links afiliados. Podemos receber
                  comissão por compras realizadas através dos nossos links, sem custo
                  adicional para você.
                </p>
              </div>
            </div>

            <div className="mt-6 flex gap-3 text-slate-300">
              <a
                href="#"
                aria-label="Instagram"
                className="rounded-xl bg-white/8 p-2 transition hover:bg-white/12 hover:text-[#8B5A2B]"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="rounded-xl bg-white/8 p-2 transition hover:bg-white/12 hover:text-[#8B5A2B]"
              >
                <Youtube className="h-5 w-5" />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="rounded-xl bg-white/8 p-2 transition hover:bg-white/12 hover:text-[#8B5A2B]"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FooterColumn title="Editorial" links={LINKS_EDITORIAIS} />
            <FooterColumn title="Guias" links={GUIAS} />
            <FooterColumn title="Reviews" links={REVIEWS} />
            <FooterColumn title="Comparativos" links={COMPARATIVOS} />
          </div>
        </div>

        <div className="mt-12 grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#8B5A2B]">
              Institucional
            </h3>

            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-300">
              {INSTITUCIONAL.map((item) => (
                <Link key={item.to} to={item.to} className="transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white/8 p-5 ring-1 ring-white/10">
            <h3 className="text-sm font-bold text-white">
              Compromisso editorial
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Nossas recomendações são organizadas por perfil de uso, custo-benefício e
              clareza para o consumidor. O objetivo é facilitar decisões de compra, não
              parecer uma vitrine genérica de produtos.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/10">
        <div className="container-tec flex flex-col items-start justify-between gap-3 py-5 text-xs text-slate-400 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Tech Escolha Certa. Todos os direitos reservados.</p>

          <p className="max-w-2xl md:text-right">
            Conteúdo editorial com possíveis links afiliados. Preços e disponibilidade
            podem mudar sem aviso prévio.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { to: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#8B5A2B]">
        {title}
      </h3>

      <ul className="mt-4 space-y-3 text-sm text-slate-300">
        {links.map((item) => (
          <li key={item.to}>
            <Link to={item.to} className="transition hover:text-white">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}







