import React from 'react';
import { FloatingButtonContainer } from './style';

const FloatingButton = ({ onClick, disabled }) => {
  return (
    <FloatingButtonContainer>
      <button
        className={`medium-16 ${disabled && 'disabled'}`}
        onClick={onClick}
        disabled={disabled}
      >
        확인
      </button>
    </FloatingButtonContainer>
  );
};

export default FloatingButton;
