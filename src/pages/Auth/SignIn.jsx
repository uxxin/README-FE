import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { login } from '../../api/Auth/user.js';
import logo from '../../assets/svgs/logoex.svg';
import KakaoLoginButton from '../../components/common/kakao-login/index.jsx';
import Input from '../../components/common/input/index.jsx';

const SignIn = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({ email: '', password: '' });

  const apiKey = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const redirectUri = import.meta.env.VITE_KAKAO_REDIRECT_URI;
  const kakaoLoginPage = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${apiKey}&redirect_uri=${redirectUri}&response_type=code`;

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(user);
      const token = response.data.result.accessToken;

      localStorage.setItem('token', token);

      window.location.replace('/home');
    } catch (error) {
      alert('이메일/비밀번호를 확인해주세요.');
    }
  };

  const handleKakaoLogin = (e) => {
    e.preventDefault();
    window.location.href = kakaoLoginPage;
  };

  const handleChange = (e) => {
    const { value, id } = e.target;
    setUser({ ...user, [id]: value });
  };

  return (
    <Root>
      <StyledLogo src={logo} alt="logo" />
      <InputContainer onSubmit={handleLogin}>
        <Input
          id="email"
          type="text"
          placeholder="이메일"
          value={user.email}
          onChange={handleChange}
        />
        <Input
          id="password"
          type="password"
          placeholder="비밀번호"
          value={user.password}
          maxLength={20}
          onChange={handleChange}
        />
        <ButtonWrapper>
          <SignInButton onClick={handleLogin}>로그인</SignInButton>
          <KakaoLoginButton full onClick={handleKakaoLogin}>
            카카오톡으로 계속하기
          </KakaoLoginButton>
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
  width: 100%;
`;

const SignInButton = styled(CommonButton)`
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
  width: calc(100% - 2rem);
  position: absolute;
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
