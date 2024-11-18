import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../Input';
import Title from '../Title';
import Button from '../Button';
import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../../contexts/FormContext';
import ErrorMessage from '../ErrorMessage';
import useFormValidation from '../../hooks/useFormValidation';
import api from '../../utils/api.js';
import { toast } from 'react-toastify';
import LoaderSpinner from '../LoaderSpinner';

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2em;

  .link {
    font-size: 0.9rem;
    color: var(--tertiary-color);
    text-decoration: none;
    font-weight: 300;
  }
`;

const StyledLink = styled(Link)`
  color: var(--tertiary-color);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function SignUpForm() {
  const {
    setCompleteName,
    completeName,
    setUserName,
    userName,
    setUserEmail,
    userEmail,
    setPassword,
    password,
    setErrorMessage,
    errorMessage,
  } = useContext(FormContext);

  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [handleLoader, setHandleLoader] = useState(false);

  function notify() {
    toast.success('Usuário cadastrado!');
  }

  //ter certeza de que não irá ter conflitos nos estados ao entrar na página
  useEffect(() => {
    setErrorMessage('');
    setUserName('');
    setPassword('');
  }, []);

  const { errors, validateForm } = useFormValidation({
    completeName,
    userName,
    userEmail,
    password,
    repeatedPassword,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      setHandleLoader(true);

      const user = {
        full_name: completeName,
        username: userName,
        email: userEmail,
        password: password,
      };

      const response = await api.postUser('/register', user);

      if (typeof response === 'string') {
        setHandleLoader(false);
        setErrorMessage(response);
      } else {
        setHandleLoader(false);
        notify();

        setCompleteName('');
        setUserName('');
        setUserEmail('');
        setPassword('');
        setRepeatedPassword('');
        setErrorMessage('');
      }
    }
  }

  return (
    <>
      <Title>Cadastre-se</Title>
      <StyledForm onSubmit={(e) => handleSubmit(e)}>
        <Input
          inputType="text"
          inputName="Digite seu nome completo"
          handleInputValue={setCompleteName}
          inputValue={completeName}
        />
        <ErrorMessage hidden={errors.completeName}>
          {errors.completeName}
        </ErrorMessage>
        <Input
          inputType="text"
          inputName="Digite seu usuário"
          handleInputValue={setUserName}
          inputValue={userName}
        />
        <ErrorMessage hidden={errors.userName}>{errors.userName}</ErrorMessage>
        <Input
          inputType="email"
          inputName="Digite seu email"
          handleInputValue={setUserEmail}
          inputValue={userEmail}
        />
        <ErrorMessage hidden={errors.userEmail}>
          {errors.userEmail}
        </ErrorMessage>
        <Input
          inputType="password"
          inputName="Digite sua senha"
          handleInputValue={setPassword}
          inputValue={password}
        />
        <Input
          inputType="password"
          inputName="Repita sua senha"
          handleInputValue={setRepeatedPassword}
          inputValue={repeatedPassword}
        />
        <ErrorMessage hidden={errors.passwordError || errorMessage}>
          {errors.passwordError || errorMessage}
        </ErrorMessage>
        <span className="link">
          <StyledLink to="/">Já é usuário? Faça Login</StyledLink>
        </span>
        <Button type="submit" width="200px">
          {handleLoader ? <LoaderSpinner hidden={handleLoader} /> : 'Cadastrar'}
        </Button>
      </StyledForm>
    </>
  );
}

export default SignUpForm;
