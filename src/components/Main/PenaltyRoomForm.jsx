import React from 'react';
import styled from 'styled-components';

const PenaltyRoomForm = ({ room, onClick }) => {
  const isPenaltyHigh = room.penaltyCount > room.maxPenalty / 2;

  return (
    <Container isPenaltyHigh={isPenaltyHigh} onClick={onClick}>
      <TopSection isPenaltyHigh={isPenaltyHigh}>
        {room.penaltyCount} / {room.maxPenalty}
      </TopSection>
      <BottomSection>
        <ProfileImage src={room.roomImage} alt="profile" />
        <RoomName>{room.roomName}</RoomName>
        <UserName>{room.nickName}</UserName>
      </BottomSection>
    </Container>
  );
};

export default PenaltyRoomForm;

const Container = styled.div`
  display: flex;
  width: calc(33.333% - 0.8125rem);
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.5rem;
  border: 0.0208rem solid
    ${(props) => (props.isPenaltyHigh ? '#F5535E' : '#509bf7')};
  cursor: pointer;
`;

const TopSection = styled.div`
  display: flex;
  padding: 0.3125rem 0.4375rem;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
  border: 0.0208rem solid
    ${(props) => (props.isPenaltyHigh ? '#F5535E' : '#509bf7')};
  background: ${(props) => (props.isPenaltyHigh ? '#F5535E' : '#509bf7')};
  flex: 1 0 0;
  align-self: stretch;
  color: #fff;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 100%; /* 0.75rem */
  letter-spacing: -0.015rem;
  position: relative; /* 추가된 부분 */
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

  display: flex; //두 번 정의 수정 필요
  align-items: center;
  justify-content: center;
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
