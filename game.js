function rng() {
        let result = Math.floor(Math.random() * 100) + 1;
        return result 
    }

function getComputerChoice() {
    let result = rng()

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
        return("You Win! Paper beats Rock!")
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        return("Tie!")
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return("You Lose! Scissors beat Paper!")
    }
}
