# Prévia final — sete modelos

Fonte: branch `codex/vitrine-fotos-reais-2026-10-19`, commit `d371e9f11ad279090ca152abff27690fd352ec84`. Capturas da aplicação real em 390 × 1800 e 1440 × 1800, com imagens carregadas antes da captura. Sem alterações no site, imagens, layout ou links.

## Prévia navegável

[Baixar previa-navegavel.zip](previa-navegavel.zip?raw=true). Baixe pelo botão Download raw file do GitHub, extraia e abra `index.html` no navegador. Contém 46 páginas e imagens/CSS locais. Navegação, seleção de páginas e seções expansíveis funcionam. Busca e seletor React não estão disponíveis na exportação estática; cliques de compra mostram o destino e não navegam às lojas. Não é deploy nem endereço público do site.

## Capturas

| Página | Desktop | Celular | Página inteira desktop | Página inteira celular |
|---|---|---|---|---|
| Home | [Ver](capturas/home-desktop.png) | [Ver](capturas/home-mobile.png) | [Ver](capturas/home-desktop-completa.jpg) | [Ver](capturas/home-mobile-completa.jpg) |
| Ofertas | [Ver](capturas/ofertas-desktop.png) | [Ver](capturas/ofertas-mobile.png) | [Ver](capturas/ofertas-desktop-completa.jpg) | [Ver](capturas/ofertas-mobile-completa.jpg) |
| Ranking custo-benefício | [Ver](capturas/ranking-desktop.png) | [Ver](capturas/ranking-mobile.png) | [Ver](capturas/ranking-desktop-completa.jpg) | [Ver](capturas/ranking-mobile-completa.jpg) |
| Ranking Samsung | [Ver](capturas/ranking-samsung-desktop.png) | [Ver](capturas/ranking-samsung-mobile.png) | [Ver](capturas/ranking-samsung-desktop-completa.jpg) | [Ver](capturas/ranking-samsung-mobile-completa.jpg) |
| Ranking Xiaomi | [Ver](capturas/ranking-xiaomi-desktop.png) | [Ver](capturas/ranking-xiaomi-mobile.png) | [Ver](capturas/ranking-xiaomi-desktop-completa.jpg) | [Ver](capturas/ranking-xiaomi-mobile-completa.jpg) |

### Detalhes dos novos renders

- moto-g56-5g: [desktop](capturas/moto-g56-5g-desktop.png), [celular](capturas/moto-g56-5g-mobile.png).
- moto-g86-5g: [desktop](capturas/moto-g86-5g-desktop.png), [celular](capturas/moto-g86-5g-mobile.png).
- galaxy-s25-fe: [desktop](capturas/galaxy-s25-fe-desktop.png), [celular](capturas/galaxy-s25-fe-mobile.png).

## Verificações

- Sete modelos carregaram: Galaxy A17 5G, Galaxy A36 5G, Redmi Note 15 5G, Edge 60 Pro, Moto G56 5G, Moto G86 5G e Galaxy S25 FE.
- 46 verificações de imagem nas cinco páginas em desktop/celular: decode válido, HTTP 200 e bytes servidos iguais aos assets locais. Zero erros JavaScript ou overflow horizontal. [Evidências](seven-images.json).
- 26 ofertas/URLs de afiliados preservadas; catálogo idêntico ao anterior à integração. Home, ofertas e ranking: 62 cliques simulados, zero solicitações às lojas, zero erros. [Resultados](captures.json).
- Pacote offline: 46 páginas verificadas, imagens decodificadas, navegação home → ofertas → ranking confirmada, zero solicitações externas e zero erros. [Resultados](offline-results.json).
- `check:links`: 46 rotas, 377 referências internas, 37 URLs no sitemap, zero links quebrados.
- `npm test`: 28 de 30 passaram. Duas asserções antigas de mídia ainda exigem placeholders para os modelos que agora têm renders; falham nessa versão. Não alteramos testes ou implementação nesta revisão. O workflow de validação fornecido na branch não executa essa suíte; executa TypeScript, build e check:links.

Nenhuma pesquisa nova de imagens. Sem merge na main, PR, deploy ou alteração de produção.
