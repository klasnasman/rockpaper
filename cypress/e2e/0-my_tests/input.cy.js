/// <reference types="cypress"/>

describe("Input tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("should show warning message when trying to start test without input in second input", () => {
    cy.get('input[placeholder="PLAYER 1"]').type("Hej");

    cy.get('[data-cy="startBtn"]').click();
  });

  it("should show correct input name", () => {
    cy.get('input[placeholder="PLAYER 1"]').type("Hej");
    cy.get('input[placeholder="PLAYER 2"]').type("Hej2");

    cy.get('[data-cy="startBtn"]').click();
    cy.get('[data-cy="scoreboardCy"]').should("have.text", "Hej:0 vs Hej2:0");
  });
});
