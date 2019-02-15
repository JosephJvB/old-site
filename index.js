// neon sign interval functions
// function name = name
// function interval = name + 'er'


// consts
const TXT = document.querySelector('div[id=main]>h1');
const YELLOW = 'goldenrod'
const PINK = '#f442bc'
const BLUE = '#3CF6F6'
const OFF = 'rgb(59, 61, 66)'
const DELAY = 600
const COLS = [YELLOW, PINK, BLUE]

let tickers = []

TXT.addEventListener('click', () => {
  if(tickers.length) {
    killAll()
    TXT.innerHTML = 'Joe van Bo'
    TXT.style.color = 'black'
  } else {
    // start again random colour
    const r = Math.floor(COLS.length * Math.random())
    blink(cols[r])
  }
})

function blink (COL = PINK) {
    let i = 0
    TXT.style.color = COL
    window.blinker = setInterval(() => {
      TXT.style.color = i % 2 ? COL : OFF
      i++
    }, DELAY + 300)
    tickers.push('blinker')
}

function wave (COL = YELLOW) {
  let letters = TXT.innerHTML
  let i = 0
  tickers.push('waver')
  window.waver = setInterval(() => {
    if(i === letters.length) {
      endSequence('waver')
      TXT.innerHTML = 'Joe van Bo'
      setTimeout(() => TXT.style.color = COL, DELAY)
      setTimeout(() => TXT.style.color = OFF, DELAY * 3)
      setTimeout(() => blink(COL), DELAY * 4)
      return
    }
    if(letters[i] === ' ') i++
    TXT.innerHTML = `${letters.substring(i-i, i)}<span style="color:${COL};">${letters.substring(i, i+1)}</span>${letters.substring(i+1, letters.length)}`
    i++
  }, DELAY)
}


function endSequence (name) {
  clearInterval(window[name])
  window[name] = 0
  tickers = tickers.filter(t => t !== name)
}

function killAll () {
  tickers.forEach(t => {
    clearInterval(window[t])
    window[t] = 0
  })
  tickers = []
}
