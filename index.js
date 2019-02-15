// neon sign interval functions
// function name = name
// function interval = name + 'er'

const TXT = document.querySelector('div[id=main]>h1');
const RED = '#d40000'
const ORANGE = '#fa7427'
const YELLOW = '#e2cc05'
const GREEN = '#32d400'
const TEAL = '#1cf8c1'
const BLUE = '#3e2be7'
const PURPLE = '#9b00a0'
const PINK = '#f442bc'
const OFF = 'rgb(59, 61, 66)'
const DELAY = 600
const COLS = [RED, ORANGE, YELLOW, GREEN, TEAL, BLUE, PURPLE, PINK]

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

function rainbow (limit = 2) {
  const letters = TXT.innerHTML
  tickers.push('rainbower')
  // control the flow
  let offset = 0
  let cycle = 0
  window.rainbower = setInterval(() => {
    if(offset === 8) {
      if(cycle === limit) {
        endSequence('rainbower')
        return
      } else {
        offset = 0
        cycle++
      }
    }
    // arrange next colour set based on offset
    let nextCols = []
    for(let i = 0; i < COLS.length; i++) {
      const n = i - offset < 0 ? COLS.length + (i - offset) : i - offset
      nextCols.push(COLS[n])
    }
    // apply next colour set to letters, dodge spaces
    let str = ''
    let spaces = 0
    for(let j = 0; j < letters.length; j++) {
      if(letters[j] === ' ') {
        str+= ' '
        spaces++
      }
      const s = `span style="color:${nextCols[j - spaces]}"`
      str+= `<${s}>${letters[j]}</span>`
    }
    TXT.innerHTML = str
    offset++
  }, 200)
}

// function static () {
//   const letters = TXT.innerHTML
//   let str = ''
//   let spaces = 0
//   for(let j = 0; j < letters.length; j++) {
//     if(letters[j] === ' ') {
//       str+= ' '
//       spaces++
//     }
//     const s = `span style="color:${COLS[j - spaces]}"`
//     str+= `<${s}>${letters[j]}</span>`
//   }
//   TXT.innerHTML = str
// }


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


/* ARCHIVE:
accidental chunk rainbow: 
*/
function rainbowChunk () {
  const letters = TXT.innerHTML
  tickers.push('rainbowChunker')
  let i = letters.length
  window.rainbowChunker = setInterval(() => {
    if(i === 20) {
      endSequence('rainbowChunker')
      return
    }
    let str = ''
    let spaces = 0
    for(let j = 0; j < letters.length; j++) {
      if(letters[j] === ' ') {
        str+= ' '
        spaces++
      } else {
        const y = i - letters.length
        const x = spaces ? y - spaces : y
        const s = `span style="color:${COLS[x]}"`
        str += `<${s}>${letters[j]}</span>`
      }
    }
    TXT.innerHTML = str
    i++
  }, 200)
}
