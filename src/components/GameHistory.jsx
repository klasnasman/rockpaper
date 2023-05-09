import React from "react";

function GameHistory(props) {
  const { gameHistory } = props;

  return (
    <div className="sidebar__history">
      <ul className="history__ul" data-cy="resultMsg">
        {[...gameHistory].reverse().map((game, index) => (
          <li
            className={`history__li ${
              game.winner === "player" ? "winner" : ""
            }`}
            data-cy="gameInfo"
            key={index}>
            {`(${game.time}) ${game.playerChoice} vs ${game.computerChoice} (${game.winner})`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameHistory;
