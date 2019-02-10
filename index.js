// how did alexey get his seperate script files to talk to one another? Did he have to do that?
// edit comment to hope that when I push to master next time, the setTimeout is gone 😡

function render () {
  // window.sessionStorage.clear()
  console.log('____RENDER CALL____')
  const v = getView()
  const HTML = renderHeader(v) + renderMain(v) + renderFooter(v)
  document.body.innerHTML = HTML // change in source please
}

function getView() {
  const view = window.sessionStorage.getItem('view')
  return view || 'home'
}

function renderHeader(v) {
  return `
  <div id="header" style="width:100%;height:100px;background-color:#d7c176;">
  hi Im header
  </div>`
}
function renderMain(v) {
  return `
  <div id="main" style="width:100%;height:500px;background-color:#f6da94;">
  hi Im main view is ${v} ${button}
  </div>`
}
function renderFooter(v) {
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