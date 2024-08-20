import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import CreateNoticeRoomForm from '../../components/Main/CreateNoticeRoomForm';
import styled from 'styled-components';
import {
  deleteNoticeRoom,
  editNoticeRoom,
  getNoticeRoomInfo,
} from '../../api/Notice/roomedit';
import {
  ModalOverlay,
  ModalContent,
  ModalTextGroup,
  ModalTitle,
  ModalText,
  ModalButton,
  ModalButtonsHorizontal,
  ModalButtonsVertical,
  SuccessModalDivider,
} from '../../components/Notice/RoomEditModal';

export const RoomEdit = () => {
  const { roomId } = useParams();
  const [roomData, setRoomData] = useState({
    admin_nickname: '',
    room_name: '',
    room_password: '',
    max_penalty: '',
    room_image: null,
  });
  const [initialRoomData, setInitialRoomData] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isFailureModalOpen, setIsFailureModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await getNoticeRoomInfo(roomId);
        const BeforeRoomData = response.result;
        if (response.isSuccess) {
          const initialData = {
            admin_nickname: BeforeRoomData.adminNickname,
            room_name: BeforeRoomData.roomName,
            room_password: BeforeRoomData.roomPassword,
            max_penalty: BeforeRoomData.maxPenalty,
            room_image: BeforeRoomData.roomImage,
          };
          setRoomData(initialData);
          setInitialRoomData(initialData);
        }
      } catch (error) {
        console.error('공지방 데이터 가져오기 실패:', error);
      }
    })();
  }, [roomId]);

  const handleUpdateClick = async () => {
    if (!isFormValid) {
      console.error('폼이 유효하지 않음. ');
      return;
    }

    try {
      await editNoticeRoom(roomId, roomData);
      navigate(`/home`);
    } catch (error) {
      console.error('공지방 수정 중 에러:', error);
    }
  };

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      const response = await deleteNoticeRoom(roomId);
      if (response.isSuccess) {
        setIsDeleteModalOpen(false);
        setIsSuccessModalOpen(true);
      }
    } catch (error) {
      console.error('공지방 삭제 중 에러:', error);
      setIsDeleteModalOpen(false);
      setIsFailureModalOpen(true);
    }
  };

  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false);
  };

  const handleRetryDelete = () => {
    setIsFailureModalOpen(false);
    handleConfirmDelete();
  };

  const handleFailureModalClose = () => {
    setIsFailureModalOpen(false);
  };

  const handleSuccessModalClose = () => {
    navigate('/home');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRoomData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (img) => {
    setRoomData((prevData) => ({
      ...prevData,
      room_image: img || null,
    }));
  };

  const isFormValid =
    roomData.room_image &&
    roomData.room_name &&
    roomData.admin_nickname &&
    roomData.room_password &&
    roomData.max_penalty &&
    JSON.stringify(roomData) !== JSON.stringify(initialRoomData);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Header title="공지방 정보 설정" isSearch={false} url="/home" />
        <CreateNoticeRoomForm
          leaderName={roomData.admin_nickname}
          roomName={roomData.room_name}
          password={roomData.room_password}
          penaltyCount={roomData.max_penalty}
          image={roomData.room_image}
          onImageChange={handleImageChange}
          onLeaderNameChange={(e) =>
            handleInputChange({
              ...e,
              target: { ...e.target, name: 'admin_nickname' },
            })
          }
          onRoomNameChange={(e) =>
            handleInputChange({
              ...e,
              target: { ...e.target, name: 'room_name' },
            })
          }
          onPasswordChange={(e) =>
            handleInputChange({
              ...e,
              target: { ...e.target, name: 'room_password' },
            })
          }
          onPenaltyCountChange={(e) =>
            handleInputChange({
              ...e,
              target: { ...e.target, name: 'max_penalty' },
            })
          }
        />
      </div>
      <ButtonContainer>
        <CustomButton
          background="#FDD8DB"
          color="#F5535E"
          onClick={handleDeleteClick}
        >
          공지방 삭제하기
        </CustomButton>
        <CustomButton
          background={isFormValid ? '#509BF7' : '#BDBDBD'}
          color="#FFF"
          onClick={handleUpdateClick}
          disabled={!isFormValid}
        >
          수정하기
        </CustomButton>
      </ButtonContainer>

      {isDeleteModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalTextGroup>
              <ModalTitle>공지방을 삭제하시겠습니까?</ModalTitle>
              <ModalText>삭제된 공지방은 복구가 불가능합니다.</ModalText>
            </ModalTextGroup>
            <ModalButtonsHorizontal>
              <ModalButton onClick={handleCancelDelete}>취소</ModalButton>
              <ModalButton onClick={handleConfirmDelete}>확인</ModalButton>
            </ModalButtonsHorizontal>
          </ModalContent>
        </ModalOverlay>
      )}

      {isSuccessModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalTitle>공지방 삭제 성공!</ModalTitle>
            <SuccessModalDivider />
            <ModalButton onClick={handleSuccessModalClose}>
              메인으로 이동
            </ModalButton>
          </ModalContent>
        </ModalOverlay>
      )}
      {isFailureModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalTextGroup>
              <ModalTitle>공지방 삭제 실패</ModalTitle>
            </ModalTextGroup>
            <ModalButtonsVertical>
              <ModalButton isFailureModal onClick={handleFailureModalClose}>
                확인
              </ModalButton>
              <ModalButton isFailureModal onClick={handleRetryDelete}>
                재시도
              </ModalButton>
            </ModalButtonsVertical>
          </ModalContent>
        </ModalOverlay>
      )}
    </div>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  margin-bottom: 1.25rem;
  padding: 0.625rem 1rem;
`;

const CustomButton = styled.button`
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  border: none;
  padding: 0.625rem 1rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`;

export default RoomEdit;
