import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

export const PostInput = ({ onInputChange, postTitle, postContent }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const contentInputRef = useRef(null);

  const handleTitleChange = (event) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
    onInputChange(newTitle, content);
  };

  const handleContentChange = (event) => {
    const newContent = event.target.value;
    setContent(newContent);
    onInputChange(title, newContent);
  };

  useEffect(() => {
    const textarea = contentInputRef.current;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [content]);

  useEffect(() => {
    setTitle(postTitle || '');
    setContent(postContent || '');
  }, [postTitle, postContent]);

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
  font-family: 'Pretendard';
  font-style: normal;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 100%; /* 1.125rem */
  letter-spacing: -0.0225rem;
  outline: none;
  border: 0.5px solid var(--Primary-normal, #509bf7);
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
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
  font-family: 'Pretendard';
  font-style: normal;
  font-size: 1rem;
  font-weight: 500;
  line-height: 120%; /* 1.2rem */
  letter-spacing: -0.02rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  resize: none;
`;
