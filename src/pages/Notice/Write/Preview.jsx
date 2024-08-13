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
  const { roomId } = useParams(); // const isManager = true;
  const post = [
    {
      postType: postType,
      postTitle: title,
      postBody: content,
      startDate: startDate,
      endDate: endDate,
    },
  ];
  // const imageURLs = [];

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
    navigate(`/notice/${roomId}`);
  };

  return (
    <Container>
      {post.length > 0 ? (
        post.map((data, key) => (
          <NoticeItem
            key={title}
            props={data}
            imgs={imageURLs}
            preview={true}
          />
        ))
      ) : (
        <></>
      )}

      <QuestionPreview
        postType={postType}
        question={question}
        answer={answer}
      />
      <TwoButton
        props={{
          border1: '#509BF7',
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
