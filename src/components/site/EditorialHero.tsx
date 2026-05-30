import type { ReactNode } from "react";

type EditorialHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
  aside?: ReactNode;
};

export function EditorialHero({
  eyebrow,
  title,
  description,
  children,
  aside,
}: EditorialHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-[#0B2D35] via-[#114B59] to-[#071E25] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_360px] lg:px-8">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#8B5A2B]">
            {eyebrow}
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-[#F8FAFC] md:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-200">
            {description}
          </p>

          {children && <div className="mt-8">{children}</div>}
        </div>

        {aside && (
          <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur">
            {aside}
          </div>
        )}
      </div>
    </section>
  );
}






