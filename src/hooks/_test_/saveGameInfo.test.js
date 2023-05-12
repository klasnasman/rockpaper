import { saveGameInfo } from "../../hooks/useGameLogic";

describe("save game info", () => {
  test.each([
    ["paper", "rock", "player"],
    ["rock", "paper", "computer"],
    ["rock", "rock", "tie"],
  ])("Should return an object with the game information", (playerOption, computerOption, winner) => {
    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const savedData = saveGameInfo(playerOption, computerOption, winner);

    expect(savedData).toEqual({
      time: time,
      playerChoice: playerOption,
      computerChoice: computerOption,
      winner: winner,
    });
  });
});
