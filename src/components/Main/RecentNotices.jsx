import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getRecentNotice } from '../../api/Main/home';
import prevButtonSvg from '../../assets/svgs/prev_button.svg';
import nextButtonSvg from '../../assets/svgs/next_button.svg';

const ITEMS_PER_PAGE = 5;

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

        if (response.isSuccess) {
          setNotices(response.result.recentPostList);
          setIsNext(response.result.isNext);
          setTotalPages(response.result.totalPages);
          console.log(response);
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

  const displayedNotices = [
    ...notices,
    ...Array.from({ length: ITEMS_PER_PAGE - notices.length }, () => ({
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
                onClick={() => handleNoticeClick(notice.roomId, notice.postId)}
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
            <TotalPages>{totalPages === 0 ? 1 : totalPages}</TotalPages>
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
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.25rem;
  letter-spacing: -0.025rem;
  margin: 0;
  padding: 0;
  margin-bottom: 0.625rem;
`;

const NoticesList = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 0.0208rem solid var(--Primary-normal, #509bf7);
  border-bottom: 0.0208rem solid var(--Primary-normal, #509bf7);
`;

const NoticeItem = styled.div`
  display: flex;
  padding: 0.75rem 0;
  align-items: center;
  align-self: stretch;
  border-bottom: 0.0208rem solid var(--Text-caption, #888);
  height: ${(props) => (props.isEmpty ? '0.875rem' : 'auto')};
`;

const NoticeContent = styled.div`
  display: flex;
  padding-right: 0.25rem;
  align-items: center;
  gap: 0.25rem;
  flex: 1 0 0;
`;

const NoticeName = styled.div`
  display: -webkit-box;
  width: 5.125rem;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: var(--Text-caption, var(--Grayscale-Gray5, #888));
  text-overflow: ellipsis;

  font-size: 0.75rem;
  font-weight: 400;
  line-height: 0.75rem;
  letter-spacing: -0.015rem;
`;

const NoticeText = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  flex: 1 0 0;
  overflow: hidden;
  color: var(--Text-default, var(--Grayscale-Gray7, #222));
  text-overflow: ellipsis;
  cursor: pointer;

  font-size: 0.875rem;
  font-weight: 400;
  line-height: 0.875rem;
  letter-spacing: -0.0175rem;
`;

const NoticeTime = styled.div`
  margin-left: 0.25rem;
  color: var(--Text-caption, var(--Grayscale-Gray5, #888));

  font-size: 0.625rem;
  font-weight: 400;
  line-height: 0.625rem;
  letter-spacing: -0.0125rem;
`;

const Pagination = styled.div`
  display: flex;
  padding: 0.5rem 0;
  justify-content: center;
  align-items: center;
  gap: 1.375rem;
`;

const PageNumber = styled.div`
  display: flex;
  align-items: center;
  gap: 0.125rem;
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
  border: 0.0208rem solid var(--Primary-light-active, #c9e0fd);
  background: var(--Primary-light, #f4f9ff);
  cursor: pointer;
`;

export default RecentNotices;
