export default class CartList {

  constructor(purchaseList) {
    this.list = purchaseList
    this.cart = document.createElement('div')
    this.cartTitle = document.createElement('div')
    this.listContainer = document.createElement('div')
  }

  createPurchases (newList) {
    for (let i = 0; i < newList.length; i++) {
      const listItem = document.createElement('div')
      listItem.className = 'cart-item'
      listItem.innerText = `${newList[i].name} - $${newList[i].price}`
      this.listContainer.prepend(listItem)
    }
  }

  updatePurchases (updatedList) {
    this.listContainer.innerHTML = ''
    this.createPurchases(updatedList)
  }

  render () {
    this.cart.className = 'cart-list'
    this.cartTitle.className = 'head'
    this.cartTitle.innerText = 'Корзина'
    this.listContainer.className = 'list-container'
    this.createPurchases(this.list)
    this.cart.append(this.cartTitle, this.listContainer)
    return this.cart
  }
}
