import React, { useEffect, useState } from 'react';
import { Header } from '../../../components/Header';
import { ImgUpload } from '../../../components/Notice/Write/ImgUpload';
import styled from 'styled-components';
import { Quiz } from '../../../components/Notice/Write/Quiz';
import { PrevNextBnt } from '../../../components/Notice/Write/PrevNextBnt';

const QuizType = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    if (startDate && endDate && question && answer) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [startDate, endDate, question, answer]);

  return (
    <div>
      <Header props={{ title: '공지 작성', isSearch: false }} />
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
        <PrevNextBnt isButtonEnabled={isButtonEnabled} />
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  padding: 0.625rem 1rem;
  flex-direction: column;
  gap: 1rem;
`;

export default QuizType;
