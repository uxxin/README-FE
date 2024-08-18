import React from 'react';
import styled from 'styled-components';

const CustomInput = ({
  placeholder,
  value,
  onChange,
  onBlur,
  charCount,
  type = 'text',
  readOnly = false,
  disabled = false,
}) => {
  return (
    <Container>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        maxLength={charCount ? 20 : undefined}
        readOnly={readOnly}
        disabled={disabled}
      />
      {charCount ? <CharCount>({value.length}/20)</CharCount> : <></>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1;
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
  font-family: 'Pretendard';
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.0225rem;
  color: #509bf7;
`;

const CharCount = styled.span`
  color: var(--Text-caption, var(--Grayscale-Gray5, #888));
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 100%; /* 0.75rem */
  letter-spacing: -0.015rem;
`;

export default CustomInput;
