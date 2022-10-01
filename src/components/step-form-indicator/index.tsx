import { FormIndicatorContainer } from "./styled";

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
  return <FormIndicatorContainer>Hello World</FormIndicatorContainer>;
};

export default StepFormIndicator;
