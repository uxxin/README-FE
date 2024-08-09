import React, { useEffect, useState } from 'react';
import Header from '../../components/MyPage/header';
import { MypageContainer } from '../../styles/MyPage/style';
import Profile from '../../components/MyPage/profile';
import { GetAxiosInstance } from '../../axios/axios.method';

const MyPage = () => {
  const [user, setUser] = useState({
    nickname: '',
    profileImage: '',
    profiles: [],
  });
  useEffect(() => {
    (async () => {
      const res = await GetAxiosInstance('/user/profile');
      setUser({ ...res.data.result, profiles: res.data.result.profiles || [] });
    })();
  }, []);
  return (
    <>
      <Header title="마이페이지" back />
      <MypageContainer>
        <Profile nickname={user.nickname} profileImage={user.profileImage} />
        <div className="divider" />
        <section className="profiles">
          <span className="regular-14">공지방 프로필</span>
          {user.profiles.length === 0 ? (
            <span className="medium-16 message">
              등록된 공지방 프로필이 없습니다.
            </span>
          ) : (
            <div className="wrapper">
              {user.profiles.map((profile) => (
                <Profile key={profile.id} {...profile} />
              ))}
            </div>
          )}
        </section>
      </MypageContainer>
    </>
  );
};

export default MyPage;
