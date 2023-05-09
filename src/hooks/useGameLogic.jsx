import { useState } from "react";

const options = ["rock", "paper", "scissors"];

function handleComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

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

export default function useGameLogic(playerNames, setScore, setGameHistory) {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [currentPlayer, setCurrentPlayer] = useState(0);

  function updateScoreByWinner(prevScore, winner) {
    if (winner === "player") {
      return { ...prevScore, player1Wins: prevScore.player1Wins + 1 };
    } else if (winner === "computer") {
      return { ...prevScore, player2Wins: prevScore.player2Wins + 1 };
    } else {
      return prevScore;
    }
  }

  function handlePlayerChoice(playerOption) {
    if (playerNames[1] === "Computer") {
      const computerOption = handleComputerChoice();
      const winner = calculateWinner(playerOption, computerOption);

      setPlayerChoice(playerOption);
      setComputerChoice(computerOption);
      setResult(
        winner === "tie"
          ? "It's a tie!"
          : winner === "player"
          ? "You win!"
          : "You lose!"
      );
      setScore((prevScore) => updateScoreByWinner(prevScore, winner));

      const gameInfo = saveGameInfo(playerOption, computerOption, winner);
      setGameHistory((prevHistory) => [...prevHistory, gameInfo]);
    } else {
      if (currentPlayer === 0) {
        setPlayerChoice(playerOption);
        setCurrentPlayer(1);
      } else {
        const winner = calculateWinner(playerChoice, playerOption);
        setComputerChoice(playerOption);

        setResult(
          winner === "tie"
            ? "It's a tie!"
            : winner === "player"
            ? `${playerNames[0]} wins!`
            : `${playerNames[1]} wins!`
        );
        setCurrentPlayer(0);

        setScore((prevScore) => updateScoreByWinner(prevScore, winner));

        const gameInfo = saveGameInfo(
          playerChoice,
          playerOption,
          winner === "player"
            ? playerNames[0]
            : winner === "computer"
            ? playerNames[1]
            : winner
        );
        setGameHistory((prevHistory) => [...prevHistory, gameInfo]);
        
        
      }
    }
  }

  return {
    playerChoice,
    computerChoice,
    result,
    currentPlayer,
    handlePlayerChoice,
  };
}
