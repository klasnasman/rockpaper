import { handleComputerChoice } from "../../hooks/useGameLogic";

describe("Should return random options", () => {
  test("Get random option", () => {
    const optionList = [];
    for (let i = 0; i < 10; i++) {
      const output = handleComputerChoice();
      optionList.push(output);
    }

    console.log(optionList);

    // expect(optionList).toBe('rock' && 'paper' && 'scissors')
  });
});
