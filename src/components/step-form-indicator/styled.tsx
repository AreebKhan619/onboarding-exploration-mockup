import styled from "styled-components";

interface StepBalloonProps {
  isCompleted: boolean;
}

const gap = `4rem`;

export const FormIndicatorContainer = styled.div`
  display: flex;
  gap: ${gap};
`;

export const StepBalloon = styled.div<StepBalloonProps>`
  position: relative;
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid
    ${(props) =>
      props.isCompleted
        ? props.theme.colors.purplePrimary
        : props.theme.colors.greySecondary};
  border-radius: 50%;
  background-color: ${(props) =>
    props.isCompleted
      ? props.theme.colors.purplePrimary
      : props.theme.colors.white};
  color: ${(props) =>
    props.isCompleted
      ? props.theme.colors.white
      : props.theme.colors.purplePrimary};
  font-size: ${(props) => props.theme.fontSizes.small};

  &:first-child::before,
  :last-child::after {
    content: none;
  }

  ::after,
  ::before {
    content: "";
    position: absolute;
    left: calc(-${gap} / 2);
    right: calc(-${gap} / 2);
    width: calc(${gap} / 2);
    height: 0.1rem;
    background-color: ${(props) =>
      props.isCompleted
        ? props.theme.colors.purplePrimary
        : props.theme.colors.greySecondary};
  }
  ::before {
    right: initial;
  }
  ::after {
    left: initial;
  }
`;
