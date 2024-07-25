import React,{useState} from "react";
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
  background: ${({ isSecondModalOpen }) => isSecondModalOpen ? 'rgba(0, 0, 0, 0.5)' : 'transparent'};
`;

const ModalContent = styled.div`
  background: transparent;
  padding: 1.5rem;
  width: 122px;
  height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileButton = styled.button`
  display: block;
  margin-bottom: 0;
  padding: 0.5rem 1rem;
  background-color: white;
  color: black;
  border-radius: 5px 5px 0 0;
  cursor: pointer;
  width: 122px;
  height: 36px;
  border: 0.33px solid #BDBDBD;
  z-index: 1;
`;

const KickOutButton = styled.button`
  margin-top: 0;
  padding: 0.5rem 1rem;
  background-color: white;
  color: red;
  border-radius: 0 0 5px 5px;
  cursor: pointer;
  width: 122px;
  height: 36px;
  border: 0.33px solid #BDBDBD;
`;

//추방하기누르면 뜨는 모달
const SecondModalContent = styled.div`
  background: white;
  padding:19px, 0px, 0px, 0px;
  width: 270px;
  height:110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 0.33px solid #C9E0FD;
`;

const DeportButton = styled.button`
  
`

const CloseButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: white;
  color: black;
  border-radius: 5px;
  cursor: pointer;
  border: 0.33px solid #BDBDBD;
  width: 270px;
`;
const MemberModal = ({ isOpen, onClose, onProfileLinkClick }) => {
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  if (!isOpen && !isSecondModalOpen) return null;

  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  const handleKickOutClick = () => {
    setIsSecondModalOpen(true);
  };

  const handleSecondModalClose = (e) => {
    e.stopPropagation();
    setIsSecondModalOpen(false);
  };

  const handleKickOutLinkClick = () => { //추방하기 버튼누르면 추방됨
    window.location.href = 'http://localhost:5173/member-profile';
  };


  return (
    <>
      <ModalOverlay onClick={onClose}>
        <ModalContent onClick={handleModalContentClick}>
          <ProfileButton onClick={onProfileLinkClick}>프로필</ProfileButton>
          <KickOutButton onClick={handleKickOutClick}>추방하기</KickOutButton>
        </ModalContent>
      </ModalOverlay>
      {isSecondModalOpen && (
        <ModalOverlay onClick={handleSecondModalClose}>
          <SecondModalContent onClick={handleModalContentClick}>
            <p>추방하시겠습니까?</p>
            <CloseButton onClick={handleSecondModalClose}>취소</CloseButton>
          </SecondModalContent>
        </ModalOverlay>
      )}
    </>
  );
};


export default MemberModal;