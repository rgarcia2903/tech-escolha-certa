# Tech Escolha Certa — Entrega evoluída

## O que foi implementado

### Visual premium
- Home reestruturada com hero visual usando `phones-hero.webp`.
- Cards de review, guia e comparativo com imagem, overlay, badge e hover premium.
- Heros de categoria com suporte a imagem de fundo.
- Reviews com hero visual cinematográfico via `ReviewTemplate`.

### Imagens
- Conectadas imagens de produtos em:
  - Galaxy A55
  - Galaxy A35
  - Galaxy S24
  - Redmi Note 13 Pro
  - Poco X6 Pro
  - Hero geral de smartphones

### SEO e estrutura
- `robots.txt` criado.
- `sitemap.xml` criado.
- `.env.example` criado para preparar produção.
- Meta tags preservadas/organizadas nas páginas principais.
- Interlinkagem entre hubs, reviews e comparativos mantida.

### Monetização
- CTA afiliado preservado.
- Links prontos para substituir por Mercado Livre.
- Estrutura preparada para `nofollow sponsored`.

## O que ainda falta antes de publicar
1. Substituir `https://SEU-LINK-AFILIADO` pelos links reais do Mercado Livre.
2. Conferir domínio final no `sitemap.xml` e `robots.txt`.
3. Configurar Google Analytics / Search Console.
4. Subir no Hostinger.
5. Testar responsividade e performance.
6. Validar todas as rotas no navegador.

## Como testar
```bash
npm install
npm run dev
```

Depois abra:
- `/`
- `/melhores-celulares-custo-beneficio`
- `/melhores-celulares-samsung`
- `/melhores-celulares-xiaomi`
- `/review/galaxy-a55`
- `/review/redmi-note-13-pro`
