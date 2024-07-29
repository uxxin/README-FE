import React from "react";
import { useEffect,useState } from "react";
import { MemberListItem } from "./MemberListItem";
import axios from "axios";
import { MemberListDetails } from "./MemberListDetails";
import CustomModal from '../CustomModal';
import styled from "styled-components";


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


export const MemberListMap = () =>{
    const [memberList, setMemberList] = useState([]);

  
    
  useEffect(() => {
    const fetchMemberList = async () => {
      try {
        const response = await axios.get('/mock/ProfileData.json');
        setMemberList(response.data); //이게 배열로 안묶으면 작동안함
      } catch (error) {
        console.error('Error fetching setMemberList:', error);
      }
    };

    fetchMemberList();
  }, []);



  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);


  const handleOpenModal = () => {
    setIsModalOpen(true);
  };


  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleProfileLinkClick = () => {
    window.location.href = 'http://localhost:5173/member-profile';
  };

  const handleKickOutClick = () => {
    setIsSecondModalOpen(true);
  };

  const handleSecondModalClose = () =>{
    setIsSecondModalOpen(false);
  }

  const modalButtons = [
    { label: "프로필", onClick: handleProfileLinkClick, color: "black" },
    { label: "추방하기", onClick: handleKickOutClick, color: "red" }
  ];

  return (
    <div>
      {memberList.length > 0 &&
        memberList.map((item, index) => {
          return (
            <MemberListDetails
              key={index}
              nickname={item.nickname}
              profile_image={item.profile_image}
              onOpenModal={handleOpenModal}
            />
          );
        })}
        <CustomModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        buttons={modalButtons}
      />

  {isSecondModalOpen && (
          <ModalOverlay onClick={handleSecondModalClose}>
            <SecondModalContent onClick={(e) => e.stopPropagation()}>
              <p>추방하시겠습니까?</p>
              <ButtonWrapper>
              <CloseButton onClick={handleSecondModalClose}>취소</CloseButton>
              <CloseButton onClick={handleSecondModalClose}>확인</CloseButton>
              </ButtonWrapper>
            </SecondModalContent>
          </ModalOverlay>
        )}
    </div>
  );
};
