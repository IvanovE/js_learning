import { Component } from '../core/component'
import { apiService } from "../services/api.service"
import { PostService } from "../services/post.service"

export class PostsComponent extends Component {
  constructor(id, loader) {
    super(id)
    this.loader = loader
  }

  async onShow() {
    this.loader.show()
    const data = await apiService.getPosts()
    const html = data.map(post => PostService.createTemplate(post)).join(' ')
    setTimeout(() => { // Зачем это? Немного посмотреть на loader :)
      this.loader.hide()
      this.$el.insertAdjacentHTML('afterbegin', html)
      this.$el.addEventListener('click', PostService.heartHandler)
      this.$el.addEventListener('click', PostService.deleteHandler)
      this.$el.addEventListener('click', PostService.editHandler)
    },500)
  }

  onHide() {
    this.$el.innerHTML = ''
    this.$el.removeEventListener('click', PostService.heartHandler)
    this.$el.addEventListener('click', PostService.deleteHandler)
    this.$el.addEventListener('click', PostService.editHandler)
  }
}
