import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useDeleteAccount } from '../../hooks/useDeleteAccount';

const DivStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10em;

  .section {
    display: flex;
    flex-direction: column;
    gap: 1em;
    text-align: center;
    align-items: center;

    .title {
      display: inline-flex;
      align-items: center;
      font-size: 2.5rem;
      gap: 32px;
    }

    .span {
      font-size: 1.3rem;
    }

    .password {
      font-size: 1rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 0 10px;
    }

    .password-short {
      display: none;
      font-size: 1.3rem;
    }

    .btn {
      margin-top: 24px;
    }
  }

  .img-icon {
    width: 80px;
  }

  .img-icon2 {
    width: 50px;
    cursor: pointer;
  }

  @media (max-width: 992px) {
    gap: 8em;

    .title {
      gap: 2em;
      padding: 0 1em;
      flex-direction: column;
    }

    .section .password {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 576px) {
    margin-top: 3em;
    margin-bottom: 2em;
    gap: 3em;

    .section .title {
      font-size: 1.5rem;
    }

    .img-icon {
      width: 64px;
    }

    .section span {
      font-size: 1.2rem;
      padding: 5px;
    }

    .section .password {
      display: none;
    }

    .section .password-short {
      display: inline;
    }
  }
`;

function Home() {
  const location = useLocation();
  const { userData } = location.state || {};
  const navigate = useNavigate();

  const data = userData;
  const iconSrc = userData ? '/ok-icon.svg' : '/error-icon.svg';
  const shortenedPassword = userData
    ? `${data.password.slice(0, 10)}...${data.password.slice(-5)}`
    : null;

  const { handleDelete } = useDeleteAccount();

  return (
    <DivStyled>
      <section className="section">
        {userData ? (
          <>
            <h1 className="title">
              Logado com sucesso, Bem Vindo(a) {data.full_name}!
              <img className="img-icon" src={iconSrc} alt="ícone ok" />
            </h1>

            <span className="span">Usuário: {data.username}</span>
            <span className="span">Email: {data.email}</span>
            <span className="span">Data de cadastro: {data.createdAt}</span>
            <span className="span">
              Senha com Hash:
              <span className="password">{data.password}</span>
              <span className="password-short">{shortenedPassword}</span>
            </span>
            <Button
              className="btn"
              variant="contained"
              onClick={() => handleDelete(data.username)}
            >
              Deletar Conta
            </Button>
          </>
        ) : (
          <>
            <span className="span">Nenhum usuário logado.</span>
            <img className="img-icon" src={iconSrc} alt="ícone erro" />
          </>
        )}
      </section>
      <img
        className="img-icon2"
        src="/logout-icon.svg"
        alt="ícone sair da conta"
        onClick={() => navigate('/')}
      />
    </DivStyled>
  );
}

export default Home;
