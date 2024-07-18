import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledCustomBtn = styled.div`
  display: flex;
  padding: 1rem 9.6875rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.5rem;
  border: ${(props) => props.border};
  background: ${(props) => props.background};
  color: ${(props) => (props.background === '#FFFFFF' ? '#509BF7' : '#FFFFFF')};
`;

export const CustomBtn = ({ props }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (props.link) {
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
