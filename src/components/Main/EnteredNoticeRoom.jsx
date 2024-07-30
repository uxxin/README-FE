import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import NoticeRoom from './NoticeRoom';
import prevButtonSvg from '../../assets/images/prev_button.svg';
import nextButtonSvg from '../../assets/images/next_button.svg';

const ITEMS_PER_PAGE = 6;

export const EnteredNoticeRoom = () => {
  const [noticeRooms, setNoticeRooms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('mock/entered.json');
        setNoticeRooms(response.data);
      } catch (error) {
        console.error('Error fetching notice rooms:', error);
      }
    };

    fetchData();
  }, []);

  const totalPages = Math.ceil(noticeRooms.length / ITEMS_PER_PAGE) || 1;

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages ? prevPage + 1 : prevPage,
    );
  };

  const currentNotices = noticeRooms.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <EnteredNoticeRoomSection>
      <EnteredTitle>입장한 공지방</EnteredTitle>
      <NoticeRoomsInfo>
        {currentNotices.length > 0 ? (
          <NoticeRooms>
            {currentNotices.map((room) => (
              <NoticeRoom key={room.id} room={room} />
            ))}
          </NoticeRooms>
        ) : (
          <NoticeRooms>
            <NoNoticesBox>
              <NoNoticesText>아직 입장한 공지방이 없어요</NoNoticesText>
            </NoNoticesBox>
          </NoticeRooms>
        )}
        <Pagination>
          <NavButton
            onClick={handlePrevPage}
            src={prevButtonSvg}
            alt="Previous"
          />
          <PageNumber>
            <CurrentPage>{currentPage}</CurrentPage>
            <Separator>/</Separator>
            <TotalPages>{totalPages}</TotalPages>
          </PageNumber>
          <NavButton onClick={handleNextPage} src={nextButtonSvg} alt="Next" />
        </Pagination>
      </NoticeRoomsInfo>
    </EnteredNoticeRoomSection>
  );
};

const NoticeRoomsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

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
  align-items: flex-start;
  align-content: flex-start;
  gap: 0.8125rem;
  align-self: stretch;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const NoNoticesBox = styled.div`
  display: flex;
  width: 20%;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.5rem;
  border: 0.0208rem solid var(--Primary-normal, #509bf7);

  //height: 10rem;
  padding: 4.375rem 1.1875rem 4.125rem 1.1875rem;
  justify-content: flex-end;
  align-items: center;
`;

const NoNoticesText = styled.div`
  color: var(--Text-caption, var(--Grayscale-Gray5, #888));
  text-align: center;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 100%; /* 0.75rem */
  letter-spacing: -0.015rem;
`;

const Pagination = styled.div`
  display: flex;
  padding: 0.5rem 0; /* 8px */
  justify-content: center;
  align-items: center;
  gap: 1.375rem; /* 22px */
  margin-top: 0; /* Ensure there's no top margin */
`;

const PageNumber = styled.div`
  display: flex;
  align-items: center;
  gap: 0.125rem; /* 2px */
  font-weight: 600;
`;

const CurrentPage = styled.span`
  color: var(--Text-default, var(--Grayscale-Gray7, #222));
`;

const Separator = styled.span`
  color: var(--GrayScale-gray5, var(--Grayscale-Gray5, #888));
`;

const TotalPages = styled.span`
  color: var(--GrayScale-gray5, var(--Grayscale-Gray5, #888));
`;

const NavButton = styled.img`
  width: 1.5rem; /* 24px */
  height: 1.5rem; /* 24px */
  padding: 0.5rem; /* 8px */
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  border: 0.0208rem solid var(--Primary-light-active, #c9e0fd); /* 0.33px */
  background: var(--Primary-light, #f4f9ff);
  cursor: pointer;
`;

export default EnteredNoticeRoom;
