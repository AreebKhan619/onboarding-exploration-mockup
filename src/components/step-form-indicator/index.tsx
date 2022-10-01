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
  const stepArr = new Array(totalSteps).fill(null);
  return (
    <FormIndicatorContainer>
      {stepArr.map((_, stepNo) => (
        <StepBalloon isCompleted={stepNo + 1 <= currentStep} key={stepNo}>
          {stepNo + 1}
        </StepBalloon>
      ))}
    </FormIndicatorContainer>
  );
};

export default StepFormIndicator;
