import React from 'react';
import { Header } from '../../components/Header';
import { ConfirmList } from '../../components/Notice/ConfirmList';

const Confirm = () => {
  return (
    <div>
      <Header title="확인 요청 내역" isSearch={true} gap="1rem" />
      <ConfirmList />
    </div>
  );
};

export default Confirm;
