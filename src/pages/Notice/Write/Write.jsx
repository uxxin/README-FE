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
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handlePrevStep = (
    selectedType,
    inputTitle,
    inputContent,
    inputStartDate,
    inputEndDate,
    inputQuestion,
    inputAnswer,
  ) => {
    setStep((prevState) => Math.max(prevState - 1, 1));
    setType(selectedType);
    setTitle(inputTitle);
    setContent(inputContent);
    setStartDate(inputStartDate);
    setEndDate(inputEndDate);
    setQuestion(inputQuestion);
    setAnswer(inputAnswer);
  };

  const handleNextStep = (
    selectedType,
    inputTitle,
    inputContent,
    inputStartDate,
    inputEndDate,
    inputQuestion,
    inputAnswer,
  ) => {
    setStep((prevState) => Math.min(prevState + 1, 3));
    setType(selectedType);
    setTitle(inputTitle);
    setContent(inputContent);
    setStartDate(inputStartDate);
    setEndDate(inputEndDate);
    setQuestion(inputQuestion);
    setAnswer(inputAnswer);
  };

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
          <Post
            onNextStep={handleNextStep}
            postType={type}
            postTitle={title}
            postContent={content}
          />
        ) : step === 2 ? (
          type === 'Quiz' ? (
            <QuizType
              onPrevStep={handlePrevStep}
              onNextStep={handleNextStep}
              postType={type}
              postTitle={title}
              postContent={content}
              startDate={startDate}
              endDate={endDate}
              question={question}
              answer={answer}
            />
          ) : (
            <MissionType
              onPrevStep={handlePrevStep}
              onNextStep={handleNextStep}
              postType={type}
              postTitle={title}
              postContent={content}
              startDate={startDate}
              endDate={endDate}
              question={question}
              answer={answer}
            />
          )
        ) : (
          <Preview
            onPrevStep={handlePrevStep}
            postType={type}
            title={title}
            content={content}
            startDate={startDate}
            endDate={endDate}
            question={question}
            answer={answer}
          />
        )}
      </Container>
    </div>
  );
};

const Container = styled.div`
  padding: 0.625rem 1rem;
`;

export default Write;
