import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UnconfirmedNoticeItem = ({ postData }) => {
  return (
    <Container>
      <TextContainer>
        <RoomName>{postData.roomName}</RoomName>
        <NoticeTitle to="details">{postData.postTitle}</NoticeTitle>
      </TextContainer>
      <NoticedTime>{postData.updatedAtBefore}</NoticedTime>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 0.75rem 0rem;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
  border-bottom: 0.33px solid var(--GrayScale-gray5, #888);
`;

const TextContainer = styled.div`
  display: flex;
  padding-right: 0.25rem;
  align-items: center;
  gap: 0.25rem;
  flex: 1 0 0;
`;

const RoomName = styled.div`
  display: -webkit-box;
  width: 5.125rem;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: var(--Text-caption, var(--Grayscale-Gray5, #888));
  text-overflow: ellipsis;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.015rem;
`;

const NoticeTitle = styled(Link)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  flex: 1 0 0;
  overflow: hidden;
  color: var(--Text-default, var(--Grayscale-Gray7, #222));
  text-overflow: ellipsis;

  font-size: 0.875rem;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.0175rem;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const NoticedTime = styled.div`
  color: var(--Text-caption, var(--Grayscale-Gray5, #888));
  font-size: 0.625rem;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.0125rem;
`;
