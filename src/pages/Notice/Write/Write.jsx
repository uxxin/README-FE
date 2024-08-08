import React, { useState } from 'react';
import { Header } from '../../../components/Header';
import styled from 'styled-components';
import Post from './Post';
import Preview from './Preview';
import QuizType from './QuizType';
import MissionType from './MissionType';

const Write = () => {
  const [step, setStep] = useState(1);
  const [type, setType] = useState('');
  const handleNextStep = (selectedType) => {
    setType(selectedType);
    setStep((prevState) => Math.min(prevState + 1, 3));
  };
  console.log(step);
  console.log(type);

  return (
    <div>
      <Header
        props={{
          title: '공지 작성',
          isSearch: false,
          url: '/notice',
          write: true,
        }}
      />
      <Container>
        {step === 1 ? (
          <Post onStepChange={handleNextStep} />
        ) : step === 2 ? (
          type === 'quiz' ? (
            <QuizType onStepChange={handleNextStep} postType={type} />
          ) : (
            <MissionType onStepChange={handleNextStep} postType={type} />
          )
        ) : (
          <Preview postType={type} />
        )}
      </Container>
    </div>
  );
};

const Container = styled.div`
  padding: 0.625rem 1rem;
`;

export default Write;
