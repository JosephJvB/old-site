// neon sign interval functions
// function name = name
// function interval = name + 'er'
const TXT = document.querySelector('div[id=main]>h1');

let tickers = []

TXT.addEventListener('click', () => {
  if(window.blinker) {
    clearInterval(window.blinker)
    window.blinker = 0
    tickers = tickers.filter(t => t !== 'blink')
    TXT.style.color = 'black'
  } else {
    blink()
  }
})

function blink () {
    let i = 0
    TXT.style.color = '#f442bc'
    window.blinker = setInterval(() => {
      TXT.style.color = i % 2 ? '#f442bc' : '#ba87aa'
      i++
    }, 900)
    tickers.push('blink')
}

function wave () {
  // do I ever need this check??
  if(window.waver) return clearInterval(window.waver)
  let letters = TXT.innerHTML
  let i = 0
  window.waver = setInterval(() => {
    if(i === letters.length) {
      clearInterval(window.waver)
      window.waver = 0
      TXT.innerHTML = 'Joe van Bo'
      setTimeout(() => TXT.style.color = 'goldenrod', 600)
      setTimeout(() => TXT.style.color = 'black', 1800)
      setTimeout(blink, 2400)
      return
    }
    if(letters[i] === ' ') i++
    TXT.innerHTML = `${letters.substring(i-i, i)}<span style="color:goldenrod;">${letters.substring(i, i+1)}</span>${letters.substring(i+1, letters.length)}`
    i++
  }, 600)
}


// maybe change to a kill interval by name thing
function killIntervals () {
  // kill all tickers
  tickers.forEach(t => {
    clearInterval(window[t])
    window[t] = 0
  })
  tickers = []
}
