import React from 'react';
import styled from 'styled-components';
import PenaltyNoticeForm from './PenaltyNoticeForm';

const PenaltyDetails = () => {
  const maxPenaltyCount = 10;
  const penaltyCount = 3;
  return (
    <Container>
      <TotalPenalty>
        누적 페널티 <PenaltyValue>{penaltyCount}</PenaltyValue>/
        <MaxPenaltyValue>{maxPenaltyCount}</MaxPenaltyValue>
      </TotalPenalty>
      <PenaltyNoticeForm />
    </Container>
  );
};

export default PenaltyDetails;

const Container = styled.div`
  display: flex;
  padding: 0.625rem 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
`;

const TotalPenalty = styled.div`
  display: flex;
  padding: 0.25rem 0.625rem;
  justify-content: flex-end;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
  border-radius: 0.5rem;
  background: #fdd8db;
  color: #f5535e;
  text-align: right;
  font-size: 1rem;
  font-weight: 600;
  line-height: 100%; /* 1rem */
  letter-spacing: -0.02rem;
`;

const PenaltyValue = styled.span`
  color: #f5535e;
`;

const MaxPenaltyValue = styled.span`
  color: #888;
`;
