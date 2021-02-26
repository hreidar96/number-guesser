let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
/*
Create a generateTarget() function. This function will be called at the start of each new round in order to generate the new secret target number.
This function should return a random integer between 0 and 9.
*/

let generateTarget = (min, max) => {
  return Math.Floor(Math.Random() * (max - min) + min);
};

/*
Create a compareGuesses() function. This function will be called each round to determine which guess is closest to the target number.

This function:

Has three parameters representing the user (human) guess, a computer guess, and the secret target number to be guessed.
Determines which player (human or computer) wins based on which guess is closest to the target. If both players are tied, the human user should win.
Return true if the human player wins, and false if the computer player wins.
*/

let compareGuesses = (humanGuess, computerGuess, target) => {
  target = generateTarget(0, 9);
  let valueH = Math.abs(humanGuess - target);
  let valueCPU = Math.abs(computerGuess - target);

  if (valueH < valueCPU) {
    return true;
  } else if (valueCPU < valueH) {
    return false;
  } else if (valueH === valueCPU) {
    return true;
  }
};

/*
Create an updateScore() function. This function will be used to correctly increase the winner’s score after each round.

This function:

Has a single parameter. This parameter will be a string value representing the winner.
Increases the score variable (humanScore or computerScore) by 1 depending on the winner passed in to updateScore. The string passed in will be either 'human' or 'computer'.
Does not need to return any value.
*/

let updateScore = (winner) => {
  if (compareGuesses === true) {
    humanscore = humanScore + 1;
  } else if (compareGuesses === false) {
    computerScore = computerScore + 1;
  }
};

let advanceRound = () => {
  currentRoundNumber = currentRoundNumber + 1;
};
