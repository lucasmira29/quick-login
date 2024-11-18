import styled from 'styled-components';
import Input from '../Input';
import { Link, useNavigate } from 'react-router-dom';
import Title from '../Title';
import ErrorMessage from '../ErrorMessage';
import LoaderSpinner from '../LoaderSpinner';
import Button from '../Button';
import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../../contexts/FormContext';
import api from '../../utils/api';

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2em;

  .description {
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

function LoginForm() {
  const {
    setUserName,
    setCompleteName,
    setUserEmail,
    setPassword,
    userName,
    password,
    errorMessage,
    setErrorMessage,
  } = useContext(FormContext);

  const [handleLoader, setHandleLoader] = useState(false);
  const navigate = useNavigate();

  //ter certeza de que não irá ter conflitos nos estados ao entrar na página
  const handleCleanStates = () => {
    setCompleteName('');
    setUserName('');
    setUserEmail('');
    setPassword('');
    setErrorMessage('');
  };

  useEffect(() => {
    handleCleanStates();
  }, []);

  // Submit
  async function handleSubmit(e) {
    e.preventDefault();
    setHandleLoader(true);
    const user = {
      username: userName,
      password: password,
    };

    const response = await api.postUser('/login', user);
    if (typeof response === 'string') {
      setErrorMessage(response);
      setHandleLoader(false);
      return;
    } else {
      handleCleanStates();
      setHandleLoader(false);
      navigate('/home', { state: { userData: response } });
    }
  }

  return (
    <>
      <Title>Login</Title>
      <StyledForm onSubmit={handleSubmit}>
        <Input
          inputType="text"
          inputName="Digite seu usuário"
          handleInputValue={setUserName}
        />
        <Input
          inputType="password"
          inputName="Digite sua senha"
          handleInputValue={setPassword}
        />
        <ErrorMessage hidden={errorMessage}>{errorMessage}</ErrorMessage>
        <span className="description">
          <StyledLink to="/cadastro">
            Ainda não é usuário? Cadastre-se
          </StyledLink>
        </span>
        <Button type="submit" width="180px">
          {handleLoader ? <LoaderSpinner hidden={handleLoader} /> : 'Login'}
        </Button>
      </StyledForm>
    </>
  );
}

export default LoginForm;
