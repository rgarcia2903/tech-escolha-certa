# Importação local de fotografias reais

Alternativa ao download pelo ambiente: obter os arquivos das páginas documentadas em um computador com acesso autorizado e transferir os originais para `work/fotos/`. Isso não exige alterar proxy, usar espelhos ou depender de hotlink. O importador opera sem rede e não gera fotografias.

As três candidatas estão em `docs/photo-candidates.json`, com origem e CC BY-SA 4.0. Antes da transferência, confira a licença vigente, autoria e histórico na página original. Guarde essa evidência e o original para revisão.

Requer Python 3 e Pillow. Exemplo:

```sh
python scripts/import-product-photo.py --product redmi-note-15-5g --file work/fotos/REDMI_Note_15_5G_back.jpg
```

Repita para `galaxy-a36-5g` e `edge-60-pro`, usando os arquivos correspondentes. O script produz WebP de até 960 px, aplica orientação EXIF e registra dimensões e SHA-256 do original e do derivado em `src/lib/licensed-product-photos.json`. Não sobrescreve uma importação existente e mantém `status: "pending"`.

Para habilitar, um revisor precisa abrir o original e o WebP e confirmar visualmente o modelo exato. A licença não comprova essa identidade. Confira em particular a distinção 4G/5G/Pro e não trate a cor ou foto como comprovação de RAM, armazenamento ou vendedor do anúncio. Registre `reviewedBy`, `reviewedAt` (data ISO), e `permissionEvidence` (origem, licença e evidência da revisão); só então altere `status` para `approved`. Não aprove arquivos gerados por IA. Autor, origem, licença e alterações aparecem na legenda; o derivado permanece sob CC BY-SA 4.0.

Execute `npm test`, `python -m unittest discover -s tests -p 'test_photo_import.py'`, `npx tsc --noEmit`, `npm run check:links`, `npm run build` e `python scripts/visual-smoke.py` com servidor local ativo. Os testes verificam os hashes, procedência, identidade comercial e os 26 links. Verifique as fotos aprovadas no navegador em celular e desktop: `complete && naturalWidth > 0`. Nenhuma aprovação ou contagem substitui essa verificação. Falhas de imagem mostram “Foto indisponível”.

A revisão das fotografias e a aprovação de publicação são etapas distintas. Esta entrega não autoriza merge ou deploy.
