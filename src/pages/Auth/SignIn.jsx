import React from 'react';
import { AuthLogo } from '../../components/Auth/AuthLogo';
import { AuthBtn } from '../../components/Auth/AuthBtn';
import styled from 'styled-components';
import { LoginInput } from '../../components/Auth/LoginInput';

const StyledAuth = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.87rem 1rem;
`;

const SignIn = () => {
  return (
    <StyledAuth>
      <AuthLogo />
      <LoginInput />
      <AuthBtn />
    </StyledAuth>
  );
};

export default SignIn;
