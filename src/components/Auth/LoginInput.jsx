import React, { useState } from 'react';
import CustomInput from '../CustomInput';
import styled from 'styled-components';

export const LoginInput = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <CustomInput
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
        charCount={true}
      />
      <CustomInput
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
        charCount={true}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: relative;
`;
