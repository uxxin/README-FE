import React, { useState, useEffect } from 'react';
import { Profile } from '../../components/Main/Profile';
import { RecentNotices } from '../../components/Main/RecentNotices';
import { OpenedNoticeRoom } from '../../components/Main/OpendNoticeRoom';
import { EnteredNoticeRoom } from '../../components/Main/EnteredNoticeRoom';
import FixedNotice from '../../components/Main/FixedNotice';
import styled from 'styled-components';
import logoImage from '../../assets/svgs/logoex.svg';

const Home = () => {
  const [isFixedNoticeVisible, setIsFixedNoticeVisible] = useState(true);

  const handleDeleteClick = () => {
    setIsFixedNoticeVisible(false);
  };

  const handleLogoClick = () => {
    window.location.reload();
  };

  useEffect(() => {
    document.body.style.marginTop = '0';

    return () => {
      document.body.style.marginTop = '2.75rem';
    };
  }, []);

  return (
    <Container>
      <Navbar>
        <Logo src={logoImage} alt="Logo" onClick={handleLogoClick} />
      </Navbar>

      <Scroll>
        <Profile />
        {isFixedNoticeVisible && <FixedNotice onDelete={handleDeleteClick} />}
        <RecentNotices />
        <OpenedNoticeRoom />
        <EnteredNoticeRoom />
      </Scroll>
    </Container>
  );
};

export default Home;

const Logo = styled.img`
  width: 6.9375rem;
  height: 2.25rem;
  cursor: pointer;
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
`;

const Scroll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;
