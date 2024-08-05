import React from 'react';
import styled from 'styled-components';
import { Header } from '../../components/Header';
import NoRequestDatas from '../../components/Main/NoRequestData';

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
      <NoRequestDatas />
    </>
  );
};

export default NoticeCheckRequests;
