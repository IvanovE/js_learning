class Product {
  constructor(title, image, price, description) {
    this.title = title
    this.imageUrl = image
    this.price = price
    this.description = description
  }
}

class Component {
  constructor(renderHookId, shouldRender = true) {
    this.hookId = renderHookId
    if (shouldRender) {
      this.render()
    }
  }

  render() {}

  createRootElement(tag, cssClass, attributes) {
    const rootElement = document.createElement(tag)
    if (cssClass) {
      rootElement.className = cssClass
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value)
      }
    }
    document.querySelector(this.hookId).append(rootElement)
    return rootElement
  }
}

class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName
    this.value = attrValue
  }
}

class ShoppingCart extends Component {
  items = []

  set cartItems(value) {
    this.items = value
    this.totalOutput.innerHTML = `<h2 id="total-output">Total: \$${this.totalAmount.toFixed(2)}</h2>`
  }

  get totalAmount() {
    return this.items.reduce((prevValue, currItem) =>
        prevValue + currItem.price,
      0
    )
  }

  constructor(renderHookId) {
    super(renderHookId);
  }

  addProduct(product) {
    const updatedItems = [...this.items]
    updatedItems.push(product)
    this.cartItems = updatedItems
  }

  orderProducts() {
    console.log('Ordering...')
    console.log(this.items)
  }

  render() {
    const cartEl = this.createRootElement('div', 'cart')
    cartEl.innerHTML = `
      <h2 id="total-output">Total: \$${0}</h2>
      <button>Order Now!</button>
    `
    const orderButton = cartEl.querySelector('button')
    orderButton.addEventListener('click', () => this.orderProducts())
    this.totalOutput = cartEl.querySelector('#total-output')
  }
}

class ProductItem extends Component {
  constructor(product, renderHookId) {
    super(renderHookId, false)
    this.product = product
    this.render()
  }

  addToCartListener() {
    App.addProductToCart(this.product)
  }

  render() {
    const prodEl = this.createRootElement('div', 'product-item')
    prodEl.innerHTML = `
        <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}">
            <div class="product-item__content">
                <h2>${this.product.title}</h2>
                <h3>\$${this.product.price}</h3>
                <p>${this.product.description}</p>
                <button id="add-to-cart-btn" class="add-to-cart-btn">Add to cart</button>
            </div>
        </div>
      `
    const addToCartButton = prodEl.querySelector('#add-to-cart-btn')
    addToCartButton.addEventListener('click', this.addToCartListener.bind(this))
  }
}

class ProductList extends Component {
  products = []

  constructor(renderHookId) {
    super(renderHookId)
    this.fetchProducts()
  }

  fetchProducts() {
    this.products = [
      new Product('A Pillow', 'assets/images/img.jpg', 19.99, 'Good pillow'),
      new Product('Fish', 'assets/images/img.jpg', 9.99, 'Good fish'),
      new Product('Milk', 'assets/images/img.jpg', 14.99, 'Good Milk'),
      new Product('A carpet', 'assets/images/img.jpg', 39.99, 'Good carpet')
    ]
    this.renderProducts()
  }

  renderProducts() {
    for (const prod of this.products) {
      new ProductItem(prod, '#prod-list')
    }
  }

  render() {
    this.createRootElement('div', 'product-list',
      [new ElementAttribute('id', 'prod-list')]
    )
    if (this.products && this.products.length > 0) {
      this.renderProducts()
    }
  }
}


class Shop {
  constructor() {
    this.render()
  }

  render() {
    this.cart = new ShoppingCart('#app')
    new ProductList('#app')
  }
}

class App {
  static cart

  static init() {
    const shop = new Shop()
    this.cart = shop.cart
  }

  static addProductToCart(product) {
    this.cart.addProduct(product)
  }
}

App.init()
