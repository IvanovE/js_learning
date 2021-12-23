import CartList from './cartList.js'
import CartForm from './cartForm.js'
import { storage } from '../utils/localStorage.js'
import { getTotalPrice } from '../utils/getTotalPrice.js'


export default class App {

  constructor() {
    this.state = {
      cart: [],
      totalPrice: 0
    }
    this.init()
    this.createPurchases = this.createPurchase.bind(this)
    this.deletePurchases = this.deletePurchase.bind(this)
    this.list = new CartList(this.state.cart, this.deletePurchases)
    this.form = new CartForm(this.state.totalPrice, this.createPurchases)
    this.mainContainer = document.createElement('div')
  }

  init () {
    this.state.cart = storage()
    this.state.totalPrice = getTotalPrice(this.state.cart)
  }

  deletePurchase (purchaseToDelete) {
    this.state.cart = this.state.cart.filter(item => purchaseToDelete.name !== item.name)
    this.state.totalPrice -= purchaseToDelete.price
    this.list.updatePurchases(this.state.cart)
    this.form.updateTotalPrice(this.state.totalPrice)
  }

  createPurchase (newPurchase) {
    storage(newPurchase)
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
