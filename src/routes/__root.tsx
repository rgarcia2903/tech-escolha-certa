import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>

      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <RootDocument>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen bg-[#F7F2EB] text-slate-900">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </QueryClientProvider>
    </RootDocument>
  );
}

function NotFoundComponent() {
  return (
    <RootDocument>
      <div className="min-h-screen bg-[#F7F2EB] text-slate-900">
        <Header />

        <main className="flex min-h-[70vh] items-center justify-center px-4">
          <div className="max-w-md text-center">
            <h1 className="text-7xl font-bold text-[#0F3F4A]">404</h1>

            <h2 className="mt-4 text-xl font-semibold text-[#0F3F4A]">
              Página não encontrada
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              A página que você está procurando não existe ou foi movida.
            </p>

            <div className="mt-6">
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-xl bg-[#0F3F4A] px-5 py-3 text-sm font-bold text-white transition hover:brightness-95"
              >
                Voltar para a home
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </RootDocument>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <RootDocument>
      <div className="min-h-screen bg-[#F7F2EB] text-slate-900">
        <Header />

        <main className="flex min-h-[70vh] items-center justify-center px-4">
          <div className="max-w-md text-center">
            <h1 className="text-xl font-semibold tracking-tight text-[#0F3F4A]">
              Esta página não carregou
            </h1>

            <p className="mt-2 text-sm text-slate-600">
              Algo deu errado. Você pode tentar novamente ou voltar para a home.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <button
                type="button"
                onClick={() => {
                  router.invalidate();
                  reset();
                }}
                className="inline-flex items-center justify-center rounded-xl bg-[#0F3F4A] px-5 py-3 text-sm font-bold text-white transition hover:brightness-95"
              >
                Tentar novamente
              </button>

              <a
                href="/"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-[#0F3F4A] transition hover:bg-slate-50"
              >
                Ir para a home
              </a>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </RootDocument>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
        },
        {
          rel: "apple-touch-icon",
          href: "/favicon.png",
        },
      ],
      meta: [
        { charSet: "utf-8" },

        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },

        {
          title:
            "Tech Escolha Certa | Reviews, Comparativos e Melhores Celulares",
        },

        {
          name: "description",
          content:
            "Compare celulares, notebooks e smartwatches antes de comprar. Reviews reais, rankings atualizados e os melhores modelos custo-benefício de 2026.",
        },

        {
          name: "keywords",
          content:
            "melhores celulares, comparativo celular, review smartphone, celular custo benefício, galaxy a55, redmi note 13 pro, melhores celulares 2026",
        },

        {
          name: "robots",
          content: "index, follow",
        },

        {
          name: "author",
          content: "Tech Escolha Certa",
        },

        {
          property: "og:type",
          content: "website",
        },

        {
          property: "og:site_name",
          content: "Tech Escolha Certa",
        },

        {
          property: "og:title",
          content:
            "Tech Escolha Certa | Reviews, Comparativos e Melhores Celulares",
        },

        {
          property: "og:description",
          content:
            "Reviews reais, comparativos completos e rankings atualizados dos melhores celulares para comprar em 2026.",
        },

        {
          property: "og:url",
          content: "https://techescolhacerta.com.br",
        },

        {
          property: "og:image",
          content: "https://techescolhacerta.com.br/favicon.png",
        },

        {
          name: "twitter:card",
          content: "summary_large_image",
        },

        {
          name: "twitter:title",
          content:
            "Tech Escolha Certa | Reviews, Comparativos e Melhores Celulares",
        },

        {
          name: "twitter:description",
          content:
            "Compare celulares antes de comprar. Reviews, rankings e recomendações confiáveis.",
        },

        {
          name: "twitter:image",
          content: "https://techescolhacerta.com.br/favicon.png",
        },
      ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});


