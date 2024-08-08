import React, { useState } from 'react';
import { ImgUpload } from '../../../components/Notice/Write/ImgUpload';
import styled from 'styled-components';
import { Quiz } from '../../../components/Notice/Write/Quiz';
import { TwoButton } from '../../../components/Notice/Write/StepButton';

const QuizType = ({ onStepChange, postType, postTitle, postContent }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleNextClick = () => {
    onStepChange(
      postType,
      postTitle,
      postContent,
      startDate,
      endDate,
      question,
      answer,
    );
  };

  return (
    <Container>
      <ImgUpload />
      <Quiz
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        question={question}
        setQuestion={setQuestion}
        answer={answer}
        setAnswer={setAnswer}
      />
      <TwoButton
        props={{
          border1: '#509BF7',
          background1: '#FFFFFF',
          btn1: '이전',
          border2: 'none',
          background2:
            startDate && endDate && question && answer ? '#509BF7' : '#BDBDBD',
          btn2: '확인',
        }}
        onStepChange={handleNextClick}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default QuizType;
