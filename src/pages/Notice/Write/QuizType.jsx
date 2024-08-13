import React, { useEffect, useState } from 'react';
import { ImgUpload } from '../../../components/Notice/Write/ImgUpload';
import styled from 'styled-components';
import { Quiz } from '../../../components/Notice/Write/Quiz';
import { TwoButton } from '../../../components/Notice/Write/StepButton';

const QuizType = ({
  onPrevStep,
  onNextStep,
  postType,
  postTitle,
  postContent,
  imageURLs: uploadedImages,
  startDate: inputStartDate,
  endDate: inputEndDate,
  question: inputQuestion,
  answer: inputAnswer,
}) => {
  const [imageURLs, setImageURLs] = useState(uploadedImages || []);
  const [startDate, setStartDate] = useState(inputStartDate || '');
  const [endDate, setEndDate] = useState(inputEndDate || '');
  const [question, setQuestion] = useState(inputQuestion || '');
  const [answer, setAnswer] = useState(inputAnswer || '');

  const handlePrevClick = () => {
    onPrevStep(
      postType,
      postTitle,
      postContent,
      uploadedImages,
      inputStartDate,
      inputEndDate,
      inputQuestion,
      inputAnswer,
    );
  };

  const handleNextClick = () => {
    onNextStep(
      postType,
      postTitle,
      postContent,
      imageURLs,
      startDate,
      endDate,
      question,
      answer,
    );
  };

  const handleImageUpload = (uploadedImages) => {
    setImageURLs(uploadedImages);
  };

  // useEffect(() => {
  //   setStartDate(inputStartDate || '');
  //   setEndDate(inputEndDate || '');
  //   setQuestion(inputQuestion || '');
  //   setAnswer(inputAnswer || '');
  // }, [inputStartDate, inputEndDate, inputQuestion, inputAnswer]);

  return (
    <Container>
      <ImgUpload onUpload={handleImageUpload} />
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

export default QuizType;
