import React from 'react';
import styled from 'styled-components';

export const QuestionPreview = ({ postType }) => {
  return (
    <Container>
      {postType === 'Quiz' ? (
        <>
          <Question>
            Q. 퀴즈형 공지글의 예시 질문입니다. 예시 질문입니다.
          </Question>
          <Answer>A. 퀴즈형 공지글의 예시 답변입니다.</Answer>
        </>
      ) : (
        <Question>
          Q. 질문형 공지글의 예시 질문입니다. 예시 질문입니다.
        </Question>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 0.875rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  align-self: stretch;
  border-radius: 0.5rem;
  border: 0.33px solid var(--Primary-Light-active, #c9e0fd);
  background: var(--Primary-Light, #f4f9ff);
`;

const Question = styled.div`
  align-self: stretch;
  color: ${({ postType }) =>
    postType === 'Quiz'
      ? 'var(--Primary-normal, var(--Primary-Normal, #509bf7))'
      : 'var(--Text-default, var(--Grayscale-Gray7, #222))'};
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 100%; /* 1.125rem */
  letter-spacing: -0.0225rem;
`;

const Answer = styled.div`
  align-self: stretch;
  color: var(--Text-default, var(--Grayscale-Gray7, #222));
  font-size: 1rem;
  font-weight: 500;
  line-height: 120%; /* 1.2rem */
  letter-spacing: -0.02rem;
`;
