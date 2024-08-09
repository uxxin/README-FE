import React from 'react';
import Header from '../../components/MyPage/header';
import { MypageContainer } from '../../styles/MyPage/style';
import Profile from '../../components/MyPage/profile';

const profiles = ['인하 UMC', '한국공학대 UMC', '가톨릭대 UMC'];

const MyPage = () => {
  return (
    <>
      <Header title="마이페이지" back />
      <MypageContainer>
        <Profile />
        <div className="divider" />
        <section className="profiles">
          <span className="regular-14">공지방 프로필</span>
          {profiles.length == 0 ? (
            <span className="medium-16 message">
              등록된 공지방 프로필이 없습니다.
            </span>
          ) : (
            <div className="wrapper">
              {profiles.map((profile, idx) => (
                <Profile key={idx} room={profile} />
              ))}
            </div>
          )}
        </section>
      </MypageContainer>
    </>
  );
};

export default MyPage;
