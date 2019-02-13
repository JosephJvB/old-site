// neon sign blinker

const TXT = document.querySelector('div[id=main]>h1')

TXT.addEventListener('click', () => {
  // why does this.TICK exist, blinker.TICK does not work, I thought if I was inside a function, this binds to that function ?
  if(this.TICK) {
    killIntervals()
    TXT.style.color = 'black'
  } else {
    blinker()
  }
})

function blinker() {
  let i = 0
  TXT.style.color = '#f442bc'
  this.TICK = setInterval(() => {
    TXT.style.color = i % 2 ? '#f442bc' : '#ba87aa'
    i++
  }, 1000)
}

function killIntervals () {
  // kill blinker
  clearInterval(this.TICK)
  this.TICK = 0
}