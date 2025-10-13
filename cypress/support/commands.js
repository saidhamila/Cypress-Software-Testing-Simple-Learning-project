// Add custom Cypress commands here when you need them.
// Example (commented out to keep zero test logic):
// Cypress.Commands.add('login', (email, password) => { ... });

// Custom snapshot command for visual regression testing
Cypress.Commands.add('snapshot', (name = 'default') => {
  const snapshotName = name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
  cy.document().then((doc) => {
    const htmlContent = doc.documentElement.outerHTML;
    cy.task('compareSnapshot', {
      name: snapshotName,
      html: htmlContent
    });
  });
});
