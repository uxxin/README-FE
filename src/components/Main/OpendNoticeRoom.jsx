import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NoticeRoom from './NoticeRoom';
import addButtonImage from '../../assets/images/addbutton.svg';

export const OpendNoticeRoom = () => {
  const navigate = useNavigate();
  const [noticeRooms, setNoticeRooms] = useState([]);

  useEffect(() => {
    const fetchNoticeRooms = async () => {
      try {
        const response = await axios.get('mock/noticeRooms.json');
        setNoticeRooms(response.data);
      } catch (error) {
        console.error('Error fetching notice rooms:', error);
      }
    };

    fetchNoticeRooms();
  }, []);

  const handleAddButtonClick = () => {
    navigate('/create-notice-room');
  };

  return (
    <OpenedNoticeRoomSection>
      <OpenedTitle>개설한 공지방</OpenedTitle>
      <NoticeRooms>
        {noticeRooms.map((room) => (
          <NoticeRoom key={room.id} index={room.id} />
        ))}
        <AddNoticeRoom onClick={handleAddButtonClick}>
          <AddButtonImage src={addButtonImage} alt="Add Notice Room" />
        </AddNoticeRoom>
      </NoticeRooms>
    </OpenedNoticeRoomSection>
  );
};

const OpenedTitle = styled.div`
  font-size: 1.25rem; /* 20px */
  font-weight: 700;
  color: var(--Text-default, var(--Grayscale-Gray7, #222));
  text-align: center;
  line-height: 1.25rem; /* 100% -> 1.25rem */
  letter-spacing: -0.025rem; /* -0.4px */
  margin: 0;
  padding: 0;
`;

const OpenedNoticeRoomSection = styled.section`
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
  gap: 0.8125rem;
  align-items: flex-start;
  align-content: flex-start;
  align-self: stretch;
  //border: 0.0625rem solid red; //디버깅용 테두리
`;

const AddNoticeRoom = styled.div`
  display: flex;
  width: calc(
    (100% - 1.4375rem) / 3
  ); //이것도 원래 26px로 해야되는데 일단 맞추려고 23px로 해둠.
  height: 10rem; /* 160px */
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem; /* 8px */
  border: 0.0208rem solid var(--Primary-normal, #509bf7); /* 0.33px */
  background: var(--Basic-White, #fff);
  cursor: pointer;
  box-sizing: border-box;
`;

const AddButtonImage = styled.img`
  width: 1.5rem; /* 24px */
  height: 1.5rem; /* 24px */
`;

export default OpendNoticeRoom;
