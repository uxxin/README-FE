import React from 'react';
import styled from 'styled-components';

export const QuizFormatLabel = ({ quizFormat }) => {
  return (
    <>
      {quizFormat == 'Mission' ? (
        <MissionLabel>미션</MissionLabel>
      ) : (
        <QuizLabel>퀴즈</QuizLabel>
      )}
    </>
  );
};

const MissionLabel = styled.div`
  display: flex;
  width: 100%;
  padding: 0.375rem 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 62.4375rem;
  background: var(--Blue-normal, #509bf7);
  color: var(--Basic-White, var(--Basic-White, #fff));
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.0175rem;
`;
const QuizLabel = styled.div`
  display: flex;
  width: 100%;
  padding: 0.375rem 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 62.4375rem;
  border: 2px solid var(--Blue-normal, #509bf7);
  background: var(--Basic-White, #fff);
  color: var(--Blue-normal, var(--Primary-Normal, #509bf7));
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.0175rem;
`;
