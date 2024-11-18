import styled from 'styled-components';

const SpanStyled = styled.span`
  color: red;
  font-size: 0.9rem;
  display: ${({ $hidden }) => ($hidden ? 'block' : 'none')};
`;

function ErrorMessage({ children, hidden }) {
  return <SpanStyled $hidden={hidden}>{children}</SpanStyled>;
}

export default ErrorMessage;
