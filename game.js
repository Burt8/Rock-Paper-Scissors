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
        console.log("You Win! Paper beats Rock!");
        return(++playerScore)
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        return("Tie! Paper Paper!")
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log("You Lose! Scissors beat Paper!")
        return(++computerScore)
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log("You Lose! Paper beats Rock!")
        return(++computerScore)
    } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        return("Tie! Rock Rock!")
    } else if (playerSelection === "Rock" && computerSelection ==="Scissors") {
        console.log("You Win! Rock beats Scissors!");
        return(++playerScore)
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        return("Tie! Scissors Scissors!")
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log("You Lose! Rock beats Scissors!");
        return(++computerScore)
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log("You Win! Scissors beat Paper!");
        return(++playerScore)
    }
}

let rock = document.querySelector(".Rock");
rock.onclick = () => {
    let playerSelection = "Rock"
    gamePlay(playerSelection)
}
let paper = document.querySelector(".Paper");
let scissors = document.querySelector(".Scissors");

let playerScore = 0
let computerScore = 0

function playGame() {
    let playerSelection = prompt("Type Rock, Paper, or Scissors to play!")
    let computerSelection = getComputerChoice()
    console.log(gamePlay(playerSelection,computerSelection));

    if (playerScore > computerScore) {
     console.log("You Won!")
    } else (console.log("You Lost!"))
 }