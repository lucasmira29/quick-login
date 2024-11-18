import styled from 'styled-components';
import LoginForm from '../../components/LoginForm';

const SectionLogin = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Login() {
  return (
    <SectionLogin>
      <LoginForm />
    </SectionLogin>
  );
}

export default Login;
