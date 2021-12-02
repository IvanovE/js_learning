const addMovieButton = document.querySelector('#add-movie-btn')
const modalMovie = document.querySelector('#add-modal')
const cancelAddToListButton = document.querySelector('#cancel-btn')
const backdrop = document.querySelector('#backdrop')
const addToListButton = document.querySelector('#add-btn')
const movieList = document.querySelector('#movie-list')
const userModalInputs = modalMovie.querySelectorAll('input')
const entryTextSection = document.querySelector('#entry-text')
const deleteMovieModal = document.querySelector('#delete-modal')
const cancelDeleteButton = document.querySelector('#delete-cancel-btn')
let applyDeleteButton = document.querySelector('#delete-confirm-btn')

const moviesArray = []

let id = 0

// const renderNewMovie = (movieObj) => {
//   const newMovie = document.createElement('div')
//   newMovie.classList.add('movie-element')
//
//   const imgDiv = document.createElement('div')
//   imgDiv.classList.add('movie-element__image')
//   const imageElement = document.createElement('img')
//   imageElement.src = movieObj['image']
//   imageElement.alt = movieObj['title']
//
//   const titleDiv = document.createElement('div')
//   titleDiv.classList.add('movie-element__info')
//   const titleElement = document.createElement('h2')
//   const titleRatingElement = document.createElement('p')
//   titleElement.textContent = movieObj['title']
//   titleRatingElement.textContent = `${movieObj['rating']}/5 stars`
//
//   imgDiv.append(imageElement)
//   titleDiv.append(titleElement, titleRatingElement)
//   newMovie.append(imgDiv, titleDiv)
//
//   movieList.prepend(newMovie)
// }


const clearUserInputs = () => {
  for (const userInput of userModalInputs) {
    userInput.value = ''
  }
}

const updateUI = () => {
  if (moviesArray.length === 0) {
    entryTextSection.style.display = 'block'
    return
  }
  entryTextSection.style.display = 'none'
}

const deleteMovie = (movieId) => {
  let movieIndex = 0
  for (const movie of moviesArray) {
    if (movie.id === movieId){
      break
    }
    movieIndex++
  }

  moviesArray.splice(movieIndex, 1)
  movieList.children[movieIndex].remove()
  closeMovieDeletionModal()
  updateUI()
}

const deleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.add('visible')
  toggleBackdrop()

  cancelDeleteButton.removeEventListener('click', closeMovieDeletionModal)
  applyDeleteButton.replaceWith(applyDeleteButton.cloneNode(true))
  applyDeleteButton = document.querySelector('#delete-confirm-btn')

  cancelDeleteButton.addEventListener('click', closeMovieDeletionModal)
  applyDeleteButton.addEventListener('click', deleteMovie.bind(null, movieId))
}

const renderNewMovie = (movieObj) => {
  const newMovie = document.createElement('div')
  newMovie.className = 'movie-element'
  newMovie.innerHTML = `
    <div class="movie-element__image">
      <img src="${movieObj.image}" alt="${movieObj.title}">
    </div>
    <div class="movie-element__info">
        <h2>${movieObj.title}</h2>
        <p>${movieObj.rating}/5 stars</p>
    </div>
  `

  newMovie.addEventListener('click', deleteMovieHandler.bind(null, movieObj.id))
  movieList.append(newMovie)
}

const movieAddListButton = () => {
  const titleValue = userModalInputs[0].value
  const imageUrlValue = userModalInputs[1].value
  const ratingValue = userModalInputs[2].value
  if (titleValue.trim() === '' ||
      imageUrlValue.trim() === '' ||
      ratingValue.trim() === '' ||
      parseInt(ratingValue) < 1 ||
      parseInt(ratingValue) > 5
  ) {
    alert('Please enter correct data')
    return
  }

  const movieObj = {
    id: id,
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
  }

  id++

  moviesArray.push(movieObj)
  closeMovieModal()
  updateUI()
  renderNewMovie(movieObj)
}

const cancelAddMovieHandler = () => {
  closeMovieModal();
}

const addMovieModal = () => {
  modalMovie.classList.add('visible')
  toggleBackdrop()
  clearUserInputs()
}

const closeMovieModal = () => {
  modalMovie.classList.remove('visible')
  toggleBackdrop()
}

const closeMovieDeletionModal = () => {
  deleteMovieModal.classList.remove('visible')
  toggleBackdrop()
}

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
}

const backdropHandler = () => {
  closeMovieModal()
  closeMovieDeletionModal()
  toggleBackdrop()
}

addMovieButton.addEventListener('click', addMovieModal)
backdrop.addEventListener('click', backdropHandler)
cancelAddToListButton.addEventListener('click', closeMovieModal)
addToListButton.addEventListener('click', movieAddListButton)
