import { updateScoreByWinner } from "../../hooks/useGameLogic";

describe("update score by winner", () => {
  test.each([
    ["tie", 0, 0],
    ["player", 1, 0],
    ["computer", 0, 1],
  ])(
    "should return the new standings",
    (winning, playerScore, computerScore) => {
      const winner = winning;
      const prevScore = { player1Wins: 0, player2Wins: 0 };

      const outcome = updateScoreByWinner(prevScore, winner);

      expect(outcome).toEqual({
        player1Wins: playerScore,
        player2Wins: computerScore,
      });
    }
  );
});
