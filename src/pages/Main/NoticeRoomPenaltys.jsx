import React from 'react';
import { Header } from '../../components/Header';
import PenaltyDetails from '../../components/Main/PenaltyDetails';

const NoticeRoomPenaltys = () => {
  return (
    <>
      <Header title="페널티" isSearch={false} />
      <PenaltyDetails />
    </>
  );
};

export default NoticeRoomPenaltys;
