import { Input } from "./components/inputs";
import StepFormIndicator from "./components/step-form-indicator";
import { OnboardingContainer } from "./styled";

function App() {
  return (
    <OnboardingContainer className="onboarding-app">
      <StepFormIndicator totalSteps={4} currentStep={2} />

      <h2 className="title">Welcome! First things first...</h2>
      <small className="subtitle">You can always change them later</small>

      <form className="input-form">
        <Input placeholder="Steve Jobs" label="Full Name" />
        <Input placeholder="Steve" label="Display Name" />
      </form>
    </OnboardingContainer>
  );
}

export default App;
