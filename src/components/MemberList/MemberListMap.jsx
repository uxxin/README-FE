import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import { MemberListDetails } from "./MemberListDetails";
import CustomModal from '../CustomModal';
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setKeysCount, removeMember } from "../../redux/KeySlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


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
`

const SecondModalContent = styled.div`
  display: flex;
  width: 16.875rem;
  padding-top: 1.1875rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;
  border-radius: 0.5rem;
  border: 0.33px solid var(--Primary-light-active, #C9E0FD);
  background: var(--Primary-light, #F4F9FF);
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
  color:#509BF7;
  border: 0.33px solid var(--Primary-light-active,#888888);
`;

export const MemberListMap = ({members}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 // const { members } = useSelector(state => state.keys);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

  console.log('넘어오는 프롭스:', members); // 확인용
/*
  useEffect(() => {
    const fetchMemberList = async () => {
      try {
        const response = await axios.get('/mock/ProfileData.json');
        const memberData = response.data;

        dispatch(setKeysCount({ count: memberData.length, members: memberData }));
        console.log(`Keys set in MemberListMap: ${memberData.length}`);
      } catch (error) {
        console.error('Error fetching member list:', error);
      }
    };
    fetchMemberList();
  }, [dispatch]);
  */

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
          nickname: selectedProfile.nickname
        }
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
      console.log("추방할 리스트:",selectedProfile.nickname)
      dispatch(removeMember(selectedProfile.nickname));
      setIsSecondModalOpen(false);
      setIsModalOpen(false);
    }
  };

  const modalButtons = [
    { label: "프로필", onClick: handleProfileLinkClick, color: "black" },
    { label: "추방하기", onClick: handleKickOutClick, color: "red" }
  ];

  console.log('필터링된 멤버:', members);

  return (
    <div>
      <ShowMoreIconContainer>
        {members.length > 0 &&
          members.map((item, index) => (
            <MemberListDetails
              key={index}
              nickname={item.nickname}
              profile_image={item.profile_image}
              onOpenModal={() => handleOpenModal(item)}
            />
          ))}
        <CustomModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          buttons={modalButtons}
        />
      </ShowMoreIconContainer>

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