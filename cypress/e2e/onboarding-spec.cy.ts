/// <reference types="cypress" />
import en from "../../src/assets/localization/en.json";
import { InputKeys } from "../../src/ts/enums";

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
    const fullNameToEnter = "One Republic";
    cy.visit("localhost:5173/");
    // When the app launches, the text gets rendered properly
    // The user is initially at Step 1
    cy.findByText(en.stepOneTitle);
    // An error will get thrown if the button is clicked without entering required details
    const proceedBtn = cy.get(`#submit-btn`);
    proceedBtn.click();
    // Fill in the values to get rid of the error
    cy.get(`input[name="${InputKeys.FullName}"]`).type(fullNameToEnter);
    cy.get(`input[name="${InputKeys.DisplayName}"]`).type("Teddy");
    expectNoError();
    // Proceed to the next step
    proceedBtn.click();
    // Go back to step 1
    goToStep("1");
    cy.get(`input[name="${InputKeys.FullName}"]`)
      .invoke("val")
      .then((enteredFullName) =>
        cy.log(`Entered Full Name: ${enteredFullName}`)
      );
    cy.get(`input[name="${InputKeys.DisplayName}"]`)
      .invoke("val")
      .then((enteredDisplayName) =>
        cy.log(`Entered Display Name: ${enteredDisplayName}`)
      );
    proceedBtn.click();
    expectNoError();

    const workspaceInput = cy.get(`input[name="${InputKeys.WorkspaceName}"]`);
    workspaceInput.type("Sample workspace Name");
    expectError(); // due to character limit
    workspaceInput.clear();
    workspaceInput.type("Sample workspace");
    const workspaceURLInput = cy.get(`input[name="${InputKeys.WorkspaceURL}"]`);
    workspaceURLInput.type("url suffix with space");
    expectError();
    workspaceURLInput.clear();
    workspaceURLInput.type("urlSuffixWithoutSpace");
    expectNoError();
    goToStep("1");
    proceedBtn.click();
    // Now in step 2
    proceedBtn.click();
    // Now in step 3
    proceedBtn.click();
    expectError();
    cy.findByText(/For myself/i)
      .closest("div[role='button']")
      .click();
    expectNoError();
    cy.findByText(/with my team/i)
      .closest("div[role='button']")
      .click();
    expectNoError();
    proceedBtn.click();
    const congText = `Congratulations, ${fullNameToEnter}!`;
    cy.findByText(congText);
    proceedBtn.click();
  });
});
