/// <reference types="cypress"/>

describe("demo tests", () => {
  it("shows result message with 'rock' when computer chooses rock", () => {
    cy.clock();
    cy.visit("http://localhost:3000");

    
  });

  it("sholud show warning message when trying to start test without input in second input", () => {

    cy.visit("http://localhost:3000");

    cy.get('input[placeholder="PLAYER 1"]').type("Hej")

    cy.get('[data-cy="startBtn"]').click()
  
  })
});
