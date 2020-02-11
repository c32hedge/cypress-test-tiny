describe('css white-space', () => {
  before(() => {
    cy.visit('example.html');
  });

  describe('these tests pass in 3.8.3 but fail in 4.0.1', () => {
    it('should preserve whitespace in the pre paragraph', () => {
      cy.get('p#pre-1').contains('this\n      field  should preserve all\n      whitespace');
    });

    it('should preserve whitespace in the pre-wrap paragraph', () => {
      cy.get('p#pre-wrap-1').contains('this\n      field  should preserve all\n      whitespace');
    });

    it('should pass if a newline is passed to contains and also rendered by the browser', () => {
      cy.get('#pre-wrap-heading').contains('hello\nworld');
    });

    it('should fail if a newline is not passed to contains but is rendered by the browser', () => {
      cy.get('#pre-wrap-heading').contains('hello world').should("not.exist");
    });
  });

  describe('these tests pass in 4.0.1, but fail in 3.8.3--this was the good portion of the change', () => {

    it('should fail if a newline is passed to contains and is not rendered by the browser', () => {
      cy.get('#normal-heading').contains('hello\nworld').should("not.exist");
    });

    it('should pass if a newline is not passed to contains and is not rendered by the browser', () => {
      cy.get('#normal-heading').contains('hello world');
    });
  });
});
