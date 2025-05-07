describe("Dealls Tests", () => {
  before(() => {
    cy.loginAsMentee(testData.email, testData.password);
  });

  it("should visit mentoring site & Search Mentor by Name", () => {
    cy.visit(testData.mentoringURL);
    cy.get("#searchMentor").type("Dafi").wait(2000).type("{enter}");
  });

  it("should visit mentoring site & Search Mentor by Skill", () => {
    cy.visit(testData.mentoringURL);
    cy.get("#searchMentor").type("Accounting").wait(2000).type("{enter}");
  });

  it("should visit mentoring site & Search Mentor by Keyword", () => {
    cy.visit(testData.mentoringURL);
    cy.get("#searchMentor").type("Singapore").wait(2000).type("{enter}");
  });
});
