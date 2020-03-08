import styled from 'styled-components';
import bgLogin from 'containers/LoginPage/assets/bg_login.jpg';

export const LoginWrapper = styled('div')`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${bgLogin}) no-repeat;
  background-size: cover;
  background-position: center center;
`;

export const LoginFormWrapper = styled('div')`
  box-sizing: border-box;
    padding: 2rem;
    width: 400px;
    background-color: ${({ theme }) => theme.whitePrimary};
    border-radius: 6px;
    box-shadow: 0 7px 7px 0 rgba(0,0 ,0,.5);
    h2 {
      margin: 16px 0;
      text-align: center;
      color: ${({ theme }) => theme.darkPrimary };
    }
    .btn_login.md {
      width: 100%;
      margin: 16px 0 16px 0;
    }
`;