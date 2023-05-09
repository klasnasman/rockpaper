import React, { useState } from "react";
import PlayerSelectionModal from "./components/PlayerSelectionModal";
import OptionButtons from "./components/OptionButtons";
import ResultMessage from "./components/ResultMessage";
import GameHistory from "./components/GameHistory";
import ResetButton from "./components/ResetButton";
import ScoreBoard from "./components/ScoreBoard";
import useGameLogic from "./hooks/useGameLogic";

const options = ["rock", "paper", "scissors"];
const buttonColors = {
  rock: "btn--rock",
  paper: "btn--paper",
  scissors: "btn--scissors",
};

function App() {
  const [modalVisible, setModalVisible] = useState(true);
  const [gameHistory, setGameHistory] = useState([]);
  const [playerNames, setPlayerNames] = useState(["Player 1", "Computer"]);
  const [score, setScore] = useState({ player1Wins: 0, player2Wins: 0 });

  const {
    playerChoice,
    computerChoice,
    result,
    currentPlayer,
    handlePlayerChoice,
  } = useGameLogic(playerNames, setScore, setGameHistory);

  function handleModalClose() {
    setModalVisible(false);
  }

  function handleModalStart(player1, player2) {
    setPlayerNames([player1, player2]);
    setModalVisible(false);
  }

  function handleReset() {
    setGameHistory([]);
    setScore({ player1Wins: 0, player2Wins: 0 });
  }

  return (
    <div className="container">
      <div className="sidebar--left">
        <h2 className="sidebar__heading">
          <a href="/">
            Rock,
            <br />
            Paper,
            <br />
            Scissors.
          </a>
        </h2>
      </div>

      <main className="main">
        <div className="option__buttons">
          {options.map((playerOption) => (
            <OptionButtons
              key={playerOption}
              option={playerOption}
              onClick={handlePlayerChoice}
              buttonColors={buttonColors}
            />
          ))}
        </div>
        <div className="main__result">
          <ResultMessage
            playerChoice={playerChoice}
            computerChoice={computerChoice}
            result={result}
            playerNames={playerNames}
            currentPlayer={currentPlayer}
          />
        </div>
      </main>

      <div className="sidebar--right">
        <div className="sidebar__score">
          <ResetButton onClick={handleReset} />
          <ScoreBoard score={score} playerNames={playerNames} />
        </div>
        <GameHistory gameHistory={gameHistory} />
      </div>

      <PlayerSelectionModal
        isOpen={modalVisible}
        onClose={handleModalClose}
        onStart={handleModalStart}
      />
    </div>
  );
}

export default App;
