describe('Snapshot example', () => {
  it('matches homepage snapshot', () => {
    cy.visit('/');
    cy.snapshot().then((result) => {
      expect(result.match).to.be.true;
      expect(['Snapshot matches', 'New snapshot created']).to.include(result.message);
    });
  });
});
