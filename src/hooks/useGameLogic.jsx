// testa om den väljer olika alternativ varje gång
function handleComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

//testad
function calculateWinner(playerOption, computerOption) {
  if (playerOption === computerOption) {
    return "tie";
  } else if (
    (playerOption === "rock" && computerOption === "scissors") ||
    (playerOption === "paper" && computerOption === "rock") ||
    (playerOption === "scissors" && computerOption === "paper")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

// KAN TESTAS
function saveGameInfo(playerOption, computerOption, winner) {
  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return {
    time: time,
    playerChoice: playerOption,
    computerChoice: computerOption,
    winner: winner,
  };
}

//inte klar!
//
function updateScoreByWinner(prevScore, winner) {
  if (winner === "player") {
    return { ...prevScore, player1Wins: prevScore.player1Wins + 1 };
  } else if (winner === "computer") {
    return { ...prevScore, player2Wins: prevScore.player2Wins + 1 };
  } else {
    return prevScore;
  }
}

export {
  calculateWinner,
  saveGameInfo,
  updateScoreByWinner,
  handleComputerChoice,
};
