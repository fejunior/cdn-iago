export function initBubble(config) {
  const iframe = document.createElement('iframe')
  iframe.src = `${config.apiHost}/?bot=${config.talkgreen}`
  iframe.style.position = 'fixed'
  iframe.style.bottom = '20px'
  iframe.style.right = '20px'
  iframe.style.width = '400px'
  iframe.style.height = '600px'
  iframe.style.border = 'none'
  iframe.style.borderRadius = '12px'
  iframe.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)'
  iframe.style.zIndex = '9999'
  document.body.appendChild(iframe)
}

export function initPopup(config) {
  const button = document.createElement('button')
  button.innerText = config.label || 'Abrir Chat'
  button.style.position = 'fixed'
  button.style.bottom = '20px'
  button.style.right = '20px'
  button.style.padding = '10px 20px'
  button.style.background = config.buttonColor || '#2e7d32'
  button.style.color = '#fff'
  button.style.border = 'none'
  button.style.borderRadius = '6px'
  button.style.cursor = 'pointer'
  button.style.zIndex = '9998'

  const iframe = document.createElement('iframe')
  iframe.src = `${config.apiHost}/?bot=${config.talkgreen}`
  iframe.style.position = 'fixed'
  iframe.style.top = '50%'
  iframe.style.left = '50%'
  iframe.style.transform = 'translate(-50%, -50%)'
  iframe.style.width = '500px'
  iframe.style.height = '600px'
  iframe.style.border = 'none'
  iframe.style.borderRadius = '12px'
  iframe.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)'
  iframe.style.zIndex = '9999'
  iframe.style.display = 'none'

  button.onclick = () => {
    iframe.style.display = iframe.style.display === 'none' ? 'block' : 'none'
  }

  document.body.appendChild(button)
  document.body.appendChild(iframe)
}

export function initStandard(config) {
  const container = config.container || document.getElementById('talkgreen-container')
  if (!container) {
    console.error('Elemento container não encontrado.')
    return
  }

  const iframe = document.createElement('iframe')
  iframe.src = `${config.apiHost}/?bot=${config.talkgreen}`
  iframe.style.width = '100%'
  iframe.style.height = config.height || '500px'
  iframe.style.border = 'none'
  iframe.style.borderRadius = '8px'
  container.appendChild(iframe)
}
