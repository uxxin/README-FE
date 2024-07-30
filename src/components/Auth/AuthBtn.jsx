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
        <CustomBtn
          props={{
            text: '회원가입',
            // border: '0.5px solid #509BF7',
            border: 'none',
            // background: '#FFFFFF',
            background: '#509BF7',
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
    gap: 0.81rem;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15.69rem;
    margin-bottom: 1.87rem;
`;
