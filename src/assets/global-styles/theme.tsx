import React from "react";
import { ThemeProvider } from "styled-components";

export const theme = {
  colors: {
    primaryPurple: "#664DE5",
    white: "#ffffff",
    greyPrimary: "#717C94",
    greySecondary: "#ADB4C1",
  },
  fonts: ["Inter", "sans-serif"],
  fontSizes: {
    small: "1.5rem",
    medium: "2rem",
    large: "2.5rem",
  },
};

const Theme = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
