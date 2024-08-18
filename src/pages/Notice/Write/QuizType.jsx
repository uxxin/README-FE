import React, { useEffect, useState } from 'react';
import { ImgUpload } from '../../../components/Notice/Write/ImgUpload';
import styled from 'styled-components';
import { Quiz } from '../../../components/Notice/Write/Quiz';
import { TwoButton } from '../../../components/Notice/Write/StepButton';

const QuizType = ({
  handlePrevStep,
  handleNextStep,
  postData,
  handleUpdatePostData,
}) => {
  const handleImageUpload = (uploadedImages) => {
    handleUpdatePostData({ type: 'imageURLs', value: uploadedImages });
  };

  return (
    <Container>
      <ImgUpload onUpload={handleImageUpload} />
      <Quiz
        startDate={postData.startDate}
        setStartDate={() => {}}
        endDate={postData.endDate}
        setEndDate={() => {}}
        question={postData.question}
        setQuestion={() => {}}
        answer={postData.answer}
        setAnswer={() => {}}
      />
      <TwoButton
        props={{
          border1: '1px solid #509BF7',
          background1: '#FFFFFF',
          btn1: '이전',
          border2: 'none',
          background2:
            postData.startDate &&
            postData.endDate &&
            postData.question &&
            answer
              ? '#509BF7'
              : '#BDBDBD',
          btn2: '확인',
        }}
        onPrevStep={handlePrevStep}
        onNextStep={handleNextStep}
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
