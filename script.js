//Generate secret number between 1 - 20
const generateSecretNumber = () => Math.trunc(Math.random() * 20) + 1;
let secretNumber = generateSecretNumber();

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  return (document.querySelector(".message").textContent = message);
};

const displayScore = function (score) {
  return (document.querySelector(".score").textContent = score);
};

const displayNumber = function (number) {
  return (document.querySelector(".number").textContent = number);
};

displayNumber("?");

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // No guess
  if (!guess) {
    displayMessage("No number");
    // Guess is correct
  } else if (guess === secretNumber) {
    document.body.style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    displayNumber(secretNumber);
    displayMessage("You loss the game");
    displayMessage("Correct number!!!");
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // Guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "too high" : "too low");
      score--;
      displayScore(score);
    } else {
      displayMessage("You loss the game");
      displayScore(0);
    }
  }
});

// Play again
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  displayNumber("?");
  secretNumber = generateSecretNumber();
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.body.style.backgroundColor = "#222";
});
