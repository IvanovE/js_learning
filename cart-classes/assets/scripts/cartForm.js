export default class CartForm {

  constructor(totalPrice, cb) {
    this.totalPrice = totalPrice
    this.createPurchase = cb
    this.cartEnter = document.createElement('div')
    this.headTotal = document.createElement('div')
    this.inputText = document.createElement('input')
    this.inputNum = document.createElement('input')
    this.btn = document.createElement('button')
  }

  addPurchaseBtn (event) {
    event.preventDefault()
    const inputText = document.querySelector('#input-text')
    const inputNum = document.querySelector('#input-num')
    if (!inputText.value || !inputNum.value) {
      alert('Enter data!')
    } else {
      const objData = {name: inputText.value, price: +inputNum.value}
      this.createPurchase(objData)
    }
    this.inputText.value = ''
    this.inputNum.value = ''
  }

  createTotalPrice (totalPrice) {
    this.headTotal.innerText = `Итого выходит: ${totalPrice}`
  }

  updateTotalPrice (newTotalPrice) {
    this.headTotal.innerHTML = ''
    this.createTotalPrice(newTotalPrice)
  }

  render () {
    this.cartEnter.className = 'cart-enter'
    this.headTotal.className = 'head'
    this.inputText.className = 'input'
    this.inputText.setAttribute('id', 'input-text')
    this.inputNum.className = 'input'
    this.inputText.type = 'text'
    this.inputText.placeholder = 'Что покупаем?'
    this.inputNum.type = 'number'
    this.inputNum.setAttribute('id', 'input-num')
    this.inputNum.placeholder = 'А сколько стоит?'
    this.btn.className = 'btn'
    this.btn.textContent = 'Добавить в корзину'
    this.btn.addEventListener('click', this.addPurchaseBtn.bind(this))
    this.createTotalPrice(this.totalPrice)
    this.cartEnter.append(this.headTotal, this.inputText, this.inputNum, this.btn)
    return this.cartEnter
  }
}
