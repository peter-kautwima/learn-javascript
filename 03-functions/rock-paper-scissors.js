const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput == "paper" ||
    userInput == "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Input Error");
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "This game is a tie!";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Sorry, computer won!";
    } else {
      return "Congrats, you won!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors" || computerChoice === "rock") {
      return "Sorry computer won!!!";
    } else {
      return "Congras you won!";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Sorry a computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "bomb") {
    return "congrats you won";
  }
};

const playGame = () => {
  const userChoice = getUserChoice("bomb");
  const computerChoice = getComputerChoice();
  console.log("You chose: " + userChoice);
  console.log("Computer chose: " + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
