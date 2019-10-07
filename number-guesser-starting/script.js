let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10)

// function generateTarget() {
//     let randNum = Math.floor(Math.random() * 10)
//     return randNum
// }

function compareGuesses(userGuess, compGuess, target = generateTarget()) {
    let userDistance = Math.abs(target - userGuess)
    let compDistance = Math.abs(target - compGuess)

    if (userDistance <= compDistance) return true
    else return false
}

function updateScore(winner) {
    if (winner === 'human') humanScore++
    else computerScore++
}

function advanceRound() {
    currentRoundNumber++
}



