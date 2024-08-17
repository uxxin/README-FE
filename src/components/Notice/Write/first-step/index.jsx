import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '../../../common/button';
import { ReactComponent as CheckSvg } from '../../../../assets/svgs/post_type_check.svg';

const DEFAULT_HEIGHT = 39;

const FirstStep = ({ handleNextStep, postData, handleUpdatePostData }) => {
  const textareaRef = useRef(DEFAULT_HEIGHT);
  const disabled = postData.title === '' || postData.content === '';
  const handleTypeCheck = (selectedType) => {
    handleUpdatePostData({ type: 'type', value: selectedType });
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    handleUpdatePostData({ type: 'title', value });
  };
  const handleContentChange = (e) => {
    const { value } = e.target;
    textareaRef.current.style.height = 0;
    textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    handleUpdatePostData({ type: 'content', value });
  };
  return (
    <>
      <Container>
        <section className="type">
          <button
            className={`bold-16 ${postData.type === 'QUIZ' && 'activate'}`}
            onClick={() => handleTypeCheck('QUIZ')}
          >
            {postData.type === 'QUIZ' && <CheckSvg />}퀴즈
          </button>
          <div className="divider" />
          <button
            className={`bold-16 ${postData.type === 'MISSION' && 'activate'}`}
            onClick={() => handleTypeCheck('MISSION')}
          >
            {postData.type === 'MISSION' && <CheckSvg />}미션
          </button>
        </section>
        <section className="title-content">
          <input
            className="bold-18"
            value={postData.title}
            onChange={handleInputChange}
            placeholder="제목을 입력하세요."
          />
          <textarea
            ref={textareaRef}
            className="medium-16"
            value={postData.content}
            onChange={handleContentChange}
            rows={1}
            placeholder="내용을 입력하세요."
            style={{ height: `${textareaRef.current}px` }}
          />
        </section>
      </Container>
      <Floating>
        <Button name="다음" onClick={handleNextStep} disabled={disabled} />
      </Floating>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.625rem 1rem calc(3.995rem + 53.19px);

  .type {
    display: flex;
    align-items: center;

    button {
      color: var(--color-caption);
      border: none;
      background-color: #ffffff;
      display: flex;
      align-items: center;
      padding: 0.38rem 0.625rem;

      &.activate {
        color: var(--color-primary-normal);
      }
    }

    .divider {
      width: 0.19rem;
      height: 1rem;
      background-color: var(--color-primary-normal);
    }
  }

  .title-content {
    display: flex;
    flex-direction: column;

    input {
      outline: none;
      padding: 0.75rem 1.12rem;
      background-color: var(--color-primary-normal);
      border: 0.0625rem solid var(--color-primary-normal);
      border-radius: 0.5rem 0.5rem 0 0;
      color: #ffffff;
    }

    textarea {
      padding: 1.25rem 1.25rem 0;
      background-color: #ffffff;
      border: 0.0625rem solid var(--color-primary-normal);
      border-radius: 0 0 0.5rem 0.5rem;
      resize: none;
      outline: none;
      color: var(--color-default);
    }
  }
`;

const Floating = styled.div`
  background-color: #ffffff;
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  max-width: 429px;
  bottom: 0;
  padding-bottom: 3.37rem;
`;

export default FirstStep;
