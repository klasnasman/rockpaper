import React from "react";

function HighScore({ winStreak }) {
  const highScore = parseInt(localStorage.getItem("highScore")) || 0;

  return (
    <div data-cy="highScore">
      <p>High score: {highScore}</p>
      {winStreak > highScore && <p>New high score!</p>}
    </div>
  );
}

export default HighScore;
