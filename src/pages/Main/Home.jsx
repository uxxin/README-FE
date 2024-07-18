import React from 'react';
import { Profile } from '../../components/Main/Profile';
import { RecentNotices } from '../../components/Main/RecentNotices';
import { OpendNoticeRoom } from '../../components/Main/OpendNoticeRoom';
import { EnteredNoticeRoom } from '../../components/Main/EnteredNoticeRoom';

const Home = () => {
  return (
    <div>
      <Profile />
      <RecentNotices />
      <OpendNoticeRoom />
      <EnteredNoticeRoom />
    </div>
  );
};

export default Home;
