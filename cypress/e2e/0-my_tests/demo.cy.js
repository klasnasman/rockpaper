/// <reference types="cypress"/>

describe("demo tests", () => {
  it("shows result message with 'rock' when computer chooses rock", () => {
    cy.clock();
    cy.visit("http://localhost:3005");

    // Given
    cy.window().then((win) => {
      cy.stub(win.Math, "random").returns(0.5);
    });
    // When
    cy.get("button").contains("scissors").click();
    cy.get('[data-cy="resultMsg"]').should("contain", "player");
    cy.get("button").contains("scissors").click();
    cy.get('[data-cy="resultMsg"]').should("contain", "player");
    cy.get("button").contains("scissors").click();
    cy.get('[data-cy="resultMsg"]').should("contain", "player");

    // Then
    cy.get('[data-cy="highScore"]').should("contain", "3");
  });
});
