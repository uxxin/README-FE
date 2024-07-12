import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';

const StyledAuthBody = styled.div`
  width: fit-content;
  margin: 14.44rem auto 0 auto;
`;

export const AuthBody = () => {
  return (
    <StyledAuthBody>
      <img src={logo} alt="Logo" />
    </StyledAuthBody>
  );
};
