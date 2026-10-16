# Preparação de publicação pelo GitHub

Data: 16/10/2026. O responsável autorizou o envio somente da branch de modernização e a abertura de PR para main após confirmar os comandos no painel. A publicação em produção e o merge continuam não autorizados. O corpo de revisão está preparado em `work/pr-description.md`.

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

## Cloudflare: configuração confirmada pelo responsável

- Repositório: `rgarcia2903/tech-escolha-certa`; produção: `main`.
- Builds de branches não produtivas: ativos; Worker Previews: não configurado.
- Build command: `npm run build`.
- Deploy command de produção: `npx wrangler deploy`.
- Version command para branches não produtivas: `npx wrangler versions upload`.
- Root directory: `/`.

O responsável confirmou esses valores no painel e autorizou o push somente da branch `codex/modernizacao-tech-escolha-certa-2026-10-16`. O script de build local compila Vite e não invoca deploy; não há workflows GitHub Actions no código enviado. O Version command cria uma versão sem promovê-la à produção. O modelo legado não garante isolamento dos recursos de produção, e o build automático da Cloudflare deve ser acompanhado após o envio.

O nome do Worker em `wrangler.jsonc` foi corrigido de `tanstack-start-app` para `tech-escolha-certa`, preservando as demais configurações. Isso alinha o artefato ao serviço existente; não foi alterada configuração no painel da Cloudflare. Nenhum `wrangler deploy` manual é autorizado. Se surgir indicação de deploy de produção no build não produtivo, interromper as ações e informar o responsável.

O PR deve permanecer sem merge e sem auto-merge. O envio não contém alterações de domínio, credenciais ou configurações remotas. Os resultados remotos devem ser relatados separadamente dos testes locais.

Referências oficiais:

- https://developers.cloudflare.com/workers/ci-cd/builds/configuration/
- https://developers.cloudflare.com/workers/ci-cd/builds/build-branches/
