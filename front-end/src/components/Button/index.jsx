import styled from 'styled-components';

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 1em;
  font-family: var(--font);
  font-size: 1rem;
  background-color: var(--primary-color);
  color: var(--tertiary-color);
  height: 45px;
  cursor: pointer;
  transition: scale 0.1s ease;

  &:active {
    scale: 1.1;
  }
`;

function Button({ children, type, width }) {
  return (
    <ButtonStyled type={type} style={{ width: width }}>
      {children}
    </ButtonStyled>
  );
}

export default Button;
