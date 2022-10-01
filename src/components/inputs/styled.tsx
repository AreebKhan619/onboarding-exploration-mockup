import styled from "styled-components";

// TODO: Share this with index
interface InputProps {
  w: "half" | "full";
}

export const InputContainer = styled.div<InputProps>`
  margin-block-end: 2.5rem;
  label {
    display: block;
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.colors.greyPrimary};
    font-weight: 600;
    margin-block-end: 1.2rem;
  }
  input {
    width: ${(props) => {
      switch (props.w) {
        case "full":
          return "100%";
        case "half":
          return "50%";
      }
    }};
    padding: 1.6rem;
    border-radius: 0.7rem;
    border: 0.1rem solid ${(props) => props.theme.colors.greySecondary};
  }
`;
export const CustomInput = styled.input``;
