// game played through console
// console.log to test return statments!!!!!

// game played against computer, function getComputerChoice
// returns rock, paper, scissors RANDOMLY
// use console to test

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


function playRound() {
console.log('The computer chose ' + computerChoice)
console.log('You chose ' + playerChoice)
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
const round = playRound()
console.log(round)


// function called game
// playRound function INSIDE of game() to play 5 round game
// keeps score, reports overall winner/loser with console.log
// use loops
const computerScore = 0
const playerScore = 0
function game() {

}

//rework functions if needed
// "helper" functions