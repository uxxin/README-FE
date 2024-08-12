import React from 'react';
import styled from 'styled-components';

const RequestDataForm = ({ room, onClick }) => {
  const displayRequestNum = room.submitCount >= 100 ? '99+' : room.submitCount;
  return (
    <Container onClick={onClick}>
      <TopSection>
        확인내역
        <RequestNum>{displayRequestNum}</RequestNum>
      </TopSection>
      <BottomSection>
        <ProfileImage src={room.roomImage} alt="profile" />
        <RoomName>{room.roomName}</RoomName>
        <UserName>{room.nickName}</UserName>
      </BottomSection>
    </Container>
  );
};

export default RequestDataForm;

const Container = styled.div`
  display: flex;
  width: calc(33.333% - 0.8125rem);
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.5rem;
  border: 0.0208rem solid var(--Primary-normal, #509bf7);
  cursor: pointer;
`;

const TopSection = styled.div`
  display: flex;
  padding: 0.3125rem 0.4375rem;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
  border: 1px solid var(--Primary-Normal, #509bf7);
  background: var(--Primary-Normal, #509bf7);
  flex: 1 0 0;
  align-self: stretch;
  color: var(--Basic-White, var(--Basic-White, #fff));
  text-align: center;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 100%; /* 0.75rem */
  letter-spacing: -0.015rem;
  position: relative; /* 추가된 부분 */
`;

const RequestNum = styled.div`
  display: flex;
  padding: 0.0625rem 0.1875rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 62.4375rem;
  background: #f4f9ff;

  overflow: hidden;
  color: var(--Primary-dark, var(--Primary-Dark, #3c74b9));
  text-align: center;
  text-overflow: ellipsis;

  font-size: 0.625rem;
  font-weight: 400;
  line-height: 90%; /* 0.5625rem */
  letter-spacing: -0.0125rem;

  margin-left: 0.625rem; /* 추가된 부분 */
  position: absolute; /* 추가된 부분 */
  right: 0.625rem; /* 추가된 부분 */
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
