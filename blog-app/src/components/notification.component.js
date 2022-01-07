import { Component } from "../core/component"

export class NotificationComponent extends Component {
  constructor(id, conf) {
    super(id)
    this.conf = conf
  }

  show() {
    this.$el.textContent = this.conf.message
    this.$el.classList.remove('notification-hide')
    this.$el.classList.add('notification-show')
  }

  hide() {
    this.$el.classList.remove('notification-show')
    this.$el.classList.add('notification-hide')
  }
}
