import React from 'react';
import { DefaultProfile } from '../../components/MyPage/DefaultProfile';
import { NoticeRoomProfile } from '../../components/MyPage/NoticeRoomProfile';

const MyPage = () => {
  return (
    <div>
      <DefaultProfile />
      <NoticeRoomProfile />
    </div>
  );
};

export default MyPage;
