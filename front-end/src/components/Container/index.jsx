import styled from 'styled-components';

const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 576px) {
    padding: 0;
  }
`;

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
