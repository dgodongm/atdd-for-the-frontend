describe('empty spec', () => {
  beforeEach(() => {
    // cy.eyesOpen({
    //   appName: "tau-todo-app",
    //   testName: Cypress.currentTest.title
    // })
  })

  afterEach(() => {
    // cy.eyesClose()
  })

  it('passes', () => {
    cy.visit('/')

    cy.get('[data-testid="todo-input"]').type("first todo item")

    cy.get('[data-testid="todo-input"]').should('have.value', "first todo item")

    // cy.eyesCheckWindow({
    //   tag: "add input",
    //   target: "region",
    //   matchLevel: "Strict",
    //   selector: {
    //     type: "name",
    //     selector: "add_todo"
    //   }
    // })
  })
})