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

    span.secondary-label {
      color: ${(props) => props.theme.colors.greySecondary};
    }
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
    border-radius: ${(props) => props.theme.borderRadius.small};
    border: 0.1rem solid ${(props) => props.theme.colors.greySecondary};
    &:focus-within {
      outline-color: ${(props) => props.theme.colors.purplePrimary};
    }
  }

  .split-container {
    display: flex;
    .left {
      padding: 1.6rem;
      /* TODO: share css with input */
      border-radius: ${(props) => props.theme.borderRadius.small};
      border: 0.1rem solid ${(props) => props.theme.colors.greySecondary};
      font-size: ${(props) => props.theme.fontSizes.xSmall};
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-right: none;
      background-color: ${(props) => props.theme.colors.greyTertiary};
      color: ${(props) => props.theme.colors.greyPrimary};
      font-weight: 500;
    }

    input {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`;
