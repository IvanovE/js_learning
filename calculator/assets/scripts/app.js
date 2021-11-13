const defaultResult = 0
let currentResult = defaultResult
let logEntries = []


// Gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value)
}

// Generates and writes calculation log
function renderResult(operator, resultBeforeCalc, calcNubmer) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNubmer}`
  outputResult(currentResult, calcDescription) // from vendor file
}

//
function renderLog(operation, prevResult, calcNumber, newResult) {
  const logEntry = {
    operation: operation,
    prevResult: prevResult,
    calcNumber: calcNumber,
    newResult: newResult
  }
  logEntries.push(logEntry)
  console.log(logEntries)
}

function add() {
  const enteredNumber = getUserNumberInput()
  const initialResult = currentResult
  currentResult += enteredNumber
  renderResult('+', initialResult, enteredNumber)
  renderLog('ADD', initialResult, enteredNumber, currentResult)
}

function subtract() {
  const enteredNumber = getUserNumberInput()
  const initialResult = currentResult
  currentResult -= enteredNumber
  renderResult('-', initialResult, enteredNumber)
  renderLog('SUBTRACT', initialResult, enteredNumber, currentResult)
}

function divide() {
  const enteredNumber = getUserNumberInput()
  const initialResult = currentResult
  currentResult /= enteredNumber
  renderResult('/', initialResult, enteredNumber)
  renderLog('DIVIDE', initialResult, enteredNumber, currentResult)
}

function multiply() {
  const enteredNumber = getUserNumberInput()
  const initialResult = currentResult
  currentResult *= enteredNumber
  renderResult('*', initialResult, enteredNumber)
  renderLog('MULTIPLY', initialResult, enteredNumber, currentResult)
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)
