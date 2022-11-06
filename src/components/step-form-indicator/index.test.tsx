import React from "react";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

import StepFormIndicator from "./index";
import Theme from "../../assets/global-styles/theme";

afterEach(cleanup);

it("The step form shows step buttons properly", () => {
  let totalSteps = 5,
    currentStep = 3;
  const renderObj = render(
    <Theme>
      <StepFormIndicator totalSteps={totalSteps} currentStep={currentStep} />
    </Theme>
  );

  // The buttons representing the steps that have been passed/is in focus should be enabled
  for (let index = 1; index <= currentStep; index++) {
    let stepIndicatorBtn = renderObj.getByText(`${index}`);
    expect(stepIndicatorBtn).toHaveAttribute("role", "button");
    expect(stepIndicatorBtn).toHaveAttribute("aria-disabled", "false");
  }

  // The buttons representing the steps that have not been passed yet should be enabled
  for (let index = currentStep + 1; index < totalSteps; index++) {
    let stepIndicatorBtn = renderObj.getByText(`${index}`);
    expect(stepIndicatorBtn).toHaveAttribute("role", "button");
    expect(stepIndicatorBtn).toHaveAttribute("aria-disabled", "true");
  }
});
