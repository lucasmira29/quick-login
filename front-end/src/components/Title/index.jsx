import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--tertiary-color);
  border-bottom: 2px solid var(--primary-color);
  margin: 16px 0 32px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

function Title({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}

export default Title;
