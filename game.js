function rng() {
        let result = Math.floor(Math.random() * 100) + 1;
        return result 
    }

function getComputerChoice() {
    let result = rng()
    console.log(result)
    if (result <= 33) {
        return("Rock");
    } else if (result >= 34 && result <= 66) {
        return("Paper")
    } else if (result >= 67) {
        return("Scissors")
    }
}

console.log(getComputerChoice())