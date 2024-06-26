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
    const container = document.querySelector(".container");
    const results = document.createElement("div");
    container.appendChild(results);

    if (humanChoice == "rock" && computerChoice == "rock") {
      const rockTie = document.createElement("div");
      rockTie.textContent = "You both chose rock. Tie. Current Score: " + humanScore + " - " + computerScore;
      results.appendChild(rockTie);

    } else if (humanChoice == "rock" && computerChoice == "paper") {
      computerScore++;

      const rockLose = document.createElement("div");
      rockLose.textContent = "You chose rock. Computer chose paper. You lose. Current Score: " + humanScore + " - " + computerScore;
      results.appendChild(rockLose);
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
      humanScore++;

      const rockWin = document.createElement("div");
      rockWin.textContent = "You chose rock. Computer chose scissors. You win! Current Score: " + humanScore + " - " + computerScore;
      results.appendChild(rockWin);
    }

    else if (humanChoice == "paper" && computerChoice == "paper") {
      const paperTie = document.createElement("div");
      paperTie.textContent = "You both chose paper. Tie. Current Score: " + humanScore + " - " + computerScore;
      results.appendChild(paperTie);
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
      computerScore++;

      const paperLose = document.createElement("div");
      paperLose.textContent = "You chose paper. Computer chose scissors. You lose. Current Score: " + humanScore + " - " + computerScore;
      results.appendChild(paperLose);     

    } else if (humanChoice == "paper" && computerChoice == "rock") {
      humanScore++;

      const paperWin = document.createElement("div");
      paperWin.textContent = "You chose paper. Computer chose rock. You win! Current Score: " + humanScore + " - " + computerScore;
      results.appendChild(paperWin);   
    }

    else if (humanChoice == "scissors" && computerChoice == "scissors") {

      const scissorsTie = document.createElement("div");
      scissorsTie.textContent = "You both chose scissors. Tie. Current Score: " + humanScore + " - " + computerScore;
      results.appendChild(scissorsTie);   

    } else if (humanChoice == "scissors" && computerChoice == "rock") {
      computerScore++;

      const scissorsLose = document.createElement("div");
      scissorsLose.textContent = "You chose scissors. Computer chose rock. You lose. Current Score: " + humanScore + " - " + computerScore;
      results.appendChild(scissorsLose); 

    } else if (humanChoice == "scissors" && computerChoice == "paper") {
      humanScore++;

      const scissorsWin = document.createElement("div");
      scissorsWin.textContent = "You chose scissors. Computer chose paper. You win! Current Score: " + humanScore + " - " + computerScore;
      results.appendChild(scissorsWin);       
    }
  }


  const rockButton = document.querySelector('#rock-button');
  rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
  });

  const paperButton = document.querySelector('#paper-button');
  paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
  });

  const scissorsButton = document.querySelector('#scissors-button');
  scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())
  });

}

playGame();

