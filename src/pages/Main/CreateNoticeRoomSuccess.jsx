import React, { useEffect, useState } from 'react';
import axios from 'axios'; // axios를 import 해야 합니다
import styled from 'styled-components';
import { CustomBtn } from '../../components/CustomBtn';
import exampleProfileImage from '../../assets/images/exampleimage.png';
import { Header } from '../../components/Header';

const CreateNoticeRoomSuccess = () => {
  const [profileImage, setProfileImage] = useState(
    '/assets/images/defaultprofileimage.png',
  );
  const [url, setURL] = useState('https:/default/url');
  const [roomName, setRoomName] = useState('공지방 이름');
  const [password, setPassword] = useState('비밀번호');
  const [nickName, setNickName] = useState('대표자 이름');

  useEffect(() => {
    axios
      .get('/mock/createsuccess.json')
      .then((response) => {
        const data = response.data[0]; // 첫 번째 프로필 데이터 가져오기
        setProfileImage(data.room_image);
        setURL(data.room_url);
        setRoomName(data.room_name);
        setPassword(data.room_password);
        setNickName(data.admin_nickname);
      })
      .catch((error) => console.error('Error fetching profile data:', error));
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Header
          props={{
            title: '',
            isSearch: false, // 검색 기능이 필요 없는 경우
            url: '/create-notice-room', // 이전 페이지
          }}
        />
        <Container>
          <InfoBox>
            <TopSection>리드미 완성🎉</TopSection>
            <InfoSection>
              <ProfileImage
                src={profileImage || exampleProfileImage}
                alt="Profile"
              />
              <Info>
                <InfoSet>
                  <InfoLabel>초대 URL:</InfoLabel>
                  <InfoValue>{url}</InfoValue>
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
                  <InfoValue>{nickName}</InfoValue>
                </InfoSet>
              </Info>
            </InfoSection>
          </InfoBox>
        </Container>
      </div>
      <ButtonContainer>
        <CustomBtn
          props={{
            text: '공지방으로 이동',
            background: '#509BF7',
            border: 'none',
            link: '/notice',
          }}
        />
        <CustomBtn
          props={{
            text: '메인으로 이동',
            background: '#FFFFFF',
            border: '0.5px solid #509BF7',
            link: '/home',
          }}
        />
      </ButtonContainer>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

const InfoBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.5rem;
  border: 0.33px solid var(--Primary-normal, #509bf7);
  margin-top: 10px;
  margin-bottom: 6rem;
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
  line-height: 100%;
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
  background: lightgray 50% / cover no-repeat;
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
  line-height: 100%;
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
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  margin-bottom: 1.25rem;
  padding: 0.625rem 1rem;
`;

export default CreateNoticeRoomSuccess;
