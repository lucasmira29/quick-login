import styled from 'styled-components';

const TextField = styled.input`
  width: 230px;
  color: #000;
  border-radius: 16px;
  padding: 1em;
  border: none;
  transition: outline 0.1s ease;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);

  &:focus {
    outline: 2px solid var(--primary-color);
  }
`;

function Input({ inputType, inputName, handleInputValue, inputValue }) {
  function handleChange(e) {
    const value = e.target.value;
    handleInputValue(value);
  }

  return (
    <TextField
      className="input"
      type={inputType}
      placeholder={inputName}
      value={inputValue}
      onChange={(e) => handleChange(e)}
    ></TextField>
  );
}

export default Input;
