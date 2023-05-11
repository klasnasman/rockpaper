import React from "react";

function ResultMessage({
  playerChoice,
  computerChoice,
  result,
  playerNames,
  currentPlayer,
}) {
  if (!playerChoice || !computerChoice) {
    return (
      <p>
        {playerNames[1] === "Computer"
          ? "It's player's turn"
          : `It's ${playerNames[currentPlayer]}'s turn`}
      </p>
    );
  }

  return (
    <div>
      <p>
        It's {playerNames[currentPlayer]}'s turn <br />
        <br />({playerNames[0]}) {playerChoice} vs {computerChoice} (
        {playerNames[1]})
      </p>
      <>
        <br />
        {console.log(result)}
        {result === "It's a tie!"
          ? result
          : result.includes("win!")
          ? `${playerNames[0]} wins!`
          : `${playerNames[1]} wins!`}
      </>
    </div>
  );
}

export default ResultMessage;
