import { apiService } from "./api.service"
import { ModalComponent } from "../components/modal.component"
import { NotificationComponent } from "../components/notification.component"
import { memento } from "./memento.service"

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
    const deleteIcon = '<i class="far fa-trash-alt" data-action="delete"></i>'
    const editIcon = '<i class="far fa-edit" data-action="edit"></i>'
    const heartIcon = post.favourite ? addToFavoriteEl : removeFromFavoriteEl
    memento.add(post.id, {
      'title': post.title,
      'fulltext': post.fulltext
    })

    return `
      <div class="post" data-id="${post.id}">
        <div class="post-head card-container">
          <p class="post-head__title js-post-title">${post.title}</p>
          <ul class="tags">
            <li class="tag ${POST_CONFIG[post.type].typeColor}">
              ${POST_CONFIG[post.type].postType}
            </li>
          </ul>
        </div>
      <div class="card-container js-post-fulltext">${post.fulltext}</div>
      <div class="post-footer card-container">
        <small class="js-post-date">${post.date}</small>
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
        const notification = new NotificationComponent('notification', {
          message: 'Пост добавлен в избранное!'
        })
        notification.show()
        setTimeout(() => {
          notification.hide()
        }, 2000)
      } else {
        const notification = new NotificationComponent('notification', {
          message: 'Пост удален из избранного!'
        })
        notification.show()
        setTimeout(() => {
          notification.hide()
        }, 2000)
        target.setAttribute('data-state', 'empty')
        target.className = 'far fa-heart'
      }
    }
  }

  static async deleteHandler(event) {
    const {target} = event
    if (target.dataset.action === 'delete') {
      const modal = new ModalComponent('modal')
      const modalYes = document.getElementById('modal-delete-confirm-btn')
      const modalNo = document.getElementById('modal-delete-cancel-btn')

      modal.show()

      const deletePost = async function deletePost() {
        const postId = target.closest('.post').dataset.id
        const postEl = target.closest('.post')
        await apiService.deletePost(postId)
        postEl.classList.add('hide')
        modal.hide()
        modalYes.removeEventListener('click', deletePost)
        modalNo.removeEventListener('click', cancelDeletingPost)
      }

      const cancelDeletingPost = function () {
        modal.hide()
        modalYes.removeEventListener('click', deletePost)
        modalNo.removeEventListener('click', cancelDeletingPost)
      }

      modalYes.addEventListener('click', deletePost)
      modalNo.addEventListener('click', cancelDeletingPost)
    }
  }

  static async editHandler(event) {
    const {target} = event
    if (target.dataset.action === 'edit') {

      const notification = new NotificationComponent('notification', {
        message: 'Нажмите ESCAPE, чтобы выйти из режима правки без сохранения изменений. ENTER - выйти с сохранением'
      })
      notification.show()

      setTimeout(() => {
        notification.hide()
      }, 4000)

      const postId = target.closest('.post').dataset.id
      const postEl = target.closest('.post')
      const postTitle = postEl.querySelector('.js-post-title')
      const postFulltext = postEl.querySelector('.js-post-fulltext')
      const postDate = postEl.querySelector('.js-post-date')

      setTimeout(() => {
        postTitle.focus()
      }, 0)

      hideAllEdits()

      postTitle.contentEditable = true
      postFulltext.contentEditable = true
      postTitle.style.backgroundColor = '#E8E8E8'
      postFulltext.style.backgroundColor = '#E8E8E8'

      const dismissEdit = function (e) {
        if (e.key === 'Escape' || e.key === 'Esc') {
          postTitle.contentEditable = false
          postFulltext.contentEditable = false
          postTitle.style.backgroundColor = ''
          postFulltext.style.backgroundColor = ''

          const mementoItem = memento.get(postId)

          postTitle.textContent = mementoItem.title
          postFulltext.textContent = mementoItem.fulltext

          this.removeEventListener('keydown', dismissEdit)
          this.removeEventListener('keypress', confirmEdit)
        }
      }

      const confirmEdit = async function (e) {
        if (e.key === 'Enter') {

          const notification = new NotificationComponent('notification', {
            message: 'Изменения сохранены!'
          })
          notification.show()
          setTimeout(() => {
            notification.hide()
          }, 4000)

          postTitle.contentEditable = false
          postFulltext.contentEditable = false
          postTitle.style.backgroundColor = ''
          postFulltext.style.backgroundColor = ''

          memento.add(postId, {
            title: postTitle,
            fulltext: postFulltext
          })

          const updatedPost = {
            title: postTitle.textContent,
            date: new Date().toLocaleDateString(),
            fulltext: postFulltext.textContent
          }
          postDate.textContent = updatedPost.date
          await apiService.updatePost(postId, updatedPost)
          this.removeEventListener('keypress', confirmEdit)
          this.removeEventListener('keydown', dismissEdit)
        }
      }

      document.addEventListener('keypress', confirmEdit)
      document.addEventListener('keydown', dismissEdit)
    }
  }
}


function hideAllEdits () {
  const allPosts = [...document.querySelectorAll('.post')]
  for (const post of allPosts) {
    const postTitle = post.querySelector('.js-post-title')
    const postFulltext = post.querySelector('.js-post-fulltext')
    postTitle.contentEditable = false
    postFulltext.contentEditable = false
    postTitle.style.backgroundColor = ''
    postFulltext.style.backgroundColor = ''

    const mementoItem = memento.get(post.dataset.id)

    postTitle.textContent = mementoItem.title
    postFulltext.textContent = mementoItem.fulltext
  }
}
