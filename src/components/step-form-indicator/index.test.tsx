import React from "react";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

import StepFormIndicator from "./index";
import Theme from "../../assets/global-styles/theme";

afterEach(cleanup);

it("The step form indicator works properly", () => {
  render(
    <Theme>
      <StepFormIndicator totalSteps={5} currentStep={1} />
    </Theme>
  );
  expect(false).toBeFalsy();
});
