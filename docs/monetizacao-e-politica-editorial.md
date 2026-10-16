# Cadastro editorial e opções de compra

Revisão: 16 de outubro de 2026. Esta implementação é local e não autoriza publicação.

## Fonte dos dados

- `src/lib/affiliate-links.ts`: endereços originais, sem parâmetros acrescentados. Os 18 links Mercado Livre anteriores foram preservados; oito Amazon foram adicionados.
- `src/lib/product-catalog.ts`: identidade do produto, fontes, variantes e ofertas por loja. Uma variante técnica documentada não valida um anúncio comercial.
- `src/lib/editorial-policy.ts`: candidatos por perfil e orçamento de referência, compartilhados entre home, categorias, rankings, ofertas e seletor.

Os cinco modelos já presentes na seleção (A17 5G, Note 15 5G, G86 5G, Edge 60 Pro e S25 FE) têm opções nas duas lojas, no nível do modelo. A36 e G56 permanecem em avaliação: seus endereços estão cadastrados, mas não recebem botões em ofertas ou aprovação automática de compra. Note 14 Pro+ recebe as duas opções em seus componentes de compra. Os demais links antigos permanecem associados aos mesmos modelos.

## Validação e limites

Todas as ofertas permanecem `user_supplied` ou `legacy_unverified`, com variante comercial, preço, condição, vendedor e conferência comercial não confirmados. Falha de acesso no ambiente não significa link inválido. O usuário informou ter gerado os links Amazon na ferramenta oficial, com ID techescolha03-20; isso é informação fornecida, não verificação de atribuição.

Os botões por modelo pedem que a pessoa confira a versão em cada loja. Não declaram equivalência de RAM, capacidade ou condição. Ao solicitar uma variante específica a `getOffers(productId, variantId)`, nenhuma oferta sem essa confirmação é retornada. Não marcar a variante genérica como verificada: criar a variante exata e documentar sua fonte antes de aprovar uma oferta específica.

Nenhuma oferta possui preço atual confirmado. Assim, nenhuma é elegível como preço verificado dentro de um orçamento. Os valores dos filtros são limites desejados pelo visitante, não preços de produtos. Os modelos são candidatos a pesquisar. Preços estáticos e medições sem documentação foram reformulados; notas numéricas não documentadas foram retiradas da apresentação e do JSON-LD, preservando-se dados legados para revisão.

Os candidatos em avaliação não se tornam vencedores porque existe um link. Novos modelos exigem avaliação de suporte brasileiro, ficha da versão, garantia e custo total. Não há scraping, chamadas automáticas às lojas ou coleta automática de preços. Fontes de fabricantes são separadas dos endereços comerciais.

## Analytics e privacidade

`affiliate_click` mantém os campos existentes e acrescenta `product_id`, `variant_id` e `offer_id`; `destination` distingue `amazon` de `mercado_livre`. Componentes anteriores podem passar `href`, resolvido por correspondência exata. Não inferir identidade por substring ou número parecido. Eventos de clique não representam venda. Validar parâmetros e dimensões no GA4; pedidos, devoluções e comissões são apurados em cada programa.

O aviso Amazon foi acrescentado ao rodapé e às opções com Amazon. GA4 e Clarity permanecem instalados. Revisar consentimento, retenção e configurações efetivas antes de publicar: não foi criada uma plataforma de consentimento nem presumida conformidade jurídica.

## URLs e SEO

Reviews e nove comparativos existentes são preservados. Os dois atalhos que antes redirecionavam modelos sem Pro para versões Pro agora informam a identidade correta, sem inventar um review completo. Os aliases equivalentes de guias têm 301 também na aplicação. Canonical tem um único responsável, a raiz, inclusive no tratamento dos aliases. Sitemap foi sincronizado com revisões reais; páginas informativas sem review completo não foram promovidas artificialmente no sitemap.

Conferir Search Console antes/depois de qualquer publicação: cliques, impressões, canonical escolhido, indexação e links recebidos não estão disponíveis no repositório. Alterações em títulos, dados estruturados e redirecionamentos podem mudar a apresentação na busca. Não apagar páginas antigas apenas pela idade.

## Validação local e revisão futura

- `npm test`: cadastro, preservação exata de URLs, distinção entre variantes, HTML dos componentes e analytics offline. Nenhuma compra ou clique real em anúncio.
- `npm run check:links`: rotas, referências internas literais, sitemap e proprietário único do canonical.
- `npx tsc --noEmit --incremental false`: tipos.
- `npm run build`: cliente e servidor; não faz deploy.
- `npm run lint`: comparar com a dívida anterior de 313 erros de formatação e seis avisos.

O runner usa TypeScript/esbuild e React já presentes, sem instalar dependências. Testes de navegador, quando disponíveis, usam apenas o servidor local, interceptam solicitações externas e inspecionam os endereços sem clicar nos botões afiliados. Artefatos de teste ficam em `work/` e estão ignorados pelo Git.

Antes da publicação, revisar variantes e condições de cada loja, as fontes e textos específicos, os modelos em avaliação, layout mobile, consentimento e coleta efetiva. Não preencher campos comerciais sem fonte. Nenhuma alteração de domínio, segredo ou credencial foi necessária. Publicação exige aprovação expressa do responsável.
