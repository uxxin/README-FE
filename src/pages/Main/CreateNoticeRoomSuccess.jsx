import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CustomBtn } from '../../components/CustomBtn';
import exampleProfileImage from '../../assets/images/exampleimage.png';
import { Header } from '../../components/Header';

const CreateNoticeRoomSuccess = () => {
  const location = useLocation(); // 현재 위치 객체를 가져옵니다.
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 라우팅 기능을 추가합니다.

  // location.state에서 전달된 데이터 가져오기
  const { leaderName, roomName, password, image } = location.state || {};

  const handleNoticeRoomClick = () => {
    navigate('/notice');
  };

  const handleMainClick = () => {
    navigate('/main');
  };

  return (
    <Container>
      <Header
        props={{
          title: '공지방 생성 성공',
          isSearch: false, // 검색 기능이 필요 없는 경우
          url: '/create-notice-room', // 이전 페이지로 돌아가는 기능
        }}
      />
      <InfoBox>
        <TopSection>리드미 완성🎉</TopSection>
        <InfoSection>
          <ProfileImage src={image || exampleProfileImage} alt="Profile" />
          <Info>
            <InfoSet>
              <InfoLabel>초대 URL:</InfoLabel>
              <InfoValue>http://example.com</InfoValue>
            </InfoSet>
            <InfoSet>
              <InfoLabel>공지방 이름:</InfoLabel>
              <InfoValue>{roomName}</InfoValue>
            </InfoSet>
            <InfoSet>
              <InfoLabel>비밀번호:</InfoLabel>
              <InfoValue>{password}</InfoValue>
            </InfoSet>
            <InfoSet>
              <InfoLabel>대표자:</InfoLabel>
              <InfoValue>{leaderName}</InfoValue>
            </InfoSet>
          </Info>
        </InfoSection>
      </InfoBox>
      <ButtonContainer>
        <CustomBtn
          props={{
            text: '공지방으로 이동',
            background: '#FFFFFF',
            border: '0.5px solid #509BF7',
            onClick: handleNoticeRoomClick,
          }}
        />
        <CustomBtn
          props={{
            text: '메인으로 이동',
            background: '#FFFFFF',
            border: '0.5px solid #509BF7',
            onClick: handleMainClick,
          }}
        />
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 1rem;
`;

// const Header = styled.div`
//   text-align: center;
//   padding: 1rem 0;
// `;

const InfoBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.5rem;
  border: 0.33px solid var(--Primary-normal, #509bf7);
  margin-top: 10px;
`;

const TopSection = styled.div`
  display: flex;
  padding: 0.5rem 0.8125rem;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  background: var(--Primary-Normal, #509bf7);
  color: var(--Basic-White, var(--Basic-White, #fff));

  font-size: 1rem;
  font-weight: 700;
  line-height: 100%; /* 1rem */
  letter-spacing: -0.02rem;
`;

const InfoSection = styled.div`
  display: flex;
  padding: 0.625rem;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
  background: var(--Primary-Light, #f4f9ff);
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`;

const ProfileImage = styled.img`
  width: 12.5rem;
  height: 12.5rem;
  border-radius: 0.5rem;
  background: url(<path-to-image>) lightgray 50% / cover no-repeat;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.375rem;
  align-self: stretch;
`;
const InfoLabel = styled.div`
  color: var(--Primary-dark, var(--Primary-Dark, #3c74b9));

  font-size: 1rem;
  font-weight: 700;
  line-height: 100%; /* 1rem */
  letter-spacing: -0.02rem;
`;

const InfoValue = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  flex: 1 0 0;
  overflow: hidden;
  color: var(--Text-default, var(--Grayscale-Gray7, #222));
  text-overflow: ellipsis;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: normal;
`;
const InfoSet = styled.div`
  display: flex;
  height: 2.1875rem;
  //padding: 0.625rem;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
`;

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default CreateNoticeRoomSuccess;
