import React from 'react';
import styled from 'styled-components';
import { CustomBtn } from '../CustomBtn';
import { useNavigate } from 'react-router-dom';

export const CreateBtn = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/success');
  };

  return (
    <Container>
      <ButtonWrapper>
        <CustomBtn
          text="생성하기"
          border="0.5px solid #509BF7"
          background="#FFFFFF"
          onClick={handleClick}
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
