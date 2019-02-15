// neon sign interval functions
// function name = name
// function interval = name + 'er'

const TXT = document.querySelector('div[id=main]>h1');
const YELLOW = 'goldenrod'
const PINK = '#f442bc'
const BLUE = '#3CF6F6'
const OFF = 'rgb(59, 61, 66)'
const DELAY = 600
const COLS = [YELLOW, PINK, BLUE]

let tickers = []

TXT.addEventListener('click', () => {
  console.log('lcick', tickers)
  if(tickers.length) {
    // stop
    killAll()
  } else {
    // start again random colour
    const r = Math.floor(COLS.length * Math.random())
    wave(COLS[r])
  }
})

function blink (COL = PINK) {
    let i = 0
    TXT.style.color = COL
    tickers.push('blinker')
    window.blinker = setInterval(() => {
      if(i === 2) {
        endSequence('blinker')
        chunk(COL)
        return
      }
      TXT.style.color = i % 2 ? COL : OFF
      i++
    }, DELAY + 300)
}

function wave (COL = YELLOW) {
  let letters = TXT.innerHTML
  let i = 0
  tickers.push('waver')
  window.waver = setInterval(() => {
    if(i === letters.length) {
      endSequence('waver')
      blink(COL)
      return
    }
    if(letters[i] === ' ') i++
    TXT.innerHTML = `${letters.substring(i-i, i)}<span style="color:${COL};">${letters.substring(i, i+1)}</span>${letters.substring(i+1, letters.length)}`
    i++
  }, DELAY / 4)
}

function chunk (COL = YELLOW) {
  let i = 0
  tickers.push('chunker')
  // this is not very smart but it works ay?
  window.chunker = setInterval(() => {
    const s = `span style="color:${COL}"`
    switch(i) {
      case 0: {
        TXT.innerHTML = `<${s}>Joe</span> van Bo`
        return i++
      }
      case 1: {
        TXT.innerHTML = `Joe <${s}>van</span> Bo`
        return i++
      }
      case 2: {
        TXT.innerHTML = `Joe van <${s}>Bo</span>`
        return i++
      }
      default: {
        endSequence('chunker')
        wave(COL)
        return
      } 
    }
  }, DELAY)
}


function endSequence (name) {
  // reset text before starting next sequence
  TXT.style.color = OFF
  TXT.innerHTML = 'Joe van Bo'
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
  TXT.style.color = OFF
  TXT.innerHTML = 'Joe van Bo'
}
