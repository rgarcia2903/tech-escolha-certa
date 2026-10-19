# Correção da seleção de candidatos

Em 19/10/2026 foi analisado o resultado trazido pela branch de testes no commit `ace9215`.

## Erros corrigidos

- O logotipo Samsung de 500 × 500 px era aceito pelo tamanho e pela posição em `og:image`. O arquivo `galaxy-s25-fe-candidata.webp` foi removido; a URL exata virou teste de regressão. O nome da página não é usado para atribuir identidade a uma imagem genérica.
- A coleta agora exige evidência do modelo no caminho do asset, no `alt` ou no registro estruturado do produto. Rejeita logotipos, ícones, sprites, banners e variantes incompatíveis, incluindo G86 Power.
- Downloads nomeados do Press Box são tratados como candidatos; imagens lazy-loaded, `srcset` e imagens de produto em JSON estruturado também são lidas.
- Moto G56 e G86 usam primeiro suas páginas globais específicas do Press Box. Os redirecionamentos oficiais de download foram conferidos e adicionados explicitamente à lista de hosts; não há liberação arbitrária de domínios. HTTP 403 é registrado, sem tentativas de contorno.
- A seleção procura frente, traseira e hero, conserva a ordem do catálogo oficial e não desperdiça slots com a mesma imagem Samsung em resoluções diferentes.
- MIME, decodificação, dimensões, proporção e SHA-256 são verificados. A transparência é preservada na conversão para WebP de até 1440 px.

## Separação entre candidato e imagem aprovada

Os arquivos de revisão ficam em artifact temporário do GitHub Actions, com retenção de sete dias. Só o relatório é versionado. Nada é escrito em `public/`, no cadastro de fotos aprovadas ou nos componentes da vitrine. Isso evita incorporar ao repositório público material comercial cuja autorização ainda não foi confirmada.

Encontrar e baixar um candidato não confirma automaticamente sua identidade visual final nem sua licença para uso comercial. O relatório mantém explicitamente `visualReviewStatus: required` e `permissionStatus: unverified`; não há promoção automática.

As quatro fotografias existentes e seus créditos foram preservados byte a byte. A rotina não pode substituí-las. Também permanecem intactos os 26 links de afiliados, SEO e layout.

## Testes

- 48 testes locais aprovados: 30 Node e 18 Python, incluindo dez regressões específicas da coleta.
- TypeScript, build e verificação de links aprovados: 377 referências internas, nenhum link quebrado.
- Lint sem erros; seis avisos anteriores de Fast Refresh. A build mantém o aviso anterior sobre tamanho de bundle.
- Carregamento real das quatro fotos aprovado em 58 verificações desktop/celular, mais quatro testes de fallback.

Scripts: `scripts/collect-catalog-images.py` e `tests/test_catalog_collection.py`. O workflow executa os testes do seletor antes de coletar e só pode gravar o relatório na branch `codex/vitrine-fotos-reais-2026-10-19`. Não existe etapa de merge, PR ou deploy.

## Resultado concreto da execução final

[GitHub Actions — execução 39298422708](https://github.com/rgarcia2903/tech-escolha-certa/actions/runs/39298422708), concluída com sucesso, sobre a correção `d4d2f6d`. Relatório produzido no commit `03bac6d`. O artifact `candidatos-catalogo-revisao` contém nove WebPs temporários.

| Modelo | Arquivos coletados | Dimensões WebP | Fonte |
| --- | --- | --- | --- |
| Moto G56 5G | Frente, traseira e PDP Hero; Black Oyster | 1440 × 1440 cada | Press Box global Motorola, downloads específicos do G56 |
| Moto G86 5G | Frente, traseira e PDP Hero; Spellbound | 1440 × 1440 cada | Press Box global Motorola, downloads do G86 comum, sem Power |
| Galaxy S25 FE | Frente, traseira e ângulo traseiro esquerdo; Jetblack | 1440 × 1152 cada | Galeria Samsung Brasil, SKU SM-S731BZKKZTO |

[Resultado completo com URLs, hashes, evidências do modelo e rejeições](resultado.json). Os nove arquivos têm identidades de asset distintas; não há duas resoluções do mesmo arquivo Samsung ocupando slots. O logotipo anterior aparece como rejeitado, não como produto baixado. Nenhum desses candidatos foi ativado no site: revisão visual final e autorização comercial continuam explicitamente pendentes. As quatro fotos aprovadas continuam sendo as imagens utilizadas.
