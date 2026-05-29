import type { ReactNode } from "react";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

type SiteLayoutProps = {
  children: ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F7F2EB] text-slate-900">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}




