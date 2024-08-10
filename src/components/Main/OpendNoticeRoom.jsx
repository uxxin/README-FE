import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { getOpenedRoom } from '../../api/Main/home';
import NoticeRoom from './NoticeRoom';
import addButton from '../../assets/images/addicon.svg';
import prevButtonSvg from '../../assets/images/prev_button.svg';
import nextButtonSvg from '../../assets/images/next_button.svg';

const ITEMS_PER_PAGE = 6;

export const OpenedNoticeRoom = () => {
  const navigate = useNavigate();
  const [noticeRooms, setNoticeRooms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isNext, setIsNext] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await getOpenedRoom(currentPage, ITEMS_PER_PAGE);
        console.log(response);

        if (response.isSuccess) {
          setNoticeRooms(response.result.rooms);
          setIsNext(response.result.isNext);
        }
      } catch (error) {
        console.error('Error fetching opened rooms:', error);
      }
    })();
  }, [currentPage]);

  const totalPages = Math.ceil(noticeRooms.length / ITEMS_PER_PAGE) || 1;

  const handleAddButtonClick = () => {
    navigate('/create-notice-room');
  };

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
    <OpenedNoticeRoomSection>
      <TitleContainer>
        <OpenedTitle>개설한 공지방</OpenedTitle>
        <AddButtonImage
          onClick={handleAddButtonClick}
          src={addButton}
          alt="Add Notice Room"
        />
      </TitleContainer>
      <NoticeRoomsInfo>
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
      </NoticeRoomsInfo>
    </OpenedNoticeRoomSection>
  );
};

export default OpenedNoticeRoom;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const NoticeRoomsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

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
  width: 100%;
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
  justify-content: space-between;
  gap: 0.8125rem;
  align-items: flex-start;
  align-content: flex-start;
  align-self: stretch;
  //border: 0.0625rem solid red; //디버깅용 테두리
`;

const AddButtonImage = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
`;

const Pagination = styled.div`
  display: flex;
  padding: 0.5rem 0; /* 8px */
  justify-content: center;
  align-items: center;
  gap: 1.375rem; /* 22px */
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
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  border: 0.0208rem solid var(--Primary-light-active, #c9e0fd); /* 0.33px */
  background: var(--Primary-light, #f4f9ff);
  cursor: pointer;
`;
