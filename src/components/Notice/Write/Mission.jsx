import React from 'react';
import styled from 'styled-components';
import { QuestionInput } from './QuestionInput';
import help from '../../../assets/images/help_icon.svg';

export const Mission = () => {
  return (
    <Container>
      <Section>
        <Title>시작 기한</Title>
        <QuestionInput placeholder="YY.MM.DD HH:MM" />
      </Section>
      <Section>
        <Title>마감 기한</Title>
        <QuestionInput placeholder="YY.MM.DD HH:MM" />
      </Section>
      <Section>
        <Title>
          미션
          <Help src={help} />
        </Title>
        <QuestionInput placeholder="미션을 입력하세요" charCount={true} />
      </Section>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
`;

const Title = styled.span`
  display: flex;
  width: 4.75rem;
  padding: 0.5rem 0rem;
  align-items: center;
  gap: 0.125rem;
  color: var(--Text-default, var(--Grayscale-Gray7, #222));
  font-size: 1rem;
  font-weight: 700;
  line-height: 100%; /* 1rem */
  letter-spacing: -0.02rem;
`;

const Help = styled.img`
  width: 1rem;
  height: 1rem;
`;
