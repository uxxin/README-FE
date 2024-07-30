import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';

export const AuthLogo = () => {
  return <StyledLogo src={logo} alt="logo" />;
};

const StyledLogo = styled.img`
  width: 16.0625rem;
  height: 4.125rem;
  flex-shrink: 0;
  margin: 0 auto 7rem auto;
`;
