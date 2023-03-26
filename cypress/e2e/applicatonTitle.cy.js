describe('template spec', () => {
  it('is expected to access the application', () => {
    cy.visit('/')
    cy.get('h1').should('contain.text', "WebsiteOne 2023")
  })
})