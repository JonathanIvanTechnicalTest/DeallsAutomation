describe("Dealls Sign-In-Mentee-invalid Test", () => {
    it("sign-in as a mentee flow", () => {
      cy.visit(testData.baseUrl);
      cy.contains("Cari Lowongan Kerja Pakai Dealls #LebihPasti").should(
        "be.visible"
      );
  
      cy.get(".mx-auto > .h-full").should("be.visible").click();
  
      cy.get(".space-y-4 > .bg-tertiary-violet-0").should("be.visible").click();
  
      cy.get(".text-xl")
        .should("exist")
        .and("be.visible")
        .and("contain", "Sign In");
  
      cy.get("#basic_email")
        .should("be.visible")
        .and("have.attr", "placeholder", "Enter your email")
        .type(testData.email);
  
      cy.get("#basic_password")
        .should("be.visible")
        .and("have.attr", "placeholder", "Enter your password")
        .type("Testing1233");
  
      cy.get(".ant-input-suffix").should("be.visible").click().wait(1000).click();
  
      cy.get(".border-none")
        .should("be.visible")
        .and("not.be.disabled")
        .and("contain", "Sign In")
        .click();
  
      cy.contains("Cari Lowongan Kerja Pakai Dealls #LebihPasti").should(
        "be.visible"
      );
    });
  });
  