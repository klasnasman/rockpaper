import React from "react";

function ScoreBoard(props) {
  const { score, playerNames } = props;

  return (
    <div className="scoreboard">
      <p data-cy="scoreboardCy">
        {playerNames[0]}:{score.player1Wins} vs {playerNames[1]}:{}
        {score.player2Wins}
      </p>
    </div>
  );
}

export default ScoreBoard;
