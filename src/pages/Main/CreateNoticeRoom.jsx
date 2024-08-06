import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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

  const navigate = useNavigate();

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

  const handleCreateClick = async () => {
    if (isFormValid) {
      const requestData = {
        room_image: image,
        admin_nickname: leaderName,
        room_name: roomName,
        room_password: password,
        max_penalty: penaltyCount,
      };

      navigate('/create-notice-room/success', {
        state: requestData,
      });

      //API 연결시
      // try {
      //   const response = await axios.post('/api/admin/room', requestData);
      //   console.log(response.data);
      //   navigate('/create-notice-room/success', {
      //     state: requestData,
      //   });
      // } catch (error) {
      //   console.error('Error creating notice room:', error);
      // }
    }
  };

  const isFormValid = leaderName && roomName && password && penaltyCount;

  const handleLeaderNameChange = (e) => {
    setLeaderName(e.target.value);
    console.log('Leader Name:', e.target.value);
  };

  const handleRoomNameChange = (e) => {
    setRoomName(e.target.value);
    console.log('Room Name:', e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log('Password:', e.target.value);
  };

  const handlePenaltyCountChange = (e) => {
    setPenaltyCount(e.target.value);
    console.log('Penalty Count:', e.target.value);
  };

  return (
    <>
      <Header
        props={{
          title: '공지방 생성',
          isSearch: false,
          url: '/home',
        }}
      />
      <Container>
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
              onChange={handleLeaderNameChange}
            />
          </Section>
          <Section>
            <SectionTitle>공지방 설정</SectionTitle>
            <CustomInput
              placeholder="공지방 이름"
              value={roomName}
              onChange={handleRoomNameChange}
            />
            <CustomInput
              placeholder="비밀번호"
              value={password}
              onChange={handlePasswordChange}
            />
            <CustomInput
              placeholder="패널티 개수"
              value={penaltyCount}
              onChange={handlePenaltyCountChange}
            />
          </Section>
        </FormContainer>
        <CustomBtn
          props={{
            text: '생성하기',
            background: isFormValid ? '#509BF7' : ' #BDBDBD',
            border: 'none',
            link: '/create-notice-room/success',
            onClick: handleCreateClick,
          }}
        />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.625rem 1rem;
`;

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
  right: 8rem; //일단 이렇게
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
  margin-bottom: 4rem;
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
  line-height: 100%;
  letter-spacing: -0.0225rem;
`;

export default CreateNoticeRoom;
