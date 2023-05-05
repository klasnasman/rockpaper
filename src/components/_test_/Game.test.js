import React from "react";
import { render } from "@testing-library/react";
import App from "../../App";

test("renders the Rock Paper Scissors game", () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Rock Paper Scissors/i);
  expect(titleElement).toBeInTheDocument();
});
