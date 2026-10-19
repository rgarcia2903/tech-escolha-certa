import asyncio,json,re,argparse
from pathlib import Path
from urllib.parse import urlsplit
from playwright.async_api import async_playwright
parser=argparse.ArgumentParser()
parser.add_argument('--base-url',default='http://127.0.0.1:5177')
parser.add_argument('--no-captures',action='store_true')
args=parser.parse_args()
BASE=args.base_url.rstrip('/')
assert urlsplit(BASE).hostname in ['127.0.0.1','localhost'], 'Local QA only'
PAGES=[('home','/'),('celulares','/celulares'),('ofertas','/ofertas'),('custo-beneficio','/melhores-celulares-custo-beneficio'),('xiaomi','/melhores-celulares-xiaomi'),('samsung','/melhores-celulares-samsung'),('ate-1500','/guia/melhores-celulares-ate-1500-reais'),('ate-2000','/melhores-celulares-ate-2000'),('ate-2500','/melhores-celulares-ate-2500'),('ate-3000','/guia/melhores-celulares-ate-3000-reais'),('premium','/guia/melhores-celulares-ate-3500-reais'),('jogos','/guia/melhores-celulares-para-jogos-ate-2000'),('review','/review/redmi-note-14-pro-plus'),('comparativo','/comparativo/redmi-note-13-pro-vs-redmi-note-14-pro-plus')]
async def main():
 result={'console_errors':[],'routes':[],'layouts':[],'errors':[],'accessibility':[],'working_photo_models':[],'affiliate_clicks':0,'external_requests_sent':0}
 async with async_playwright() as p:
  browser=await p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox','--disable-dev-shm-usage'])
  context=await browser.new_context()
  await context.route('**/*',lambda r: r.continue_() if urlsplit(r.request.url).hostname in ['localhost','127.0.0.1'] else r.abort())
  page=await context.new_page()
  page.on('console',lambda m:result['console_errors'].append(m.text) if m.type=='error' else None)
  page.on('pageerror',lambda e:result['errors'].append(str(e)))
  routes=[]
  for file in Path('src/routes').glob('*.tsx'):
   m=re.search(r'createFileRoute\(\s*["\']([^"\']+)',file.read_text())
   if m:routes.append(m.group(1))
  request=await p.request.new_context()
  for route in routes:
   resp=await request.get(BASE+route,max_redirects=0)
   assert resp.status in [200,301],(route,resp.status)
   if resp.status==200:
    html=await resp.text()
    assert len(re.findall(r'<link[^>]*rel="canonical"',html))==1,route
    assert '<h1' in html,route
   result['routes'].append({'path':route,'status':resp.status})
  for width in [360,390,768,1440]:
   await page.set_viewport_size({'width':width,'height':960})
   for name,route in PAGES:
    await page.goto(BASE+route,wait_until='domcontentloaded');await page.wait_for_timeout(700)
    await page.evaluate('document.fonts.ready')
    overflow=await page.evaluate('document.documentElement.scrollWidth>innerWidth+1')
    assert not overflow,(route,width,'overflow')
    assert await page.locator('h1').count()==1,(route,'h1')
    assert await page.locator('[data-photo-status="pending"] img').count()==0
    photos=await page.locator('[data-photo-status="approved"] img').evaluate_all('async els => { for (const img of els) { img.loading="eager"; await img.decode(); if (!img.complete || img.naturalWidth === 0) throw new Error("Broken approved photograph: " + img.src); } return els.map(img => img.closest("[data-product-media]").dataset.productMedia); }')
    result['working_photo_models']=sorted(set(result['working_photo_models']+photos))
    links=await page.locator('a[data-store]').evaluate_all('(els)=>els.map(e=>({store:e.dataset.store,product:e.dataset.productId,url:e.getAttribute("href"),rel:e.rel,text:e.textContent}))')
    for link in links:
     assert 'sponsored' in link['rel'] and 'noopener' in link['rel']
     assert ('Amazon' if link['store']=='amazon' else 'Mercado Livre') in link['text']
     assert link['url'].startswith('https://link.amazon/' if link['store']=='amazon' else 'https://meli.la/')
    Path('work/visual-results-progress.json').write_text(json.dumps(result,ensure_ascii=False))
    result['layouts'].append({'path':route,'width':width,'overflow':overflow,'storeLinks':len(links)})
    # Capture every representative page at all four requested widths.
    if not args.no_captures: await page.screenshot(path=f'work/depois-{name}-{width}.jpg',quality=78,full_page=False)
    if not args.no_captures and width in [390,1440] and name in ['home','ofertas','custo-beneficio','review']:
     await page.screenshot(path=f'work/depois-completa-{name}-{width}.png',full_page=True)
    if width==390 and name in ['home','ofertas','custo-beneficio','review','comparativo']:
     await page.add_script_tag(path='node_modules/axe-core/axe.min.js')
     axe=await page.evaluate('async()=>{const r=await axe.run(document,{runOnly:{type:"tag",values:["wcag2a","wcag2aa","wcag21aa"]}});return r.violations.map(v=>({id:v.id,impact:v.impact,count:v.nodes.length,examples:v.nodes.slice(0,2).map(n=>n.target)}))}')
     result['accessibility'].append({'path':route,'violations':axe})
   if width in [360,390,768]:
    await page.goto(BASE+'/review/redmi-note-14-pro-plus',wait_until='networkidle')
    await page.get_by_role('button',name='Abrir menu',exact=True).click()
    assert not await page.locator('[data-mobile-purchase]').is_visible()
    await page.get_by_role('button',name='Fechar menu',exact=True).click()
    assert await page.locator('[data-mobile-purchase]').is_visible()
    await page.locator('[data-mobile-purchase] summary').click()
    mobile=page.locator('[data-mobile-purchase]')
    assert await mobile.locator('a[href="https://link.amazon/B0faslcvM"]').is_visible()
    assert await mobile.locator('a[href="https://meli.la/1at28cv"]').is_visible()
    if not args.no_captures: await page.screenshot(path=f'work/depois-lojas-mobile-{width}.png')
    await page.get_by_role('button',name='Buscar no Tech Escolha Certa',exact=True).click()
    assert not await mobile.is_visible()
    await page.get_by_placeholder('Busque por modelo, marca, orçamento ou perfil...').fill('Galaxy A25')
    assert await page.get_by_role('option').count()>0
    await page.keyboard.press('Escape')
  missing=await request.get(BASE+'/pagina-inexistente-de-validacao');assert missing.status==404
  result['routes'].append({'path':'/pagina-inexistente-de-validacao','status':404})
  # Keyboard activation of the selector and its product identity after selection.
  await page.goto(BASE+'/',wait_until='networkidle')
  await page.get_by_role('button',name='Até R$ 2.000',exact=True).focus()
  await page.keyboard.press('Enter')
  await page.get_by_role('button',name='Jogos e desempenho',exact=True).focus()
  await page.keyboard.press('Space')
  finder=page.locator('#escolha-rapida')
  assert await finder.get_by_role('heading',name='POCO X7 Pro',exact=True).count()==1
  for model in ['galaxy-a17-5g','redmi-note-15-5g','moto-g86-5g','edge-60-pro','galaxy-s25-fe']:
   await page.goto(BASE+'/ofertas',wait_until='networkidle')
   card=page.locator('#modelo-'+model)
   assert await card.locator('a[data-store="amazon"]').count()==1
   assert await card.locator('a[data-store="mercado_livre"]').count()==1
   assert await card.locator('[data-product-media="'+model+'"]').count()==1
  Path('work/visual-results.json').write_text(json.dumps(result,ensure_ascii=False,indent=2))
  assert not result['errors'],result['errors']
  assert not any('same key' in e for e in result['console_errors']), 'Duplicate React keys in search'
  assert all(not a['violations'] for a in result['accessibility']), result['accessibility']
  await browser.close();await request.dispose()
 Path('work/visual-results.json').write_text(json.dumps(result,ensure_ascii=False,indent=2))
 print(json.dumps({'routes':len(result['routes']),'layouts':len(result['layouts']),'errors':result['errors'],'accessibility':result['accessibility']},ensure_ascii=False))
asyncio.run(main())
