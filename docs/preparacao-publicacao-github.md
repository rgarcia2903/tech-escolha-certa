# Preparação de publicação pelo GitHub

Data: 16/10/2026. A publicação e o envio da branch estão suspensos por instrução do responsável. Não há PR remoto desta preparação. O corpo para revisão está preparado em `work/pr-description.md`.

## Base e preservação

- Branch local: `codex/modernizacao-tech-escolha-certa-2026-10-16`.
- Base: `95c889bc7beeecc0e439b9010d52abff50470f68`, a `main` que incorporou o PR #43.
- A pasta original `/workspace/tech-escolha-certa` mantém todas as alterações não commitadas. A preparação é feita no worktree `/workspace/tech-escolha-certa-publicacao`.
- Cópia de segurança, patch binário, manifesto de hashes e bundle do histórico ficam no `work/publicacao` da pasta original; não são enviados ao GitHub.

## Conciliação do PR #43

O patch local foi aplicado com comparação de três versões. Três arquivos exigiram resolução manual: links centralizados, guia até R$ 1.500 e ranking custo-benefício. Os outros três arquivos alterados pelo PR #43 também foram revisados: sitemap, guia de jogos e ranking Xiaomi.

- Os 18 destinos Mercado Livre e oito Amazon permanecem idênticos. Os quatro nomes com `_5G` usados pelo PR #43 são aliases de compatibilidade dos nomes locais, sem duplicar ofertas.
- O novo guia de R$ 1.500 mantém os cinco modelos e o conteúdo técnico do PR #43. A lista central dessa faixa incorpora os cinco como candidatos condicionais, sem preço confirmado nem aprovação automática de A36/G56. A25, Note 13 4G, M35, POCO M6 Pro e Moto G84 continuam em uma seção histórica expansível, com o conteúdo anterior e seus links. Os IDs históricos têm prefixo para evitar duplicação de âncoras.
- A36 e G56 permanecem visíveis, mas em avaliação editorial e sem ativação automática de compra, conforme a política aprovada da modernização. Fontes oficiais e links cadastrados foram preservados.
- Moto G86, Note 15 e A17 usam as opções de compra por modelo das duas lojas. Variante, preço e condições comerciais continuam pendentes.
- O ranking custo-benefício preserva o par Note 15/G86 no bloco comercial e Note 15/POCO X7 Pro na barra mobile, com os nomes e a condição de orçamento corrigidos. POCO X7 Pro continua acessível no ranking e na conclusão.
- Datas e entradas do sitemap do PR #43 foram preservadas. Canonical permanece centralizado na raiz.
- As três correções de texto aprovadas anteriormente foram mantidas.

## Validação

TypeScript, build cliente/servidor, 14 testes e 375 referências internas passaram. Sitemap: 37 URLs; zero links quebrados no escopo analisado. O lint global mantém 91 erros de formatação e seis avisos anteriores em arquivos não alterados. O navegador local passou em 47 verificações de rotas e 15 combinações de página/largura, incluindo o guia conciliado; sem erros JavaScript de página e sem cliques reais em afiliados. Há alerta de bundle acima de 500 kB. A análise local com axe também apontou contraste insuficiente em alguns textos de componentes existentes; a conciliação não altera o design para corrigi-los.

Os resultados finais e comandos constam no corpo de PR preparado em `work/pr-description.md`. Artefatos, logs, cópias de segurança e capturas ficam em `work/`, ignorado pelo Git. Não há instalação de dependências; o worktree utiliza uma cópia isolada das dependências já existentes, também ignorada.

## Cloudflare: confirmação necessária antes de qualquer push

O responsável confirmou `main` como branch de produção, builds não produtivos ativos, Worker Previews ainda não configurado e builds globais não desativados. Portanto, enviar uma branch pode iniciar um build automaticamente. Isso não prova que o site público será atualizado.

No fluxo legado, um comando como `wrangler versions upload` cria uma versão sem promovê-la à produção. Entretanto, o comando não produtivo pode ser personalizado; um comando que execute `wrangler deploy` no Worker de produção pode publicar. Também é necessário revisar o comando de build e scripts invocados para excluir publicações embutidas. O modelo legado não garante isolamento de recursos de produção.

Antes de enviar, confirmar o texto exato de Build command e Non-production branch deploy command/Preview command, incluindo os scripts chamados. Não são necessários tokens para esta conferência visual no painel. Não alterar configurações por conta própria.

Um PR em rascunho não impede que o push dispare a integração. Não usar `[skip ci]` ou o nome da branch como garantia de bloqueio.

Caminho após confirmação e nova autorização: enviar somente esta branch, abrir PR para `main`, revisar diff e checks, e manter o PR sem merge. Se for exigida ausência total de builds, o responsável precisará bloquear previamente os builds não produtivos na Cloudflare; essa configuração não foi alterada aqui.

Referências oficiais:

- https://developers.cloudflare.com/workers/ci-cd/builds/configuration/
- https://developers.cloudflare.com/workers/ci-cd/builds/build-branches/
