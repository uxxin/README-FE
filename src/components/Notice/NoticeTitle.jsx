import React, { useState } from 'react';
import styled from 'styled-components';
import { QuizFormatLabel } from './QuizFormatLabel';
import { RequestStatusLabel } from './RequestStatusLabel';
import { ReactComponent as CommentIcon } from '../../assets/images/comment_icon.svg';
import { ReactComponent as ShowmoreIcon } from '../../assets/images/show_more_icon.svg';
import { ReactComponent as UncheckedPeople } from '../../assets/images/unchecked_people.svg';
import CustomModal from '../CustomModal';

export const NoticeTitle = ({ props, preview }) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalClose = () => {
    setIsOpen(false);
  };
  const shareAddress = () => {
    console.log('주소 공유');
  };
  const fixNotice = () => {
    console.log('공지 고정');
  };
  const correctNotice = () => {
    console.log('수정');
  };
  const deleteNotice = () => {
    console.log('삭제');
  };
  const memberModal = [
    { label: '주소 공유', onClick: shareAddress, color: '#222222' },
    { label: '메인에 고정', onClick: fixNotice, color: '#222222' },
  ];
  const managerModal = [
    { label: '주소 공유', onClick: shareAddress, color: '#222222' },
    { label: '수정', onClick: correctNotice, color: '#222222' },
    { label: '삭제', onClick: deleteNotice, color: '#F5535E' },
  ];
  console.log(props);
  return (
    <Container>
      <TopContainer>
        <TopLeftSide>
          <QuizFormatLabel postType={props.postType}></QuizFormatLabel>
          {props.submitState ? (
            <RequestStatusLabel
              requestStatus={props.submitState}
            ></RequestStatusLabel>
          ) : (
            <></>
          )}
        </TopLeftSide>
        <TopRightSide>
          {props.isManager ? (
            <UncheckedContainer>
              미확인
              <StyledUncheckedPeople />
              {props.peopleCount > 99 ? '99+' : props.peopleCount}
            </UncheckedContainer>
          ) : (
            <></>
          )}
          <CommentIconContainer>
            <StyledCommentIcon />
            {props.commentCount > 99 ? '99+' : props.commentCount}
          </CommentIconContainer>

          {preview ? (
            <></>
          ) : (
            <ShowmoreIconContainer>
              <StyledShowmoreIcon
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen((prev) => !prev);
                }}
              />
              {props.isManager ? (
                <CustomModal
                  isOpen={isOpen}
                  onClose={modalClose}
                  buttons={managerModal}
                />
              ) : (
                <CustomModal
                  isOpen={isOpen}
                  onClose={modalClose}
                  buttons={memberModal}
                />
              )}
            </ShowmoreIconContainer>
          )}
        </TopRightSide>
      </TopContainer>
      {props.postTitle}
      <DeadlineContainer>
        <DeadlineText>
          {props.startDate} - {props.endDate}
        </DeadlineText>
      </DeadlineContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const TopLeftSide = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;

const TopRightSide = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

const UncheckedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
  color: var(--Text-caption, var(--Grayscale-Gray5, #888));
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.0175rem;
`;
const StyledUncheckedPeople = styled(UncheckedPeople)`
  width: 0.75rem;
  height: 0.75rem;
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
