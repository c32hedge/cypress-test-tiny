describe('sample', () => {
  before(function() {
    console.log('Before code called!');
  });

  it("takes some time and logs to the console", () => {
    console.log("running tests");
    cy.wait(5000);
  });

  it("shouldn't re-run the before", () => {
    cy.visit('https://www.google.com');
    console.log("if the 'running tests' line is not present in the console, but 'Before code called!' is, we ran the before block again.");
  });
});
