import type { ReactNode } from "react";

export function InfoLayout({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="hero-gradient border-b border-border">
        <div className="container-tec py-16 md:py-20 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cta">{eyebrow}</span>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">{title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{intro}</p>
        </div>
      </section>
      <section className="container-tec py-14 md:py-20">
        <div className="max-w-3xl space-y-5 text-muted-foreground leading-relaxed">
          {children}
        </div>
      </section>
    </>
  );
}







