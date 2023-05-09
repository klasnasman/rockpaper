import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../App";
// import { gameHistory, setGameHistory } from "../../App";
import { calculateWinner, updateScoreByWinner } from "../../hooks/useGameLogic";

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

// går att testa mer här!
// testa med player och computer som vinnare
describe("update score by winner", () => {
  test("tie", () => {
    const winner = "tie";
    const prevScore = [1, 2];

    const outcome = updateScoreByWinner(prevScore, winner);

    expect(outcome).toBe(prevScore);
  });
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
