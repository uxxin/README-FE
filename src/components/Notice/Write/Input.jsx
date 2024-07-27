import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

export const Input = ({ onInputChange }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const contentInputRef = useRef(null);

  useEffect(() => {
    const textarea = contentInputRef.current;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [content]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    onInputChange(event.target.value, content);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
    onInputChange(title, event.target.value);
  };

  return (
    <Container>
      <TitleInput
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="제목을 입력하세요"
        maxLength={20}
      />
      <ContentInput
        ref={contentInputRef}
        value={content}
        onChange={handleContentChange}
        placeholder="내용을 입력하세요"
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`;

const TitleInput = styled.input`
  display: flex;
  padding: 0.75rem 1.125rem;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  background: var(--Primary-Normal, #509bf7);
  overflow: hidden;
  color: var(--Basic-White, var(--Basic-White, #fff));
  text-overflow: ellipsis;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 1.125rem */
  letter-spacing: -0.0225rem;
  outline: none;
  border: 0.5px solid var(--Primary-normal, #509bf7);
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  ::placeholder {
    color: var(--Text-emtpy, var(--Grayscale-Gray4, #bdbdbd));
  }
`;

const ContentInput = styled.textarea`
  display: flex;
  min-height: 16.125rem;
  padding: 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  align-self: stretch;
  background: var(--Basic-White, #fff);
  outline: none;
  border: 0.5px solid var(--Primary-normal, #509bf7);
  color: var(--Text-default, var(--Grayscale-Gray7, #222));
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 1.2rem */
  letter-spacing: -0.02rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  resize: none;
  ::placeholder {
    color: var(--Text-emtpy, var(--Grayscale-Gray4, #bdbdbd));
  }
`;
