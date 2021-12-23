import { storageRemove } from '../utils/localStorage.js'

export default class CartList {

  constructor(purchaseList, cb) {
    this.list = purchaseList
    this.deletePurchase = cb
    this.cart = document.createElement('div')
    this.cartTitle = document.createElement('div')
    this.listContainer = document.createElement('div')
  }

  createPurchases (newList) {
    for (let i = 0; i < newList.length; i++) {
      const listItem = document.createElement('div')
      const deleteBtn = document.createElement('button')
      const itemText = document.createElement('p')
      deleteBtn.textContent = 'Delete'
      deleteBtn.className = 'cart-item__dlt-btn'
      listItem.className = 'cart-item'
      itemText.className = 'cart-item__text'
      itemText.innerText = `${newList[i].name} - $${newList[i].price}`
      listItem.append(itemText)
      listItem.append(deleteBtn)
      this.listContainer.prepend(listItem)
    }
  }

  updatePurchases (updatedList) {
    this.listContainer.innerHTML = ''
    this.createPurchases(updatedList)
  }

  deleteListItem (event) {
    if (event.target.className === 'cart-item__dlt-btn') {
      const targetP = event.target.closest('div').firstChild.textContent
      const itemData = targetP.split(' - $')
      const objToDelete = {name: itemData[0], price: itemData[1]}
      storageRemove(objToDelete)
      this.deletePurchase(objToDelete)
    }
  }

  render () {
    this.cart.className = 'cart-list'
    this.cartTitle.className = 'head'
    this.cartTitle.innerText = 'Корзина'
    this.listContainer.className = 'list-container'
    this.listContainer.addEventListener('click', this.deleteListItem.bind(this))
    this.createPurchases(this.list)
    this.cart.append(this.cartTitle, this.listContainer)
    return this.cart
  }
}
