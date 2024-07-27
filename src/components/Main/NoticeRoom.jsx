import React from 'react';
import styled from 'styled-components';

const NoticeRoom = ({ index }) => {
  return (
    <Container>
      <TopSection>
        <Time>몇분 전</Time>
      </TopSection>
      <BottomSection>
        <ProfileImage
          src="../../assets/images/defaultprofileimage.png"
          alt="profile"
        />
        <RoomName>공지방 이름</RoomName>
        <UserName>공지방 닉네임</UserName>
      </BottomSection>
    </Container>
  );
};

const Container = styled.div`
  width: calc((100% - 26px) / 3); // 13px * 2 = 26px
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
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
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
  height: 138px;
  padding: 16px 8px;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  gap: 6px;
`;

const ProfileImage = styled.img`
  display: flex;
  width: 44px;
  height: 44px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  font-size: 10px;
  font-family: Pretendard;
`;

const RoomName = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--Primary-dark, var(--Primary-Dark, #3c74b9));
  text-align: center;

  /* Pretendard/regular/14 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 100%를 14px로 명시적으로 지정 */
  letter-spacing: -0.28px;
  max-height: 28px; /* 2줄 * 14px = 28px */
`;

const UserName = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--Text-caption, var(--Grayscale-Gray5, #888));
  text-align: center;

  /* Pretendard/regular/10 */
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 10px; /* 100%를 10px로 명시적으로 지정 */
  letter-spacing: -0.2px;
  max-height: 20px; /* 2줄 * 10px = 20px */
`;

export default NoticeRoom;
