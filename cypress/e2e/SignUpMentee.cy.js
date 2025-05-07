describe("Dealls Sign-Up-Mentee Test", () => {

  function clickSelanjutnya(options = {}) {
    const { force = true, timeout = 10000 } = options;

    cy.contains(".order-1", "Selanjutnya", { timeout })
      .should("be.visible")
      .and("not.be.disabled")
      .click({ force });
  }

  it("sign-up as a mentee flow", () => {
    cy.visit(testData.baseUrl);
    cy.contains("Cari Lowongan Kerja Pakai Dealls #LebihPasti").should(
      "be.visible"
    );

    cy.get(".mx-auto > .h-full").should("be.visible").click();

    cy.get(".space-y-4 > .w-full").should("be.visible").click();

    cy.get(":nth-child(1) > .mt-2\\.5").should("exist").and("be.visible");

    cy.get(":nth-child(1) > .mt-auto > .text-white")
      .should("be.visible")
      .and("contain", "Sign Up With Email")
      .and("not.be.disabled")
      .click({ force: true }); // Force click if needed

    cy.get(".text-center")
      .should("be.visible")
      .and("contain", "Tell us your name");

    cy.get("#fullName")
      .should("be.visible")
      .and("have.attr", "placeholder", "Your full name here please")
      .type(testData.fullName);

    clickSelanjutnya({ force: true });

    cy.get(".flex.text-center > .flex > .font-bold")
      .should("be.visible")
      .and("contain", "Let’s Build Profile That Attracts Employers");

    cy.get(
      ".mt-3 > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector"
    )
      .should("be.visible")
      .click({ force: true });

    cy.get(".ant-select-dropdown:visible")
      .find(".ant-select-item-option")
      .then(($options) => {
        const options = $options.toArray();
        const randomOption =
          options[Math.floor(Math.random() * options.length)];
        cy.wrap(randomOption).click();
      });

    cy.get("#whatsapp")
      .should("be.visible")
      .and("have.attr", "placeholder", "Start with country code ex. 62")
      .type(testData.wa_number);

    cy.get("#email")
      .should("be.visible")
      .and("have.attr", "placeholder", "Enter your email")
      .type(testData.email);

    cy.get("#linkedInUrl")
      .should("be.visible")
      .and("have.attr", "placeholder", "Enter your LinkedIn link")
      .type(testData.LinkedIn);

    cy.get("#campus").should("be.visible").type(testData.campus);

    const selectors = [
      "button",
      '[role="option"]',
      ".ant-select-item",
      ".dropdown-item",
      ".select-item",
      "li",
    ];

    selectors.forEach((selector) => {
      cy.get("body").then(($body) => {
        if ($body.find(`${selector}:contains("${testData.campus}")`).length) {
          cy.contains(selector, testData.campus).click();
        }
      });
    });

    cy.get(
      ":nth-child(6) > .Select_system_v1__KvWIf > .relative > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector"
    )
      .should("be.visible")
      .click({ force: true });

    cy.get(".ant-select-dropdown:visible")
      .find(".ant-select-item-option")
      .then(($options) => {
        const options = $options.toArray();
        const randomOption =
          options[Math.floor(Math.random() * options.length)];
        cy.wrap(randomOption).click();
      });

    clickSelanjutnya({ force: true });

    cy.get(":nth-child(2) > .flex-col > .flex > .font-bold")
      .should("be.visible")
      .and("contain", "Where magic happens. Get your profile analyzed");

    cy.get(".mt-4")
      .should("be.visible")
      .and("contain", "Skip for now, my CV is not ready")
      .click({ force: true });

    clickSelanjutnya();

    cy.get(".font-bold > .mx-auto")
      .should("be.visible")
      .and("contain", "Where magic happens. Fill in & get analysed");

    cy.get("#companyName").should("be.visible").type(testData.companyName);

    selectors.forEach((selector) => {
      cy.get("body").then(($body) => {
        if ($body.find(`${selector}:contains("${testData.companyName}")`).length) {
          cy.contains(selector, testData.companyName).click();
        }
      });
    });

    cy.get("#roleLevel").should("be.visible");

    cy.get(":nth-child(4) .ant-select-selector").click();

    cy.get(".ant-select-dropdown:visible") // Ensure dropdown is visible
      .contains(".ant-select-item-option", testData.posisi)
      .scrollIntoView()
      .click({ force: true });

    cy.get(":nth-child(4) .ant-select-selection-item").should(
      "contain",
      testData.posisi
    );

    cy.get("#roleName").should("be.visible").type(testData.peran);

    selectors.forEach((selector) => {
      cy.get("body").then(($body) => {
        if ($body.find(`${selector}:contains("${testData.peran}")`).length) {
          cy.contains(selector, testData.peran).click();
        }
      });
    });

    cy.get("#startDate").should("be.visible").type(testData.startDate);

    cy.get("#endDate").should("be.visible").type(testData.endDate);

    cy.get("#currentlyOccupied").within(() => {
      cy.get(".ant-checkbox-wrapper")
        .should("be.visible")
        .and("not.have.class", "ant-checkbox-disabled") // Ensure not disabled
        .click()
        .click();
    });

    cy.get("#endDate")
      .should("be.visible")
      .type(testData.endDate)
      .should("have.value", testData.endDate);

    clickSelanjutnya({ force: true });

    cy.get(".font-bold > .mx-auto")
      .should("be.visible")
      .and("contain", "What roles are you interested in?");

    cy.wait(1000);

    cy.contains(".ant-btn", "Add another specialization")
      .should("be.visible")
      .click({ force: true });

    cy.get(":nth-child(2) > .overflow-hidden > .bg-white")
      .should("be.visible")
      .within(() => {
        cy.get(".ant-select-selector")
          .should("be.visible")
          .click({ force: true }); // force click in case it's covered
      });

    cy.get(".ant-select-dropdown", { timeout: 10000 }) // 10 second timeout
      .should("be.visible")
      .within(() => {
        cy.get(".ant-select-item-option")
          .should("have.length.gt", 0)
          .then(($options) => {
            const randomOption =
              $options[Math.floor(Math.random() * $options.length)];
            cy.wrap(randomOption).scrollIntoView().click({ force: true });
          });
      });

    cy.get("#relevant-role-form_1-role .ant-checkbox-wrapper")
      .first()
      .scrollIntoView()
      .click();

    cy.get(
      "#relevant-role-form_1-role > :nth-child(1) .ant-checkbox-input"
    ).should("be.checked");

    clickSelanjutnya({ force: true });

    cy.get(".flex.text-center > .flex > .font-bold")
      .should("be.visible")
      .and("contain", "Last step, let’s keep your account secured.");

    cy.get("#password")
      .should("be.visible")
      .and("have.attr", "placeholder", "Atur kata sandi Anda di sini")
      .type(testData.password);

    cy.get(
      ":nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input-suffix"
    )
      .should("be.visible")
      .click()
      .wait(1000)
      .click();

    cy.get("#passwordConfirmation")
      .should("be.visible")
      .and("have.attr", "placeholder", "Atur kata sandi Anda di sini")
      .type(testData.passwordConfirmation);

    cy.get(
      ":nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input-suffix"
    )
      .should("be.visible")
      .click()
      .wait(1000)
      .click();

    cy.get("#checkPrivacyPolicy")
      .and("not.be.checked")
      .click()
      .wait(1000)
      .click()
      .wait(1000)
      .click();

    cy.get("#dealls-onboarding-finish")
      .should("be.visible")
      .and("contain", "Finish")
      .click({ force: true });
    
    cy.wait(5000);
    cy.get('article.flex > .ant-btn')
      .should("be.visible")
      .and("contain", "Start Exploring")
      .click({ force: true });
  });
});
