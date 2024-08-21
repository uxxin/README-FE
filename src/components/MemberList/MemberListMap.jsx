import React from 'react';
import { useState } from 'react';
import { MemberListDetails } from './MemberListDetails';
import CustomModal from '../CustomModal';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { removeMember } from '../../redux/KeySlice';
import { useNavigate, useParams } from 'react-router-dom';
import { PlusIcon } from '../../assets/svgs/icons';
import { Link } from 'react-router-dom';
import { getMemberBan } from '../../api/Member/memberListCheck';

export const MemberListMap = ({ members }) => {
  const { roomId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [isThirdModalOpen, setIsThirdModalOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleOpenModal = (profile) => {
    setSelectedProfile(profile);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleProfileLinkClick = () => {
    if (selectedProfile) {
      const userId = encodeURIComponent(selectedProfile.userId);
      navigate(`/notice/${roomId}/member/${userId}`, {
        state: {
          profileImage: selectedProfile.profileImage,
          nickname: selectedProfile.nickname,
          userId: selectedProfile.userId,
        },
      });
      console.log(selectedProfile.profileImage);
    } else {
      console.error('Selected profile is not defined');
    }
  };

  const handleKickOutClick = () => {
    setIsSecondModalOpen(true);
  };

  const handleSecondModalClose = () => {
    setIsSecondModalOpen(false);
  };

  const handleConfirmKickOut = async () => {
    if (selectedProfile) {
      try {
        const bannedMember = await getMemberBan({
          userId: selectedProfile.userId,
          roomId: roomId,
        });
      } catch (err) {
        console.log('추방실패');
      }
      dispatch(removeMember(selectedProfile.userId));
      setIsSecondModalOpen(false);
      setIsModalOpen(false);
      setIsThirdModalOpen(true);
    }
  };

  const handleThirdModalClose = () => {
    setIsThirdModalOpen(false);
  };

  const modalButtons = [
    { label: '프로필', onClick: handleProfileLinkClick, color: 'black' },
    { label: '추방하기', onClick: handleKickOutClick, color: 'red' },
  ];

  return (
    <div>
      {members && members.length > 0 ? (
        members.map((item, index) =>
          item && item.nickname ? (
            <div key={index}>
              <MemberListDetails
                nickname={item.nickname}
                profileImage={item.profileImage}
                onOpenModal={() => handleOpenModal(item)}
              />
              {selectedProfile?.nickname === item.nickname && (
                <ShowMoreIconContainer>
                  <CustomModal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    buttons={modalButtons}
                  />
                </ShowMoreIconContainer>
              )}
            </div>
          ) : (
            <p key={index}>유효하지 않은 멤버 데이터</p>
          ),
        )
      ) : (
        <p>멤버가 없습니다.</p>
      )}

      <ButtonContainer>
        <Link to={`/notice/${roomId}/invite`}>
          <BtnWrapper>
            <MemberAddBtn>
              <PlusIcon />
            </MemberAddBtn>
          </BtnWrapper>
        </Link>
        <ButtonText>멤버초대하기</ButtonText>
      </ButtonContainer>

      {isSecondModalOpen && (
        <ModalOverlay onClick={handleSecondModalClose}>
          <CommonModalContent onClick={(e) => e.stopPropagation()}>
            <TextContainer>
              <ModalText>
                추방하시겠습니까?
                <InfoText>
                  <br />
                  추방한 유저는 다시 초대가능합니다.
                </InfoText>
              </ModalText>
            </TextContainer>
            <ButtonWrapper>
              <CloseButton onClick={handleSecondModalClose}>취소</CloseButton>
              <CheckButton onClick={handleConfirmKickOut}>확인</CheckButton>
            </ButtonWrapper>
          </CommonModalContent>
        </ModalOverlay>
      )}

      {isThirdModalOpen && (
        <ModalOverlay onClick={handleThirdModalClose}>
          <CommonModalContent onClick={(e) => e.stopPropagation()}>
            <p>{selectedProfile?.nickname}님이 추방되었습니다.</p>
            <ButtonWrapper>
              <CloseButton onClick={handleThirdModalClose}>확인</CloseButton>
            </ButtonWrapper>
          </CommonModalContent>
        </ModalOverlay>
      )}
    </div>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const ShowMoreIconContainer = styled.div`
  position: relative;
  z-index: 9999;
`;

const CommonModalContent = styled.div`
  display: flex;
  width: 16.875rem;
  padding-top: 1.1875rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;
  border-radius: 0.5rem;
  border: 0.0206rem solid var(--Primary-light-active, #c9e0fd);
  background: var(--Primary-light, #f4f9ff);
  backdrop-filter: blur(40px);
  z-index: 10001;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const CloseButton = styled.button`
  display: flex;
  flex: 1;
  padding: 0.875rem 0;
  justify-content: center;
  align-items: center;
  border: none;
  background: transparent;
  color: #509bf7;
  border-top: 0.0206rem solid var(--Primary-light-active, #888888);
  border-right: 0.0206rem solid var(--Primary-light-active, #888888);
  border-left: none;
`;

const CheckButton = styled.button`
  display: flex;
  flex: 1;
  padding: 0.875rem 0;
  justify-content: center;
  align-items: center;
  border: none;
  background: transparent;
  color: #509bf7;
  border-top: 0.0206rem solid var(--Primary-light-active, #888888);
  border-left: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  white-space: nowrap;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
`;

const ButtonText = styled.span`
  width: 5.3125rem;
  height: 1.1875rem;
  gap: 0;
  opacity: 1;
  box-sizing: border-box;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2rem;
  letter-spacing: -0.02em;
  text-align: start;
`;

const BtnWrapper = styled.div`
  width: 2.75rem;
  height: 2.75rem;
`;

const MemberAddBtn = styled.button`
  width: 100%;
  height: 2.75rem;
  margin-right: 0.8rem;
  padding: 0.625rem;
  border-radius: 0.5rem;
  box-sizing: border-box;
  background: #f4f9ff;
  border: 0.02rem solid #c9e0fd;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  padding: 0px, 16px, 15px, 16px;
`;

const ModalText = styled.div`
  text-align: center;
  margin-bottom: 16px;
`;

const InfoText = styled.span`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: -0.02em;
  text-align: center;
`;
