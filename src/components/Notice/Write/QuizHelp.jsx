import React from 'react';
import styled from 'styled-components';

export const QuizHelp = () => {
  return (
    <Container>
      <div>예시</div>
      <div>1. 우리 팀 회장의 이름은?</div>
      <div>2. 이번 모임 장소는 ㅇㅇ역이다.</div>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  /* 수평 가운데 정렬 */
  left: 50%;
  transform: translateX(-50%);
  top: 2.3775rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10.125rem;
  height: 2.44275rem;
  background: url(../../../assets/images/bg_earn_point_info.png) no-repeat
    center center;
  background-size: cover;
`;
