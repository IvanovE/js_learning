const startGameBtn = document.getElementById('start-game-btn'); 

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

const getPlayerChoice = function() {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = function () {
  const randomValue = Math.random()
  if (randomValue < 0.34) {
    return ROCK
  }
  if (randomValue < 0.67) {
    return PAPER
  }
  return SCISSORS
}

const getWinner = function (compChoice, playerChoice) {
  if (compChoice === playerChoice) {
    alert(`Computer choice: ${compChoice} x ${playerChoice} :Player choice => DRAW`)
    return
  }
  if (compChoice === ROCK && playerChoice === SCISSORS ||
      compChoice === PAPER && playerChoice === ROCK ||
      compChoice === SCISSORS && playerChoice === PAPER) {
    alert(`Computer choice: ${compChoice} x ${playerChoice} :Player choice => YOU LOST`)
    return
  }
  alert(`Computer choice: ${compChoice} x ${playerChoice} :Player choice => YOU WIN`)
}

startGameBtn.addEventListener('click', function() {
  const playerSelection = getPlayerChoice();
  const computerChoice = getComputerChoice()
  getWinner(computerChoice, playerSelection)
});
