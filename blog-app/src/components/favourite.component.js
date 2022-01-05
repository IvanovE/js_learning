import { Component } from '../core/component'
import { apiService } from "../services/api.service"
import { PostService } from "../services/post.service"

export class FavouriteComponent extends Component {
  constructor(id, loader) {
    super(id)
    this.loader = loader
  }

  async onShow() {
    this.loader.show()
    const data = await apiService.getPosts()
    const favouritePosts = data.filter(post => post.favourite)
    const html = favouritePosts.map(post => PostService.createTemplate(post)).join(' ')
    setTimeout(() => {
      this.loader.hide()
      this.$el.insertAdjacentHTML('afterbegin', html)
      this.$el.addEventListener('click', PostService.heartHandler)
    }, 500)
  }

  onHide() {
    this.$el.innerHTML = ''
    this.$el.removeEventListener('click', PostService.heartHandler)
  }
}
