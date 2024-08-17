import React from 'react';
import styled from 'styled-components';

export const OneButton = ({ props, onStepChange }) => {
  const handleNextClick = () => {
    if (props.background !== '#BDBDBD') {
      onStepChange(); // 다음 단계로 이동
    } else {
      alert('제목과 내용을 입력하세요.');
    }
  };

  return (
    <Button
      border={props.border}
      background={props.background}
      onClick={handleNextClick}
    >
      {props.text}
    </Button>
  );
};

export const TwoButton = ({ props, onPrevStep, onNextStep }) => {
  const handlePrevClick = () => {
    onPrevStep();
  };

  const handleNextClick = () => {
    if (props.background2 !== '#BDBDBD') {
      onNextStep();
    } else {
      alert('날짜와 문제를 입력하세요.');
    }
  };

  return (
    <Container>
      <ButtonWrapper>
        <Button
          border={props.border1}
          background={props.background1}
          onClick={handlePrevClick}
        >
          {props.btn1}
        </Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button
          border={props.border2}
          background={props.background2}
          onClick={handleNextClick}
        >
          {props.btn2}
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 0.625rem;
`;

const ButtonWrapper = styled.div`
  flex: 1;
  display: flex;
`;

const Button = styled.button`
  display: flex;
  width: 100%;
  height: 3.1875rem;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.5rem;
  border: ${(props) => props.border};
  background: ${(props) => props.background};
  color: ${(props) => (props.background === '#FFFFFF' ? '#509BF7' : '#FFFFFF')};
`;
