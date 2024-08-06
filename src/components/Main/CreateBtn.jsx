import React from 'react';
import styled from 'styled-components';
import { CustomBtn } from '../CustomBtn';

export const CreateBtn = () => {
  return (
    <Container>
      <ButtonWrapper>
        <CustomBtn
          props={{
            text: '생성하기',
            border: '0.5px solid #509BF7',
            background: '#FFFFFF',
            link: '/success',
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
  margin-top: 1.5rem;
`;
