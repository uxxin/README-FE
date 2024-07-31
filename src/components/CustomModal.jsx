<<<<<<< HEAD
import React, { useRef, useState, useEffect } from 'react';

=======
import React from 'react';
>>>>>>> 9cd2c3f0f0501f3de6706aaa4a438bd3111c8107
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
`;

const ModalContent = styled.div`
  background: transparent;
<<<<<<< HEAD
=======
  padding: 1.5rem;
  width: 7.625rem;
  height: 4.5rem;
>>>>>>> 9cd2c3f0f0501f3de6706aaa4a438bd3111c8107
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
<<<<<<< HEAD
  width: 7.625rem;
  height: 2.25rem;
=======
  width: 100%;
>>>>>>> 9cd2c3f0f0501f3de6706aaa4a438bd3111c8107
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
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const modalElement = modalRef.current;
      const parentElement = modalElement ? modalElement.parentNode : null;
      if (
        !modalElement.contains(event.target) &&
        !parentElement.contains(event.target)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
<<<<<<< HEAD
    <ModalOverlay ref={modalRef}>
      <ModalContent>
=======
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={handleModalContentClick}>
>>>>>>> 9cd2c3f0f0501f3de6706aaa4a438bd3111c8107
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
<<<<<<< HEAD

=======
>>>>>>> 9cd2c3f0f0501f3de6706aaa4a438bd3111c8107
export default CustomModal;
