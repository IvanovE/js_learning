const startGame = document.querySelector('#start-game')
const stopGame = document.querySelector('#stop-game')
const resetGame = document.querySelector('#reset-game')
const playField = document.querySelector('#play-field')
const counterField = document.querySelector('#counter')
const timerField = document.querySelector('#timer')
const colorList = ['#8B0000', '#32CD32', '#20B2AA', '#FF1493', '#FFFF00', '#00BFFF', '#8B008B', '#6A5ACD',
                   '#F4A460', '#2F4F4F', '#9932CC']

let counter = 0
let sec = 0
let min = 0
let hrs = 0
let t

// CLICK ON TARGET EVENT

playField.onclick = event => {
  let target = event.target
  if (target.className !== 'target') return
  counter++
  counterField.innerHTML = `${counter}`
  changeTarget(target)
}

// TIMER

const add = () => {
  sec++
  if (sec >= 60) {
    sec = 0
    min++
    if (min >= 60) {
      min = 0
      hrs++
    }
  }

  timerField.textContent = (hrs > 9 ? hrs : "0" + hrs)
    + ":" + (min > 9 ? min : "0" + min)
    + ":" + (sec > 9 ? sec : "0" + sec)
  timer()
}

const timer = () => {
  t = setTimeout(add, 1000)
}

// CHANGING POSITION, COLOR OF TARGET AND TARGET

const createColor = () => {
  return colorList[(Math.floor(Math.random() * colorList.length))]
}

const changePosition = (target) => {
  target.style.left = Math.random() * 200 + 'px'
  target.style.top = Math.random() * 200 + 'px'
}

const changeTarget = target => {
  target.style.backgroundColor = createColor()
  changePosition(target)
}

// GAME BUTTONS

const gameStart = () => {
  playField.innerHTML = ""
  startGame.removeEventListener('click', gameStart)
  timer()
  const clickerTarget = document.createElement('div')
  clickerTarget.className = 'target'
  clickerTarget.style.backgroundColor = createColor()
  changePosition(clickerTarget)
  playField.appendChild(clickerTarget)
}

const gameStop = () => {
  playField.innerHTML = ""
  clearTimeout(t)
  startGame.addEventListener('click', gameStart)
}

const gameReset = () => {
  playField.innerHTML = ""
  counterField.innerHTML = '0'
  counter = 0
  timerField.textContent = '00:00:00'
  sec = 0
  min = 0
  hrs = 0
  clearTimeout(t)
  startGame.addEventListener('click', gameStart)
}

startGame.addEventListener('click', gameStart)
stopGame.addEventListener('click', gameStop)
resetGame.addEventListener('click', gameReset)
