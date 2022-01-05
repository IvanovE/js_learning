import {apiService} from "./api.service";

const POST_CONFIG = {
  note: {
    typeColor: 'tag-orange',
    postType: 'Заметка',
  },
  news: {
    typeColor: 'tag-blue',
    postType: 'Новость',
  },
}

export class PostService {
  static createTemplate(post) {
    const addToFavoriteEl = '<i class="fas fa-heart color-red" data-action="favourite" data-state="full"></i>'
    const removeFromFavoriteEl = '<i class="far fa-heart" data-action="favourite" data-state="empty"></i>'
    const deleteIcon = '<i class="far fa-trash-alt"></i>'
    const editIcon = '<i class="far fa-edit"></i>'
    const heartIcon = post.favourite ? addToFavoriteEl : removeFromFavoriteEl

    return `
      <div class="post" data-id="${post.id}">
        <div class="post-head card-container">
          <p class="post-head__title">${post.title}</p>
          <ul class="tags">
            <li class="tag ${POST_CONFIG[post.type].typeColor}">
              ${POST_CONFIG[post.type].postType}
            </li>
          </ul>
        </div>
      <div class="card-container">${post.fulltext}</div>
      <div class="post-footer card-container">
        <small>${post.date}</small>
        <div class="icons">${heartIcon}${editIcon}${deleteIcon}</div>
      </div>
    </div>`
  }

  static async heartHandler(event) {
    const {target} = event
    if (target.dataset.action === 'favourite') {
      const postId = target.closest('.post').dataset.id
      const shouldSave = target.dataset.state === 'empty'
      await apiService.toggleFavourite(postId, shouldSave)
      if (shouldSave) {
        target.setAttribute('data-state', 'full')
        target.className = 'fas fa-heart color-red'
      } else {
        target.setAttribute('data-state', 'empty')
        target.className = 'far fa-heart'
      }
    }
  }
}
