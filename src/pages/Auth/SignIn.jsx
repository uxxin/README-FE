import React, { useState } from 'react';
import { AuthLogo } from '../../components/Auth/AuthLogo';
import styled from 'styled-components';
import CustomInput from '../../components/CustomInput.jsx';
import { useNavigate } from 'react-router-dom';

import { login } from '../../api/user.js';

const SignIn = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(undefined);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Root>
      <AuthLogo />
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
        <SignInButton
          onClick={async () => {
            setUser(login(email, password));
            navigate('/home');
          }}
        >
          로그인
        </SignInButton>
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

export default SignIn;
