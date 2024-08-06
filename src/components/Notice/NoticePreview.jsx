import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { QuizFormatLabel } from './QuizFormatLabel';
import { RequestStatusLabel } from './RequestStatusLabel';
import { ReactComponent as CommentIcon } from '../../assets/images/comment_icon.svg';
import { ReactComponent as ShowmoreIcon } from '../../assets/images/show_more_icon.svg';
import CustomModal from '../CustomModal';
export const NoticePreview = ({ props }) => {
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
        <TopContainer>
          <TopLeftSide>
            <QuizFormatLabel quizFormat={props.quizFormat}></QuizFormatLabel>
            <RequestStatusLabel
              requestStatus={props.requestStatus}
            ></RequestStatusLabel>
          </TopLeftSide>
          <TopRightSide>
            <CommentIconContainer>
              <StyledCommentIcon />
              {props.commentCount > 99 ? '99+' : props.commentCount}
            </CommentIconContainer>
            <ShowmoreIconContainer>
              <StyledShowmoreIcon
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen((prev) => !prev);
                }}
              />
              <CustomModal
                isOpen={isOpen}
                onClose={modalClose}
                buttons={modalButtons}
              />
            </ShowmoreIconContainer>
          </TopRightSide>
        </TopContainer>
        {props.title}
        <DeadlineContainer>
          <DeadlineText>
            {props.startDate} - {props.lastDate}
          </DeadlineText>
        </DeadlineContainer>
        <BottomContainer>
          <NoticeContent>{props.content}</NoticeContent>
          <Thumbnail src="src\assets\images\defaultprofileimage.png" />
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
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.0225rem;
`;
const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;
const TopLeftSide = styled.div`
  width: 35%;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;
const TopRightSide = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
`;
const CommentIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3125rem;
  color: var(--Primary-normal, var(--Primary-Normal, #509bf7));
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.0175rem;
`;
const StyledCommentIcon = styled(CommentIcon)`
  width: 0.875rem;
  height: 0.75rem;
`;
const StyledShowmoreIcon = styled(ShowmoreIcon)`
  width: 1.5rem;
  height: 1.5rem;
`;

const ShowmoreIconContainer = styled.div`
  position: relative;
`;

const DeadlineContainer = styled.div`
  display: flex;
  padding-bottom: 0.5rem;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
  border-bottom: 0.33px solid var(--Primary-Normal, #509bf7);
`;
const DeadlineText = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: var(--Primary-normal, var(--Primary-Normal, #509bf7));
  text-overflow: ellipsis;

  font-size: 0.75rem;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.015rem;
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
  font-size: 1rem;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.02rem;
`;

const Thumbnail = styled.img`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 0.5rem;
`;
