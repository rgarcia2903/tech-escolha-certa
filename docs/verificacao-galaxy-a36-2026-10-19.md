# Galaxy A36 5G: fotografia real integrada

Branch: `codex/vitrine-fotos-reais-2026-10-19`. Base atualizada por fast-forward até `67e463d`, que contém o JPEG importado pelo workflow do GitHub. Nenhum arquivo inválido foi encontrado.

## Arquivo e licença

JPEG de 5.094.005 bytes validado por assinatura, Pillow `verify()` e decodificação integral. Os pixels armazenados têm 6.416 × 3.091; a orientação EXIF 6 produz a exibição correta de 3.091 × 6.416, conforme o Commons. A inspeção visual do JPEG e do WebP confirma correspondência com a fotografia frontal do A36 em loja, documentada e apresentada pelo responsável. O EXIF que cita Galaxy A56 descreve a câmera utilizada.

Autor Captainmorlypogi1959, recorte Panam2014, CC BY-SA 4.0, conforme a página do Commons consultada nesta execução. Origem, revisão consultada, hash do JPEG e detalhes estão em `docs/fontes-fotos-reais-2026-10-19.md`. O registro `src/lib/licensed-product-photos.json` guarda os hashes do original e do derivado, dimensões e evidência de revisão. Ambos os arquivos têm atribuição em `public/images/products/licensed/galaxy-a36-5g.LICENSE.txt`.

WebP local: **462 × 960**, **36.502 bytes**, redução de **99,28%**. Alterações limitadas à orientação EXIF, redimensionamento proporcional e conversão para WebP. Nenhum novo recorte, retoque ou geração de imagem. O derivado mantém CC BY-SA 4.0. O componente exibe crédito e links de origem/licença. A imagem é servida localmente, sem hotlink; o JPEG original não é requisitado pelos cards.

## Páginas verificadas no navegador

O teste descobre todas as rotas que renderizam a fotografia aprovada do A36 e confirma carregamento e créditos em 390 e 1440 px:

- `/`
- `/celulares`
- `/ofertas`
- `/melhores-celulares-samsung`
- `/melhores-celulares-ate-2000`
- `/melhores-celulares-ate-2500`
- `/guia/melhores-celulares-ate-1500-reais`
- `/guia/melhores-celulares-ate-2000-reais`

Na home, em celulares e em ofertas, o A36 também integra as alternativas expansíveis do seletor de perfil. O teste abre essas alternativas para conferir a visibilidade da fotografia. A aprovação da foto não altera o status de avaliação editorial do produto nem ativa novos CTAs.

## Validação executada

- `npm test`: **26 testes Node aprovados** (14 de catálogo/compra e 12 de mídia).
- `python -m unittest discover -s tests -p 'test_photo_import.py'`: **3 testes aprovados**, incluindo decodificação e orientação do JPEG/WebP reais.
- `npx tsc --noEmit` e ESLint dos arquivos TypeScript alterados: sem erros ou avisos.
- `npm run check:links`: 46 rotas, 375 referências internas, 37 URLs no sitemap, zero destinos quebrados.
- `npm run build`: build local de produção aprovada. Permanece o aviso anterior de bundle principal acima de 500 kB.
- `python scripts/visual-smoke.py --no-captures`: 47 respostas de rota e 56 combinações de página/largura. Sem erros de execução JavaScript; sem violações nas cinco páginas examinadas pelo axe no escopo WCAG A/AA configurado. O teste bloqueia recursos externos deliberadamente.
- `python scripts/photo-a36-smoke.py`: **8 páginas × 2 larguras**, HTTP 200 e `image/webp`, bytes servidos iguais ao arquivo local, `complete=true`, dimensões naturais 462 × 960, imagem visível e créditos presentes. Zero overflow e zero erros JavaScript nesse teste final.
- Simulação de arquivo inacessível em contexto novo do navegador: placeholder “Foto indisponível” aprovado. Corrigido o caso em que a falha de uma imagem SSR acontece antes da hidratação React e seu evento `onError` é perdido.

**Contagem final: 1 modelo com fotografia real funcionando — Galaxy A36 5G.** Outros modelos não recebem esta foto. Os 26 links de afiliados, suas identidades e os arquivos do catálogo, SEO, sitemap e robots foram preservados.

Resultados completos e capturas locais de QA ficam em `work/`, fora do versionamento. A entrega é destinada apenas à branch de testes no GitHub. Nenhum merge na main, PR ou publicação na Cloudflare faz parte desta execução.
