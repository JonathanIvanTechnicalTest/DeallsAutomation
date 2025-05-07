describe("Dealls Tests", () => {
  before(() => {
    cy.loginAsMentor(testDataMentor.email, testDataMentor.password);
  });

  it("should visit mentoring site & edit the mentor profile", () => {

    cy.visit(testData.mentoringURL);

    cy.get(".md\\:h-auto > :nth-child(2) > .mx-auto").then(($container) => {
      console.log("Container HTML:", $container[0].outerHTML);
      console.log("Children:", $container.children());
      $container.find("*").each((index, el) => {
        console.log(`Element ${index}:`, el.tagName, el.className);
      });
    });

    cy.contains("a", "Ubah Profil").should("be.visible").click({ force: true });

    cy.get(":nth-child(2) > .gap-6 > :nth-child(1)")
      .find("button")
      .should("be.visible")
      .click({ force: true });

    // CHANGE THE TYPE ABOUT ME
    cy.get("#about")
      .clear()
      .type(
        "Mentor Jonathan Ivan is a professional mentor with extensive experience in the field of game development. He has a strong background in game design, programming, and project management. Jonathan is passionate about helping others succeed in their careers and is dedicated to providing valuable guidance and support to his mentees."
      );

    cy.get(".flex-row > .ant-btn").click({ force: true });
  });
});
