import React from 'react';
import { NoticeItem } from '../../../components/Notice/NoticeItem';
import styled from 'styled-components';
import { QuestionPreview } from '../../../components/Notice/Write/QuestionPreview';
import { TwoButton } from '../../../components/Notice/Write/StepButton';
import { useNavigate, useParams } from 'react-router-dom';
import { createNotice } from '../../../api/Notice/write';

const Preview = ({
  onPrevStep,
  postType,
  title,
  content,
  imageURLs,
  startDate,
  endDate,
  question,
  answer,
}) => {
  const navigate = useNavigate();
  const { roomId } = useParams();
  const post = {
    postType: postType,
    postTitle: title,
    postBody: content,
    startDate: startDate,
    endDate: endDate,
  };
  const postData = {
    room_id: roomId,
    type: postType,
    title: title,
    content: content,
    start_date: startDate,
    end_date: endDate,
    question: question,
    quiz_answer: postType === 'QUIZ' ? answer : '',
    imgURLs: imageURLs,
  };

  const handlePrevClick = () => {
    onPrevStep(
      postType,
      title,
      content,
      imageURLs,
      startDate,
      endDate,
      question,
      answer,
    );
  };

  const handlePostClick = async () => {
    try {
      navigate(`/notice/${roomId}`);
    } catch (error) {
      console.error('공지글 생성 오류 발생:', error);
    }
  };

  return (
    <Container>
      <NoticeItem props={post} imgs={imageURLs} preview={true} />

      <QuestionPreview
        postType={postType}
        question={question}
        answer={answer}
      />

      <TwoButton
        props={{
          border1: '1px solid #509BF7',
          background1: '#FFFFFF',
          btn1: '수정하기',
          border2: 'none',
          background2: '#509BF7',
          btn2: '등록하기',
        }}
        onPrevStep={handlePrevClick}
        onNextStep={handlePostClick}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default Preview;
