import React from 'react';
import styled from 'styled-components';

const NoticeRoom = ({ room, onClick }) => {
  const isDeleted = room.state === 'DELETED';
  const latestPostTime = room.latestPostTime ? room.latestPostTime : '-';

  return (
    <Container isDeleted={isDeleted} onClick={onClick}>
      <TopSection isDeleted={isDeleted}>
        {isDeleted ? '삭제된 공지방' : latestPostTime}
      </TopSection>
      <BottomSection>
        <ProfileImage src={room.roomImage} alt="profile" />
        <RoomName>{room.roomName}</RoomName>
        <UserName>{room.nickname}</UserName>
      </BottomSection>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 30.5%;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.5rem;
  border: 0.0208rem solid
    ${({ isDeleted }) => (isDeleted ? '#F5535E' : '#509bf7')};
  cursor: pointer;
`;

const TopSection = styled.div`
  display: flex;
  padding: 0.3125rem 0.4375rem;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
  border: 1px solid ${({ isDeleted }) => (isDeleted ? '#F5535E' : ' #509bf7')};
  background: ${({ isDeleted }) => (isDeleted ? '#F5535E' : ' #509bf7')};
  flex-direction: column;
  flex: 1 0 0;
  align-self: stretch;
  color: var(--Basic-White, var(--Basic-White, #fff));
  text-align: center;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 100%; /* 0.75rem */
  letter-spacing: -0.015rem;
`;

const BottomSection = styled.div`
  display: flex;
  max-height: 8.625rem;
  padding: 1rem 0.5rem;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  gap: 0.375rem;
`;

const ProfileImage = styled.img`
  display: flex;
  width: 2.75rem;
  height: 2.75rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem;
  font-size: 0.625rem;
  text-align: center;
`;

const RoomName = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--Primary-dark, var(--Primary-Dark, #3c74b9));
  text-align: center;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 0.875rem;
  letter-spacing: -0.0175rem;
  height: 1.75rem;
`;

const UserName = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--Text-caption, var(--Grayscale-Gray5, #888));
  text-align: center;
  font-size: 0.625rem;
  font-weight: 400;
  line-height: 0.625rem;
  letter-spacing: -0.0125rem;
  height: 1.25rem;
`;

export default NoticeRoom;
