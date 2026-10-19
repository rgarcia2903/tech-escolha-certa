# Vitrine de smartphones — versão de testes

Base: `bd2252b5b25c13e38c78cf47fd52b1e09dd75a1d`. Branch: `codex/vitrine-fotos-reais-2026-10-19`.

**0 produtos receberam imagens profissionais novas; as quatro fotos licenciadas continuam funcionando.** A investigação foi ampliada a ferramentas gratuitas de afiliados, programas de parceiros e catálogo comercial. [Fontes, condições, limitações e ação específica na conta do proprietário](recursos-oficiais.md).

## Reformulação implementada

- Home e ofertas com abertura mais compacta, atalhos por marca/perfil e maior foco no catálogo.
- Sete modelos atuais priorizados na home e em ofertas. Galaxy A36 e Moto G56 continuam com o status editorial anterior de avaliação; seus links não foram ativados indevidamente nos cards. Os 26 URLs originais foram preservados.
- Nome e marca antes da imagem, fotos grandes com proporções preservadas, áreas brancas e três placeholders identificados. Nenhuma imagem artificial de aparelho.
- Botões com texto explícito Amazon/Mercado Livre, cores que diferenciam os destinos e área de toque mínima de 48 px. Sem logotipos copiados, descontos inventados, preço ou estoque presumido.
- Créditos e licenças preservados, sem o espaço vazio excessivo anterior em celular. Detalhes editoriais continuam expansíveis e no HTML.
- Suporte real a licenças comerciais próprias e renders oficiais, com importador local que preserva transparência e verifica integridade. Isso é preparação técnica, não uma integração ativa com APIs ou portais.

## Capturas

| Página | Desktop 1440 px | Celular 390 px |
| --- | --- | --- |
| Home | [Abrir](home-desktop.png) | [Abrir](home-mobile.png) |
| Ofertas | [Abrir](ofertas-desktop.png) | [Abrir](ofertas-mobile.png) |
| Ranking principal | [Abrir](ranking-desktop.png) | [Abrir](ranking-mobile.png) |

### Home desktop

![Home desktop](home-desktop.png)

### Home celular

![Home celular](home-mobile.png)

### Ofertas desktop

![Ofertas desktop](ofertas-desktop.png)

### Ofertas celular

![Ofertas celular](ofertas-mobile.png)

Arquivos `*-completa.jpg` mostram a página inteira. As capturas representam uma vitrine com as imagens legais existentes, não uma aprovação de qualidade de catálogo dessas fotografias.

Nenhuma versão foi publicada, nenhum PR ou merge foi criado e nenhuma configuração de produção foi alterada.

## Verificação

- 38 testes aprovados: 30 Node e 8 Python. Incluem verificação dos URLs originais, licença comercial, rejeição de conteúdo exclusivo de uma loja, validade, integridade, transparência e bloqueio de sobrescrita. Fixtures sintéticas são restritas a diretórios temporários de testes; não são assets do site.
- TypeScript e build aprovados; lint sem erros, com 6 avisos preexistentes de Fast Refresh. Aviso existente de bundle acima de 500 kB continua na build.
- 46 rotas registradas, 377 referências internas e 37 URLs do sitemap: nenhum link interno quebrado.
- 47 caminhos de navegador, 56 layouts em 360/390/768/1440 px: sem erros. Axe em cinco páginas representativas: nenhuma violação detectada no escopo automatizado.
- 58 verificações de fotos e 4 testes de fallback aprovados; quatro modelos com fotos locais funcionando.
- Seis capturas desktop/mobile, H1/canonical e ausência de transbordamento conferidos; 62 cliques simulados nos botões com destino/evento preservados e sem tráfego às lojas.
- Metadados de home/ofertas, dados do catálogo, URLs de afiliados, arquivos de fotos/licenças existentes, sitemap, robots e workflows preservados. A lista de vitrine passou a incluir os sete prioritários, mantendo as políticas editoriais.

[Resultados estruturados](verificacao.json). Para reproduzir as capturas: `python scripts/final-visual-review.py --base-url http://127.0.0.1:5179 --output docs/vitrine-parceiros-2026-10-19 --results work/vitrine-parceiros/captures.json`, com a aplicação local ativa. Os scripts de regressão visual e de fotos também aceitam `--base-url`. Não é necessário enviar tráfego aos varejistas para executar esses testes.
