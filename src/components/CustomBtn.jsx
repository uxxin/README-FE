import React from 'react';
import styled from 'styled-components';

export const CustomBtn = (props) => {
  return (
    <StyledCustomBtn
      border={props.border}
      background={props.background}
      onClick={props.onClick}
    >
      {props.text}
    </StyledCustomBtn>
  );
};

const StyledCustomBtn = styled.button`
  display: flex;
  width: 100%;
  height: 3.1875rem;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.5rem;
  border: ${(props) => props.border};
  background: ${(props) => props.background};
  color: ${(props) => (props.background === '#FFFFFF' ? '#509BF7' : '#FFFFFF')};
`;
