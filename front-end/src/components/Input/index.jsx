import styled from 'styled-components';

const TextFieldWrapper = styled.div`
  position: relative;

  .input {
    width: 230px;
    border: 1.5px solid #9e9e9e;
    border-radius: 16px;
    background: none;
    padding: 1rem;
    font-size: 1rem;
    color: #f5f5f5;
    transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .input:focus {
    outline: none;
    border: 1.5px solid #1a73e8;
  }

  .label {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    background-color: #242424;
    color: #e8e8e8;
    padding: 0 0.2em;
    font-size: 1rem;
    pointer-events: none;
    transition:
      transform 150ms cubic-bezier(0.4, 0, 0.2, 1),
      color 150ms cubic-bezier(0.4, 0, 0.2, 1),
      font-size 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .input:focus ~ .label,
  .input:not(:placeholder-shown) ~ .label {
    transform: translateY(-2.1rem) scale(0.8);
    color: #2196f3;
  }
`;

function Input({ inputType, inputName, handleInputValue, inputValue }) {
  const handleChange = (e) => {
    const value = e.target.value;
    handleInputValue(value);
  };

  return (
    <TextFieldWrapper>
      <input
        type={inputType}
        name={inputName}
        value={inputValue}
        onChange={handleChange}
        className="input"
        placeholder=" "
      />
      <label className="label">{inputName}</label>
    </TextFieldWrapper>
  );
}

export default Input;
