import React, { useState } from 'react';
import { Profile } from '../../components/Main/Profile';
import { RecentNotices } from '../../components/Main/RecentNotices';
import { OpendNoticeRoom } from '../../components/Main/OpendNoticeRoom';
import { EnteredNoticeRoom } from '../../components/Main/EnteredNoticeRoom';
import FixedNotice from '../../components/Main/FixedNotice';
import styled from 'styled-components';

const Home = () => {
  const [isFixedNoticeVisible, setIsFixedNoticeVisible] = useState(true);

  const handleDeleteClick = () => {
    setIsFixedNoticeVisible(false);
  };

  return (
    <Container>
      <Navbar>
        <Logo>로고 영역</Logo>
      </Navbar>

      <Scroll>
        <Profile />
        {isFixedNoticeVisible && <FixedNotice onDelete={handleDeleteClick} />}
        <RecentNotices />
        <OpendNoticeRoom />
        <EnteredNoticeRoom />
      </Scroll>
    </Container>
  );
};

export default Home;

const Logo = styled.div`
  display: flex;
  height: 2.75rem;
  padding: 0.8125rem 0;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: var(--Text-default, var(--Grayscale-Gray7, #222));
  text-align: center;

  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.125rem;
  letter-spacing: -0.0225rem;
`;

const Container = styled.div`
  display: flex;
  padding: 0.625rem 1rem;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const Navbar = styled.div`
  display: flex;
  width: 100%;
  height: 1.6875rem;
  padding: 0.8125rem 0;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: 0.0625rem solid red;
`;

const Scroll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;
