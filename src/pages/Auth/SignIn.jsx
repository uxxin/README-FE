import React, { useState } from 'react';
import styled from 'styled-components';
import CustomInput from '../../components/CustomInput.jsx';
import { useNavigate } from 'react-router-dom';

import { login } from '../../api/user.js';
import logo from '../../assets/images/logoex.svg';

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await login(email, password);
      const token = response.data.result.accessToken;

      localStorage.setItem('token', token);

      navigate('/home');
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  return (
    <Root>
      <StyledLogo src={logo} alt="logo" />
      <InputContainer>
        <CustomInput
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <CustomInput
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          charCount={true}
        />
      </InputContainer>
      <ButtonWrapper>
        <SignInButton onClick={handleLogin}>로그인</SignInButton>
        <NotAuth>아직 회원이 아니신가요?</NotAuth>
        <SignupButton onClick={() => navigate('/sign-up')}>
          회원가입
        </SignupButton>
      </ButtonWrapper>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 1.87rem 1rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.75rem;
  position: relative;
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
`;

const ButtonWrapper = styled.div`
  width: 100%;
  position: fixed;
  max-width: 397px;
  bottom: 3.37rem;
`;

const StyledLogo = styled.img`
  width: 21.5625rem;
  height: 6.875rem;
  flex-shrink: 0;
  margin: 2.88rem auto 3.25rem auto;
`;

export default SignIn;
