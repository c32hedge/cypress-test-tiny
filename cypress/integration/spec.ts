class A {
  B: B[];
  Name: string;

  constructor() {
    this.B = [new B(this)];
    this.Name = 'object A';
  }
}

class B {
  A: A;
  Name: string;

  constructor(a: A) {
    this.A = a;
    this.Name = 'object B';
  }

  toJSON() {
    let thisCopy = Cypress._.cloneDeep(this);
    thisCopy.A = undefined;
    return thisCopy;
  }
}

describe('page', () => {
  let obj = {
    As: [
      new A()
    ]
  }

  before(() => {
    cy.log(JSON.stringify(obj));
    cy.task('example', obj);
  });

  it('works', () => {
    expect(true).to.be.true;
  });
});
