import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const AuthBtn = () => {
  const [width, setWidth] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setWidth(document.body.clientWidth - 32);
  }, []);

  useEffect(() => {
    const resize = window.addEventListener('resize', (e) =>
      setWidth(e.target.innerWidth - 32),
    );

    return () => resize;
  }, [width]);

  const handleSignIn = () => {
    navigate('/home');
  };

  const handleSignUp = () => {
    navigate('/sign-up');
  };

  return (
    <Container width={width}>
      <SignInButton onClick={handleSignIn}>로그인</SignInButton>
      <NotAuth>아직 회원이 아니신가요?</NotAuth>
      <SignupButton onClick={handleSignUp}>회원가입</SignupButton>
    </Container>
  );
};

const Container = styled.div`
    position: fixed;
    width: ${(props) => props.width}px;
    max-width: 397px;
    bottom: 3.37rem;
`;

const CommonButton = styled.button`
    padding: 1rem 0;
    border-radius: 0.5rem;
    border: none;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    width: 100%;
`;

const SignInButton = styled(CommonButton)`
  margin-bottom: 0.625rem;
  background-color: #509bf7;
  color: #ffffff;
`;
const SignupButton = styled(CommonButton)`
  background-color: #ffffff;
  color: #509bf7;
  border: 0.5px solid #509bf7;
`;

const NotAuth = styled.div`
  align-self: stretch;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.0175rem;
  margin-top: 0.81rem;
`;