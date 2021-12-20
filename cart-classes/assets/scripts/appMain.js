import CartForm from './cartForm.js'
import CartList from './cartList.js'


export default class App {

  constructor() {
    this.state = {
      cart: [],
      totalPrice: 0
    }
    this.list = new CartList(this.state.cart)
    this.form = new CartForm(this.state.totalPrice, this.createPurchase.bind(this))
    this.mainContainer = document.createElement('div')
  }

  createPurchase (newPurchase) {
    this.state.cart.push(newPurchase)
    this.state.totalPrice += newPurchase.price
    this.list.updatePurchases(this.state.cart)
    this.form.updateTotalPrice(this.state.totalPrice)
  }

  render() {
    this.mainContainer.className = 'container'
    const [list, form] = [this.list.render(), this.form.render()]
    this.mainContainer.append(form, list)
    document.body.append(this.mainContainer)
  }
}
