import React from 'react';
import styled from 'styled-components';
import { CustomBtn } from '../CustomBtn';

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.81rem;
  margin-bottom: 3.125rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AuthBtn = () => {
  return (
    <Container>
      <ButtonWrapper>
        <CustomBtn
          props={{
            text: '로그인',
            border: 'none',
            background: '#0011FF',
            link: '/sign-in',
          }}
        />
        <CustomBtn
          props={{
            text: '회원가입',
            border: '0.5px solid #0011FF',
            background: '#FFFFFF',
            link: '/sign-up',
          }}
        />
      </ButtonWrapper>
    </Container>
  );
};
