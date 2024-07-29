import React from 'react';
import { Header } from '../../components/Header';
import { MemberListItem } from '../../components/MemberList/MemberListItem';

const MemberList = () => {
  return (
    <div>
      <Header props={{ title: '멤버초대하기', isSearch: true, gap: '1rem' }} />
      <MemberListItem />
    </div>
  );
};

export default MemberList;
