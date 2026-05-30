import type { Product } from "./ProductCard";

export const FEATURED_PRODUCTS: Product[] = [
  {
    name: "Apple iPhone 15",
    image:
      "https://images.unsplash.com/photo-1592286927505-1def25115558?auto=format&fit=crop&w=900&q=80",
    rating: 4.8,
    reviews: 2143,
    summary: "Câmera excelente em qualquer luz e bateria que dura o dia inteiro com folga.",
    price: "R$ 5.499",
    description: "Câmera de 48 MP, chip A16 Bionic e tela Super Retina XDR de 6,1\".",
    badge: { variant: "cta", label: "Recomendado" },
  },
  {
    name: "Samsung Galaxy S24",
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=900&q=80",
    rating: 4.7,
    reviews: 1876,
    summary: "Tela AMOLED impressionante e desempenho fluido até nos jogos mais pesados.",
    price: "R$ 4.299",
    description: "Snapdragon 8 Gen 3, tela AMOLED 120 Hz e recursos de IA Galaxy.",
    badge: { variant: "teal", label: "Destaque" },
  },
  {
    name: "Xiaomi Redmi Note 13",
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
    rating: 4.6,
    reviews: 3421,
    summary: "Custo-benefício difícil de bater: bateria enorme e tela muito acima do preço.",
    price: "R$ 1.499",
    description: "Câmera de 108 MP, bateria de 5.000 mAh e tela AMOLED FHD+.",
    badge: { variant: "default", label: "Custo-benefício" },
  },
];

export const GUIDES = [
  {
    title: "Como escolher um celular em 2026",
    excerpt: "O que realmente importa em câmera, bateria, processador e tela.",
    tag: "Celulares",
  },
  {
    title: "Notebook para estudar ou trabalhar: o que observar",
    excerpt: "Processador, memória, SSD e tela: o equilíbrio certo para o seu uso.",
    tag: "Notebooks",
  },
  {
    title: "Smartwatch vale a pena?",
    excerpt: "Quando faz sentido investir e quais recursos fazem diferença no dia a dia.",
    tag: "Smartwatches",
  },
  {
    title: "Como identificar uma boa oferta no Mercado Livre",
    excerpt: "Histórico de preço, reputação do vendedor e selos que importam.",
    tag: "Ofertas",
  },
];

export type Comparison = {
  title: string;
  category: string;
  summary: string;
  left: { name: string; image: string; strengths: string[] };
  right: { name: string; image: string; strengths: string[] };
};

export const COMPARISONS: Comparison[] = [
  {
    title: "iPhone 15 vs Galaxy S24",
    category: "Top de linha",
    summary:
      "iOS ou Android no topo: qual entrega mais pelo preço cobrado no dia a dia, em câmera e em desempenho.",
    left: {
      name: "iPhone 15",
      image:
        "https://images.unsplash.com/photo-1592286927505-1def25115558?auto=format&fit=crop&w=600&q=80",
      strengths: ["Câmera consistente", "iOS otimizado", "Revenda alta"],
    },
    right: {
      name: "Galaxy S24",
      image:
        "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80",
      strengths: ["Tela 120 Hz", "Recursos de IA", "Mais armazenamento"],
    },
  },
  {
    title: "Redmi Note 13 vs Galaxy A55",
    category: "Intermediário",
    summary:
      "A briga mais quente do intermediário em 2026: custo-benefício extremo contra acabamento e marca forte.",
    left: {
      name: "Redmi Note 13",
      image:
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
      strengths: ["Preço agressivo", "Bateria 5.000 mAh", "Tela AMOLED"],
    },
    right: {
      name: "Galaxy A55",
      image:
        "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=600&q=80",
      strengths: ["Acabamento premium", "Atualizações longas", "Câmera estável"],
    },
  },
  {
    title: "MacBook Air vs Notebook Windows",
    category: "Notebooks",
    summary:
      "Eficiência do chip M e bateria de sobra contra a flexibilidade e a variedade de preços do ecossistema Windows.",
    left: {
      name: "MacBook Air",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
      strengths: ["Bateria all-day", "Silencioso e leve", "macOS fluido"],
    },
    right: {
      name: "Notebook Windows",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80",
      strengths: ["Mais opções de preço", "Compatibilidade ampla", "Upgrades fáceis"],
    },
  },
];


