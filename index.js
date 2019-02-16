// neon sign interval functions
// function name = name
// function interval = name + 'er'

const MAIN = document.getElementById('main')
const TXT = document.querySelector('div[id=main]>h1')
const LETTERS = 'Joe van Bo'
const RED = '#d40000'
const ORANGE = '#fa7427'
const YELLOW = '#e2cc05'
const GREEN = '#32d400'
const TEAL = '#03d4a0'
const BLUE = '#3e2be7'
const PURPLE = '#9b00a0'
const PINK = '#f442bc'
const OFF = '#3b3d42'
const DELAY = 600
const COLS = [RED, ORANGE, YELLOW, GREEN, TEAL, BLUE, PURPLE, PINK]

let tickers = []
let savedRainbow;

MAIN.addEventListener('click', () => {
  if(tickers.find(t => t === 'rainbower')) {
    // freeze rainbow in place
    endSequence('rainbower')
    flicker()
  } else {
    // if frozen, restart
    rainbow(savedRainbow)
  }
})

MAIN.addEventListener('dblclick', () => {
  killAll()
})

function rainbow (saved, limit) {
  let roygbiv = saved || COLS
  tickers.push('rainbower')
  // control the flow
  let offset = 0
  let cycle = 0
  window.rainbower = setInterval(() => {
    if(offset === 8) {
      if(limit && cycle === limit) { // rainbow forever unless given a limit
        endSequence('rainbower')
        return
      } else {
        offset = 0
        cycle++
      }
    }
    // arrange next colour set based on offset
    let nextCols = []
    for(let i = 0; i < roygbiv.length; i++) {
      const n = i - offset < 0 ? roygbiv.length + (i - offset) : i - offset
      nextCols.push(roygbiv[n])
    }
    savedRainbow = nextCols
    // apply next colour set to letters, dodge spaces
    let str = ''
    let spaces = 0
    for(let j = 0; j < LETTERS.length; j++) {
      if(LETTERS[j] === ' ') {
        str+= ' '
        spaces++
      } else {
        const s = `span id="letter-${j}" style="color:${nextCols[j - spaces]}"`
        str+= `<${s}>${LETTERS[j]}</span>`
      }
    }
    TXT.innerHTML = str
    offset++
  }, DELAY / 3)
}

// colour each letter, then start the rainbow!
function static () {
  let str = ''
  let spaces = 0
  for(let j = 0; j < LETTERS.length; j++) {
    if(LETTERS[j] === ' ') {
      str+= ' '
      spaces++
    }
    const s = `span id="letter-${j}" style="color:${COLS[j - spaces]}"`
    str+= `<${s}>${LETTERS[j]}</span>`
  }
  TXT.innerHTML = str
  flicker()
  setTimeout(rainbow, 1800)
}

// cheap thrills
function flicker () {
  const idx = Math.floor(LETTERS.length * Math.random())
  const letter = document.getElementById(`letter-${idx}`)
  const init = letter.style.color
  // could select a space, I guess 1 in 5 chance that you dont get a flicker is fun
  // todo: randomise amount of timeouts and timeout delay too
  if(letter) {
    letter.style.color = OFF
    setTimeout(() => letter.style.color = init, 100)
    setTimeout(() => letter.style.color = OFF, 400)
    setTimeout(() => letter.style.color = init, 520)
    setTimeout(() => letter.style.color = OFF, 750)
    setTimeout(() => letter.style.color = init, 1750)
  }
}


// belonged to an era where we were ending a few differenct sequences, rather than just rainbow
function endSequence (name) {
  // clear intervals but dont reset text
  clearInterval(window[name])
  window[name] = 0
  tickers = tickers.filter(t => t !== name)
}

function killAll () {
  // reset text, no more coloured spans
  TXT.innerHTML = LETTERS
  tickers.forEach(t => {
    clearInterval(window[t])
    window[t] = 0
  })
  tickers = []
}

/* ARCHIVE:
accidental chunk rainbow:
created in the process of chasing the rainbow 
*/
// accidental, not bad though
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

/******************************************************************
// below here were the hardy soldiers who brought us here today
// thank you soldiers, lest we forget 🙇
// let no prototype be forgotten, we may forget but version control will hold your memories forever
*******************************************************************/

/*
// light joe -> van -> bo
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

// light colours one and time from start to end
function wave (COL = YELLOW) {
  let letters = TXT.innerHTML
  let i = 0
  tickers.push('waver')
  window.waver = setInterval(() => {
    if(i > letters.length) {
      endSequence('waver')
      blink(COL)
      return  
    }
    if(letters[i] === ' ') i++
    TXT.innerHTML = `${letters.substring(i-i, i)}<span style="color:${COL};">${letters.substring(i, i+1)}</span>${letters.substring(i+1, letters.length)}`
    i++
  }, DELAY / 4)
}

// flash text diff colours
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
*/