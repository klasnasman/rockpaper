import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../App";
// import { gameHistory, setGameHistory } from "../../App";
import { calculateWinner, updateScoreByWinner } from "../../hooks/useGameLogic";

describe('Should return random options', () => {
  
  test.each([
    ['rock', 'paper', 'scissors'],
    ['rock', 'paper', 'scissors'],
    ['rock', 'paper', 'scissors']
  ])('Get random option', (options) => {
    
    const output = handleComputerChoice(options)

    console.log(output)
    
    expect(output).toBe('rock' && 'paper' && 'scissors')

  })

})

describe("page", () => {
  test("renders the modal", () => {
    render(<App />);
    const element = screen.queryByText(/play against/i);
    expect(element).toBeInTheDocument();
  });
});

describe("calculate winner", () => {
  test.each([
    ["paper", "rock", "player"],
    ["scissors", "paper", "player"],
    ["rock", "rock", "tie"],
  ])("calculate winner", (player, computer, outcome) => {
    const playerOption = player;
    const computerOption = computer;

    const result = calculateWinner(playerOption, computerOption);

    expect(result).toBe(outcome);
  });
});

describe("save game info", () => {});

//klar
describe("update score by winner", () => {

  test.each([
    ["tie", 0, 0],
    ["player", 1, 0],
    ["computer", 0, 1]
  ])("should return the new standings", (winning, playerScore, computerScore) => {
    const winner = winning;
    const prevScore = { player1Wins: 0, player2Wins: 0 };

    const outcome = updateScoreByWinner(prevScore, winner);

    expect(outcome).toEqual({ player1Wins: playerScore, player2Wins: computerScore });
  });

  test.each([
    ['paper', 'rock', 'player'],
    ['rock', 'paper', 'computer'],
    ['rock', 'rock', 'tie']
  ])('Should save game information', (playerOption, computerOption, winner) => {

    const time = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });

    const savedData = saveGameInfo(playerOption, computerOption, winner)

    console.log(savedData)

    expect(savedData).toEqual({
      time: time,
      playerChoice: playerOption,
      computerChoice: computerOption,
      winner: winner
    })

  })

});

// ANVÄNDARTESTER

describe("buttons", () => {
  // test.each([
  //   ["paper", "rock"],
  //   ["scissors", "paper"]
  // ])("Should render correct value after clicking rock button", (playerOne, playerTwo) => {
  //   render(<App />);
  //   // Given
  //   const playerOneButton = screen.getByRole("button", {
  //     name: playerOne
  //   });
  //   const playerTwoButton = screen.getByRole("button", {
  //     name: playerTwo
  //   });
  //   expect(playerOneButton).toBeInTheDocument();
  //   expect(playerTwoButton).toBeInTheDocument();

  // fireEvent.click(playerOneButton);
  // fireEvent.click(playerTwoButton);

  // // Then
  // console.log(document.body.textContent);
  // const result = screen.getByRole;
  // expect(result).toBeInTheDocument();
  // });

  test("reset button sholud remove list", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "reset" });
    fireEvent.click(button);

    const historyList = screen.getByRole("list");
    expect(historyList.childElementCount).toEqual(0);
  });

  // test.each([
  //   "scissors",
  //   "rock",
  //   "paper"
  // ])("sholud return the picked value", (option) => {
  //   render(<App />)
  //   const button = screen.getByRole("button", {name: option})
  //   fireEvent.click(button)

  //   expect(button).toBe("hej")
  //   // const message = screen.queryByText(/paper vs/i)
  //   // expect(message).toBeInTheDocument();

  // })

  test("sholud return the picked value", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "paper" });
    fireEvent.click(button);

    // expect(button).toBe("hej")
    // const message = screen. (/(player) paper vs/i)
    // expect(message).toBeInTheDocument();
  });
});
