import React from 'react';
import styled from 'styled-components';
import { Header } from '../../components/Header';

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
    </>
  );
};

export default NoticeCheckRequests;
