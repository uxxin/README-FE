import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ShowmoreIcon from '../../assets/svgs/show_more_icon.svg';
import CustomModal from '../CustomModal';
import { deleteNoticeComment } from '../../api/Notice/details';

export const CommentItem = ({ props, onDelete }) => {
  const [profileImg, setProfileImg] = useState('');
  const [nickname, setNickname] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const modalClose = () => {
    setIsOpen(false);
  };
  const deleteComment = async () => {
    try {
      await deleteNoticeComment(props.commentId);
      if (onDelete) await onDelete();
    } catch (error) {
      console.error('댓글 삭제 오류:', error);
    }
  };
  const modalProps = {
    isOpen: isOpen,
    onClose: modalClose,
    buttons: [
      {
        label: '삭제',
        onClick: deleteComment,
        color: '#F5535E',
      },
    ],
  };

  useEffect(() => {
    if (props.commentAuthorProfileImage === null) {
      setProfileImg(
        'https://s3.ap-northeast-2.amazonaws.com/read.me-bucket/readme_default.png',
      );
    } else {
      setProfileImg(props.commentAuthorProfileImage);
    }
  });

  useEffect(() => {
    if (props.commentAuthorNickname === null) {
      setNickname('(알 수 없음)');
    } else {
      setNickname(props.commentAuthorNickname);
    }
  }, [props.commentAuthorNickname]);

  return (
    <Container>
      <Profile src={profileImg} alt="profileImg" />
      <Comment>
        <Nickname>{nickname}</Nickname>
        <Content>{props.commentBody}</Content>
        <Date>{props.createdAt}</Date>
      </Comment>
      {props.isCommentMine && (
        <ShowmoreIconContainer>
          <ShowmoreButton onClick={() => setIsOpen((prev) => !prev)}>
            <img src={ShowmoreIcon} alt="more" />
          </ShowmoreButton>

          <CustomModal {...modalProps} />
        </ShowmoreIconContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5rem 0.375rem;
  align-items: flex-start;
  gap: 0.25rem;
  align-self: stretch;
`;

const Profile = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 0.125rem;
  background: #d9d9d9;
`;

const Comment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  flex: 1 0 0;
`;

const Nickname = styled.div`
  display: flex;
  height: 1.25rem;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  color: var(--Text-default, var(--Grayscale-Gray7, #222));
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 100%; /* 0.875rem */
  letter-spacing: -0.0175rem;
`;

const Content = styled.div`
  align-self: stretch;
  color: var(--Text-default, var(--Grayscale-Gray7, #222));
  font-size: 1rem;
  font-weight: 400;
  line-height: 100%; /* 1rem */
  letter-spacing: -0.02rem;
`;

const Date = styled.div`
  align-self: stretch;
  color: var(--Text-caption, var(--Grayscale-Gray5, #888));
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 100%; /* 0.75rem */
  letter-spacing: -0.015rem;
`;

const ShowmoreIconContainer = styled.div`
  position: relative;
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
