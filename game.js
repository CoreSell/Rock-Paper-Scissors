let paper = "paper";
let rock = "rock";
let scissors = "scissors";
let playerSelection;

const personScore = document.querySelector(".person");
const aiScore = document.querySelector(".computer");
const draw = document.querySelector(".draw");
const startButton = document.querySelector(".start-button");
const whoWin = document.querySelector(".who-win");

document.querySelectorAll(".rock-paper-scissors-container img").forEach((img) =>
  img.addEventListener("click", function () {
    let imgClass = this.className;

    switch (imgClass) {
      case "paper":
        playerSelection = "paper";
        playerRound(playerSelection, getComputerChoice());
        refreshGame();

        break;
      case "rock":
        playerSelection = "rock";
        playerRound(playerSelection, getComputerChoice());
        refreshGame();

        break;
      case "scissors":
        playerSelection = "scissors";
        playerRound(playerSelection, getComputerChoice());
        refreshGame();

        break;

      default:
        break;
    }
  })
);

function getComputerChoice() {
  const computerChoices = ["paper", "rock", "scissors"];
  const randomChoice = computerChoices[Math.floor(Math.random() * 3)];
  return randomChoice;
}

function playerRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissors") {
    personScore.innerText = Number(personScore.innerText) + 1;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    personScore.innerText = Number(personScore.innerText) + 1;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    personScore.innerText = Number(personScore.innerText) + 1;
  } else if (computerSelection == "rock" && playerSelection == "scissors") {
    aiScore.innerText = Number(aiScore.innerText) + 1;
  } else if (computerSelection == "paper" && playerSelection == "rock") {
    aiScore.innerText = Number(aiScore.innerText) + 1;
  } else if (computerSelection == "scissors" && playerSelection == "paper") {
    aiScore.innerText = Number(aiScore.innerText) + 1;
  }
}

function startGame() {
  startButton.onclick = function () {
    startButton.style.display = "none";
    personScore.style.display = "inline-flex";
    aiScore.style.display = "inline-flex";
    whoWin.style.display = "none";
    document
      .querySelectorAll(".rock-paper-scissors-container img")
      .forEach((img) => {
        img.style.display = "inline-flex";
      });
  };
}

function refreshGame() {
  if (Number(personScore.innerText) == 5) {
    draw.innerHTML = "Player Won!";
    draw.style.visibility = "visible";
    aiScore.innerHTML = 0;
    personScore.innerHTML = 0;
    playerSelection = null;
    startButton.style.display = "inline-block";
    personScore.style.display = "none";
    aiScore.style.display = "none";
    whoWin.style.display = "inline-flex";
    whoWin.innerText = "Human Won";
    document
      .querySelectorAll(".rock-paper-scissors-container img")
      .forEach((img) => {
        img.style.display = "none";
      });
  } else if (Number(aiScore.innerText) == 5) {
    draw.innerHTML = "Computer Won!";
    draw.style.visibility = "visible";
    aiScore.innerHTML = 0;
    personScore.innerHTML = 0;
    playerSelection = null;
    startButton.style.display = "inline-block";
    personScore.style.display = "none";
    aiScore.style.display = "none";
    whoWin.style.display = "inline-flex";
    whoWin.innerText = "Ai Won";

    document
      .querySelectorAll(".rock-paper-scissors-container img")
      .forEach((img) => {
        img.style.display = "none";
      });
  }
}
startGame();
