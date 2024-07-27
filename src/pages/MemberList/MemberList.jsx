import React from 'react';
import { CustomSearch } from '../../components/CustomSearch';
import { MemberListItem } from '../../components/MemberList/MemberListItem';

const MemberList = () => {
  return (
    <div>
      <CustomSearch />
      <MemberListItem />
    </div>
  );
};

export default MemberList;
