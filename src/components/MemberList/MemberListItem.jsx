import React, { useState } from 'react';
import styled from 'styled-components';
import { DotsIcon, HumanIcon, PlusIcon } from '../../assets/images/icons';
import CustomInput from '../CustomInput';
import CustomModal from '../CustomModal';
import { Link } from 'react-router-dom';

// 컨테이너 스타일
const Container = styled.div`
  max-width: 26.875rem; 
  min-height: 15.625rem; 
  top: 6.5rem;
  padding: 0.625rem 1rem; 
  box-sizing: border-box;
`;

const ClickButton = styled.button`
  position: absolute;
  right: 30px; 
  width: 1.5rem; 
  height: 1.5rem; 
  padding: 0.1875rem; 
  background-color:  #F4F9FF;
  color: none;
  cursor: pointer;
  border: none;
  margin: auto 0;
`

const SearchButton = styled.button`
  position: absolute;
  right: 1.6875rem; 
  width: 1.5rem; 
  height: 1.5rem; 
  padding: 0.1875rem; 
  background-color: transparent;
  color: none;
  cursor: pointer;
  border: none;
  margin: auto 0;
`;

const MemberIcon = styled.div`
  width: 1.5625rem; 
  height: 0.875rem; 
  gap: 0.25rem; 
  box-sizing: border-box;
`;

const MemberListBox = styled.div`

  padding: 1rem 0.625rem; 
  margin-top: 2%;
  gap: 0.625rem; 
  border-width: 0.0625rem 0; 
  border-style: solid;
  border-color: #509BF7;
  box-sizing: border-box;
  opacity: 1; 
  align-self: stretch;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  white-space: nowrap;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 0.625rem;
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
  text-align: center;
`;

const MemberAddBtn = styled.button`
  width: 2.75rem;
  height: 2.75rem; 
  margin-right:1.6rem; 
  padding: 0.625rem;
  border-radius: 0.5rem;
  box-sizing: border-box;
  background: #F4F9FF;
  border: 0.02rem solid #C9E0FD; 
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MemberNameBtn = styled.img`
  width: 2.75rem; 
  height: 2.75rem; 
  border-radius: 0.5rem;
  opacity: 1; 
  background: #DDDDDD;
  box-sizing: border-box;
  border: 0.02rem solid #DDDDDD;
  margin-right:1.6rem; 
`;

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

export const MemberListItem = () => {

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
    <Container>
      <CustomInput placeholder={"입력하세요"}></CustomInput>

      <MemberIcon><HumanIcon /></MemberIcon>
      <MemberListBox>
        <ButtonContainer>
          <Link to='/member/invite'>
            <MemberAddBtn><PlusIcon /></MemberAddBtn>
          </Link>
          <ButtonText>멤버초대하기</ButtonText>
        </ButtonContainer>
        <ButtonContainer>
          <MemberNameBtn />
          <ButtonText>멤버초대하기</ButtonText>
          <SearchButton onClick={handleOpenModal}><DotsIcon /></SearchButton>
        </ButtonContainer>
      </MemberListBox>

      <CustomModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        buttons={modalButtons}
      />

  {isSecondModalOpen && (
          <ModalOverlay onClick={handleSecondModalClose}>
            <SecondModalContent onClick={(e) => e.stopPropagation()}>
              <p>추방하시겠습니까?</p>
              <CloseButton onClick={handleSecondModalClose}>취소</CloseButton>
            </SecondModalContent>
          </ModalOverlay>
        )}
    </Container>
  );
};
