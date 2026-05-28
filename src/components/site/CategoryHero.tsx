import type { ReactNode } from "react";

type CategoryHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  children?: ReactNode;
  aside?: ReactNode;
};

export function CategoryHero({
  eyebrow,
  title,
  description,
  image,
  children,
  aside,
}: CategoryHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-[#071E25] text-white">
      {image ? (
        <>
          <img
            src={image}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071E25]/96 via-[#071E25]/88 to-[#071E25]/72" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(185,119,75,0.25),transparent_42%)]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#071E25]/90 to-transparent" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B2D35] via-[#114B59] to-[#071E25]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />
        </>
      )}

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_380px] lg:px-8">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#D9A066]">
            {eyebrow}
          </p>

          <h1 className="max-w-5xl text-4xl font-extrabold tracking-tight text-[#F8FAFC] md:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            {description}
          </p>

          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>

        {aside && (
          <aside className="rounded-3xl bg-white/10 p-6 shadow-2xl ring-1 ring-white/20 backdrop-blur-md">
            {aside}
          </aside>
        )}
      </div>
    </section>
  );
}


