import React from 'react';
import { Header } from '../../components/Header';
import { MemberInvite } from '../../components/MemberList/MemberInvite';

const Invite = () => {
  return(
    <div>
    <Header props={{ title: '멤버초대하기', isSearch: true, gap: '1rem' }} />
    <MemberInvite/>
    </div>
    )
};

export default Invite;
