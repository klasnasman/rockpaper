import { calculateWinner } from "../../hooks/useGameLogic";

describe("calculate winner", () => {
  test.each([
    ["paper", "rock", "player"],
    ["rock", "paper", "computer"],
    ["scissors", "paper", "player"],
    ["rock", "rock", "tie"],
  ])("calculate winner", (player, computer, outcome) => {
    const playerOption = player;
    const computerOption = computer;

    const result = calculateWinner(playerOption, computerOption);

    expect(result).toBe(outcome);
  });
});
