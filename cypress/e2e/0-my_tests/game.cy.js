/// <reference types="cypress"/>

describe("Game tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Game scenario player vs player result in tie", () => {
    cy.get('input[placeholder="PLAYER 1"]').type("Hej");
    cy.get('input[placeholder="PLAYER 2"]').type("Hej2");
    cy.get('[data-cy="startBtn"]').click();
    cy.get('[data-cy="rockBtn"]').click();
    cy.get('[data-cy="rockBtn"]').click();
    cy.get('[data-cy="resultCy"]').should("include.text", "It's a tie!");
  });

  it("Game scenario player vs player result in win", () => {
    cy.get('input[placeholder="PLAYER 1"]').type("Hej");
    cy.get('input[placeholder="PLAYER 2"]').type("Hej2");
    cy.get('[data-cy="startBtn"]').click();
    cy.get('[data-cy="rockBtn"]').click();
    cy.get('[data-cy="scissorsBtn"]').click();
    cy.get('[data-cy="scoreboardCy"]').should("have.text", "Hej:1 vs Hej2:0");
  });

  it("Game scenario player vs computer result in win", () => {
    cy.get('[data-cy="computerBtn"]').click();
    cy.get('[data-cy="resultCy"]').should("include.text", "It's player's turn");
    cy.get('[data-cy="rockBtn"]').click();
    cy.window().then((win) => {
      cy.stub(win.Math, "random").returns(0.5);
    });
  });
});
