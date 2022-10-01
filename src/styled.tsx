import styled from "styled-components";

export const OnboardingContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .subtitle{
    color: ${props=>props.theme.colors.greyPrimary};
    font-weight: 500;
  }

  form.input-form{
    margin-block: 3rem;
    width: 40rem;
  }
`;
