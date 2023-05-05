import React, { useState, useEffect } from "react";
import OptionButton from "./components/OptionButton";
import ResultMessage from "./components/ResultMessage";
import GameHistory from "./components/GameHistory";
import ResetButton from "./components/ResetButton";
import HighScore from "./components/HighScore";

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

function updateScore(prevScore, winner) {
  if (winner === "player") {
    return { wins: prevScore.wins + 1, streak: prevScore.streak + 1 };
  } else {
    return { ...prevScore, streak: 0 };
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

function getHighScore() {
  return parseInt(localStorage.getItem("highScore")) || 0;
}

function saveHighScore(highScore) {
  localStorage.setItem("highScore", highScore.toString());
}

function App() {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState({ wins: 0, streak: 0 });
  const [gameHistory, setGameHistory] = useState([]);
  const [highScore, setHighScore] = useState(getHighScore());

  useEffect(() => {
    if (score.streak > highScore) {
      setHighScore(score.streak);
      saveHighScore(score.streak);
    }
  }, [score.streak, highScore]);

  function handlePlayerChoice(playerOption) {
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
    setScore((prevScore) => updateScore(prevScore, winner));

    const gameInfo = saveGameInfo(playerOption, computerOption, winner);
    setGameHistory((prevHistory) => [...prevHistory, gameInfo]);
  }

  function handleReset() {
    setGameHistory([]);
    setScore({ streak: 0 });
  }

  return (
    <div className="game__container">
      <div className="game__sidebar-left">
        <h2 className="game__heading">
          Rock,
          <br />
          Paper,
          <br />
          Scissors
        </h2>
      </div>

      <main className="game__main">
        <div className="streak"></div>
        <div className="option__buttons">
          {options.map((playerOption) => (
            <OptionButton
              key={playerOption}
              option={playerOption}
              onClick={handlePlayerChoice}
            />
          ))}
        </div>
        <div className="result">
          <ResultMessage
            playerChoice={playerChoice}
            computerChoice={computerChoice}
            result={result}
          />
        </div>
      </main>

      <div className="game__sidebar-right">
        <div className="sidebar__right_score">
          <ResetButton onClick={handleReset} />
          <p>Win streak: {score.streak}</p>
          <HighScore winStreak={score.streak} />
        </div>
        <GameHistory gameHistory={gameHistory} />
      </div>
    </div>
  );
}

export default App;
