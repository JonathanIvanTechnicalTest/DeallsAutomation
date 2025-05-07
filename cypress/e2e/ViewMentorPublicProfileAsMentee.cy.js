describe("Dealls Tests", () => {
  before(() => {
    cy.loginAsMentee(testData.email, testData.password);
  });

  it("should visit mentoring site", () => {
    cy.visit(testData.mentoringURL);
    cy.get("#searchMentor").type("Dafi").wait(2000).type("{enter}");
    cy.get(".mt-4 > .flex-row").click({ force: true });
    cy.scrollTo("bottom", { duration: 10000 });
  });
});
