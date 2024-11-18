import styled from 'styled-components';

const Spinner = styled.span`
  width: 32px;
  height: 32px;
  border: 5px solid #fff;
  border-bottom-color: var(--primary-color);
  border-radius: 50%;
  display: ${({ $hidden }) => ($hidden ? 'inline-block' : 'none')};
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function LoaderSpinner({ hidden }) {
  return <Spinner $hidden={hidden}></Spinner>;
}

export default LoaderSpinner;
