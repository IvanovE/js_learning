const addMovieButton = document.querySelector('#add-movie-btn')
const searchMovieButton = document.querySelector('#search-btn')
const userInputTitle = document.querySelector('#title')
const userInputExtraName = document.querySelector('#extra-name')
const userInputExtraValue = document.querySelector('#extra-value')
const userInputFilter = document.querySelector('#filter-title')
const movieList = document.querySelector('#movie-list')

const allMovies = []

let id = 0


const renderMovie = (filter = '') => {
  if (allMovies.length === 0) {
    movieList.classList.remove('visible')
    return
  } else {
    movieList.classList.add('visible')
  }
  movieList.innerHTML = ''

  const filteredMovies = !filter ? allMovies : allMovies.filter((movie) => movie.info.title.includes(filter))

  filteredMovies.forEach(movie => {
    const movieItem = document.createElement('div')
    // const { info } = movie
    // let titleText = info.title
    let titleText = movie.getFormattedTitle()
    for (const key in movie.info) {
      if (key !== 'title') {
        titleText += ` - ${key}: ${movie.info[key]}`
      }
    }
    movieItem.textContent = titleText
    movieList.append(movieItem)
  })
}

const addMovieHandler = () => {
  const title = userInputTitle.value
  const extraName = userInputExtraName.value
  const extraValue = userInputExtraValue.value

  if (
    !title.trim() ||
    !extraName.trim() ||
    !extraValue.trim()
  ) {
    return
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue
    },
    id,
    // getFormattedTitle: function () {
    //   return this.info.title.toUpperCase()
    // }
    getFormattedTitle() {
      return this.info.title.toUpperCase()
    }
  }

  allMovies.push(newMovie)
  id++
  renderMovie()
}

const searchMovieHandler = () => {
  const userFilterText = userInputFilter.value
  renderMovie(userFilterText)
}


addMovieButton.addEventListener('click', addMovieHandler)
searchMovieButton.addEventListener('click', searchMovieHandler)
