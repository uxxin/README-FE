import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const CustomBtn = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (props.background !== '#BDBDBD') {
      navigate(props.link);
    }
  };

  return (
    <StyledCustomBtn
      border={props.border}
      background={props.background}
      onClick={handleClick}
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
