import React from 'react';
import styled from 'styled-components';
import ShowmoreIcon from '../../assets/images/show_more_icon.svg';

export const CommentItem = ({ props }) => {
  return (
    <Container>
      <Profile src="" alt="profile" />
      <Comment>
        <Nickname>{props.commentAuthorNickname}</Nickname>
        <Content>{props.commentBody}</Content>
        <Date>{props.updatedAt}</Date>
      </Comment>
      <More src={ShowmoreIcon} alt="more" />
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

const More = styled.img`
  display: flex;
  width: 0.875rem;
  height: 0.875rem;
  justify-content: center;
  align-items: center;
`;
