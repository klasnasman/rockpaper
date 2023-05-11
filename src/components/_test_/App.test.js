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
  test("reset button sholud remove list", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "reset" });
    fireEvent.click(button);

    const historyList = screen.getByRole("list");
    expect(historyList.childElementCount).toEqual(0);
  });
});
