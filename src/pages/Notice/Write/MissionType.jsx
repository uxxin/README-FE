import React, { useState } from 'react';
import styled from 'styled-components';
import ImgUpload from '../../../components/Notice/Write/ImgUpload';
import { Mission } from '../../../components/Notice/Write/Mission';
import { TwoButton } from '../../../components/Notice/Write/StepButton';

const MissionType = ({
  onPrevStep,
  onNextStep,
  postType,
  postTitle,
  postContent,
  startDate: inputStartDate,
  endDate: inputEndDate,
  question: inputQuestion,
}) => {
  const [startDate, setStartDate] = useState(inputStartDate || '');
  const [endDate, setEndDate] = useState(inputEndDate || '');
  const [question, setQuestion] = useState(inputQuestion || '');

  const handlePrevClick = () => {
    onPrevStep(postType, postTitle, postContent, startDate, endDate, question);
  };

  const handleNextClick = () => {
    onNextStep(postType, postTitle, postContent, startDate, endDate, question);
  };

  return (
    <Container>
      <ImgUpload />
      <Mission
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        question={question}
        setQuestion={setQuestion}
      />
      <TwoButton
        props={{
          border1: '#509BF7',
          background1: '#FFFFFF',
          btn1: '이전',
          border2: 'none',
          background2: startDate && endDate && question ? '#509BF7' : '#BDBDBD',
          btn2: '확인',
        }}
        onPrevStep={handlePrevClick}
        onNextStep={handleNextClick}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default MissionType;
