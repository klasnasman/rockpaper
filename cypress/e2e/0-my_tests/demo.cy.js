/// <reference types="cypress"/>

describe("demo tests", () => {
  it("shows result message with 'rock' when computer chooses rock", () => {
    cy.clock();
    cy.visit("http://localhost:3005");

    // Stub out the Math.random() function to always return 0.5 (rock)
    cy.window().then((win) => {
      cy.stub(win.Math, "random").returns(0.5);
    });
    // Click the "scissors" button 3 times to achieve a win streak of 3
    cy.get("button").contains("scissors").click();
    cy.get('[data-cy="resultMsg"]').should("contain", "player");
    cy.get("button").contains("scissors").click();
    cy.get('[data-cy="resultMsg"]').should("contain", "player");
    cy.get("button").contains("scissors").click();
    cy.get('[data-cy="resultMsg"]').should("contain", "player");

    // Verify that the high score has been updated to 3
    cy.get('[data-cy="highScore"]').should("contain", "3");
  });
});
