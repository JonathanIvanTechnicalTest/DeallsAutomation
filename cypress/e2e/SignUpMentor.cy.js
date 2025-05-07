describe("Dealls Sign-Up-Mentor Test", () => {
  function clickSelanjutnya(options = {}) {
    const { force = true, timeout = 10000 } = options;

    cy.contains(".order-1", "Selanjutnya", { timeout })
      .should("be.visible")
      .and("not.be.disabled")
      .click({ force });
  }

  it("sign-up as a mentor flow", () => {
    // Initial navigation
    cy.visit(testDataMentor.baseUrl);
    cy.contains("Cari Lowongan Kerja Pakai Dealls #LebihPasti").should(
      "be.visible"
    );

    // Break up chains and add waits between navigation steps
    cy.get(".mx-auto > .h-full").should("be.visible");
    cy.wait(500); // Add small delay between actions
    cy.get(".mx-auto > .h-full").click();

    cy.get(".space-y-4 > .w-full").should("be.visible");
    cy.wait(500);
    cy.get(".space-y-4 > .w-full").click();

    // Email sign-up section
    cy.get(":nth-child(2) > .mt-2\\.5").should("exist").and("be.visible");
    cy.get(":nth-child(2) > .mt-auto > .text-white")
      .should("be.visible")
      .and("contain", "Sign Up With Email")
      .and("not.be.disabled");
    cy.get(":nth-child(2) > .mt-auto > .text-white").click({ force: true });

    // Personal information form
    cy.get(".flex.text-center > .flex > .font-bold")
      .should("be.visible")
      .and("contain", "Informasi umum tentang kamu");

    cy.wait(500);
    cy.get("#mentor-onboarding_fullName").should("be.visible");
    cy.get("#mentor-onboarding_fullName").should(
      "have.attr",
      "placeholder",
      "Nama Lengkap"
    );
    cy.get("#mentor-onboarding_fullName").type(testDataMentor.fullName, {
      force: true,
    });

    cy.get("#mentor-onboarding_email").should("be.visible");
    cy.get("#mentor-onboarding_email").should(
      "have.attr",
      "placeholder",
      "Email"
    );
    cy.get("#mentor-onboarding_email").type(testDataMentor.email, {
      force: true,
    });

    cy.get("#mentor-onboarding_whatsapp").should("be.visible");
    cy.get("#mentor-onboarding_whatsapp").should(
      "have.attr",
      "placeholder",
      "Whatsapp (mulai dengan kode negara, cth: 62)"
    );
    cy.get("#mentor-onboarding_whatsapp").type(testDataMentor.wa_number, {
      force: true,
    });

    cy.get("#mentor-onboarding_linkedInUrl").should("be.visible");
    cy.get("#mentor-onboarding_linkedInUrl").should(
      "have.attr",
      "placeholder",
      "LinkedIn URL (Opsional)"
    );
    cy.get("#mentor-onboarding_linkedInUrl").type(testDataMentor.LinkedIn, {
      force: true,
    });

    cy.get("#mentor-onboarding_instagramUrl").should("be.visible");
    cy.get("#mentor-onboarding_instagramUrl").should(
      "have.attr",
      "placeholder",
      "Instagram URL (Opsional)"
    );
    cy.get("#mentor-onboarding_instagramUrl").type(testDataMentor.Instagram, {
      force: true,
    });

    cy.get("#mentor-onboarding_invitationCode").should("be.visible");
    cy.get("#mentor-onboarding_invitationCode").should(
      "have.attr",
      "placeholder",
      "Invitation Code (Optional)"
    );
    cy.get("#mentor-onboarding_invitationCode").type(
      testDataMentor.InvitationCode,
      { force: true }
    );

    // Continue to next section
    clickSelanjutnya();

    // Checkbox selection with proper waits
    cy.get(
      ":nth-child(1) > .gap-4 > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn"
    ).should("be.visible");
    cy.wait(500);
    cy.get(
      ":nth-child(1) > .gap-4 > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn"
    ).within(() => {
      cy.get(".ant-checkbox-wrapper").click({ force: true });
    });

    cy.get(":nth-child(1) > .gap-4 .ant-checkbox-input").should("be.checked");

    cy.wait(500);
    cy.get(".ant-select-selector").click({ force: true });
    cy.get(".ant-select-dropdown:visible", { timeout: 10000 })
      .should("be.visible")
      .within(() => {
        cy.get(".ant-select-item-option:not(.ant-select-item-option-disabled)")
          .first()
          .scrollIntoView()
          .should("be.visible")
          .click({ force: true });
      });
    cy.wait(500);
    cy.get(".overflow-y-auto > :nth-child(1)")
      .should("be.visible")
      .within(() => {
        cy.get(".ant-checkbox-wrapper")
          .should("be.visible")
          .and("not.have.class", "ant-checkbox-wrapper-disabled")
          .click({ force: true });
        cy.get(".ant-checkbox-input").should("be.checked");
      });

    clickSelanjutnya();

    cy.get(".flex-col > .flex > .font-bold")
      .should("be.visible")
      .and("contain", "Pengalaman Kerja Kamu");

    cy.wait(500);

    cy.get("#companyName")
      .should("be.visible")
      .type(testDataMentor.companyName);

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
        if (
          $body.find(`${selector}:contains("${testDataMentor.companyName}")`)
            .length
        ) {
          cy.contains(selector, testDataMentor.companyName).click();
        }
      });
    });

    cy.get(
      ":nth-child(1) > :nth-child(1) > :nth-child(1) > .Select_system_v1__KvWIf > .relative > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector"
    )
      .should("be.visible")
      .type(testDataMentor.industri);

    selectors.forEach((selector) => {
      cy.get("body").then(($body) => {
        if (
          $body.find(`${selector}:contains("${testDataMentor.industri}")`)
            .length
        ) {
          cy.contains(selector, testDataMentor.industri).click();
        }
      });
    });

    cy.get("#roleLevel").should("be.visible").type(testDataMentor.posisi);

    selectors.forEach((selector) => {
      cy.get("body").then(($body) => {
        if (
          $body.find(`${selector}:contains("${testDataMentor.posisi}")`).length
        ) {
          cy.contains(selector, testDataMentor.posisi).click();
        }
      });
    });

    cy.get("#roleName").should("be.visible").type(testDataMentor.peran);

    selectors.forEach((selector) => {
      cy.get("body").then(($body) => {
        if (
          $body.find(`${selector}:contains("${testDataMentor.peran}")`).length
        ) {
          cy.contains(selector, testDataMentor.peran).click();
        }
      });
    });

    cy.get("#startDate").should("be.visible").type(testDataMentor.startDate);

    cy.get("#endDate").should("be.visible").type(testDataMentor.endDate);

    cy.get("#currentlyOccupied").within(() => {
      cy.get(".ant-checkbox-wrapper")
        .should("be.visible")
        .and("not.have.class", "ant-checkbox-disabled") // Ensure not disabled
        .click()
        .click();
    });

    cy.get("#endDate")
      .should("be.visible")
      .type(testDataMentor.endDate)
      .should("have.value", testDataMentor.endDate);

    clickSelanjutnya({ force: true });

    cy.get(".flex-col > .flex > .font-bold")
      .should("be.visible")
      .and("contain", "Pendidikan Kamu");

    cy.get("#institution").type(testDataMentor.campus);
    selectors.forEach((selector) => {
      cy.get("body").then(($body) => {
        if (
          $body.find(`${selector}:contains("${testDataMentor.campus}")`).length
        ) {
          cy.contains(selector, testDataMentor.campus).click();
        }
      });
    });

    cy.get("#major").type(testDataMentor.major);

    cy.get("#startDate").should("be.visible").type(testDataMentor.startDate);

    cy.get("#endDate").should("be.visible").type(testDataMentor.endDate);

    clickSelanjutnya({ force: true });

    cy.get(".flex.text-center > .flex > .font-bold").should("contain", "Bio");
    cy.get("#aboutMe").type(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      { force: true }
    );

    clickSelanjutnya({ force: true });

    cy.get(".flex-col > .flex > .font-bold")
      .should("be.visible")
      .and(
        "contain",
        "Bantu kami memastikan mentoring akan selalu 100% gratis"
      );

    cy.get(".ant-checkbox-wrapper")
      .should("be.visible")
      .and("not.have.class", "ant-checkbox-wrapper-disabled")
      .click();

    cy.get(".order-1")
      .should("be.visible")
      .and("contain", "Next")
      .click({ force: true });

    cy.get(".flex.text-center > .flex > .font-bold").should(
      "contain",
      "Langkah terakhir, mari kita menjaga keamanan akun Anda."
    );

    cy.get("#password")
      .should("be.visible")
      .and("have.attr", "placeholder", "Atur kata sandi Anda di sini")
      .type(testDataMentor.password);

    cy.get(
      ":nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input-suffix"
    )
      .should("be.visible")
      .click()
      .wait(1000)
      .click();

    cy.get("#confirmPassword")
      .should("be.visible")
      .and("have.attr", "placeholder", "Atur kata sandi Anda di sini")
      .type(testDataMentor.passwordConfirmation);

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

    cy.get("#mentoring-onboarding-finish-btn")
      .should("be.visible")
      .and("contain", "Selesai")
      .click({ force: true });
  });
});
