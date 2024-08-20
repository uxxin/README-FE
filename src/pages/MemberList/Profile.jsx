import React from 'react';
import { MemberProfile } from '../../components/MemberList/MemberProfile';
import { Header } from '../../components/Header';
import { useLocation, useParams } from 'react-router-dom';

const Profile = () => {
  const location = useLocation();
  const { nickname } = location.state;

  return (
    <div>
      <Header title={`${nickname}님 프로필보기`} isSearch={true} gap="1rem" />
      <MemberProfile />
    </div>
  );
};

export default Profile;
