const score = document.querySelector(".score");
const results = document.querySelector(".results");

let rock = document.querySelector(".Rock");
rock.onclick = () => {
    let playerSelection = "Rock"
    gamePlay(playerSelection)
}
let paper = document.querySelector(".Paper");
paper.onclick = () => {
    let playerSelection = "Paper"
    gamePlay(playerSelection)
}
let scissors = document.querySelector(".Scissors");
scissors.onclick = () => {
    let playerSelection = "Scissors"
    gamePlay(playerSelection)
}


function getComputerChoice() {
    let result = Math.floor(Math.random() * 100 + 1)

    if (result <= 33) {
        return("Rock");
    } else if (result >= 34 && result <= 66) {
        return("Paper");
    } else if (result >= 67) {
        return("Scissors");
    }
}

function gamePlay(playerSelection) {
    let computerSelection = getComputerChoice()
    if (playerSelection === "Paper" && computerSelection ==="Rock") {
        results.textContent = "You Win! Paper beats Rock";
        return(++playerScore)
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        results.textContent = "Tie! Paper Paper!";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        results.textContent = "You Lose! Scissors beat Paper!";
        return(++computerScore)
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        results.textContent = "You Lose! Paper beats Rock!";
        return(++computerScore)
    } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        results.textContent = "Tie! Rock Rock!";
    } else if (playerSelection === "Rock" && computerSelection ==="Scissors") {
        results.textContent = "You Win! Rock beats Scissors!";
        return(++playerScore)
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        results.textContent = "Tie! Scissors Scissors!";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        results.textContent = "You Lose! Rock beats Scissors!";
        return(++computerScore)
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        results.textContent = "You Win! Scissors beat Paper!";
        return(++playerScore)
    }
}

let playerScore = 0
let computerScore = 0

score.textContent = "Player: " + playerScore + " Computer: " + computerScore;

function playGame() {
    let playerSelection = prompt("Type Rock, Paper, or Scissors to play!")
    let computerSelection = getComputerChoice()
    console.log(gamePlay(playerSelection,computerSelection));

    if (playerScore > computerScore) {
     console.log("You Won!")
    } else (console.log("You Lost!"))
 }