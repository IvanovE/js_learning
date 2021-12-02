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

function calculateResult(calcType) {
  const enteredNumber = getUserNumberInput()
  const initialResult = currentResult
  let mathOperator
  if (calcType === 'ADD') {
    currentResult += enteredNumber
    mathOperator = '+'
  } else if (calcType === 'SUBTRACT') {
    currentResult -= enteredNumber
    mathOperator = '-'
  } else if (calcType === 'DIVIDE') {
    currentResult /= enteredNumber
    mathOperator = '/'
  } else if (calcType === 'MULTIPLY') {
    currentResult *= enteredNumber
    mathOperator = '*'
  }
  renderResult(mathOperator, initialResult, enteredNumber)
  renderLog(calcType, initialResult, enteredNumber, currentResult)
}

// function add() {
//   calculateResult('ADD')
// }
//
// function subtract() {
//   calculateResult('SUBTRACT')
// }
//
// function divide() {
//   calculateResult('DIVIDE')
// }
//
// function multiply() {
//   calculateResult('MULTIPLY')
// }
//
// addBtn.addEventListener('click', add)
// subtractBtn.addEventListener('click', subtract)
// divideBtn.addEventListener('click', divide)
// multiplyBtn.addEventListener('click', multiply)

const add = calculateResult.bind(null, 'ADD')
const subtract = calculateResult.bind(null, 'SUBTRACT')
const divide = calculateResult.bind(null, 'DIVIDE')
const multiply = calculateResult.bind(null, 'MULTIPLY')

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
divideBtn.addEventListener('click', divide)
multiplyBtn.addEventListener('click', multiply)
