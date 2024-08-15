import React, { useState } from 'react';
import styled from 'styled-components';
import CustomInput from '../../components/CustomInput.jsx';
import { Link, useNavigate } from 'react-router-dom';

import { login } from '../../api/Auth/user.js';
import logo from '../../assets/svgs/logoex.svg';
import { ReactComponent as KakaoLogo } from '../../assets/svgs/kakao_logo.svg';

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const apiKey = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const redirectUri = import.meta.env.VITE_KAKAO_REDIRECT_URI;
  const kakaoLoginPage = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${apiKey}&redirect_uri=${redirectUri}&response_type=code`;

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      const token = response.data.result.accessToken;

      localStorage.setItem('token', token);

      window.location.replace('/home');
    } catch (error) {
      alert('이메일/비밀번호를 확인해주세요.');
    }
  };

  return (
    <Root>
      <StyledLogo src={logo} alt="logo" />
      <InputContainer onSubmit={handleLogin}>
        <CustomInput
          type="email"
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
        <ButtonWrapper>
          <KakaoLogin to={kakaoLoginPage} className="medium-16">
            <KakaoLogo />
            카카오톡으로 계속하기
          </KakaoLogin>
          <SignInButton onClick={handleLogin}>로그인</SignInButton>
          <NotAuth>아직 회원이 아니신가요?</NotAuth>
          <SignupButton onClick={() => navigate('/sign-up')}>
            회원가입
          </SignupButton>
        </ButtonWrapper>
      </InputContainer>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const CommonButton = styled.button`
  padding: 1rem 0;
  border-radius: 0.5rem;
  border: none;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  width: calc(100% - 2rem);
`;

const KakaoLogin = styled(Link)`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.85);
  padding: 1rem 0;
  border-radius: 0.5rem;
  width: calc(100% - 2rem);
  background-color: #fee500;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

const SignInButton = styled(CommonButton)`
  margin: 0.625rem 0;
  background-color: #509bf7;
  color: #ffffff;
`;

const SignupButton = styled(CommonButton)`
  background-color: #ffffff;
  color: #509bf7;
  border: 0.5px solid #509bf7;
`;

const NotAuth = styled.span`
  font-size: 0.875rem;
  font-weight: 400;
  width: max-content;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  position: fixed;
  max-width: 429px;
  bottom: 3.37rem;
  display: flex;
  flex-direction: column;
`;

const StyledLogo = styled.img`
  width: 21.5625rem;
  height: 6.875rem;
  margin: 2.88rem auto 3.25rem auto;
`;

export default SignIn;
