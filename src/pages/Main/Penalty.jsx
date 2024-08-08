import React from 'react';
import { Header } from '../../components/Header';
import PenaltyRooms from '../../components/Main/PenaltyRooms';

const Penalty = () => {
  return (
    <>
      <Header
        props={{
          title: '페널티',
          isSearch: false,
          url: '/home',
        }}
      />
      <PenaltyRooms />
    </>
  );
};

export default Penalty;
