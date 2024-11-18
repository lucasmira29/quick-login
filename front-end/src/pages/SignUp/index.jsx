import styled from 'styled-components';
import SignUpForm from '../../components/SignUpForm';

const SectionSignUp = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function SignUp() {
  return (
    <SectionSignUp>
      <SignUpForm />
    </SectionSignUp>
  );
}

export default SignUp;
