import React from 'react';
import styled from 'styled-components';

const NoRequestDatas = () => {
  return (
    <Container>
      <NoData>확인요청내역이 없습니다.</NoData>
    </Container>
  );
};

export default NoRequestDatas;

const Container = styled.div`
  display: flex;
  padding: 0.625rem 1rem;
  flex-direction: column;
  justify-content: center;
  gap: 0.625rem;
`;

const NoData = styled.div`
  display: flex;
  padding: 1.5rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  border-radius: 0.5rem;
  border: 0.33px solid var(--Primary-light-active, #c9e0fd);
  background: #f4f9ff;

  color: #000;
  font-size: 1rem;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.02rem;
`;
