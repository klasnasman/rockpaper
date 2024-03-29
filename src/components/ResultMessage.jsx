import React from "react";

function ResultMessage(props) {
  const { playerChoice, computerChoice, result, playerNames, currentPlayer } =
    props;

  if (!playerChoice || !computerChoice) {
    return (
      <p>
        {playerNames[1] === "Computer"
          ? "It's player's turn"
          : `It's ${playerNames[currentPlayer]}'s turn`}
      </p>
    );
  }

  const isPlayerVsPlayer = playerNames[1] !== "Computer";

  return (
    <div>
      <p>
        It's {playerNames[currentPlayer]}'s turn
        <br />({playerNames[0]}) {playerChoice} vs {computerChoice} (
        {playerNames[1]})
      </p>
      <>
        {result === "It's a tie!"
          ? result
          : isPlayerVsPlayer
          ? result.includes(playerNames[0])
            ? `${playerNames[0]} wins!`
            : `${playerNames[1]} wins!`
          : result}
      </>
    </div>
  );
}

export default ResultMessage;
