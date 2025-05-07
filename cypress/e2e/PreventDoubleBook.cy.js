describe("Dealls Tests", () => {
  before(() => {
    cy.loginAsMentee(testData.email, testData.password);
  });

  it("should book a mentor", () => {
    cy.visit(testData.mentoringURL);
    cy.get("#searchMentor").type("Dafi").wait(2000).type("{enter}");
    cy.get(".mt-4 > .flex-row").click({ force: true });

    cy.get(".lg\\:mt-\\[55\\.5px\\] > .fixed > .px-4")
      .contains("button", "Ajukan Jadwal")
      .should("be.visible")
      .click({ force: true });

    cy.get(".space-y-1 > .font-semibold").contains("Langkah 1 dari 3");

    cy.get(
      ":nth-child(1) > .ant-collapse-content > .ant-collapse-content-box > .pt-2\\.5"
    )
      .should("be.visible")
      .within(() => {
        cy.get("button:not(:disabled)")
          .should("have.length.gt", 0)
          .then(($buttons) => {
            const randomIndex = Math.floor(Math.random() * $buttons.length);
            const randomButton = $buttons[randomIndex];

            cy.wrap(randomButton).scrollIntoView().click({ force: true });

            cy.log(
              `Clicked button with text: "${randomButton.textContent.trim()}"`
            );
          });
      });

    cy.get(
      ":nth-child(2) > .ant-collapse-content > .ant-collapse-content-box > .pt-2\\.5"
    )
      .should("be.visible")
      .within(() => {
        cy.get("button:not(:disabled)")
          .should("have.length.gt", 0)
          .then(($buttons) => {
            const randomIndex = Math.floor(Math.random() * $buttons.length);
            const randomButton = $buttons[randomIndex];

            cy.wrap(randomButton).scrollIntoView().click({ force: true });

            cy.log(
              `Clicked random button with text: "${randomButton.textContent.trim()}"`
            );
          });
      });

    cy.get("#mentoring-schedule-topic-request-session-btn").click({
      force: true,
    });

    cy.get(".space-y-1 > .font-semibold").contains("Step 2 of 3");

    cy.get(".rmdp-container > :nth-child(1) > .h-9").within(() => {
      cy.get("svg").first().click({ force: true });
    });

    cy.get(".rmdp-day-picker")
      .contains(".rmdp-day:not(.rmdp-disabled)", "5")
      .click({ force: true });

    cy.get(".rmdp-day-picker")
      .contains(".rmdp-day:not(.rmdp-disabled)", "10")
      .click({ force: true });

    const randomHours = Math.floor(Math.random() * 24)
      .toString()
      .padStart(2, "0");
    const randomMinutes = (Math.floor(Math.random() * 4) * 15) // Quarters (00, 15, 30, 45)
      .toString()
      .padStart(2, "0");
    const randomStartTime = `${randomHours}:${randomMinutes}`;

    cy.get("#proposedTimes_0_startTime")
      .should("be.visible")
      .clear()
      .type(randomStartTime)
      .should("have.value", randomStartTime);

    const [startHours, startMinutes] = randomStartTime.split(":").map(Number);
    let endHours = startHours + 1;
    const endMinutes = startMinutes;

    if (endHours >= 24) {
      endHours -= 24;
    }

    const endTime = `${endHours.toString().padStart(2, "0")}:${endMinutes
      .toString()
      .padStart(2, "0")}`;

    cy.get("#proposedTimes_0_endTime")
      .should("be.visible")
      .clear()
      .type(endTime)
      .should("have.value", endTime);

    cy.get("#notes")
      .clear()
      .type(
        "Hi Dafi Fadhlih Majid, Saya Testing_Jonathan_Ivan & saya berharap dapat memiliki sesi mentoring dengan Anda.\n\n" +
          "Saat ini, saya tertarik untuk mengejar Karir dibidang apapun itu. Tujuan saya untuk sesi ini adalah untuk testing.\n\n" +
          "Saya ingin tahu secara khusus tentang segalanya.\n" +
          "1. Lorem Ipsum\n" +
          "2. Lorem Ipsum\n" +
          "3. Lorem Ipsum"
      );

    cy.get("#mentoring-schedule-pick-schedule-request-session-btn").click({
      force: true,
    });

    cy.get(".space-y-1 > .font-semibold").contains("Langkah 3 dari 3");
    cy.get("#whatsapp")
      .clear()
      .type(testData.wa_number)
      .trigger("change") 
      .blur(); 

    cy.get(".ant-radio-group > :nth-child(1)")
      .should("be.visible")
      .find(".ant-radio-input")
      .click({ force: true });

    cy.get("#customPortfolios_0_url")
      .type("www.linkedin.com/in/jonathanivan", { force: true })
      .should("have.value", "www.linkedin.com/in/jonathanivan");

    cy.get(".ant-checkbox-wrapper")
      .find(".ant-checkbox-input")
      .click({ force: true });

    cy.get("#mentoring-schedule-finish-request-session-btn")
      .scrollIntoView()
      .should("be.visible")
      .and("contain", "Selesai")
      .click({ force: true });
  });
});
