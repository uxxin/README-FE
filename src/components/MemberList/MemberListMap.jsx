import React from 'react';
import { useState } from 'react';
import { MemberListDetails } from './MemberListDetails';
import CustomModal from '../CustomModal';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { removeMember } from '../../redux/KeySlice';
import { useNavigate } from 'react-router-dom';
import { PlusIcon } from '../../assets/images/icons';
import { Link } from 'react-router-dom';

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
`;

const ShowMoreIconContainer = styled.div`
  position: relative;
`;

const SecondModalContent = styled.div`
  display: flex;
  width: 16.875rem;
  padding-top: 1.1875rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;
  border-radius: 0.5rem;
  border: 0.33px solid var(--Primary-light-active, #c9e0fd);
  background: var(--Primary-light, #f4f9ff);
  backdrop-filter: blur(40px);
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  border-top: 0.333px solid var(--Grayscale-Gray5, #888);
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
  border: 0.33px solid var(--Primary-light-active, #888888);
`;

const ButtonContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  white-space: nowrap;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 0.625rem;
  align-self: stretch;
  margin-right: 0.8rem;
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
  margin-left: 0.1rem; /* 버튼과 텍스트 사이의 간격을 조정 */
`;

const MemberAddBtn = styled.button`
  width: 2.75rem;
  height: 2.75rem;
  margin-right: 1.6rem;
  padding: 0.625rem;
  border-radius: 0.5rem;
  box-sizing: border-box;
  background: #f4f9ff;
  border: 0.02rem solid #c9e0fd;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MemberListMap = ({ members }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { members } = useSelector(state => state.keys);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

  console.log('넘어오는 프롭스:', members); // 확인용

  const handleOpenModal = (profile) => {
    setSelectedProfile(profile);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleProfileLinkClick = () => {
    if (selectedProfile) {
      const encodedNickname = encodeURIComponent(selectedProfile.nickname);
      navigate(`/member/profile/${encodedNickname}`, {
        state: {
          profile_image: selectedProfile.profile_image,
          nickname: selectedProfile.nickname,
        },
      });
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

  const handleConfirmKickOut = () => {
    if (selectedProfile) {
      console.log('추방할 리스트:', selectedProfile.nickname);
      dispatch(removeMember(selectedProfile.nickname));
      setIsSecondModalOpen(false);
      setIsModalOpen(false);
    }
  };

  const modalButtons = [
    { label: '프로필', onClick: handleProfileLinkClick, color: 'black' },
    { label: '추방하기', onClick: handleKickOutClick, color: 'red' },
  ];

  console.log('필터링된 멤버:', members);

  return (
    <div>
      {members && members.length > 0 ? (
        members.map((item, index) =>
          item && item.nickname ? (
            <MemberListDetails
              key={index}
              nickname={item.nickname}
              profile_image={item.profile_image}
              onOpenModal={() => handleOpenModal(item)}
            />
          ) : (
            <p key={index}>유효하지 않은 멤버 데이터</p>
          ),
        )
      ) : (
        <p>멤버가 없습니다.</p>
      )}

      <ShowMoreIconContainer>
        <CustomModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          buttons={modalButtons}
        />
      </ShowMoreIconContainer>

      <ButtonContainer>
        <Link to="/member/invite">
          <MemberAddBtn>
            <PlusIcon />
          </MemberAddBtn>
        </Link>
        <ButtonText>멤버초대하기</ButtonText>
      </ButtonContainer>

      {isSecondModalOpen && (
        <ModalOverlay onClick={handleSecondModalClose}>
          <SecondModalContent onClick={(e) => e.stopPropagation()}>
            <p>추방하시겠습니까?</p>
            <ButtonWrapper>
              <CloseButton onClick={handleSecondModalClose}>취소</CloseButton>
              <CloseButton onClick={handleConfirmKickOut}>확인</CloseButton>
            </ButtonWrapper>
          </SecondModalContent>
        </ModalOverlay>
      )}
    </div>
  );
};
