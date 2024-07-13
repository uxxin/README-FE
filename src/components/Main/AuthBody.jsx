import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';

const StyledAuthBody = styled.div`
  width: 16.0625rem;
  height: 4.125rem;
  flex-shrink: 0;
  margin: 14.44rem auto 0 auto;
`;

export const AuthBody = () => {
  return (
    <StyledAuthBody>
      <img src={logo} alt="Logo" />
    </StyledAuthBody>
  );
};
