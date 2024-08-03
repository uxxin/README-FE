import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomInput from '../../components/CustomInput';
import { CustomBtn } from '../../components/CustomBtn';
import toAlbumBtnIcon from '../../assets/images/albumbutton.svg';
import { Header } from '../../components/Header';

const CreateNoticeRoom = () => {
  const [leaderName, setLeaderName] = useState('');
  const [roomName, setRoomName] = useState('');
  const [password, setPassword] = useState('');
  const [penaltyCount, setPenaltyCount] = useState('');
  const [image, setImage] = useState('');

  const navigate = useNavigate(); // useNavigate 훅을 사용하여 라우팅 기능을 추가합니다.

  const handleAlbumClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    };
    input.click();
  };

  const handleCreateClick = () => {
    if (leaderName && roomName && password && penaltyCount) {
      // 상태 데이터를 localStorage에 저장 (선택 사항)
      localStorage.setItem('leaderName', leaderName);
      localStorage.setItem('roomName', roomName);
      localStorage.setItem('password', password);
      localStorage.setItem('image', image);

      // navigate를 사용하여 성공 페이지로 이동하며 상태를 전달합니다.
      navigate('/create-notice-room/success', {
        state: {
          leaderName,
          roomName,
          password,
          image,
        },
      });
    }
  };

  const isFormValid = leaderName && roomName && password && penaltyCount;

  return (
    <Container>
      <Header
        props={{
          title: '공지방 생성 성공',
          isSearch: false, // 검색 기능이 필요 없는 경우
          url: '/home', // 이전 페이지로 돌아가는 기능
        }}
      />
      <ImageContainer>
        <RoomImage src={image || '<path-to-image>'} alt="Room" />
        <ToAlbumBtn onClick={handleAlbumClick}>
          <img src={toAlbumBtnIcon} alt="Album Button" />
        </ToAlbumBtn>
      </ImageContainer>
      <FormContainer>
        <Section>
          <SectionTitle>단체 정보</SectionTitle>
          <CustomInput
            placeholder="단체 대표자 이름"
            value={leaderName}
            onChange={(e) => setLeaderName(e.target.value)}
          />
        </Section>
        <Section>
          <SectionTitle>공지방 설정</SectionTitle>
          <CustomInput
            placeholder="공지방 이름"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
          />
          <CustomInput
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <CustomInput
            placeholder="패널티 개수"
            value={penaltyCount}
            onChange={(e) => setPenaltyCount(e.target.value)}
          />
        </Section>
      </FormContainer>
      <ButtonContainer>
        <CustomBtn
          props={{
            text: '생성하기',
            background: isFormValid ? '#509BF7' : '#CCCCCC',
            border: 'none',
            link: '/create-notice-room/success',
            onClick: handleCreateClick, // 버튼 클릭 시 handleCreateClick 함수 호출
          }}
        />
      </ButtonContainer>
    </Container>
  );
};

// 스타일드 컴포넌트 정의
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.625rem 1rem;
`;

// const Header = styled.div`
//   text-align: center;
//   padding: 1rem 0;
// `;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 2rem;
`;

const RoomImage = styled.div`
  width: 8.75rem;
  height: 8.75rem;
  border-radius: 1.125rem;
  background: ${({ src }) => `url(${src}) lightgray 50% / cover no-repeat`};
  flex-shrink: 0;
`;

const ToAlbumBtn = styled.button`
  position: absolute;
  right: 0rem;
  bottom: 0rem;
  background: none;
  border: none;
  cursor: pointer;
`;

const FormContainer = styled.div`
  display: flex;
  width: 24.875rem;
  flex-direction: column;
  gap: 1.875rem;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

const SectionTitle = styled.div`
  color: var(--Text-default, var(--Grayscale-Gray7, #222));
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 100%; /* 1.125rem */
  letter-spacing: -0.0225rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export default CreateNoticeRoom;
