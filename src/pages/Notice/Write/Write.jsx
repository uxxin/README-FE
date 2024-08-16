import React, { useState } from 'react';
import { Header } from '../../../components/Header';
import styled from 'styled-components';
import Post from './Post';
import Preview from './Preview';
import QuizType from './QuizType';
import MissionType from './MissionType';
import { useParams } from 'react-router-dom';

const Write = () => {
  const [step, setStep] = useState(1);
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageURLs, setImageURLs] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handlePrevStep = (
    selectedType,
    inputTitle,
    inputContent,
    uploadImages,
    inputStartDate,
    inputEndDate,
    inputQuestion,
    inputAnswer,
  ) => {
    setStep((prevState) => Math.max(prevState - 1, 1));
    setType(selectedType || type);
    setTitle(inputTitle || title);
    setContent(inputContent || content);
    setImageURLs(uploadImages || imageURLs);
    setStartDate(inputStartDate || startDate);
    setEndDate(inputEndDate || endDate);
    setQuestion(inputQuestion || question);
    setAnswer(inputAnswer || answer);
  };
  const { roomId } = useParams();

  const handleNextStep = (
    selectedType,
    inputTitle,
    inputContent,
    uploadImages,
    inputStartDate,
    inputEndDate,
    inputQuestion,
    inputAnswer,
  ) => {
    setStep((prevState) => Math.min(prevState + 1, 3));
    setType(selectedType || type);
    setTitle(inputTitle || title);
    setContent(inputContent || content);
    setImageURLs(uploadImages || imageURLs);
    setStartDate(inputStartDate || startDate);
    setEndDate(inputEndDate || endDate);
    setQuestion(inputQuestion || question);
    setAnswer(inputAnswer || answer);
  };

  return (
    <div>
      <Header
        title="공지 작성"
        isSearch={false}
        url={`/notice/${roomId}`}
        write={true}
      />
      <Container>
        {step === 1 ? (
          <Post
            onNextStep={handleNextStep}
            postType={type}
            postTitle={title}
            postContent={content}
            uploadedImg={imageURLs}
            postStartDate={startDate}
            postEndDate={endDate}
            postQuestion={question}
            postAnswer={answer}
          />
        ) : step === 2 ? (
          type === 'QUIZ' ? (
            <QuizType
              onPrevStep={handlePrevStep}
              onNextStep={handleNextStep}
              postType={type}
              postTitle={title}
              postContent={content}
              imageURLs={imageURLs}
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
              imageURLs={imageURLs}
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
            imageURLs={imageURLs}
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
