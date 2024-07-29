import React from 'react';
import { MemberProfile } from '../../components/MemberList/MemberProfile';
import { Header } from '../../components/Header';

const Profile = () => {
  return (
    <div>
      <Header props={{ title: '멤버초대하기', isSearch: true, gap: '1rem' }} />
      <MemberProfile/>
    </div>
  )
};

export default Profile;
