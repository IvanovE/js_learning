import { Component } from '../core/component'

export class HeaderComponent extends Component {
  constructor(id) {
    super(id)
  }

  init() {
    if (localStorage.getItem('visited')) { this.hide() }
    const startBtn = this.$el.querySelector('#get-start')
    startBtn.addEventListener('click', btnHandler.bind(this))
  }
}

function btnHandler() {
  localStorage.setItem('visited', JSON.stringify(true))
  this.hide()
}
