import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getEnteredRoom } from '../../api/Main/home';
import NoticeRoom from './NoticeRoom';
import prevButtonSvg from '../../assets/svgs/prev_button.svg';
import nextButtonSvg from '../../assets/svgs/next_button.svg';
import { useNavigate } from 'react-router-dom';

const ITEMS_PER_PAGE = 6;

export const EnteredNoticeRoom = () => {
  const navigate = useNavigate();
  const [noticeRooms, setNoticeRooms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isNext, setIsNext] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    (async () => {
      try {
        const response = await getEnteredRoom(currentPage, ITEMS_PER_PAGE);
        console.log(response);

        if (response.isSuccess) {
          setNoticeRooms(response.result.rooms);
          setIsNext(response.result.isNext);
          setTotalPages(response.result.totalPages);
        }
      } catch (error) {
        console.error('Error fetching entered rooms:', error);
      }
    })();
  }, [currentPage]);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const handleNextPage = () => {
    if (isNext || currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
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
          <>
            <NoticeRooms>
              {currentNotices.map((room) => (
                <NoticeRoom
                  key={room.id}
                  room={room}
                  onClick={() => navigate(`/notice/${room.id}`)}
                />
              ))}
            </NoticeRooms>
            {noticeRooms.length > 0 && (
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
                <NavButton
                  onClick={handleNextPage}
                  src={nextButtonSvg}
                  alt="Next"
                />
              </Pagination>
            )}
          </>
        ) : (
          <NoticeRooms>
            <NoNoticesBox>
              <NoNoticesText>
                <span>아직 입장한</span>
                <br />
                <span>공지방이 없어요</span>
              </NoNoticesText>
            </NoNoticesBox>
          </NoticeRooms>
        )}
      </NoticeRoomsInfo>
    </EnteredNoticeRoomSection>
  );
};

export default EnteredNoticeRoom;

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
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.8125rem;
`;

const NoNoticesBox = styled.div`
  display: flex;
  width: 20%;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.5rem;
  border: 0.0208rem solid var(--Primary-normal, #509bf7);
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
