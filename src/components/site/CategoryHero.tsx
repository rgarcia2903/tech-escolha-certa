import type { ReactNode } from "react";

type CategoryHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  hideImageOnMobile?: boolean;
  children?: ReactNode;
  aside?: ReactNode;
};

export function CategoryHero({
  eyebrow,
  title,
  description,
  image,
  hideImageOnMobile = false,
  children,
  aside,
}: CategoryHeroProps) {
  void image;
  void hideImageOnMobile;
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-[#071E25] text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B2D35] via-[#114B59] to-[#071E25]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(215,167,126,0.16),transparent_55%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 py-12 md:py-16 lg:grid-cols-[1fr_380px] lg:px-8">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#D7A77E]">
            {eyebrow}
          </p>

          <h1 className="max-w-5xl text-4xl font-extrabold tracking-tight text-[#F8FAFC] md:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">{description}</p>

          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>

        {aside && (
          <div className="rounded-3xl bg-white/10 p-6 shadow-2xl ring-1 ring-white/20 backdrop-blur-md">
            {aside}
          </div>
        )}
      </div>
    </section>
  );
}
