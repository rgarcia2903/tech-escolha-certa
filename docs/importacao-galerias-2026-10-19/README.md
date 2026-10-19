# Importação das galerias — 19/10/2026

Branch de testes: `feat/galeria-reviews-prioridade-2026-10-19`.
Base: `74fa5873cea88ccb0117851a5cb0c1ec091d99e1`.

Foram extraídas as 40 imagens WebP do ZIP fornecido, preservando os caminhos em `public/images/products/gallery/`: Galaxy A17 5G (6), Redmi Note 15 5G (6), Edge 60 Pro (10), Moto G56 5G (7), Moto G86 5G (6) e Galaxy S25 FE (5). O Galaxy A36 5G mantém a fotografia cadastrada anteriormente. As quatro fotografias licenciadas anteriores continuam disponíveis nas galerias e no fluxo padrão de mídia.

Os cards da vitrine usam a primeira imagem do pacote (`01-principal.webp`) por adesão explícita ao piloto. Os arquivos recebidos não receberam atribuição ou licença das fotografias antigas. O catálogo, os 26 destinos de afiliados, os metadados das rotas, as regras de imagem social e o sitemap permanecem idênticos à base. A árvore gerada do TanStack foi atualizada para registrar os dois arquivos de rota já existentes no piloto. O workflow de validação foi ampliado para incluir mudanças nas imagens.

## Resultados

- `npm test`: 31/31 testes passaram (14 de catálogo/compra e 17 de mídia).
- `npx tsc --noEmit`: passou.
- `npm run build`: passou; aviso de tamanho de chunks, sem erro.
- `npm run check:links`: 48 rotas registradas, 387 referências internas, 37 URLs no sitemap e zero links quebrados.
- Navegador Chromium local: sete reviews em 1440 px e 390 px; todas as imagens decodificadas; miniaturas, seleção, anterior/próxima com retorno circular, ampliação, teclado e fechamento testados.
- Home, ofertas e celulares: capas dos cards verificadas em desktop e celular, sem overflow horizontal. Navegação vitrine → review → celulares e menu móvel testados.
- 138 cliques simulados em botões de compra, com navegação externa impedida; nenhum clique foi enviado às lojas. Os 26 destinos originais foram preservados.
- Canonical único e descrição presentes nos sete reviews em ambos os tamanhos. Sem erros JavaScript nas páginas verificadas.

As verificações usam a aplicação real em servidor local, sem deploy. Nenhum merge na main ou publicação na Cloudflare foi executado.

## Evidências

- [Resultados do navegador](testes-navegador.json)
- [Integridade e SHA-256 dos 40 arquivos](arquivos-importados.json)
- [Manifesto original do ZIP](manifest-recebido.json)
- [Preservação de catálogo e afiliados](preservacao.json)
- [Script reproduzível do navegador](gallery-qa.py) — execute na raiz do repositório, com o servidor local na porta 8080 e Playwright/Chromium disponíveis.
- [Logs das verificações](logs/)
- [Todas as 34 capturas](capturas/)

| Página | Desktop | Celular |
|---|---|---|
| Home | [Ver](capturas/home-desktop.png) | [Ver](capturas/home-celular.png) |
| Ofertas | [Ver](capturas/ofertas-desktop.png) | [Ver](capturas/ofertas-celular.png) |
| Celulares | [Ver](capturas/celulares-desktop.png) | [Ver](capturas/celulares-celular.png) |
| Galaxy A17 5G | [Ver](capturas/galaxy-a17-5g-desktop.png) | [Ver](capturas/galaxy-a17-5g-celular.png) |
| Galaxy A36 5G | [Ver](capturas/galaxy-a36-5g-desktop.png) | [Ver](capturas/galaxy-a36-5g-celular.png) |
| Redmi Note 15 5G | [Ver](capturas/redmi-note-15-5g-desktop.png) | [Ver](capturas/redmi-note-15-5g-celular.png) |
| Edge 60 Pro | [Ver](capturas/edge-60-pro-desktop.png) | [Ver](capturas/edge-60-pro-celular.png) |
| Moto G56 5G | [Ver](capturas/moto-g56-5g-desktop.png) | [Ver](capturas/moto-g56-5g-celular.png) |
| Moto G86 5G | [Ver](capturas/moto-g86-5g-desktop.png) | [Ver](capturas/moto-g86-5g-celular.png) |
| Galaxy S25 FE | [Ver](capturas/galaxy-s25-fe-desktop.png) | [Ver](capturas/galaxy-s25-fe-celular.png) |

As 14 capturas adicionais com sufixo `-ampliada` mostram os diálogos de ampliação dos sete modelos nos dois tamanhos.
