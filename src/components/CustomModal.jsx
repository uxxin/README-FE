import React from 'react';
import styled from 'styled-components';

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
  width: 7.625rem;
  height: 4.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
  color: ${({ color }) => color || 'black'};
  border: 0.33px solid #bdbdbd;
  cursor: pointer;
  width: 100%;
  border-radius: ${({ isTop }) =>
    isTop ? '0.3125rem 0.3125rem 0 0' : '0 0 0.3125rem 0.3125rem'};
  &:first-child {
    border-radius: 5px 5px 0 0;
  }
  &:last-child {
    border-radius: 0 0 5px 5px;
  }
`;

const CustomModal = ({ isOpen, onClose, buttons }) => {
  if (!isOpen) return null;

  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={handleModalContentClick}>
        {buttons &&
          buttons.map((button, index) => (
            <ModalButton
              key={index}
              onClick={button.onClick}
              color={button.color}
            >
              {button.label}
            </ModalButton>
          ))}
      </ModalContent>
    </ModalOverlay>
  );
};
export default CustomModal;
