function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);

  if (randomNum == 0) {
    return "rock";
  } else if (randomNum == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Enter your choice:").toLowerCase();

  while (humanChoice != "scissors" && humanChoice != "rock" && humanChoice != "paper") {
    humanChoice = prompt("Invalid. Please enter rock, paper, or scissors").toLowerCase();
  };

  return humanChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "rock") {
      console.log("You both chose rock. Tie.")
    } else if (humanChoice == "rock" && computerChoice == "paper") {
      console.log("You chose rock. Computer chose paper. You lose.");
      computerScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
      console.log("You chose rock. Computer chose scissors. You win!");
      humanScore++;
    }

    else if (humanChoice == "paper" && computerChoice == "paper") {
      console.log("You both chose paper. Tie.")
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
      console.log("You chose paper. Computer chose scissors. You lose.");
      computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
      console.log("You chose paper. Computer chose rock. You win!");
      humanScore++;
    }

    else if (humanChoice == "scissors" && computerChoice == "scissors") {
      console.log("You both chose scissors. Tie.")
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
      console.log("You chose scissors. Computer chose rock. You lose.");
      computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
      console.log("You chose scissors. Computer chose paper. You win!");
      humanScore++;
    }
  }

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  console.log("Your score: " + humanScore);
  console.log("Computer score: " + computerScore);

  if (humanScore > computerScore) {
    console.log("You win the series!")
  } else if (computerScore > humanScore) {
    console.log("You lose the series.")
  } else {
    console.log("The series tied.")
  }
}

playGame();