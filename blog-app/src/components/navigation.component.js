import { Component } from '../core/component'

export class NavigationComponent extends Component {
  constructor(id) {
    super(id)
    this.tabs = []
  }

  init() {
    this.$el.addEventListener('click', tabClickHandler.bind(this))
  }

  registerTabs(tabs) {
    this.tabs = tabs
  }
}

function tabClickHandler(event) {
  event.preventDefault()
  const target = event.target
  if (target.classList.contains('tab')) {
    const tabs = [...this.$el.querySelectorAll('.tab')]
    for (const tab of tabs) {
      tab.classList.remove('active')
    }
    target.classList.add('active')

    const activeTab = this.tabs.find(tab => tab.name === target.dataset.name)
    for (const tab of this.tabs) {
      tab.component.hide()
    }
    activeTab.component.show()
  }
}
