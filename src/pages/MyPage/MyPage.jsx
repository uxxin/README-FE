import React from 'react';
import Header from '../../components/MyPage/header';
import { MypageContainer } from '../../styles/MyPage/style';
import Profile from '../../components/MyPage/profile';

const profiles = [
  { id: 1, profile: '', nickname: '리우', room: '인하 UMC' },
  { id: 2, profile: '', nickname: '레니', room: '한국공학대 UMC' },
  { id: 3, profile: '', nickname: '리나', room: '가톨릭대 UMC' },
];

const MyPage = () => {
  return (
    <>
      <Header title="마이페이지" back />
      <MypageContainer>
        <Profile nickname="레니" />
        <div className="divider" />
        <section className="profiles">
          <span className="regular-14">공지방 프로필</span>
          {profiles.length == 0 ? (
            <span className="medium-16 message">
              등록된 공지방 프로필이 없습니다.
            </span>
          ) : (
            <div className="wrapper">
              {profiles.map((profile) => (
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
