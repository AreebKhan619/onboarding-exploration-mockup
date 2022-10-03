import React from "react";
import ReactDOM from "react-dom/client";
import Onboarding from "./onboarding";
import GlobalStyle from "./assets/global-styles/global";
import Theme from "./assets/global-styles/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Theme>
      <GlobalStyle />
      <Onboarding />
    </Theme>
  </React.StrictMode>
);
