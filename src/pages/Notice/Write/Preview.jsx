import React from 'react';
import { NoticeItem } from '../../../components/Notice/NoticeItem';
import styled from 'styled-components';
import { QuestionPreview } from '../../../components/Notice/Write/QuestionPreview';
import { TwoButton } from '../../../components/Notice/Write/StepButton';
import { useNavigate, useParams } from 'react-router-dom';
import { createNotice } from '../../../api/Notice/write';

const Preview = ({ onPrevStep, postData, handleUpdatePostData }) => {
  const navigate = useNavigate();
  const { roomId } = useParams();
  const post = {
    postType: postData.type,
    postTitle: postData.title,
    postBody: postData.content,
    startDate: postData.startDate,
    endDate: postData.endDate,
  };
  const sendData = {
    ...postData,
    room_id: roomId,
  };

  const handlePrevClick = () => {
    // onPrevStep(
    //   postType,
    //   title,
    //   content,
    //   imageURLs,
    //   startDate,
    //   endDate,
    //   question,
    //   answer,
    // );
  };

  const handlePostClick = async () => {
    // try {
    //   await createNotice(sendData);
    //   navigate(`/notice/${roomId}`);
    // } catch (error) {
    //   console.error('공지글 생성 오류 발생:', error);
    // }
  };

  return (
    <Container>
      <NoticeItem props={post} imgs={imageURLs} preview={true} />

      <QuestionPreview
        postType={postData.type}
        question={postData.question}
        answer={postData.answer}
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
