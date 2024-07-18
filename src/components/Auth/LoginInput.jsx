import React from 'react';
import CustomInput from '../CustomInput';
import styled from 'styled-components';

export const LoginInput = () => {
  return (
    <Container>
      <CustomInput placeholder="이메일" />
      <CustomInput placeholder="비밀번호" />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-left: auto;
  margin-right: auto;
`;
