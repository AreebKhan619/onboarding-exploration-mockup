import { useEffect, useMemo, useState } from "react";
import { useForm, Controller } from "react-hook-form";
// Yup validation
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// Custom Components
import { Button } from "./components/buttons";
import { Input } from "./components/inputs";
import Select, { Option } from "./components/select";
import StepFormIndicator from "./components/step-form-indicator";
import { OnboardingContainer } from "./styled";
import AppLogo from "./components/app-logo";
// Enums and Types
import { InputKeys, OnboardingSteps, ForUseBy } from "./ts/enums";
import Text from "./assets/localization/en.json";
// Images
import { CheckIcon, SelfIcon, TeamIcon } from "./assets/images";

const validationSchema = [
  yup.object({
    [InputKeys.FullName]: yup
      .string()
      .required("This field is required")
      .max(20, "Length cannot exceed 20 characters")
      .matches(/^[a-zA-Z\s]*$/, "Value can only contain alphabets"),
    [InputKeys.DisplayName]: yup
      .string()
      .required("This field is required")
      .max(20, "Length cannot exceed 20 characters")
      .matches(/^[a-zA-Z\s]*$/, "Value can only contain alphabets"),
  }),

  yup.object({
    [InputKeys.WorkspaceName]: yup
      .string()
      .required("This field is required")
      .max(20, "Length cannot exceed 20 characters"),
    [InputKeys.WorkspaceURL]: yup
      .string()
      .matches(
        /^$|^[A-Za-z][A-Za-z0-9]*$/,
        "Value contains prohibited characters"
      ),
  }),
  yup.object({
    [InputKeys.ForUseBy]: yup
      .string()
      .nullable()
      .oneOf(["self", "team"])
      .required("Please select from one of the options"),
  }),
  yup.object({}),
];

const defaultValues = {
  [InputKeys.FullName]: "",
  [InputKeys.DisplayName]: "",
  [InputKeys.WorkspaceName]: "",
  [InputKeys.WorkspaceURL]: "",
  [InputKeys.ForUseBy]: null,
};

function Onboarding() {
  const [currentStep, setCurrentStep] = useState<OnboardingSteps>(
    OnboardingSteps.NameStep
  );

  const currentValidationSchema = validationSchema[currentStep - 1];

  const {
    watch,
    register,
    control,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm({
    resolver: yupResolver(currentValidationSchema),
    defaultValues,
  });

  const onSubmitHandler = (data: { [k: string]: any }) => {
    if (currentStep === OnboardingSteps.CompletedStep) {
      window.alert("App launching...");
      console.log(data);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  useEffect(() => {
    switch (currentStep) {
      case OnboardingSteps.NameStep:
        setFocus(InputKeys.FullName);
        break;
      case OnboardingSteps.WorkspaceStep:
        setFocus(InputKeys.WorkspaceName);
        break;
      default:
        break;
    }
  }, [currentStep]);

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
        title = "Congratulations, " + watch("fullName") + "!";
        subtitle = Text.stepFourSubtitle;
        break;
      default:
        break;
    }

    return { title, subtitle };
  }, [currentStep]);

  const getErrorMsg = (name: string) => {
    return ((errors as Record<string, any>)?.[name]?.message as string) || "";
  };

  const getStepBasedContent = () => {
    switch (currentStep) {
      case OnboardingSteps.NameStep:
        return (
          <>
            <Input
              {...register(InputKeys.FullName)}
              key={InputKeys.FullName}
              errorMsg={getErrorMsg(InputKeys.FullName)}
              placeholder="Steve Jobs"
              label="Full Name"
            />
            <Input
              {...register(InputKeys.DisplayName)}
              key={InputKeys.DisplayName}
              errorMsg={getErrorMsg(InputKeys.DisplayName)}
              placeholder="Steve"
              label="Display Name"
            />
          </>
        );
      case OnboardingSteps.WorkspaceStep:
        return (
          <>
            <Input
              {...register(InputKeys.WorkspaceName)}
              errorMsg={getErrorMsg(InputKeys.WorkspaceName)}
              placeholder="Eden"
              label="Workspace Name"
            />

            <Input
              {...register(InputKeys.WorkspaceURL)}
              errorMsg={getErrorMsg(InputKeys.WorkspaceURL)}
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
          <>
            <Controller
              render={({ field }) => (
                <Select {...field}>
                  <Option
                    icon={SelfIcon}
                    value={ForUseBy.Self}
                    title={Text.useStepOptionOneTitle}
                    subtitle={Text.useStepOptionOneSubtitle}
                  />
                  <Option
                    icon={TeamIcon}
                    value={ForUseBy.Team}
                    title={Text.useStepOptionTwoTitle}
                    subtitle={Text.useStepOptionTwoSubtitle}
                  />
                </Select>
              )}
              control={control}
              name={InputKeys.ForUseBy}
              defaultValue={null}
            />
            <small className="error">{getErrorMsg(InputKeys.ForUseBy)}</small>
          </>
        );
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

      <form onSubmit={handleSubmit(onSubmitHandler)} className="input-form">
        {getStepBasedContent()}

        <Button
          id="submit-btn"
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

export default Onboarding;
