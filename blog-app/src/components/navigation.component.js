import { Component } from '../core/component'


export class NavigationComponent extends Component {
  constructor(id) {
    super(id)
    this.tabs = []
  }

  init() {
    this.$el.addEventListener('click', tabClickHandler.bind(this))
    if (!localStorage.getItem('activeTab')) {
      localStorage.setItem('activeTab', 'create')
    }

    const activeTabName = localStorage.getItem('activeTab')
    const activeTab = [...this.$el.children].find(el => el.dataset.name === activeTabName)
    activeTab.classList.add('active')
  }

  registerTabs(tabs) {
    this.tabs = tabs
    this.showStartComponent()
  }

  showStartComponent() {
    const activeTabName = localStorage.getItem('activeTab')
    const activeTab = this.tabs.find(tab => tab.name === activeTabName)
    activeTab.component.show()
  }
}

function tabClickHandler(event) {
  event.preventDefault()
  const { target } = event
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
    localStorage.setItem('activeTab', activeTab.name)
  }
}
