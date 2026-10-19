# Fontes verificadas para fotografias reais — 19/10/2026

Objetivo: substituir os placeholders visuais de celulares por fotografias do modelo exato, com uso comercial permitido e atribuição correta, sem reutilizar ilustrações geradas por IA como se fossem fotos.

## Candidatas com página de licença verificada

| Produto (productId) | Arquivo e página de origem | Autor | Licença | Observação |
|---|---|---|---|---|
| Galaxy A36 5G (`galaxy-a36-5g`; confirmar ID do catálogo) | [Samsung Galaxy A36 5G 2025 (cropped).jpg](https://commons.wikimedia.org/wiki/File:Samsung_Galaxy_A36_5G_2025_(cropped).jpg) | Captainmorlypogi1959 (recorte: Panam2014) | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | Fotografia em loja, versão recortada do original; 3091×6416 px. |
| Redmi Note 15 5G (`redmi-note-15-5g`) | [REDMI Note 15 5G back.jpg](https://commons.wikimedia.org/wiki/File:REDMI_Note_15_5G_back.jpg) | Maksdroider | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | Traseira Glacier Blue; 1874×1872 px. |
| Edge 60 Pro (`edge-60-pro`) | [Motorola Edge 60 Pro (cropped).jpg](https://commons.wikimedia.org/wiki/File:Motorola_Edge_60_Pro_(cropped).jpg) | Meniirtjakarintan (recorte: Modular science) | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | Recorte de fotografia do aparelho; 2723×5610 px. |

## Condições antes de habilitar no site

1. Fazer download ou gerar um derivado otimizado e **inspecionar visualmente** o arquivo para confirmar que a foto mostra o modelo anunciado. A página de origem e a licença não substituem esta verificação.
2. Guardar cópia local otimizada no projeto; não depender permanentemente de hotlink de terceiros.
3. Adicionar foto ao mapeamento de `src/lib/product-media.ts` com `status: "approved"`, apenas após verificar o arquivo. Não associar a versão 4G, modelo similar ou configuração comercial incompatível.
4. Exibir crédito ao autor, link à origem, link à licença CC BY-SA 4.0 e indicação de recorte/redimensionamento/alterações. Para adaptações, cumprir a cláusula CompartilhaIgual (ShareAlike) sobre o material adaptado.
5. Conferir carregamento em desktop e celular, testes do projeto, links de afiliados existentes, SEO e impacto do tamanho das imagens.
6. Não fazer merge ou deploy sem validação.

## Pendências

Ainda faltam fontes verificadas e fotos locais para Galaxy A17 5G, Moto G56 5G, Moto G86 5G, Galaxy S25 FE e demais modelos. Este levantamento **não** habilita fotos automaticamente e **não** comprova que downloads possam ser feitos pelo ambiente Codex, que apresentou bloqueio de proxy.

Contexto: a branch visual original `codex/visual-tech-escolha-certa-2026-10-16` foi preservada no commit `19a07320cf9ff17fc08a553021e02d7b12408ede`.

## Galaxy A36 5G integrado — 19/10/2026

O levantamento acima é histórico. Nesta revisão, a fotografia do A36 foi obtida pelo workflow de importação do GitHub e adicionada à branch de testes no commit `67e463d`. O original foi inspecionado visualmente nesta execução e corresponde à fotografia frontal em loja da fonte documentada, também apresentada pelo responsável na conversa. A página de origem foi consultada novamente: [revisão consultada no Commons](https://commons.wikimedia.org/w/index.php?title=File:Samsung_Galaxy_A36_5G_2025_(cropped).jpg&oldid=1199353825).

- **Autor:** Captainmorlypogi1959. **Recorte original:** Panam2014, conforme histórico do Commons de 28/07/2025.
- **Licença do original e do derivado:** [Creative Commons Attribution-ShareAlike 4.0 International — CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Crédito, origem, licença e alterações aparecem junto à foto. Não há endosso dos autores ao site.
- **Original local:** `public/images/products/licensed/galaxy-a36-5g-original.jpg`, 5.094.005 bytes. JPEG validado por assinatura, Pillow `verify()` e decodificação completa.
- **Dimensões:** 6.416 × 3.091 pixels armazenados; orientação EXIF 6. Após aplicar a orientação: **3.091 × 6.416**, correspondendo às dimensões publicadas no Commons. Isso não é defeito do arquivo.
- **SHA-256 do JPEG local:** `3b3f7baa395d574333e366e59cff099b00dbf5033700691e2472ab6d087ad7a6`.
- **WebP local usado no site:** `public/images/products/licensed/galaxy-a36-5g.webp`, **462 × 960**, **36.502 bytes**, redução de **99,28%**. O JPEG completo é preservado para rastreabilidade, mas não é usado nos cards.
- **Alterações:** orientação EXIF aplicada aos pixels; redimensionamento proporcional; conversão WebP qualidade 85, sem novo recorte, retoque ou geração por IA. O derivado é distribuído sob CC BY-SA 4.0. Hash do derivado e evidência de revisão estão em `src/lib/licensed-product-photos.json`.
- **Identidade:** registro aprovado exclusivamente para `galaxy-a36-5g`. O metadado EXIF “Galaxy A56 5G” identifica a câmera utilizada para fotografar, e não o aparelho retratado. A foto não confirma RAM, armazenamento, cor de estoque, região, vendedor ou variante comercial de um anúncio.
- **Contagem atual:** **1 modelo** com fotografia real local aprovada. Redmi Note 15 5G e Edge 60 Pro continuam pendentes. Ativos antigos gerados por IA permanecem bloqueados como fotos.

A integração utiliza o componente central `ProductMedia`; as seleções e o seletor guiado que já contêm o A36 passam a exibir seu WebP local. Nenhum hotlink é usado para carregar a imagem. Os links da legenda levam apenas à origem e à licença. A aprovação fotográfica não muda o status editorial/comercial do aparelho nem autoriza publicação.
