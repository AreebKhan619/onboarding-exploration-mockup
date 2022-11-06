/// <reference types="cypress" />
import en from "../../src/assets/localization/en.json";

const expectNoError = () => {
  cy.get(".error").should("have.text", "");
};

const expectError = () => {
  cy.get(".error").should("not.have.text", "");
};

const goToStep = (step: string) => {
  const stepIndicatorContainer = cy.get(".step-indicator-container");
  stepIndicatorContainer.findByText(step).click();
};

describe("Form filling", () => {
  it("passes", async () => {
    cy.visit("localhost:5173/");
    // When the app launches, the text gets rendered properly
    // The user is initially at Step 1
    cy.findByText(en.stepOneTitle);
    // An error will get thrown if the button is clicked without entering required details
    const proceedBtn = cy.get(`#submit-btn`);
    proceedBtn.click();
    // Fill in the values to get rid of the error
    cy.get(`input[name="fullName"]`).type("One Republic");
    cy.get(`input[name="displayName"]`).type("Teddy");
    expectNoError();
    // Proceed to the next step
    proceedBtn.click();

    goToStep("1");

    cy.get(`input[name="fullName"]`)
      .invoke("val")
      .then((enteredFullName) =>
        cy.log(`Entered Full Name: ${enteredFullName}`)
      );
    cy.get(`input[name="displayName"]`)
      .invoke("val")
      .then((enteredDisplayName) =>
        cy.log(`Entered Display Name: ${enteredDisplayName}`)
      );
    proceedBtn.click();

    expectNoError();

    const workspaceInput = cy.get(`input[name="workspaceName"]`);
    workspaceInput.type("Sample workspace Name");
    expectError();
    workspaceInput.clear();
    workspaceInput.type("Sample workspace");
    expectNoError();

    goToStep("1");

    proceedBtn.click();
    proceedBtn.click();

    goToStep("2");
    proceedBtn.click();
  });
});
