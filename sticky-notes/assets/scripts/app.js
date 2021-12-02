const notesContainer = document.querySelector('#app')
const addNoteButton = document.querySelector('#add-note')


const getNotes = () => {
  return JSON.parse(localStorage.getItem('stickynotes-notes') || '[]' )
}

const saveNotes = (notes) => {
  localStorage.setItem('stickynotes-notes', JSON.stringify(notes))
}

const createNoteElement = (id, content) => {
  const element = document.createElement('textarea')

  element.className = 'note'
  element.value = content
  element.placeholder = "I'm empty :("

  element.addEventListener('change', () => {
    updateNote(id, element.value)
  })

  element.addEventListener('dblclick', () => {
    const confirmDeletion = confirm('Are you sure you wish to delete this sticky note?')
    if (confirmDeletion) {
      deleteNote(id, element)
    }
  })

  return element
}

const addNote = () => {
  const notes = getNotes()
  const noteObject = {
    id: Math.floor(Math.random() * 100_000),
    content: ''
  }

  const noteElement = createNoteElement(noteObject.id, noteObject.content)
  notesContainer.insertBefore(noteElement, addNoteButton)
  notes.push(noteObject)
  saveNotes(notes)
}

const updateNote = (id, newContent)  => {
  const notes = getNotes()
  const targetNote = notes.find(note => note.id === id)
  console.log(targetNote)

  targetNote.content = newContent
  saveNotes(notes)
}

const deleteNote = (id, element) => {
  const notes = getNotes().filter(note => note.id !== id)

  saveNotes(notes)
  notesContainer.removeChild(element)
}


getNotes().forEach(note => {
  const noteElement = createNoteElement(note.id, note.content)
  notesContainer.insertBefore(noteElement, addNoteButton)
})

addNoteButton.addEventListener('click', () => addNote())
