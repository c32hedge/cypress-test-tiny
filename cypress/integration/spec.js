describe('page', () => {
  for (let i=1; i <= 30; i++) {
    it(`test ${i}`, () => {
      cy.visit('https://www.google.com');
    });
  }
});
