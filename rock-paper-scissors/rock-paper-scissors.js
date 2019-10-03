/* Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

    Rock destroys scissors.
    Scissors cut paper.
    Paper covers rock.
    If there’s a tie, then the game ends in a draw.

Our code will break the game into four parts:

    Get the user’s choice.
    Get the computer’s choice.
    Compare the two choices and determine a winner.
    Start the program and display the results. */


let userInput = 'bomb'

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const getUserChoice = userInput => {
  userChoice = userInput.toLowerCase()
  if(userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors' || userChoice === 'bomb') {
    return userChoice
  } else {
    return `'${userChoice}' is an invalid selection`
  }
}

const getComputerChoice = () => {
  const randNum = Math.floor(Math.random() * 3)
  let compInput = ''
  if(randNum === 0) compChoice = 'rock'
  if(randNum === 1) compChoice = 'paper'
  if(randNum === 2) compChoice = 'scissors'
  return compChoice
}


const determineWinner = (userChoice,compChoice) => {
  //Tie!
  if(userChoice === compChoice) return 'the game is tied!\n\n'
  
  //Determine winner!
  if(userChoice === 'rock') {
    if(compChoice === 'paper') return 'the computer has won!\n\n'
    if(compChoice === 'scissors') return 'the human has won!\n\n'
  }
  if(userChoice === 'paper') {
    if(compChoice === 'scissors') return 'the computer has won!\n\n'
    if(compChoice === 'rock') return 'the human has won!\n\n'
  }
  if(userChoice === 'scissors') {
    if(compChoice === 'rock') return 'the computer has won!\n\n'
    if(compChoice === 'paper') return 'the human has won!\n\n'
  }
}

const playGame = () => {
  const compChoice = getComputerChoice()
  let userChoice = getUserChoice(userInput)
  //Bomb cheat!
  if(userChoice === 'bomb') {
    if(compChoice === 'rock') userChoice = 'paper'
    if(compChoice === 'paper') userChoice = 'scissors'
    if(compChoice === 'scissors') userChoice = 'rock'
  }
  //Announce game!
  console.log(`\nhuman vs computer! \n${userChoice} vs ${compChoice}!`)
  //Announce winner!
  console.log(determineWinner(userChoice,compChoice))
}


rl.question('\nrock, paper, or scissors? ', (answer) => {
  userInput = answer
  playGame()
  rl.close()
})
