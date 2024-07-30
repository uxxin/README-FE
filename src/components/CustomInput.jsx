import React, { useState } from 'react';
import styled from 'styled-components';

const CustomInput = ({ placeholder, value, onChange, onBlur }) => {
  // const [inputValue, setInputValue] = useState('');

  // value={inputValue}
  // onChange={(e) => setInputValue(e.target.value)}

  return (
    <Container>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        maxLength={20}
      />
      <CharCount>({value.length}/20)</CharCount>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1.25rem 1.12rem;
  border-radius: 0.5rem;
  border: 0.33px solid var(--Primary-Light-active, #c9e0fd);
  background: var(--Primary-Light, #f4f9ff);
`;

const Input = styled.input`
  border: none;
  flex: 1;
  outline: none;
  background: none;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 100%; /* 1.125rem */
  letter-spacing: -0.0225rem;
  color: #509bf7;
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
  margin-left: 0.25rem;
`;

export default CustomInput;
