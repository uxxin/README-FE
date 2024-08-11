import React, { useState } from 'react';
import { Header } from '../../../components/Header';
import { AcceptanceList } from '../../../components/Notice/Confirm/AcceptanceList';
import { ConfirmStatusSwitch } from '../../../components/Notice/Confirm/ConfirmStatusSwitch';
import styled from 'styled-components';
import { CheckList } from '../../../components/Notice/Confirm/CheckList';

const ConfirmRequestApproval = () => {
  const [state, setState] = useState();

  const handleStateChange = (seletedState) => {
    setState(seletedState);
  };
  console.log('state', state);

  return (
    <div>
      <Header title="확인 요청 내역" isSearch={true} gap="1rem" />
      <Container>
        <ConfirmStatusSwitch onStateChange={handleStateChange} />
        {state === 'waiting' ? <CheckList /> : <AcceptanceList />}
        <AcceptanceList />
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  padding: 0.625rem 1rem 5.8432rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
`;

export default ConfirmRequestApproval;
