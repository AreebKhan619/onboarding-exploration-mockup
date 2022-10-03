import styled from "styled-components";

interface StepBalloonProps {
  isCompleted: boolean;
}

const gap = 5;

export const FormIndicatorContainer = styled.div`
  display: flex;
  gap: ${gap}rem;
  justify-content: center;
  margin-block: 4rem;
`;

export const StepBalloon = styled.div<StepBalloonProps>`
  position: relative;
  width: ${gap - 1}rem;
  height: ${gap - 1}rem;
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
  cursor: ${props=>props.isCompleted ? "pointer": "default"};

  &:first-child::before,
  :last-child::after {
    content: none;
  }

  ::after,
  ::before {
    content: "";
    position: absolute;
    left: calc(-${gap + 0.2}rem / 2);
    right: calc(-${gap + 0.2}rem / 2);
    width: calc(${gap}rem / 2);
    height: 0.12rem;
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
