import React, { useState } from 'react';
import styled from 'styled-components';
import { QuizFormatLabel } from './NoticeTitle/QuizFormatLabel';
import { RequestStatusLabel } from './NoticeTitle/RequestStatusLabel';
import { ReactComponent as CommentIcon } from '../../assets/svgs/comment_icon.svg';
import { ReactComponent as ShowmoreIcon } from '../../assets/svgs/show_more_icon.svg';
import { ReactComponent as UncheckedPeople } from '../../assets/svgs/unchecked_people.svg';
import CustomModal from '../CustomModal';
import { deleteNotice, patchFixNotice } from '../../api/Notice/noticeMain';
import { UnconfirmedPeopleModal } from './NoticeTitle/UnconfirmedPeopleModal';
import { Link, useNavigate } from 'react-router-dom';

export const NoticeTitle = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const unconfirmedModalClose = () => {
    setIsModalOpen(false);
  };
  const modalClose = () => {
    setIsOpen(false);
  };
  const modalOpen = () => {
    setIsModalOpen(true);
  };

  const shareAddress = () => {
    console.log('주소 공유');
  };

  const fixNotice = async () => {
    try {
      await patchFixNotice(props.postId);
    } catch (error) {
      console.log(error);
    }
  };
  const modifyNotice = () => {
    console.log('수정은 뷰 나오면 연결할게요');
  };
  const deleteNotices = async () => {
    try {
      const response = await deleteNotice(props.postId);
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const memberModal = [
    { label: '주소 공유', onClick: shareAddress, color: '#222222' },
    { label: '메인에 고정', onClick: fixNotice, color: '#222222' },
  ];
  const managerModal = [
    { label: '주소 공유', onClick: shareAddress, color: '#222222' },
    { label: '수정', onClick: modifyNotice, color: '#222222' },
    { label: '삭제', onClick: deleteNotices, color: '#F5535E' },
  ];

  const modalProps = {
    isOpen: isOpen,
    onClose: modalClose,
    buttons: props.isManager ? managerModal : memberModal,
  };

  return (
    <Container>
      {isModalOpen && (
        <UnconfirmedPeopleModal
          postId={props.postId}
          unconfirmedCount={props.unreadCount}
          onClose={unconfirmedModalClose}
        />
      )}
      <TopContainer>
        <TopLeftSide>
          {props.postType && (
            <QuizFormatLabel postType={props.postType}></QuizFormatLabel>
          )}
          {props.submitState && (
            <RequestStatusLabel
              requestStatus={props.submitState}
            ></RequestStatusLabel>
          )}
        </TopLeftSide>
        <TopRightSide>
          {props.isManager && (
            <UncheckedContainer>
              미확인
              <StyledUncheckedPeople onClick={modalOpen}>
                <UncheckedPeople />
              </StyledUncheckedPeople>
              {props.unreadCount > 99 ? '99+' : props.unreadCount}
            </UncheckedContainer>
          )}
          {props.commentCount >= 0 && (
            <CommentIconContainer>
              <StyledCommentIcon />
              {props.commentCount > 99 ? '99+' : props.commentCount}
            </CommentIconContainer>
          )}
          {!props.preview && (
            <ShowmoreIconContainer>
              <ShowmoreButton onClick={() => setIsOpen((prev) => !prev)}>
                <StyledShowmoreIcon />
              </ShowmoreButton>

              {props.isManager ? (
                <CustomModal {...modalProps} />
              ) : (
                <CustomModal {...modalProps} />
              )}
            </ShowmoreIconContainer>
          )}
        </TopRightSide>
      </TopContainer>
      <StyledLink to={`/notice/${props.roomId}/${props.postId}`}>
        {props.postTitle}
        <DeadlineContainer>
          <DeadlineText>
            {props.startDate} - {props.endDate}
          </DeadlineText>
        </DeadlineContainer>
      </StyledLink>
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
const StyledUncheckedPeople = styled.button`
  width: 0.75rem;
  height: 0.75rem;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
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
const ShowmoreButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
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
  margin-top: 0.5rem;
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
const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  color: var(--Text-default, var(--Grayscale-Gray7, #222));
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.0225rem;
`;
