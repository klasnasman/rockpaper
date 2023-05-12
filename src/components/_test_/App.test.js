import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../App";

describe("modal", () => {
  test("renders the modal", () => {
    render(<App />);
    const element = screen.queryByText(/play against/i);
    expect(element).toBeInTheDocument();
  });
});

// ANVÄNDARTESTER
describe("buttons", () => {

  test.each([
    "rock",
    "paper",
    "scissors"
  ])('Should update the history list when button is clicked - user VS computer', (option) => {

    render(<App />)

    const button = screen.getByRole('button', {name: option})
    fireEvent.click(button); 

    const historyList = screen.getByRole('list')
    expect(historyList).toHaveTextContent(`${option} vs`)

  })

  test("reset button should remove list", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "reset" });
    fireEvent.click(button);

    const historyList = screen.getByRole("list");
    expect(historyList.childElementCount).toEqual(0);
  });
});
