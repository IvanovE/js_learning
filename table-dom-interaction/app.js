const rowNumber = document.querySelector('.rows-number')
const columnNumber = document.querySelector('.columns-number')
const confirmBtn = document.querySelector('.btn-confirm')
const tableSection = document.querySelector('.table')


const creatingTable = () => {
  tableSection.innerHTML = ""
  let counter = 1
  for (let row = 0; row < rowNumber.value; row++) {
    const currRow = document.createElement('tr')
    tableSection.appendChild(currRow)
    for (let col = 0; col <  columnNumber.value; col++) {
      const currCol = document.createElement('td')
      currRow.appendChild(currCol)
      currCol.textContent = String(counter)
      counter++
    }
  }
}

confirmBtn.addEventListener('click', creatingTable)
