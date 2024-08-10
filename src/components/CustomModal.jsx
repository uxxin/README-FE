import React, { useRef, useEffect } from 'react';

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
  width: 7.625rem;
  height: 2.25rem;
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
    <ModalOverlay ref={modalRef}>
      <ModalContent>
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
