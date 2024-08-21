import React, { useEffect, useState } from 'react';
import { MypageContainer } from '../../styles/MyPage/style';
import Profile from '../../components/MyPage/profile';
import { GetAxiosInstance } from '../../axios/axios.method';
import { Header } from '../../components/Header';

const MyPage = () => {
  const [user, setUser] = useState({
    nickname: '닉네임',
    profileImage: '',
    profiles: [],
  });
  useEffect(() => {
    (async () => {
      const res = await GetAxiosInstance('/user/profile');
      if (res.data.isSuccess) {
        setUser({
          ...res.data.result,
          profiles: res.data.result.profiles || [],
        });
      }
    })();
  }, []);
  return (
    <>
      <Header title="마이페이지" isNotHome />
      <MypageContainer>
        <Profile
          nickname={user.nickname}
          profileImage={user.profileImage}
          defaultProfile
        />
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
                <Profile key={profile.roomId} {...profile} />
              ))}
            </div>
          )}
        </section>
      </MypageContainer>
    </>
  );
};

export default MyPage;
