import React from "react";
import { FormIndicatorContainer, StepBalloon } from "./styled";

interface StepFormIndicatorProps {
  totalSteps: number;
  currentStep: number;
  setStep?: React.Dispatch<React.SetStateAction<number>>;
}

const StepFormIndicator: React.FC<StepFormIndicatorProps> = ({
  totalSteps,
  currentStep,
  setStep,
}) => {
  const stepArr = new Array(totalSteps).fill(null);
  return (
    <FormIndicatorContainer>
      {stepArr.map((_, stepNo) => {
        const translatedStepNo = stepNo + 1;
        return (
          <StepBalloon
            onClick={() => setStep?.(translatedStepNo)}
            isCompleted={translatedStepNo <= currentStep}
            key={translatedStepNo}
          >
            {translatedStepNo}
          </StepBalloon>
        );
      })}
    </FormIndicatorContainer>
  );
};

export default StepFormIndicator;
