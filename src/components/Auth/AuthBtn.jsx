import React from 'react';
import styled from 'styled-components';
import { CustomBtn } from '../CustomBtn';

export const AuthBtn = () => {
  return (
    <Container>
      <ButtonWrapper>
        <CustomBtn
          props={{
            text: '로그인',
            border: 'none',
            background: '#509BF7',
            link: '/home',
          }}
        />
        <NotAuth>아직 회원이 아니신가요?</NotAuth>
        <CustomBtn
          props={{
            text: '회원가입',
            border: '0.5px solid #509BF7',
            background: '#FFFFFF',
            link: '/sign-up',
          }}
        />
      </ButtonWrapper>
    </Container>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //gap: 0.81rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15.69rem;
`;

const NotAuth = styled.div`
    align-self: stretch;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: -0.0175rem;
    margin-top: 0.81rem;
`;