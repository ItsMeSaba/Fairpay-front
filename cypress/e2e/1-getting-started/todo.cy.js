/// <reference types="cypress" />


describe('example to-do app', () => {
  // beforeEach(() => {
  //   cy.visit('http://localhost:3000/')
  // })

	it("Visits Landing Page", () => {
		cy.visit('http://localhost:3000/');
	})
})
