import React from 'react';
import { AuthLogo } from '../../components/Auth/AuthLogo';
import { AuthBtn } from '../../components/Auth/AuthBtn';
import styled from 'styled-components';
import { LoginInput } from '../../components/Auth/LoginInput';

const StyledAuth = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Auth = () => {
  return (
    <StyledAuth>
      <AuthLogo />
      <LoginInput />
      <AuthBtn />
    </StyledAuth>
  );
};

export default Auth;
