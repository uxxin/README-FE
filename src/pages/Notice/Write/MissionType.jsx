import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ImgUpload from '../../../components/Notice/Write/ImgUpload';
import { Mission } from '../../../components/Notice/Write/Mission';
import { TwoButton } from '../../../components/Notice/Write/StepButton';

const MissionType = ({
  onPrevStep,
  onNextStep,
  postData,
  handleUpdatePostData,
}) => {
  const handlePrevClick = () => {
    // onPrevStep(
    //   postType,
    //   postTitle,
    //   postContent,
    //   uploadedImages,
    //   inputStartDate,
    //   inputEndDate,
    //   inputQuestion,
    // );
  };

  const handleNextClick = () => {
    // onNextStep(
    //   postType,
    //   postTitle,
    //   postContent,
    //   imageURLs,
    //   startDate,
    //   endDate,
    //   question,
    // );
  };

  const handleImageUpload = (uploadedImages) => {
    handleUpdatePostData({ type: 'imageURLs', value: uploadedImages });
  };

  return (
    <Container>
      <ImgUpload onUpload={handleImageUpload} />
      <Mission
        startDate={postData.startDate}
        setStartDate={() => {}}
        endDate={postData.endDate}
        setEndDate={() => {}}
        question={postData.question}
        setQuestion={() => {}}
      />
      <TwoButton
        props={{
          border1: '1px solid #509BF7',
          background1: '#FFFFFF',
          btn1: '이전',
          border2: 'none',
          background2:
            postData.startDate && postData.endDate && postData.question
              ? '#509BF7'
              : '#BDBDBD',
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
