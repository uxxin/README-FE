import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import CustomInput from '../../components/CustomInput';
import { EditRoomCustomBtn } from '../../components/Main/EditRoomCustomBtn';
import toAlbumBtnIcon from '../../assets/svgs/albumbutton.svg';
import { Header } from '../../components/Header';
import CustomModal from '../../components/CustomModal';

const RoomEdit = () => {
  const [leaderName, setLeaderName] = useState('');
  const [roomName, setRoomName] = useState('');
  const [password, setPassword] = useState('');
  const [penaltyCount, setPenaltyCount] = useState('');
  const [image, setImage] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await axios.get(`/api/admin/room/${id}`);
        const data = response.data;
        setLeaderName(data.admin_nickname);
        setRoomName(data.room_name);
        setPassword(data.room_password);
        setPenaltyCount(data.max_penalty);
        setImage(data.room_image);
      } catch (error) {
        console.error('Error fetching room data:', error);
      }
    };

    fetchRoomData();
  }, [id]);

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

  const handleUpdateClick = async () => {
    const requestData = {
      room_image: image,
      admin_nickname: leaderName,
      room_name: roomName,
      room_password: password,
      max_penalty: penaltyCount,
    };

    try {
      const response = await axios.patch(`/api/admin/room/${id}`, requestData);
      console.log('Room updated:', response.data);
      navigate('/update-notice-room/success', {
        state: requestData,
      });
    } catch (error) {
      console.error('Error updating notice room:', error);
    }
  };

  const handleDeleteClick = async () => {
    try {
      await axios.delete(`/api/admin/room/${id}`);
      console.log('Room deleted');
      navigate('/delete-notice-room/success');
    } catch (error) {
      console.error('Error deleting notice room:', error);
    }
  };

  const handleConfirmDelete = () => {
    setModalOpen(false);
    handleDeleteClick();
  };

  const modalButtons = [
    {
      label: '취소',
      onClick: () => setModalOpen(false),
      color: '#509BF7',
      backgroundColor: '#888',
    },
    {
      label: '삭제',
      onClick: handleConfirmDelete,
      color: '#509BF7',
      backgroundColor: '#888',
    },
  ];

  return (
    <>
      <Header title="공지방 수정" isSearch={false} url="/notice" />
      <Container>
        <ImageContainer>
          <RoomImage src={image || '<path-to-image>'} alt="RoomImage" />
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
          <EditRoomCustomBtn
            text="공지방 삭제하기"
            background="#FDD8DB"
            border="none"
            color=" #F5535E"
            onClick={openModal}
          />
          <EditRoomCustomBtn
            text="공지방 수정하기"
            background="#509BF7"
            border="none"
            color="#FFFFFF"
            onClick={handleUpdateClick}
          />
        </ButtonContainer>
        <CustomModal
          isOpen={isModalOpen}
          onClose={closeModal}
          buttons={modalButtons}
        >
          공지방을 삭제하시겠습니까?
        </CustomModal>
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
  right: 8rem;
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

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default RoomEdit;
