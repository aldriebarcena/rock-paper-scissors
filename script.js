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
    selection.toLowerCase()
    return selection
}
const playerChoice = playerSelection()
console.log(computerChoice)





// function called game
// playRound function INSIDE of game() to play 5 round game
// keeps score, reports overall winner/loser with console.log
// use loops

//rework functions if needed
// "helper" functions