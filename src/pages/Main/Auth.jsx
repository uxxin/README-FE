import React from 'react';
import { AuthBody } from '../../components/Main/AuthBody';
import { AuthBtn } from '../../components/Main/AuthBtn';
import styled from 'styled-components';

const StyledAuth = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const Auth = () => {
  return (
    <StyledAuth>
      <AuthBody />
      <AuthBtn />
    </StyledAuth>
  );
};

export default Auth;
