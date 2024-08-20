import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getRecentNotice } from '../../api/Main/home';
import prevButtonSvg from '../../assets/svgs/prev_button.svg';
import nextButtonSvg from '../../assets/svgs/next_button.svg';

const ITEMS_PER_PAGE = 5; // 한 페이지에 5개씩 표시

export const RecentNotices = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [notices, setNotices] = useState([]);
  const [isNext, setIsNext] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await getRecentNotice(currentPage, ITEMS_PER_PAGE);
        console.log(response);

        if (response.isSuccess) {
          setNotices(response.result.recentPostList);
          setIsNext(response.result.isNext);
          setTotalPages(response.result.totalPages);
        }
      } catch (error) {
        console.error('Error fetching recent notices:', error);
      }
    })();
  }, [currentPage]);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => {
      if (prevPage > 1) {
        return prevPage - 1;
      }
      return prevPage;
    });
  };

  const handleNextPage = () => {
    if (isNext || currentPage < totalPages) {
      setCurrentPage((prevPage) =>
        prevPage + 1 > totalPages ? 1 : prevPage + 1,
      );
    }
  };

  const handleNoticeClick = (roomId, postId) => {
    navigate(`/notice/${roomId}/${postId}`);
  };

  const currentNotices = notices.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  // 마지막 페이지 빈 부분 개수
  const emptyRows = ITEMS_PER_PAGE - currentNotices.length;

  // 빈 부분도 추가해놓기
  const displayedNotices = [
    ...currentNotices,
    ...Array.from({ length: emptyRows }, () => ({
      roomName: '',
      title: '',
      createdAt: '',
    })),
  ];

  return (
    <RecentNoticesSection>
      <RecentTitle>최근 공지</RecentTitle>
      <NoticesList>
        {displayedNotices.map((notice, index) => (
          <NoticeItem
            key={index}
            isEmpty={!notice.roomName && !notice.title && !notice.createdAt}
          >
            <NoticeContent>
              <NoticeName>{notice.roomName}</NoticeName>
              <NoticeText
                onClick={() => handleNoticeClick(notice.roomId, notice.postId)} // Add onClick handler
              >
                {notice.title}
              </NoticeText>
            </NoticeContent>
            <NoticeTime>{notice.createdAt}</NoticeTime>
          </NoticeItem>
        ))}
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
      </NoticesList>
    </RecentNoticesSection>
  );
};

const RecentNoticesSection = styled.section`
  width: 100%;
`;

const RecentTitle = styled.div`
  align-self: stretch;
  color: var(--Text-default, var(--Grayscale-Gray7, #222));
  font-size: 1.25rem; /* 20px */
  font-weight: 700;
  line-height: 1.25rem; /* 20px */
  letter-spacing: -0.025rem; /* -0.4px */
  margin: 0;
  padding: 0;
  margin-bottom: 0.625rem; /* 10px */
`;

const NoticesList = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 0.0208rem solid var(--Primary-normal, #509bf7); /* 0.33px */
  border-bottom: 0.0208rem solid var(--Primary-normal, #509bf7); /* 0.33px */
`;

const NoticeItem = styled.div`
  display: flex;
  padding: 0.75rem 0; /* 12px */
  align-items: center;
  align-self: stretch;
  border-bottom: 0.0208rem solid var(--Text-caption, #888); /* 0.33px */
  height: ${(props) => (props.isEmpty ? '0.875rem' : 'auto')}; /* 14px */
`;

const NoticeContent = styled.div`
  display: flex;
  padding-right: 0.25rem; /* 4px */
  align-items: center;
  gap: 0.25rem; /* 4px */
  flex: 1 0 0;
`;

const NoticeName = styled.div`
  display: -webkit-box;
  width: 5.125rem; /* 82px */
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: var(--Text-caption, var(--Grayscale-Gray5, #888));
  text-overflow: ellipsis;

  font-size: 0.75rem; /* 12px */
  font-weight: 400;
  line-height: 0.75rem; /* 12px */
  letter-spacing: -0.015rem; /* -0.24px */
`;

const NoticeText = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  flex: 1 0 0;
  overflow: hidden;
  color: var(--Text-default, var(--Grayscale-Gray7, #222));
  text-overflow: ellipsis;
  cursor: pointer; /* Add pointer cursor to indicate it's clickable */

  font-size: 0.875rem; /* 14px */
  font-weight: 400;
  line-height: 0.875rem; /* 14px */
  letter-spacing: -0.0175rem; /* -0.28px */
`;

const NoticeTime = styled.div`
  margin-left: 0.25rem; /* 4px */
  color: var(--Text-caption, var(--Grayscale-Gray5, #888));

  font-size: 0.625rem; /* 10px */
  font-weight: 400;
  line-height: 0.625rem; /* 10px */
  letter-spacing: -0.0125rem; /* -0.2px */
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

export default RecentNotices;
