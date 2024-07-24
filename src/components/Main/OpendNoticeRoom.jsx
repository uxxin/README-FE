import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import NoticeRoom from './NoticeRoom';
import addButtonImage from '../../assets/images/addbutton.svg';

export const OpendNoticeRoom = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddButtonClick = () => {
    navigate(location.pathname);
  };

  return (
    <OpenedNoticeRoomSection>
      <OpenedTitle>개설한 공지방</OpenedTitle>
      <NoticeRooms>
        {[...Array(5)].map((_, index) => (
          <NoticeRoom key={index} index={index} />
        ))}
        <StyledAddNoticeRoom onClick={handleAddButtonClick}>
          <StyledAddButtonImage src={addButtonImage} alt="Add Notice Room" />
        </StyledAddNoticeRoom>
      </NoticeRooms>
    </OpenedNoticeRoomSection>
  );
};

const OpenedTitle = styled.div`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  color: var(--Text-default, var(--Grayscale-Gray7, #222));
  text-align: center;
  line-height: 100%;
  letter-spacing: -0.4px;
  margin: 0;
  padding: 0;
`;

const OpenedNoticeRoomSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  width: 100%;
`;

const NoticeRooms = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
  align-items: flex-start;
  align-content: flex-start;
  align-self: stretch;
`;

const StyledAddNoticeRoom = styled.div`
  display: flex;
  width: calc((100% - 26px) / 3); /* 100% - 26px (2 gaps) / 3 items */
  height: 160px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 0.33px solid var(--Primary-normal, #509bf7);
  background: var(--Basic-White, #fff);
  cursor: pointer;
  padding: 12px;
  box-sizing: border-box;
`;

const StyledAddButtonImage = styled.img`
  width: 24px;
  height: 24px;
`;

export default OpendNoticeRoom;
