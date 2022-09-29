// game played through console
// console.log to test return statments!!!!!

// game played against computer, function getComputerChoice
// returns rock, paper, scissors RANDOMLY
// use console to test

// computerSelection
function getComputerChoice() {
    const choiceList = [
        "rock",
        "paper",
        "scissors"
    ]
    const choiceRandom = choiceList[Math.floor(Math.random()*choiceList.length)];
    // random choice syntax = arrayVariableName[Math.floor(Math.random()*arrayVariableName.length)]
    return choiceRandom
}
console.log(getComputerChoice())


// playerSelection
// use prompt()
    function playerSelection() {
        const selection = prompt("Rock, Paper, or Scissors: ")
        selection.toLowerCase()
        return selection
    }
    console.log(playerSelection())

// function that plays round of RPS (rock paper scissors)
// takes 2 parameter: playerSelection and computerSelection
// returns win/lose/tie
// player selection case-INsensitive
 function playGame(){
    if (getComputerChoice() === 'rock') {
        if (playerSelection() === 'paper') {
            console.log('You win!')
        } else if (playerSelection() === 'scissors') {
            console.log('You lose!') 
        } else {
            console.log('Tie!')
        }
    } else {
        console.log('test')
    }

 }

 console.log(playGame())

// function called game
// playRound function INSIDE of game() to play 5 round game
// keeps score, reports overall winner/loser with console.log
// use loops

//rework functions if needed
// "helper" functions