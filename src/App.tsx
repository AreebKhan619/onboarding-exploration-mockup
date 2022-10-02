import React, { FormEvent, useMemo, useState } from "react";
import { Button } from "./components/buttons";
import { Input } from "./components/inputs";
import StepFormIndicator from "./components/step-form-indicator";
import { OnboardingContainer } from "./styled";
import { OnboardingSteps } from "./types/enums";

function App() {
  const [currentStep, setCurrentStep] = useState<OnboardingSteps>(
    OnboardingSteps.NameStep
  );

  const [fullName, setFullName] = useState("");

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentStep === OnboardingSteps.CompletedStep) {
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const getStepInputs = () => {
    const stepArrayInputs = [];
    switch (currentStep) {
      case OnboardingSteps.NameStep:
        stepArrayInputs.push({
          label: "Full Name",
          secondaryLabel: null,
          placeholder: "Steve Jobs",
          value: fullName,
          changeHandler: () => null,
          type: null,
        });
        break;

      default:
        break;
    }
    return stepArrayInputs;
  };

  const isCompletedStep = currentStep === OnboardingSteps.CompletedStep;

  const { title, subtitle } = useMemo(() => {
    let title = "",
      subtitle = "";

    switch (currentStep) {
      case OnboardingSteps.NameStep:
        title = "Welcome! First things first...";
        subtitle = "You can always change them later";
        break;
      case OnboardingSteps.WorkspaceStep:
        title = "Let's set up a home for all your work";
        subtitle = "You can always create another workspace later";
        break;
      case OnboardingSteps.UseStep:
        title = "How are you planning to use Eden?";
        subtitle = "We'll streamline your setup experience accordingly";
        break;
      case OnboardingSteps.CompletedStep:
        title = "Congratulations, " + fullName + "!";
        subtitle = "You have completed the onboarding, you can start using the Eden!";
        break;

      default:
        break;
    }

    return { title, subtitle, fullName };
  }, [currentStep]);

  return (
    <OnboardingContainer className="onboarding-app">
      <StepFormIndicator
        totalSteps={OnboardingSteps.CompletedStep}
        currentStep={currentStep}
      />

      <h2 className="title">{title}</h2>
      <small className="subtitle">{subtitle}</small>

      <form onSubmit={onSubmitHandler} className="input-form">
        {/* <Input placeholder="Steve Jobs" label="Full Name" />
        <Input placeholder="Steve" label="Display Name" /> */}

        <Input
          mode="split"
          prefix="www.eden.com/"
          placeholder="Example"
          label="Workspace URL"
          secondaryLabel="(optional)"
        />
        <Button
          text={isCompletedStep ? "Launch Eden" : "Create Workspace"}
          variant="primary"
        />
      </form>
    </OnboardingContainer>
  );
}

export default App;
