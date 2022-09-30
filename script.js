// game played through console
// console.log to test return statments!!!!!

// game played against computer, function getComputerChoice
// returns rock, paper, scissors RANDOMLY
// use console to test
var again = 'yes'
while (again == 'yes') {
function getComputerChoice() {
    const choiceList = [
        'rock',
        'paper',
        'scissors'
    ]
    const choiceRandom = choiceList[Math.floor(Math.random()*choiceList.length)];
    return choiceRandom
}
const computerChoice = getComputerChoice()


function playerSelection() {
    const selection = prompt("Rock, Paper, or Scissors: ")
    return selection
    }
const playerChoice = playerSelection().toLowerCase()
const round = playRound()

console.log('The computer chose ' + computerChoice)
console.log('You chose ' + playerChoice)
console.log(round)

again = prompt('Would you like to play again? (yes/no): ').toLowerCase()


function playRound() {

const win = 'You win!'
const lose = "You lose!"
const tie = "Tie!"
const invalid = "Invalid input!"

    if (computerChoice == 'rock'){
        if (playerChoice == 'rock') {
            return tie
        } else if (playerChoice == 'paper') {
            return win
        } else if (playerChoice == 'scissors') {
            return lose
        } else {
            return invalid
        }
    } else if (computerChoice == 'paper') {
        if (playerChoice == 'rock') {
            return lose
        } else if (playerChoice == 'paper') {
            return tie
        } else if (playerChoice == 'scissors') {
            return win
        } else {
            return invalid
        }
    } else if (computerChoice == 'scissors') {
        if (playerChoice == 'rock') {
            return win
        } else if (playerChoice == 'paper') {
            return lose
        } else if (playerChoice == 'scissors') {
            return tie
        } else {
            return invalid
        }          
} else {
    return invalid
}
}

}







