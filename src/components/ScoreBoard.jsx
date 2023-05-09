import React from "react";

function ScoreBoard({ score, playerNames }) {
  return (
    <div className="scoreboard">
      <p>
        {playerNames[0]}:{score.player1Wins} vs {playerNames[1]}:{}
        {score.player2Wins}
      </p>
    </div>
  );
}

export default ScoreBoard;
