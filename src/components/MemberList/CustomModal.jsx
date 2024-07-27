import React from "react";

import styled from "styled-components";
/*
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
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

const ModalButtonTop = styled.button`
  display: block;
  margin-bottom: 0;
  padding: 0.5rem 1rem;
  background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
  color: ${({ color }) => color || 'black'};
  border-radius: 5px 5px 0 0;
  width: 122px;
  height: 36px;
  border: 0.33px solid #BDBDBD;
  cursor: pointer;
  z-index: 1;
`;

const ModalButtonBottom = styled.button`
  display: block;
  margin-bottom: 0;
  padding: 0.5rem 1rem;
  background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
  color: ${({ color }) => color || 'black'};
  border-radius: 0 0 5px 5px;
  width: 122px;
  height: 36px;
  border: 0.33px solid #BDBDBD;
  cursor: pointer;
  z-index: 1;
`;

const CustomModal = ({ isOpen, onClose, buttons }) => {
  if (!isOpen) return null;

  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={handleModalContentClick}>
        {buttons && buttons.map((button, index) => (
          index === 0 ? (
            <ModalButtonTop 
              key={index} 
              onClick={button.onClick} 
              backgroundColor={button.backgroundColor} 
              color={button.color}
            >
              {button.label}
            </ModalButtonTop>
          ) : (
            <ModalButtonBottom 
              key={index} 
              onClick={button.onClick} 
              backgroundColor={button.backgroundColor} 
              color={button.color}
            >
              {button.label}
            </ModalButtonBottom>
          )
        ))}
      </ModalContent>
    </ModalOverlay>
  );
};
export default CustomModal;

*/