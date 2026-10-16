# Relatório de implementação local — 16/10/2026

Implementação preparada para revisão. Sem deploy, commits, pull requests, alterações de domínio, credenciais ou instalação de dependências.

## Resultado

Atualização de preparação: modernização conciliada localmente com a main `95c889b` (PR #43). Detalhes e bloqueio de envio em `docs/preparacao-publicacao-github.md`. As validações abaixo referem-se à versão conciliada.

Cadastro com 35 identidades de produtos e 26 ofertas: 18 Mercado Livre preservadas exatamente e oito Amazon adicionadas. Produtos, variantes técnicas e anúncios comerciais são entidades diferentes. Fontes e datas são registradas; fonte técnica não valida anúncio ou atribuição de comissão.

Home, /celulares, rankings por marca e orçamento, guias e seletor utilizam uma política compartilhada de candidatos. Conteúdo histórico continua disponível e é contextualizado. Não há preço atual confirmado nem garantia de enquadramento no teto escolhido.

## Integração comercial e pendências

| Modelo                  | Cadastro                                                 | Exibição preparada                                                      | Pendências                                                                                        |
| ----------------------- | -------------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Galaxy A17 5G           | Amazon + Mercado Livre                                   | Seleções, seletor e ofertas                                             | RAM física, capacidade, região, condição, vendedor e correspondência dos anúncios                 |
| Redmi Note 15 5G        | Amazon + Mercado Livre                                   | Home, seleções, seletor e ofertas                                       | Anúncios sem correspondência confirmada às variantes técnicas 8/256 ou 8/512 BR                   |
| Moto G86 5G             | Amazon + Mercado Livre                                   | Home, seleções, seletor e ofertas                                       | Variante comercial e condições em cada loja                                                       |
| Edge 60 Pro             | Amazon + Mercado Livre                                   | Home, seleções, seletor e ofertas                                       | Variante comercial e condições em cada loja                                                       |
| Galaxy S25 FE           | Amazon + Mercado Livre                                   | Seleções, seletor e ofertas                                             | Variante comercial e condições em cada loja                                                       |
| Redmi Note 14 Pro+ 5G   | Amazon + Mercado Livre                                   | Review, comparativos e referências anteriores que utilizam o componente | Variante comercial e condições em cada loja; ficha oficial não comprova anúncio                   |
| Galaxy A36 5G           | Amazon + Mercado Livre                                   | Somente cadastro e avaliação editorial                                  | Avaliação editorial e validação comercial antes de ativar compras                                 |
| Moto G56 5G             | Amazon + Mercado Livre                                   | Somente cadastro e avaliação editorial                                  | Avaliação editorial e validação comercial antes de ativar compras                                 |
| Onze modelos anteriores | Mercado Livre preservado; Note 14 Pro+ também tem Amazon | Contextos originais preservados e componentes migrados                  | Revisar validade comercial, variante, condição e suporte restante; não foram declarados validados |

As opções das duas lojas são apresentadas no nível do modelo com aviso explícito de versões potencialmente diferentes. Não representam uma comparação de ofertas equivalentes confirmadas. A busca por uma variante exata não retorna anúncios não validados. Nenhum endereço recebeu parâmetros manuais.

A37, A57, S26 FE, S26, iPhone 17/18 Pro, POCO X8 Pro e outros candidatos possuem contexto de avaliação, sem substituição automática baseada em comissão. Permanecem necessárias revisão editorial e disponibilidade/garantia brasileira antes da aprovação comercial.

## Conteúdo, SEO e experiência

- Oito reviews e nove comparativos mantidos. Revisões documentais recebem contexto explícito; notas numéricas sem documentação deixam de ser apresentadas e o schema dos reviews utiliza Article sem notas fabricadas.
- Redirecionamentos incorretos de modelos sem Pro para versões Pro removidos. As URLs agora explicam a identidade correta; não foram criados reviews completos sem pesquisa. Aliases equivalentes de guias continuam com 301.
- Canonical centralizado, sitemap com 37 URLs e revisões sincronizadas. Robots.txt permite rastreamento e mantém sitemap. Nenhuma página antiga recebe noindex por idade.
- Menus com estado acessível; barra mobile recolhível para duas lojas e oculta durante menu/busca; comparativos evitam duplicar quatro ações fixas.
- Avisos de afiliados, declaração Amazon, transparência, metodologia e privacidade atualizados. Analytics distingue loja, produto, variante, oferta, página e posição. Clique não é venda.
- Três imagens passaram de 5.512.708 para 206.008 bytes no total (redução aproximada de 96%). Isso não comprova melhora de Core Web Vitals sem medição em visitantes.

## Validação

- TypeScript sem erros.
- Build de cliente e servidor concluído. Permanece aviso de chunk JavaScript acima de 500 kB; publicação não executada.
- 14 testes automatizados de identidade, preservação de links, variantes, componentes, schema e eventos offline passaram.
- 46 rotas registradas, 375 referências internas literais e 37 URLs do sitemap verificadas; zero destinos internos quebrados nesse escopo. Não é validação de disponibilidade das lojas nem de todos os anchors dinâmicos.
- Navegador local: 47 requisições de rotas, incluindo aliases e 404; 15 combinações de página/largura (360, 390 e 1280 px), menu, busca, seletor e opções das cinco ofertas. Solicitações externas bloqueadas; nenhum clique em anúncio e nenhuma compra.
- ESLint: antes 313 erros e seis avisos; após alterações, 91 erros de formatação e seis avisos preexistentes em arquivos não alterados. Nenhum erro ou aviso nos arquivos alterados. O lint global ainda falha e não foi mascarado.

## Limitações e revisão antes de publicar

1. Conferir cada anúncio, RAM física, armazenamento, 4G/5G, região, condição, vendedor, preço final e atribuição nos programas. Não inferir comissão pelo domínio do link.
2. Revisar os candidatos por orçamento quando houver preços conferidos; manter o aviso enquanto não houver dados.
3. Validar GA4 e Clarity nas contas reais, dimensões dos eventos, consentimento e retenção. A presença de código não prova coleta efetiva nem conformidade jurídica.
4. Conferir Search Console e dados reais antes/depois: indexação, canonical escolhido, impressões, cliques e desempenho. Não há promessa de aumento de tráfego ou vendas.
5. Revisar visualmente conteúdo histórico e novos contextos; aprofundar a avaliação dos sucessores. A migração é gradual: textos técnicos legados ainda existem nas páginas, não foram todos convertidos ao catálogo.
6. Resolver a dívida global de lint e avaliar divisão do bundle em uma etapa técnica própria.
7. Executar novamente npm test, npm run check:links, npx --no-install tsc --noEmit --incremental false e npm run build no ambiente de publicação. O teste opcional python scripts/browser-smoke.py requer servidor local na porta 5173, Python Playwright e Chromium já disponíveis; não instala ferramentas.
8. Publicar somente após aprovação expressa. Após publicação, conferir as páginas reais, canonical, redirects e eventos em ambiente autorizado; analisar vendas exclusivamente nos relatórios dos programas.

## Arquivos criados e modificados

Lista de arquivos da implementação (inclui o cadastro Mercado Livre já iniciado anteriormente). Artefatos temporários e dist não integram a lista.

- `.gitignore`
- `docs/monetizacao-e-politica-editorial.md`
- `docs/relatorio-implementacao.md`
- `eslint.config.js`
- `package.json`
- `public/_redirects`
- `public/images/products/edge-50-pro-optimized.webp`
- `public/images/products/galaxy-m35-optimized.webp`
- `public/images/products/iphone-15-optimized.webp`
- `public/sitemap.xml`
- `scripts/browser-smoke.py`
- `scripts/check-project.mjs`
- `scripts/run-tests.mjs`
- `src/components/AffiliateLink.tsx`
- `src/components/site/AffiliateCTA.tsx`
- `src/components/site/AffiliateRedirectNotice.tsx`
- `src/components/site/EditorialSelection.tsx`
- `src/components/site/Footer.tsx`
- `src/components/site/Header.tsx`
- `src/components/site/LegacySelectionNotice.tsx`
- `src/components/site/MobilePurchaseBar.tsx`
- `src/components/site/ModelIdentityPage.tsx`
- `src/components/site/PhoneDecisionFinder.tsx`
- `src/components/site/ProductCard.tsx`
- `src/components/site/ProductPurchaseOptions.tsx`
- `src/components/site/PurchaseActions.tsx`
- `src/components/site/ReviewCard.tsx`
- `src/components/site/ReviewContext.tsx`
- `src/components/site/ReviewDecisionPanel.tsx`
- `src/components/site/ReviewTemplate.tsx`
- `src/components/site/SiteSearch.tsx`
- `src/components/site/data.ts`
- `src/components/site/ui.tsx`
- `src/lib/affiliate-links.ts`
- `src/lib/analytics.ts`
- `src/lib/editorial-policy.ts`
- `src/lib/editorial-schema.ts`
- `src/lib/product-catalog.ts`
- `src/routeTree.gen.ts`
- `src/routes/__root.tsx`
- `src/routes/autor.ricardo-garcia.tsx`
- `src/routes/celulares.tsx`
- `src/routes/como-avaliamos.tsx`
- `src/routes/comparativo-galaxy-a55-vs-galaxy-a35.tsx`
- `src/routes/comparativo.galaxy-a25-vs-redmi-note-13.tsx`
- `src/routes/comparativo.galaxy-a35-vs-redmi-note-13-pro.tsx`
- `src/routes/comparativo.galaxy-a55-vs-poco-x6-pro.tsx`
- `src/routes/comparativo.iphone-15-vs-galaxy-s24.tsx`
- `src/routes/comparativo.redmi-note-13-pro-vs-poco-x6-pro.tsx`
- `src/routes/comparativo.redmi-note-13-pro-vs-redmi-note-14-pro-plus.tsx`
- `src/routes/comparativos.tsx`
- `src/routes/divulgacao-de-afiliados.tsx`
- `src/routes/guia.melhores-celulares-ate-1500-reais.tsx`
- `src/routes/guia.melhores-celulares-ate-2000-reais.tsx`
- `src/routes/guia.melhores-celulares-ate-3000-reais.tsx`
- `src/routes/guia.melhores-celulares-ate-3500-reais.tsx`
- `src/routes/guia.melhores-celulares-para-jogos-ate-2000.tsx`
- `src/routes/guias-de-compra.tsx`
- `src/routes/index.tsx`
- `src/routes/melhores-celulares-ate-2000.tsx`
- `src/routes/melhores-celulares-ate-2500.tsx`
- `src/routes/melhores-celulares-custo-beneficio.tsx`
- `src/routes/melhores-celulares-samsung.tsx`
- `src/routes/melhores-celulares-xiaomi-custo-beneficio.tsx`
- `src/routes/melhores-celulares-xiaomi.tsx`
- `src/routes/ofertas.tsx`
- `src/routes/politica-de-privacidade.tsx`
- `src/routes/review.galaxy-a35.tsx`
- `src/routes/review.galaxy-a55.tsx`
- `src/routes/review.galaxy-s24.tsx`
- `src/routes/review.iphone-15.tsx`
- `src/routes/review.poco-x6-pro.tsx`
- `src/routes/review.poco-x6.tsx`
- `src/routes/review.poco-x7-pro.tsx`
- `src/routes/review.redmi-note-13-pro.tsx`
- `src/routes/review.redmi-note-13.tsx`
- `src/routes/review.redmi-note-14-pro-plus.tsx`
- `src/routes/transparencia.tsx`
- `src/styles.css`
- `tests/catalog-and-purchase.test.tsx`

Arquivos adicionais da conciliação: `src/components/site/LegacyBudget1500References.tsx` e `docs/preparacao-publicacao-github.md`.
