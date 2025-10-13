describe('Snapshot example', () => {
  it('matches homepage snapshot', () => {
    cy.visit('/');
    cy.snapshot();
  });
});
