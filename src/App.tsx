import React, { FormEvent, useMemo, useState } from "react";
import { Button } from "./components/buttons";
import { Input } from "./components/inputs";
import Select, { Option } from "./components/select";
import StepFormIndicator from "./components/step-form-indicator";
import { OnboardingContainer } from "./styled";
import { OnboardingSteps } from "./ts/enums";
import { ForUseBy } from "./ts/types";
import Text from "./assets/localization/en.json";

import { CheckIcon, SelfIcon, TeamIcon } from "./assets/images";
import AppLogo from "./components/app-logo";

function App() {
  const [currentStep, setCurrentStep] = useState<OnboardingSteps>(
    OnboardingSteps.NameStep
  );

  const [fullName, setFullName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [workspaceName, setWorkspaceName] = useState("");
  const [workspaceURL, setWorkspaceURL] = useState("");
  const [forUseBy, setForUseBy] = useState<ForUseBy | null>(null);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentStep === OnboardingSteps.CompletedStep) {
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const isCompletedStep = currentStep === OnboardingSteps.CompletedStep;

  const { title, subtitle } = useMemo(() => {
    let title = "",
      subtitle = "";

    switch (currentStep) {
      case OnboardingSteps.NameStep:
        title = Text.stepOneTitle;
        subtitle = Text.stepOneSubtitle;
        break;
      case OnboardingSteps.WorkspaceStep:
        title = Text.stepTwoTitle;
        subtitle = Text.stepTwoSubtitle;
        break;
      case OnboardingSteps.UseStep:
        title = Text.stepThreeTitle;
        subtitle = Text.stepThreeSubtitle;
        break;
      case OnboardingSteps.CompletedStep:
        title = "Congratulations, " + fullName + "!";
        subtitle = Text.stepFourSubtitle;
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
          <>
            <Input
              value={fullName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFullName(e.target.value)
              }
              placeholder="Steve Jobs"
              label="Full Name"
            />
            <Input
              value={displayName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDisplayName(e.target.value)
              }
              placeholder="Steve"
              label="Display Name"
            />
          </>
        );
      case OnboardingSteps.WorkspaceStep:
        return (
          <>
            <Input
              value={workspaceName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setWorkspaceName(e.target.value)
              }
              placeholder="Eden"
              label="Workspace Name"
            />

            <Input
              value={workspaceURL}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setWorkspaceURL(e.target.value)
              }
              mode="split"
              prefix="www.eden.com/"
              placeholder="Example"
              label="Workspace URL"
              secondaryLabel="(optional)"
            />
          </>
        );
      case OnboardingSteps.UseStep:
        return (
          <Select value={forUseBy} onChange={setForUseBy}>
            <Option
              icon={SelfIcon}
              value="self"
              title={Text.useStepOptionOneTitle}
              subtitle={Text.useStepOptionOneSubtitle}
            />
            <Option
              icon={TeamIcon}
              value="team"
              title={Text.useStepOptionTwoTitle}
              subtitle={Text.useStepOptionTwoSubtitle}
            />
          </Select>
        );
      case OnboardingSteps.CompletedStep:
        break;
      default:
        break;
    }
  };

  return (
    <OnboardingContainer className="onboarding-app">
      <AppLogo />

      <StepFormIndicator
        totalSteps={OnboardingSteps.CompletedStep}
        currentStep={currentStep}
        setStep={setCurrentStep}
      />

      {currentStep === OnboardingSteps.CompletedStep && (
        <img className="check-icon" src={CheckIcon} />
      )}

      <h2 className="title">{title}</h2>
      <small className="subtitle">{subtitle}</small>

      <form onSubmit={onSubmitHandler} className="input-form">
        {getStepBasedContent()}

        <Button
          text={
            isCompletedStep
              ? Text.onboardingSecondaryBtnText
              : Text.onboardingPrimaryBtnText
          }
          variant="primary"
        />
      </form>
    </OnboardingContainer>
  );
}

export default App;
