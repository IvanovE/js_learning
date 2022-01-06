import { Component } from "../core/component"


export class ModalComponent extends Component {
  constructor(id) {
    super(id)
    this.backdrop = document.getElementById('backdrop')
    this.backdropHandler = backdropHandler.bind(this)
  }

  onShow() {
    this.backdrop.classList.remove('hide')
    this.backdrop.addEventListener('click', this.backdropHandler)
  }

  onHide() {
    this.backdrop.classList.add('hide')
    this.backdrop.removeEventListener('click', this.backdropHandler)
  }
}

function backdropHandler () {
  this.$el.classList.add('hide')
  this.backdrop.classList.add('hide')
}
