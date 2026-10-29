import asyncio,json,re,argparse
from pathlib import Path
from urllib.parse import urlsplit
from playwright.async_api import async_playwright
parser=argparse.ArgumentParser()
parser.add_argument('--base-url',default='http://127.0.0.1:5173')
BASE=parser.parse_args().base_url.rstrip('/')
assert urlsplit(BASE).hostname in ['127.0.0.1','localhost'], 'Browser QA must use the local server'
async def main():
 result={'routes':[],'layouts':[],'external_requests_sent':0,'browser_errors':[]}
 routes=[]
 for f in Path('src/routes').glob('*.tsx'):
  m=re.search(r'createFileRoute\(\s*["\']([^"\']+)',f.read_text())
  if m:routes.append(m.group(1))
 async with async_playwright() as p:
  request=await p.request.new_context()
  for route in routes+['/pagina-inexistente-de-validacao']:
   response=await request.get(BASE+route,max_redirects=0,timeout=60000)
   status=response.status
   if route in ['/guia/melhores-celulares-ate-2000-reais','/melhores-celulares-xiaomi-custo-beneficio']:
    assert status==301,(route,status)
   elif route=='/pagina-inexistente-de-validacao':assert status==404,(route,status)
   else:
    text=await response.text()
    assert status==200,(route,status,text[:100])
    assert len(re.findall(r'<link[^>]*rel="canonical"',text))==1,(route,'canonical count')
    assert '<h1' in text,(route,'missing h1')
    result['routes'].append({'path':route,'status':status})
    continue
   result['routes'].append({'path':route,'status':status,'location':response.headers.get('location')})
  browser=await p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox','--disable-dev-shm-usage'])
  context=await browser.new_context()
  async def local_only(route):
   if urlsplit(route.request.url).hostname not in ['127.0.0.1','localhost']:await route.abort()
   else:await route.continue_()
  await context.route('**/*',local_only)
  page=await context.new_page()
  page.on('pageerror',lambda error: result['browser_errors'].append(str(error)))
  for width in [360,390,1280]:
   await page.set_viewport_size({'width':width,'height':850})
   for route in ['/','/ofertas','/review/redmi-note-14-pro-plus','/comparativo/redmi-note-13-pro-vs-redmi-note-14-pro-plus','/guia/melhores-celulares-ate-1500-reais']:
    await page.goto(BASE+route,wait_until='networkidle',timeout=60000)
    overflow=await page.evaluate('document.documentElement.scrollWidth > innerWidth + 1')
    assert not overflow,(route,width,'horizontal overflow')
    assert await page.locator('h1').count()==1,(route,'h1 count')
    result['layouts'].append({'path':route,'width':width,'horizontalOverflow':overflow})
    if width==390:await page.screenshot(path='work/mobile-'+('home' if route=='/' else route.strip('/').replace('/','-'))+'.png',full_page=False)
   if width<1000:
    await page.goto(BASE+'/review/redmi-note-14-pro-plus',wait_until='networkidle')
    await page.get_by_role('button',name='Abrir menu',exact=True).click()
    assert await page.get_by_role('button',name='Fechar menu',exact=True).get_attribute('aria-expanded')=='true'
    assert not await page.locator('[data-mobile-purchase]').is_visible()
    await page.get_by_role('button',name='Fechar menu',exact=True).click()
    assert await page.locator('[data-mobile-purchase]').is_visible()
    await page.get_by_role('button',name='Buscar no Tech Escolha Certa',exact=True).click()
    assert not await page.locator('[data-mobile-purchase]').is_visible()
    await page.get_by_placeholder('Busque por modelo, marca, orçamento ou perfil...').fill('Galaxy A25 5G vs Redmi Note 13 4G')
    assert await page.get_by_role('option').count()>=1
    await page.keyboard.press('Escape')
  await page.goto(BASE+'/',wait_until='networkidle')
  await page.get_by_role('button',name='Até R$ 2.000',exact=True).click()
  await page.get_by_role('button',name='Jogos e desempenho',exact=True).click()
  assert await page.locator('#escolha-rapida').get_by_role('heading',name='POCO X7 Pro',exact=True).count()==1
  assert await page.locator('#escolha-rapida').get_by_text('preço no teto não confirmado',exact=False).count()>0
  # Inspect real hrefs without clicking any affiliate link.
  await page.goto(BASE+'/ofertas',wait_until='networkidle')
  for model in ['galaxy-a17-5g','redmi-note-15-5g','moto-g86-5g','edge-60-pro','galaxy-s25-fe']:
   card=page.locator('#modelo-'+model)
   assert await card.locator('a[href^="https://link.amazon/"]').count()==1
   assert await card.locator('a[href^="https://meli.la/"]').count()==1
  # Regression: reconcile the five PR #43 models and preserve the previous guide.
  await page.goto(BASE+'/guia/melhores-celulares-ate-1500-reais',wait_until='networkidle')
  for model in ['moto-g86','galaxy-a36','redmi-note-15','moto-g56','galaxy-a17']:
   assert await page.locator('#'+model).count()==1
  for model in ['galaxy-a36','moto-g56']:
   assert await page.locator('#'+model+' a[href^="https://meli.la/"]').count()==0
   assert await page.locator('#'+model+' a[href^="https://link.amazon/"]').count()==0
  g86=page.locator('#moto-g86')
  assert await g86.locator('a[href="https://meli.la/2uZpELs"]').count()==1
  assert await g86.locator('a[href="https://www.amazon.com.br/dp/B0FCYP5FB2?tag=techescolha03-20"]').count()==1
  await page.get_by_text('Referências anteriores preservadas: A25, Note 13 4G, M35, POCO M6 Pro e Moto G84',exact=True).click()
  for name in ['Samsung Galaxy A25 5G','Redmi Note 13 4G','Samsung Galaxy M35 5G','Poco M6 Pro','Motorola Moto G84']:
   assert await page.get_by_role('heading',name=name,exact=True).count()==1
  assert not await page.evaluate('document.documentElement.scrollWidth > innerWidth + 1')
  ids=await page.locator('[id]').evaluate_all('(nodes)=>nodes.map(n=>n.id)')
  assert len(ids)==len(set(ids)), 'Duplicate anchors after guide reconciliation'
  assert not result['browser_errors'],result['browser_errors']
  await browser.close();await request.dispose()
 Path('work/browser-results.json').write_text(json.dumps(result,ensure_ascii=False,indent=2))
 print(json.dumps({'routes':len(result['routes']),'layouts':len(result['layouts']),'browser_errors':result['browser_errors'],'affiliate_clicks':0},ensure_ascii=False))
asyncio.run(main())
