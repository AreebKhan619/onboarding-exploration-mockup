import styled from "styled-components";
import { CustomButtonProps } from "./types";

export const CustomButton = styled.button<CustomButtonProps>`
  width: ${(props) => {
    switch (props.wSpan) {
      case "block":
        return "100%";
      default:
        break;
    }
  }};
  cursor: pointer;
  padding: ${(props) => props.theme.paddingMargins.medium};
  background-color: ${(props) => props.theme.colors.purplePrimary};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius.small};
  &:hover {
    filter: brightness(0.9);
  }
`;
