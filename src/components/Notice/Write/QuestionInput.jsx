import React from 'react';
import styled from 'styled-components';

export const QuestionInput = ({ placeholder, value, onChange, charCount }) => {
  return (
    <Container>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={charCount ? 20 : undefined}
      />
      {charCount ? <CharCount>({value.length}/20)</CharCount> : <></>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 0.5rem;
  align-items: center;
  flex: 1 0 0;
  border-radius: 0.5rem;
  border: 0.33px solid var(--Primary-Light-active, #c9e0fd);
  background: var(--Primary-Light, #f4f9ff);
`;

const Input = styled.input`
  border: none;
  flex: 1;
  outline: none;
  background: none;
  font-family: 'Pretendard';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 1.2rem */
  letter-spacing: -0.02rem;
  color: var(--Primary-normal, var(--Primary-Normal, #509bf7));
  ::placeholder {
    color: var(--Text-emtpy, var(--Grayscale-Gray4, #bdbdbd));
  }
`;

const CharCount = styled.span`
  color: var(--Text-caption, var(--Grayscale-Gray5, #888));
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 100%; /* 0.75rem */
  letter-spacing: -0.015rem;
`;
