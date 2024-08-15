import React from 'react';
import { MemberProfile } from '../../components/MemberList/MemberProfile';
import { Header } from '../../components/Header';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { nickname } = useParams(); 
  return (
    <div>
      <Header title={`${nickname} 프로필보기`} isSearch={true} gap="1rem" />
      <MemberProfile />
    </div>
  );
};

export default Profile;
