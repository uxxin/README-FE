import React from 'react';
import { Profile } from '../../components/Main/Profile';
import { RecentNotices } from '../../components/Main/RecentNotices';
import { OpendNoticeRoom } from '../../components/Main/OpendNoticeRoom';
import { EnteredNoticeRoom } from '../../components/Main/EnteredNoticeRoom';
import styled from 'styled-components';

const Home = () => {
  console.log('Home component rendered');
  return (
    <Container>
      <Navbar>
        <Logo>로고 영역</Logo>
      </Navbar>

      <Scroll>
        <Profile />
        <FixedNotice>고정 공지-컴포넌트로 만들기</FixedNotice>
        <RecentNotices />
        <OpendNoticeRoom />
        <EnteredNoticeRoom />
      </Scroll>
    </Container>
  );
};

export default Home;

const Logo = styled.div``;
const FixedNotice = styled.div``;

const Container = styled.div`
  display: flex;
  width: 430px;
  padding: 10px 16px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;
const Navbar = styled.div`
  display: flex;
  width: 429px;
  height: 44px;
  padding: 13px 0px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: 1px solid red; /* 디버깅용 테두리 */
`;
const Scroll = styled.div`
  display: flex;
  width: 430px;
  padding: 10px 16px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  border: 1px solid blue; /* 디버깅용 테두리 */
`;
