// anything I define in any script file becomes a globally available thing ay??

document.getElementById('header').addEventListener('click', () => {
  const images = [
    'sxc-joe.png',
    'joe-and-steve-tandem.jpg'
  ]
  const banner = document.getElementById('banner-img')
  const currentIdx = images.indexOf(banner.src.split('images/')[1])
  const nextIdx = currentIdx + 1 < images.length ? currentIdx + 1 : 0
  banner.src = 'images/' + images[nextIdx]
})

function render () {
  // window.sessionStorage.clear()
  console.log('____RENDER CALL____')
  const v = getView()
  const HTML = renderHeader(v) + renderMain(v) + renderFooter(v)
  document.body.innerHTML = HTML
}

function getView() {
  const view = window.sessionStorage.getItem('view')
  return view || 'home'
}

function renderHeader(v) {
  return `
  <div id="header">
  </div>
  `
}
function renderMain(v) {
  return `
  <div id="main">
  </div>
  `
}
function renderFooter(v) {
  return `
  <div id="footer">
  </div>
  `
}

var button = `<button onclick="changeView('next')">click me!</button>`

function changeView(s) {
  window.sessionStorage.setItem('view', s)
  render()
}