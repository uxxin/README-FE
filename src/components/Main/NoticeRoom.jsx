import React from 'react';
import styled from 'styled-components';

const NoticeRoom = ({ index }) => {
  return (
    <Container>
      <TopSection>
        <Time>몇분 전</Time>
      </TopSection>
      <BottomSection>
        <ProfileImage src={`https://placekitten.com/44/44`} alt="Profile" />
        <RoomName>입장한 공지방 이름</RoomName>
        <UserName>공지방 닉네임</UserName>
      </BottomSection>
    </Container>
  );
};

const Container = styled.div`
  width: 124px;
  height: 160px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 0.33px solid var(--Primary-normal, #509bf7);
`;

const TopSection = styled.div`
  display: flex;
  padding: 5px 7px;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  border: 1px solid #509bf7;
  background: #509bf7;
`;

const Time = styled.div`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: -0.24px;
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 138px;
  padding: 16px 8px;
  align-items: center;
  background: #fff;
  border-radius: 8px;
`;

const ProfileImage = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  margin-bottom: 6px;
`;

const RoomName = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: #3c74b9;
  text-align: center;
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.28px;
  margin-bottom: 6px;
`;

const UserName = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: #888;
  text-align: center;
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 10px;
  letter-spacing: -0.2px;
`;

export default NoticeRoom;
