# IAGO CDN

Este repositório contém os scripts públicos para integração do {{secret}} em páginas web usando iframe.

## Uso com jsDelivr

### 📦 CDN

Importe diretamente:

```html
<script type="module">
  import { initBubble, initPopup, initStandard } from 'https://cdn.jsdelivr.net/gh/SEU-USUARIO/talkgreen-cdn@v1.0.0/dist/talkgreen.js'

  initBubble({
    apiHost: 'https://talkgreen.site',
    talkgreen: '123'
  })
</script>
