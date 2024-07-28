import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import NoticeRoom from './NoticeRoom';

export const EnteredNoticeRoom = () => {
  const [noticeRooms, setNoticeRooms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('mock/noticeRooms.json');
        setNoticeRooms(response.data);
      } catch (error) {
        console.error('Error fetching notice rooms:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <EnteredNoticeRoomSection>
      <EnteredTitle>입장한 공지방</EnteredTitle>
      <NoticeRooms>
        {noticeRooms.map((room) => (
          <NoticeRoom key={room.id} index={room.id} />
        ))}
      </NoticeRooms>
    </EnteredNoticeRoomSection>
  );
};

const EnteredTitle = styled.div`
  font-size: 1.25rem; /* 20px */
  font-weight: 700;
  color: var(--Text-default, var(--Grayscale-Gray7, #222));
  text-align: center;
  line-height: 1; /* 100% */
  letter-spacing: -0.025rem; /* -0.4px */
  margin: 0;
  padding: 0;
`;

const EnteredNoticeRoomSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem; /* 10px */
  align-self: stretch;
  width: 100%;
`;

const NoticeRooms = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6875rem; /* 11px */
  align-items: flex-start;
  align-content: flex-start;
  align-self: stretch;
  // Uncomment for debugging
  // border: 0.0625rem solid red; /* 1px */
`;

export default EnteredNoticeRoom;
