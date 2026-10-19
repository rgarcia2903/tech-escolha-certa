import asyncio,json,re,hashlib
from pathlib import Path
from urllib.parse import urlsplit
from playwright.async_api import async_playwright
OUT=Path('work/entrega')
(OUT/'capturas').mkdir(parents=True, exist_ok=True)
BASE='http://127.0.0.1:8080'
IDS=['galaxy-a17-5g','galaxy-a36-5g','redmi-note-15-5g','edge-60-pro','moto-g56-5g','moto-g86-5g','galaxy-s25-fe']
result={'reviews':[],'storefront':[],'affiliateClicks':0,'errors':[],'assets':[],'navigation':[]}
async def decode(loc):
 return await loc.evaluate_all('async els => {for(const i of els){i.loading="eager";await i.decode();if(!i.naturalWidth)throw Error(i.src)}return els.map(i=>({src:new URL(i.src).pathname,width:i.naturalWidth,height:i.naturalHeight}))}')
async def main():
 async with async_playwright() as p:
  browser=await p.chromium.launch(executable_path='/usr/bin/chromium',args=['--no-sandbox','--disable-dev-shm-usage'])
  context=await browser.new_context()
  await context.route('**/*',lambda r:r.continue_() if urlsplit(r.request.url).hostname in ['127.0.0.1','localhost'] else r.abort())
  page=await context.new_page();page.on('pageerror',lambda e:result['errors'].append(str(e)))
  for item in json.loads(Path('docs/importacao-galerias-2026-10-19/arquivos-importados.json').read_text()):
   response=await context.request.get(BASE+'/'+item['path'].removeprefix('public/'))
   assert response.status==200 and hashlib.sha256(await response.body()).hexdigest()==item['sha256']
   result['assets'].append({'path':item['path'],'status':200,'sha256Matches':True})
  for width,label in [(1440,'desktop'),(390,'celular')]:
   await page.set_viewport_size({'width':width,'height':1000})
   for id in IDS:
    path='/review/'+id
    response=await page.goto(BASE+path,wait_until='networkidle');assert response.status==200
    assert await page.locator('h1').count()==1
    assert await page.locator('link[rel=canonical]').get_attribute('href')=='https://techescolhacerta.com.br'+path
    assert await page.locator('meta[name=description]').get_attribute('content')
    gallery=page.locator('section[aria-label^="Galeria de fotos"]');await gallery.scroll_into_view_if_needed()
    thumbs=gallery.get_by_role('button',name=re.compile('Ver imagem '));count=await thumbs.count();assert count>=1
    images=await decode(gallery.locator('img'))
    for i in range(count):
     await thumbs.nth(i).click();assert await thumbs.nth(i).get_attribute('aria-pressed')=='true'
     await decode(gallery.locator('img').first)
    await thumbs.first.click()
    if count>1:
     await gallery.get_by_role('button',name='Foto anterior',exact=True).click();assert await thumbs.last.get_attribute('aria-pressed')=='true'
     await gallery.get_by_role('button',name='Próxima foto',exact=True).click();assert await thumbs.first.get_attribute('aria-pressed')=='true'
    await gallery.get_by_role('button',name='Ampliar foto').click();dialog=page.get_by_role('dialog');await dialog.wait_for(state='visible');await decode(dialog.locator('img'))
    if count>1:
     await page.keyboard.press('ArrowRight');await decode(dialog.locator('img'))
     await page.keyboard.press('ArrowLeft');await decode(dialog.locator('img'))
    if not (OUT/'capturas'/f'{id}-{label}-ampliada.png').exists(): await page.screenshot(path=str(OUT/'capturas'/f'{id}-{label}-ampliada.png'))
    await page.keyboard.press('Escape');await dialog.wait_for(state='detached')
    await gallery.get_by_role('button',name='Ampliar foto').click();await page.get_by_role('button',name='Fechar ampliação').click()
    links=await page.locator('a[data-store]').evaluate_all('(els)=>els.map(e=>({url:e.href,rel:e.rel,id:e.dataset.offerId}))')
    for link in links:assert 'sponsored' in link['rel'] and 'noopener' in link['rel']
    result['affiliateClicks']+=await page.locator('a[data-store]').evaluate_all('(els)=>{for(const e of els){e.addEventListener("click",event=>event.preventDefault());e.click()}return els.length}')
    assert not await page.evaluate('document.documentElement.scrollWidth>innerWidth+1')
    if not (OUT/'capturas'/f'{id}-{label}.png').exists(): await page.screenshot(path=str(OUT/'capturas'/f'{id}-{label}.png'),full_page=True)
    result['reviews'].append({'path':path,'viewport':width,'galleryImages':count,'allDecoded':True,'controlsPassed':True,'seoPassed':True,'storeButtons':len(links),'overflow':False})
   for path,name in [('/','home'),('/ofertas','ofertas'),('/celulares','celulares')]:
    await page.goto(BASE+path,wait_until='networkidle')
    models=[]
    for id in IDS:
     loc=page.locator(f'[data-visual-product="{id}"] [data-product-media] img')
     if await loc.count():
      imgs=await decode(loc)
      expected=f'/images/products/gallery/{id}/01-principal.webp'
      if id!='galaxy-a36-5g':assert all(i['src']==expected for i in imgs)
      models.append(id)
    assert not await page.evaluate('document.documentElement.scrollWidth>innerWidth+1')
    result['affiliateClicks']+=await page.locator('a[data-store]').evaluate_all('(els)=>{for(const e of els){e.addEventListener("click",event=>event.preventDefault());e.click()}return els.length}')
    if not (OUT/'capturas'/f'{name}-{label}.png').exists(): await page.screenshot(path=str(OUT/'capturas'/f'{name}-{label}.png'),full_page=True)
    result['storefront'].append({'path':path,'viewport':width,'primaryImagesPassed':models,'overflow':False})
   (OUT/'testes-navegador-progresso.json').write_text(json.dumps(result,indent=2,ensure_ascii=False))
   await page.goto(BASE+'/ofertas',wait_until='networkidle')
   link=page.locator('a[href="/review/galaxy-a17-5g"]').first;await link.click();await page.wait_for_url('**/review/galaxy-a17-5g');assert await page.locator('h1').count()==1
   await page.locator('main').get_by_role('link',name='Celulares',exact=True).first.click();await page.wait_for_url('**/celulares')
   await page.wait_for_load_state('networkidle')
   await page.wait_for_timeout(300)
   if width==390:
    await page.get_by_role('button',name='Abrir menu',exact=True).click();await page.get_by_role('button',name='Fechar menu',exact=True).wait_for(state='visible');await page.get_by_role('button',name='Fechar menu',exact=True).click()
   result['navigation'].append({'viewport':width,'storefrontToReviewToCatalog':True,'mobileMenu':width==390})
  assert not result['errors'],result['errors']
  await browser.close()
  (OUT/'testes-navegador.json').write_text(json.dumps(result,indent=2,ensure_ascii=False))
  print(json.dumps({'reviews':len(result['reviews']),'assets':len(result['assets']),'storefront':len(result['storefront']),'clicks':result['affiliateClicks'],'errors':result['errors']}))
asyncio.run(main())
