const convertBtn = document.querySelector('#convert')
const textMessage = document.querySelector('#textarea')


const speak = (text) => {
  const message = new SpeechSynthesisUtterance()
  message.lang = 'ru-RU'
  message.text = text
  window.speechSynthesis.speak(message)
}

convertBtn.addEventListener('click', () => {
  speak(textMessage.value)
})
