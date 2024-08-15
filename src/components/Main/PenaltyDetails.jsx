import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import PenaltyNoticeForm from './PenaltyNoticeForm';
import { getPenaltyPosts } from '../../api/Main/penalty';

const PenaltyDetails = () => {
  const [penaltyDatas, setPenaltyDatas] = useState(null);
  const location = useLocation();

  const {
    penaltyCount = 0,
    maxPenaltyCount = 0,
    roomId,
  } = location.state || {};

  useEffect(() => {
    (async () => {
      try {
        const response = await getPenaltyPosts(roomId);
        console.log(response);

        if (response.isSuccess) {
          setPenaltyDatas(response.result.posts);
        }
      } catch (error) {
        console.log('페널티 데이터 불러오는 중 오류', error);
      }
    })();
  }, [roomId]);
  return (
    <Container>
      <TotalPenalty>
        누적 페널티 <PenaltyValue>{penaltyCount}</PenaltyValue>/
        <MaxPenaltyValue>{maxPenaltyCount}</MaxPenaltyValue>
      </TotalPenalty>
      {penaltyDatas &&
        penaltyDatas.map((data, index) => (
          <PenaltyNoticeForm key={index} {...data} />
        ))}
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
  line-height: 100%;
  letter-spacing: -0.02rem;
`;

const PenaltyValue = styled.span`
  color: #f5535e;
`;

const MaxPenaltyValue = styled.span`
  color: #888;
`;
