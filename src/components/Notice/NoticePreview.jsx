import React, { useState } from 'react';
import styled from 'styled-components';
import { QuizFormatLabel } from './QuizFormatLabel';
import { RequestStatusLabel } from './RequestStatusLabel';
import { ReactComponent as CommentIcon } from '../../assets/images/comment_icon.svg';
import { ReactComponent as ShowmoreIcon } from '../../assets/images/show_more_icon.svg';
import CustomModal from '../CustomModal';
import { NoticeTitle } from './NoticeTitle';
export const NoticePreview = ({ postData }) => {
  const modalClose = () => {
    setIsOpen(false);
  };
  const shareAddress = () => {
    console.log('주소 공유');
  };
  const fixNotice = () => {
    console.log('공지 고정');
  };
  const modalButtons = [
    { label: '주소 공유', onClick: shareAddress, color: '#222222' },
    { label: '메인에 고정', onClick: fixNotice, color: '#222222' },
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Container>
        <NoticeTitle props={postData} preview={true} />
        <BottomContainer>
          <NoticeContent>{postData.postBody}</NoticeContent>
          <Thumbnail src={postData.postImage} />
        </BottomContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  padding: 0.625rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  align-self: stretch;
  border-radius: 0.5rem;
  border: 0.33px solid var(--Blue-light-active, #c9e0fd);
  background: var(--Blue-light, #f4f9ff);
  color: var(--Text-default, var(--Grayscale-Gray7, #222));
  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.0225rem;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
`;
const NoticeContent = styled.div`
  height: 3.75rem;
  flex: 1 0 0;
  overflow: hidden;
  color: var(--Text-caption, var(--Grayscale-Gray5, #888));
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.02rem;
`;

const Thumbnail = styled.img`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 0.5rem;
`;
