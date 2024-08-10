import React from 'react';
import styled from 'styled-components';
import { Header } from '../../components/Header';

const NoticeRoomPenaltys = () => {
  return (
    <>
      <Header
        props={{
          title: '페널티',
          isSearch: false,
        }}
      />
      <Container>
        <TotalPenalty>누적 페널티</TotalPenalty>
      </Container>
    </>
  );
};

export default NoticeRoomPenaltys;

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

  color: var(--system-danger, var(--System-Danger, #f5535e));
  text-align: right;
  font-size: 1rem;
  font-weight: 600;
  line-height: 100%; /* 1rem */
  letter-spacing: -0.02rem;
`;
