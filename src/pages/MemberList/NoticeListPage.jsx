import React from 'react';
import { Header } from '../../components/Header';
import { NoticeList } from '../../components/MemberList/NoticeList';

const NoticeListPage = () => {
    return (
      <div>
        <Header props={{ title: '요청대기내역', isSearch: true, gap: '1rem' }} />
        <NoticeList/>
      </div>
    )
  };

  export default NoticeListPage;