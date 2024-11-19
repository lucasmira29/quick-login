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
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  height: 45px;
  cursor: pointer;
  transition: scale 0.1s ease;
  margin-bottom: 2em;

  &:active {
    transform: translate(0em, 0.2em);
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
