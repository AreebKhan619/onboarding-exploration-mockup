import { FormIndicatorContainer, StepBalloon } from "./styled";

interface StepFormIndicatorProps {
  totalSteps: number;
  currentStep: number;
  disableBalloonNavigation?: boolean;
}

const StepFormIndicator: React.FC<StepFormIndicatorProps> = ({
  totalSteps,
  currentStep,
  disableBalloonNavigation,
}) => {
  return (
    <FormIndicatorContainer>
      {[1, 2, 3, 4].map((stepNo) => (
        <StepBalloon isCompleted={stepNo < currentStep} key={stepNo}>
          {stepNo}
        </StepBalloon>
      ))}
    </FormIndicatorContainer>
  );
};

export default StepFormIndicator;
