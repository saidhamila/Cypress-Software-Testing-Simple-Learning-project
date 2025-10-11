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

  it('should reset all button states when reset button is clicked', () => {
    // First, change some states
    cy.get('[data-testid="primary-button"]').click().click() // Click twice
    cy.get('[data-testid="toggle-button"]').click() // Turn ON
    
    // Verify states changed
    cy.get('[data-testid="click-count"]').should('contain', 'Clicked: 2 times')
    cy.get('[data-testid="toggle-button"]').should('contain', 'ON')
    cy.get('[data-testid="toggle-state"]').should('contain', 'State: ON')

    // Test reset button
    cy.get('[data-testid="reset-button"]').should('be.visible').click()
    
    // Verify everything is reset
    cy.get('[data-testid="click-count"]').should('contain', 'Clicked: 0 times')
    cy.get('[data-testid="toggle-button"]').should('contain', 'OFF')
    cy.get('[data-testid="toggle-state"]').should('contain', 'State: OFF')
  })
})