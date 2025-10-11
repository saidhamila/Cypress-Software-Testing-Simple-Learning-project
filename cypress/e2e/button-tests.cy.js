describe('Button Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should increment click counter when primary button is clicked', () => {
    // Test primary button click counter
    cy.get('[data-testid="primary-button"]').should('be.visible').click()
    cy.get('[data-testid="click-count"]').should('contain', 'Clicked: 1 times')
    
    cy.get('[data-testid="primary-button"]').click()
    cy.get('[data-testid="click-count"]').should('contain', 'Clicked: 2 times')
  })
})