// how did alexey get his seperate script files to talk to one another? Did he have to do that?

function render () {
  // window.sessionStorage.clear()
  console.log('____RENDER CALL____')
  const v = getView()
  console.log('render got view')
  const HTML = renderHeader(v) + renderMain(v) + renderFooter(v)
  setTimeout(() => document.body.innerHTML = HTML, 5000)
}

function getView() {
  const view = window.sessionStorage.getItem('view')
  return view || 'home'
}

function renderHeader(v) {
  console.log('renderHeader')
  return `
  <div id="header" style="width:100%;height:100px;background-color:#d7c176;">
  hi Im header
  </div>`
}
function renderMain(v) {
  console.log('renderMain')
  return `
  <div id="main" style="width:100%;height:500px;background-color:#f6da94;">
  hi Im main view is ${v} ${button}
  </div>`
}
function renderFooter(v) {
  console.log('renderFooter')
  return `
  <div id="footer" style="width:100%;height:100px;background-color:#d7c176;">
    hi Im footer
  </div>`
}

var button = `<button onclick="changeView('next')">click me!</button>`

function changeView(s) {
  window.sessionStorage.setItem('view', s)
  render()
}