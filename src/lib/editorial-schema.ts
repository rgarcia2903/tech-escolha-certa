import { getProduct } from "./product-catalog";
import { EDITORIAL_REVIEW_DATE } from "./editorial-policy";
export function documentaryArticle(productId: string, headline: string, description: string) {
  const product = getProduct(productId)!;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    author: {
      "@type": "Organization",
      name: "Tech Escolha Certa",
      url: "https://techescolhacerta.com.br/como-avaliamos",
    },
    publisher: { "@type": "Organization", name: "Tech Escolha Certa" },
    dateModified: EDITORIAL_REVIEW_DATE,
    mainEntityOfPage: `https://techescolhacerta.com.br${product.reviewPath}`,
    ...(product.image ? { image: `https://techescolhacerta.com.br${product.image}` } : {}),
    about: { "@type": "Product", name: product.name },
  };
}
