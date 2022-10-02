import React, { FormEvent, useMemo, useState } from "react";
import { Button } from "./components/buttons";
import { Input } from "./components/inputs";
import Select, { Option } from "./components/select";
import StepFormIndicator from "./components/step-form-indicator";
import { OnboardingContainer } from "./styled";
import { OnboardingSteps } from "./ts/enums";
import { ForUseBy } from "./ts/types";

function App() {
  const [currentStep, setCurrentStep] = useState<OnboardingSteps>(
    OnboardingSteps.NameStep
  );

  const [fullName, setFullName] = useState("");
  const [forUseBy, setForUseBy] = useState<ForUseBy | null>(null);

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
        subtitle =
          "You have completed the onboarding, you can start using the Eden!";
        break;

      default:
        break;
    }

    return { title, subtitle, fullName };
  }, [currentStep]);

  const getStepBasedContent = () => {
    switch (currentStep) {
      case OnboardingSteps.NameStep:
        return (
          <Select value={forUseBy} onChange={setForUseBy}>
            <Option
              value="self"
              title="For myself"
              subtitle="Write better. Think more clearly. Stay organised."
            />
            <Option
              value="team"
              title="With my team"
              subtitle="Wikis, docs, tasks &amp; projects, all in one place."
            />
          </Select>
        );
      case OnboardingSteps.NameStep:
        return (
          <>
            <Input placeholder="Steve Jobs" label="Full Name" />
            <Input placeholder="Steve" label="Display Name" />
          </>
        );
      case OnboardingSteps.WorkspaceStep:
        return (
          <>
            <Input placeholder="Eden" label="Workspace Name" />

            <Input
              mode="split"
              prefix="www.eden.com/"
              placeholder="Example"
              label="Workspace URL"
              secondaryLabel="(optional)"
            />
          </>
        );
      case OnboardingSteps.UseStep:
        return <>{/* Select */}</>;
      case OnboardingSteps.CompletedStep:
        break;
      default:
        break;
    }
  };

  return (
    <OnboardingContainer className="onboarding-app">
      <StepFormIndicator
        totalSteps={OnboardingSteps.CompletedStep}
        currentStep={currentStep}
      />

      <h2 className="title">{title}</h2>
      <small className="subtitle">{subtitle}</small>

      <form onSubmit={onSubmitHandler} className="input-form">
        {getStepBasedContent()}

        <Button
          text={isCompletedStep ? "Launch Eden" : "Create Workspace"}
          variant="primary"
        />
      </form>
    </OnboardingContainer>
  );
}

export default App;
