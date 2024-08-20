import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const ConfirmStatusSwitch = ({ onStateChange }) => {
  const navigate = useNavigate();
  const keysCount = useSelector((state) => state.check.count);
  const [state, setState] = useState('waiting');

  const handleClick = (newState) => {
    setState(newState);
  };

  useEffect(() => {
    onStateChange(state);
  }, [state]);

  return (
    <Container>
      <MissionTogle>
        <BarLeftContainer
          active={state === 'waiting'}
          onClick={() => handleClick('waiting')}
        >
          대기({keysCount})
        </BarLeftContainer>
        <BarRightContainer
          active={state === 'approved'}
          onClick={() => handleClick('approved')}
        >
          승인완료
        </BarRightContainer>
      </MissionTogle>
    </Container>
  );
};

const Container = styled.div`
  padding: 0.625rem 1rem;
`;

const MissionTogle = styled.div`
  display: flex;
  height: 2.5rem;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 0.5rem;
  color: var(--Basic-White, var(--Basic-White, #fff));
  text-align: center;
`;

const BarLeftContainer = styled.button`
  border-radius: 0.5rem 0 0 0.5rem;
  border: 1px solid #bdbdbd;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  color: ${(props) => (props.active ? '#ffffff' : '#509bf7')};
  background: ${(props) => (props.active ? '#509bf7' : 'white')};
  display: flex;
  padding: 0.75rem 4.125rem;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border: ${(props) => (props.active ? 'none' : '0.33px solid #bdbdbd')};

  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.02rem;
`;

const BarRightContainer = styled.button`
  display: flex;
  color: ${(props) => (props.active ? '#ffffff' : '#509bf7')};
  background: ${(props) => (props.active ? '#509bf7' : 'white')};
  padding: 0.75rem 4.125rem;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 0rem 0.5rem 0.5rem 0rem;
  border: ${(props) => (props.active ? 'none' : '0.33px solid #bdbdbd')};

  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.02rem;
`;
