import { createGlobalStyle } from "styled-components";
import InterVF from "../fonts/Inter/Inter-VariableFont_slnt,wght.ttf";

const GlobalStyle = createGlobalStyle`
@font-face {
font-family: ${props => props.theme.fonts[0]};
src: url(${InterVF}) format("woff2 supports variations"),
     url(${InterVF}) format("woff2-variations");
font-weight: 100 1000;
  }


*{
  box-sizing: border-box;
  font-family: Inter, sans-serif;
}

.onboarding-app{
}

html{
  font-size: 10px;
}

body{
  font-size: 2rem;
}

`;

export default GlobalStyle;
