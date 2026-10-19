# Imagens comerciais por ferramentas de afiliados

Pesquisa em 19/10/2026, partindo de `bd2252b5b25c13e38c78cf47fd52b1e09dd75a1d`.

O responsável confirmou cadastro Amazon e Mercado Livre, sem acesso confirmado às APIs, feeds de fabricantes ou arquivos exportados. Não foram solicitadas chaves, senhas, APIs pagas ou aprovações individuais de imagens. As ferramentas desta sessão não oferecem uma sessão autenticada nesses portais; os links existentes não concedem acesso à área privada.

## Rotas investigadas

| Recurso oficial | O que foi confirmado | Aplicação prática e limitação atual |
| --- | --- | --- |
| [Amazon Brasil: licença de PI e requisitos](https://associados.amazon.com.br/help/operating/policies/) | Existe licença limitada para Conteúdo do Programa recebido pelas ferramentas previstas. A Creators API/PA API e feeds podem fornecer imagens | Não é uma licença para extrair qualquer imagem da página de um anúncio. Conteúdo obtido da Amazon deve direcionar exclusivamente à Amazon; não pode servir de imagem comum para promover Mercado Livre. Imagens de API não podem ser armazenadas localmente; o link tem limite de cache de 24h |
| [Amazon Brasil: SiteStripe](https://associados.amazon.com.br/help/node/topic/GJMMT7G4C8K4Y3AY) | Ferramenta gratuita ligada à conta de associado. Ajuda consultada ainda menciona links de imagem, mas documentação pública entre países diverge; interfaces atuais podem oferecer apenas texto | É necessário obter o código realmente disponibilizado à conta. Não foi inventado iframe, tag, ASIN ou URL de imagem. A disponibilidade de Imagem/Texto+Imagem não foi confirmada para esta conta. Não prometemos que ela exista |
| [Mercado Livre: Central de Afiliados](https://www.mercadolivre.com.br/l/visite-o-portal-de-afiliados), [Checklist](https://www.mercadolivre.com.br/l/checklist), [Gerador de links](https://www.mercadolivre.com.br/l/afiliados-gere-seus-links) | Central, Barra de Afiliados, listas e gerador de links são caminhos oficiais do programa | Os resultados públicos descrevem ferramentas de links. Não foi confirmado um exportador público de imagens dos sete modelos com licença para uso externo neste site. Algumas páginas retornaram erro na ferramenta de navegação; o conteúdo privado não foi inspecionado |
| [Mercado Livre Developers: imagens](https://developers.mercadolivre.com.br/pt_br/trabalhar-com-imagens) | Documenta manipulação de imagens em integrações de anúncios | Endpoint ou CDN acessível não constitui autorização de cópia. API de vendedores não foi tratada como exportador licenciado para afiliados |
| [Samsung: Clube de Afiliados](https://www.samsung.com/br/afiliados-clube-samsung/), [Samsung BR/Awin](https://ui.awin.com/merchant-profile/25539) | Programa próprio e acesso a recursos de parceiros | Cadastro Amazon/Mercado Livre não comprova aceitação no programa Samsung/Awin nem licença dos arquivos. Material de campanha pode restringir destinos ao fabricante |
| [Awin: uso de imagens do anunciante](https://success.awin.com/s/article/Can-I-use-any-images-from-the-advertiser-s-website?language=en_US) | A orientação associa permissão à aceitação no programa e aos materiais disponibilizados na plataforma | Não estende a permissão a qualquer imagem encontrada no site público ou a campanhas de outro varejista |
| [Xiaomi: biblioteca de ativos do programa](https://ui.awin.com/merchant-profile-terms/115475/brand), [Xiaomi UK/Awin](https://ui.awin.com/merchant-profile/23680) | Há licenças comerciais de ativos em programas de afiliados, com restrições a alterações e finalidade | Exemplos regionais SE/UK, não uma adesão brasileira comprovada deste projeto. Conversão para WebP pode depender de permissão adicional. [Media Kit Global](https://www.mi.com/global/about/mediakit/) não forneceu pack aberto com autorização aplicável |
| [Motorola Mobility: Press Box](https://motorolanews.com/pressbox/) e [termos](https://www.motorola.com/us/en/legal/terms-of-use) | Materiais por modelo existem; termos gerais não conferem licença ampla de redistribuição comercial | Não foi identificado pack de parceiro acessível e autorizado ao projeto. Recursos Motorola **Solutions**/PartnerEmpower não foram usados como se fossem da Motorola Mobility para smartphones |
| [Open Icecat: conteúdo comercial autorizado](https://icecat.com/structured-data-content-users/), [Open Content License](https://iceclog.com/open-content-license/) | Catálogo comercial com conteúdo de marcas, fora de Creative Commons; possui atribuição, condições e registro obrigatório | Sem conta/contrato do projeto nem confirmação de cobertura dos sete SKUs. A licença atual também tem restrições de uso envolvendo IA; não foi presumida compatibilidade irrestrita. Não foi criada uma conta em nome do proprietário |
| [Samsung Mobile Press](https://www.samsungmobilepress.com/media-assets/galaxy-a36-5g) e [termos](https://www.samsungmobilepress.com/terms) | Renders oficiais existem, incluindo frente/traseira | A disponibilidade para download não supera a restrição geral de uso não comercial; não foi aplicada uma licença inexistente |

Não compramos licenças nem assinamos serviços. Nenhum anúncio foi raspado, nenhuma foto de marketplace foi copiada e nenhum download foi executado por GitHub Actions sem arquivo elegível.

## Situação dos sete modelos

| Modelo | Imagem efetiva após esta etapa | Imagem profissional nova |
| --- | --- | --- |
| Galaxy A17 5G | Foto Commons existente, Captainmorlypogi1959, CC BY-SA 4.0 | Não |
| Galaxy A36 5G | Foto Commons existente, Captainmorlypogi1959 / recorte Panam2014, CC BY-SA 4.0 | Não |
| Redmi Note 15 5G | Foto Commons existente, Maksdroider, CC BY-SA 4.0 | Não |
| Moto G56 5G | Placeholder identificado | Não |
| Moto G86 5G | Placeholder identificado | Não |
| Motorola Edge 60 Pro | Foto Commons existente, Meniirtjakarintan / recorte Modular science, CC BY-SA 4.0 | Não |
| Galaxy S25 FE | Placeholder identificado | Não |

As fontes exatas, originais, hashes e licenças das quatro fotos continuam em `src/lib/licensed-product-photos.json` e `public/images/products/licensed/`. Os bytes não foram alterados. Nenhuma delas foi reclassificada como render oficial ou fotografia de estúdio.

## Ação que depende da conta do proprietário

Para incorporar um material do programa sem API, é necessário **obter na sessão autenticada um código oficial de incorporação ou um arquivo promocional disponibilizado para divulgação externa, junto das condições que o acompanham**. Os caminhos são a Central de Afiliados e Criadores do Mercado Livre ou Ferramentas/SiteStripe no Portal de Associados Amazon. Não é necessário compartilhar login, senha ou chaves. Não é uma autorização a ser dada pelo proprietário por imagem: é o próprio material fornecido pelo programa e suas condições de uso.

Comece por um único modelo (Galaxy A17 5G, por exemplo). Se o portal só oferecer link de texto, esse resultado confirma que o cadastro atual não entrega uma imagem incorporável por essa ferramenta; não adianta copiar a foto do anúncio. Nesse caso, a alternativa é um pack do fabricante/distribuidor com permissão comercial aplicável ao site ou acesso a um feed com cobertura do SKU. A opção exata disponível dentro das contas não pode ser verificada desta sessão.

## Implementação pronta para materiais locais autorizados

O suporte deixou de exigir Creative Commons para todas as imagens: `src/lib/commercial-product-photos.json` aceita fotos comerciais e `official-render`, com rótulo de licença próprio e evidência da autorização. O registro permanece vazio porque nenhum novo arquivo foi legitimamente obtido.

Para preparar um arquivo fornecido pelo titular, use:

```sh
python scripts/stage-commercial-media.py --manifest work/permissao-do-fornecedor.json --file work/render-original.png
```

O manifesto deve conter `productId`, `kind` (`official-render` ou `photograph`), `author`, `alt`, `sourceUrl`, `licenseUrl`, `licenseLabel`, `permissionEvidence`, `originalSha256` e `commercialRights`. Os direitos devem registrar `rightsHolder`, `evidenceUrl`, `scope: "site-wide-two-store"`, `hostLocally: true`, `convertToWebp: true`, `redistributeInRepository: true` e `validUntil` (timestamp ISO ou `null` quando não houver prazo declarado). Esses campos precisam refletir a autorização real; preenchê-los não cria direitos.

O comando valida integridade e ID exato, preserva original e transparência, gera WebP de até 1440 px, registra alterações/créditos e prepara status `pending`. A revisão técnica e documental pode ser feita pelo agente sem pedir aprovação individual ao proprietário. Só após conferir origem, modelo e permissão o registro recebe status `approved` e dados de revisão. A foto anterior permanece como fallback até lá. Uma licença vencida, exclusiva de uma loja ou incompatível com armazenamento/redistribuição não é exibida no card compartilhado. Conteúdo da Amazon por API exige integração própria, não este importador local.
