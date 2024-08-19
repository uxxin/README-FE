import React from 'react';
import styled from 'styled-components';

export const ModalOverlay = ({ children }) => {
  return <Overlay>{children}</Overlay>;
};

export const ModalContent = ({ children }) => {
  return <Content>{children}</Content>;
};

export const ModalTitle = ({ children }) => {
  return <Title>{children}</Title>;
};

export const ModalText = ({ children }) => {
  return <Text>{children}</Text>;
};

export const ModalButton = ({ children, onClick, isFailureModal }) => {
  return (
    <Button isFailureModal={isFailureModal} onClick={onClick}>
      {children}
    </Button>
  );
};

export const ModalTextGroup = ({ children }) => {
  return <TextGroup>{children}</TextGroup>;
};

export const ModalButtonsHorizontal = ({ children }) => {
  return <ButtonsHorizontal>{children}</ButtonsHorizontal>;
};

export const ModalButtonsVertical = ({ children }) => {
  return <ButtonsVertical>{children}</ButtonsVertical>;
};

export const SuccessModalDivider = () => {
  return <Divider />;
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(34, 34, 34, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 1.1875rem;
  gap: 0.125rem;
  border-radius: 0.5rem;
  border: 0.33px solid #c9e0fd;
  background: #f4f9ff;
  backdrop-filter: blur(2.5rem);
  width: 16.875rem;
`;

const Title = styled.div`
  color: #222;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
`;

const Text = styled.div`
  color: #222;
  font-size: 0.75rem;
  font-weight: 400;
  text-align: center;
`;

const Button = styled.button`
  color: #509bf7;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: -0.02rem;
  background: none;
  border: none;
  cursor: pointer;
  flex: 1;

  &:first-child {
    ${({ isFailureModal }) =>
      !isFailureModal && 'border-right: 0.0208125rem solid #888;'}
    padding: 0.875rem 0;
  }

  &:last-child {
    padding: 0.875rem 0;
  }
`;

const TextGroup = styled.div`
  display: flex;
  width: 16.875rem;
  padding: 0rem 1rem 0.9375rem 1rem;
  flex-direction: column;
  align-items: center;
  gap: 0.125rem;
`;

const ButtonsHorizontal = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  border-top: 0.0208125rem solid #888;
`;

const ButtonsVertical = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  gap: 0.5rem;

  & > button:first-child {
    border-top: 0.0208125rem solid #888;
    border-bottom: 0.0208125rem solid #888;
    width: 100%;
  }
`;

const Divider = styled.div`
  width: 100%;
  border-top: 0.333px solid #888;
  margin-top: 0.5rem;
`;
