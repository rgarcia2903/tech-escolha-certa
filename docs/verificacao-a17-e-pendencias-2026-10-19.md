# Galaxy A17 integrado e pesquisa dos modelos restantes — 19/10/2026

Branch: `codex/vitrine-fotos-reais-2026-10-19`. Base desta etapa: `18131a2`. Resultado: **1 dos 4 modelos solicitados recebeu foto autorizada e validada: Galaxy A17 5G**. Moto G56 5G, Moto G86 5G e Galaxy S25 FE permanecem sem fotografia autorizada confirmada nesta pesquisa. Os três modelos anteriormente concluídos foram preservados, totalizando **4 modelos com fotos reais funcionando**.

## Fonte e obtenção

A foto do A17 é de Captainmorlypogi1959, CC BY-SA 4.0, conforme a página original consultada do Commons e `docs/photo-candidates.json`. O original foi obtido pelo GitHub Actions run **39288690168**, no workflow `importar-foto-a17.yml`, com checksum validado no executor do GitHub. O workflow foi enviado no commit `445e38c`; o original entrou na branch pelo commit `bb2cbac`. Nenhuma restrição do proxy do Codex foi alterada ou contornada.

JPEG válido de 1.883.505 bytes. Os pixels armazenados são 4.032 × 3.024, EXIF 6; a exibição é 3.024 × 4.032. A tela identifica expressamente “Galaxy A17 5G”. SHA-1 coincide com o publicado pelo Commons, e os hashes SHA-256 do original e do derivado estão registrados. Original e WebP foram inspecionados visualmente.

WebP local: **720 × 960, 47.242 bytes**, redução de **97,49%**. Somente orientação EXIF, redimensionamento proporcional e conversão WebP qualidade 85; sem novo recorte, retoque ou geração por IA. Original e derivado permanecem sob CC BY-SA 4.0; créditos, fonte, licença e alterações aparecem na legenda e em `galaxy-a17-5g.LICENSE.txt`. Não há hotlink. Os preços do expositor estrangeiro são contexto histórico da foto, não ofertas atuais do site.

A pesquisa e as evidências das três pendências estão em [pesquisa-fotos-pendentes-2026-10-19.md](pesquisa-fotos-pendentes-2026-10-19.md). Foram descartados resultados “Taken with”, fotos sem licença comercial/redistribuição confirmada e assets rotulados G86 Power. O botão de download de um press kit e a licença da página textual não foram considerados autorização da fotografia. Não se afirma que inexista outra fonte autorizada na internet.

## Integração e verificação no navegador

O registro central habilita a foto exclusivamente para `galaxy-a17-5g`; cards, seletor, rankings, ofertas e guias que já usam o A17 passam a mostrá-la. Modelos sem autorização continuam com placeholder. Os comparativos existentes e suas identidades foram preservados: não foi criada análise nova nem inserida a foto de um aparelho em comparação de outro modelo. O status editorial/comercial dos produtos não foi alterado.

Matriz confirmada no Chromium, a **390 e 1440 px**, abrindo alternativas expansíveis quando necessário:

| Página | A17 | A36 | Redmi Note 15 | Edge 60 Pro |
|---|---|---|---|---|
| `/` | Sim | Sim | Sim | Sim |
| `/celulares` | Sim | Sim | Sim | Sim |
| `/guia/melhores-celulares-ate-1500-reais` | Sim | Sim | Sim | — |
| `/guia/melhores-celulares-ate-2000-reais` | — | Sim | Sim | — |
| `/guia/melhores-celulares-ate-3000-reais` | — | — | — | Sim |
| `/guia/melhores-celulares-para-jogos-ate-2000` | — | — | Sim | — |
| `/melhores-celulares-ate-2000` | — | Sim | Sim | — |
| `/melhores-celulares-ate-2500` | — | Sim | — | — |
| `/melhores-celulares-custo-beneficio` | Sim | — | Sim | Sim |
| `/melhores-celulares-samsung` | Sim | Sim | — | — |
| `/melhores-celulares-xiaomi` | — | — | Sim | — |
| `/melhores-celulares-xiaomi-custo-beneficio` | — | — | Sim | — |
| `/ofertas` | Sim | Sim | Sim | Sim |

Foram **58 verificações de modelo/página/largura**, em **13 páginas distintas**. O A17 aparece em 6 páginas: home, celulares, ofertas, Samsung, custo-benefício e guia até R$ 1.500. Todas as quatro imagens servidas retornaram HTTP 200 e MIME `image/webp`, com bytes iguais ao asset local, `complete=true`, dimensões naturais corretas, imagem e atribuição visíveis, sem overflow ou erros JavaScript. A simulação de falha em contexto novo do navegador passou para os quatro modelos, exibindo “Foto indisponível”.

## Testes realizados

- `npm test`: **28 testes Node aprovados**, 14 de catálogo/compra e 14 de mídia.
- `python -m unittest discover -s tests -p 'test_photo_import.py'`: **5 testes aprovados**, incluindo decodificação, orientação e checksum do A17 real. **Total: 33 testes.**
- TypeScript, ESLint do TypeScript alterado e `git diff --check`: aprovados.
- `npm run check:links`: 46 rotas, 375 referências internas, 37 URLs no sitemap, zero destinos quebrados.
- `npm run build`: aprovada; permanece aviso anterior de bundle principal acima de 500 kB.
- `python scripts/licensed-photos-smoke.py`: 58 verificações de carregamento/visibilidade/licença e quatro fallbacks aprovados.
- `python scripts/visual-smoke.py --no-captures`: 47 respostas de rota, incluindo 404; 56 combinações de página/largura a 360, 390, 768 e 1440 px; sem erros JavaScript e sem violações nas cinco páginas examinadas pelo axe no escopo WCAG A/AA configurado. Recursos externos são bloqueados deliberadamente.

Os **26 links originais de afiliados** (18 Mercado Livre e 8 Amazon), arquivo do catálogo, sitemap e robots continuam inalterados em relação à base desta etapa. Titles, descriptions, canonicals, estrutura de rotas e layout foram preservados. Não foi afirmado preço atual, estoque, variante comercial ou aumento de conversão com base na fotografia.

Logs e capturas de QA permanecem em `work/`, fora do versionamento. Esta entrega é somente para a branch de testes no GitHub: **sem merge na main, sem PR, sem publicação na Cloudflare e sem alterações ao site em produção**.
