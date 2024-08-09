import React, { useState } from 'react';
import { Profile } from '../../components/Main/Profile';
import { RecentNotices } from '../../components/Main/RecentNotices';
import { OpendNoticeRoom } from '../../components/Main/OpendNoticeRoom';
import { EnteredNoticeRoom } from '../../components/Main/EnteredNoticeRoom';
import FixedNotice from '../../components/Main/FixedNotice';
import styled from 'styled-components';
import logoImage from '../../assets/images/logoex.svg';

const Home = () => {
  const [isFixedNoticeVisible, setIsFixedNoticeVisible] = useState(true);

  const handleDeleteClick = () => {
    setIsFixedNoticeVisible(false);
  };

  return (
    <Container>
      <Navbar>
        <Logo src={logoImage} alt="Logo" />
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

const Logo = styled.img`
  width: 6.9375rem;
  height: 2.25rem;
`;

const Container = styled.div`
  //display: flex;
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
  //border: 0.0625rem solid red;
`;

const Scroll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;
