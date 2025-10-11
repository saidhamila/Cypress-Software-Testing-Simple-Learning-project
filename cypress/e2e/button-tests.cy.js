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

  it('should toggle between ON and OFF states when toggle button is clicked', () => {
    // Test toggle button
    cy.get('[data-testid="toggle-button"]').should('be.visible').and('contain', 'OFF')
    cy.get('[data-testid="toggle-state"]').should('contain', 'State: OFF')
    
    cy.get('[data-testid="toggle-button"]').click()
    cy.get('[data-testid="toggle-button"]').should('contain', 'ON')
    cy.get('[data-testid="toggle-state"]').should('contain', 'State: ON')

    cy.get('[data-testid="toggle-button"]').click()
    cy.get('[data-testid="toggle-button"]').should('contain', 'OFF')
    cy.get('[data-testid="toggle-state"]').should('contain', 'State: OFF')
  })
})