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

function gamePlay(playerSelection,computerSelection) {
    if (playerSelection === "Paper" && computerSelection ==="Rock") {
        return("You Win! Paper beats Rock!");
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        return("Tie! Paper Paper!")
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return("You Lose! Scissors beat Paper!")
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return("You Lose! Paper beats Rock!")
    } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        return("Tie! Rock Rock!")
    } else if (playerSelection === "Rock" && computerSelection ==="Scissors") {
        return("You Win! Rock beats Scissors!")
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        return("Tie! Scissors Scissors!")
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return("You Lose! Rock beats Scissors!")
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return("You Win! Scissors beat Paper!")
    }
}
