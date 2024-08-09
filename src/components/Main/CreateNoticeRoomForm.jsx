import React from 'react';
import styled from 'styled-components';
import CustomInput from '../../components/CustomInput';
import toAlbumBtnIcon from '../../assets/images/albumbutton.svg';

const CreateNoticeRoomForm = ({
  leaderName,
  roomName,
  password,
  penaltyCount,
  image,
  onLeaderNameChange,
  onRoomNameChange,
  onPasswordChange,
  onPenaltyCountChange,
  onImageChange,
}) => {
  const handleAlbumClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageChange(reader.result);
      };
      reader.readAsDataURL(file);
    };
    input.click();
  };

  return (
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
            onChange={onLeaderNameChange}
          />
        </Section>
        <Section>
          <SectionTitle>공지방 설정</SectionTitle>
          <CustomInput
            placeholder="공지방 이름"
            value={roomName}
            onChange={onRoomNameChange}
          />
          <CustomInput
            placeholder="비밀번호"
            value={password}
            onChange={onPasswordChange}
          />
          <CustomInput
            placeholder="패널티 개수"
            value={penaltyCount}
            onChange={onPenaltyCountChange}
          />
        </Section>
      </FormContainer>
    </Container>
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

export default CreateNoticeRoomForm;
