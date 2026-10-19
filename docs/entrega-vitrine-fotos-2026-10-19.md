# Vitrine Tech Escolha Certa — 19/10/2026

Branch de trabalho: `codex/vitrine-fotos-reais-2026-10-19`, baseada em `codex/fontes-fotos-reais-2026-10-19` (`df538c73640e7492dffcaa32e07aaa583033f7bc`). O Git não conseguiu conectar ao proxy. Os arquivos e commits de base foram recuperados pelo conector GitHub e reconstruídos localmente: as árvores conferem exatamente com `ddd5913cad23228a42eba29a8f24b50f7450c109` e `2f45f0c74c141ab97044a5403b0c692dde57e36b`; os hashes dos dois commits também conferem com os originais.

## Resultado fotográfico: 0 modelos funcionando

Tentativas de download dos arquivos documentados do Galaxy A36 5G, Redmi Note 15 5G e Edge 60 Pro falharam com `curl: (7) Failed to connect to proxy port 8080`. O ambiente usa política restrita e os hosts Wikimedia não constam na lista de destinos liberados. Não houve alteração de proxy, rotas, certificados ou política, uso de espelhos ou hotlink como substituto de uma fotografia local verificada.

As fontes e a licença CC BY-SA 4.0 estão documentadas na base. Nenhum arquivo fotográfico foi obtido ou inspecionado visualmente nesta execução; portanto, nenhuma foto foi aprovada. Os ativos antigos de IA continuam bloqueados como fotografias. O objetivo fotográfico permanece pendente da obtenção autorizada dos originais.

Alternativa implementada: importação sem rede de arquivos locais obtidos legalmente, com otimização WebP, dimensões, hashes do original e do derivado, procedência e revisão explícita. Consulte `docs/importacao-fotos-reais.md`. As três candidatas estão em `docs/photo-candidates.json`; a lista local de fotos licenciadas permanece vazia. A importação não aprova imagens automaticamente.

## Alterações

- Cards reservam áreas maiores de imagem, apresentam até dois destaques e colocam resumo e ressalvas em seção expansível, depois dos botões de compra.
- Seleções priorizam modelos comercialmente ativos com links em duas lojas, mantendo a ordem anterior nos empates. Modelos em avaliação editorial continuam sem CTA de afiliado.
- Fotografias aprovadas terão créditos com links para origem e licença, indicação de alterações e fallback “Foto indisponível” em caso de erro de carregamento.
- O registro exige revisão e hashes antes de liberar uma foto; os testes verificam procedência documentada e integridade dos arquivos locais.
- Corrigida chave React duplicada em duas linhas do guia de até R$ 1.500, identificada pelo teste visual.
- Os 26 destinos originais (18 Mercado Livre e 8 Amazon), suas identidades comerciais e eventos de clique foram preservados. Catálogo e arquivo de links não foram alterados. Resumos continuam no HTML; metadados, sitemap, robots e responsabilidade central pelos canonicals foram preservados.

## Validação

- 25 testes Node de catálogo/mídia e 2 testes Python de importação local.
- TypeScript e ESLint dos arquivos TypeScript alterados.
- Verificação de links: 46 rotas, 375 referências internas, 37 URLs no sitemap, zero destinos quebrados.
- Build de produção local, sem deploy. Permanece aviso de bundle principal acima de 500 kB.
- Navegador: 47 respostas de rota incluindo 404, 56 combinações de página/largura (360, 390, 768 e 1440 px); checagens de menu, busca, seletor, CTAs e overflow. Cinco páginas representativas avaliadas com axe para WCAG A/AA, sem violações nesse escopo. Não equivale a auditoria completa de acessibilidade.
- Contagem fotográfica em navegador: 0 modelos aprovados/carregados. Requisições externas foram bloqueadas deliberadamente no teste; falhas desses recursos e recomendações de landmarks do instrumento de desenvolvimento permanecem registradas no log. Nenhuma venda ou aumento de conversão foi inferido.

## Revisão e entrega

Trabalho salvo em branch local separada. Não foi feito merge, push, PR ou publicação na Cloudflare. A ausência de push evita disparar eventual automação externa de publicação. Relatório e instruções de importação estão versionados em `docs/`. Antes de publicar futuramente, obter e revisar as fotografias, testar seu carregamento em celular/desktop e aprovar a entrega.
