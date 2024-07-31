import React from 'react';
import { Header } from '../../components/Header';
import { CheckList } from '../../components/MemberList/CheckList';

const CheckListPage = () => {
  return (
    <div>
      <Header props={{ title: '멤버초대하기', isSearch: true, gap: '1rem' }} />
      <CheckList/>
    </div>
  )
};

export default CheckListPage;
