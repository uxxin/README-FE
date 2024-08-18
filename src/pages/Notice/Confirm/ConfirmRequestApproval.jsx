import React, { useState } from 'react';
import { Header } from '../../../components/Header';
import { AcceptanceList } from '../../../components/Notice/Confirm/AcceptanceList';
import { ConfirmStatusSwitch } from '../../../components/Notice/Confirm/ConfirmStatusSwitch';
import styled from 'styled-components';
import { CheckList } from '../../../components/Notice/Confirm/CheckList';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const ConfirmRequestApproval = () => {
  const [state, setState] = useState();

  const keysCount = useSelector((state) => state.check.count); 



  const handleStateChange = (seletedState) => {
    setState(seletedState);
  };
  console.log('state', state);

  return (
    <div>
      <Header title="확인 요청 내역" isSearch={true} gap="1rem" />
    
      <ConfirmStatusSwitch onStateChange={handleStateChange} />
        {state === 'waiting' ? <CheckList /> : <AcceptanceList />}
   
  
    </div>
  );
};


export default ConfirmRequestApproval;
