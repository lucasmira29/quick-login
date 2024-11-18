import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  color: var(--tertiary-color);
  border-bottom: 4px solid var(--primary-color);
  margin-bottom: 32px;
`;

function Title({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}

export default Title;
