import styled from "styled-components";

export const OptionContainer = styled.div<{
  isSelected: boolean;
}>`
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSizes.small};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  border: 0.1rem solid
    ${(props) =>
      props.isSelected
        ? props.theme.colors.purplePrimary
        : props.theme.colors.greySecondary};
  padding: 2rem;
  .title {
    font-weight: 600;
  }

  .icon{
    width: 3rem;
    filter: brightness(${props=>props.isSelected ? 1 : 0});
    margin-block-end: .5rem;
  }

  &:hover{
    background-color: ${props=>props.theme.colors.greyTertiary};
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-block-end: 2rem;

  ${OptionContainer} {
    flex: 1;
  }
`;
