class A {
  constructor() {
    this.B = [new B(this)];
    this.Name = 'object A';
  }
}

class B {
  constructor(a) {
    this.A = a;
    this.Name = 'object B';
  }

  toJSON() {
    var thisCopy = Cypress._.cloneDeep(this);
    thisCopy.A = undefined;
    return thisCopy;
  }
}

describe('page', () => {
  var obj = {
    A: new A()
  }

  before(() => {
    cy.log(JSON.stringify(obj));
    cy.task('example', obj);
  });

  it('works', () => {
    expect(true).to.be.true;
  });
});
