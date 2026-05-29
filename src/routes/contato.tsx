import { createFileRoute } from "@tanstack/react-router";
import { InfoLayout } from "@/components/site/InfoLayout";
import { Mail } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Tech Escolha Certa" },
      { name: "description", content: "Fale com a equipe do Tech Escolha Certa: sugestões, parcerias e imprensa." },
      { property: "og:title", content: "Contato — Tech Escolha Certa" },
      { property: "og:description", content: "Canais oficiais para falar com a nossa equipe." },
    ],
  }),
  component: () => (
    <InfoLayout
      eyebrow="Contato"
      title="Fale com a gente"
      intro="Tem uma sugestão de análise, comparativo ou parceria? Adoramos ouvir nossos leitores."
    >
      <div className="rounded-2xl border border-border bg-card p-6 shadow-soft not-prose">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-md bg-cta text-cta-foreground"><Mail className="h-5 w-5" /></span>
          <div>
            <p className="text-sm text-muted-foreground">E-mail oficial</p>
            <p className="font-semibold text-foreground">contato@techescolhacerta.com.br</p>
          </div>
        </div>
      </div>
      <p>Respondemos em até 2 dias úteis. Para imprensa, utilize o assunto <strong>Imprensa</strong> no e-mail.</p>
    </InfoLayout>
  ),
});




