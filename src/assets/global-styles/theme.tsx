import React from "react";
import { ThemeProvider } from "styled-components";

export const theme = {
  colors: {
    purplePrimary: "#664DE5",
    redPrimary: "#cc0404",
    white: "#ffffff",
    greyPrimary: "#6c6f76",
    greySecondary: "#ADB4C1",
    greyTertiary: '#F8F9FC'
  },
  fonts: ["Inter", "sans-serif"],
  fontSizes: {
    xSmall: "1.3rem",
    small: "1.5rem",
    medium: "2rem",
    large: "2.5rem",
  },
  borderRadius: {
    small: "0.7rem",
    medium: "1rem",
    large: "1.2rem",
  },
  paddingMargins: {
    medium: "1.6rem"
  }
};

const Theme = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
