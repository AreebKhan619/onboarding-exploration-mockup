import styled from "styled-components";

export const OnboardingContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  .title{
    margin-block-end: 2rem;
  }

  .subtitle{
    color: ${props=>props.theme.colors.greyPrimary};
    font-weight: 500;
  }

  &>.title, &>.subtitle{
    text-align: center;
  }

  .check-icon{
    margin-block-start: 2rem;
  }

  form.input-form{
    margin-block: 3rem;
    padding-inline: 1rem;
    width: min(40rem, 100%);
  }
`;