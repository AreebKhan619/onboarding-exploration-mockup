import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import StepFormIndicator from "./components/step-form-indicator";

function App() {
  return (
    <div className="App">
      <StepFormIndicator totalSteps={4} currentStep={1} />
    </div>
  );
}

export default App;
