import React, { useEffect, useState } from 'react';
import { Header } from '../../../components/Header';
import styled from 'styled-components';
import ImgUpload from '../../../components/Notice/Write/ImgUpload';
import { Mission } from '../../../components/Notice/Write/Mission';
import { TwoButton } from '../../../components/Notice/Write/TwoButton';

const MissionType = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [question, setQuestion] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    if (startDate && endDate && question) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [startDate, endDate, question]);

  return (
    <div>
      <Header props={{ title: '공지 작성', isSearch: false }} />
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
        <TwoButton isButtonEnabled={isButtonEnabled} btn1="이전" btn2="확인" />
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

export default MissionType;
