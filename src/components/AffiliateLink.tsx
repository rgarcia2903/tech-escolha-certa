import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackAffiliateClick } from "@/lib/analytics";

type AffiliateLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  productName: string;
  pageType: "review" | "comparativo" | "guia" | "ofertas";
  destination?: string;
  children: ReactNode;
};

export function AffiliateLink({
  productName,
  pageType,
  destination = "mercado_livre",
  children,
  onClick,
  ...props
}: AffiliateLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        trackAffiliateClick({
          productName,
          href: props.href,
          pageType,
          destination,
        });

        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
