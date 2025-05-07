// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("loginAsMentee", (email, password) => {
  cy.session([email, password], () => {
    cy.visit(testData.baseUrl, {
      timeout: 10000,
    });
    cy.contains("Cari Lowongan Kerja Pakai Dealls #LebihPasti").should(
      "be.visible"
    );

    // Navigation
    cy.get(".mx-auto > .h-full").should("be.visible").click();
    cy.get(".space-y-4 > .bg-tertiary-violet-0").should("be.visible").click();

    // Login form
    cy.get(".text-xl").should("contain", "Sign In");
    cy.get("#basic_email")
      .should("have.attr", "placeholder", "Enter your email")
      .type(testData.email);
    cy.get("#basic_password")
      .should("have.attr", "placeholder", "Enter your password")
      .type(testData.password);

    // Submit
    cy.get(".border-none").should("contain", "Sign In").click();

    // Verification
    cy.contains("Cari Lowongan Kerja Pakai Dealls #LebihPasti").should(
      "be.visible"
    );
  });
});

Cypress.Commands.add("loginAsMentor", (email, password) => {
  cy.session([email, password], () => {
    cy.visit(testDataMentor.baseUrl),{
        timeout: 10000,
    } ;
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
      .type(testDataMentor.email);

    cy.get("#basic_password")
      .should("be.visible")
      .and("have.attr", "placeholder", "Enter your password")
      .type(testDataMentor.password);

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
