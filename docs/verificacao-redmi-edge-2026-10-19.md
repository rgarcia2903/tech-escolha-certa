# Fotografias reais Redmi Note 15 5G e Motorola Edge 60 Pro — 19/10/2026

Branch de testes: `codex/vitrine-fotos-reais-2026-10-19`. O Galaxy A36 5G foi preservado.

## Obtenção, identidade e licença

O workflow `.github/workflows/importar-fotos-redmi-edge.yml`, enviado no commit `dd091d0`, obteve os dois originais no GitHub Actions, execução [39286732434](https://github.com/rgarcia2903/tech-escolha-certa/actions/runs/39286732434). A importação foi concluída com sucesso e os JPEGs foram preservados na mesma branch pelo commit `5a4c0be`. Não houve alteração da rede do Codex ou tentativa de contornar seu proxy. O workflow restringe o destino à branch de testes e não contém publicação, merge ou abertura de PR.

Os bytes dos JPEGs foram validados por assinatura, Pillow `verify()`, decodificação completa, dimensões e igualdade do SHA-1 com os checksums publicados no Commons. Os originais e os WebPs foram inspecionados visualmente nesta execução. O Redmi corresponde à fotografia traseira Glacier Blue do modelo exato, com marca REDMI e módulo de câmera; o Edge está identificado como “Motorola Edge 60 Pro” no próprio expositor. A evidência é combinada com as fontes e a igualdade dos checksums, não com semelhança visual isolada. EXIF identifica a câmera usada na captura, não o modelo retratado.

- Redmi: Maksdroider, CC BY-SA 4.0; 1.874 × 1.872, 430.690 bytes → WebP 960 × 959, 64.336 bytes (**85,06% menor**).
- Edge: Meniirtjakarintan, recorte Modular science, CC BY-SA 4.0; 2.723 × 5.610, 3.332.796 bytes → WebP 466 × 960, 42.960 bytes (**98,71% menor**).

Autores, páginas de origem, revisões consultadas, checksums publicados e evidências estão em `docs/fontes-fotos-reais-2026-10-19.md`. Cada par de arquivos tem seu `.LICENSE.txt` em `public/images/products/licensed/`. Original e derivado mantêm CC BY-SA 4.0. O registro de mídia contém dimensões, hashes SHA-256 e revisão; as legendas exibem autoria, fonte, licença e alterações. Houve apenas tratamento de orientação quando aplicável, redimensionamento proporcional e conversão WebP qualidade 85, sem novo recorte, retoque ou geração por IA.

## Integração e páginas verificadas

O mapeamento central habilita cada foto exclusivamente para seu productId. Os cards, seleções, rankings, ofertas e guias existentes passam a usá-la automaticamente. Nenhuma foto é atribuída a variantes 4G, Pro ou a outro aparelho. Nenhum hotlink é usado; os JPEGs completos permanecem preservados, mas a interface carrega somente os WebPs locais. O status editorial dos aparelhos não foi alterado. As imagens não comprovam variante comercial, memória, região, vendedor ou disponibilidade.

Matriz confirmada no Chromium a **390 e 1440 px**, com a fotografia visível, decodificação concluída, dimensões naturais corretas e créditos presentes:

| Página | A36 | Redmi Note 15 5G | Edge 60 Pro |
|---|---|---|---|
| `/` | Sim | Sim | Sim |
| `/celulares` | Sim | Sim | Sim |
| `/guia/melhores-celulares-ate-1500-reais` | Sim | Sim | — |
| `/guia/melhores-celulares-ate-2000-reais` | Sim | Sim | — |
| `/guia/melhores-celulares-ate-3000-reais` | — | — | Sim |
| `/guia/melhores-celulares-para-jogos-ate-2000` | — | Sim | — |
| `/melhores-celulares-ate-2000` | Sim | Sim | — |
| `/melhores-celulares-ate-2500` | Sim | — | — |
| `/melhores-celulares-custo-beneficio` | — | Sim | Sim |
| `/melhores-celulares-samsung` | Sim | — | — |
| `/melhores-celulares-xiaomi` | — | Sim | — |
| `/melhores-celulares-xiaomi-custo-beneficio` | — | Sim | — |
| `/ofertas` | Sim | Sim | Sim |

Home, celulares e ofertas também têm fotos nas alternativas expansíveis do seletor: o teste abre essas alternativas para verificar visibilidade. A matriz soma **13 páginas distintas e 46 verificações de foto/largura** (8 páginas do A36, 10 do Redmi e 5 do Edge, multiplicadas por duas larguras). Os três modelos também passaram pelo teste de arquivo indisponível em contexto novo do navegador, exibindo “Foto indisponível”.

## Testes e preservação

- `npm test`: **27 testes Node aprovados**, sendo 14 de catálogo/compra e 13 de mídia.
- `python -m unittest discover -s tests -p 'test_photo_import.py'`: **4 testes aprovados**, incluindo os originais reais, checksums do Commons e WebPs dos dois novos modelos. Total: **31 testes**.
- TypeScript, ESLint dos arquivos TypeScript alterados, compilação dos scripts Python e `git diff --check`: aprovados.
- `npm run check:links`: 46 rotas, 375 referências internas, 37 URLs no sitemap e zero destinos quebrados.
- Build local de produção: aprovada; permanece o aviso anterior de chunk principal acima de 500 kB.
- `python scripts/licensed-photos-smoke.py`: HTTP 200, MIME `image/webp`, igualdade dos bytes servidos com o asset, `complete=true`, dimensões naturais corretas, imagem e créditos visíveis, sem overflow ou erros JavaScript; três fallbacks aprovados.
- `python scripts/visual-smoke.py --no-captures`: 47 respostas de rota, incluindo 404; 56 combinações de páginas representativas e larguras 360/390/768/1440; sem erros JavaScript. Cinco páginas examinadas pelo axe sem violações no escopo WCAG A/AA configurado. Recursos externos são bloqueados deliberadamente no teste.

Os arquivos do catálogo, dos 26 links originais de afiliados (18 Mercado Livre e 8 Amazon), sitemap e robots permanecem inalterados em relação ao commit do A36. Os testes preservam a identidade e os destinos comerciais. Titles, descriptions, canonicals e estrutura de rotas foram mantidos; a função existente de imagens sociais agora resolve a foto local aprovada do Redmi onde o modelo já era referenciado. O antigo teste de imagem social foi ajustado para verificar a fotografia licenciada quando disponível e o fallback nos demais casos.

**Resultado final: 3 modelos com fotografias reais funcionando.** Resultados detalhados e capturas estão em `work/`, fora do versionamento. Esta entrega autoriza somente a branch de testes no GitHub: sem merge na main, PR ou publicação na Cloudflare e sem alterações ao site de produção.
