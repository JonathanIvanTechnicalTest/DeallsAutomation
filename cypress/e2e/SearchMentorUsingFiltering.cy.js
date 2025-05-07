describe("Dealls Tests", () => {
  before(() => {
    cy.loginAsMentee(testData.email, testData.password);
  });

  it("should visit mentoring site & Search Mentor by Filter Relevant", () => {
    cy.visit(testData.mentoringURL);

    cy.get(".my-9 > .gap-2 > .flex").click({ force: true });
    // 1. Open the dropdown
    cy.get(
      ".MentorMobileSortParam_sort_param_dropdown__6qX5M .ant-select-selector"
    ).click({ force: true });

    cy.get(".ant-select-dropdown:not(.ant-select-dropdown-hidden)")
      .find(".ant-select-item-option")
      .contains("Paling relevan")
      .click({ force: true });

    cy.get(".mt-4 > :nth-child(2) > .ant-select > .ant-select-selector")
      .should("be.visible")
      .click({ force: true });

    cy.get(".ant-select-dropdown:not(.ant-select-dropdown-hidden)")
      .find(".ant-checkbox-wrapper")
      .first()
      .find(".ant-checkbox-input")
      .click();

    cy.get(".ant-drawer-body > .mt-4 > .flex").click({ force: true });
  });

  it("should visit mentoring site & Search Mentor by Filter Availability", () => {
    cy.visit(testData.mentoringURL);

    cy.get(".my-9 > .gap-2 > .flex").click({ force: true });
    // 1. Open the dropdown
    cy.get(
      ".MentorMobileSortParam_sort_param_dropdown__6qX5M .ant-select-selector"
    ).click({ force: true });

    cy.get(".ant-select-dropdown:not(.ant-select-dropdown-hidden)")
      .find(".ant-select-item-option")
      .contains("Ketersediaan Terdekat")
      .click({ force: true });

    cy.get(".mt-4 > :nth-child(2) > .ant-select > .ant-select-selector")
      .should("be.visible")
      .click({ force: true });

    cy.get(".ant-select-dropdown:not(.ant-select-dropdown-hidden)")
      .find(".ant-checkbox-wrapper")
      .first()
      .find(".ant-checkbox-input")
      .click();

    cy.get(".ant-drawer-body > .mt-4 > .flex").click({ force: true });
  });

  it("should visit mentoring site & Search Mentor by Filter Newest", () => {
    cy.visit(testData.mentoringURL);

    cy.get(".my-9 > .gap-2 > .flex").click({ force: true });
    // 1. Open the dropdown
    cy.get(
      ".MentorMobileSortParam_sort_param_dropdown__6qX5M .ant-select-selector"
    ).click({ force: true });

    cy.get(".ant-select-dropdown:not(.ant-select-dropdown-hidden)")
      .find(".ant-select-item-option")
      .contains("Terbaru")
      .click({ force: true });

    cy.get(".mt-4 > :nth-child(2) > .ant-select > .ant-select-selector")
      .should("be.visible")
      .click({ force: true });

    cy.get(".ant-select-dropdown:not(.ant-select-dropdown-hidden)")
      .find(".ant-checkbox-wrapper")
      .first()
      .find(".ant-checkbox-input")
      .click();

    cy.get(".ant-drawer-body > .mt-4 > .flex").click({ force: true });
  });
});
