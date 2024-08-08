import React from 'react';
import { Header } from '../../components/Header';
import RequestDatas from '../../components/Main/RequestDatas';

const NoticeCheckRequests = () => {
  return (
    <>
      <Header
        props={{
          title: '확인요청내역',
          isSearch: false,
          url: '/home',
        }}
      />
      <RequestDatas />
    </>
  );
};

export default NoticeCheckRequests;
